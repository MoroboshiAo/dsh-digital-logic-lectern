#!/usr/bin/env node
/**
 * dlquiz —— 从确定性计算生成答题题库，供 ui/index.html 使用（零依赖）
 *
 * 用法：
 *   node dlquiz.js --build            生成 ui/questions.js（默认 80 题）
 *   node dlquiz.js --build --count 20
 *   node dlquiz.js --check            用 dltool 逐题复核计算类答案
 */

import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const SKILL_ROOT = join(HERE, "..");
const DLTOOL = join(HERE, "dltool.js");
const UI_DIR = join(SKILL_ROOT, "ui");

/** 题目配图内联成 data URI，页面不再依赖静态路由。 */
function figureSource(relativePath) {
	const file = join(UI_DIR, relativePath);
	if (!existsSync(file)) {
		console.warn(`配图缺失：${relativePath}`);
		return relativePath;
	}
	return `data:image/svg+xml;base64,${readFileSync(file).toString("base64")}`;
}

/* ---------- 随机数：固定种子可复现 ---------- */

function mulberry32(seed) {
	let state = seed >>> 0;
	return function next() {
		state += 0x6d2b79f5;
		let t = state;
		t = Math.imul(t ^ (t >>> 15), t | 1);
		t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
		return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
	};
}

function makeRandom(seed) {
	const next = mulberry32(seed);
	return {
		next,
		int(min, max) {
			return min + Math.floor(next() * (max - min + 1));
		},
		pick(list) {
			return list[Math.floor(next() * list.length)];
		},
		shuffle(list) {
			const copy = [...list];
			for (let i = copy.length - 1; i > 0; i -= 1) {
				const j = Math.floor(next() * (i + 1));
				[copy[i], copy[j]] = [copy[j], copy[i]];
			}
			return copy;
		},
	};
}

/* ---------- 基础计算 ---------- */

function bitsOf(value, width) {
	return (value >>> 0).toString(2).padStart(width, "0");
}

function twoComplement(value, width) {
	return bitsOf(value < 0 ? 2 ** width + value : value, width);
}

function signMagnitude(value, width) {
	const sign = value < 0 ? 1 : 0;
	return bitsOf(sign * 2 ** (width - 1) + Math.abs(value), width);
}

function onesComplement(value, width) {
	return bitsOf(value < 0 ? 2 ** width + value - 1 : value, width);
}

function toGray(value) {
	return bitsOf(value ^ (value >> 1), 8).slice(-4);
}

const BCD_2421 = [0x0, 0x1, 0x2, 0x3, 0x4, 0xb, 0xc, 0xd, 0xe, 0xf];

/* ---------- 卡诺图：Q-M 最简与或式 ---------- */

function combineTerm(a, b) {
	let diff = -1;
	for (let i = 0; i < a.length; i += 1) {
		if (a[i] === b[i]) continue;
		if (a[i] === "-" || b[i] === "-") return null;
		if (diff !== -1) return null;
		diff = i;
	}
	return diff === -1 ? null : `${a.slice(0, diff)}-${a.slice(diff + 1)}`;
}

function primeImplicants(varCount, ones) {
	let current = new Set(ones.map((m) => bitsOf(m, varCount)));
	const primes = new Set();
	while (current.size > 0) {
		const terms = [...current];
		const used = new Set();
		const next = new Set();
		for (let i = 0; i < terms.length; i += 1) {
			for (let j = i + 1; j < terms.length; j += 1) {
				const merged = combineTerm(terms[i], terms[j]);
				if (merged === null) continue;
				used.add(terms[i]);
				used.add(terms[j]);
				next.add(merged);
			}
		}
		for (const term of terms) if (!used.has(term)) primes.add(term);
		current = next;
	}
	return [...primes];
}

function covers(term, minterm, varCount) {
	const bits = bitsOf(minterm, varCount);
	for (let i = 0; i < varCount; i += 1) {
		if (term[i] !== "-" && term[i] !== bits[i]) return false;
	}
	return true;
}

function minimalCover(primes, required, varCount) {
	const pool = primes
		.map((term) => ({ term, covered: required.filter((m) => covers(term, m, varCount)) }))
		.filter((item) => item.covered.length > 0);
	const chosen = [];
	const covered = new Set();

	for (const minterm of required) {
		const owners = pool.filter((item) => item.covered.includes(minterm));
		if (owners.length === 1) {
			chosen.push(owners[0].term);
			for (const m of owners[0].covered) covered.add(m);
		}
	}

	let todo = required.filter((m) => !covered.has(m));
	if (todo.length === 0) return chosen;

	const candidates = pool.filter((item) => !chosen.includes(item.term) && item.covered.some((m) => todo.includes(m)));

	// 精确搜索：先保证项数最少，同项数时文字最少
	let best = null;
	const search = (start, picked, hit) => {
		if (best !== null && picked.length >= best.length) return;
		if (todo.every((m) => hit.has(m))) {
			best = picked.slice();
			return;
		}
		for (let i = start; i < candidates.length; i += 1) {
			const added = candidates[i].covered.filter((m) => !hit.has(m));
			if (added.length === 0) continue;
			for (const m of added) hit.add(m);
			picked.push(candidates[i].term);
			search(i + 1, picked, hit);
			picked.pop();
			for (const m of added) hit.delete(m);
		}
	};
	search(0, [], new Set());
	if (best !== null) return [...chosen, ...best];

	const left = [...candidates];
	while (todo.length > 0) {
		let pick = null;
		for (const item of left) {
			const gain = item.covered.filter((m) => todo.includes(m)).length;
			if (gain === 0) continue;
			if (pick === null || gain > pick.gain) pick = { item, gain };
		}
		if (pick === null) break;
		chosen.push(pick.item.term);
		todo = todo.filter((m) => !pick.item.covered.includes(m));
	}
	return chosen;
}

function termToSop(term, vars) {
	const parts = [];
	for (let i = 0; i < term.length; i += 1) {
		if (term[i] === "-") continue;
		parts.push(term[i] === "1" ? vars[i] : `~${vars[i]}`);
	}
	return parts.length === 0 ? "1" : parts.join("·");
}

/* ---------- 选项组装 ---------- */

function buildOptions(correct, candidates, random) {
	const pool = [...new Set(candidates.map(String))].filter((item) => item !== String(correct));
	const distractors = random.shuffle(pool).slice(0, 3);
	const options = random.shuffle([String(correct), ...distractors]);
	return { options, answer: options.indexOf(String(correct)) };
}

/* ---------- 计算类题目 ---------- */

function questionBase(random) {
	const from = random.pick([2, 8, 10, 16]);
	let to = random.pick([2, 8, 10, 16].filter((base) => base !== from));
	const decimal = random.int(20, 400);
	const input = decimal.toString(from).toUpperCase();
	const correct = decimal.toString(to).toUpperCase();
	const candidates = [
		(decimal + 1).toString(to).toUpperCase(),
		(decimal - 1).toString(to).toUpperCase(),
		[...correct].reverse().join(""),
		(decimal * 2).toString(to).toUpperCase(),
	];
	const { options, answer } = buildOptions(correct, candidates, random);
	return {
		module: "M1",
		type: "base",
		difficulty: 1,
		stem: `十进制 ${decimal} 的 ${from} 进制写法是 ${input}，它换成 ${to} 进制是多少？`,
		options,
		answer,
		explain: `按权展开得十进制 ${decimal}，再除基取余并逆序读取，得到 ${correct}。`,
		verify: { args: ["base", "--from", String(from), "--to", String(to), "--value", input], field: "result" },
	};
}

function questionTwosComplement(random) {
	const value = -random.int(1, 120);
	const correct = twoComplement(value, 8);
	const { options, answer } = buildOptions(correct, [
		onesComplement(value, 8),
		signMagnitude(value, 8),
		twoComplement(value + 1, 8),
		twoComplement(-value, 8),
	], random);
	return {
		module: "M1",
		type: "code",
		difficulty: 2,
		stem: `8 位补码里，十进制 ${value} 的编码是哪一个？`,
		options,
		answer,
		explain: `先写原码 ${signMagnitude(value, 8)}，数值位取反得反码 ${onesComplement(value, 8)}，末位加一得补码 ${correct}。`,
		verify: { args: ["code", "--bits", "8", "--value", String(value)], field: "twosComplement" },
	};
}

function questionGray(random) {
	const value = random.int(1, 15);
	const correct = toGray(value);
	const { options, answer } = buildOptions(correct, [
		bitsOf(value, 4),
		toGray(value + 1 <= 15 ? value + 1 : value - 1),
		[...correct].reverse().join(""),
		bitsOf(value ^ (value >> 2), 4),
	], random);
	return {
		module: "M1",
		type: "gray",
		difficulty: 2,
		stem: `4 位二进制 ${bitsOf(value, 4)} 对应的格雷码是？`,
		options,
		answer,
		explain: `格雷码最高位与二进制相同，其余每位等于本位与高位异或，得到 ${correct}。`,
		verify: { args: ["gray", "--bits", "4", "--value", String(value)], field: "gray" },
	};
}

function questionBcd(random) {
	const digit = random.int(1, 9);
	const correct = bitsOf(BCD_2421[digit], 4);
	const { options, answer } = buildOptions(correct, [
		bitsOf(digit, 4),
		bitsOf(digit + 3, 4),
		bitsOf(BCD_2421[9 - digit], 4),
	], random);
	return {
		module: "M1",
		type: "bcd",
		difficulty: 3,
		stem: `十进制数字 ${digit} 的 2421 码是哪一组 4 位编码？`,
		options,
		answer,
		explain: `2421 码按权重 2、4、2、1 相加：${digit} 对应 ${correct}。8421 码则是 ${bitsOf(digit, 4)}。`,
	};
}

function questionMinterms(random) {
	const vars = ["A", "B", "C"];
	const pool = random.shuffle([0, 1, 2, 3, 4, 5, 6, 7]).slice(0, random.int(3, 5)).sort((a, b) => a - b);
	const correct = `Σm(${pool.join(", ")})`;
	const missing = pool.slice(0, -1);
	const extra = [...pool, [0, 1, 2, 3, 4, 5, 6, 7].find((m) => !pool.includes(m))].sort((a, b) => a - b);
	const complement = [0, 1, 2, 3, 4, 5, 6, 7].filter((m) => !pool.includes(m));
	const { options, answer } = buildOptions(correct, [
		`Σm(${missing.join(", ")})`,
		`Σm(${extra.join(", ")})`,
		`Σm(${complement.join(", ")})`,
	], random);
	return {
		module: "M2",
		type: "minterms",
		difficulty: 2,
		stem: `函数在 ${pool.map((m) => bitsOf(m, 3)).join("、")} 这几组输入下取值为 1（变量顺序 A B C），它的最小项之和怎么写？`,
		options,
		answer,
		explain: `把每组取值为 1 的输入按 A B C 的二进制读出编号，就是 ${correct}。`,
	};
}

function questionKmap(random) {
	const vars = ["A", "B", "C"];
	const ones = random.shuffle([0, 1, 2, 3, 4, 5, 6, 7]).slice(0, random.int(4, 5)).sort((a, b) => a - b);
	const primes = primeImplicants(3, ones);
	const terms = minimalCover(primes, ones, 3);
	const correct = terms.map((term) => termToSop(term, vars)).join(" + ");
	const longer = [...correct.split(" + "), termToSop(primes.find((p) => !terms.includes(p)) ?? primes[0], vars)].join(" + ");
	const wrongLiteral = correct.replace("~", "");
	const { options, answer } = buildOptions(correct, [
		longer,
		wrongLiteral,
		[...terms].reverse().map((term) => termToSop(term, vars)).join("·"),
	], random);
	return {
		module: "M2",
		type: "kmap",
		difficulty: 3,
		stem: `三变量函数 F = Σm(${ones.join(", ")})，在卡诺图上化简后的最简与或式是？`,
		options,
		answer,
		explain: `合并相邻的 1，可得到质蕴含项 ${primes.map((p) => termToSop(p, vars)).join("、")}，最简式取 ${correct}。`,
	};
}

function questionHamming(random) {
	const data = random.int(0, 15);
	const bits = bitsOf(data, 4);
	const [d1, d2, d3, d4] = bits.split("").map(Number);
	const p1 = d1 ^ d2 ^ d4;
	const p2 = d1 ^ d3 ^ d4;
	const p4 = d2 ^ d3 ^ d4;
	const correct = `${p1}${p2}${d1}${p4}${d2}${d3}${d4}`;
	const flip = (text, index) => `${text.slice(0, index)}${text[index] === "1" ? "0" : "1"}${text.slice(index + 1)}`;
	const { options, answer } = buildOptions(correct, [
		flip(correct, 0),
		flip(correct, 3),
		`${p1}${p2}${d1}${p4}${d3}${d2}${d4}`,
	], random);
	return {
		module: "M1",
		type: "hamming",
		difficulty: 3,
		stem: `对数据 ${bits} 做偶校验的 (7,4) 海明编码，结果（第 1 到第 7 位）是？`,
		options,
		answer,
		explain: `p1=⊕(3,5,7)=${p1}，p2=⊕(3,6,7)=${p2}，p4=⊕(5,6,7)=${p4}，按 p1 p2 d1 p4 d2 d3 d4 排列得 ${correct}。`,
		verify: { args: ["hamming", "--data", bits], field: "code" },
	};
}

function questionHammingCheck(random) {
	const data = random.int(0, 15);
	const bits = bitsOf(data, 4);
	const [d1, d2, d3, d4] = bits.split("").map(Number);
	const p1 = d1 ^ d2 ^ d4;
	const p2 = d1 ^ d3 ^ d4;
	const p4 = d2 ^ d3 ^ d4;
	const code = `${p1}${p2}${d1}${p4}${d2}${d3}${d4}`;
	const position = random.int(1, 7);
	const index = position - 1;
	const received = `${code.slice(0, index)}${code[index] === "1" ? "0" : "1"}${code.slice(index + 1)}`;
	const others = [1, 2, 3, 4, 5, 6, 7].filter((item) => item !== position);
	const { options, answer } = buildOptions(String(position), others.map(String), random);
	return {
		module: "M1",
		type: "hamming",
		difficulty: 3,
		stem: `接收到的 7 位海明码是 ${received}（偶校验，(7,4) 码），按综合症判断，第几位出错？`,
		options,
		answer,
		explain: `对 p1、p2、p4 三组分别求偶校验，综合症 S4S2S1 的十进制值就是出错位号 ${position}；把该位取反即可纠正。`,
		verify: { args: ["hamming", "--check", received], field: "position" },
	};
}

/* ---------- 概念类题目 ---------- */

const CONCEPTS = [
	{
		module: "M1", difficulty: 1,
		stem: "8 位补码 10000000 表示十进制几？",
		correct: "−128",
		wrong: ["128", "0", "−127"],
		explain: "补码的负数区间比正数多一个，10000000 是 −128。它没有对应的原码和反码。",
	},
	{
		module: "M1", difficulty: 2,
		stem: "关于格雷码，下面哪个说法正确？",
		correct: "相邻两个码只有一位不同，且它没有位权",
		wrong: ["它是有权码，按 8-4-2-1 求和", "相邻两个码可以有两位不同", "它只能表示十进制数字"],
		explain: "格雷码靠相邻性工作，不能按位权求和，常用于角度编码和跨时钟域传地址。",
	},
	{
		module: "M2", difficulty: 2,
		stem: "卡诺图里两个相邻的 1 合并，能消去几个变量？",
		correct: "一个",
		wrong: ["两个", "三个", "一个都消不掉"],
		explain: "每合并一次消去一个变量，四个 1 成圈消两个，八个成圈消三个。",
	},
	{
		module: "M2", difficulty: 3,
		stem: "卡诺图化简时，无关项应该怎么处理？",
		correct: "按需取用，能让圈更大就用，不用也合法",
		wrong: ["必须全部圈进去", "必须全部当成 1", "必须全部当成 0，不许参与化简"],
		explain: "无关项的值不影响功能，参与化简只是为了让圈更大，不用它也不会算错。",
	},
	{
		module: "M3", difficulty: 2,
		stem: "74LS138 译码器被选中时，对应输出端是什么电平？",
		correct: "低电平",
		wrong: ["高电平", "高阻态", "翻转状态"],
		explain: "138 的输出是低有效，选中的那一路为 0，其余为 1。",
	},
	{
		module: "M3", difficulty: 3,
		stem: "用 8 选 1 数据选择器实现三变量函数，变量应该怎么接？",
		correct: "三个变量都接地址端，八个数据端接 0 或 1",
		wrong: ["三个变量都接数据端", "最高位接地址端，其余接数据端", "变量接使能端"],
		explain: "8 选 1 有 3 根地址线，正好对应三个变量；把真值表的 8 个输出值接到数据端即可。",
	},
	{
		module: "M3", difficulty: 3,
		stem: "组合逻辑中出现静态 1 型冒险，通常由什么形式引起？",
		correct: "A + A' 这类形式，在 A 翻转瞬间出现窄脉冲",
		wrong: ["两个输入同时为 0", "输出端接了电容", "门电路的延迟完全相同"],
		explain: "同一信号经不同路径到达，延迟不同，导致短暂输出错误；加冗余项可以消除。",
	},
	{
		module: "M4", difficulty: 2,
		stem: "锁存器和触发器最本质的区别是什么？",
		correct: "锁存器电平触发，触发器边沿触发",
		wrong: ["锁存器只能存 1 位，触发器能存多位", "触发器不需要时钟", "锁存器是组合逻辑"],
		explain: "关键在触发方式：使能期间透明的叫锁存器，只在跳变沿采样的叫触发器。",
	},
	{
		module: "M4", difficulty: 3,
		stem: "RS 锁存器在 R=S=1 时撤掉输入，输出会怎样？",
		correct: "不确定，可能停在任意一侧",
		wrong: ["一定回到 0", "一定保持在 1", "一定开始振荡"],
		explain: "R=S=1 是禁用组合，撤掉后两个门互相锁定，结果取决于延迟差异。",
	},
	{
		module: "M4", difficulty: 2,
		stem: "Moore 型状态机的输出取决于什么？",
		correct: "只取决于当前状态",
		wrong: ["只取决于当前输入", "同时取决于当前状态和当前输入", "取决于时钟频率"],
		explain: "Moore 的输出挂在状态上，Mealy 的输出还随输入变化。",
	},
	{
		module: "M5", difficulty: 2,
		stem: "把 1K×4 的芯片扩成 4K×8，一共需要几片？",
		correct: "8 片",
		wrong: ["2 片", "4 片", "16 片"],
		explain: "字方向扩 4 倍、位方向扩 2 倍，共 8 片；低 10 位地址进片内，高 2 位进译码器。",
	},
	{
		module: "M5", difficulty: 3,
		stem: "4K×8 的存储器需要多少根地址线？",
		correct: "12 根",
		wrong: ["8 根", "10 根", "13 根"],
		explain: "4K = 2¹²，所以地址线是 12 根；8 是数据位宽，不参与地址。",
	},
	{
		module: "M6", difficulty: 2,
		stem: "FPGA 中的 4 输入 LUT 本质是什么？",
		correct: "一个 16×1 的存储单元，靠查表得到输出",
		wrong: ["四个与门", "一个 4 位寄存器", "一个译码器"],
		explain: "LUT 把输入当地址去取预先写入的值，所以能实现任意 4 变量函数。",
	},
	{
		module: "M6", difficulty: 3,
		stem: "CPLD 与 FPGA 在掉电行为上的典型区别是？",
		correct: "CPLD 配置不丢，FPGA 基于 SRAM 掉电丢配置",
		wrong: ["两者都丢配置", "两者都不丢配置", "FPGA 不丢，CPLD 丢"],
		explain: "CPLD 多为 E²PROM 工艺，FPGA 多为 SRAM 工艺，上电要重新加载比特流。",
	},
	{
		module: "M7", difficulty: 3,
		stem: "微程序控制器里的微指令存在哪里？",
		correct: "控制存储器中，是硬件的一部分",
		wrong: ["用户程序的内存里", "通用寄存器里", "硬盘的普通文件里"],
		explain: "微指令直接控制门电路，属于硬件设计，不是用户编写的程序。",
	},
	{
		module: "M7", difficulty: 2,
		stem: "硬布线控制器和微程序控制器，通常怎么选？",
		correct: "要快选硬布线，要易改选微程序",
		wrong: ["要快选微程序，要易改选硬布线", "两者速度完全一样", "微程序一定更快"],
		explain: "硬布线的控制信号直接由组合逻辑产生，快但改起来要动电路；微程序改的是存储内容。",
	},
	{
		module: "M8", difficulty: 2,
		stem: "时序逻辑的 always 块里应该用哪种赋值？",
		correct: "非阻塞赋值 <=",
		wrong: ["阻塞赋值 =", "两种混用", "continuous assign"],
		explain: "非阻塞赋值在时间步结束时统一更新，能模拟真实触发器的同时翻转。",
	},
	{
		module: "M8", difficulty: 3,
		stem: "组合逻辑的 always 块里漏写 else，综合工具会推断出什么？",
		correct: "锁存器",
		wrong: ["触发器", "加法器", "三态门"],
		explain: "条件不满足时必须保持原值，这种「保持」就是锁存行为。补全所有分支即可消除。",
	},
	{
		module: "M8", difficulty: 2,
		stem: "initial 块通常用于什么场合？",
		correct: "仿真激励，一般不用于可综合设计",
		wrong: ["描述上电复位电路", "描述组合逻辑", "替代 always 块"],
		explain: "initial 只在 0 时刻执行一次，多数综合工具不接受它作为硬件描述。",
	},
	{
		module: "M8", difficulty: 3,
		stem: "Verilog 的 assign 语句描述的是什么？",
		correct: "组合逻辑，输出随输入连续变化",
		wrong: ["时序逻辑，每个时钟沿更新", "初始化赋值，只执行一次", "模块端口声明"],
		explain: "assign 是连续赋值，等价于一根线加一个门，没有时钟概念。",
	},
	{
		module: "M1", difficulty: 1,
		stem: "十六进制 2F 换成十进制是多少？",
		correct: "47",
		wrong: ["45", "51", "2F"],
		explain: "2×16+15=47。十六进制中 F 代表 15。",
	},
	{
		module: "M1", difficulty: 2,
		stem: "八进制数 573.7 的十六进制写法是？",
		correct: "(17B.E)₁₆",
		wrong: ["(17C.7)₁₆", "(17B.7)₁₆", "(17C.E)₁₆"],
		explain: "先化成十进制 379.875，整数部分 379=0x17B，小数 0.875=0xE。",
	},
	{
		module: "M1", difficulty: 1,
		stem: "8421BCD 码 1001 0110 表示十进制几？",
		correct: "96",
		wrong: ["69", "156", "10010110"],
		explain: "每四位一组：1001 是 9，0110 是 6，按高低位拼成 96。",
	},
	{
		module: "M1", difficulty: 2,
		stem: "余 3 码 0101 表示十进制数字几？",
		correct: "2",
		wrong: ["5", "8", "12"],
		explain: "余 3 码等于 8421 码加 3：0101 按 8421 读是 5，减 3 得 2。",
	},
	{
		module: "M1", difficulty: 2,
		stem: "数据 1011 采用奇校验，校验位应取什么？",
		correct: "0",
		wrong: ["1", "无法确定", "与偶校验相同"],
		explain: "1011 里已有三个 1，是奇数；校验位取 0 后 1 的个数仍为奇数。",
	},
	{
		module: "M1", difficulty: 1,
		stem: "8 位补码 11111111 表示十进制几？",
		correct: "−1",
		wrong: ["−0", "255", "−127"],
		explain: "补码全 1 按位取反加一得 1，符号为负，所以是 −1。",
	},
	{
		module: "M1", difficulty: 2,
		stem: "十进制 −5 的 8 位反码是哪一个？",
		correct: "11111010",
		wrong: ["11111011", "10000101", "00000101"],
		explain: "先写 +5 的 00000101，逐位取反得反码 11111010；再加一才是补码。",
	},
	{
		module: "M1", difficulty: 2,
		stem: "2421 码 1111 表示十进制数字几？",
		correct: "9",
		wrong: ["15", "6", "7"],
		explain: "2421 码按 2、4、2、1 加权：2+4+2+1=9。",
	},
	{
		module: "M1", difficulty: 3,
		stem: "格雷码 0101 对应的二进制数是什么？",
		correct: "0110",
		wrong: ["0100", "1100", "1010"],
		explain: "最高位照抄得 0，其后每位等于上一位二进制结果与本位格雷码异或，得 0110。",
	},
	{
		module: "M1", difficulty: 2,
		stem: "8 位补码能表示的整数范围是？",
		correct: "−128 到 127",
		wrong: ["−127 到 127", "0 到 255", "−128 到 128"],
		explain: "n 位补码范围是 −2ⁿ⁻¹ 到 2ⁿ⁻¹−1；负数比正数多一个。",
	},
	{
		module: "M2", difficulty: 2,
		stem: "逻辑函数 F=A+A′B 化简后等于？",
		correct: "A+B",
		wrong: ["A", "B", "AB"],
		explain: "A+A′B=(A+A′)(A+B)=A+B，用的是吸收律和分配律。",
	},
	{
		module: "M2", difficulty: 2,
		stem: "三变量 A、B、C 的最小项 m5 对应哪组输入？",
		correct: "101",
		wrong: ["011", "110", "010"],
		explain: "5 的二进制是 101，按 A B C 顺序读，即 A=1、B=0、C=1。",
	},
	{
		module: "M2", difficulty: 2,
		stem: "卡诺图中四个相邻的 1 圈在一起，能消去几个变量？",
		correct: "2 个",
		wrong: ["1 个", "3 个", "4 个"],
		explain: "2 个相邻消 1 个变量，4 个消 2 个，8 个消 3 个。",
	},
	{
		module: "M2", difficulty: 1,
		stem: "三变量卡诺图一共有多少个格子？",
		correct: "8 个",
		wrong: ["4 个", "6 个", "16 个"],
		explain: "n 变量卡诺图有 2ⁿ 格，三变量是 8 格。",
	},
	{
		module: "M2", difficulty: 3,
		stem: "F=AB+C 的反函数 F′ 是？",
		correct: "(A′+B′)·C′",
		wrong: ["A′B′+C′", "(A+B)·C", "A′B′C′"],
		explain: "对整个式子用德摩根定律：先变或为与，再逐项取反，得 (A′+B′)·C′。",
	},
	{
		module: "M2", difficulty: 3,
		stem: "F=AB+C 的对偶式是？",
		correct: "(A+B)·C",
		wrong: ["A′B′+C′", "AB+C", "(A+B)+C"],
		explain: "对偶式把与换成或、或换成与，0 和 1 互换，变量保持不变。",
	},
	{
		module: "M2", difficulty: 2,
		stem: "关于最小项，下面哪个说法正确？",
		correct: "任意两个不同最小项之积恒为 0",
		wrong: ["任意两个最小项之和恒为 1", "最小项之间互为反函数", "最小项的变量可以重复"],
		explain: "每个最小项只在一种输入组合下为 1，所以不同最小项不可能同时为 1。",
	},
	{
		module: "M2", difficulty: 3,
		stem: "卡诺图化简时，无关项的取值原则是？",
		correct: "按需取 0 或 1，能让圈更大就用",
		wrong: ["一律取 0", "一律取 1", "必须成对出现才能用"],
		explain: "无关项对应不会出现的输入，取 0 或 1 都不影响功能；化简时只为合并服务。",
	},
	{
		module: "M2", difficulty: 2,
		stem: "判断两个逻辑函数是否相等，最可靠的方法是？",
		correct: "列出真值表逐行比较",
		wrong: ["看表达式长得是否一样", "看变量个数是否相同", "看卡诺图圈数是否相同"],
		explain: "表达式形式可以不同而功能相同；真值表相同才是函数相等的定义。",
	},
	{
		module: "M3", difficulty: 1,
		stem: "半加器的进位输出 C 等于？",
		correct: "AB",
		wrong: ["A+B", "A⊕B", "AB′"],
		explain: "只有 A、B 同时为 1 才进位，所以 C=AB；本位和是 A⊕B。",
	},
	{
		module: "M3", difficulty: 2,
		stem: "全加器的本位和 S 等于？",
		correct: "A⊕B⊕Cin",
		wrong: ["A+B+Cin", "AB+Cin", "A⊕B"],
		explain: "三个输入中 1 的个数为奇数时本位为 1，即三次异或。",
	},
	{
		module: "M3", difficulty: 2,
		stem: "八选一数据选择器需要几根地址线？",
		correct: "3 根",
		wrong: ["2 根", "4 根", "8 根"],
		explain: "8=2³，3 根地址线正好选中 8 路数据中的一路。",
	},
	{
		module: "M3", difficulty: 1,
		stem: "8 线−3 线编码器的输出端有几根？",
		correct: "3 根",
		wrong: ["8 根", "2 根", "4 根"],
		explain: "8 个输入用 3 位二进制编号即可区分，所以输出 3 根。",
	},
	{
		module: "M3", difficulty: 3,
		stem: "组合逻辑中消除静态冒险的常用方法是？",
		correct: "增加冗余项，把相邻的圈搭接起来",
		wrong: ["提高时钟频率", "把所有门换成与非门", "减少输入变量个数"],
		explain: "冒险来自不同路径的延迟差；补一个冗余项可让两条路径互相覆盖。",
	},
	{
		module: "M3", difficulty: 2,
		stem: "74LS138 译码器有几个输出端？",
		correct: "8 个",
		wrong: ["3 个", "4 个", "16 个"],
		explain: "138 是 3 线−8 线译码器，3 根地址输入对应 8 个低有效输出。",
	},
	{
		module: "M3", difficulty: 3,
		stem: "用数据选择器实现任意组合函数，依据是什么？",
		correct: "把真值表的输出值接到对应数据端",
		wrong: ["内部有触发器可以存储结果", "地址端可以编程", "输出端能自动化简"],
		explain: "地址端接变量，数据端接 0 或 1，选择器就按真值表逐行输出。",
	},
	{
		module: "M3", difficulty: 3,
		stem: "把 3 线−8 线译码器改作数据分配器，数据应从哪个引脚输入？",
		correct: "使能端",
		wrong: ["地址端", "输出端", "电源端"],
		explain: "地址端选通道，把数据加到使能端，被选中的那一路输出就随数据变化。",
	},
	{
		module: "M4", difficulty: 2,
		stem: "D 触发器的特性方程是？",
		correct: "Q*=D",
		wrong: ["Q*=JQ′+K′Q", "Q*=T⊕Q", "Q*=D′"],
		explain: "D 触发器在时钟沿把输入端 D 的值送到输出，次态等于 D。",
	},
	{
		module: "M4", difficulty: 2,
		stem: "JK 触发器在 J=K=1 时，次态会怎样？",
		correct: "翻转",
		wrong: ["保持", "置 0", "置 1"],
		explain: "J=K=1 是计数状态，每个时钟沿输出取反。",
	},
	{
		module: "M4", difficulty: 2,
		stem: "同步计数器与异步计数器的主要区别是？",
		correct: "各级触发器是否由同一个时钟同时触发",
		wrong: ["模值大小不同", "能否可逆计数", "有没有进位输出"],
		explain: "同步计数器所有触发器共用时钟；异步计数器把前级输出当时钟，逐级翻转。",
	},
	{
		module: "M4", difficulty: 1,
		stem: "4 位二进制计数器的模是多少？",
		correct: "16",
		wrong: ["8", "15", "10"],
		explain: "4 位可表示 0000 到 1111 共 16 个状态，计满 16 个脉冲回绕。",
	},
	{
		module: "M4", difficulty: 2,
		stem: "4 位串入串出移位寄存器，把 4 位数据全部移入需要几个时钟？",
		correct: "4 个",
		wrong: ["1 个", "3 个", "8 个"],
		explain: "每个时钟移入一位，4 位就要 4 个时钟；再移出同样需要 4 个。",
	},
	{
		module: "M4", difficulty: 2,
		stem: "时序逻辑电路的输出取决于什么？",
		correct: "当前输入和电路原来的状态",
		wrong: ["只取决于当前输入", "只取决于原来的状态", "只取决于时钟频率"],
		explain: "时序逻辑有记忆，输出由输入与现态共同决定，这也是它有别于组合逻辑的地方。",
	},
	{
		module: "M4", difficulty: 3,
		stem: "主从 JK 触发器在 CP=1 期间输出会怎样？",
		correct: "保持不变，到 CP 下降沿才更新",
		wrong: ["随 J、K 立即变化", "每半个周期翻转一次", "进入不定状态"],
		explain: "CP=1 时主触发器接收、从触发器封锁；下降沿从触发器才接收主触发器的结果。",
	},
	{
		module: "M4", difficulty: 3,
		stem: "设计同步时序电路时，第一步通常做什么？",
		correct: "根据功能要求画出原始状态图或状态表",
		wrong: ["先画电路图", "先列出全部真值表", "先选定触发器型号"],
		explain: "先把功能变成状态与转移关系，再谈状态化简、编码和触发器选型。",
	},
	{
		module: "M5", difficulty: 2,
		stem: "DRAM 需要定期刷新的原因是？",
		correct: "靠电容存电荷，电荷会泄漏",
		wrong: ["读写速度太快", "存储容量太小", "掉电后数据会丢失"],
		explain: "DRAM 单元是一个电容加一个管子，电荷会漏掉，所以必须周期性刷新。",
	},
	{
		module: "M5", difficulty: 2,
		stem: "SRAM 的存储单元本质上是什么？",
		correct: "双稳态触发器",
		wrong: ["一个电容", "一根熔丝", "一个浮栅管"],
		explain: "SRAM 用六个管子构成双稳态，只要供电就保持，不需要刷新。",
	},
	{
		module: "M5", difficulty: 2,
		stem: "1K×8 的存储器需要几根地址线？",
		correct: "10 根",
		wrong: ["8 根", "11 根", "16 根"],
		explain: "1K=2¹⁰，地址线 10 根；8 是数据位宽，不参与地址。",
	},
	{
		module: "M5", difficulty: 2,
		stem: "用 1K×4 的芯片组成 1K×8 的存储器，需要几片？",
		correct: "2 片",
		wrong: ["4 片", "8 片", "1 片"],
		explain: "字数不变、位宽翻倍，属于位扩展，两片并排共用地址即可。",
	},
	{
		module: "M5", difficulty: 1,
		stem: "ROM 在掉电后数据会怎样？",
		correct: "保持不变",
		wrong: ["全部丢失", "变成全 1", "需要重新刷新"],
		explain: "ROM 是非易失性存储器，断电后内容仍在；RAM 才需要持续供电。",
	},
	{
		module: "M5", difficulty: 2,
		stem: "存储器地址译码器的作用是？",
		correct: "根据高位地址选中对应的芯片或存储单元",
		wrong: ["放大地址信号", "保存写入的数据", "产生读写时钟"],
		explain: "地址译码把地址空间划分开，避免多片存储器同时被选中。",
	},
	{
		module: "M6", difficulty: 3,
		stem: "4 输入 LUT 需要多少位配置数据？",
		correct: "16 位",
		wrong: ["4 位", "8 位", "32 位"],
		explain: "4 个输入有 16 种组合，每种组合对应一位输出值，所以是 16 位。",
	},
	{
		module: "M6", difficulty: 3,
		stem: "PAL 器件的阵列结构是？",
		correct: "与阵列可编程，或阵列固定",
		wrong: ["与、或阵列都可编程", "与阵列固定，或阵列可编程", "两个阵列都固定"],
		explain: "PAL 用可编程与阵列产生乘积项，或阵列出厂已连好；PLA 才是两者都可编程。",
	},
	{
		module: "M6", difficulty: 2,
		stem: "基于 SRAM 工艺的 FPGA 掉电后配置会怎样？",
		correct: "丢失，上电需要重新加载",
		wrong: ["保留，随时可用", "变成只读", "自动恢复出厂设置"],
		explain: "SRAM 掉电即失，比特流通常存在外部 Flash，上电时再装入 FPGA。",
	},
	{
		module: "M6", difficulty: 3,
		stem: "CPLD 的基本结构通常由什么组成？",
		correct: "可编程与或阵列加宏单元",
		wrong: ["LUT 加触发器", "只有分立门电路", "微程序控制存储器"],
		explain: "CPLD 沿用 PAL 的与或阵列，再配宏单元和互连，适合组合逻辑与简单时序。",
	},
	{
		module: "M6", difficulty: 3,
		stem: "GAL 器件的输出逻辑宏单元主要作用是什么？",
		correct: "配置输出极性、寄存器和三态方式",
		wrong: ["放大输出电流", "存储用户程序", "产生系统时钟"],
		explain: "宏单元让同一器件可以按需配成组合输出、寄存输出或双向口。",
	},
	{
		module: "M7", difficulty: 3,
		stem: "ASM 图中的状态框表示什么？",
		correct: "一个时钟周期内保持的状态及该状态的输出",
		wrong: ["一个组合逻辑门", "一条微指令", "一个输入变量"],
		explain: "状态框对应现态，框内写输出；框之间用判断框按条件分支。",
	},
	{
		module: "M7", difficulty: 2,
		stem: "微程序控制器的控制信号来自哪里？",
		correct: "控制存储器中的微指令",
		wrong: ["用户程序的内存", "组合逻辑门的直接输出", "数据总线"],
		explain: "每条微指令的各个字段直接控制门电路，属于硬件的一部分。",
	},
	{
		module: "M7", difficulty: 2,
		stem: "硬布线控制器的主要特点是？",
		correct: "速度快，但修改控制逻辑困难",
		wrong: ["速度慢，但容易修改", "速度与微程序控制器完全相同", "不需要时钟信号"],
		explain: "控制信号由组合逻辑直接产生，路径短所以快；要改功能就得改电路。",
	},
	{
		module: "M7", difficulty: 2,
		stem: "数据通路主要完成什么任务？",
		correct: "在各部件之间传送数据并完成运算",
		wrong: ["产生全部控制信号", "存储微程序", "对指令地址进行译码"],
		explain: "数据通路管数据怎么走、在哪算；控制信号由控制器给出。",
	},
	{
		module: "M7", difficulty: 3,
		stem: "微指令中的下地址字段作用是什么？",
		correct: "指出下一条微指令的地址",
		wrong: ["指出操作数地址", "指出主存地址", "指出 I/O 端口号"],
		explain: "微程序按微指令顺序执行，下地址字段决定下一步跳到哪里。",
	},
	{
		module: "M8", difficulty: 2,
		stem: "Verilog 中 reg 与 wire 的主要区别是？",
		correct: "reg 可在 always 中赋值并保持，wire 需要连续赋值",
		wrong: ["reg 一定综合成寄存器", "wire 能存多位而 reg 只能存一位", "两者完全等价"],
		explain: "reg 只是过程赋值的目标，是否综合成触发器取决于写法；wire 表示连线般的连续驱动。",
	},
	{
		module: "M8", difficulty: 2,
		stem: "描述组合逻辑的 always 块里应使用哪种赋值？",
		correct: "阻塞赋值 =",
		wrong: ["非阻塞赋值 <=", "两种混用", "只能用 assign"],
		explain: "组合逻辑要求按书写顺序立即得到结果，阻塞赋值符合这一语义。",
	},
	{
		module: "M8", difficulty: 2,
		stem: "always @(*) 的敏感列表等价于什么？",
		correct: "块内读取到的所有信号",
		wrong: ["只有时钟信号", "只有输出信号", "工程里的全部信号"],
		explain: "@(*) 由工具自动补全敏感列表，避免漏写信号导致仿真与综合不一致。",
	},
	{
		module: "M8", difficulty: 2,
		stem: "位拼接 {2'b10, 2'b01} 的结果是？",
		correct: "4'b1001",
		wrong: ["4'b1010", "2'b11", "4'b0101"],
		explain: "拼接按书写顺序左高右低，10 在前、01 在后，得到 1001。",
	},
	{
		module: "M8", difficulty: 2,
		stem: "testbench 中产生周期性时钟的常见写法是？",
		correct: "initial 置初值，再用 always #5 clk=~clk",
		wrong: ["assign clk=~clk", "initial clk=~clk 单独一行", "always @(clk) clk=~clk"],
		explain: "always 加延时反复取反才能持续翻转；assign 自引用和敏感列表写法都不成立。",
	},
	{
		module: "M8", difficulty: 3,
		stem: "阻塞赋值的特点是？",
		correct: "按书写顺序立即执行并更新",
		wrong: ["所有语句并行更新", "延迟到时间步结束才更新", "只能用于时序逻辑"],
		explain: "阻塞赋值像普通程序语句，前一句的结果立刻影响后一句。",
	},
	{
		module: "M8", difficulty: 3,
		stem: "`timescale 1ns/1ps 的含义是？",
		correct: "时间单位 1ns，时间精度 1ps",
		wrong: ["时钟周期 1ns，频率 1ps", "延时 1ns，误差 1ps", "单位 1ps，精度 1ns"],
		explain: "斜杠前是单位，斜杠后是精度；精度不能大于单位。",
	},
	{
		module: "M8", difficulty: 2,
		stem: "Verilog 中 parameter 的作用是？",
		correct: "定义模块内常量，实例化时可覆盖",
		wrong: ["定义可变的寄存器", "定义模块端口", "产生时钟信号"],
		explain: "parameter 常用来写位宽和延时，让同一模块在不同实例中取不同值。",
	},
	{
		module: "M1", difficulty: 1,
		stem: "8421 码中 1010 到 1111 这六组编码为什么不用？",
		correct: "它们不对应 0 到 9，属于无效码",
		wrong: ["它们表示 10 到 15", "它们表示负数", "它们是校验位"],
		explain: "一位十进制数字只需要 0000 到 1001 十组编码，其余六组不定义，出现时按错误处理。",
	},
	{
		module: "M1", difficulty: 1,
		stem: "数字波形里的上升时间指哪一段时间？",
		correct: "电平从低变高所经历的时间",
		wrong: ["高电平持续的宽度", "两个上升沿的间隔", "从高电平降到低电平的时间"],
		explain: "理想矩形脉冲的边沿是垂直的，实际电路有过渡过程，上升时间描述这段过渡的快慢。",
	},
	{
		module: "M1", difficulty: 2,
		stem: "门电路的扇出系数表示什么？",
		correct: "一个输出端能可靠驱动的同类输入端个数",
		wrong: ["芯片的引脚总数", "输出端可接的电源个数", "输入端能接的信号源个数"],
		explain: "扇出受输出电流能力限制，超过扇出系数后电平会偏离规定范围。",
	},
	{
		module: "M1", difficulty: 2,
		stem: "余三码与 8421 码之间是什么关系？",
		correct: "8421 码加 0011 得到余三码",
		wrong: ["8421 码减 0011 得到余三码", "两者按位取反", "余三码是 8421 码左移一位"],
		explain: "余三码由 8421 码加 3 得到，因此得名；它属于无权码，不能按位权求和。",
	},
	{
		module: "M2", difficulty: 2,
		stem: "标准与或式（最小项之和）的特点是？",
		correct: "每个乘积项都包含全部变量，且对应一个最小项",
		wrong: ["乘积项的数量最少", "每个变量在整式中只出现一次", "只能含两个变量"],
		explain: "标准与或式把真值表中取值为 1 的每一行写成一个最小项再相加，形式唯一但不一定最简。",
	},
	{
		module: "M2", difficulty: 3,
		stem: "用输出低有效的 3-8 译码器实现三变量函数，输出端应该怎么接？",
		correct: "把取值为 1 的最小项对应的输出端接到与非门",
		wrong: ["把八个输出端全部接到或门", "把最小项接到数据端", "把变量接到使能端"],
		explain: "译码器输出是 m′，取反后相与，用与非门即可得到这些最小项之和。",
	},
	{
		module: "M2", difficulty: 2,
		stem: "数据分配器与译码器的区别是什么？",
		correct: "分配器把一路数据送到地址选中的输出，译码器只按地址选通输出",
		wrong: ["分配器输出模拟量，译码器输出数字量", "分配器没有地址端", "译码器只能有一个输出"],
		explain: "两者结构相近，分配器多了一个数据输入端，被选中的那一路输出等于输入数据。",
	},
	{
		module: "M2", difficulty: 2,
		stem: "优先编码器和普通编码器的关键区别是？",
		correct: "优先编码器允许多个输入同时有效，按优先级取最高",
		wrong: ["优先编码器输出位数更多", "普通编码器允许多个输入同时有效", "两者功能完全相同"],
		explain: "普通编码器要求同一时刻只有一个输入有效，优先编码器则给每个输入排定优先级，避免冲突。",
	},
	{
		module: "M2", difficulty: 3,
		stem: "全加器进位输出 Cout 的表达式是？",
		correct: "AB + Cin(A ⊕ B)",
		wrong: ["A ⊕ B ⊕ Cin", "AB + Cin", "AB · Cin"],
		explain: "两个本位同时为 1 会进位；本位只有一个为 1 时，进位输入再把它带上去。",
	},
	{
		module: "M2", difficulty: 1,
		stem: "共阳七段数码管中，某段的控制码为 0 时该段处于什么状态？",
		correct: "点亮",
		wrong: ["熄灭", "高阻", "闪烁"],
		explain: "共阳接法把七段的阳极接高电平，阴极给低电平时才有电流，所以 0 点亮、1 熄灭。",
	},
	{
		module: "M3", difficulty: 2,
		stem: "触发器的建立时间指什么？",
		correct: "时钟沿到来前数据必须稳定的最短时间",
		wrong: ["时钟沿过后数据还要保持的时间", "输出从 0 变到 1 的时间", "一个时钟周期"],
		explain: "建立时间不足，触发器可能采到正在跳变的数据，进入亚稳态。",
	},
	{
		module: "M3", difficulty: 2,
		stem: "同步计数器与异步计数器的区别是？",
		correct: "同步型各级触发器共用同一个时钟",
		wrong: ["异步型不使用触发器", "同步型只能做加法计数", "异步型工作速度一定更快"],
		explain: "异步型把前一级输出当时钟逐级传递，存在累积延迟；同步型所有触发器同时动作。",
	},
	{
		module: "M3", difficulty: 2,
		stem: "用 n 位移位寄存器完成串行转并行，需要几个时钟脉冲？",
		correct: "n 个",
		wrong: ["1 个", "2n 个", "n/2 个"],
		explain: "每个时钟移入一位，装满 n 位后并行读出，所以需要 n 个脉冲。",
	},
	{
		module: "M3", difficulty: 3,
		stem: "状态化简时，哪两个状态可以合并？",
		correct: "输出相同且次态也相同的状态",
		wrong: ["状态编码相同的状态", "任意两个状态", "状态数最多的两个状态"],
		explain: "等价状态对外表现一致，合并后不改变输入输出关系；合并可以减少触发器数量。",
	},
	{
		module: "M5", difficulty: 2,
		stem: "SRAM 与 DRAM 在存储原理上的主要区别是？",
		correct: "SRAM 用触发器存位，DRAM 用电容存电荷",
		wrong: ["SRAM 需要周期刷新", "DRAM 掉电后数据不丢失", "SRAM 的容量一定更大"],
		explain: "电容会漏电，DRAM 必须定期刷新；SRAM 靠双稳态电路保持，不需要刷新但单元面积更大。",
	},
	{
		module: "M5", difficulty: 2,
		stem: "只读存储器 ROM 的典型特点是？",
		correct: "断电后数据仍保留，正常工作时只能读出",
		wrong: ["读写速度都很快", "必须持续刷新", "写入后立即丢失"],
		explain: "ROM 用熔丝、浮栅等非易失结构保存信息，常用来存放固定程序和数据表。",
	},
	{
		module: "M5", difficulty: 2,
		stem: "4K×8 的存储器需要多少根地址线？",
		correct: "12 根",
		wrong: ["8 根", "11 根", "13 根"],
		explain: "4K = 2 的 12 次方，地址线要能区分 4096 个单元，因此需要 12 根。",
	},
	{
		module: "M5", difficulty: 2,
		stem: "存储器的位扩展和字扩展分别扩展什么？",
		correct: "位扩展增加字长，字扩展增加字数",
		wrong: ["位扩展增加字数，字扩展增加字长", "两者都增加地址位数", "两者都增加数据位数"],
		explain: "位扩展把几片的数据端并起来加宽字长；字扩展用高位地址译码选片，增加单元数量。",
	},
	{
		module: "M6", difficulty: 2,
		stem: "数字系统中数据通路与控制器如何分工？",
		correct: "数据通路完成运算和传送，控制器发出控制信号",
		wrong: ["控制器完成运算，数据通路发控制信号", "两者都只负责存储数据", "数据通路产生时钟"],
		explain: "数据通路是执行部件，控制器按状态和条件产生选通、读写、移位等控制信号。",
	},
	{
		module: "M6", difficulty: 3,
		stem: "与硬布线控制相比，微程序控制的主要特点是什么？",
		correct: "控制逻辑放在控制存储器里，易修改但速度较慢",
		wrong: ["速度更快且不可修改", "不需要控制存储器", "只能实现一条指令"],
		explain: "微程序把控制信号编成微指令，改指令只需改微程序；硬布线用门电路直接产生信号，速度快但修改困难。",
	},
	{
		module: "M7", difficulty: 2,
		stem: "采样定理对采样频率提出了什么要求？",
		correct: "不低于信号最高频率的两倍",
		wrong: ["等于信号频率", "不低于信号最高频率", "越低越能保留细节"],
		explain: "采样频率低于两倍最高频率时会发生频谱混叠，恢复不出原信号。",
	},
	{
		module: "M7", difficulty: 3,
		stem: "ADC 的位数增加一位，分辨率和量化级差怎样变化？",
		correct: "量化级差减半，分辨率提高一倍",
		wrong: ["量化级差加倍，分辨率降低", "两者都不变", "量化范围减半"],
		explain: "位数加一位，台阶数翻倍，在相同满量程下每个台阶的高度减半。",
	},
	{
		module: "M7", difficulty: 2,
		stem: "逐次逼近型 ADC 转换 n 位结果通常需要几个节拍？",
		correct: "n 个",
		wrong: ["1 个", "2 的 n 次方个", "n/2 个"],
		explain: "从最高位开始逐位试探，每位一个节拍，n 位就需要 n 个节拍。",
	},
	{
		module: "M7", difficulty: 3,
		stem: "DAC 的位数增加时，输出台阶和满量程怎样变化？",
		correct: "台阶数增多，台阶变小，满量程不变",
		wrong: ["满量程随位数增大", "台阶数不变", "台阶变大"],
		explain: "满量程由参考电压决定；位数越多，同样范围被分得越细，量化误差越小。",
	},
	{
		module: "M8", difficulty: 2,
		stem: "Verilog 中 assign 与 always 的主要区别是？",
		correct: "assign 用于连续赋值，always 用于过程块",
		wrong: ["两者完全等价", "assign 只能描述时序逻辑", "always 不能描述组合逻辑"],
		explain: "assign 描述持续生效的组合连接，always 块按敏感列表触发，可描述组合逻辑或时序逻辑。",
	},
	{
		module: "M8", difficulty: 2,
		stem: "非阻塞赋值最适合描述哪类电路？",
		correct: "时序逻辑中边沿触发的行为",
		wrong: ["组合逻辑的即时计算", "常量定义", "模块端口连接"],
		explain: "非阻塞赋值在时间步结束时统一更新，能正确表达多个触发器同时动作的效果。",
	},
];

/* ---------- 图片题：配图放在 ui/figures/ 下 ---------- */

const IMAGE_QUESTIONS = [
	{
		module: "M2", difficulty: 2,
		stem: "输入 A、B 经图示门电路后，输出 F 的逻辑表达式是？",
		correct: "AB",
		wrong: ["A+B", "(AB)′", "A′B′"],
		explain: "与非门先得到 (AB)′，再经非门取反，两次取反还原为 AB。",
		image: "figures/q-gates.svg",
		imageAlt: "A、B 先经过与非门，再经过非门，输出 F",
	},
	{
		module: "M2", difficulty: 3,
		stem: "图示三变量卡诺图在 m0、m1、m3、m7 处填 1，化简后的最简与或式是？",
		correct: "A′B′ + BC",
		wrong: ["A′B′ + AC", "A′C′ + BC", "A′B′ + B′C"],
		explain: "m0 与 m1 相邻合并为 A′B′，m3 与 m7 相邻合并为 BC，共两个圈。",
		image: "figures/q-kmap.svg",
		imageAlt: "三变量卡诺图，最小项 0、1、3、7 处填 1",
	},
	{
		module: "M4", difficulty: 2,
		stem: "图示波形中，输出 Q 在什么时候跟随 D 更新？",
		correct: "时钟上升沿",
		wrong: ["时钟下降沿", "时钟高电平期间", "时钟低电平期间"],
		explain: "边沿触发的 D 触发器只在 CLK 上升沿采样 D，其余时间保持原状态。",
		image: "figures/q-timing.svg",
		imageAlt: "CLK、D、Q 三条波形，Q 在时钟上升沿变化",
	},
	{
		module: "M4", difficulty: 3,
		stem: "图示 4 位二进制计数器初态为 0000，输入 20 个计数脉冲后，Q3Q2Q1Q0 是？",
		correct: "0100",
		wrong: ["1010", "0000", "1000"],
		explain: "4 位计数器的模为 16，20 个脉冲后状态为 20 mod 16 = 4，即 0100。",
		image: "figures/q-counter.svg",
		imageAlt: "4 位二进制计数器，时钟与清零输入，输出 Q3 到 Q0",
	},
	{
		module: "M2", difficulty: 2,
		stem: "图示全加器的输入为 A=1、B=1、Cin=0，输出 S 和 Cout 是？",
		correct: "S=0，Cout=1",
		wrong: ["S=1，Cout=0", "S=1，Cout=1", "S=0，Cout=0"],
		explain: "S = 1⊕1⊕0 = 0，Cout = 1·1 + 0·(1⊕1) = 1。",
		image: "figures/q-adder.svg",
		imageAlt: "全加器输入 A 为 1、B 为 1、Cin 为 0",
	},
	{
		module: "M2", difficulty: 2,
		stem: "图示 3-8 译码器输入 A2A1A0=101，输出低电平有效，哪些输出为 0？",
		correct: "只有 Y5 为 0",
		wrong: ["只有 Y3 为 0", "只有 Y6 为 0", "Y0 到 Y7 全为 0"],
		explain: "二进制 101 等于十进制 5，低电平有效时只有对应的 Y5 输出 0，其余为 1。",
		image: "figures/q-decoder.svg",
		imageAlt: "三线八线译码器输入为 101",
	},
	{
		module: "M3", difficulty: 2,
		stem: "图示门控 D 锁存器在 CP=1、D=0 时，输出 Q 是？",
		correct: "Q=0",
		wrong: ["Q=1", "保持原状态", "状态不定"],
		explain: "CP=1 期间 D 锁存器透明，Q 跟随 D，因此 Q=0。",
		image: "figures/q-latch.svg",
		imageAlt: "门控 D 锁存器在 CP 为 1、D 为 0 时的工作状态",
	},
	{
		module: "M3", difficulty: 2,
		stem: "图示 4 位右移寄存器当前为 1011，串行输入 0，来一个时钟后 Q3Q2Q1Q0 是？",
		correct: "0101",
		wrong: ["1101", "1010", "0011"],
		explain: "右移时每位送到低位，最高位接收串行输入 0，得到 0101。",
		image: "figures/q-shift.svg",
		imageAlt: "四位右移寄存器初态 1011，串行输入 0",
	},
	{
		module: "M5", difficulty: 2,
		stem: "图示器件与阵列可编程、或阵列固定，它属于哪一种 PLD？",
		correct: "PAL",
		wrong: ["PROM", "PLA", "GAL"],
		explain: "PROM 的与阵列固定；PLA 两个阵列都可编程；PAL 与阵列可编程、或阵列固定；GAL 在 PAL 上增加了输出逻辑宏单元。",
		image: "figures/q-pld.svg",
		imageAlt: "一种可编程逻辑器件的与阵列和或阵列",
	},
	{
		module: "M7", difficulty: 3,
		stem: "图示 4 位 R-2R DAC 输入为 1000，满量程对应 Vref，输出 Vo 约为？",
		correct: "Vref / 2",
		wrong: ["Vref / 4", "Vref", "3Vref / 4"],
		explain: "4 位共 16 个台阶，1000 对应 8 个台阶，因此 Vo 为满量程的一半。",
		image: "figures/q-dac.svg",
		imageAlt: "四位 R-2R 数模转换器输入为 1000",
	},
	{
		module: "M7", difficulty: 3,
		stem: "图示 3 位逐次逼近 ADC，Vref=5 V，输入 3.2 V，转换结果最接近？",
		correct: "101",
		wrong: ["100", "110", "011"],
		explain: "量化级差为 5/8=0.625 V，3.2 V 约为 5.12 个级差，取整为 5，即 101。",
		image: "figures/q-sar.svg",
		imageAlt: "三位逐次逼近 ADC，参考电压 5 伏，输入 3.2 伏",
	},
	{
		module: "M1", difficulty: 2,
		stem: "图示矩形脉冲的脉宽为 2 ms、周期为 8 ms，它的占空比是？",
		correct: "25%",
		wrong: ["20%", "40%", "12.5%"],
		explain: "占空比 = t_w / T = 2 / 8 = 25%，即高电平占整个周期的四分之一。",
		image: "figures/q-pulse.svg",
		imageAlt: "脉宽 2 毫秒、周期 8 毫秒的矩形脉冲",
	},
	{
		module: "M3", difficulty: 2,
		stem: "图示七段数码管各段的亮灭状态，显示的数字是？",
		correct: "6",
		wrong: ["5", "9", "8"],
		explain: "6 点亮 a、c、d、e、f、g 六段，右上方的 b 段熄灭；5 会点亮 a、c、d、f、g，e 段不亮。",
		image: "figures/q-sevenseg.svg",
		imageAlt: "七段数码管显示数字 6 的段码",
	},
];

/** 图片题固定占用的概念题槽位，保证默认 80 题里全部出现。 */
const IMAGE_SLOTS = [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];

function conceptQuestions(random, state, slot) {
	const imageIndex = IMAGE_SLOTS.indexOf(slot);
	let item;
	if (imageIndex !== -1) {
		item = IMAGE_QUESTIONS[imageIndex];
	} else {
		if (state.pool.length === 0) {
			state.pool = random.shuffle(CONCEPTS.map((_, index) => index));
		}
		item = CONCEPTS[state.pool.pop()];
	}
	const { options, answer } = buildOptions(item.correct, item.wrong, random);
	const question = {
		module: item.module,
		type: item.image === undefined ? "concept" : "figure",
		difficulty: item.difficulty,
		stem: item.stem,
		options,
		answer,
		explain: item.explain,
	};
	if (item.image !== undefined) {
		question.image = figureSource(item.image);
		question.imageAlt = item.imageAlt;
	}
	return question;
}

/* ---------- 组装 ---------- */

function generateQuestions(count, seed) {
	const random = makeRandom(seed);
	const computed = [questionBase, questionTwosComplement, questionGray, questionBcd, questionHamming, questionHammingCheck, questionMinterms, questionKmap];
	const questions = [];
	const conceptState = { pool: [] };
	let conceptSlot = 0;
	const seenStems = new Set();

	// 计算题与概念题交替出现，保证八个模块都有覆盖
	let guard = 0;
	while (questions.length < count && guard < count * 20) {
		guard += 1;
		const index = questions.length;
		if (index % 2 === 1) {
			const candidate = conceptQuestions(random, conceptState, conceptSlot);
			if (candidate && !seenStems.has(candidate.stem)) {
				conceptSlot += 1;
				seenStems.add(candidate.stem);
				questions.push(candidate);
			}
			continue;
		}
		const generator = computed[(index / 2) % computed.length];
		const candidate = generator(random);
		if (candidate.options.length === 4 && !seenStems.has(candidate.stem)) {
			seenStems.add(candidate.stem);
			questions.push(candidate);
		}
	}
	return questions.map((question, index) => ({ id: `q${index + 1}`, ...question }));
}

/* ---------- 复核：逐题调用 dltool ---------- */

function checkQuestions(questions) {
	const failures = [];
	let checked = 0;
	for (const question of questions) {
		if (question.verify === undefined) continue;
		checked += 1;
		const run = spawnSync(process.execPath, [DLTOOL, ...question.verify.args, "--json"], { encoding: "utf8" });
		if (run.status !== 0) {
			failures.push(`${question.id}：dltool 退出码 ${run.status}`);
			continue;
		}
		let data;
		try {
			data = JSON.parse(run.stdout);
		} catch {
			failures.push(`${question.id}：dltool 输出不是 JSON`);
			continue;
		}
		const actual = String(data[question.verify.field]).toUpperCase();
		const expected = String(question.options[question.answer]).toUpperCase();
		if (actual !== expected) failures.push(`${question.id}：期望 ${expected}，dltool 给出 ${actual}`);
	}
	return { checked, failures };
}

/* ---------- 入口 ---------- */

function main() {
	const argv = process.argv.slice(2);
	const flags = new Map();
	for (let i = 0; i < argv.length; i += 1) {
		if (!argv[i].startsWith("--")) continue;
		const key = argv[i].slice(2);
		const next = argv[i + 1];
		if (next !== undefined && !next.startsWith("--")) {
			flags.set(key, next);
			i += 1;
		} else {
			flags.set(key, true);
		}
	}

	const seed = Number(flags.get("seed") ?? 20261125);
	const count = Number(flags.get("count") ?? 80);
	const questions = generateQuestions(count, seed);

	if (flags.get("check") === true) {
		const { checked, failures } = checkQuestions(questions);
		if (failures.length === 0) {
			console.log(`复核通过：${checked} 道计算题与 dltool 结果一致`);
			return;
		}
		console.error(`复核失败 ${failures.length} 项：`);
		for (const item of failures) console.error(`  ${item}`);
		process.exit(1);
	}

	if (flags.get("build") === true) {
		const { checked, failures } = checkQuestions(questions);
		if (failures.length > 0) {
			console.error("生成前复核未通过，已中止：");
			for (const item of failures) console.error(`  ${item}`);
			process.exit(1);
		}
		const outPath = join(SKILL_ROOT, "ui", "questions.js");
		mkdirSync(dirname(outPath), { recursive: true });
		const payload = `// 由 scripts/dlquiz.js 生成，种子 ${seed}，共 ${questions.length} 题。不要手改。\n`
			+ `window.DL_QUIZ = ${JSON.stringify({ seed, generatedAt: new Date().toISOString(), checked, items: questions }, null, "\t")};\n`;
		writeFileSync(outPath, payload, "utf8");
		console.log(`已生成 ${questions.length} 题（复核 ${checked} 道计算题），写入 ${outPath}`);
		return;
	}

	console.log("用法：node dlquiz.js --build [--count 40] [--seed 20261125] | --check");
	console.log(`当前种子 ${seed} 可生成 ${questions.length} 题。`);
}

main();

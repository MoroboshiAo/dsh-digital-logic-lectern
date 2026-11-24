#!/usr/bin/env node
/**
 * dlquiz —— 从确定性计算生成答题题库，供 ui/index.html 使用（零依赖）
 *
 * 用法：
 *   node dlquiz.js --build            生成 ui/questions.js（默认 40 题）
 *   node dlquiz.js --build --count 20
 *   node dlquiz.js --check            用 dltool 逐题复核计算类答案
 */

import { spawnSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const SKILL_ROOT = join(HERE, "..");
const DLTOOL = join(HERE, "dltool.js");

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
];

function conceptQuestions(random, used) {
	if (used.length === 0) {
		used.push(...random.shuffle(CONCEPTS.map((_, index) => index)));
	}
	const index = used.pop();
	const item = CONCEPTS[index];
	const { options, answer } = buildOptions(item.correct, item.wrong, random);
	return {
		module: item.module,
		type: "concept",
		difficulty: item.difficulty,
		stem: item.stem,
		options,
		answer,
		explain: item.explain,
	};
}

/* ---------- 组装 ---------- */

function generateQuestions(count, seed) {
	const random = makeRandom(seed);
	const computed = [questionBase, questionTwosComplement, questionGray, questionBcd, questionHamming, questionMinterms, questionKmap];
	const questions = [];
	const conceptPool = [];

	// 计算题与概念题交替出现，保证八个模块都有覆盖
	let guard = 0;
	while (questions.length < count && guard < count * 20) {
		guard += 1;
		const index = questions.length;
		if (index % 2 === 1) {
			questions.push(conceptQuestions(random, conceptPool));
			continue;
		}
		const generator = computed[(index / 2) % computed.length];
		const candidate = generator(random);
		if (candidate.options.length === 4) questions.push(candidate);
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
	const count = Number(flags.get("count") ?? 40);
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

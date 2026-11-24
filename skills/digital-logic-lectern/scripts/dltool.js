#!/usr/bin/env node
/**
 * dltool —— 数字逻辑课程的确定性计算工具（零依赖，Node 18+）
 *
 * 子命令：base code gray bcd truth kmap qm hamming
 * 所有结果由本文件算出，讲解时直接引用，不允许口算替代。
 */

const EXIT_BAD_INPUT = 2;

function fail(message) {
	console.error(`错误：${message}`);
	process.exit(EXIT_BAD_INPUT);
}

function parseFlags(argv) {
	const flags = new Map();
	for (let i = 0; i < argv.length; i += 1) {
		const token = argv[i];
		if (!token.startsWith("--")) continue;
		const key = token.slice(2);
		const next = argv[i + 1];
		if (next !== undefined && !next.startsWith("--")) {
			flags.set(key, next);
			i += 1;
		} else {
			flags.set(key, true);
		}
	}
	return flags;
}

function numberFlag(flags, key, fallback) {
	const raw = flags.get(key);
	if (raw === undefined) return fallback;
	const value = Number(raw);
	if (!Number.isFinite(value)) fail(`--${key} 需要一个数字`);
	return value;
}

function listFlag(flags, key) {
	const raw = flags.get(key);
	if (raw === undefined || raw === true) return [];
	return String(raw)
		.split(/[,，\s]+/)
		.filter((item) => item.length > 0)
		.map((item) => {
			const value = Number(item);
			if (!Number.isInteger(value) || value < 0) fail(`--${key} 里出现非法项 "${item}"`);
			return value;
		});
}

function bitsOf(value, width) {
	return value.toString(2).padStart(width, "0");
}

/* ---------- base：进制互转 ---------- */

function cmdBase(flags) {
	const from = numberFlag(flags, "from", 10);
	const to = numberFlag(flags, "to", 2);
	const raw = flags.get("value");
	if (raw === undefined || raw === true) fail("缺少 --value");
	if (![2, 8, 10, 16].includes(from) || ![2, 8, 10, 16].includes(to)) {
		fail("--from 与 --to 只支持 2、8、10、16");
	}
	const text = String(raw).trim().toUpperCase();
	const digitPattern = { 2: /^[01]+$/, 8: /^[0-7]+$/, 10: /^[0-9]+$/, 16: /^[0-9A-F]+$/ }[from];
	if (!digitPattern.test(text)) fail(`"${text}" 不是合法的 ${from} 进制数`);

	const lines = [];
	let converted = "";
	let decimal = 0;
	const digits = text.split("");
	lines.push(`按权展开（${from} 进制 → 十进制）：`);
	const parts = [];
	for (let i = 0; i < digits.length; i += 1) {
		const digit = parseInt(digits[i], from);
		const power = digits.length - 1 - i;
		decimal += digit * from ** power;
		parts.push(`${digit}×${from}^${power}`);
	}
	lines.push(`  ${text} = ${parts.join(" + ")} = ${decimal}`);

	if (to !== 10) {
		lines.push(`除基取余（十进制 → ${to} 进制）：`);
		let rest = decimal;
		const remainders = [];
		if (rest === 0) {
			remainders.push(0);
			lines.push("  0 ÷ 基 = 0 余 0");
		}
		while (rest > 0) {
			const q = Math.floor(rest / to);
			const r = rest % to;
			lines.push(`  ${rest} ÷ ${to} = ${q} 余 ${r.toString(to).toUpperCase()}`);
			remainders.push(r);
			rest = q;
		}
		const result = remainders
			.reverse()
			.map((r) => r.toString(to).toUpperCase())
			.join("");
		converted = result;
		lines.push(`  逆序读取余数：${result}`);
		lines.push(`结果：${text}(${from}) = ${result}(${to})`);
	} else {
		converted = String(decimal);
		lines.push(`结果：${text}(${from}) = ${decimal}(10)`);
	}
	return { lines, data: { from, to, input: text, decimal, result: converted } };
}

/* ---------- code：原码/反码/补码/移码 ---------- */

function cmdCode(flags) {
	const width = numberFlag(flags, "bits", 8);
	const value = numberFlag(flags, "value", 0);
	if (!Number.isInteger(width) || width < 2 || width > 32) fail("--bits 取 2 到 32");
	if (!Number.isInteger(value)) fail("--value 必须是整数");
	const max = 2 ** (width - 1) - 1;
	const min = -(2 ** (width - 1));
	if (value < min || value > max) fail(`${width} 位有符号数的范围是 ${min} ~ ${max}`);

	const modulus = 2 ** width;
	const sign = value < 0 ? 1 : 0;
	const magnitude = Math.abs(value);
	const signMagnitude = sign * 2 ** (width - 1) + magnitude;
	const onesComplement = value < 0 ? modulus + value - 1 : value;
	const twosComplement = value < 0 ? modulus + value : value;
	const offset = value + 2 ** (width - 1);

	const lines = [
		`${width} 位，真值 ${value}，表示范围 ${min} ~ ${max}`,
		`原码：${bitsOf(signMagnitude, width)}（符号位 ${sign}，数值位 ${bitsOf(magnitude, width - 1)}）`,
		`反码：${bitsOf(onesComplement, width)}${value < 0 ? "（原码数值位逐位取反）" : "（正数与原码相同）"}`,
		`补码：${bitsOf(twosComplement, width)}${value < 0 ? "（反码末位加 1）" : "（正数与原码相同）"}`,
		`移码：${bitsOf(offset, width)}（真值加 2^${width - 1}，即补码符号位取反）`,
	];
	if (value === min) lines.push("注意：最小负数没有对应的原码与反码表示。");
	return {
		lines,
		data: {
			bits: width,
			value,
			signMagnitude: bitsOf(signMagnitude, width),
			onesComplement: bitsOf(onesComplement, width),
			twosComplement: bitsOf(twosComplement, width),
			offset: bitsOf(offset, width),
		},
	};
}

/* ---------- gray：二进制与格雷码 ---------- */

function cmdGray(flags) {
	const width = numberFlag(flags, "bits", 4);
	const value = numberFlag(flags, "value", 0);
	if (!Number.isInteger(width) || width < 1 || width > 16) fail("--bits 取 1 到 16");
	if (!Number.isInteger(value) || value < 0 || value >= 2 ** width) fail(`--value 取 0 到 ${2 ** width - 1}`);

	const binary = bitsOf(value, width);
	const grayValue = value ^ (value >> 1);
	const gray = bitsOf(grayValue, width);

	let restored = 0;
	const steps = [`最高位保留：${gray[0]}`];
	for (let i = 0; i < width; i += 1) {
		const bit = (grayValue >> (width - 1 - i)) & 1;
		restored = i === 0 ? bit : ((restored << 1) | ((restored & 1) ^ bit));
		if (i > 0) steps.push(`第 ${i + 1} 位 = 前一位结果 ${(restored >> 1) & 1} 异或本位 ${bit} = ${restored & 1}`);
	}

	const lines = [
		`二进制 ${binary} → 格雷码 ${gray}`,
		`  做法：最高位保留，其余每位等于本位与高位异或`,
		`反变换：格雷码 ${gray} → 二进制 ${bitsOf(restored, width)}`,
		...steps.map((step) => `  ${step}`),
	];
	return { lines, data: { bits: width, binary, gray, restored: bitsOf(restored, width) } };
}

/* ---------- bcd：常用 BCD 编码 ---------- */

const BCD_2421 = [0x0, 0x1, 0x2, 0x3, 0x4, 0xb, 0xc, 0xd, 0xe, 0xf];

function cmdBcd(flags) {
	const scheme = String(flags.get("scheme") ?? "8421").toLowerCase();
	const raw = flags.get("value");
	if (raw === undefined || raw === true) fail("缺少 --value（非负十进制整数）");
	const text = String(raw).trim();
	if (!/^\d+$/.test(text)) fail("--value 必须是十进制非负整数");
	const digits = text.split("").map(Number);

	const encode = (digit) => {
		if (scheme === "8421") return bitsOf(digit, 4);
		if (scheme === "2421") return bitsOf(BCD_2421[digit], 4);
		if (scheme === "excess3" || scheme === "余3") return bitsOf(digit + 3, 4);
		return fail("--scheme 只支持 8421、2421、excess3");
	};

	const groups = digits.map((digit) => `${encode(digit)}`);
	const lines = [
		`${scheme} 编码，十进制 ${text}：`,
		...digits.map((digit, i) => `  ${digit} → ${groups[i]}`),
		`拼接结果：${groups.join(" ")}`,
	];
	if (scheme === "2421") {
		lines.push("2421 是自补码：0 与 9、1 与 8、2 与 7、3 与 6、4 与 5 互为按位取反。");
		lines.push("非法码 0101 ~ 1010 不会出现在 2421 中。");
	}
	if (scheme === "8421") {
		lines.push("8421 中 1010 ~ 1111 为非法码，只能出现在运算修正之前的中间结果里。");
	}
	return { lines, data: { scheme, value: text, groups } };
}

/* ---------- truth：表达式 ↔ 真值表 ---------- */

function tokenize(expr) {
	const tokens = [];
	let i = 0;
	while (i < expr.length) {
		const ch = expr[i];
		if (/\s/.test(ch)) { i += 1; continue; }
		if (/[A-Da-d]/.test(ch)) { tokens.push({ type: "var", name: ch.toUpperCase() }); i += 1; continue; }
		if (ch === "0" || ch === "1") { tokens.push({ type: "const", value: ch === "1" }); i += 1; continue; }
		if ("~!&|^()".includes(ch)) { tokens.push({ type: "op", value: ch }); i += 1; continue; }
		if (ch === "+") { tokens.push({ type: "op", value: "|" }); i += 1; continue; }
		if (ch === "*" || ch === "·") { tokens.push({ type: "op", value: "&" }); i += 1; continue; }
		fail(`表达式里出现无法识别的字符 "${ch}"`);
	}
	return tokens;
}

function parseExpression(tokens) {
	let pos = 0;
	const peek = () => tokens[pos];
	const eat = (value) => {
		const token = tokens[pos];
		if (token === undefined || token.type !== "op" || token.value !== value) fail(`表达式缺少 "${value}"`);
		pos += 1;
	};

	function parseOr() {
		let node = parseXor();
		while (peek()?.type === "op" && peek().value === "|") { pos += 1; node = { op: "|", left: node, right: parseXor() }; }
		return node;
	}
	function parseXor() {
		let node = parseAnd();
		while (peek()?.type === "op" && peek().value === "^") { pos += 1; node = { op: "^", left: node, right: parseAnd() }; }
		return node;
	}
	function parseAnd() {
		let node = parseUnary();
		while (peek()?.type === "op" && peek().value === "&") { pos += 1; node = { op: "&", left: node, right: parseUnary() }; }
		return node;
	}
	function parseUnary() {
		const token = peek();
		if (token === undefined) fail("表达式不完整");
		if (token.type === "op" && (token.value === "~" || token.value === "!")) { pos += 1; return { op: "~", child: parseUnary() }; }
		if (token.type === "op" && token.value === "(") {
			pos += 1;
			const node = parseOr();
			eat(")");
			return node;
		}
		if (token.type === "var") { pos += 1; return { kind: "var", name: token.name }; }
		if (token.type === "const") { pos += 1; return { kind: "const", value: token.value }; }
		fail(`无法解析的记号 "${token.value ?? token.name}"`);
	}

	const tree = parseOr();
	if (pos !== tokens.length) fail("表达式末尾有多余内容");
	return tree;
}

function evaluate(node, env) {
	if (node.kind === "const") return node.value;
	if (node.kind === "var") return env[node.name];
	if (node.op === "~") return !evaluate(node.child, env);
	const left = evaluate(node.left, env);
	const right = evaluate(node.right, env);
	if (node.op === "&") return left && right;
	if (node.op === "|") return left || right;
	return left !== right;
}

function cmdTruth(flags) {
	const exprRaw = flags.get("expr");
	if (exprRaw === undefined || exprRaw === true) fail("缺少 --expr，例如 --expr \"A&~B|C\"");
	const expr = String(exprRaw);
	const tree = parseExpression(tokenize(expr));
	const vars = [...new Set(collectVars(tree))].sort();
	if (vars.length === 0) fail("表达式里没有变量");
	if (vars.length > 4) fail("最多支持 4 个变量（A~D）");

	const rows = [];
	const minterms = [];
	for (let mask = 0; mask < 2 ** vars.length; mask += 1) {
		const env = {};
		vars.forEach((name, i) => { env[name] = ((mask >> (vars.length - 1 - i)) & 1) === 1; });
		const value = evaluate(tree, env);
		rows.push({ mask, env, value });
		if (value) minterms.push(mask);
	}

	const header = `${vars.join(" ")} | F`;
	const lines = [header, "-".repeat(header.length)];
	for (const row of rows) {
		lines.push(`${vars.map((name) => (row.env[name] ? 1 : 0)).join(" ")} | ${row.value ? 1 : 0}`);
	}
	lines.push(`最小项编号：Σm(${minterms.join(", ")})`);
	const sop = minterms
		.map((m) => `m${m}`)
		.join(" + ");
	lines.push(`标准与或式：F = ${minterms.length === 0 ? "0" : sop}`);
	return { lines, data: { expr, vars, minterms } };
}

function collectVars(node, out = []) {
	if (node.kind === "var") out.push(node.name);
	if (node.child) collectVars(node.child, out);
	if (node.left) collectVars(node.left, out);
	if (node.right) collectVars(node.right, out);
	return out;
}

/* ---------- kmap / qm：卡诺图与 Q-M 化简 ---------- */

function combineTerm(a, b) {
	let diff = -1;
	for (let i = 0; i < a.length; i += 1) {
		if (a[i] === b[i]) continue;
		if (a[i] === "-" || b[i] === "-") return null;
		if (diff !== -1) return null;
		diff = i;
	}
	if (diff === -1) return null;
	return `${a.slice(0, diff)}-${a.slice(diff + 1)}`;
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

function dashCount(term) {
	return [...term].filter((ch) => ch === "-").length;
}

function* combinations(items, size, start = 0, prefix = []) {
	if (prefix.length === size) { yield prefix.slice(); return; }
	for (let i = start; i <= items.length - (size - prefix.length); i += 1) {
		prefix.push(items[i]);
		yield* combinations(items, size, i + 1, prefix);
		prefix.pop();
	}
}

function minimalCover(primes, required, varCount) {
	const pool = primes
		.map((term) => ({ term, covered: required.filter((m) => covers(term, m, varCount)) }))
		.filter((item) => item.covered.length > 0);
	const chosen = [];
	const covered = new Set();

	for (const minterm of required) {
		const owners = pool.filter((item) => item.covered.includes(minterm));
		if (owners.length === 1 && !chosen.includes(owners[0].term)) {
			chosen.push(owners[0].term);
			for (const m of owners[0].covered) covered.add(m);
		}
	}

	const todo = required.filter((m) => !covered.has(m));
	const candidates = pool.filter((item) => !chosen.includes(item.term) && item.covered.some((m) => todo.includes(m)));

	if (todo.length === 0) return chosen;

	if (candidates.length <= 18) {
		let best = null;
		for (let size = 1; size <= candidates.length; size += 1) {
			for (const subset of combinations(candidates, size)) {
				const hit = new Set();
				for (const item of subset) for (const m of item.covered) hit.add(m);
				if (todo.every((m) => hit.has(m))) {
					const literals = subset.reduce((sum, item) => sum + (varCount - dashCount(item.term)), 0);
					if (best === null || literals < best.literals) best = { items: subset, literals };
				}
			}
			if (best !== null) break;
		}
		if (best !== null) return [...chosen, ...best.items.map((item) => item.term)];
	}

	let remaining = todo;
	const poolLeft = [...candidates];
	while (remaining.length > 0 && poolLeft.length > 0) {
		let pick = -1;
		let pickGain = 0;
		for (let i = 0; i < poolLeft.length; i += 1) {
			const gain = poolLeft[i].covered.filter((m) => remaining.includes(m)).length;
			const better = gain > pickGain
				|| (gain === pickGain && pick >= 0 && dashCount(poolLeft[i].term) > dashCount(poolLeft[pick].term));
			if (gain > 0 && better) { pick = i; pickGain = gain; }
		}
		if (pick < 0) break;
		chosen.push(poolLeft[pick].term);
		remaining = remaining.filter((m) => !poolLeft[pick].covered.includes(m));
		poolLeft.splice(pick, 1);
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

function termToPosFactor(term, vars) {
	const parts = [];
	for (let i = 0; i < term.length; i += 1) {
		if (term[i] === "-") continue;
		parts.push(term[i] === "1" ? `~${vars[i]}` : vars[i]);
	}
	return parts.length === 0 ? "0" : `(${parts.join("+")})`;
}

function kmapGrid(varCount, ones, dontcares) {
	const inSet = (m, set) => set.includes(m);
	if (varCount === 4) {
		const rowLabels = ["00", "01", "11", "10"];
		const cells = ["00", "01", "11", "10"];
		const lines = ["      CD", "AB  " + cells.join("  ")];
		for (const row of rowLabels) {
			const rowBits = parseInt(row, 2);
			const values = cells.map((col) => {
				const m = rowBits * 4 + parseInt(col, 2);
				if (inSet(m, ones)) return " 1";
				if (inSet(m, dontcares)) return " ×";
				return " 0";
			});
			lines.push(`${row}  ${values.join("  ")}`);
		}
		return lines;
	}
	if (varCount === 3) {
		const cells = ["00", "01", "11", "10"];
		const lines = ["    BC", "A " + cells.join("  ")];
		for (const row of ["0", "1"]) {
			const values = cells.map((col) => {
				const m = Number(row) * 4 + parseInt(col, 2);
				if (inSet(m, ones)) return " 1";
				if (inSet(m, dontcares)) return " ×";
				return " 0";
			});
			lines.push(`${row} ${values.join("  ")}`);
		}
		return lines;
	}
	if (varCount === 2) {
		const lines = ["    B", "A " + ["0", "1"].join("  ")];
		for (const row of ["0", "1"]) {
			const values = ["0", "1"].map((col) => {
				const m = Number(row) * 2 + Number(col);
				if (inSet(m, ones)) return " 1";
				if (inSet(m, dontcares)) return " ×";
				return " 0";
			});
			lines.push(`${row} ${values.join("  ")}`);
		}
		return lines;
	}
	return ["（仅支持 2~4 变量）"];
}

function cmdKmap(flags, withGrid) {
	const explicitVars = flags.get("vars");
	const ones = [...new Set(listFlag(flags, "minterms"))].sort((a, b) => a - b);
	const dontcares = [...new Set(listFlag(flags, "dontcares"))].filter((m) => !ones.includes(m));
	const highest = Math.max(0, ...ones, ...dontcares);
	const inferred = highest === 0 ? 2 : Math.max(2, Math.ceil(Math.log2(highest + 1)));
	let varCount = explicitVars === undefined ? inferred : Number(explicitVars);
	if (!Number.isInteger(varCount) || varCount < 2 || varCount > 4) fail("--vars 取 2 到 4");
	const limit = 2 ** varCount;
	if ([...ones, ...dontcares].some((m) => m >= limit)) fail(`最小项编号必须小于 ${limit}`);

	const vars = ["A", "B", "C", "D"].slice(0, varCount);
	const lines = [];
	if (withGrid) {
		lines.push(`卡诺图（1 = Σm，× = 无关项）：`);
		lines.push(...kmapGrid(varCount, ones, dontcares).map((line) => `  ${line}`));
		lines.push("");
	}

	const primes = primeImplicants(varCount, [...ones, ...dontcares]);
	const sopTerms = minimalCover(primes, ones, varCount);
	const sop = sopTerms.length === 0 ? "0" : sopTerms.map((term) => termToSop(term, vars)).join(" + ");
	lines.push(`最小项：Σm(${ones.join(", ")})${dontcares.length > 0 ? `，无关项 d(${dontcares.join(", ")})` : ""}`);
	lines.push(`质蕴含项共 ${primes.length} 个：${primes.map((t) => termToSop(t, vars)).join(" ｜ ")}`);
	lines.push(`最简与或式：F = ${sop}`);

	// 用全部输入回验，避免化简结果与原始真值表不一致
	let mismatch = 0;
	for (let m = 0; m < limit; m += 1) {
		const expected = ones.includes(m) ? 1 : 0;
		const actual = sopTerms.some((term) => covers(term, m, varCount)) ? 1 : 0;
		if (!ones.includes(m) && !dontcares.includes(m) && actual !== expected) mismatch += 1;
	}
	lines.push(`回验：对 ${limit} 个输入逐一求值，${mismatch === 0 ? "全部一致" : `有 ${mismatch} 处不一致`}`);

	const zeroTerms = [];
	for (let m = 0; m < limit; m += 1) if (!ones.includes(m)) zeroTerms.push(m);
	if (zeroTerms.length > 0 && zeroTerms.length < limit) {
		const posPrimes = primeImplicants(varCount, zeroTerms);
		const posTerms = minimalCover(posPrimes, zeroTerms, varCount);
		const pos = posTerms.map((term) => termToPosFactor(term, vars)).join("");
		lines.push(`最简或与式：F = ${pos === "" ? "1" : pos}`);
	} else if (zeroTerms.length === 0) {
		lines.push("最简或与式：F = 1");
	}

	return {
		lines,
		data: {
			vars,
			minterms: ones,
			dontcares,
			primeImplicants: primes.map((term) => termToSop(term, vars)),
			sop,
			verified: mismatch === 0,
		},
	};
}

/* ---------- hamming：(7,4) 海明码 ---------- */

function cmdHamming(flags) {
	const data = flags.get("data");
	const check = flags.get("check");
	const lines = [];

	if (data !== undefined && data !== true) {
		const bits = String(data).trim();
		if (!/^[01]{4}$/.test(bits)) fail("--data 需要 4 位二进制");
		const [d1, d2, d3, d4] = bits.split("").map(Number);
		const p1 = d1 ^ d2 ^ d4;
		const p2 = d1 ^ d3 ^ d4;
		const p4 = d2 ^ d3 ^ d4;
		const code = `${p1}${p2}${d1}${p4}${d2}${d3}${d4}`;
		lines.push(`数据 ${bits}（偶校验），按 d1 d2 d3 d4 放入第 3、5、6、7 位`);
		lines.push(`  p1 = d1⊕d2⊕d4 = ${d1}⊕${d2}⊕${d4} = ${p1}`);
		lines.push(`  p2 = d1⊕d3⊕d4 = ${d1}⊕${d3}⊕${d4} = ${p2}`);
		lines.push(`  p4 = d2⊕d3⊕d4 = ${d2}⊕${d3}⊕${d4} = ${p4}`);
		lines.push(`编码结果（第 1~7 位）：${code}`);
		return { lines, data: { data: bits, code, p1, p2, p4 } };
	}

	if (check !== undefined && check !== true) {
		const bits = String(check).trim();
		if (!/^[01]{7}$/.test(bits)) fail("--check 需要 7 位二进制");
		const b = bits.split("").map(Number);
		const s1 = b[0] ^ b[2] ^ b[4] ^ b[6];
		const s2 = b[1] ^ b[2] ^ b[5] ^ b[6];
		const s4 = b[3] ^ b[4] ^ b[5] ^ b[6];
		const position = s4 * 4 + s2 * 2 + s1;
		lines.push(`接收码 ${bits}`);
		lines.push(`  s1 = ${b[0]}⊕${b[2]}⊕${b[4]}⊕${b[6]} = ${s1}`);
		lines.push(`  s2 = ${b[1]}⊕${b[2]}⊕${b[5]}⊕${b[6]} = ${s2}`);
		lines.push(`  s4 = ${b[3]}⊕${b[4]}⊕${b[5]}⊕${b[6]} = ${s4}`);
		if (position === 0) {
			lines.push("综合症为 000，判定无错。");
		} else {
			const fixed = [...bits];
			fixed[position - 1] = fixed[position - 1] === "1" ? "0" : "1";
			lines.push(`综合症 ${s4}${s2}${s1} = 十进制 ${position}，第 ${position} 位出错。`);
			lines.push(`纠正后：${fixed.join("")}`);
		}
		return { lines, data: { received: bits, syndrome: `${s4}${s2}${s1}`, position } };
	}

	fail("hamming 需要 --data 或 --check");
}

/* ---------- 入口 ---------- */

function main() {
	const [command, ...rest] = process.argv.slice(2);
	const flags = parseFlags(rest);
	const asJson = flags.get("json") === true;

	if (command === undefined || command === "--help" || command === "help") {
		console.log([
			"dltool —— 数字逻辑课程确定性计算工具",
			"用法：",
			"  node dltool.js base    --from 10 --to 2 --value 259",
			"  node dltool.js code    --bits 8 --value -5",
			"  node dltool.js gray    --bits 4 --value 9",
			"  node dltool.js bcd     --scheme 8421 --value 259",
			"  node dltool.js truth   --expr \"A&~B|C\"",
			"  node dltool.js kmap    --vars 4 --minterms 0,1,2,5,8,9,10 --dontcares 14",
			"  node dltool.js qm      --vars 3 --minterms 1,3,5,7",
			"  node dltool.js hamming --data 1011",
			"  node dltool.js hamming --check 1011001",
			"任意子命令加 --json 输出机器可读结果。",
		].join("\n"));
		return;
	}

	let result;
	if (command === "base") result = cmdBase(flags);
	else if (command === "code") result = cmdCode(flags);
	else if (command === "gray") result = cmdGray(flags);
	else if (command === "bcd") result = cmdBcd(flags);
	else if (command === "truth") result = cmdTruth(flags);
	else if (command === "kmap") result = cmdKmap(flags, true);
	else if (command === "qm") result = cmdKmap(flags, false);
	else if (command === "hamming") result = cmdHamming(flags);
	else fail(`未知子命令 "${command}"，用 --help 查看用法`);

	if (asJson) console.log(JSON.stringify(result.data, null, 2));
	else console.log(result.lines.join("\n"));
}

main();

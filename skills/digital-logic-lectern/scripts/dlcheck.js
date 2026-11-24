#!/usr/bin/env node
/**
 * dlcheck —— 讲稿自检：结构、时长、数字溯源、未验证声明（零依赖）
 *
 * 用法：node dlcheck.js <讲稿.md> [--minutes 6] [--evidence evidence.json] [--json]
 */

import { existsSync, readFileSync } from "node:fs";
import { isAbsolute, resolve } from "node:path";

const CHARS_PER_MINUTE = 220;
const TOLERANCE = 0.2;

function parseFlags(argv) {
	const flags = new Map();
	const files = [];
	for (let i = 0; i < argv.length; i += 1) {
		const token = argv[i];
		if (token.startsWith("--")) {
			const next = argv[i + 1];
			if (next !== undefined && !next.startsWith("--")) {
				flags.set(token.slice(2), next);
				i += 1;
			} else {
				flags.set(token.slice(2), true);
			}
		} else {
			files.push(token);
		}
	}
	return { flags, files };
}

const { flags, files } = parseFlags(process.argv.slice(2));
if (files.length === 0) {
	console.error("用法：node dlcheck.js <讲稿.md> [--minutes 6] [--evidence evidence.json] [--json]");
	process.exit(2);
}

const draftPath = isAbsolute(files[0]) ? files[0] : resolve(files[0]);
if (!existsSync(draftPath)) {
	console.error(`错误：找不到讲稿 ${draftPath}`);
	process.exit(2);
}

const text = readFileSync(draftPath, "utf8");
const minutes = Number(flags.get("minutes") ?? 6);
const evidencePath = flags.get("evidence");
let evidence = "";
if (evidencePath !== undefined && evidencePath !== true) {
	const resolved = isAbsolute(String(evidencePath)) ? String(evidencePath) : resolve(String(evidencePath));
	if (existsSync(resolved)) evidence = readFileSync(resolved, "utf8");
}

const checks = [];
const add = (name, ok, detail) => checks.push({ name, ok, detail });

// 1. 结论先行
add(
	"结论先行",
	/结论/.test(text),
	/结论/.test(text) ? "找到结论段" : "缺少「结论」段，讲稿必须先给判断",
);

// 2. 板书步数
const lines = text.split(/\r?\n/);
let inBoard = false;
let boardSteps = 0;
let boardFound = false;
for (const line of lines) {
	if (/^#{1,6}\s/.test(line)) {
		inBoard = /板书/.test(line);
		if (inBoard) boardFound = true;
		continue;
	}
	if (inBoard && /^\s*\d+\s*[.)、]/.test(line)) boardSteps += 1;
}
add(
	"板书步数",
	boardFound && boardSteps > 0 && boardSteps <= 7,
	boardFound === false
		? "没有找到「板书」小节"
		: `${boardSteps} 步（上限 7 步）`,
);

// 3. 口播字数
const plain = text.replace(/[#*`|>\-]/g, "").replace(/\s/g, "");
const target = minutes * CHARS_PER_MINUTE;
const low = Math.round(target * (1 - TOLERANCE));
const high = Math.round(target * (1 + TOLERANCE));
add(
	"时长匹配",
	plain.length >= low && plain.length <= high,
	`${plain.length} 字，${minutes} 分钟的目标区间是 ${low}~${high} 字`,
);

// 4. 未验证声明
const claimsVerified = /(验证通过|已验证|仿真通过|已跑通)/.test(text);
add(
	"验证声明",
	!(claimsVerified && evidence === ""),
	claimsVerified && evidence === ""
		? "讲稿声称验证通过，但没有提供 dlverify/dltool 的证据文件"
		: claimsVerified
			? "有验证声明，且提供了证据文件"
			: "没有验证声明",
);

// 5. 位模式溯源
const patterns = [...new Set(text.match(/(?<![0-9])[01]{4,}(?![0-9])/g) ?? [])];
const untraced = evidence === "" ? patterns : patterns.filter((item) => !evidence.includes(item));
add(
	"数字溯源",
	untraced.length === 0,
	patterns.length === 0
		? "讲稿里没有位模式"
		: untraced.length === 0
			? `${patterns.length} 个位模式都能在证据里找到`
			: `以下位模式在证据里找不到：${untraced.join(", ")}`,
);

// 6. 教材章节号
const chapterRefs = text.match(/第\s*\d+\s*[章节]/g) ?? [];
add(
	"教材引用",
	chapterRefs.length === 0,
	chapterRefs.length === 0
		? "没有硬编码章节号"
		: `出现 ${chapterRefs.join("、")}，但 textbook_map 仍为待校对状态`,
);

const failed = checks.filter((check) => !check.ok);

if (flags.get("json") === true) {
	console.log(JSON.stringify({ draft: draftPath, passed: failed.length === 0, checks }, null, 2));
} else {
	console.log(`讲稿：${draftPath}`);
	for (const check of checks) {
		console.log(`  [${check.ok ? "PASS" : "FAIL"}] ${check.name}：${check.detail}`);
	}
	console.log("");
	console.log(failed.length === 0 ? "自检全绿，可以上台。" : `有 ${failed.length} 项未通过，不能交付。`);
}

process.exit(failed.length === 0 ? 0 : 1);

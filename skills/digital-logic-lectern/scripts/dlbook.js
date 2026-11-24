#!/usr/bin/env node
/**
 * dlbook —— 把 references 里的讲义转成网页可用的数据（零依赖）
 *
 * 说明：这里转的是本仓库自编的讲义，不是出版社教材原文。
 *
 * 用法：node dlbook.js --build
 * 产物：ui/book.js，供 ui/index.html 的「学习」页使用。
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const SKILL_ROOT = join(HERE, "..");
const REF_DIR = join(SKILL_ROOT, "references");

const CHAPTERS = [
	{ id: "c1", file: "textbook/ch1.md", modules: ["M1", "M2"], source: "《数字逻辑》（第七版）第一章 开关理论基础" },
	{ id: "c2", file: "textbook/ch2.md", modules: ["M3"], source: "《数字逻辑》（第七版）第二章 组合逻辑" },
	{ id: "c3", file: "textbook/ch3.md", modules: ["M4"], source: "《数字逻辑》（第七版）第三章 时序逻辑" },
	{ id: "c4", file: "textbook/ch4.md", modules: ["M5"], source: "《数字逻辑》（第七版）第四章 存储逻辑" },
	{ id: "c5", file: "textbook/ch5.md", modules: ["M6"], source: "《数字逻辑》（第七版）第五章 可编程逻辑" },
	{ id: "glossary", file: "glossary.md", modules: [], source: "" },
];

function escapeHtml(text) {
	return text
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;");
}

function stripTags(html) {
	return html.replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
}

function inline(text) {
	return escapeHtml(text)
		.replace(/`([^`]+)`/g, "<code>$1</code>")
		.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
}

/** 行级 Markdown 转 HTML：标题、列表、表格、代码块、段落。 */
function markdownToHtml(markdown) {
	const lines = markdown.split(/\r?\n/);
	const out = [];
	let index = 0;

	const flushParagraph = (buffer) => {
		if (buffer.length === 0) return;
		out.push(`<p>${inline(buffer.join(" "))}</p>`);
		buffer.length = 0;
	};
	const buffer = [];

	while (index < lines.length) {
		const line = lines[index];

		if (/^\s*```/.test(line)) {
			flushParagraph(buffer);
			const code = [];
			index += 1;
			while (index < lines.length && !/^\s*```/.test(lines[index])) {
				code.push(lines[index]);
				index += 1;
			}
			index += 1;
			out.push(`<pre><code>${escapeHtml(code.join("\n"))}</code></pre>`);
			continue;
		}

		const heading = line.match(/^(#{1,4})\s+(.*)$/);
		if (heading !== null) {
			flushParagraph(buffer);
			const level = Math.min(4, heading[1].length + 1);
			out.push(`<h${level}>${inline(heading[2])}</h${level}>`);
			index += 1;
			continue;
		}

		// 表格：表头行 + 分隔行
		if (/\|/.test(line) && index + 1 < lines.length && /^\s*\|?[\s:-]*\|[\s:|-]*$/.test(lines[index + 1])) {
			flushParagraph(buffer);
			const cells = (row) => row.replace(/^\s*\|/, "").replace(/\|\s*$/, "").split("|").map((cell) => inline(cell.trim()));
			const header = cells(line);
			index += 2;
			const rows = [];
			while (index < lines.length && /\|/.test(lines[index]) && lines[index].trim() !== "") {
				rows.push(cells(lines[index]));
				index += 1;
			}
			out.push(`<div class="table-wrap"><table><thead><tr>${header.map((cell) => `<th>${cell}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`);
			continue;
		}

		if (/^\s*([-*]|\d+[.)])\s+/.test(line)) {
			flushParagraph(buffer);
			const ordered = /^\s*\d+[.)]\s+/.test(line);
			const items = [];
			while (index < lines.length && /^\s*([-*]|\d+[.)])\s+/.test(lines[index])) {
				items.push(inline(lines[index].replace(/^\s*([-*]|\d+[.)])\s+/, "")));
				index += 1;
			}
			const tag = ordered ? "ol" : "ul";
			out.push(`<${tag}>${items.map((item) => `<li>${item}</li>`).join("")}</${tag}>`);
			continue;
		}

		if (line.trim() === "") {
			flushParagraph(buffer);
			index += 1;
			continue;
		}

		buffer.push(line.trim());
		index += 1;
	}

	flushParagraph(buffer);
	return out.join("\n");
}

function parseChapter(config) {
	const path = join(REF_DIR, config.file);
	if (!existsSync(path)) return null;
	const raw = readFileSync(path, "utf8");
	const lines = raw.split(/\r?\n/);
	const titleLine = lines.find((line) => /^#\s+/.test(line));
	const title = titleLine === undefined ? config.file : titleLine.replace(/^#\s+/, "").trim();

	// 按二级标题切段，方便网页里分段展示
	const sections = [];
	let current = { heading: "导语", lines: [] };
	for (const line of lines) {
		const second = line.match(/^##\s+(.*)$/);
		if (second !== null) {
			sections.push(current);
			current = { heading: second[1].trim(), lines: [] };
			continue;
		}
		if (/^#\s+/.test(line)) continue;
		current.lines.push(line);
	}
	sections.push(current);

	const cleaned = sections
		.map((section) => ({ heading: section.heading, html: markdownToHtml(section.lines.join("\n")) }))
		.filter((section) => section.html.trim() !== "");

	const hookSection = cleaned.find((section) => section.heading.includes("钩子") || section.heading === "导语");
	const hook = hookSection === undefined
		? (cleaned[0] === undefined ? "" : stripTags(cleaned[0].html).slice(0, 60))
		: stripTags(hookSection.html).slice(0, 60);

	return {
		id: config.id,
		module: config.modules.length > 0 ? config.modules[0] : "",
		modules: config.modules,
		source: config.source,
		title,
		hook,
		sections: cleaned,
	};
}

function main() {
	const chapters = CHAPTERS.map(parseChapter).filter((chapter) => chapter !== null);
	if (chapters.length === 0) {
		console.error("错误：references 里没有可用的讲义文件");
		process.exit(1);
	}

	const outPath = join(SKILL_ROOT, "ui", "book.js");
	mkdirSync(dirname(outPath), { recursive: true });
	const payload = "// 由 scripts/dlbook.js 从 references 生成。这是自编讲义，不是教材原文。\n"
		+ `window.DL_BOOK = ${JSON.stringify({ generatedAt: new Date().toISOString(), chapters }, null, "\t")};\n`;
	writeFileSync(outPath, payload, "utf8");
	console.log(`已生成 ${chapters.length} 章，写入 ${outPath}`);
	for (const chapter of chapters) console.log(`  ${chapter.title}（${chapter.sections.length} 节）`);
}

main();

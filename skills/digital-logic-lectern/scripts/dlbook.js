#!/usr/bin/env node
/**
 * dlbook —— 把 references 里的学习资料转成网页可用的数据（零依赖）
 *
 * 说明：这里转的是本仓库自编的学习资料，不是出版社教材原文。
 * 结构：章 → 节（##）→ 小节（###），小节编号即锚点，例如 #sec-2.5.1。
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
const UI_DIR = join(SKILL_ROOT, "ui");

const SOURCE = {
	title: "《数字逻辑》（第七版）",
	editors: "白中英、朱正东 主编",
	publisher: "科学出版社",
	year: "2020",
	note: "学习资料按该教材目录自编，不是教材原文。",
};

const CHAPTERS = [
	{ id: "c1", file: "textbook/ch1.md", modules: ["M1", "M2"], label: "第一章" },
	{ id: "c2", file: "textbook/ch2.md", modules: ["M3"], label: "第二章" },
	{ id: "c3", file: "textbook/ch3.md", modules: ["M4"], label: "第三章" },
	{ id: "c4", file: "textbook/ch4.md", modules: ["M5"], label: "第四章" },
	{ id: "c5", file: "textbook/ch5.md", modules: ["M6"], label: "第五章" },
	{ id: "c6", file: "textbook/ch6.md", modules: ["M7"], label: "第六章" },
	{ id: "c7", file: "textbook/ch7.md", modules: [], label: "第七章" },
	{ id: "c8", file: "appendix_verilog.md", modules: ["M8"], label: "附录" },
	{ id: "glossary", file: "glossary.md", modules: [], label: "术语表" },
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

/** 插图直接内联成 data URI，页面不再依赖静态路由，离线也能显示。 */
function figureSource(relativePath) {
	const file = join(UI_DIR, relativePath);
	if (!existsSync(file)) {
		console.warn(`插图缺失：${relativePath}`);
		return relativePath;
	}
	const svg = readFileSync(file).toString("base64");
	return `data:image/svg+xml;base64,${svg}`;
}

function inline(text) {
	return escapeHtml(text)
		.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
		.replace(/`([^`]+)`/g, "<code>$1</code>")
		.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
}

/** 表格单元格：纯小节号自动变成跳转链接。 */
function tableCell(text) {
	const cell = text.trim();
	if (/^\d+\.\d+(\.\d+)?$/.test(cell)) {
		return `<a class="jump" href="#sec-${cell}" data-sec="sec-${cell}">${cell}</a>`;
	}
	return inline(cell);
}

/** 行级 Markdown 转 HTML：标题、列表、表格、代码块、段落。anchor 用于给配图编 id。 */
function markdownToHtml(markdown, anchor) {
	const lines = markdown.split(/\r?\n/);
	const out = [];
	let index = 0;
	let figures = 0;

	const flushParagraph = (buffer) => {
		if (buffer.length === 0) return;
		const text = inline(buffer.join(" "));
		const cls = buffer[0].startsWith("易错：") ? ' class="pitfall"' : "";
		out.push(`<p${cls}>${text}</p>`);
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

		const image = line.trim().match(/^!\[([^\]]*)\]\(([^)\s]+)\)$/);
		if (image !== null) {
			flushParagraph(buffer);
			const alt = escapeHtml(image[1]);
			const src = figureSource(image[2]);
			const caption = alt === "" ? "" : `<figcaption>${alt}</figcaption>`;
			figures += 1;
			const figId = `fig-${anchor === undefined || anchor === "" ? "page" : anchor}-${figures}`;
			out.push(`<figure id="${figId}" data-fig="${figId}" data-sec="${anchor === undefined ? "" : anchor}" data-caption="${alt}">`
				+ `<img src="${src}" alt="${alt}" loading="lazy">${caption}</figure>`);
			index += 1;
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

		if (/\|/.test(line) && index + 1 < lines.length && /^\s*\|?[\s:-]*\|[\s:|-]*$/.test(lines[index + 1])) {
			flushParagraph(buffer);
			const cells = (row) => row.replace(/^\s*\|/, "").replace(/\|\s*$/, "").split("|").map(tableCell);
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

/** 从“2.5 译码器和编码器”这样的标题里取出编号。 */
function splitNumber(heading) {
	const matched = heading.match(/^(\d+(?:\.\d+)+)\s*(.*)$/);
	if (matched === null) return { number: "", title: heading.trim() };
	return { number: matched[1], title: matched[2].trim() };
}

function parseChapter(config) {
	const path = join(REF_DIR, config.file);
	if (!existsSync(path)) return null;
	const raw = readFileSync(path, "utf8");
	const lines = raw.split(/\r?\n/);
	const titleLine = lines.find((line) => /^#\s+/.test(line));
	const title = titleLine === undefined ? config.file : titleLine.replace(/^#\s+/, "").trim();

	const sections = [];
	let section = null;
	let sub = null;

	const closeSub = () => {
		if (section === null || sub === null) return;
		const parsed = splitNumber(sub.heading);
		const anchor = parsed.number === "" ? `sec-${config.id}-${section.subs.length}` : `sec-${parsed.number}`;
		const html = markdownToHtml(sub.lines.join("\n"), anchor);
		if (html.trim() !== "") {
			section.subs.push({
				number: parsed.number,
				heading: parsed.title,
				anchor,
				html,
			});
		}
		sub = null;
	};

	const closeSection = () => {
		closeSub();
		if (section === null) return;
		const parsed = splitNumber(section.heading);
		const anchor = parsed.number === "" ? `sec-${config.id}-${sections.length}` : `sec-${parsed.number}`;
		const html = markdownToHtml(section.lines.join("\n"), anchor);
		section.number = parsed.number;
		section.heading = parsed.title;
		section.anchor = anchor;
		section.html = html;
		if (section.number !== "" || html.trim() !== "" || section.subs.length > 0) sections.push(section);
		section = null;
	};

	for (const line of lines) {
		if (/^#\s+/.test(line)) continue;
		const second = line.match(/^##\s+(.*)$/);
		if (second !== null) {
			closeSection();
			section = { heading: second[1].trim(), lines: [], subs: [] };
			continue;
		}
		const third = line.match(/^###\s+(.*)$/);
		if (third !== null) {
			closeSub();
			if (section === null) section = { heading: title, lines: [], subs: [] };
			sub = { heading: third[1].trim(), lines: [] };
			continue;
		}
		if (sub !== null) sub.lines.push(line);
		else if (section !== null) section.lines.push(line);
	}
	closeSection();

	return {
		id: config.id,
		label: config.label,
		title,
		modules: config.modules,
		sections,
	};
}

function main() {
	const chapters = CHAPTERS.map(parseChapter).filter((chapter) => chapter !== null);
	if (chapters.length === 0) {
		console.error("错误：references 里没有可用的学习资料文件");
		process.exit(1);
	}

	const outPath = join(SKILL_ROOT, "ui", "book.js");
	mkdirSync(dirname(outPath), { recursive: true });
	const payload = "// 由 scripts/dlbook.js 从 references 生成。这是自编学习资料，不是教材原文。\n"
		+ `window.DL_BOOK = ${JSON.stringify({ generatedAt: new Date().toISOString(), source: SOURCE, chapters }, null, "\t")};\n`;
	writeFileSync(outPath, payload, "utf8");
	console.log(`已生成 ${chapters.length} 章，写入 ${outPath}`);
	for (const chapter of chapters) {
		const subs = chapter.sections.reduce((sum, section) => sum + section.subs.length, 0);
		console.log(`  ${chapter.title}（${chapter.sections.length} 节，${subs} 小节）`);
	}
}

main();

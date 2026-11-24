/**
 * dsh-digital-logic-lectern —— DeepSeek Harness 宿主插件
 *
 * 做两件事：
 * 1. 启动时扫描包内 skills/ 下的一层目录，读取其中的 SKILL.md，
 *    通过 ctx.skills.register() 注册为运行时技能，resourceBase 指向该目录，
 *    使技能正文里的 scripts/ 与 references/ 相对路径可以解析。
 * 2. 把技能里的 ui/ 挂到 webServer 的 /plugins/digital-logic-lectern/ 下，
 *    供 lib/client.js 的侧栏面板用 iframe 在应用内打开讲台。
 *
 * 零第三方依赖，只用 node: 内置模块。
 */

import { readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

export const name = "dsh-digital-logic-lectern";

/** 依赖的技能服务，缺它时插件不会激活。 */
export const inject = ["skills"];

const PACKAGE_ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SKILLS_ROOT = join(PACKAGE_ROOT, "skills");
const SOURCE = "dsh-digital-logic-lectern";
const SKILL_ID = "digital-logic-lectern";
const UI_ROOT = join(SKILLS_ROOT, SKILL_ID, "ui");

/** 讲台页面在 webServer 上的挂载点，与 lib/client.js 里的 PAGE_PATH 对应。 */
const PAGE_BASE = "/plugins/digital-logic-lectern";

const UI_ROUTES = [
	["/index.html", "index.html", "text/html; charset=utf-8"],
	["/book.js", "book.js", "text/javascript; charset=utf-8"],
	["/questions.js", "questions.js", "text/javascript; charset=utf-8"],
	["/bupt-logo.png", "bupt-logo.png", "image/png"],
];

/**
 * 极简 YAML frontmatter 解析：只取技能注册认识的三个标量字段。
 */
function parseFrontmatter(text) {
	const firstLineEnd = text.indexOf("\n");
	const isFenced = firstLineEnd >= 0 && text.slice(0, firstLineEnd).replace(/\r$/, "") === "---";
	if (!isFenced) return { data: {}, body: text.trim() };

	const end = text.indexOf("\n---", firstLineEnd + 1);
	const body = end === -1 ? "" : text.slice(end + 4).trim();
	const header = text.slice(firstLineEnd + 1, end === -1 ? text.length : end);
	const data = {};

	for (const rawLine of header.split("\n")) {
		const match = rawLine.trim().match(/^([A-Za-z][A-Za-z0-9_-]*):\s*(.*)$/);
		if (match === null) continue;
		const key = match[1];
		let value = match[2].trim();
		if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
			value = value.slice(1, -1);
		}
		data[key] = value;
	}

	return { data, body };
}

/**
 * 某个静态文件的处理器。每次请求重新读盘，改了 ui/ 不必重启宿主。
 */
function serveUiFile(fileName, contentType) {
	return (req, res) => {
		let body;
		try {
			body = readFileSync(join(UI_ROOT, fileName));
		} catch {
			res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
			res.end("not found");
			return;
		}
		res.writeHead(200, {
			"content-type": contentType,
			"cache-control": "no-store",
			"referrer-policy": "no-referrer",
		});
		res.end(req.method === "HEAD" ? undefined : body);
	};
}

export function apply(ctx) {
	const disposers = [];

	for (const entry of readdirSync(SKILLS_ROOT)) {
		const skillDir = join(SKILLS_ROOT, entry);
		if (!statSync(skillDir).isDirectory()) continue;

		const skillFile = join(skillDir, "SKILL.md");
		let raw = "";
		try {
			raw = readFileSync(skillFile, "utf8");
		} catch {
			continue;
		}

		const { data, body } = parseFrontmatter(raw);
		const skillName = data.name?.trim();
		if (!skillName) continue;

		disposers.push(ctx.skills.register({
			name: skillName,
			description: data.description?.trim() ?? "",
			...(data.whenToUse?.trim() ? { whenToUse: data.whenToUse.trim() } : {}),
			source: SOURCE,
			content: body,
			metadata: {
				version: "0.6.0",
				author: "刘柏铭（Liu Baiming）",
				course: "数字逻辑",
				textbook: "《数字逻辑》（第七版），白中英、朱正东主编，科学出版社，2020 年",
				repo: "dsh-digital-logic-lectern",
			},
			resourceBase: {
				kind: "directory",
				path: skillDir,
			},
		}));
	}

	ctx.effect(() => () => {
		for (const dispose of disposers) dispose?.();
	}, `${name}: register skills`);

	// 旧宿主没有 webServer 时，插件照常提供技能，只是没有应用内页面。
	ctx.inject(["webServer"], (sctx) => {
		sctx.effect(() => {
			const routes = UI_ROUTES.map(([suffix, fileName, contentType]) =>
				sctx.get("webServer").register({
					kind: "exact",
					path: PAGE_BASE + suffix,
					handler: serveUiFile(fileName, contentType),
				})
			);
			return () => {
				for (const dispose of routes) dispose?.();
			};
		}, `${name}: ui routes`);
	});
}

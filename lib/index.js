/**
 * dsh-digital-logic-lectern —— DeepSeek Harness 宿主插件
 *
 * 做两件事：
 * 1. 启动时扫描包内 skills/ 下的一层目录，读取其中的 SKILL.md，
 *    通过 ctx.skills.register() 注册为运行时技能，resourceBase 指向该目录，
 *    使技能正文里的 scripts/ 与 references/ 相对路径可以解析。
 * 2. 把技能里的 ui/ 挂到 webServer 的 /dsh-digital-logic-lectern/ 下，
 *    供 lib/client.js 的侧栏面板用 iframe 在应用内打开插件页面。
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

/**
 * 插件页面在 webServer 上的挂载点，与 lib/client.js 里的 PAGE_PATH 对应。
 * 不要放在 /plugins 下：那个前缀由宿主的 client-modules 独占，只发 bundle 与图片。
 * 也不要放 /api 下：那个前缀要过连接鉴权。
 */
const PAGE_BASE = "/dsh-digital-logic-lectern";

const UI_ROUTES = [
	["/index.html", "index.html", "text/html; charset=utf-8"],
	["/book.js", "book.js", "text/javascript; charset=utf-8"],
	["/questions.js", "questions.js", "text/javascript; charset=utf-8"],
];

const FIGURE_ROUTE = "/figures";
const FIGURE_PREFIX = FIGURE_ROUTE + "/";
const FIGURE_ROOT = join(UI_ROOT, "figures");

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

/**
 * 插图的处理器：只允许 figures/ 下一层的 .svg，防止路径穿越。
 */
function serveFigure(req, res) {
	const prefix = PAGE_BASE + FIGURE_PREFIX;
	let urlPath = "";
	try {
		urlPath = decodeURIComponent((req.url ?? "").split("?")[0]);
	} catch {
		res.writeHead(400, { "content-type": "text/plain; charset=utf-8" });
		res.end("bad request");
		return;
	}

	const fileName = urlPath.startsWith(prefix) ? urlPath.slice(prefix.length) : "";
	if (!/^[A-Za-z0-9._-]+\.svg$/.test(fileName)) {
		res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
		res.end("not found");
		return;
	}

	let body;
	try {
		body = readFileSync(join(FIGURE_ROOT, fileName));
	} catch {
		res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
		res.end("not found");
		return;
	}

	res.writeHead(200, {
		"content-type": "image/svg+xml; charset=utf-8",
		"cache-control": "no-store",
		"referrer-policy": "no-referrer",
	});
	res.end(req.method === "HEAD" ? undefined : body);
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
				version: "0.7.3",
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
			routes.push(
				sctx.get("webServer").register({
					kind: "prefix",
					path: PAGE_BASE + FIGURE_ROUTE,
					handler: serveFigure,
				})
			);
			return () => {
				for (const dispose of routes) dispose?.();
			};
		}, `${name}: ui routes`);
	});
}

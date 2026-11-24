/**
 * dsh-digital-logic-lectern —— DeepSeek Harness 宿主插件
 *
 * 启动时扫描包内 skills/ 下的一层目录，读取其中的 SKILL.md，
 * 通过 ctx.skills.register() 注册为运行时技能，resourceBase 指向该目录，
 * 使技能正文里的 scripts/ 与 references/ 相对路径可以解析。
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
				version: "0.2.0",
				course: "数字逻辑",
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
}

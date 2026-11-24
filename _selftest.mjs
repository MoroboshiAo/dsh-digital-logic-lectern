/**
 * 用 mock 的 ctx 验证服务端与客户端入口：
 * - 能发现 SKILL.md、能注册、resourceBase 正确、正文已剥离 frontmatter；
 * - webServer 上挂了四个静态路由；
 * - 客户端注册侧栏图标、主页面板、插件行选项与斜杠命令。
 * 运行：node _selftest.mjs
 */

import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { apply, inject, name } from "./lib/index.js";

const registered = [];
const routes = [];
let effectRan = false;

const ctx = {
	skills: {
		register(skill) {
			registered.push(skill);
			return () => {};
		},
	},
	effect(factory) {
		effectRan = true;
		factory();
	},
	inject(names, callback) {
		assert.deepEqual(names, ["webServer"], "只应注入 webServer");
		callback({
			get(key) {
				assert.equal(key, "webServer");
				return {
					register(route) {
						routes.push(route);
						return () => {};
					},
				};
			},
			effect(factory) {
				factory();
			},
		});
	},
};

assert.equal(name, "dsh-digital-logic-lectern");
assert.deepEqual(inject, ["skills"]);

apply(ctx);

assert.ok(effectRan, "ctx.effect 应该被调用，用于绑定生命周期");
assert.equal(registered.length, 1, `应注册 1 个技能，实际 ${registered.length}`);

const skill = registered[0];
assert.equal(skill.name, "digital-logic-lectern");
assert.ok(skill.description.length > 20, "description 不能为空或过短");
assert.ok(skill.whenToUse.length > 10, "whenToUse 应存在");
assert.equal(skill.source, "dsh-digital-logic-lectern");
assert.ok(!skill.content.startsWith("---"), "正文不应包含 frontmatter");
assert.ok(skill.content.includes("学习卡"), "正文应是 SKILL.md 的主体");
assert.equal(skill.resourceBase.kind, "directory");
assert.ok(existsSync(join(skill.resourceBase.path, "scripts", "dltool.js")), "resourceBase 下应有 scripts/dltool.js");
assert.ok(existsSync(join(skill.resourceBase.path, "references", "m1_number_code.md")), "references 应完整");
assert.equal(skill.metadata.author, "刘柏铭（Liu Baiming）");

assert.equal(routes.length, 4, `应挂 4 个静态路由，实际 ${routes.length}`);
assert.deepEqual(
	routes.map((route) => route.path).sort(),
	[
		"/dsh-digital-logic-lectern/book.js",
		"/dsh-digital-logic-lectern/figures",
		"/dsh-digital-logic-lectern/index.html",
		"/dsh-digital-logic-lectern/questions.js",
	]
);
assert.equal(routes.find((route) => route.path.endsWith("/figures")).kind, "prefix", "figures 应按前缀匹配");
assert.ok(existsSync(join(skill.resourceBase.path, "ui", "figures", "gates.svg")), "ui/figures 下应有插图");
assert.ok(existsSync(join(skill.resourceBase.path, "ui", "figures", "q-kmap.svg")), "ui/figures 下应有题目配图");

/* ---------- 客户端 ---------- */

let definition = null;
const clientCode = readFileSync(new URL("./lib/client.js", import.meta.url), "utf8");
new Function("window", clientCode)({
	__ModuleLoader__: {
		load(value) {
			definition = value;
		},
	},
});
assert.ok(definition !== null, "客户端应通过 __ModuleLoader__ 注册");
assert.equal(definition.id, "dsh-digital-logic-lectern");

const clientModule = definition.factory((id) => {
	if (id === "react") return { useState: (value) => [value, () => {}] };
	return { jsx: () => null, jsxs: () => null };
});

const slots = [];
let commands = 0;
clientModule.apply({
	slots: {
		inject(slotName, callback) {
			callback();
		},
		register(config) {
			slots.push(config.name);
			return () => {};
		},
	},
	effect(factory, label) {
		assert.equal(typeof label, "string");
		factory();
		return () => {};
	},
	inject(names, callback) {
		if (names.length === 1 && names[0] === "layout") {
			callback({
				get() {
					return { selectPanel() {} };
				},
				layout: { selectPanel() {} },
			});
			return () => {};
		}
		assert.deepEqual(names, ["commandUi"]);
		callback({
			effect(factory) {
				factory();
			},
			get() {
				return {
					register() {
						commands += 1;
						return () => {};
					},
				};
			},
		});
		return () => {};
	},
	get() {
		return { selectPanel() {} };
	},
	sessions: {
		list: { getSnapshot: () => ({ byId: {} }) },
		scope() {
			return undefined;
		},
	},
});

assert.deepEqual(clientModule.inject, ["slots", "commandUi", "sessions", "layout"]);
assert.deepEqual(
	slots.sort(),
	["main", "plugins.bundle.config", "plugins.row.config", "sidebar.panellist"],
	"客户端应占满四个 slot"
);
assert.equal(commands, 1, "应有 1 个斜杠命令");

console.log(`自检通过：注册 ${registered.length} 个技能（${registered.map((item) => item.name).join(", ")}）`);
console.log(`resourceBase：${skill.resourceBase.path}`);
console.log(`静态路由：${routes.length} 个；客户端 slot：${slots.join(", ")}；命令：${commands} 个`);

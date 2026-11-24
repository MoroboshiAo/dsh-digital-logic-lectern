/**
 * 用 mock 的 ctx 验证：能发现 SKILL.md、能注册、resourceBase 正确、正文已剥离 frontmatter。
 * 运行：node _selftest.mjs
 */

import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { apply, inject, name } from "./lib/index.js";

const registered = [];
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
assert.ok(skill.content.includes("六件套"), "正文应是 SKILL.md 的主体");
assert.equal(skill.resourceBase.kind, "directory");
assert.ok(existsSync(join(skill.resourceBase.path, "scripts", "dltool.js")), "resourceBase 下应有 scripts/dltool.js");
assert.ok(existsSync(join(skill.resourceBase.path, "references", "m1_number_code.md")), "references 应完整");

console.log(`自检通过：注册 ${registered.length} 个技能（${registered.map((item) => item.name).join(", ")}）`);
console.log(`resourceBase：${skill.resourceBase.path}`);

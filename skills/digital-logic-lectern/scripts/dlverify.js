#!/usr/bin/env node
/**
 * dlverify —— 用 iverilog 真跑仿真，没装就明确报错（零依赖）
 *
 * 用法：node dlverify.js <testbench.v> [--top 名字] [--timeout 10] [--json]
 */

import { spawnSync } from "node:child_process";
import { existsSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { isAbsolute, join, resolve } from "node:path";

const EXIT_MISSING_TOOL = 3;
const EXIT_FAILED = 1;

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
	console.error("用法：node dlverify.js <testbench.v> [--top 名字] [--timeout 10] [--json]");
	process.exit(2);
}

const sources = files.map((file) => (isAbsolute(file) ? file : resolve(file)));
for (const source of sources) {
	if (!existsSync(source)) {
		console.error(`错误：找不到文件 ${source}`);
		process.exit(2);
	}
}

const probe = spawnSync("iverilog", ["-V"], { encoding: "utf8" });
if (probe.error !== undefined) {
	console.error([
		"错误：找不到 iverilog。",
		"这种情况下任何 Verilog 结论都只能标「未验证」，不许写「验证通过」。",
		"",
		"安装二选一：",
		"  1. 下载 oss-cad-suite，解压后把它的 bin 目录加进 PATH",
		"  2. 在 WSL 里用包管理器安装 iverilog，再把 testbench 放到 WSL 下运行",
	].join("\n"));
	process.exit(EXIT_MISSING_TOOL);
}

const output = join(tmpdir(), `dlverify-${process.pid}.vvp`);
const timeout = Number(flags.get("timeout") ?? 10) * 1000;
const startedAt = Date.now();

const compileArgs = ["-g2012", "-Wall", "-o", output];
if (flags.get("top") !== undefined && flags.get("top") !== true) {
	compileArgs.push("-s", String(flags.get("top")));
}
compileArgs.push(...sources);

const compile = spawnSync("iverilog", compileArgs, { encoding: "utf8" });
const compileErrors = `${compile.stderr ?? ""}`.trim();
const compileOk = compile.status === 0;

let stdout = "";
let simOk = false;
if (compileOk) {
	const run = spawnSync("vvp", [output], { encoding: "utf8", timeout });
	stdout = `${run.stdout ?? ""}`.trim();
	const runErrors = `${run.stderr ?? ""}`.trim();
	if (run.error !== undefined) {
		stdout += `\n[运行失败] ${run.error.message}`;
	} else if (run.status !== 0) {
		stdout += `\n[运行异常退出，退出码 ${run.status}]${runErrors === "" ? "" : `\n${runErrors}`}`;
	} else {
		simOk = true;
		if (runErrors !== "") stdout += `\n[stderr]\n${runErrors}`;
	}
}

if (existsSync(output)) rmSync(output, { force: true });

const waveTable = stdout
	.split(/\r?\n/)
	.filter((line) => line.trim().length > 0)
	.map((line) => `  ${line}`)
	.join("\n");

const result = {
	compile_ok: compileOk,
	sim_ok: simOk,
	compile_errors: compileErrors,
	stdout,
	wave_table: waveTable,
	elapsed_ms: Date.now() - startedAt,
	sources,
};

if (flags.get("json") === true) {
	console.log(JSON.stringify(result, null, 2));
} else {
	console.log(`源文件：${sources.join(", ")}`);
	console.log(`编译：${compileOk ? "通过" : "失败"}`);
	if (!compileOk) console.log(compileErrors);
	if (compileOk) {
		console.log(`仿真：${simOk ? "通过" : "失败"}`);
		console.log("波形表（来自 $display / $monitor 的真实输出）：");
		console.log(waveTable === "" ? "  （无输出）" : waveTable);
	}
	console.log(`耗时：${result.elapsed_ms} ms`);
}

process.exit(simOk ? 0 : EXIT_FAILED);

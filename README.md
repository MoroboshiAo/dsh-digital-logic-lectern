# 数字逻辑辅助学习插件

npm 包名：`dsh-digital-logic-lectern`

作者：刘柏铭（Liu Baiming）｜[English](README.en.md)

面向《数字逻辑》（第七版，白中英、朱正东主编，科学出版社，2020 年）的学习与练习插件，用于 DeepSeek Harness。插件提供一套课程知识库、一份 80 题的题库和一个网页界面；知识库按该教材目录自编，不是教材原文。

插件包含一个技能和一个网页。技能负责解释概念、分步推导、核对计算结果、按教材范围出练习；网页负责看讲义、做章节自测、人机对战、收错题。网页可以在 DSH 应用内直接打开。

## 安装

从 npm 安装：

```bash
npm install dsh-digital-logic-lectern
```

或在 DSH 的添加插件对话框中填包名 `dsh-digital-logic-lectern`。也可以填 Git 地址：

```
https://github.com/MoroboshiAo/dsh-digital-logic-lectern.git
```

Git 方式会克隆仓库再安装，需要本机有 git 与网络。仓库已公开，不需要凭据。三种写法等价：npm 包名、Git 地址、本地目录或 tgz。

```bash
dsh plugin --profile <profile> add file:/absolute/path/dsh-digital-logic-lectern-0.6.4.tgz
```

也可以把 `skills/digital-logic-lectern` 复制到 `~/.dsh/skills/`。几种方式只选一种，重复安装会让同名技能互相遮蔽。安装后重启客户端。

## 打开页面

应用内三个入口：

- 侧栏底部的「数字逻辑」图标，整页打开。
- 输入框发 `/logic-lectern`。
- 插件页的插件行，按「在应用内打开」。

插件行还有两个选项：默认难度（简单 / 普通 / 困难）与侧栏入口开关，保存在本地。关掉侧栏图标后，命令和插件行仍可打开页面。默认难度只决定开始自测时预选哪一档，进入后仍可改。

客户端面板需要 DSH 0.2.1-rc.2 或更新版本；旧版本只注册技能，网页在浏览器里打开同样可用。

浏览器打开前先生成页面数据：

```bash
cd skills/digital-logic-lectern
node scripts/dlbook.js --build      # 讲义 → 页面数据
node scripts/dlquiz.js --build      # 生成 80 题并复核计算题
start ui/index.html
```

仓库里已带生成好的 `ui/book.js` 与 `ui/questions.js`。改过 `references/` 后重跑这两条命令。`dlquiz --build` 会用 `dltool` 逐题复核计算题，答案不一致就拒绝写入；`--seed <数字>` 可换一批题，`--count <数字>` 可改题量。

## 页面

右上角方形按钮循环切换跟随系统、浅色、深色，选择保存在本地。

**学习。** 第一章到第七章，加 Verilog 附录与术语表。左侧目录可展开到小节（例如 1.1 → 1.1.1），搜索框同时搜标题与正文，术语表每一行都能跳到对应小节。页脚注明教材全名、主编、出版社、版次与版本号。

**自测。** 选章节、模式与题数后开始。人机对战有三档难度：

| 难度 | 基础正确率 | 答题延迟 | 每题得分 |
| --- | --- | --- | --- |
| 简单 | 58% | 3.3–5.5 秒 | 60 |
| 普通 | 80% | 2.5–4.2 秒 | 100 |
| 困难 | 93% | 1.7–2.8 秒 | 150 |

题目越难，AI 正确率越低、延迟越短。鼠标点选或按 1–4 作答，回车进入下一题。

**错题本。** 答错自动收录，可重做、单条移除、整体清空。数据存在浏览器本地。

## 命令行工具

| 命令 | 用途 |
| --- | --- |
| `node scripts/dltool.js` | 进制转换、原码/反码/补码、移码、格雷码、BCD、真值表、卡诺图、海明码 |
| `node scripts/dlquiz.js` | 生成题库并用 `dltool` 复核计算题 |
| `node scripts/dlbook.js` | 把 `references/` 转成页面数据 |
| `node scripts/dlverify.js` | 通过 iverilog 跑 Verilog 仿真 |

回答里的位模式与计算结果都取自这些命令的输出，不靠口算。

## 目录

```
skills/digital-logic-lectern/
├── SKILL.md              技能定义：学习卡结构、工具规则、模块索引、红线
├── references/           八个模块卡、七章讲义、术语表、教材对照表
│   ├── textbook/         ch1 到 ch7，按教材章节与小节编排
│   └── appendix_verilog.md   Verilog 附录，教材外补充
├── scripts/
│   ├── dltool.js         进制、编码、真值表、卡诺图、海明码
│   ├── dlquiz.js         生成题库并复核
│   ├── dlbook.js         由 references 生成页面数据
│   └── dlverify.js       调用 iverilog 跑仿真
├── ui/                   三栏页面：index.html、book.js、questions.js、bupt-logo.png
└── examples/             计数器示例源码
lib/index.js              插件入口：注册技能，提供网页静态路由
lib/client.js             客户端入口：侧栏图标、主面板、插件行选项、斜杠命令
locale/                   插件列表中的中英文名称与简介
cordis.patch.yml          插件清单要求的补丁文件
```

## 题库

80 题，覆盖八个模块。计算题由 `dlquiz.js` 随机生成，答案经 `dltool` 复核；概念题按教材习题范围与配套答案整理的考点手写，未逐题送教师审阅。数字逻辑的习题答案涉及大量图形与公式，本仓库不复刻原题图片，只保留可在终端复核的数值题与文字题。

## 限制

- 讲义按《数字逻辑》（第七版）目录自编，不是出版社原文。章节号已按该版配套课件核对，对照表在 `references/textbook_map.md`。教材 5.5 节用 VHDL，本课程用 Verilog，讲义会指出差异。
- 网页是宿主面板里的 iframe，错题与选项存在宿主页面的 localStorage；清除站点数据或换浏览器会丢失。
- Verilog 仿真需要本机安装 iverilog。没装时 `dlverify.js` 会直接报错并给出安装指引，不会伪造结果；此时任何仿真结论只能标「未验证」。
- 范围限于八个课程模块，模拟电路与实验台操作不在内。

## 许可

MIT，作者刘柏铭（Liu Baiming）。《数字逻辑》（第七版，白中英、朱正东主编，科学出版社，2020 年）版权归出版社所有，本仓库只做术语与章节结构的对照。页面左上角北京邮电大学校徽归学校所有，仅作课程标识。

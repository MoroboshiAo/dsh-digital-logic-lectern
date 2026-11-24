# 数字逻辑辅助学习插件

npm 包名：`dsh-digital-logic-lectern`

作者：刘柏铭（Liu Baiming）｜[English](README.en.md)

数字逻辑课的讲解与练习插件，给 DeepSeek Harness 用。教材口径是《数字逻辑》（第七版），白中英、朱正东主编，科学出版社，2020 年；网页里的讲义按这本书的目录自编，不复制教材正文。

装上之后多一个技能和一个网页。技能负责讲：说一个知识点，按「结论—板书—推导—反例—仿真—提问」六段出讲稿。网页负责练：先学一章，再测这一章，答错的自动进错题本。网页可以在 DSH 应用内打开。

## 安装

配套教材为《数字逻辑》（第七版），白中英、朱正东主编，科学出版社，2020 年。

用 npm 安装：

```bash
npm install dsh-digital-logic-lectern
```

也可以从 GitHub 克隆后按本地目录安装：

```bash
git clone https://github.com/MoroboshiAo/dsh-digital-logic-lectern.git
```

插件方式，在 DeepSeek Harness 的添加插件窗口里填本目录的路径，或填打好的 tgz：

```bash
dsh plugin --profile <配置名> add file:/绝对路径/dsh-digital-logic-lectern-0.6.3.tgz
```

也可以把 `skills/digital-logic-lectern` 整个拷进 `~/.dsh/skills/`。两种方式选一种，别同时放，同名技能会互相盖住。装完重启客户端。

## 打开插件页面

应用内打开有三个入口：

- 侧栏底部的「数字逻辑」图标，点开是整页界面。
- 输入框里发送 `/logic-lectern`。
- 插件页找到本插件那一行，点「在应用内打开」。

插件行里还有两个选项：默认难度（简单 / 普通 / 困难）与侧栏入口开关。选择存在本机；关掉侧栏图标后，命令和插件行仍然能打开页面。默认难度只影响自测页开局时选中哪一档，开始后还能改。

客户端面板需要 DSH 0.2.1-rc.2 或更高。更低的版本只注册技能，不出现图标和命令，网页仍可用浏览器单独打开。

浏览器单独打开时，先生成页面数据：

```bash
cd skills/digital-logic-lectern
node scripts/dlbook.js --build      # 讲义转成页面数据
node scripts/dlquiz.js --build      # 生成四十道题并复核答案
start ui/index.html
```

仓库里已经带了生成好的 `ui/book.js` 与 `ui/questions.js`。改过 `references/` 再重跑这两条命令。`dlquiz --build` 会拿 `dltool` 把每道计算题的答案对一遍，对不上就报错，不写文件；想换一批题，加 `--seed 随便一个数字`。

## 网页

右上角的方形按钮切换浅色、深色与跟随系统，选择记在本机。

**学习**：第一至第七章，加 Verilog 附录与术语表。目录展开到小节，顶部搜索框按关键词过滤，术语表每行可跳到对应小节。

**自测**：选章节、玩法、题数。人机对战另选难度：

| 难度 | AI 正确率基数 | 抢答延迟 | 答对得分 |
| --- | --- | --- | --- |
| 简单 | 58% | 3.3–5.5 秒 | 60 |
| 普通 | 80% | 2.5–4.2 秒 | 100 |
| 困难 | 93% | 1.7–2.8 秒 | 150 |

题目本身越难，AI 的延迟和正确率会再往下走一点。作答可以点选项，也可以按键盘 1 到 4，回车进下一题。

**错题本**：答错的题自动收进来，可以重做。数据存在浏览器本地，关掉页面还在。

## 命令行工具

| 命令 | 用途 |
| --- | --- |
| `node scripts/dltool.js` | 进制换算、原码反码补码移码、格雷码、BCD、真值表、卡诺图化简、海明码 |
| `node scripts/dlquiz.js` | 出题，并用 `dltool` 复核计算题答案 |
| `node scripts/dlbook.js` | 把 `references/` 转成网页讲义数据 |
| `node scripts/dlverify.js` | 调 iverilog 跑仿真 |
| `node scripts/dlcheck.js` | 检查讲稿的结构、时长与数字溯源 |

讲稿里出现的位模式都从这些输出里抄，不靠口算。

## 目录

```
skills/digital-logic-lectern/
├── SKILL.md              技能主体：六段模板、工具规则、演示脚本、红线
├── references/           八个模块的讲解卡、七章讲义、术语表、教材对照表
│   ├── textbook/         ch1 至 ch7，按教材节与小节写
│   └── appendix_verilog.md   教材没有的 Verilog 附录
├── scripts/
│   ├── dltool.js         进制、编码、真值表、卡诺图、海明码
│   ├── dlquiz.js         出题，并调用 dltool 复核
│   ├── dlbook.js         把 references 转成网页讲义
│   ├── dlverify.js       调 iverilog 跑仿真
│   └── dlcheck.js        检查讲稿的结构、时长、数字溯源
├── ui/                   三页签网页：index.html、book.js、questions.js、bupt-logo.png
└── examples/             计数器和两份示例讲稿
lib/index.js              插件入口：注册技能，挂载 ui/ 的静态路由
lib/client.js             客户端入口：侧栏图标、主页面板、插件行选项、斜杠命令
locale/                   插件列表里的中英文名称与简介
cordis.patch.yml          插件清单要的补丁文件
```

## 已知限制

- 讲义按《数字逻辑》（第七版，白中英、朱正东主编，科学出版社，2020 年）的目录自编，不是出版社教材原文。章节号按该版配套课件目录核对过，对照表在 `references/textbook_map.md`。教材 5.5 讲 VHDL，本插件按课程要求写 Verilog，讲稿里会点明差异。
- 应用内页面用 iframe 嵌入同一个静态页面，错题本与选项存在宿主页面的本地存储里。换浏览器或清理站点数据会丢。
- Verilog 仿真要自己装 iverilog。没装时工具直接报错，讲稿只能标「未验证」。
- 题库四十道，计算题由脚本生成并复核，概念题手写。概念题措辞没经过老师审，课堂使用前请自己过一遍。
- 只覆盖这门课的八个模块，不含模拟电路，也不含实验箱操作步骤。

## 许可

MIT，作者刘柏铭（Liu Baiming）。教材《数字逻辑》（第七版，白中英、朱正东主编，科学出版社，2020 年）的版权归原出版社，本仓库只做术语与教学结构的对应。页面左上角的北京邮电大学校徽版权归学校所有，仅作课程标识使用。

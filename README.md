# dsh-digital-logic-lectern

数字逻辑课的讲解和练习插件，给 DeepSeek Harness 用。

装上之后会多一个技能。你说一个知识点，它按固定六段给讲稿；你打开自带的网页，可以先学一章、再测这一章、错的自动收进错题本。

## 三个用法

**讲。** 说「讲一下卡诺图怎么化简」，它给出结论、板书、推导、反例、仿真、提问六段。每段有字数上限，板书不超过七步，超时会先砍推导。

**查。** 进制换算、原码反码补码移码、格雷码、BCD、真值表、卡诺图化简、海明码，一条命令出结果。讲稿里出现的位模式都从这些输出里抄，不靠口算。

**学与测。** 打开 `ui/index.html`，上面三个页签：学习（选章节读讲义）、自测（选章节出题，可单人也可跟 AI 抢答）、错题本（答错的自动记下，能重做）。错题存在浏览器本地，关掉页面也在。

## 安装

插件方式，在 DeepSeek Harness 的添加插件窗口里填这个目录的路径，或者填打好的 tgz：

```bash
dsh plugin --profile <配置名> add file:/绝对路径/dsh-digital-logic-lectern-0.3.0.tgz
```

不想装插件也行，把 `skills/digital-logic-lectern` 整个拷进 `~/.dsh/skills/`，效果一样，只是不参与插件管理。两种方式选一种，别同时放，同名技能会互相盖住。

装完重启客户端。

## 打开网页

页面不联网，也不用起服务器。先把讲义和题库生成出来：

```bash
cd skills/digital-logic-lectern
node scripts/dlbook.js --build      # 讲义转成页面数据
node scripts/dlquiz.js --build      # 出四十道题，顺便复核答案
start ui/index.html
```

`dlquiz --build` 会拿 `dltool` 把每道计算题的答案对一遍，对不上就报错，不写文件。想换一批题，加 `--seed 随便一个数字`。

页面上点选项或者按键盘 1 到 4 作答，回车进下一题。讲义内容来自 `references`，是自编的，不是出版社教材原文，页面上也这么标着。

## 目录

```
skills/digital-logic-lectern/
├── SKILL.md              技能主体：六段模板、工具规则、演示脚本、红线
├── references/           八个模块的讲解卡、术语表、教材对照表
├── scripts/
│   ├── dltool.js         进制、编码、真值表、卡诺图、海明码
│   ├── dlquiz.js         出题，并调用 dltool 复核
│   ├── dlbook.js         把 references 转成网页讲义
│   ├── dlverify.js       调 iverilog 跑仿真
│   └── dlcheck.js        检查讲稿的结构、时长、数字溯源
├── ui/                   三页签网页：index.html、book.js、questions.js
└── examples/             计数器和两份示例讲稿
lib/index.js              插件入口，把上面的技能注册进去
cordis.patch.yml          插件清单要的补丁文件
```

## 已知限制

- 网页里的「电子书」是自编讲义，照八个模块整理的，不是出版社教材原文。教材章节号也还没填，`references/textbook_map.md` 里八行全是「待校对」。
- Verilog 仿真要自己装 iverilog。没装的时候工具会直接报错，讲稿里也只能标「未验证」，不会假装跑过。
- 题库四十道，计算题是脚本生成并复核的，概念题是手写的。概念题的措辞没经过老师审，课堂上用之前自己先过一遍。
- 只覆盖这门课的八个模块，不含模拟电路，也不含具体实验箱的操作步骤。

## 许可

MIT。教材内容版权归原出版社，这里只做术语和教学结构的对应，不复制教材正文。

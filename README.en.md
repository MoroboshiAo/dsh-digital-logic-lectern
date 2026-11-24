# 数字逻辑辅助学习插件

npm package: `dsh-digital-logic-lectern`

Author: Liu Baiming（刘柏铭）｜[中文](README.md)

A study and practice plugin for the Digital Logic course, built for DeepSeek Harness. It follows the table of contents of *Digital Logic* (7th edition), edited by Bai Zhongying and Zhu Zhengdong, Science Press, 2020. The notes are written against that outline; they are not a copy of the textbook.

The plugin ships one skill and one web page. The skill explains concepts, walks through derivations, checks numeric results with a command-line tool, and draws practice questions from the course bank. The page holds the notes, chapter quizzes, human-vs-AI matches, and a wrong-answer list. The page can open inside the DSH app.

## Install

From npm:

```bash
npm install dsh-digital-logic-lectern
```

Or enter the package name `dsh-digital-logic-lectern` in the Harness add-plugin dialog. A Git URL also works:

```
https://github.com/MoroboshiAo/dsh-digital-logic-lectern.git
```

The Git route clones the repository before installing, so git and network access are required. The repository is public. The three routes are equivalent: npm name, Git URL, local directory or tgz.

```bash
dsh plugin --profile <profile> add file:/absolute/path/dsh-digital-logic-lectern-0.7.0.tgz
```

Copying `skills/digital-logic-lectern` into `~/.dsh/skills/` works too. Pick one route; installing twice makes the two copies of the same skill shadow each other. Restart the client afterwards.

## Open the page

Three entry points inside the app:

- The 「数字逻辑」 icon at the bottom of the sidebar opens the page full screen.
- Send `/logic-lectern` from the input box.
- Find the plugin row on the Plugins page and press 「在应用内打开」.

The plugin row also has a default difficulty (easy / normal / hard) and a sidebar-entry switch, both stored locally. If the sidebar icon is off, the command and the plugin row still open the page. The default difficulty only preselects a level when a quiz starts.

The client panel requires DSH 0.2.1-rc.2 or newer. Older hosts register the skill only; the page still works when opened directly in a browser.

To open it in a browser, generate the page data first:

```bash
cd skills/digital-logic-lectern
node scripts/dlbook.js --build      # notes -> page data
node scripts/dlquiz.js --build      # generate 80 questions and verify answers
start ui/index.html
```

The repository already contains generated `ui/book.js` and `ui/questions.js`. Re-run both commands after editing `references/`. `dlquiz --build` checks every calculation question with `dltool` and refuses to write if an answer disagrees. Use `--seed <number>` for another batch or `--count <number>` for a different size.

## The page

The square button at the top right cycles follow-system, light, and dark; the choice is stored locally.

**Study.** Chapters 1 to 7, plus a Verilog appendix and a glossary. The contents tree goes down to subsection level, the search box covers headings and body text, and every glossary row links to its subsection. The footer carries the textbook title, editors, publisher, edition, and the plugin version.

**Quiz.** Pick a chapter, a mode, and a question count. Human-vs-AI mode adds a difficulty level:

| Level | Base accuracy | Answer delay | Points per correct answer |
| --- | --- | --- | --- |
| Easy | 58% | 3.3–5.5 s | 60 |
| Normal | 80% | 2.5–4.2 s | 100 |
| Hard | 93% | 1.7–2.8 s | 150 |

Harder questions lower the AI's accuracy and shorten its delay a little further. Answer with the mouse or keys 1 to 4; Enter moves on.

The "搜题" (Ask) button at the top right of a question hands the stem and options to the `digital-logic-lectern` skill in the conversation: inside the DSH app it switches back to the current session and drops `/digital-logic-lectern` plus the question into the input box; when the page is opened in a plain browser it copies the text instead.

**Review.** Wrong answers are collected automatically and can be redone. Data stays in the browser's local storage.

## Command-line tools

| Command | Purpose |
| --- | --- |
| `node scripts/dltool.js` | Base conversion, sign-magnitude / ones' / two's complement, offset binary, Gray code, BCD, truth tables, Karnaugh maps, Hamming codes |
| `node scripts/dlquiz.js` | Generate questions and verify calculation answers with `dltool` |
| `node scripts/dlbook.js` | Turn `references/` into page data |
| `node scripts/dlverify.js` | Run simulations through iverilog |

Bit patterns and numeric results come from these outputs, not from mental arithmetic.

## Layout

```
skills/digital-logic-lectern/
├── SKILL.md              skill: study-card structure, tool rules, module index, limits
├── references/           eight module cards, seven chapters, glossary, textbook map
│   ├── textbook/         ch1 to ch7, following textbook sections and subsections
│   └── appendix_verilog.md   Verilog appendix, not in the textbook
├── scripts/
│   ├── dltool.js         bases, codes, truth tables, Karnaugh maps, Hamming codes
│   ├── dlquiz.js         generate questions and verify them
│   ├── dlbook.js         build page data from references
│   └── dlverify.js       run iverilog simulations
├── ui/                   three-tab page: index.html, book.js, questions.js, figures/
└── examples/             counter example source
lib/index.js              plugin entry: register the skill, serve ui/ over static routes
lib/client.js             client entry: sidebar icon, main panel, plugin-row options, slash command
locale/                   Chinese and English title and summary for the plugin list
cordis.patch.yml          patch file required by the plugin manifest
```

## Question bank

80 questions across the eight modules. Calculation questions are generated by `dlquiz.js` and every answer is checked against `dltool`; concept questions are written from the topics covered by the textbook exercises and the companion answer set, and have not been reviewed question by question by an instructor. Eleven questions are answered from a figure, with images under `ui/figures/`.

## Figures

The notes carry 40 diagrams covering codes, gates, Boolean identities, Karnaugh maps, the design flow, NAND equivalent circuits, multiplexers, decoders, adders, latches and flip-flops, shift registers, counters, state diagrams, memory arrays, FLASH cells, capacity expansion, PLD/CPLD/FPGA, datapaths, microcode, controllers, sampling and quantization, A/D and D/A conversion, and Verilog modules; the question bank adds eleven figure-based questions. All are hand-drawn SVG in this repository on a fixed dark base so text stays readable in both themes; they are inlined as data URIs at build time, so the page needs no extra image route. No original figures from the textbook or its answer set are reproduced.

## Limits

- The notes follow the outline of *Digital Logic* (7th edition, Bai Zhongying and Zhu Zhengdong, Science Press, 2020). They are not the publisher's text. Section numbers were checked against the companion course materials that ship with that edition; the mapping is in `references/textbook_map.md`. Section 5.5 of the textbook covers VHDL, while this course uses Verilog; the notes point out the difference.
- The in-app page is an iframe over the same static page, so the review list and options live in the host page's local storage. Clearing site data or switching browsers loses them.
- Simulation requires iverilog. Without it `dlverify.js` fails loudly and prints install instructions; simulation results then have to be marked unverified.
- Coverage is limited to the eight course modules. Analog circuits and lab-bench procedures are out of scope.

## License

MIT, by Liu Baiming（刘柏铭）. The textbook *Digital Logic* (7th edition, Bai Zhongying and Zhu Zhengdong, Science Press, 2020) remains under its publisher's copyright; this repository only maps terminology and chapter structure.

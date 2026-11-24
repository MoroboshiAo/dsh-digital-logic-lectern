# dsh-digital-logic-lectern

Author: Liu Baiming（刘柏铭）｜[中文](README.md)

A lecture and practice plugin for a Digital Logic course, built for DeepSeek Harness. It follows the table of contents of *Digital Logic* (7th edition), edited by Bai Zhongying and Zhu Zhengdong, Science Press, 2020. The web pages are written against that outline; they are not a copy of the textbook.

The plugin adds one skill and one web page. The skill writes a lecture: name a topic and it returns six parts — conclusion, board notes, derivation, counterexample, simulation, questions. The page is for practice: study a chapter, take a quiz on it, and wrong answers land in a review list. The page can open inside the DSH app.

## Install

The repository is private. Make sure your GitHub account has access. The course textbook is *Digital Logic* (7th edition), Bai Zhongying and Zhu Zhengdong (eds.), Science Press, 2020.

```bash
git clone https://github.com/MoroboshiAo/dsh-digital-logic-lectern.git
```

Install as a plugin by pointing the Harness add-plugin dialog at this directory, or at the packed tgz:

```bash
dsh plugin --profile <profile> add file:/absolute/path/dsh-digital-logic-lectern-0.6.1.tgz
```

You can also copy `skills/digital-logic-lectern` into `~/.dsh/skills/`. Pick one route; installing both makes the two copies of the same skill shadow each other. Restart the client afterwards.

## Open the page

There are three entry points inside the app:

- The 「数字逻辑」 icon at the bottom of the sidebar opens the page full screen.
- Send `/logic-lectern` from the input box.
- Find the plugin row on the Plugins page and press 「在应用内打开」.

The plugin row also has two options: a default difficulty (easy / normal / hard) and a sidebar-entry switch. Both are stored locally. If you turn the sidebar icon off, the command and the plugin row still open the page. The default difficulty only decides which level is preselected when a quiz starts; you can still change it there.

The client panel requires DSH 0.2.1-rc.2 or newer. Older hosts register the skill only. The page still works when opened directly in a browser.

To open it in a browser, generate the page data first:

```bash
cd skills/digital-logic-lectern
node scripts/dlbook.js --build      # lectures -> page data
node scripts/dlquiz.js --build      # generate 40 questions and verify answers
start ui/index.html
```

The repository already contains generated `ui/book.js` and `ui/questions.js`. Re-run the two commands after editing `references/`. `dlquiz --build` checks every calculation question with `dltool` and refuses to write if an answer disagrees. Add `--seed <number>` for another batch.

## The page

**Study.** Chapters 1 to 7, plus a Verilog appendix and a glossary. The contents tree goes down to subsection level; the search box filters by keyword; every glossary row links to its subsection.

**Quiz.** Pick a chapter, a mode, and a question count. Human-vs-AI mode adds a difficulty level:

| Level | Base accuracy | Answer delay | Points per correct answer |
| --- | --- | --- | --- |
| Easy | 58% | 3.3–5.5 s | 60 |
| Normal | 80% | 2.5–4.2 s | 100 |
| Hard | 93% | 1.7–2.8 s | 150 |

Harder questions lower the AI's accuracy and shorten its delay a little further. Answer with the mouse or keys 1 to 4; Enter moves on.

**Review.** Wrong answers are collected automatically and can be redone. Data stays in the browser's local storage.

## Command-line tools

| Command | Purpose |
| --- | --- |
| `node scripts/dltool.js` | Base conversion, sign-magnitude / ones' / two's complement, offset binary, Gray code, BCD, truth tables, Karnaugh maps, Hamming codes |
| `node scripts/dlquiz.js` | Generate questions and verify calculation answers with `dltool` |
| `node scripts/dlbook.js` | Turn `references/` into page data |
| `node scripts/dlverify.js` | Run simulations through iverilog |
| `node scripts/dlcheck.js` | Check lecture structure, length, and numeric sourcing |

Bit patterns in a lecture come from these outputs, not from mental arithmetic.

## Layout

```
skills/digital-logic-lectern/
├── SKILL.md              skill body: six-part template, tool rules, demo scripts, limits
├── references/           eight module cards, seven chapters, glossary, textbook map
│   ├── textbook/         ch1 to ch7, following textbook sections and subsections
│   └── appendix_verilog.md   Verilog appendix, not in the textbook
├── scripts/
│   ├── dltool.js         bases, codes, truth tables, Karnaugh maps, Hamming codes
│   ├── dlquiz.js         generate questions and verify them
│   ├── dlbook.js         build page data from references
│   ├── dlverify.js       run iverilog simulations
│   └── dlcheck.js        check lecture structure, length, sourcing
├── ui/                   three-tab page: index.html, book.js, questions.js, bupt-logo.png
└── examples/             a counter and two sample lectures
lib/index.js              plugin entry: register the skill, serve ui/ over static routes
lib/client.js             client entry: sidebar icon, main panel, plugin-row options, slash command
cordis.patch.yml          patch file required by the plugin manifest
```

## Limits

- The lectures follow the outline of *Digital Logic* (7th edition, Bai Zhongying and Zhu Zhengdong, Science Press, 2020). They are not the publisher's text. Section numbers were checked against the slide deck that ships with that edition; the mapping is in `references/textbook_map.md`. Section 5.5 of the textbook covers VHDL, while this course uses Verilog; lectures point out the difference.
- The in-app page is an iframe over the same static page, so the review list and options live in the host page's local storage. Clearing site data or switching browsers loses them.
- Simulation requires iverilog. Without it the tool fails loudly and lectures mark results as unverified.
- The bank has 40 questions. Calculation questions are generated and verified by script; concept questions are hand-written and have not been reviewed by the instructor.
- Coverage is limited to the eight course modules. Analog circuits and lab-bench procedures are out of scope.

## License

MIT, by Liu Baiming（刘柏铭）. The textbook *Digital Logic* (7th edition, Bai Zhongying and Zhu Zhengdong, Science Press, 2020) remains under its publisher's copyright; this repository only maps terminology and teaching structure. The BUPT emblem in the page header belongs to the university and is used as a course mark only.

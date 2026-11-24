// 由 scripts/dlquiz.js 生成，种子 20261125，共 80 题。不要手改。
window.DL_QUIZ = {
	"seed": 20261125,
	"generatedAt": "2026-11-24T19:06:49.955Z",
	"checked": 25,
	"items": [
		{
			"id": "q1",
			"module": "M1",
			"type": "base",
			"difficulty": 1,
			"stem": "十进制 290 的 8 进制写法是 442，它换成 10 进制是多少？",
			"options": [
				"290",
				"092",
				"289",
				"580"
			],
			"answer": 0,
			"explain": "按权展开得十进制 290，再除基取余并逆序读取，得到 290。",
			"verify": {
				"args": [
					"base",
					"--from",
					"8",
					"--to",
					"10",
					"--value",
					"442"
				],
				"field": "result"
			}
		},
		{
			"id": "q2",
			"module": "M2",
			"type": "figure",
			"difficulty": 2,
			"stem": "输入 A、B 经图示门电路后，输出 F 的逻辑表达式是？",
			"options": [
				"(AB)′",
				"A+B",
				"AB",
				"A′B′"
			],
			"answer": 2,
			"explain": "与非门先得到 (AB)′，再经非门取反，两次取反还原为 AB。",
			"image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODAgMTUwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IuS4pOS4qui+k+WFpeWFiOe7j+i/h+S4jumdnumXqO+8jOWGjee7j+i/h+mdnumXqO+8jOi+k+WHuuS4uiBGIj4KCTxnIGZpbGw9IiMxYzFmMjYiIHN0cm9rZT0iIzU4Y2MwMiIgc3Ryb2tlLXdpZHRoPSIyLjIiPgoJCTxwYXRoIGQ9Ik02MCA0NGgyNmEzNCAzNCAwIDAgMSAwIDY4SDYweiIvPgoJCTxjaXJjbGUgY3g9IjEyNiIgY3k9Ijc4IiByPSI2Ii8+CgkJPHBhdGggZD0iTTE2OCA1NGw0MiAyNC00MiAyNHoiLz4KCQk8Y2lyY2xlIGN4PSIyMTYiIGN5PSI3OCIgcj0iNiIvPgoJPC9nPgoJPGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOGI5M2ExIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+CgkJPHBhdGggZD0iTTI2IDYwaDM0TTI2IDk2aDM0TTEzMiA3OGgzMk0yMjIgNzhoMzQiLz4KCTwvZz4KCTxnIGZvbnQtZmFtaWx5PSJTZWdvZSBVSSwgTWljcm9zb2Z0IFlhSGVpLCBzYW5zLXNlcmlmIiBmaWxsPSIjOWFhMmIxIiBmb250LXNpemU9IjEzIj4KCQk8dGV4dCB4PSI4IiB5PSI2NCI+QTwvdGV4dD4KCQk8dGV4dCB4PSI4IiB5PSIxMDAiPkI8L3RleHQ+CgkJPHRleHQgeD0iMjYyIiB5PSI4MiI+RjwvdGV4dD4KCTwvZz4KPC9zdmc+Cg==",
			"imageAlt": "A、B 先经过与非门，再经过非门，输出 F"
		},
		{
			"id": "q3",
			"module": "M1",
			"type": "code",
			"difficulty": 2,
			"stem": "8 位补码里，十进制 -93 的编码是哪一个？",
			"options": [
				"01011101",
				"10100011",
				"10100010",
				"11011101"
			],
			"answer": 1,
			"explain": "先写原码 11011101，数值位取反得反码 10100010，末位加一得补码 10100011。",
			"verify": {
				"args": [
					"code",
					"--bits",
					"8",
					"--value",
					"-93"
				],
				"field": "twosComplement"
			}
		},
		{
			"id": "q4",
			"module": "M7",
			"type": "concept",
			"difficulty": 3,
			"stem": "ASM 图中的状态框表示什么？",
			"options": [
				"一个时钟周期内保持的状态及该状态的输出",
				"一个组合逻辑门",
				"一条微指令",
				"一个输入变量"
			],
			"answer": 0,
			"explain": "状态框对应现态，框内写输出；框之间用判断框按条件分支。"
		},
		{
			"id": "q5",
			"module": "M1",
			"type": "gray",
			"difficulty": 2,
			"stem": "4 位二进制 0011 对应的格雷码是？",
			"options": [
				"0110",
				"0011",
				"0010",
				"0100"
			],
			"answer": 2,
			"explain": "格雷码最高位与二进制相同，其余每位等于本位与高位异或，得到 0010。",
			"verify": {
				"args": [
					"gray",
					"--bits",
					"4",
					"--value",
					"3"
				],
				"field": "gray"
			}
		},
		{
			"id": "q6",
			"module": "M6",
			"type": "concept",
			"difficulty": 3,
			"stem": "CPLD 的基本结构通常由什么组成？",
			"options": [
				"可编程与或阵列加宏单元",
				"微程序控制存储器",
				"只有分立门电路",
				"LUT 加触发器"
			],
			"answer": 0,
			"explain": "CPLD 沿用 PAL 的与或阵列，再配宏单元和互连，适合组合逻辑与简单时序。"
		},
		{
			"id": "q7",
			"module": "M1",
			"type": "bcd",
			"difficulty": 3,
			"stem": "十进制数字 7 的 2421 码是哪一组 4 位编码？",
			"options": [
				"1101",
				"0010",
				"0111",
				"1010"
			],
			"answer": 0,
			"explain": "2421 码按权重 2、4、2、1 相加：7 对应 1101。8421 码则是 0111。"
		},
		{
			"id": "q8",
			"module": "M2",
			"type": "figure",
			"difficulty": 3,
			"stem": "图示三变量卡诺图在 m0、m1、m3、m7 处填 1，化简后的最简与或式是？",
			"options": [
				"A′C′ + BC",
				"A′B′ + AC",
				"A′B′ + B′C",
				"A′B′ + BC"
			],
			"answer": 3,
			"explain": "m0 与 m1 相邻合并为 A′B′，m3 与 m7 相邻合并为 BC，共两个圈。",
			"image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMjcwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IuS4ieWPmOmHj+WNoeivuuWbvu+8jOacgOWwj+mhuSAw44CBMeOAgTPjgIE3IOWkhOWhqyAx77yM6KaB5rGC5YaZ5Ye65pyA566A5LiO5oiW5byPIj4KCTxnIGZvbnQtZmFtaWx5PSJTZWdvZSBVSSwgTWljcm9zb2Z0IFlhSGVpLCBzYW5zLXNlcmlmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4KCQk8dGV4dCB4PSIyMTAiIHk9IjI0IiBmaWxsPSIjNThjYzAyIiBmb250LXNpemU9IjEzIiBmb250LXdlaWdodD0iNjAwIj7msYLmnIDnroDkuI7miJblvI88L3RleHQ+CgkJPGcgZmlsbD0iIzlhYTJiMSIgZm9udC1zaXplPSIxMyI+CgkJCTx0ZXh0IHg9Ijc2IiB5PSI1NiI+QUIgXCBDPC90ZXh0PgoJCQk8dGV4dCB4PSIxODAiIHk9IjU2Ij4wPC90ZXh0PgoJCQk8dGV4dCB4PSIyOTAiIHk9IjU2Ij4xPC90ZXh0PgoJCQk8dGV4dCB4PSI3NiIgeT0iOTAiPjAwPC90ZXh0PgoJCQk8dGV4dCB4PSI3NiIgeT0iMTI4Ij4wMTwvdGV4dD4KCQkJPHRleHQgeD0iNzYiIHk9IjE2NiI+MTE8L3RleHQ+CgkJCTx0ZXh0IHg9Ijc2IiB5PSIyMDQiPjEwPC90ZXh0PgoJCTwvZz4KCQk8ZyBmaWxsPSIjZTZlOGVlIiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0iNjAwIj4KCQkJPHRleHQgeD0iMTgwIiB5PSI5MCI+MTwvdGV4dD48dGV4dCB4PSIyOTAiIHk9IjkwIj4xPC90ZXh0PgoJCQk8dGV4dCB4PSIxODAiIHk9IjEyOCI+MDwvdGV4dD48dGV4dCB4PSIyOTAiIHk9IjEyOCI+MTwvdGV4dD4KCQkJPHRleHQgeD0iMTgwIiB5PSIxNjYiPjA8L3RleHQ+PHRleHQgeD0iMjkwIiB5PSIxNjYiPjE8L3RleHQ+CgkJCTx0ZXh0IHg9IjE4MCIgeT0iMjA0Ij4wPC90ZXh0Pjx0ZXh0IHg9IjI5MCIgeT0iMjA0Ij4wPC90ZXh0PgoJCTwvZz4KCQk8ZyBmaWxsPSIjNmI3MjgwIiBmb250LXNpemU9IjEwIj4KCQkJPHRleHQgeD0iMTgwIiB5PSIxMDQiPm0wPC90ZXh0Pjx0ZXh0IHg9IjI5MCIgeT0iMTA0Ij5tMTwvdGV4dD4KCQkJPHRleHQgeD0iMTgwIiB5PSIxNDIiPm0yPC90ZXh0Pjx0ZXh0IHg9IjI5MCIgeT0iMTQyIj5tMzwvdGV4dD4KCQkJPHRleHQgeD0iMTgwIiB5PSIxODAiPm02PC90ZXh0Pjx0ZXh0IHg9IjI5MCIgeT0iMTgwIj5tNzwvdGV4dD4KCQkJPHRleHQgeD0iMTgwIiB5PSIyMTgiPm00PC90ZXh0Pjx0ZXh0IHg9IjI5MCIgeT0iMjE4Ij5tNTwvdGV4dD4KCQk8L2c+Cgk8L2c+Cgk8ZyBmaWxsPSJub25lIiBzdHJva2U9IiMzYTQyNTAiIHN0cm9rZS13aWR0aD0iMS40Ij4KCQk8cmVjdCB4PSIxMjUiIHk9IjY0IiB3aWR0aD0iMjIwIiBoZWlnaHQ9IjE2MCIvPgoJCTxwYXRoIGQ9Ik0xMjUgMTAyaDIyME0xMjUgMTQwaDIyME0xMjUgMTc4aDIyMCIvPgoJCTxwYXRoIGQ9Ik0yMzUgNjR2MTYwIi8+Cgk8L2c+Cjwvc3ZnPgo=",
			"imageAlt": "三变量卡诺图，最小项 0、1、3、7 处填 1"
		},
		{
			"id": "q9",
			"module": "M1",
			"type": "hamming",
			"difficulty": 3,
			"stem": "对数据 0100 做偶校验的 (7,4) 海明编码，结果（第 1 到第 7 位）是？",
			"options": [
				"1001100",
				"1000100",
				"0001100",
				"1001010"
			],
			"answer": 0,
			"explain": "p1=⊕(3,5,7)=1，p2=⊕(3,6,7)=0，p4=⊕(5,6,7)=1，按 p1 p2 d1 p4 d2 d3 d4 排列得 1001100。",
			"verify": {
				"args": [
					"hamming",
					"--data",
					"0100"
				],
				"field": "code"
			}
		},
		{
			"id": "q10",
			"module": "M7",
			"type": "concept",
			"difficulty": 2,
			"stem": "微程序控制器的控制信号来自哪里？",
			"options": [
				"控制存储器中的微指令",
				"组合逻辑门的直接输出",
				"数据总线",
				"用户程序的内存"
			],
			"answer": 0,
			"explain": "每条微指令的各个字段直接控制门电路，属于硬件的一部分。"
		},
		{
			"id": "q11",
			"module": "M1",
			"type": "hamming",
			"difficulty": 3,
			"stem": "接收到的 7 位海明码是 1110001（偶校验，(7,4) 码），按综合症判断，第几位出错？",
			"options": [
				"2",
				"6",
				"3",
				"7"
			],
			"answer": 3,
			"explain": "对 p1、p2、p4 三组分别求偶校验，综合症 S4S2S1 的十进制值就是出错位号 7；把该位取反即可纠正。",
			"verify": {
				"args": [
					"hamming",
					"--check",
					"1110001"
				],
				"field": "position"
			}
		},
		{
			"id": "q12",
			"module": "M8",
			"type": "concept",
			"difficulty": 2,
			"stem": "Verilog 中 reg 与 wire 的主要区别是？",
			"options": [
				"两者完全等价",
				"wire 能存多位而 reg 只能存一位",
				"reg 一定综合成寄存器",
				"reg 可在 always 中赋值并保持，wire 需要连续赋值"
			],
			"answer": 3,
			"explain": "reg 只是过程赋值的目标，是否综合成触发器取决于写法；wire 表示连线般的连续驱动。"
		},
		{
			"id": "q13",
			"module": "M2",
			"type": "minterms",
			"difficulty": 2,
			"stem": "函数在 000、001、101、111 这几组输入下取值为 1（变量顺序 A B C），它的最小项之和怎么写？",
			"options": [
				"Σm(2, 3, 4, 6)",
				"Σm(0, 1, 5, 7)",
				"Σm(0, 1, 5)",
				"Σm(0, 1, 2, 5, 7)"
			],
			"answer": 1,
			"explain": "把每组取值为 1 的输入按 A B C 的二进制读出编号，就是 Σm(0, 1, 5, 7)。"
		},
		{
			"id": "q14",
			"module": "M4",
			"type": "figure",
			"difficulty": 2,
			"stem": "图示波形中，输出 Q 在什么时候跟随 D 更新？",
			"options": [
				"时钟下降沿",
				"时钟低电平期间",
				"时钟高电平期间",
				"时钟上升沿"
			],
			"answer": 3,
			"explain": "边沿触发的 D 触发器只在 CLK 上升沿采样 D，其余时间保持原状态。",
			"image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NjAgMjAwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IuafkOinpuWPkeWZqOeahOaXtumSn+OAgei+k+WFpeS4jui+k+WHuuazouW9ou+8jOi+k+WHuuWcqOaXtumSn+S4iuWNh+ayv+WPmOWMliI+Cgk8ZyBzdHJva2U9IiMyYzMxM2IiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iNCA1Ij4KCQk8cGF0aCBkPSJNNzAgMzJ2MTQwTTE4MCAzMnYxNDBNMjkwIDMydjE0ME00MDAgMzJ2MTQwIi8+Cgk8L2c+Cgk8ZyBmaWxsPSJub25lIiBzdHJva2U9IiM1OGNjMDIiIHN0cm9rZS13aWR0aD0iMi40IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiPgoJCTxwYXRoIGQ9Ik00MCA2NmgzMHYtMjRoODB2MjRoODB2LTI0aDgwdjI0aDgwdi0yNGg1MCIvPgoJCTxwYXRoIGQ9Ik00MCAxMjZoNzB2LTI0aDkwdjI0aDkwdi0yNGg3MHYyNGg3MCIvPgoJCTxwYXRoIGQ9Ik00MCAxNzZoMTEwdi0yNGg5MHYyNGg4MHYtMjRoODB2MjRoMzAiLz4KCTwvZz4KCTxnIGZvbnQtZmFtaWx5PSJTZWdvZSBVSSwgTWljcm9zb2Z0IFlhSGVpLCBzYW5zLXNlcmlmIiBmaWxsPSIjOWFhMmIxIiBmb250LXNpemU9IjEyIiB0ZXh0LWFuY2hvcj0iZW5kIj4KCQk8dGV4dCB4PSIzNCIgeT0iNTQiPkNMSzwvdGV4dD4KCQk8dGV4dCB4PSIzNCIgeT0iMTE0Ij5EPC90ZXh0PgoJCTx0ZXh0IHg9IjM0IiB5PSIxNjQiPlE8L3RleHQ+Cgk8L2c+Cjwvc3ZnPgo=",
			"imageAlt": "CLK、D、Q 三条波形，Q 在时钟上升沿变化"
		},
		{
			"id": "q15",
			"module": "M2",
			"type": "kmap",
			"difficulty": 3,
			"stem": "三变量函数 F = Σm(3, 4, 6, 7)，在卡诺图上化简后的最简与或式是？",
			"options": [
				"B·C + A·~C + A·B",
				"B·C + A·~C",
				"A·~C·B·C",
				"B·C + A·C"
			],
			"answer": 1,
			"explain": "合并相邻的 1，可得到质蕴含项 B·C、A·~C、A·B，最简式取 B·C + A·~C。"
		},
		{
			"id": "q16",
			"module": "M7",
			"type": "concept",
			"difficulty": 3,
			"stem": "微指令中的下地址字段作用是什么？",
			"options": [
				"指出下一条微指令的地址",
				"指出 I/O 端口号",
				"指出操作数地址",
				"指出主存地址"
			],
			"answer": 0,
			"explain": "微程序按微指令顺序执行，下地址字段决定下一步跳到哪里。"
		},
		{
			"id": "q17",
			"module": "M1",
			"type": "base",
			"difficulty": 1,
			"stem": "十进制 278 的 10 进制写法是 278，它换成 8 进制是多少？",
			"options": [
				"426",
				"427",
				"624",
				"1054"
			],
			"answer": 0,
			"explain": "按权展开得十进制 278，再除基取余并逆序读取，得到 426。",
			"verify": {
				"args": [
					"base",
					"--from",
					"10",
					"--to",
					"8",
					"--value",
					"278"
				],
				"field": "result"
			}
		},
		{
			"id": "q18",
			"module": "M1",
			"type": "concept",
			"difficulty": 2,
			"stem": "关于格雷码，下面哪个说法正确？",
			"options": [
				"相邻两个码只有一位不同，且它没有位权",
				"相邻两个码可以有两位不同",
				"它只能表示十进制数字",
				"它是有权码，按 8-4-2-1 求和"
			],
			"answer": 0,
			"explain": "格雷码靠相邻性工作，不能按位权求和，常用于角度编码和跨时钟域传地址。"
		},
		{
			"id": "q19",
			"module": "M1",
			"type": "code",
			"difficulty": 2,
			"stem": "8 位补码里，十进制 -58 的编码是哪一个？",
			"options": [
				"11000111",
				"10111010",
				"11000110",
				"11000101"
			],
			"answer": 2,
			"explain": "先写原码 10111010，数值位取反得反码 11000101，末位加一得补码 11000110。",
			"verify": {
				"args": [
					"code",
					"--bits",
					"8",
					"--value",
					"-58"
				],
				"field": "twosComplement"
			}
		},
		{
			"id": "q20",
			"module": "M4",
			"type": "figure",
			"difficulty": 3,
			"stem": "图示 4 位二进制计数器初态为 0000，输入 20 个计数脉冲后，Q3Q2Q1Q0 是？",
			"options": [
				"0100",
				"0000",
				"1010",
				"1000"
			],
			"answer": 0,
			"explain": "4 位计数器的模为 16，20 个脉冲后状态为 20 mod 16 = 4，即 0100。",
			"image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MjAgMjAwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IuWbm+S9jeS6jOi/m+WItuiuoeaVsOWZqO+8jOaXtumSn+i+k+WFpe+8jOi+k+WHuuS4uiBRMyDliLAgUTDvvIzliJ3mgIHlhajpm7YiPgoJPGcgZmlsbD0iIzFjMWYyNiIgc3Ryb2tlPSIjNThjYzAyIiBzdHJva2Utd2lkdGg9IjIuMiI+CgkJPHJlY3QgeD0iMTEwIiB5PSI1MCIgd2lkdGg9IjE4MCIgaGVpZ2h0PSIxMTAiIHJ4PSIxMCIvPgoJPC9nPgoJPGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOGI5M2ExIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+CgkJPHBhdGggZD0iTTUwIDg2aDYwTTUwIDEyNmg2MCIvPgoJCTxwYXRoIGQ9Ik0yOTAgNzBoNzBNMjkwIDk0aDcwTTI5MCAxMThoNzBNMjkwIDE0Mmg3MCIvPgoJCTxwYXRoIGQ9Ik0xMjIgMTUwbDEyIDktMTIgOSIvPgoJPC9nPgoJPGcgZm9udC1mYW1pbHk9IlNlZ29lIFVJLCBNaWNyb3NvZnQgWWFIZWksIHNhbnMtc2VyaWYiIGZpbGw9IiM5YWEyYjEiIGZvbnQtc2l6ZT0iMTIiPgoJCTx0ZXh0IHg9IjI2IiB5PSI5MCI+Q0xLPC90ZXh0PgoJCTx0ZXh0IHg9IjI2IiB5PSIxMzAiPkNMUjwvdGV4dD4KCQk8dGV4dCB4PSIzNjYiIHk9Ijc0Ij5RMzwvdGV4dD4KCQk8dGV4dCB4PSIzNjYiIHk9Ijk4Ij5RMjwvdGV4dD4KCQk8dGV4dCB4PSIzNjYiIHk9IjEyMiI+UTE8L3RleHQ+CgkJPHRleHQgeD0iMzY2IiB5PSIxNDYiPlEwPC90ZXh0PgoJPC9nPgoJPGcgZm9udC1mYW1pbHk9IlNlZ29lIFVJLCBNaWNyb3NvZnQgWWFIZWksIHNhbnMtc2VyaWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPgoJCTx0ZXh0IHg9IjIwMCIgeT0iOTIiIGZpbGw9IiNlNmU4ZWUiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSI2MDAiPjQg5L2N5LqM6L+b5Yi2PC90ZXh0PgoJCTx0ZXh0IHg9IjIwMCIgeT0iMTE0IiBmaWxsPSIjZTZlOGVlIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iNjAwIj7orqHmlbDlmag8L3RleHQ+CgkJPHRleHQgeD0iMjAwIiB5PSIxMzYiIGZpbGw9IiM5YWEyYjEiIGZvbnQtc2l6ZT0iMTEiPuWIneaAgSAwMDAwPC90ZXh0PgoJPC9nPgo8L3N2Zz4K",
			"imageAlt": "4 位二进制计数器，时钟与清零输入，输出 Q3 到 Q0"
		},
		{
			"id": "q21",
			"module": "M1",
			"type": "gray",
			"difficulty": 2,
			"stem": "4 位二进制 1000 对应的格雷码是？",
			"options": [
				"1010",
				"1100",
				"0011",
				"1000"
			],
			"answer": 1,
			"explain": "格雷码最高位与二进制相同，其余每位等于本位与高位异或，得到 1100。",
			"verify": {
				"args": [
					"gray",
					"--bits",
					"4",
					"--value",
					"8"
				],
				"field": "gray"
			}
		},
		{
			"id": "q22",
			"module": "M2",
			"type": "concept",
			"difficulty": 1,
			"stem": "三变量卡诺图一共有多少个格子？",
			"options": [
				"8 个",
				"4 个",
				"16 个",
				"6 个"
			],
			"answer": 0,
			"explain": "n 变量卡诺图有 2ⁿ 格，三变量是 8 格。"
		},
		{
			"id": "q23",
			"module": "M1",
			"type": "bcd",
			"difficulty": 3,
			"stem": "十进制数字 5 的 2421 码是哪一组 4 位编码？",
			"options": [
				"0100",
				"1000",
				"0101",
				"1011"
			],
			"answer": 3,
			"explain": "2421 码按权重 2、4、2、1 相加：5 对应 1011。8421 码则是 0101。"
		},
		{
			"id": "q24",
			"module": "M1",
			"type": "concept",
			"difficulty": 3,
			"stem": "格雷码 0101 对应的二进制数是什么？",
			"options": [
				"0110",
				"1010",
				"0100",
				"1100"
			],
			"answer": 0,
			"explain": "最高位照抄得 0，其后每位等于上一位二进制结果与本位格雷码异或，得 0110。"
		},
		{
			"id": "q25",
			"module": "M1",
			"type": "hamming",
			"difficulty": 3,
			"stem": "对数据 1010 做偶校验的 (7,4) 海明编码，结果（第 1 到第 7 位）是？",
			"options": [
				"0011010",
				"1011010",
				"1010010",
				"1011100"
			],
			"answer": 1,
			"explain": "p1=⊕(3,5,7)=1，p2=⊕(3,6,7)=0，p4=⊕(5,6,7)=1，按 p1 p2 d1 p4 d2 d3 d4 排列得 1011010。",
			"verify": {
				"args": [
					"hamming",
					"--data",
					"1010"
				],
				"field": "code"
			}
		},
		{
			"id": "q26",
			"module": "M2",
			"type": "figure",
			"difficulty": 2,
			"stem": "图示全加器的输入为 A=1、B=1、Cin=0，输出 S 和 Cout 是？",
			"options": [
				"S=0，Cout=1",
				"S=1，Cout=0",
				"S=1，Cout=1",
				"S=0，Cout=0"
			],
			"answer": 0,
			"explain": "S = 1⊕1⊕0 = 0，Cout = 1·1 + 0·(1⊕1) = 1。",
			"image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NjAgMjIwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IuWFqOWKoOWZqOi+k+WFpSBBIOS4uiAx44CBQiDkuLogMeOAgUNpbiDkuLogMCI+CjxzdHlsZT4KLnN7ZmlsbDpub25lO3N0cm9rZTojNThjYzAyO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZH0KLnR7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweH0KLmJ7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo2MDB9Ci5te2ZpbGw6IzlhYTJiMTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEyLjVweH0KLmd7ZmlsbDpub25lO3N0cm9rZTojM2E0MjUwO3N0cm9rZS13aWR0aDoxLjJ9Ci5ib3h7ZmlsbDojMWIyMDI5O3N0cm9rZTojM2E0MjUwO3N0cm9rZS13aWR0aDoxLjV9Ci5obHtmaWxsOm5vbmU7c3Ryb2tlOiM1OGNjMDI7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWRhc2hhcnJheTo2IDR9Cjwvc3R5bGU+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxNDE4MjEiLz4KPHRleHQgeD0iMjQiIHk9IjI4IiBjbGFzcz0iYiI+6aKY5Zu+77ya5YWo5Yqg5ZmoPC90ZXh0Pgo8cmVjdCB4PSIxNjAiIHk9IjYwIiB3aWR0aD0iMTgwIiBoZWlnaHQ9IjEwMCIgcng9IjYiIGNsYXNzPSJib3giLz48dGV4dCB4PSIyNTAiIHk9IjEwNSIgY2xhc3M9InQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkZBPC90ZXh0Pgo8dGV4dCB4PSIxMzAiIHk9Ijg2IiBjbGFzcz0idCI+QSA9IDE8L3RleHQ+PHRleHQgeD0iMTMwIiB5PSIxMTYiIGNsYXNzPSJ0Ij5CID0gMTwvdGV4dD4KPGxpbmUgeDE9IjE0NiIgeTE9IjgyIiB4Mj0iMTYwIiB5Mj0iODIiIGNsYXNzPSJzIi8+PGxpbmUgeDE9IjE0NiIgeTE9IjExMiIgeDI9IjE2MCIgeTI9IjExMiIgY2xhc3M9InMiLz4KPHRleHQgeD0iMjMwIiB5PSI1MiIgY2xhc3M9InQiPkNpbiA9IDA8L3RleHQ+PGxpbmUgeDE9IjI1MCIgeTE9IjU4IiB4Mj0iMjUwIiB5Mj0iNjAiIGNsYXNzPSJzIi8+CjxsaW5lIHgxPSIzNDAiIHkxPSI4NCIgeDI9IjM5MCIgeTI9Ijg0IiBjbGFzcz0icyIvPjx0ZXh0IHg9IjM5OCIgeT0iODgiIGNsYXNzPSJ0Ij5TPC90ZXh0Pgo8bGluZSB4MT0iMzQwIiB5MT0iMTM2IiB4Mj0iMzkwIiB5Mj0iMTM2IiBjbGFzcz0icyIvPjx0ZXh0IHg9IjM5OCIgeT0iMTQwIiBjbGFzcz0idCI+Q291dDwvdGV4dD4KPHRleHQgeD0iNDIwIiB5PSIxMDAiIGNsYXNzPSJtIj7msYIgUyDkuI4gQ291dDwvdGV4dD4KPC9zdmc+Cg==",
			"imageAlt": "全加器输入 A 为 1、B 为 1、Cin 为 0"
		},
		{
			"id": "q27",
			"module": "M1",
			"type": "hamming",
			"difficulty": 3,
			"stem": "接收到的 7 位海明码是 0111101（偶校验，(7,4) 码），按综合症判断，第几位出错？",
			"options": [
				"7",
				"1",
				"2",
				"5"
			],
			"answer": 0,
			"explain": "对 p1、p2、p4 三组分别求偶校验，综合症 S4S2S1 的十进制值就是出错位号 7；把该位取反即可纠正。",
			"verify": {
				"args": [
					"hamming",
					"--check",
					"0111101"
				],
				"field": "position"
			}
		},
		{
			"id": "q28",
			"module": "M2",
			"type": "concept",
			"difficulty": 2,
			"stem": "逻辑函数 F=A+A′B 化简后等于？",
			"options": [
				"B",
				"A",
				"A+B",
				"AB"
			],
			"answer": 2,
			"explain": "A+A′B=(A+A′)(A+B)=A+B，用的是吸收律和分配律。"
		},
		{
			"id": "q29",
			"module": "M2",
			"type": "minterms",
			"difficulty": 2,
			"stem": "函数在 001、010、111 这几组输入下取值为 1（变量顺序 A B C），它的最小项之和怎么写？",
			"options": [
				"Σm(0, 3, 4, 5, 6)",
				"Σm(1, 2)",
				"Σm(1, 2, 7)",
				"Σm(0, 1, 2, 7)"
			],
			"answer": 2,
			"explain": "把每组取值为 1 的输入按 A B C 的二进制读出编号，就是 Σm(1, 2, 7)。"
		},
		{
			"id": "q30",
			"module": "M4",
			"type": "concept",
			"difficulty": 2,
			"stem": "同步计数器与异步计数器的主要区别是？",
			"options": [
				"各级触发器是否由同一个时钟同时触发",
				"有没有进位输出",
				"模值大小不同",
				"能否可逆计数"
			],
			"answer": 0,
			"explain": "同步计数器所有触发器共用时钟；异步计数器把前级输出当时钟，逐级翻转。"
		},
		{
			"id": "q31",
			"module": "M2",
			"type": "kmap",
			"difficulty": 3,
			"stem": "三变量函数 F = Σm(0, 1, 2, 6, 7)，在卡诺图上化简后的最简与或式是？",
			"options": [
				"~A·~C·A·B·~A·~B",
				"A·~B + A·B + ~A·~C",
				"~A·~B + A·B + ~A·~C + B·~C",
				"~A·~B + A·B + ~A·~C"
			],
			"answer": 3,
			"explain": "合并相邻的 1，可得到质蕴含项 ~A·~B、~A·~C、B·~C、A·B，最简式取 ~A·~B + A·B + ~A·~C。"
		},
		{
			"id": "q32",
			"module": "M2",
			"type": "figure",
			"difficulty": 2,
			"stem": "图示 3-8 译码器输入 A2A1A0=101，输出低电平有效，哪些输出为 0？",
			"options": [
				"只有 Y3 为 0",
				"只有 Y5 为 0",
				"只有 Y6 为 0",
				"Y0 到 Y7 全为 0"
			],
			"answer": 1,
			"explain": "二进制 101 等于十进制 5，低电平有效时只有对应的 Y5 输出 0，其余为 1。",
			"image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NjAgMjUwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IuS4iee6v+WFq+e6v+ivkeeggeWZqOi+k+WFpeS4uiAxMDEiPgo8c3R5bGU+Ci5ze2ZpbGw6bm9uZTtzdHJva2U6IzU4Y2MwMjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmR9Ci50e2ZpbGw6I2U2ZThlZTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHh9Ci5ie2ZpbGw6I2U2ZThlZTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NjAwfQoubXtmaWxsOiM5YWEyYjE7Zm9udC1mYW1pbHk6IlNlZ29lIFVJIiwiTWljcm9zb2Z0IFlhSGVpIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMi41cHh9Ci5ne2ZpbGw6bm9uZTtzdHJva2U6IzNhNDI1MDtzdHJva2Utd2lkdGg6MS4yfQouYm94e2ZpbGw6IzFiMjAyOTtzdHJva2U6IzNhNDI1MDtzdHJva2Utd2lkdGg6MS41fQouaGx7ZmlsbDpub25lO3N0cm9rZTojNThjYzAyO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1kYXNoYXJyYXk6NiA0fQo8L3N0eWxlPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMTQxODIxIi8+Cjx0ZXh0IHg9IjI0IiB5PSIyOCIgY2xhc3M9ImIiPumimOWbvu+8mjMtOCDor5HnoIHlmag8L3RleHQ+CjxyZWN0IHg9IjEyMCIgeT0iNTUiIHdpZHRoPSIxNTAiIGhlaWdodD0iMTc1IiByeD0iNiIgY2xhc3M9ImJveCIvPjx0ZXh0IHg9IjE0MCIgeT0iODIiIGNsYXNzPSJ0Ij5BMiBBMSBBMDwvdGV4dD48dGV4dCB4PSIxNTAiIHk9IjExMCIgY2xhc3M9ImIiPjEgIDAgIDE8L3RleHQ+Cjx0ZXh0IHg9IjMwMCIgeT0iNzYiIGNsYXNzPSJ0Ij5ZMDwvdGV4dD48dGV4dCB4PSIzMDAiIHk9Ijk2IiBjbGFzcz0idCI+WTE8L3RleHQ+PHRleHQgeD0iMzAwIiB5PSIxMTYiIGNsYXNzPSJ0Ij5ZMjwvdGV4dD48dGV4dCB4PSIzMDAiIHk9IjEzNiIgY2xhc3M9InQiPlkzPC90ZXh0Pjx0ZXh0IHg9IjMwMCIgeT0iMTU2IiBjbGFzcz0idCI+WTQ8L3RleHQ+PHRleHQgeD0iMzAwIiB5PSIxNzYiIGNsYXNzPSJ0Ij5ZNTwvdGV4dD48dGV4dCB4PSIzMDAiIHk9IjE5NiIgY2xhc3M9InQiPlk2PC90ZXh0Pjx0ZXh0IHg9IjMwMCIgeT0iMjE2IiBjbGFzcz0idCI+WTc8L3RleHQ+CjxsaW5lIHgxPSIyNzAiIHkxPSI3MSIgeDI9IjI5NCIgeTI9IjcxIiBjbGFzcz0icyIvPjxsaW5lIHgxPSIyNzAiIHkxPSI5MSIgeDI9IjI5NCIgeTI9IjkxIiBjbGFzcz0icyIvPjxsaW5lIHgxPSIyNzAiIHkxPSIxMTEiIHgyPSIyOTQiIHkyPSIxMTEiIGNsYXNzPSJzIi8+PGxpbmUgeDE9IjI3MCIgeTE9IjEzMSIgeDI9IjI5NCIgeTI9IjEzMSIgY2xhc3M9InMiLz48bGluZSB4MT0iMjcwIiB5MT0iMTUxIiB4Mj0iMjk0IiB5Mj0iMTUxIiBjbGFzcz0icyIvPjxsaW5lIHgxPSIyNzAiIHkxPSIxNzEiIHgyPSIyOTQiIHkyPSIxNzEiIGNsYXNzPSJzIi8+PGxpbmUgeDE9IjI3MCIgeTE9IjE5MSIgeDI9IjI5NCIgeTI9IjE5MSIgY2xhc3M9InMiLz48bGluZSB4MT0iMjcwIiB5MT0iMjExIiB4Mj0iMjk0IiB5Mj0iMjExIiBjbGFzcz0icyIvPgo8dGV4dCB4PSIxMjAiIHk9IjI0NSIgY2xhc3M9Im0iPui+k+WHuuS9jueUteW5s+acieaViDwvdGV4dD4KPC9zdmc+Cg==",
			"imageAlt": "三线八线译码器输入为 101"
		},
		{
			"id": "q33",
			"module": "M1",
			"type": "base",
			"difficulty": 1,
			"stem": "十进制 274 的 16 进制写法是 112，它换成 10 进制是多少？",
			"options": [
				"275",
				"472",
				"548",
				"274"
			],
			"answer": 3,
			"explain": "按权展开得十进制 274，再除基取余并逆序读取，得到 274。",
			"verify": {
				"args": [
					"base",
					"--from",
					"16",
					"--to",
					"10",
					"--value",
					"112"
				],
				"field": "result"
			}
		},
		{
			"id": "q34",
			"module": "M7",
			"type": "concept",
			"difficulty": 2,
			"stem": "数据通路主要完成什么任务？",
			"options": [
				"在各部件之间传送数据并完成运算",
				"对指令地址进行译码",
				"存储微程序",
				"产生全部控制信号"
			],
			"answer": 0,
			"explain": "数据通路管数据怎么走、在哪算；控制信号由控制器给出。"
		},
		{
			"id": "q35",
			"module": "M1",
			"type": "code",
			"difficulty": 2,
			"stem": "8 位补码里，十进制 -61 的编码是哪一个？",
			"options": [
				"11000011",
				"10111101",
				"00111101",
				"11000010"
			],
			"answer": 0,
			"explain": "先写原码 10111101，数值位取反得反码 11000010，末位加一得补码 11000011。",
			"verify": {
				"args": [
					"code",
					"--bits",
					"8",
					"--value",
					"-61"
				],
				"field": "twosComplement"
			}
		},
		{
			"id": "q36",
			"module": "M3",
			"type": "concept",
			"difficulty": 3,
			"stem": "组合逻辑中出现静态 1 型冒险，通常由什么形式引起？",
			"options": [
				"输出端接了电容",
				"两个输入同时为 0",
				"A + A' 这类形式，在 A 翻转瞬间出现窄脉冲",
				"门电路的延迟完全相同"
			],
			"answer": 2,
			"explain": "同一信号经不同路径到达，延迟不同，导致短暂输出错误；加冗余项可以消除。"
		},
		{
			"id": "q37",
			"module": "M1",
			"type": "gray",
			"difficulty": 2,
			"stem": "4 位二进制 1100 对应的格雷码是？",
			"options": [
				"1111",
				"1100",
				"0101",
				"1010"
			],
			"answer": 3,
			"explain": "格雷码最高位与二进制相同，其余每位等于本位与高位异或，得到 1010。",
			"verify": {
				"args": [
					"gray",
					"--bits",
					"4",
					"--value",
					"12"
				],
				"field": "gray"
			}
		},
		{
			"id": "q38",
			"module": "M3",
			"type": "figure",
			"difficulty": 2,
			"stem": "图示门控 D 锁存器在 CP=1、D=0 时，输出 Q 是？",
			"options": [
				"保持原状态",
				"Q=0",
				"状态不定",
				"Q=1"
			],
			"answer": 1,
			"explain": "CP=1 期间 D 锁存器透明，Q 跟随 D，因此 Q=0。",
			"image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NjAgMjIwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IumXqOaOpyBEIOmUgeWtmOWZqOWcqCBDUCDkuLogMeOAgUQg5Li6IDAg5pe255qE5bel5L2c54q25oCBIj4KPHN0eWxlPgouc3tmaWxsOm5vbmU7c3Ryb2tlOiM1OGNjMDI7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kfQoudHtmaWxsOiNlNmU4ZWU7Zm9udC1mYW1pbHk6IlNlZ29lIFVJIiwiTWljcm9zb2Z0IFlhSGVpIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNHB4fQouYntmaWxsOiNlNmU4ZWU7Zm9udC1mYW1pbHk6IlNlZ29lIFVJIiwiTWljcm9zb2Z0IFlhSGVpIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjYwMH0KLm17ZmlsbDojOWFhMmIxO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTIuNXB4fQouZ3tmaWxsOm5vbmU7c3Ryb2tlOiMzYTQyNTA7c3Ryb2tlLXdpZHRoOjEuMn0KLmJveHtmaWxsOiMxYjIwMjk7c3Ryb2tlOiMzYTQyNTA7c3Ryb2tlLXdpZHRoOjEuNX0KLmhse2ZpbGw6bm9uZTtzdHJva2U6IzU4Y2MwMjtzdHJva2Utd2lkdGg6MjtzdHJva2UtZGFzaGFycmF5OjYgNH0KPC9zdHlsZT4KPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzE0MTgyMSIvPgo8dGV4dCB4PSIyNCIgeT0iMjgiIGNsYXNzPSJiIj7popjlm77vvJrpl6jmjqcgRCDplIHlrZjlmag8L3RleHQ+CjxyZWN0IHg9IjE1MCIgeT0iNjAiIHdpZHRoPSIxODAiIGhlaWdodD0iMTAwIiByeD0iNiIgY2xhc3M9ImJveCIvPjx0ZXh0IHg9IjI0MCIgeT0iMTEwIiBjbGFzcz0idCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RCDplIHlrZjlmag8L3RleHQ+Cjx0ZXh0IHg9IjExMCIgeT0iOTAiIGNsYXNzPSJ0Ij5EID0gMDwvdGV4dD48bGluZSB4MT0iMTMyIiB5MT0iODYiIHgyPSIxNTAiIHkyPSI4NiIgY2xhc3M9InMiLz4KPHRleHQgeD0iMTgwIiB5PSIxOTAiIGNsYXNzPSJ0Ij5DUCA9IDE8L3RleHQ+PGxpbmUgeDE9IjI0MCIgeTE9IjE4NiIgeDI9IjI0MCIgeTI9IjE2MCIgY2xhc3M9InMiLz4KPGxpbmUgeDE9IjMzMCIgeTE9IjExMCIgeDI9IjM5MCIgeTI9IjExMCIgY2xhc3M9InMiLz48dGV4dCB4PSIzOTgiIHk9IjExNCIgY2xhc3M9InQiPlE8L3RleHQ+Cjx0ZXh0IHg9IjQyMCIgeT0iOTAiIGNsYXNzPSJtIj5DUCDmnInmlYjmnJ/pl7TovpPlh7rot5/pmo8gRDwvdGV4dD4KPC9zdmc+Cg==",
			"imageAlt": "门控 D 锁存器在 CP 为 1、D 为 0 时的工作状态"
		},
		{
			"id": "q39",
			"module": "M1",
			"type": "bcd",
			"difficulty": 3,
			"stem": "十进制数字 6 的 2421 码是哪一组 4 位编码？",
			"options": [
				"0011",
				"1100",
				"1001",
				"0110"
			],
			"answer": 1,
			"explain": "2421 码按权重 2、4、2、1 相加：6 对应 1100。8421 码则是 0110。"
		},
		{
			"id": "q40",
			"module": "M3",
			"type": "concept",
			"difficulty": 2,
			"stem": "74LS138 译码器被选中时，对应输出端是什么电平？",
			"options": [
				"翻转状态",
				"低电平",
				"高电平",
				"高阻态"
			],
			"answer": 1,
			"explain": "138 的输出是低有效，选中的那一路为 0，其余为 1。"
		},
		{
			"id": "q41",
			"module": "M1",
			"type": "hamming",
			"difficulty": 3,
			"stem": "对数据 0011 做偶校验的 (7,4) 海明编码，结果（第 1 到第 7 位）是？",
			"options": [
				"1001011",
				"0000011",
				"1000101",
				"1000011"
			],
			"answer": 3,
			"explain": "p1=⊕(3,5,7)=1，p2=⊕(3,6,7)=0，p4=⊕(5,6,7)=0，按 p1 p2 d1 p4 d2 d3 d4 排列得 1000011。",
			"verify": {
				"args": [
					"hamming",
					"--data",
					"0011"
				],
				"field": "code"
			}
		},
		{
			"id": "q42",
			"module": "M2",
			"type": "concept",
			"difficulty": 3,
			"stem": "卡诺图化简时，无关项的取值原则是？",
			"options": [
				"按需取 0 或 1，能让圈更大就用",
				"必须成对出现才能用",
				"一律取 1",
				"一律取 0"
			],
			"answer": 0,
			"explain": "无关项对应不会出现的输入，取 0 或 1 都不影响功能；化简时只为合并服务。"
		},
		{
			"id": "q43",
			"module": "M1",
			"type": "hamming",
			"difficulty": 3,
			"stem": "接收到的 7 位海明码是 0000111（偶校验，(7,4) 码），按综合症判断，第几位出错？",
			"options": [
				"2",
				"6",
				"3",
				"4"
			],
			"answer": 3,
			"explain": "对 p1、p2、p4 三组分别求偶校验，综合症 S4S2S1 的十进制值就是出错位号 4；把该位取反即可纠正。",
			"verify": {
				"args": [
					"hamming",
					"--check",
					"0000111"
				],
				"field": "position"
			}
		},
		{
			"id": "q44",
			"module": "M3",
			"type": "figure",
			"difficulty": 2,
			"stem": "图示 4 位右移寄存器当前为 1011，串行输入 0，来一个时钟后 Q3Q2Q1Q0 是？",
			"options": [
				"1101",
				"0101",
				"0011",
				"1010"
			],
			"answer": 1,
			"explain": "右移时每位送到低位，最高位接收串行输入 0，得到 0101。",
			"image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NjAgMjIwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IuWbm+S9jeWPs+enu+WvhOWtmOWZqOWIneaAgSAxMDEx77yM5Liy6KGM6L6T5YWlIDAiPgo8c3R5bGU+Ci5ze2ZpbGw6bm9uZTtzdHJva2U6IzU4Y2MwMjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmR9Ci50e2ZpbGw6I2U2ZThlZTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHh9Ci5ie2ZpbGw6I2U2ZThlZTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NjAwfQoubXtmaWxsOiM5YWEyYjE7Zm9udC1mYW1pbHk6IlNlZ29lIFVJIiwiTWljcm9zb2Z0IFlhSGVpIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMi41cHh9Ci5ne2ZpbGw6bm9uZTtzdHJva2U6IzNhNDI1MDtzdHJva2Utd2lkdGg6MS4yfQouYm94e2ZpbGw6IzFiMjAyOTtzdHJva2U6IzNhNDI1MDtzdHJva2Utd2lkdGg6MS41fQouaGx7ZmlsbDpub25lO3N0cm9rZTojNThjYzAyO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1kYXNoYXJyYXk6NiA0fQo8L3N0eWxlPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMTQxODIxIi8+Cjx0ZXh0IHg9IjI0IiB5PSIyOCIgY2xhc3M9ImIiPumimOWbvu+8muWPs+enu+WvhOWtmOWZqDwvdGV4dD4KPHJlY3QgeD0iOTAiIHk9IjcwIiB3aWR0aD0iNzAiIGhlaWdodD0iNTUiIHJ4PSI2IiBjbGFzcz0iYm94Ii8+PHRleHQgeD0iMTI1IiB5PSIxMDMiIGNsYXNzPSJtIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5RMzwvdGV4dD48cmVjdCB4PSIxOTAiIHk9IjcwIiB3aWR0aD0iNzAiIGhlaWdodD0iNTUiIHJ4PSI2IiBjbGFzcz0iYm94Ii8+PHRleHQgeD0iMjI1IiB5PSIxMDMiIGNsYXNzPSJtIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5RMjwvdGV4dD48cmVjdCB4PSIyOTAiIHk9IjcwIiB3aWR0aD0iNzAiIGhlaWdodD0iNTUiIHJ4PSI2IiBjbGFzcz0iYm94Ii8+PHRleHQgeD0iMzI1IiB5PSIxMDMiIGNsYXNzPSJtIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5RMTwvdGV4dD48cmVjdCB4PSIzOTAiIHk9IjcwIiB3aWR0aD0iNzAiIGhlaWdodD0iNTUiIHJ4PSI2IiBjbGFzcz0iYm94Ii8+PHRleHQgeD0iNDI1IiB5PSIxMDMiIGNsYXNzPSJtIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5RMDwvdGV4dD4KPHRleHQgeD0iMTI1IiB5PSIxNTUiIGNsYXNzPSJiIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xPC90ZXh0Pjx0ZXh0IHg9IjIyNSIgeT0iMTU1IiBjbGFzcz0iYiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MDwvdGV4dD48dGV4dCB4PSIzMjUiIHk9IjE1NSIgY2xhc3M9ImIiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjE8L3RleHQ+PHRleHQgeD0iNDI1IiB5PSIxNTUiIGNsYXNzPSJiIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xPC90ZXh0Pgo8dGV4dCB4PSIzMCIgeT0iMTAzIiBjbGFzcz0idCI+MDwvdGV4dD48bGluZSB4MT0iNDgiIHkxPSI5OCIgeDI9IjkwIiB5Mj0iOTgiIGNsYXNzPSJzIi8+CjxsaW5lIHgxPSIxNjAiIHkxPSI5OCIgeDI9IjE5MCIgeTI9Ijk4IiBjbGFzcz0icyIvPjxwYXRoIGQ9Ik0xOTAgOTggbC02IC0zIHY2IHoiIGZpbGw9IiM1OGNjMDIiLz48bGluZSB4MT0iMjYwIiB5MT0iOTgiIHgyPSIyOTAiIHkyPSI5OCIgY2xhc3M9InMiLz48cGF0aCBkPSJNMjkwIDk4IGwtNiAtMyB2NiB6IiBmaWxsPSIjNThjYzAyIi8+PGxpbmUgeDE9IjM2MCIgeTE9Ijk4IiB4Mj0iMzkwIiB5Mj0iOTgiIGNsYXNzPSJzIi8+PHBhdGggZD0iTTM5MCA5OCBsLTYgLTMgdjYgeiIgZmlsbD0iIzU4Y2MwMiIvPgo8dGV4dCB4PSIzMCIgeT0iMTk2IiBjbGFzcz0ibSI+5pe26ZKf5Yiw5p2l5ZCO5ZCE5L2N5aaC5L2V5Y+Y5YyW77yfPC90ZXh0Pgo8L3N2Zz4K",
			"imageAlt": "四位右移寄存器初态 1011，串行输入 0"
		},
		{
			"id": "q45",
			"module": "M2",
			"type": "minterms",
			"difficulty": 2,
			"stem": "函数在 000、010、101、111 这几组输入下取值为 1（变量顺序 A B C），它的最小项之和怎么写？",
			"options": [
				"Σm(0, 1, 2, 5, 7)",
				"Σm(0, 2, 5, 7)",
				"Σm(0, 2, 5)",
				"Σm(1, 3, 4, 6)"
			],
			"answer": 1,
			"explain": "把每组取值为 1 的输入按 A B C 的二进制读出编号，就是 Σm(0, 2, 5, 7)。"
		},
		{
			"id": "q46",
			"module": "M7",
			"type": "concept",
			"difficulty": 2,
			"stem": "硬布线控制器和微程序控制器，通常怎么选？",
			"options": [
				"微程序一定更快",
				"两者速度完全一样",
				"要快选微程序，要易改选硬布线",
				"要快选硬布线，要易改选微程序"
			],
			"answer": 3,
			"explain": "硬布线的控制信号直接由组合逻辑产生，快但改起来要动电路；微程序改的是存储内容。"
		},
		{
			"id": "q47",
			"module": "M2",
			"type": "kmap",
			"difficulty": 3,
			"stem": "三变量函数 F = Σm(1, 2, 3, 5, 7)，在卡诺图上化简后的最简与或式是？",
			"options": [
				"C + ~A·B + C + C + ~A·B",
				"C + A·B + C + C",
				"C + ~A·B + C + C",
				"C·C·~A·B·C"
			],
			"answer": 2,
			"explain": "合并相邻的 1，可得到质蕴含项 ~A·B、C，最简式取 C + ~A·B + C + C。"
		},
		{
			"id": "q48",
			"module": "M1",
			"type": "concept",
			"difficulty": 2,
			"stem": "余 3 码 0101 表示十进制数字几？",
			"options": [
				"12",
				"2",
				"8",
				"5"
			],
			"answer": 1,
			"explain": "余 3 码等于 8421 码加 3：0101 按 8421 读是 5，减 3 得 2。"
		},
		{
			"id": "q49",
			"module": "M1",
			"type": "base",
			"difficulty": 1,
			"stem": "十进制 287 的 8 进制写法是 437，它换成 2 进制是多少？",
			"options": [
				"100011110",
				"111110001",
				"100100000",
				"100011111"
			],
			"answer": 3,
			"explain": "按权展开得十进制 287，再除基取余并逆序读取，得到 100011111。",
			"verify": {
				"args": [
					"base",
					"--from",
					"8",
					"--to",
					"2",
					"--value",
					"437"
				],
				"field": "result"
			}
		},
		{
			"id": "q50",
			"module": "M5",
			"type": "figure",
			"difficulty": 2,
			"stem": "图示器件与阵列可编程、或阵列固定，它属于哪一种 PLD？",
			"options": [
				"PAL",
				"PLA",
				"PROM",
				"GAL"
			],
			"answer": 0,
			"explain": "PROM 的与阵列固定；PLA 两个阵列都可编程；PAL 与阵列可编程、或阵列固定；GAL 在 PAL 上增加了输出逻辑宏单元。",
			"image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NjAgMjMwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IuS4gOenjeWPr+e8lueoi+mAu+i+keWZqOS7tueahOS4jumYteWIl+WSjOaIlumYteWIlyI+CjxzdHlsZT4KLnN7ZmlsbDpub25lO3N0cm9rZTojNThjYzAyO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZH0KLnR7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweH0KLmJ7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo2MDB9Ci5te2ZpbGw6IzlhYTJiMTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEyLjVweH0KLmd7ZmlsbDpub25lO3N0cm9rZTojM2E0MjUwO3N0cm9rZS13aWR0aDoxLjJ9Ci5ib3h7ZmlsbDojMWIyMDI5O3N0cm9rZTojM2E0MjUwO3N0cm9rZS13aWR0aDoxLjV9Cjwvc3R5bGU+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxNDE4MjEiLz4KPHRleHQgeD0iMjQiIHk9IjI4IiBjbGFzcz0iYiI+6aKY5Zu+77yaUExEIOmYteWIlzwvdGV4dD4KPGxpbmUgeDE9IjUwIiB5MT0iNjUiIHgyPSI1MCIgeTI9IjE5NSIgY2xhc3M9ImciLz48bGluZSB4MT0iOTAiIHkxPSI2NSIgeDI9IjkwIiB5Mj0iMTk1IiBjbGFzcz0iZyIvPjxsaW5lIHgxPSIxMzAiIHkxPSI2NSIgeDI9IjEzMCIgeTI9IjE5NSIgY2xhc3M9ImciLz4KPGxpbmUgeDE9IjQwIiB5MT0iODUiIHgyPSIyMjAiIHkyPSI4NSIgY2xhc3M9ImciLz48bGluZSB4MT0iNDAiIHkxPSIxMjUiIHgyPSIyMjAiIHkyPSIxMjUiIGNsYXNzPSJnIi8+PGxpbmUgeDE9IjQwIiB5MT0iMTY1IiB4Mj0iMjIwIiB5Mj0iMTY1IiBjbGFzcz0iZyIvPgo8dGV4dCB4PSI0MCIgeT0iMjE1IiBjbGFzcz0ibSI+5LiO6Zi15YiX5Y+v57yW56iLPC90ZXh0Pgo8bGluZSB4MT0iMjQwIiB5MT0iNjUiIHgyPSIyNDAiIHkyPSIxOTUiIGNsYXNzPSJnIi8+CjxsaW5lIHgxPSIyNjAiIHkxPSI2NSIgeDI9IjI2MCIgeTI9IjE5NSIgY2xhc3M9ImciLz48bGluZSB4MT0iMzAwIiB5MT0iNjUiIHgyPSIzMDAiIHkyPSIxOTUiIGNsYXNzPSJnIi8+PGxpbmUgeDE9IjM0MCIgeTE9IjY1IiB4Mj0iMzQwIiB5Mj0iMTk1IiBjbGFzcz0iZyIvPjxsaW5lIHgxPSIzODAiIHkxPSI2NSIgeDI9IjM4MCIgeTI9IjE5NSIgY2xhc3M9ImciLz4KPGxpbmUgeDE9IjI0MCIgeTE9Ijg1IiB4Mj0iNDIwIiB5Mj0iODUiIGNsYXNzPSJnIi8+PGxpbmUgeDE9IjI0MCIgeTE9IjEyNSIgeDI9IjQyMCIgeTI9IjEyNSIgY2xhc3M9ImciLz48bGluZSB4MT0iMjQwIiB5MT0iMTY1IiB4Mj0iNDIwIiB5Mj0iMTY1IiBjbGFzcz0iZyIvPgo8dGV4dCB4PSIyNTUiIHk9IjIxNSIgY2xhc3M9Im0iPuaIlumYteWIl+WbuuWumjwvdGV4dD4KPGxpbmUgeDE9IjIyMCIgeTE9Ijg1IiB4Mj0iMjQwIiB5Mj0iODUiIGNsYXNzPSJzIi8+PGxpbmUgeDE9IjIyMCIgeTE9IjEyNSIgeDI9IjI0MCIgeTI9IjEyNSIgY2xhc3M9InMiLz48bGluZSB4MT0iMjIwIiB5MT0iMTY1IiB4Mj0iMjQwIiB5Mj0iMTY1IiBjbGFzcz0icyIvPgo8L3N2Zz4K",
			"imageAlt": "一种可编程逻辑器件的与阵列和或阵列"
		},
		{
			"id": "q51",
			"module": "M1",
			"type": "code",
			"difficulty": 2,
			"stem": "8 位补码里，十进制 -88 的编码是哪一个？",
			"options": [
				"10101001",
				"10101000",
				"11011000",
				"01011000"
			],
			"answer": 1,
			"explain": "先写原码 11011000，数值位取反得反码 10100111，末位加一得补码 10101000。",
			"verify": {
				"args": [
					"code",
					"--bits",
					"8",
					"--value",
					"-88"
				],
				"field": "twosComplement"
			}
		},
		{
			"id": "q52",
			"module": "M6",
			"type": "concept",
			"difficulty": 3,
			"stem": "4 输入 LUT 需要多少位配置数据？",
			"options": [
				"16 位",
				"32 位",
				"8 位",
				"4 位"
			],
			"answer": 0,
			"explain": "4 个输入有 16 种组合，每种组合对应一位输出值，所以是 16 位。"
		},
		{
			"id": "q53",
			"module": "M1",
			"type": "gray",
			"difficulty": 2,
			"stem": "4 位二进制 0110 对应的格雷码是？",
			"options": [
				"0101",
				"0100",
				"0111",
				"1010"
			],
			"answer": 0,
			"explain": "格雷码最高位与二进制相同，其余每位等于本位与高位异或，得到 0101。",
			"verify": {
				"args": [
					"gray",
					"--bits",
					"4",
					"--value",
					"6"
				],
				"field": "gray"
			}
		},
		{
			"id": "q54",
			"module": "M6",
			"type": "concept",
			"difficulty": 3,
			"stem": "CPLD 与 FPGA 在掉电行为上的典型区别是？",
			"options": [
				"两者都丢配置",
				"CPLD 配置不丢，FPGA 基于 SRAM 掉电丢配置",
				"FPGA 不丢，CPLD 丢",
				"两者都不丢配置"
			],
			"answer": 1,
			"explain": "CPLD 多为 E²PROM 工艺，FPGA 多为 SRAM 工艺，上电要重新加载比特流。"
		},
		{
			"id": "q55",
			"module": "M1",
			"type": "bcd",
			"difficulty": 3,
			"stem": "十进制数字 9 的 2421 码是哪一组 4 位编码？",
			"options": [
				"1100",
				"1001",
				"1111",
				"0000"
			],
			"answer": 2,
			"explain": "2421 码按权重 2、4、2、1 相加：9 对应 1111。8421 码则是 1001。"
		},
		{
			"id": "q56",
			"module": "M7",
			"type": "figure",
			"difficulty": 3,
			"stem": "图示 4 位 R-2R DAC 输入为 1000，满量程对应 Vref，输出 Vo 约为？",
			"options": [
				"3Vref / 4",
				"Vref",
				"Vref / 4",
				"Vref / 2"
			],
			"answer": 3,
			"explain": "4 位共 16 个台阶，1000 对应 8 个台阶，因此 Vo 为满量程的一半。",
			"image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NjAgMjIwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IuWbm+S9jSBSLTJSIOaVsOaooei9rOaNouWZqOi+k+WFpeS4uiAxMDAwIj4KPHN0eWxlPgouc3tmaWxsOm5vbmU7c3Ryb2tlOiM1OGNjMDI7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kfQoudHtmaWxsOiNlNmU4ZWU7Zm9udC1mYW1pbHk6IlNlZ29lIFVJIiwiTWljcm9zb2Z0IFlhSGVpIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNHB4fQouYntmaWxsOiNlNmU4ZWU7Zm9udC1mYW1pbHk6IlNlZ29lIFVJIiwiTWljcm9zb2Z0IFlhSGVpIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjYwMH0KLm17ZmlsbDojOWFhMmIxO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTIuNXB4fQouZ3tmaWxsOm5vbmU7c3Ryb2tlOiMzYTQyNTA7c3Ryb2tlLXdpZHRoOjEuMn0KLmJveHtmaWxsOiMxYjIwMjk7c3Ryb2tlOiMzYTQyNTA7c3Ryb2tlLXdpZHRoOjEuNX0KPC9zdHlsZT4KPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzE0MTgyMSIvPgo8dGV4dCB4PSIyNCIgeT0iMjgiIGNsYXNzPSJiIj7popjlm77vvJpSLTJSIERBQzwvdGV4dD4KPHRleHQgeD0iNDAiIHk9IjgwIiBjbGFzcz0idCI+YjM9MTwvdGV4dD48dGV4dCB4PSI0MCIgeT0iMTE0IiBjbGFzcz0idCI+YjI9MDwvdGV4dD48dGV4dCB4PSI0MCIgeT0iMTQ4IiBjbGFzcz0idCI+YjE9MDwvdGV4dD48dGV4dCB4PSI0MCIgeT0iMTgyIiBjbGFzcz0idCI+YjA9MDwvdGV4dD4KPHJlY3QgeD0iMTIwIiB5PSI1NSIgd2lkdGg9IjEzMCIgaGVpZ2h0PSIxNDUiIHJ4PSI2IiBjbGFzcz0iYm94Ii8+PHRleHQgeD0iMTg1IiB5PSIxMjUiIGNsYXNzPSJ0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5SLTJSIOe9kee7nDwvdGV4dD4KPGxpbmUgeDE9IjkwIiB5MT0iNzYiIHgyPSIxMjAiIHkyPSI3NiIgY2xhc3M9InMiLz48bGluZSB4MT0iOTAiIHkxPSIxMTAiIHgyPSIxMjAiIHkyPSIxMTAiIGNsYXNzPSJzIi8+PGxpbmUgeDE9IjkwIiB5MT0iMTQ0IiB4Mj0iMTIwIiB5Mj0iMTQ0IiBjbGFzcz0icyIvPjxsaW5lIHgxPSI5MCIgeTE9IjE3OCIgeDI9IjEyMCIgeTI9IjE3OCIgY2xhc3M9InMiLz4KPGxpbmUgeDE9IjI1MCIgeTE9IjEyNSIgeDI9IjMyMCIgeTI9IjEyNSIgY2xhc3M9InMiLz48cGF0aCBkPSJNMzIwIDk1IGw1MCAzMCBsLTUwIDMwIHoiIGNsYXNzPSJib3giLz4KPGxpbmUgeDE9IjM3MCIgeTE9IjEyNSIgeDI9IjQxMCIgeTI9IjEyNSIgY2xhc3M9InMiLz48dGV4dCB4PSI0MTgiIHk9IjEyOSIgY2xhc3M9InQiPlZvPC90ZXh0Pgo8dGV4dCB4PSI5MCIgeT0iMjA1IiBjbGFzcz0ibSI+5ruh6YeP56iL5a+55bqUIFZyZWY8L3RleHQ+Cjwvc3ZnPgo=",
			"imageAlt": "四位 R-2R 数模转换器输入为 1000"
		},
		{
			"id": "q57",
			"module": "M1",
			"type": "hamming",
			"difficulty": 3,
			"stem": "对数据 1011 做偶校验的 (7,4) 海明编码，结果（第 1 到第 7 位）是？",
			"options": [
				"1110011",
				"0111011",
				"0110101",
				"0110011"
			],
			"answer": 3,
			"explain": "p1=⊕(3,5,7)=0，p2=⊕(3,6,7)=1，p4=⊕(5,6,7)=0，按 p1 p2 d1 p4 d2 d3 d4 排列得 0110011。",
			"verify": {
				"args": [
					"hamming",
					"--data",
					"1011"
				],
				"field": "code"
			}
		},
		{
			"id": "q58",
			"module": "M6",
			"type": "concept",
			"difficulty": 3,
			"stem": "GAL 器件的输出逻辑宏单元主要作用是什么？",
			"options": [
				"放大输出电流",
				"配置输出极性、寄存器和三态方式",
				"产生系统时钟",
				"存储用户程序"
			],
			"answer": 1,
			"explain": "宏单元让同一器件可以按需配成组合输出、寄存输出或双向口。"
		},
		{
			"id": "q59",
			"module": "M1",
			"type": "hamming",
			"difficulty": 3,
			"stem": "接收到的 7 位海明码是 0110111（偶校验，(7,4) 码），按综合症判断，第几位出错？",
			"options": [
				"7",
				"3",
				"6",
				"5"
			],
			"answer": 3,
			"explain": "对 p1、p2、p4 三组分别求偶校验，综合症 S4S2S1 的十进制值就是出错位号 5；把该位取反即可纠正。",
			"verify": {
				"args": [
					"hamming",
					"--check",
					"0110111"
				],
				"field": "position"
			}
		},
		{
			"id": "q60",
			"module": "M5",
			"type": "concept",
			"difficulty": 2,
			"stem": "存储器地址译码器的作用是？",
			"options": [
				"放大地址信号",
				"根据高位地址选中对应的芯片或存储单元",
				"保存写入的数据",
				"产生读写时钟"
			],
			"answer": 1,
			"explain": "地址译码把地址空间划分开，避免多片存储器同时被选中。"
		},
		{
			"id": "q61",
			"module": "M2",
			"type": "minterms",
			"difficulty": 2,
			"stem": "函数在 000、010、011、111 这几组输入下取值为 1（变量顺序 A B C），它的最小项之和怎么写？",
			"options": [
				"Σm(0, 2, 3, 7)",
				"Σm(0, 1, 2, 3, 7)",
				"Σm(0, 2, 3)",
				"Σm(1, 4, 5, 6)"
			],
			"answer": 0,
			"explain": "把每组取值为 1 的输入按 A B C 的二进制读出编号，就是 Σm(0, 2, 3, 7)。"
		},
		{
			"id": "q62",
			"module": "M7",
			"type": "figure",
			"difficulty": 3,
			"stem": "图示 3 位逐次逼近 ADC，Vref=5 V，输入 3.2 V，转换结果最接近？",
			"options": [
				"011",
				"101",
				"100",
				"110"
			],
			"answer": 1,
			"explain": "量化级差为 5/8=0.625 V，3.2 V 约为 5.12 个级差，取整为 5，即 101。",
			"image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NjAgMjMwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IuS4ieS9jemAkOasoemAvOi/kSBBREPvvIzlj4LogIPnlLXljosgNSDkvI/vvIzovpPlhaUgMy4yIOS8jyI+CjxzdHlsZT4KLnN7ZmlsbDpub25lO3N0cm9rZTojNThjYzAyO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZH0KLnR7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweH0KLmJ7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo2MDB9Ci5te2ZpbGw6IzlhYTJiMTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEyLjVweH0KLmd7ZmlsbDpub25lO3N0cm9rZTojM2E0MjUwO3N0cm9rZS13aWR0aDoxLjJ9Ci5ib3h7ZmlsbDojMWIyMDI5O3N0cm9rZTojM2E0MjUwO3N0cm9rZS13aWR0aDoxLjV9Cjwvc3R5bGU+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxNDE4MjEiLz4KPHRleHQgeD0iMjQiIHk9IjI4IiBjbGFzcz0iYiI+6aKY5Zu+77yaMyDkvY0gU0FSIEFEQzwvdGV4dD4KPHJlY3QgeD0iNTAiIHk9IjcwIiB3aWR0aD0iMTEwIiBoZWlnaHQ9IjYwIiByeD0iNiIgY2xhc3M9ImJveCIvPjx0ZXh0IHg9IjEwNSIgeT0iMTA0IiBjbGFzcz0idCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+VmluID0gMy4yIFY8L3RleHQ+CjxyZWN0IHg9IjIxMCIgeT0iNzAiIHdpZHRoPSIxMDAiIGhlaWdodD0iNjAiIHJ4PSI2IiBjbGFzcz0iYm94Ii8+PHRleHQgeD0iMjYwIiB5PSIxMDQiIGNsYXNzPSJ0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7mr5TovoPlmag8L3RleHQ+CjxsaW5lIHgxPSIxNjAiIHkxPSIxMDAiIHgyPSIyMTAiIHkyPSIxMDAiIGNsYXNzPSJzIi8+CjxsaW5lIHgxPSIzMTAiIHkxPSIxMDAiIHgyPSIzNzAiIHkyPSIxMDAiIGNsYXNzPSJzIi8+PHRleHQgeD0iMzc4IiB5PSIxMDQiIGNsYXNzPSJ0Ij4zIOS9jei+k+WHujwvdGV4dD4KPHJlY3QgeD0iMjEwIiB5PSIxNjUiIHdpZHRoPSIxMDAiIGhlaWdodD0iNTAiIHJ4PSI2IiBjbGFzcz0iYm94Ii8+PHRleHQgeD0iMjYwIiB5PSIxOTQiIGNsYXNzPSJ0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5EQUM8L3RleHQ+PGxpbmUgeDE9IjI2MCIgeTE9IjE2NSIgeDI9IjI2MCIgeTI9IjEzMCIgY2xhc3M9InMiLz4KPHRleHQgeD0iMzMwIiB5PSIxOTQiIGNsYXNzPSJtIj5WcmVmID0gNSBWPC90ZXh0Pgo8dGV4dCB4PSI1MCIgeT0iMjAwIiBjbGFzcz0ibSI+6YeP5YyW57qn5beuID0gVnJlZiAvIDggPSAwLjYyNSBWPC90ZXh0Pgo8L3N2Zz4K",
			"imageAlt": "三位逐次逼近 ADC，参考电压 5 伏，输入 3.2 伏"
		},
		{
			"id": "q63",
			"module": "M2",
			"type": "kmap",
			"difficulty": 3,
			"stem": "三变量函数 F = Σm(0, 2, 4, 5, 6)，在卡诺图上化简后的最简与或式是？",
			"options": [
				"~C + ~C + A·~B + ~C",
				"C + ~C + A·~B + ~C",
				"~C + ~C + A·~B + ~C + A·~B",
				"~C·A·~B·~C·~C"
			],
			"answer": 0,
			"explain": "合并相邻的 1，可得到质蕴含项 A·~B、~C，最简式取 ~C + ~C + A·~B + ~C。"
		},
		{
			"id": "q64",
			"module": "M8",
			"type": "concept",
			"difficulty": 3,
			"stem": "组合逻辑的 always 块里漏写 else，综合工具会推断出什么？",
			"options": [
				"锁存器",
				"加法器",
				"触发器",
				"三态门"
			],
			"answer": 0,
			"explain": "条件不满足时必须保持原值，这种「保持」就是锁存行为。补全所有分支即可消除。"
		},
		{
			"id": "q65",
			"module": "M1",
			"type": "base",
			"difficulty": 1,
			"stem": "十进制 300 的 10 进制写法是 300，它换成 8 进制是多少？",
			"options": [
				"453",
				"454",
				"1130",
				"455"
			],
			"answer": 1,
			"explain": "按权展开得十进制 300，再除基取余并逆序读取，得到 454。",
			"verify": {
				"args": [
					"base",
					"--from",
					"10",
					"--to",
					"8",
					"--value",
					"300"
				],
				"field": "result"
			}
		},
		{
			"id": "q66",
			"module": "M4",
			"type": "concept",
			"difficulty": 2,
			"stem": "D 触发器的特性方程是？",
			"options": [
				"Q*=T⊕Q",
				"Q*=D",
				"Q*=JQ′+K′Q",
				"Q*=D′"
			],
			"answer": 1,
			"explain": "D 触发器在时钟沿把输入端 D 的值送到输出，次态等于 D。"
		},
		{
			"id": "q67",
			"module": "M1",
			"type": "code",
			"difficulty": 2,
			"stem": "8 位补码里，十进制 -72 的编码是哪一个？",
			"options": [
				"10111000",
				"10111001",
				"11001000",
				"10110111"
			],
			"answer": 0,
			"explain": "先写原码 11001000，数值位取反得反码 10110111，末位加一得补码 10111000。",
			"verify": {
				"args": [
					"code",
					"--bits",
					"8",
					"--value",
					"-72"
				],
				"field": "twosComplement"
			}
		},
		{
			"id": "q68",
			"module": "M2",
			"type": "concept",
			"difficulty": 2,
			"stem": "判断两个逻辑函数是否相等，最可靠的方法是？",
			"options": [
				"看变量个数是否相同",
				"看表达式长得是否一样",
				"看卡诺图圈数是否相同",
				"列出真值表逐行比较"
			],
			"answer": 3,
			"explain": "表达式形式可以不同而功能相同；真值表相同才是函数相等的定义。"
		},
		{
			"id": "q69",
			"module": "M1",
			"type": "gray",
			"difficulty": 2,
			"stem": "4 位二进制 1011 对应的格雷码是？",
			"options": [
				"1110",
				"1010",
				"0111",
				"1001"
			],
			"answer": 0,
			"explain": "格雷码最高位与二进制相同，其余每位等于本位与高位异或，得到 1110。",
			"verify": {
				"args": [
					"gray",
					"--bits",
					"4",
					"--value",
					"11"
				],
				"field": "gray"
			}
		},
		{
			"id": "q70",
			"module": "M5",
			"type": "concept",
			"difficulty": 2,
			"stem": "SRAM 的存储单元本质上是什么？",
			"options": [
				"一个浮栅管",
				"双稳态触发器",
				"一个电容",
				"一根熔丝"
			],
			"answer": 1,
			"explain": "SRAM 用六个管子构成双稳态，只要供电就保持，不需要刷新。"
		},
		{
			"id": "q71",
			"module": "M1",
			"type": "bcd",
			"difficulty": 3,
			"stem": "十进制数字 8 的 2421 码是哪一组 4 位编码？",
			"options": [
				"1011",
				"0001",
				"1000",
				"1110"
			],
			"answer": 3,
			"explain": "2421 码按权重 2、4、2、1 相加：8 对应 1110。8421 码则是 1000。"
		},
		{
			"id": "q72",
			"module": "M3",
			"type": "concept",
			"difficulty": 2,
			"stem": "74LS138 译码器有几个输出端？",
			"options": [
				"3 个",
				"8 个",
				"16 个",
				"4 个"
			],
			"answer": 1,
			"explain": "138 是 3 线−8 线译码器，3 根地址输入对应 8 个低有效输出。"
		},
		{
			"id": "q73",
			"module": "M1",
			"type": "hamming",
			"difficulty": 3,
			"stem": "对数据 0101 做偶校验的 (7,4) 海明编码，结果（第 1 到第 7 位）是？",
			"options": [
				"0101101",
				"1100101",
				"0100101",
				"0100011"
			],
			"answer": 2,
			"explain": "p1=⊕(3,5,7)=0，p2=⊕(3,6,7)=1，p4=⊕(5,6,7)=0，按 p1 p2 d1 p4 d2 d3 d4 排列得 0100101。",
			"verify": {
				"args": [
					"hamming",
					"--data",
					"0101"
				],
				"field": "code"
			}
		},
		{
			"id": "q74",
			"module": "M7",
			"type": "concept",
			"difficulty": 2,
			"stem": "硬布线控制器的主要特点是？",
			"options": [
				"速度快，但修改控制逻辑困难",
				"速度与微程序控制器完全相同",
				"速度慢，但容易修改",
				"不需要时钟信号"
			],
			"answer": 0,
			"explain": "控制信号由组合逻辑直接产生，路径短所以快；要改功能就得改电路。"
		},
		{
			"id": "q75",
			"module": "M1",
			"type": "hamming",
			"difficulty": 3,
			"stem": "接收到的 7 位海明码是 0101111（偶校验，(7,4) 码），按综合症判断，第几位出错？",
			"options": [
				"2",
				"3",
				"4",
				"5"
			],
			"answer": 0,
			"explain": "对 p1、p2、p4 三组分别求偶校验，综合症 S4S2S1 的十进制值就是出错位号 2；把该位取反即可纠正。",
			"verify": {
				"args": [
					"hamming",
					"--check",
					"0101111"
				],
				"field": "position"
			}
		},
		{
			"id": "q76",
			"module": "M3",
			"type": "concept",
			"difficulty": 1,
			"stem": "半加器的进位输出 C 等于？",
			"options": [
				"A+B",
				"AB",
				"A⊕B",
				"AB′"
			],
			"answer": 1,
			"explain": "只有 A、B 同时为 1 才进位，所以 C=AB；本位和是 A⊕B。"
		},
		{
			"id": "q77",
			"module": "M2",
			"type": "minterms",
			"difficulty": 2,
			"stem": "函数在 001、010、100、101、111 这几组输入下取值为 1（变量顺序 A B C），它的最小项之和怎么写？",
			"options": [
				"Σm(0, 1, 2, 4, 5, 7)",
				"Σm(1, 2, 4, 5, 7)",
				"Σm(0, 3, 6)",
				"Σm(1, 2, 4, 5)"
			],
			"answer": 1,
			"explain": "把每组取值为 1 的输入按 A B C 的二进制读出编号，就是 Σm(1, 2, 4, 5, 7)。"
		},
		{
			"id": "q78",
			"module": "M1",
			"type": "concept",
			"difficulty": 2,
			"stem": "8 位补码能表示的整数范围是？",
			"options": [
				"0 到 255",
				"−128 到 127",
				"−127 到 127",
				"−128 到 128"
			],
			"answer": 1,
			"explain": "n 位补码范围是 −2ⁿ⁻¹ 到 2ⁿ⁻¹−1；负数比正数多一个。"
		},
		{
			"id": "q79",
			"module": "M2",
			"type": "kmap",
			"difficulty": 3,
			"stem": "三变量函数 F = Σm(0, 3, 4, 5, 7)，在卡诺图上化简后的最简与或式是？",
			"options": [
				"A·~B·B·C·~B·~C",
				"~B·~C + B·C + A·~B",
				"~B·~C + B·C + A·~B + A·C",
				"B·~C + B·C + A·~B"
			],
			"answer": 1,
			"explain": "合并相邻的 1，可得到质蕴含项 ~B·~C、B·C、A·~B、A·C，最简式取 ~B·~C + B·C + A·~B。"
		},
		{
			"id": "q80",
			"module": "M4",
			"type": "concept",
			"difficulty": 2,
			"stem": "锁存器和触发器最本质的区别是什么？",
			"options": [
				"锁存器电平触发，触发器边沿触发",
				"触发器不需要时钟",
				"锁存器只能存 1 位，触发器能存多位",
				"锁存器是组合逻辑"
			],
			"answer": 0,
			"explain": "关键在触发方式：使能期间透明的叫锁存器，只在跳变沿采样的叫触发器。"
		}
	]
};

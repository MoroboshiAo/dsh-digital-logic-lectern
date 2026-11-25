// 由 scripts/dlquiz.js 生成，种子 20261125，共 80 题。不要手改。
window.DL_QUIZ = {
	"seed": 20261125,
	"generatedAt": "2026-11-25T05:23:53.424Z",
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
			"module": "M2",
			"type": "concept",
			"difficulty": 1,
			"stem": "共阳七段数码管中，某段的控制码为 0 时该段处于什么状态？",
			"options": [
				"高阻",
				"熄灭",
				"闪烁",
				"点亮"
			],
			"answer": 3,
			"explain": "共阳接法把七段的阳极接高电平，阴极给低电平时才有电流，所以 0 点亮、1 熄灭。"
		},
		{
			"id": "q5",
			"module": "M1",
			"type": "gray",
			"difficulty": 2,
			"stem": "4 位二进制 0100 对应的格雷码是？",
			"options": [
				"0110",
				"0111",
				"0100",
				"0101"
			],
			"answer": 0,
			"explain": "格雷码最高位与二进制相同，其余每位等于本位与高位异或，得到 0110。",
			"verify": {
				"args": [
					"gray",
					"--bits",
					"4",
					"--value",
					"4"
				],
				"field": "gray"
			}
		},
		{
			"id": "q6",
			"module": "M2",
			"type": "concept",
			"difficulty": 2,
			"stem": "优先编码器和普通编码器的关键区别是？",
			"options": [
				"优先编码器允许多个输入同时有效，按优先级取最高",
				"普通编码器允许多个输入同时有效",
				"两者功能完全相同",
				"优先编码器输出位数更多"
			],
			"answer": 0,
			"explain": "普通编码器要求同一时刻只有一个输入有效，优先编码器则给每个输入排定优先级，避免冲突。"
		},
		{
			"id": "q7",
			"module": "M1",
			"type": "bcd",
			"difficulty": 3,
			"stem": "十进制数字 5 的 2421 码是哪一组 4 位编码？",
			"options": [
				"0101",
				"1000",
				"0100",
				"1011"
			],
			"answer": 3,
			"explain": "2421 码按权重 2、4、2、1 相加：5 对应 1011。8421 码则是 0101。"
		},
		{
			"id": "q8",
			"module": "M2",
			"type": "figure",
			"difficulty": 3,
			"stem": "图示三变量卡诺图在 m0、m1、m3、m7 处填 1，化简后的最简与或式是？",
			"options": [
				"A′C′ + BC",
				"A′B′ + B′C",
				"A′B′ + BC",
				"A′B′ + AC"
			],
			"answer": 2,
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
			"module": "M3",
			"type": "concept",
			"difficulty": 2,
			"stem": "同步计数器与异步计数器的区别是？",
			"options": [
				"同步型各级触发器共用同一个时钟",
				"同步型只能做加法计数",
				"异步型工作速度一定更快",
				"异步型不使用触发器"
			],
			"answer": 0,
			"explain": "异步型把前一级输出当时钟逐级传递，存在累积延迟；同步型所有触发器同时动作。"
		},
		{
			"id": "q11",
			"module": "M1",
			"type": "hamming",
			"difficulty": 3,
			"stem": "接收到的 7 位海明码是 1101110（偶校验，(7,4) 码），按综合症判断，第几位出错？",
			"options": [
				"5",
				"4",
				"7",
				"2"
			],
			"answer": 1,
			"explain": "对 p1、p2、p4 三组分别求偶校验，综合症 S4S2S1 的十进制值就是出错位号 4；把该位取反即可纠正。",
			"verify": {
				"args": [
					"hamming",
					"--check",
					"1101110"
				],
				"field": "position"
			}
		},
		{
			"id": "q12",
			"module": "M5",
			"type": "concept",
			"difficulty": 2,
			"stem": "4K×8 的存储器需要多少根地址线？",
			"options": [
				"11 根",
				"12 根",
				"13 根",
				"8 根"
			],
			"answer": 1,
			"explain": "4K = 2 的 12 次方，地址线要能区分 4096 个单元，因此需要 12 根。"
		},
		{
			"id": "q13",
			"module": "M2",
			"type": "minterms",
			"difficulty": 2,
			"stem": "函数在 000、001、010、110 这几组输入下取值为 1（变量顺序 A B C），它的最小项之和怎么写？",
			"options": [
				"Σm(0, 1, 2, 6)",
				"Σm(3, 4, 5, 7)",
				"Σm(0, 1, 2)",
				"Σm(0, 1, 2, 3, 6)"
			],
			"answer": 0,
			"explain": "把每组取值为 1 的输入按 A B C 的二进制读出编号，就是 Σm(0, 1, 2, 6)。"
		},
		{
			"id": "q14",
			"module": "M4",
			"type": "figure",
			"difficulty": 2,
			"stem": "图示波形中，输出 Q 在什么时候跟随 D 更新？",
			"options": [
				"时钟低电平期间",
				"时钟高电平期间",
				"时钟上升沿",
				"时钟下降沿"
			],
			"answer": 2,
			"explain": "边沿触发的 D 触发器只在 CLK 上升沿采样 D，其余时间保持原状态。",
			"image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NjAgMjAwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IuafkOinpuWPkeWZqOeahOaXtumSn+OAgei+k+WFpeS4jui+k+WHuuazouW9ou+8jOi+k+WHuuWcqOaXtumSn+S4iuWNh+ayv+WPmOWMliI+Cgk8ZyBzdHJva2U9IiMyYzMxM2IiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iNCA1Ij4KCQk8cGF0aCBkPSJNNzAgMzJ2MTQwTTE4MCAzMnYxNDBNMjkwIDMydjE0ME00MDAgMzJ2MTQwIi8+Cgk8L2c+Cgk8ZyBmaWxsPSJub25lIiBzdHJva2U9IiM1OGNjMDIiIHN0cm9rZS13aWR0aD0iMi40IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiPgoJCTxwYXRoIGQ9Ik00MCA2NmgzMHYtMjRoODB2MjRoODB2LTI0aDgwdjI0aDgwdi0yNGg1MCIvPgoJCTxwYXRoIGQ9Ik00MCAxMjZoNzB2LTI0aDkwdjI0aDkwdi0yNGg3MHYyNGg3MCIvPgoJCTxwYXRoIGQ9Ik00MCAxNzZoMTEwdi0yNGg5MHYyNGg4MHYtMjRoODB2MjRoMzAiLz4KCTwvZz4KCTxnIGZvbnQtZmFtaWx5PSJTZWdvZSBVSSwgTWljcm9zb2Z0IFlhSGVpLCBzYW5zLXNlcmlmIiBmaWxsPSIjOWFhMmIxIiBmb250LXNpemU9IjEyIiB0ZXh0LWFuY2hvcj0iZW5kIj4KCQk8dGV4dCB4PSIzNCIgeT0iNTQiPkNMSzwvdGV4dD4KCQk8dGV4dCB4PSIzNCIgeT0iMTE0Ij5EPC90ZXh0PgoJCTx0ZXh0IHg9IjM0IiB5PSIxNjQiPlE8L3RleHQ+Cgk8L2c+Cjwvc3ZnPgo=",
			"imageAlt": "CLK、D、Q 三条波形，Q 在时钟上升沿变化"
		},
		{
			"id": "q15",
			"module": "M2",
			"type": "kmap",
			"difficulty": 3,
			"stem": "三变量函数 F = Σm(0, 1, 2, 4, 6)，在卡诺图上化简后的最简与或式是？",
			"options": [
				"~C·~C·~C·~A·~B",
				"A·~B + ~C + ~C + ~C",
				"~A·~B + ~C + ~C + ~C",
				"~A·~B + ~C + ~C + ~C + ~A·~B"
			],
			"answer": 2,
			"explain": "合并相邻的 1，可得到质蕴含项 ~A·~B、~C，最简式取 ~A·~B + ~C + ~C + ~C。"
		},
		{
			"id": "q16",
			"module": "M7",
			"type": "concept",
			"difficulty": 2,
			"stem": "逐次逼近型 ADC 转换 n 位结果通常需要几个节拍？",
			"options": [
				"n 个",
				"2 的 n 次方个",
				"1 个",
				"n/2 个"
			],
			"answer": 0,
			"explain": "从最高位开始逐位试探，每位一个节拍，n 位就需要 n 个节拍。"
		},
		{
			"id": "q17",
			"module": "M1",
			"type": "base",
			"difficulty": 1,
			"stem": "十进制 251 的 2 进制写法是 11111011，它换成 8 进制是多少？",
			"options": [
				"374",
				"766",
				"373",
				"372"
			],
			"answer": 2,
			"explain": "按权展开得十进制 251，再除基取余并逆序读取，得到 373。",
			"verify": {
				"args": [
					"base",
					"--from",
					"2",
					"--to",
					"8",
					"--value",
					"11111011"
				],
				"field": "result"
			}
		},
		{
			"id": "q18",
			"module": "M2",
			"type": "concept",
			"difficulty": 2,
			"stem": "卡诺图里两个相邻的 1 合并，能消去几个变量？",
			"options": [
				"一个都消不掉",
				"一个",
				"三个",
				"两个"
			],
			"answer": 1,
			"explain": "每合并一次消去一个变量，四个 1 成圈消两个，八个成圈消三个。"
		},
		{
			"id": "q19",
			"module": "M1",
			"type": "code",
			"difficulty": 2,
			"stem": "8 位补码里，十进制 -56 的编码是哪一个？",
			"options": [
				"11001000",
				"10111000",
				"11001001",
				"11000111"
			],
			"answer": 0,
			"explain": "先写原码 10111000，数值位取反得反码 11000111，末位加一得补码 11001000。",
			"verify": {
				"args": [
					"code",
					"--bits",
					"8",
					"--value",
					"-56"
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
				"0000",
				"1000",
				"0100",
				"1010"
			],
			"answer": 2,
			"explain": "4 位计数器的模为 16，20 个脉冲后状态为 20 mod 16 = 4，即 0100。",
			"image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MjAgMjAwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IuWbm+S9jeS6jOi/m+WItuiuoeaVsOWZqO+8jOaXtumSn+i+k+WFpe+8jOi+k+WHuuS4uiBRMyDliLAgUTDvvIzliJ3mgIHlhajpm7YiPgoJPGcgZmlsbD0iIzFjMWYyNiIgc3Ryb2tlPSIjNThjYzAyIiBzdHJva2Utd2lkdGg9IjIuMiI+CgkJPHJlY3QgeD0iMTEwIiB5PSI1MCIgd2lkdGg9IjE4MCIgaGVpZ2h0PSIxMTAiIHJ4PSIxMCIvPgoJPC9nPgoJPGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOGI5M2ExIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+CgkJPHBhdGggZD0iTTUwIDg2aDYwTTUwIDEyNmg2MCIvPgoJCTxwYXRoIGQ9Ik0yOTAgNzBoNzBNMjkwIDk0aDcwTTI5MCAxMThoNzBNMjkwIDE0Mmg3MCIvPgoJCTxwYXRoIGQ9Ik0xMjIgMTUwbDEyIDktMTIgOSIvPgoJPC9nPgoJPGcgZm9udC1mYW1pbHk9IlNlZ29lIFVJLCBNaWNyb3NvZnQgWWFIZWksIHNhbnMtc2VyaWYiIGZpbGw9IiM5YWEyYjEiIGZvbnQtc2l6ZT0iMTIiPgoJCTx0ZXh0IHg9IjI2IiB5PSI5MCI+Q0xLPC90ZXh0PgoJCTx0ZXh0IHg9IjI2IiB5PSIxMzAiPkNMUjwvdGV4dD4KCQk8dGV4dCB4PSIzNjYiIHk9Ijc0Ij5RMzwvdGV4dD4KCQk8dGV4dCB4PSIzNjYiIHk9Ijk4Ij5RMjwvdGV4dD4KCQk8dGV4dCB4PSIzNjYiIHk9IjEyMiI+UTE8L3RleHQ+CgkJPHRleHQgeD0iMzY2IiB5PSIxNDYiPlEwPC90ZXh0PgoJPC9nPgoJPGcgZm9udC1mYW1pbHk9IlNlZ29lIFVJLCBNaWNyb3NvZnQgWWFIZWksIHNhbnMtc2VyaWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPgoJCTx0ZXh0IHg9IjIwMCIgeT0iOTIiIGZpbGw9IiNlNmU4ZWUiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSI2MDAiPjQg5L2N5LqM6L+b5Yi2PC90ZXh0PgoJCTx0ZXh0IHg9IjIwMCIgeT0iMTE0IiBmaWxsPSIjZTZlOGVlIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iNjAwIj7orqHmlbDlmag8L3RleHQ+CgkJPHRleHQgeD0iMjAwIiB5PSIxMzYiIGZpbGw9IiM5YWEyYjEiIGZvbnQtc2l6ZT0iMTEiPuWIneaAgSAwMDAwPC90ZXh0PgoJPC9nPgo8L3N2Zz4K",
			"imageAlt": "4 位二进制计数器，时钟与清零输入，输出 Q3 到 Q0"
		},
		{
			"id": "q21",
			"module": "M1",
			"type": "gray",
			"difficulty": 2,
			"stem": "4 位二进制 0110 对应的格雷码是？",
			"options": [
				"1010",
				"0111",
				"0110",
				"0101"
			],
			"answer": 3,
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
			"id": "q22",
			"module": "M3",
			"type": "concept",
			"difficulty": 3,
			"stem": "用数据选择器实现任意组合函数，依据是什么？",
			"options": [
				"把真值表的输出值接到对应数据端",
				"输出端能自动化简",
				"内部有触发器可以存储结果",
				"地址端可以编程"
			],
			"answer": 0,
			"explain": "地址端接变量，数据端接 0 或 1，选择器就按真值表逐行输出。"
		},
		{
			"id": "q23",
			"module": "M1",
			"type": "bcd",
			"difficulty": 3,
			"stem": "十进制数字 7 的 2421 码是哪一组 4 位编码？",
			"options": [
				"1010",
				"1101",
				"0111",
				"0010"
			],
			"answer": 1,
			"explain": "2421 码按权重 2、4、2、1 相加：7 对应 1101。8421 码则是 0111。"
		},
		{
			"id": "q24",
			"module": "M2",
			"type": "concept",
			"difficulty": 2,
			"stem": "判断两个逻辑函数是否相等，最可靠的方法是？",
			"options": [
				"列出真值表逐行比较",
				"看表达式长得是否一样",
				"看变量个数是否相同",
				"看卡诺图圈数是否相同"
			],
			"answer": 0,
			"explain": "表达式形式可以不同而功能相同；真值表相同才是函数相等的定义。"
		},
		{
			"id": "q25",
			"module": "M1",
			"type": "hamming",
			"difficulty": 3,
			"stem": "对数据 1100 做偶校验的 (7,4) 海明编码，结果（第 1 到第 7 位）是？",
			"options": [
				"0111100",
				"0110100",
				"0111010",
				"1111100"
			],
			"answer": 0,
			"explain": "p1=⊕(3,5,7)=0，p2=⊕(3,6,7)=1，p4=⊕(5,6,7)=1，按 p1 p2 d1 p4 d2 d3 d4 排列得 0111100。",
			"verify": {
				"args": [
					"hamming",
					"--data",
					"1100"
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
				"S=1，Cout=0",
				"S=0，Cout=1",
				"S=1，Cout=1",
				"S=0，Cout=0"
			],
			"answer": 1,
			"explain": "S = 1⊕1⊕0 = 0，Cout = 1·1 + 0·(1⊕1) = 1。",
			"image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NjAgMjIwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IuWFqOWKoOWZqOi+k+WFpSBBIOS4uiAx44CBQiDkuLogMeOAgUNpbiDkuLogMCI+CjxzdHlsZT4KLnN7ZmlsbDpub25lO3N0cm9rZTojNThjYzAyO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZH0KLnR7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweH0KLmJ7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo2MDB9Ci5te2ZpbGw6IzlhYTJiMTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEyLjVweH0KLmd7ZmlsbDpub25lO3N0cm9rZTojM2E0MjUwO3N0cm9rZS13aWR0aDoxLjJ9Ci5ib3h7ZmlsbDojMWIyMDI5O3N0cm9rZTojM2E0MjUwO3N0cm9rZS13aWR0aDoxLjV9Ci5obHtmaWxsOm5vbmU7c3Ryb2tlOiM1OGNjMDI7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWRhc2hhcnJheTo2IDR9Cjwvc3R5bGU+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxNDE4MjEiLz4KPHRleHQgeD0iMjQiIHk9IjI4IiBjbGFzcz0iYiI+6aKY5Zu+77ya5YWo5Yqg5ZmoPC90ZXh0Pgo8cmVjdCB4PSIxNjAiIHk9IjYwIiB3aWR0aD0iMTgwIiBoZWlnaHQ9IjEwMCIgcng9IjYiIGNsYXNzPSJib3giLz48dGV4dCB4PSIyNTAiIHk9IjEwNSIgY2xhc3M9InQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkZBPC90ZXh0Pgo8dGV4dCB4PSIxMDQiIHk9Ijg2IiBjbGFzcz0idCI+QSA9IDE8L3RleHQ+PHRleHQgeD0iMTA0IiB5PSIxMTYiIGNsYXNzPSJ0Ij5CID0gMTwvdGV4dD4KPGxpbmUgeDE9IjE0NiIgeTE9IjgyIiB4Mj0iMTYwIiB5Mj0iODIiIGNsYXNzPSJzIi8+PGxpbmUgeDE9IjE0NiIgeTE9IjExMiIgeDI9IjE2MCIgeTI9IjExMiIgY2xhc3M9InMiLz4KPHRleHQgeD0iMjMwIiB5PSI1MiIgY2xhc3M9InQiPkNpbiA9IDA8L3RleHQ+PGxpbmUgeDE9IjI1MCIgeTE9IjU4IiB4Mj0iMjUwIiB5Mj0iNjAiIGNsYXNzPSJzIi8+CjxsaW5lIHgxPSIzNDAiIHkxPSI4NCIgeDI9IjM5MCIgeTI9Ijg0IiBjbGFzcz0icyIvPjx0ZXh0IHg9IjM5OCIgeT0iODgiIGNsYXNzPSJ0Ij5TPC90ZXh0Pgo8bGluZSB4MT0iMzQwIiB5MT0iMTM2IiB4Mj0iMzkwIiB5Mj0iMTM2IiBjbGFzcz0icyIvPjx0ZXh0IHg9IjM5OCIgeT0iMTQwIiBjbGFzcz0idCI+Q291dDwvdGV4dD4KPHRleHQgeD0iNDIwIiB5PSIxMDAiIGNsYXNzPSJtIj7msYIgUyDkuI4gQ291dDwvdGV4dD4KPC9zdmc+Cg==",
			"imageAlt": "全加器输入 A 为 1、B 为 1、Cin 为 0"
		},
		{
			"id": "q27",
			"module": "M1",
			"type": "hamming",
			"difficulty": 3,
			"stem": "接收到的 7 位海明码是 0010001（偶校验，(7,4) 码），按综合症判断，第几位出错？",
			"options": [
				"6",
				"1",
				"7",
				"4"
			],
			"answer": 3,
			"explain": "对 p1、p2、p4 三组分别求偶校验，综合症 S4S2S1 的十进制值就是出错位号 4；把该位取反即可纠正。",
			"verify": {
				"args": [
					"hamming",
					"--check",
					"0010001"
				],
				"field": "position"
			}
		},
		{
			"id": "q28",
			"module": "M3",
			"type": "concept",
			"difficulty": 2,
			"stem": "八选一数据选择器需要几根地址线？",
			"options": [
				"3 根",
				"4 根",
				"2 根",
				"8 根"
			],
			"answer": 0,
			"explain": "8=2³，3 根地址线正好选中 8 路数据中的一路。"
		},
		{
			"id": "q29",
			"module": "M2",
			"type": "minterms",
			"difficulty": 2,
			"stem": "函数在 001、010、011、101、110 这几组输入下取值为 1（变量顺序 A B C），它的最小项之和怎么写？",
			"options": [
				"Σm(1, 2, 3, 5, 6)",
				"Σm(0, 4, 7)",
				"Σm(0, 1, 2, 3, 5, 6)",
				"Σm(1, 2, 3, 5)"
			],
			"answer": 0,
			"explain": "把每组取值为 1 的输入按 A B C 的二进制读出编号，就是 Σm(1, 2, 3, 5, 6)。"
		},
		{
			"id": "q30",
			"module": "M7",
			"type": "concept",
			"difficulty": 2,
			"stem": "微程序控制器的控制信号来自哪里？",
			"options": [
				"用户程序的内存",
				"组合逻辑门的直接输出",
				"数据总线",
				"控制存储器中的微指令"
			],
			"answer": 3,
			"explain": "每条微指令的各个字段直接控制门电路，属于硬件的一部分。"
		},
		{
			"id": "q31",
			"module": "M2",
			"type": "kmap",
			"difficulty": 3,
			"stem": "三变量函数 F = Σm(0, 3, 4, 5, 7)，在卡诺图上化简后的最简与或式是？",
			"options": [
				"~B·~C + B·C + A·~B",
				"B·~C + B·C + A·~B",
				"A·~B·B·C·~B·~C",
				"~B·~C + B·C + A·~B + A·C"
			],
			"answer": 0,
			"explain": "合并相邻的 1，可得到质蕴含项 ~B·~C、B·C、A·~B、A·C，最简式取 ~B·~C + B·C + A·~B。"
		},
		{
			"id": "q32",
			"module": "M2",
			"type": "figure",
			"difficulty": 2,
			"stem": "图示 3-8 译码器输入 A2A1A0=101，输出低电平有效，哪些输出为 0？",
			"options": [
				"只有 Y3 为 0",
				"只有 Y6 为 0",
				"Y0 到 Y7 全为 0",
				"只有 Y5 为 0"
			],
			"answer": 3,
			"explain": "二进制 101 等于十进制 5，低电平有效时只有对应的 Y5 输出 0，其余为 1。",
			"image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NjAgMjUwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IuS4iee6v+WFq+e6v+ivkeeggeWZqOi+k+WFpeS4uiAxMDEiPgo8c3R5bGU+Ci5ze2ZpbGw6bm9uZTtzdHJva2U6IzU4Y2MwMjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmR9Ci50e2ZpbGw6I2U2ZThlZTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHh9Ci5ie2ZpbGw6I2U2ZThlZTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NjAwfQoubXtmaWxsOiM5YWEyYjE7Zm9udC1mYW1pbHk6IlNlZ29lIFVJIiwiTWljcm9zb2Z0IFlhSGVpIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMi41cHh9Ci5ne2ZpbGw6bm9uZTtzdHJva2U6IzNhNDI1MDtzdHJva2Utd2lkdGg6MS4yfQouYm94e2ZpbGw6IzFiMjAyOTtzdHJva2U6IzNhNDI1MDtzdHJva2Utd2lkdGg6MS41fQouaGx7ZmlsbDpub25lO3N0cm9rZTojNThjYzAyO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1kYXNoYXJyYXk6NiA0fQo8L3N0eWxlPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMTQxODIxIi8+Cjx0ZXh0IHg9IjI0IiB5PSIyOCIgY2xhc3M9ImIiPumimOWbvu+8mjMtOCDor5HnoIHlmag8L3RleHQ+CjxyZWN0IHg9IjEyMCIgeT0iNTUiIHdpZHRoPSIxNTAiIGhlaWdodD0iMTc1IiByeD0iNiIgY2xhc3M9ImJveCIvPjx0ZXh0IHg9IjE0MCIgeT0iODIiIGNsYXNzPSJ0Ij5BMiBBMSBBMDwvdGV4dD48dGV4dCB4PSIxNTAiIHk9IjExMCIgY2xhc3M9ImIiPjEgIDAgIDE8L3RleHQ+Cjx0ZXh0IHg9IjMwMCIgeT0iNzYiIGNsYXNzPSJ0Ij5ZMDwvdGV4dD48dGV4dCB4PSIzMDAiIHk9Ijk2IiBjbGFzcz0idCI+WTE8L3RleHQ+PHRleHQgeD0iMzAwIiB5PSIxMTYiIGNsYXNzPSJ0Ij5ZMjwvdGV4dD48dGV4dCB4PSIzMDAiIHk9IjEzNiIgY2xhc3M9InQiPlkzPC90ZXh0Pjx0ZXh0IHg9IjMwMCIgeT0iMTU2IiBjbGFzcz0idCI+WTQ8L3RleHQ+PHRleHQgeD0iMzAwIiB5PSIxNzYiIGNsYXNzPSJ0Ij5ZNTwvdGV4dD48dGV4dCB4PSIzMDAiIHk9IjE5NiIgY2xhc3M9InQiPlk2PC90ZXh0Pjx0ZXh0IHg9IjMwMCIgeT0iMjE2IiBjbGFzcz0idCI+WTc8L3RleHQ+CjxsaW5lIHgxPSIyNzAiIHkxPSI3MSIgeDI9IjI5NCIgeTI9IjcxIiBjbGFzcz0icyIvPjxsaW5lIHgxPSIyNzAiIHkxPSI5MSIgeDI9IjI5NCIgeTI9IjkxIiBjbGFzcz0icyIvPjxsaW5lIHgxPSIyNzAiIHkxPSIxMTEiIHgyPSIyOTQiIHkyPSIxMTEiIGNsYXNzPSJzIi8+PGxpbmUgeDE9IjI3MCIgeTE9IjEzMSIgeDI9IjI5NCIgeTI9IjEzMSIgY2xhc3M9InMiLz48bGluZSB4MT0iMjcwIiB5MT0iMTUxIiB4Mj0iMjk0IiB5Mj0iMTUxIiBjbGFzcz0icyIvPjxsaW5lIHgxPSIyNzAiIHkxPSIxNzEiIHgyPSIyOTQiIHkyPSIxNzEiIGNsYXNzPSJzIi8+PGxpbmUgeDE9IjI3MCIgeTE9IjE5MSIgeDI9IjI5NCIgeTI9IjE5MSIgY2xhc3M9InMiLz48bGluZSB4MT0iMjcwIiB5MT0iMjExIiB4Mj0iMjk0IiB5Mj0iMjExIiBjbGFzcz0icyIvPgo8dGV4dCB4PSIxMjAiIHk9IjI0NSIgY2xhc3M9Im0iPui+k+WHuuS9jueUteW5s+acieaViDwvdGV4dD4KPC9zdmc+Cg==",
			"imageAlt": "三线八线译码器输入为 101"
		},
		{
			"id": "q33",
			"module": "M1",
			"type": "base",
			"difficulty": 1,
			"stem": "十进制 264 的 8 进制写法是 410，它换成 16 进制是多少？",
			"options": [
				"107",
				"109",
				"210",
				"108"
			],
			"answer": 3,
			"explain": "按权展开得十进制 264，再除基取余并逆序读取，得到 108。",
			"verify": {
				"args": [
					"base",
					"--from",
					"8",
					"--to",
					"16",
					"--value",
					"410"
				],
				"field": "result"
			}
		},
		{
			"id": "q34",
			"module": "M7",
			"type": "concept",
			"difficulty": 3,
			"stem": "ADC 的位数增加一位，分辨率和量化级差怎样变化？",
			"options": [
				"量化级差加倍，分辨率降低",
				"量化级差减半，分辨率提高一倍",
				"量化范围减半",
				"两者都不变"
			],
			"answer": 1,
			"explain": "位数加一位，台阶数翻倍，在相同满量程下每个台阶的高度减半。"
		},
		{
			"id": "q35",
			"module": "M1",
			"type": "code",
			"difficulty": 2,
			"stem": "8 位补码里，十进制 -117 的编码是哪一个？",
			"options": [
				"01110101",
				"11110101",
				"10001011",
				"10001100"
			],
			"answer": 2,
			"explain": "先写原码 11110101，数值位取反得反码 10001010，末位加一得补码 10001011。",
			"verify": {
				"args": [
					"code",
					"--bits",
					"8",
					"--value",
					"-117"
				],
				"field": "twosComplement"
			}
		},
		{
			"id": "q36",
			"module": "M4",
			"type": "concept",
			"difficulty": 2,
			"stem": "Moore 型状态机的输出取决于什么？",
			"options": [
				"同时取决于当前状态和当前输入",
				"只取决于当前输入",
				"只取决于当前状态",
				"取决于时钟频率"
			],
			"answer": 2,
			"explain": "Moore 的输出挂在状态上，Mealy 的输出还随输入变化。"
		},
		{
			"id": "q37",
			"module": "M1",
			"type": "gray",
			"difficulty": 2,
			"stem": "4 位二进制 1110 对应的格雷码是？",
			"options": [
				"1110",
				"1001",
				"1101",
				"1000"
			],
			"answer": 1,
			"explain": "格雷码最高位与二进制相同，其余每位等于本位与高位异或，得到 1001。",
			"verify": {
				"args": [
					"gray",
					"--bits",
					"4",
					"--value",
					"14"
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
				"Q=0",
				"状态不定",
				"Q=1",
				"保持原状态"
			],
			"answer": 0,
			"explain": "CP=1 期间 D 锁存器透明，Q 跟随 D，因此 Q=0。",
			"image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NjAgMjIwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IumXqOaOpyBEIOmUgeWtmOWZqOWcqCBDUCDkuLogMeOAgUQg5Li6IDAg5pe255qE5bel5L2c54q25oCBIj4KPHN0eWxlPgouc3tmaWxsOm5vbmU7c3Ryb2tlOiM1OGNjMDI7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kfQoudHtmaWxsOiNlNmU4ZWU7Zm9udC1mYW1pbHk6IlNlZ29lIFVJIiwiTWljcm9zb2Z0IFlhSGVpIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNHB4fQouYntmaWxsOiNlNmU4ZWU7Zm9udC1mYW1pbHk6IlNlZ29lIFVJIiwiTWljcm9zb2Z0IFlhSGVpIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjYwMH0KLm17ZmlsbDojOWFhMmIxO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTIuNXB4fQouZ3tmaWxsOm5vbmU7c3Ryb2tlOiMzYTQyNTA7c3Ryb2tlLXdpZHRoOjEuMn0KLmJveHtmaWxsOiMxYjIwMjk7c3Ryb2tlOiMzYTQyNTA7c3Ryb2tlLXdpZHRoOjEuNX0KLmhse2ZpbGw6bm9uZTtzdHJva2U6IzU4Y2MwMjtzdHJva2Utd2lkdGg6MjtzdHJva2UtZGFzaGFycmF5OjYgNH0KPC9zdHlsZT4KPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzE0MTgyMSIvPgo8dGV4dCB4PSIyNCIgeT0iMjgiIGNsYXNzPSJiIj7popjlm77vvJrpl6jmjqcgRCDplIHlrZjlmag8L3RleHQ+CjxyZWN0IHg9IjE1MCIgeT0iNjAiIHdpZHRoPSIxODAiIGhlaWdodD0iMTAwIiByeD0iNiIgY2xhc3M9ImJveCIvPjx0ZXh0IHg9IjI0MCIgeT0iMTEwIiBjbGFzcz0idCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RCDplIHlrZjlmag8L3RleHQ+Cjx0ZXh0IHg9Ijg0IiB5PSI5MCIgY2xhc3M9InQiPkQgPSAwPC90ZXh0PjxsaW5lIHgxPSIxMzIiIHkxPSI4NiIgeDI9IjE1MCIgeTI9Ijg2IiBjbGFzcz0icyIvPgo8dGV4dCB4PSIxODAiIHk9IjE5MCIgY2xhc3M9InQiPkNQID0gMTwvdGV4dD48bGluZSB4MT0iMjQwIiB5MT0iMTg2IiB4Mj0iMjQwIiB5Mj0iMTYwIiBjbGFzcz0icyIvPgo8bGluZSB4MT0iMzMwIiB5MT0iMTEwIiB4Mj0iMzkwIiB5Mj0iMTEwIiBjbGFzcz0icyIvPjx0ZXh0IHg9IjM5OCIgeT0iMTE0IiBjbGFzcz0idCI+UTwvdGV4dD4KPHRleHQgeD0iNDIwIiB5PSI5MCIgY2xhc3M9Im0iPkNQIOacieaViOacn+mXtOi+k+WHuui3n+majyBEPC90ZXh0Pgo8L3N2Zz4K",
			"imageAlt": "门控 D 锁存器在 CP 为 1、D 为 0 时的工作状态"
		},
		{
			"id": "q39",
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
			"id": "q40",
			"module": "M3",
			"type": "concept",
			"difficulty": 3,
			"stem": "组合逻辑中出现静态 1 型冒险，通常由什么形式引起？",
			"options": [
				"门电路的延迟完全相同",
				"输出端接了电容",
				"A + A' 这类形式，在 A 翻转瞬间出现窄脉冲",
				"两个输入同时为 0"
			],
			"answer": 2,
			"explain": "同一信号经不同路径到达，延迟不同，导致短暂输出错误；加冗余项可以消除。"
		},
		{
			"id": "q41",
			"module": "M1",
			"type": "hamming",
			"difficulty": 3,
			"stem": "对数据 0101 做偶校验的 (7,4) 海明编码，结果（第 1 到第 7 位）是？",
			"options": [
				"1100101",
				"0100101",
				"0100011",
				"0101101"
			],
			"answer": 1,
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
			"id": "q42",
			"module": "M4",
			"type": "concept",
			"difficulty": 2,
			"stem": "时序逻辑电路的输出取决于什么？",
			"options": [
				"只取决于时钟频率",
				"只取决于原来的状态",
				"当前输入和电路原来的状态",
				"只取决于当前输入"
			],
			"answer": 2,
			"explain": "时序逻辑有记忆，输出由输入与现态共同决定，这也是它有别于组合逻辑的地方。"
		},
		{
			"id": "q43",
			"module": "M1",
			"type": "hamming",
			"difficulty": 3,
			"stem": "接收到的 7 位海明码是 0100111（偶校验，(7,4) 码），按综合症判断，第几位出错？",
			"options": [
				"1",
				"2",
				"7",
				"6"
			],
			"answer": 3,
			"explain": "对 p1、p2、p4 三组分别求偶校验，综合症 S4S2S1 的十进制值就是出错位号 6；把该位取反即可纠正。",
			"verify": {
				"args": [
					"hamming",
					"--check",
					"0100111"
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
				"0011",
				"0101",
				"1010"
			],
			"answer": 2,
			"explain": "右移时每位送到低位，最高位接收串行输入 0，得到 0101。",
			"image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NjAgMjIwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IuWbm+S9jeWPs+enu+WvhOWtmOWZqOWIneaAgSAxMDEx77yM5Liy6KGM6L6T5YWlIDAiPgo8c3R5bGU+Ci5ze2ZpbGw6bm9uZTtzdHJva2U6IzU4Y2MwMjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmR9Ci50e2ZpbGw6I2U2ZThlZTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHh9Ci5ie2ZpbGw6I2U2ZThlZTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NjAwfQoubXtmaWxsOiM5YWEyYjE7Zm9udC1mYW1pbHk6IlNlZ29lIFVJIiwiTWljcm9zb2Z0IFlhSGVpIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMi41cHh9Ci5ne2ZpbGw6bm9uZTtzdHJva2U6IzNhNDI1MDtzdHJva2Utd2lkdGg6MS4yfQouYm94e2ZpbGw6IzFiMjAyOTtzdHJva2U6IzNhNDI1MDtzdHJva2Utd2lkdGg6MS41fQouaGx7ZmlsbDpub25lO3N0cm9rZTojNThjYzAyO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1kYXNoYXJyYXk6NiA0fQo8L3N0eWxlPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMTQxODIxIi8+Cjx0ZXh0IHg9IjI0IiB5PSIyOCIgY2xhc3M9ImIiPumimOWbvu+8muWPs+enu+WvhOWtmOWZqDwvdGV4dD4KPHJlY3QgeD0iOTAiIHk9IjcwIiB3aWR0aD0iNzAiIGhlaWdodD0iNTUiIHJ4PSI2IiBjbGFzcz0iYm94Ii8+PHRleHQgeD0iMTI1IiB5PSIxMDMiIGNsYXNzPSJtIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5RMzwvdGV4dD48cmVjdCB4PSIxOTAiIHk9IjcwIiB3aWR0aD0iNzAiIGhlaWdodD0iNTUiIHJ4PSI2IiBjbGFzcz0iYm94Ii8+PHRleHQgeD0iMjI1IiB5PSIxMDMiIGNsYXNzPSJtIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5RMjwvdGV4dD48cmVjdCB4PSIyOTAiIHk9IjcwIiB3aWR0aD0iNzAiIGhlaWdodD0iNTUiIHJ4PSI2IiBjbGFzcz0iYm94Ii8+PHRleHQgeD0iMzI1IiB5PSIxMDMiIGNsYXNzPSJtIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5RMTwvdGV4dD48cmVjdCB4PSIzOTAiIHk9IjcwIiB3aWR0aD0iNzAiIGhlaWdodD0iNTUiIHJ4PSI2IiBjbGFzcz0iYm94Ii8+PHRleHQgeD0iNDI1IiB5PSIxMDMiIGNsYXNzPSJtIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5RMDwvdGV4dD4KPHRleHQgeD0iMTI1IiB5PSIxNTUiIGNsYXNzPSJiIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xPC90ZXh0Pjx0ZXh0IHg9IjIyNSIgeT0iMTU1IiBjbGFzcz0iYiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MDwvdGV4dD48dGV4dCB4PSIzMjUiIHk9IjE1NSIgY2xhc3M9ImIiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjE8L3RleHQ+PHRleHQgeD0iNDI1IiB5PSIxNTUiIGNsYXNzPSJiIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xPC90ZXh0Pgo8dGV4dCB4PSIzMCIgeT0iMTAzIiBjbGFzcz0idCI+MDwvdGV4dD48bGluZSB4MT0iNDgiIHkxPSI5OCIgeDI9IjkwIiB5Mj0iOTgiIGNsYXNzPSJzIi8+CjxsaW5lIHgxPSIxNjAiIHkxPSI5OCIgeDI9IjE5MCIgeTI9Ijk4IiBjbGFzcz0icyIvPjxwYXRoIGQ9Ik0xOTAgOTggbC02IC0zIHY2IHoiIGZpbGw9IiM1OGNjMDIiLz48bGluZSB4MT0iMjYwIiB5MT0iOTgiIHgyPSIyOTAiIHkyPSI5OCIgY2xhc3M9InMiLz48cGF0aCBkPSJNMjkwIDk4IGwtNiAtMyB2NiB6IiBmaWxsPSIjNThjYzAyIi8+PGxpbmUgeDE9IjM2MCIgeTE9Ijk4IiB4Mj0iMzkwIiB5Mj0iOTgiIGNsYXNzPSJzIi8+PHBhdGggZD0iTTM5MCA5OCBsLTYgLTMgdjYgeiIgZmlsbD0iIzU4Y2MwMiIvPgo8dGV4dCB4PSIzMCIgeT0iMTk2IiBjbGFzcz0ibSI+5pe26ZKf5Yiw5p2l5ZCO5ZCE5L2N5aaC5L2V5Y+Y5YyW77yfPC90ZXh0Pgo8L3N2Zz4K",
			"imageAlt": "四位右移寄存器初态 1011，串行输入 0"
		},
		{
			"id": "q45",
			"module": "M2",
			"type": "minterms",
			"difficulty": 2,
			"stem": "函数在 000、001、011、100、101 这几组输入下取值为 1（变量顺序 A B C），它的最小项之和怎么写？",
			"options": [
				"Σm(0, 1, 3, 4)",
				"Σm(0, 1, 3, 4, 5)",
				"Σm(2, 6, 7)",
				"Σm(0, 1, 2, 3, 4, 5)"
			],
			"answer": 1,
			"explain": "把每组取值为 1 的输入按 A B C 的二进制读出编号，就是 Σm(0, 1, 3, 4, 5)。"
		},
		{
			"id": "q46",
			"module": "M1",
			"type": "concept",
			"difficulty": 2,
			"stem": "八进制数 573.7 的十六进制写法是？",
			"options": [
				"(17C.7)₁₆",
				"(17B.E)₁₆",
				"(17B.7)₁₆",
				"(17C.E)₁₆"
			],
			"answer": 1,
			"explain": "先化成十进制 379.875，整数部分 379=0x17B，小数 0.875=0xE。"
		},
		{
			"id": "q47",
			"module": "M2",
			"type": "kmap",
			"difficulty": 3,
			"stem": "三变量函数 F = Σm(0, 1, 2, 4, 7)，在卡诺图上化简后的最简与或式是？",
			"options": [
				"~A·~B + ~A·~C + ~B·~C + A·B·C",
				"A·~B + ~A·~C + ~B·~C + A·B·C",
				"A·B·C·~B·~C·~A·~C·~A·~B",
				"~A·~B + ~A·~C + ~B·~C + A·B·C + A·B·C"
			],
			"answer": 0,
			"explain": "合并相邻的 1，可得到质蕴含项 A·B·C、~A·~B、~A·~C、~B·~C，最简式取 ~A·~B + ~A·~C + ~B·~C + A·B·C。"
		},
		{
			"id": "q48",
			"module": "M2",
			"type": "concept",
			"difficulty": 2,
			"stem": "卡诺图中四个相邻的 1 圈在一起，能消去几个变量？",
			"options": [
				"4 个",
				"3 个",
				"2 个",
				"1 个"
			],
			"answer": 2,
			"explain": "2 个相邻消 1 个变量，4 个消 2 个，8 个消 3 个。"
		},
		{
			"id": "q49",
			"module": "M1",
			"type": "base",
			"difficulty": 1,
			"stem": "十进制 221 的 8 进制写法是 335，它换成 16 进制是多少？",
			"options": [
				"DC",
				"DD",
				"DE",
				"1BA"
			],
			"answer": 1,
			"explain": "按权展开得十进制 221，再除基取余并逆序读取，得到 DD。",
			"verify": {
				"args": [
					"base",
					"--from",
					"8",
					"--to",
					"16",
					"--value",
					"335"
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
			"stem": "8 位补码里，十进制 -60 的编码是哪一个？",
			"options": [
				"11000101",
				"00111100",
				"10111100",
				"11000100"
			],
			"answer": 3,
			"explain": "先写原码 10111100，数值位取反得反码 11000011，末位加一得补码 11000100。",
			"verify": {
				"args": [
					"code",
					"--bits",
					"8",
					"--value",
					"-60"
				],
				"field": "twosComplement"
			}
		},
		{
			"id": "q52",
			"module": "M8",
			"type": "concept",
			"difficulty": 2,
			"stem": "Verilog 中 assign 与 always 的主要区别是？",
			"options": [
				"assign 只能描述时序逻辑",
				"always 不能描述组合逻辑",
				"两者完全等价",
				"assign 用于连续赋值，always 用于过程块"
			],
			"answer": 3,
			"explain": "assign 描述持续生效的组合连接，always 块按敏感列表触发，可描述组合逻辑或时序逻辑。"
		},
		{
			"id": "q53",
			"module": "M1",
			"type": "gray",
			"difficulty": 2,
			"stem": "4 位二进制 1010 对应的格雷码是？",
			"options": [
				"1110",
				"1000",
				"1010",
				"1111"
			],
			"answer": 3,
			"explain": "格雷码最高位与二进制相同，其余每位等于本位与高位异或，得到 1111。",
			"verify": {
				"args": [
					"gray",
					"--bits",
					"4",
					"--value",
					"10"
				],
				"field": "gray"
			}
		},
		{
			"id": "q54",
			"module": "M8",
			"type": "concept",
			"difficulty": 3,
			"stem": "Verilog 的 assign 语句描述的是什么？",
			"options": [
				"模块端口声明",
				"初始化赋值，只执行一次",
				"组合逻辑，输出随输入连续变化",
				"时序逻辑，每个时钟沿更新"
			],
			"answer": 2,
			"explain": "assign 是连续赋值，等价于一根线加一个门，没有时钟概念。"
		},
		{
			"id": "q55",
			"module": "M1",
			"type": "bcd",
			"difficulty": 3,
			"stem": "十进制数字 6 的 2421 码是哪一组 4 位编码？",
			"options": [
				"1100",
				"0011",
				"0110",
				"1001"
			],
			"answer": 0,
			"explain": "2421 码按权重 2、4、2、1 相加：6 对应 1100。8421 码则是 0110。"
		},
		{
			"id": "q56",
			"module": "M7",
			"type": "figure",
			"difficulty": 3,
			"stem": "图示 4 位 R-2R DAC 输入为 1000，满量程对应 Vref，输出 Vo 约为？",
			"options": [
				"Vref / 2",
				"3Vref / 4",
				"Vref / 4",
				"Vref"
			],
			"answer": 0,
			"explain": "4 位共 16 个台阶，1000 对应 8 个台阶，因此 Vo 为满量程的一半。",
			"image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NjAgMjM1IiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IuWbm+S9jSBSLTJSIOaVsOaooei9rOaNouWZqOi+k+WFpeS4uiAxMDAwIj4KPHN0eWxlPgouc3tmaWxsOm5vbmU7c3Ryb2tlOiM1OGNjMDI7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kfQoudHtmaWxsOiNlNmU4ZWU7Zm9udC1mYW1pbHk6IlNlZ29lIFVJIiwiTWljcm9zb2Z0IFlhSGVpIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNHB4fQouYntmaWxsOiNlNmU4ZWU7Zm9udC1mYW1pbHk6IlNlZ29lIFVJIiwiTWljcm9zb2Z0IFlhSGVpIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjYwMH0KLm17ZmlsbDojOWFhMmIxO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTIuNXB4fQouZ3tmaWxsOm5vbmU7c3Ryb2tlOiMzYTQyNTA7c3Ryb2tlLXdpZHRoOjEuMn0KLmJveHtmaWxsOiMxYjIwMjk7c3Ryb2tlOiMzYTQyNTA7c3Ryb2tlLXdpZHRoOjEuNX0KPC9zdHlsZT4KPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzE0MTgyMSIvPgo8dGV4dCB4PSIyNCIgeT0iMjgiIGNsYXNzPSJiIj7popjlm77vvJpSLTJSIERBQzwvdGV4dD4KPHRleHQgeD0iNDAiIHk9IjgwIiBjbGFzcz0idCI+YjM9MTwvdGV4dD48dGV4dCB4PSI0MCIgeT0iMTE0IiBjbGFzcz0idCI+YjI9MDwvdGV4dD48dGV4dCB4PSI0MCIgeT0iMTQ4IiBjbGFzcz0idCI+YjE9MDwvdGV4dD48dGV4dCB4PSI0MCIgeT0iMTgyIiBjbGFzcz0idCI+YjA9MDwvdGV4dD4KPHJlY3QgeD0iMTIwIiB5PSI1NSIgd2lkdGg9IjEzMCIgaGVpZ2h0PSIxNDUiIHJ4PSI2IiBjbGFzcz0iYm94Ii8+PHRleHQgeD0iMTg1IiB5PSIxMjUiIGNsYXNzPSJ0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5SLTJSIOe9kee7nDwvdGV4dD4KPGxpbmUgeDE9IjkwIiB5MT0iNzYiIHgyPSIxMjAiIHkyPSI3NiIgY2xhc3M9InMiLz48bGluZSB4MT0iOTAiIHkxPSIxMTAiIHgyPSIxMjAiIHkyPSIxMTAiIGNsYXNzPSJzIi8+PGxpbmUgeDE9IjkwIiB5MT0iMTQ0IiB4Mj0iMTIwIiB5Mj0iMTQ0IiBjbGFzcz0icyIvPjxsaW5lIHgxPSI5MCIgeTE9IjE3OCIgeDI9IjEyMCIgeTI9IjE3OCIgY2xhc3M9InMiLz4KPGxpbmUgeDE9IjI1MCIgeTE9IjEyNSIgeDI9IjMyMCIgeTI9IjEyNSIgY2xhc3M9InMiLz48cGF0aCBkPSJNMzIwIDk1IGw1MCAzMCBsLTUwIDMwIHoiIGNsYXNzPSJib3giLz4KPGxpbmUgeDE9IjM3MCIgeTE9IjEyNSIgeDI9IjQxMCIgeTI9IjEyNSIgY2xhc3M9InMiLz48dGV4dCB4PSI0MTgiIHk9IjEyOSIgY2xhc3M9InQiPlZvPC90ZXh0Pgo8dGV4dCB4PSI5MCIgeT0iMjE4IiBjbGFzcz0ibSI+5ruh6YeP56iL5a+55bqUIFZyZWY8L3RleHQ+Cjwvc3ZnPgo=",
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
			"module": "M4",
			"type": "concept",
			"difficulty": 3,
			"stem": "主从 JK 触发器在 CP=1 期间输出会怎样？",
			"options": [
				"随 J、K 立即变化",
				"保持不变，到 CP 下降沿才更新",
				"进入不定状态",
				"每半个周期翻转一次"
			],
			"answer": 1,
			"explain": "CP=1 时主触发器接收、从触发器封锁；下降沿从触发器才接收主触发器的结果。"
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
			"module": "M8",
			"type": "concept",
			"difficulty": 2,
			"stem": "非阻塞赋值最适合描述哪类电路？",
			"options": [
				"组合逻辑的即时计算",
				"时序逻辑中边沿触发的行为",
				"常量定义",
				"模块端口连接"
			],
			"answer": 1,
			"explain": "非阻塞赋值在时间步结束时统一更新，能正确表达多个触发器同时动作的效果。"
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
			"image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NjAgMjMwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IuS4ieS9jemAkOasoemAvOi/kSBBREPvvIzlj4LogIPnlLXljosgNSDkvI/vvIzovpPlhaUgMy4yIOS8jyI+CjxzdHlsZT4KLnN7ZmlsbDpub25lO3N0cm9rZTojNThjYzAyO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZH0KLnR7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweH0KLmJ7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo2MDB9Ci5te2ZpbGw6IzlhYTJiMTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEyLjVweH0KLmd7ZmlsbDpub25lO3N0cm9rZTojM2E0MjUwO3N0cm9rZS13aWR0aDoxLjJ9Ci5ib3h7ZmlsbDojMWIyMDI5O3N0cm9rZTojM2E0MjUwO3N0cm9rZS13aWR0aDoxLjV9Cjwvc3R5bGU+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxNDE4MjEiLz4KPHRleHQgeD0iMjQiIHk9IjI4IiBjbGFzcz0iYiI+6aKY5Zu+77yaMyDkvY0gU0FSIEFEQzwvdGV4dD4KPHJlY3QgeD0iNTAiIHk9IjcwIiB3aWR0aD0iMTEwIiBoZWlnaHQ9IjYwIiByeD0iNiIgY2xhc3M9ImJveCIvPjx0ZXh0IHg9IjEwNSIgeT0iMTA0IiBjbGFzcz0idCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+VmluID0gMy4yIFY8L3RleHQ+CjxyZWN0IHg9IjIxMCIgeT0iNzAiIHdpZHRoPSIxMDAiIGhlaWdodD0iNjAiIHJ4PSI2IiBjbGFzcz0iYm94Ii8+PHRleHQgeD0iMjYwIiB5PSIxMDQiIGNsYXNzPSJ0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7mr5TovoPlmag8L3RleHQ+CjxsaW5lIHgxPSIxNjAiIHkxPSIxMDAiIHgyPSIyMTAiIHkyPSIxMDAiIGNsYXNzPSJzIi8+CjxsaW5lIHgxPSIzMTAiIHkxPSIxMDAiIHgyPSIzNzAiIHkyPSIxMDAiIGNsYXNzPSJzIi8+PHRleHQgeD0iMzc4IiB5PSIxMDQiIGNsYXNzPSJ0Ij4zIOS9jei+k+WHujwvdGV4dD4KPHJlY3QgeD0iMjEwIiB5PSIxNjUiIHdpZHRoPSIxMDAiIGhlaWdodD0iNTAiIHJ4PSI2IiBjbGFzcz0iYm94Ii8+PHRleHQgeD0iMjYwIiB5PSIxOTQiIGNsYXNzPSJ0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5EQUM8L3RleHQ+PGxpbmUgeDE9IjI2MCIgeTE9IjE2NSIgeDI9IjI2MCIgeTI9IjEzMCIgY2xhc3M9InMiLz4KPHRleHQgeD0iMzMwIiB5PSIxOTQiIGNsYXNzPSJtIj5WcmVmID0gNSBWPC90ZXh0Pgo8dGV4dCB4PSI1MCIgeT0iMTUyIiBjbGFzcz0ibSI+6YeP5YyW57qn5beuID0gVnJlZiAvIDggPSAwLjYyNSBWPC90ZXh0Pgo8L3N2Zz4K",
			"imageAlt": "三位逐次逼近 ADC，参考电压 5 伏，输入 3.2 伏"
		},
		{
			"id": "q63",
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
			"id": "q64",
			"module": "M1",
			"type": "concept",
			"difficulty": 1,
			"stem": "8 位补码 11111111 表示十进制几？",
			"options": [
				"−127",
				"−0",
				"255",
				"−1"
			],
			"answer": 3,
			"explain": "补码全 1 按位取反加一得 1，符号为负，所以是 −1。"
		},
		{
			"id": "q65",
			"module": "M1",
			"type": "base",
			"difficulty": 1,
			"stem": "十进制 354 的 16 进制写法是 162，它换成 10 进制是多少？",
			"options": [
				"355",
				"354",
				"453",
				"708"
			],
			"answer": 1,
			"explain": "按权展开得十进制 354，再除基取余并逆序读取，得到 354。",
			"verify": {
				"args": [
					"base",
					"--from",
					"16",
					"--to",
					"10",
					"--value",
					"162"
				],
				"field": "result"
			}
		},
		{
			"id": "q66",
			"module": "M7",
			"type": "concept",
			"difficulty": 2,
			"stem": "数据通路主要完成什么任务？",
			"options": [
				"在各部件之间传送数据并完成运算",
				"存储微程序",
				"对指令地址进行译码",
				"产生全部控制信号"
			],
			"answer": 0,
			"explain": "数据通路管数据怎么走、在哪算；控制信号由控制器给出。"
		},
		{
			"id": "q67",
			"module": "M1",
			"type": "code",
			"difficulty": 2,
			"stem": "8 位补码里，十进制 -50 的编码是哪一个？",
			"options": [
				"10110010",
				"11001110",
				"00110010",
				"11001101"
			],
			"answer": 1,
			"explain": "先写原码 10110010，数值位取反得反码 11001101，末位加一得补码 11001110。",
			"verify": {
				"args": [
					"code",
					"--bits",
					"8",
					"--value",
					"-50"
				],
				"field": "twosComplement"
			}
		},
		{
			"id": "q68",
			"module": "M1",
			"type": "figure",
			"difficulty": 2,
			"stem": "图示矩形脉冲的脉宽为 2 ms、周期为 8 ms，它的占空比是？",
			"options": [
				"40%",
				"25%",
				"20%",
				"12.5%"
			],
			"answer": 1,
			"explain": "占空比 = t_w / T = 2 / 8 = 25%，即高电平占整个周期的四分之一。",
			"image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMzMwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IuWRqOacn+S4uiA4IOavq+enkuOAgeiEieWuveS4uiAyIOavq+enkueahOefqeW9ouiEieWGsiI+CjxzdHlsZT4KLnN7ZmlsbDpub25lO3N0cm9rZTojNThjYzAyO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZH0KLmR7ZmlsbDpub25lO3N0cm9rZTojM2E0MjUwO3N0cm9rZS13aWR0aDoxLjI7c3Ryb2tlLWRhc2hhcnJheTo1IDR9Ci50e2ZpbGw6I2U2ZThlZTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHh9Ci5ie2ZpbGw6I2U2ZThlZTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NjAwfQoubXtmaWxsOiM5YWEyYjE7Zm9udC1mYW1pbHk6IlNlZ29lIFVJIiwiTWljcm9zb2Z0IFlhSGVpIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMi41cHh9Cjwvc3R5bGU+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxNDE4MjEiLz4KPHRleHQgeD0iMjQiIHk9IjI4IiBjbGFzcz0iYiI+6aKY5Zu+77ya55+p5b2i6ISJ5YayPC90ZXh0Pgo8dGV4dCB4PSIyNCIgeT0iOTYiIGNsYXNzPSJtIj7pq5g8L3RleHQ+Cjx0ZXh0IHg9IjI0IiB5PSIyMDQiIGNsYXNzPSJtIj7kvY48L3RleHQ+CjxsaW5lIHgxPSI4MCIgeTE9IjIwMCIgeDI9IjgwIiB5Mj0iMTAwIiBjbGFzcz0icyIvPgo8bGluZSB4MT0iODAiIHkxPSIxMDAiIHgyPSIxMzAiIHkyPSIxMDAiIGNsYXNzPSJzIi8+CjxsaW5lIHgxPSIxMzAiIHkxPSIxMDAiIHgyPSIxMzAiIHkyPSIyMDAiIGNsYXNzPSJzIi8+CjxsaW5lIHgxPSIxMzAiIHkxPSIyMDAiIHgyPSIyODAiIHkyPSIyMDAiIGNsYXNzPSJzIi8+CjxsaW5lIHgxPSIyODAiIHkxPSIyMDAiIHgyPSIyODAiIHkyPSIxMDAiIGNsYXNzPSJzIi8+CjxsaW5lIHgxPSIyODAiIHkxPSIxMDAiIHgyPSIzMzAiIHkyPSIxMDAiIGNsYXNzPSJzIi8+CjxsaW5lIHgxPSIzMzAiIHkxPSIxMDAiIHgyPSIzMzAiIHkyPSIyMDAiIGNsYXNzPSJzIi8+CjxsaW5lIHgxPSIzMzAiIHkxPSIyMDAiIHgyPSI0ODAiIHkyPSIyMDAiIGNsYXNzPSJzIi8+CjxsaW5lIHgxPSI4MCIgeTE9IjIyMiIgeDI9IjEzMCIgeTI9IjIyMiIgY2xhc3M9ImQiLz4KPGxpbmUgeDE9IjgwIiB5MT0iMjE2IiB4Mj0iODAiIHkyPSIyMjgiIGNsYXNzPSJkIi8+CjxsaW5lIHgxPSIxMzAiIHkxPSIyMTYiIHgyPSIxMzAiIHkyPSIyMjgiIGNsYXNzPSJkIi8+Cjx0ZXh0IHg9IjEwNSIgeT0iMjQ0IiBjbGFzcz0ibSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+dF93ID0gMiBtczwvdGV4dD4KPGxpbmUgeDE9IjgwIiB5MT0iMjcyIiB4Mj0iMjgwIiB5Mj0iMjcyIiBjbGFzcz0iZCIvPgo8bGluZSB4MT0iODAiIHkxPSIyNjYiIHgyPSI4MCIgeTI9IjI3OCIgY2xhc3M9ImQiLz4KPGxpbmUgeDE9IjI4MCIgeTE9IjI2NiIgeDI9IjI4MCIgeTI9IjI3OCIgY2xhc3M9ImQiLz4KPHRleHQgeD0iMTgwIiB5PSIyOTQiIGNsYXNzPSJtIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5UID0gOCBtczwvdGV4dD4KPC9zdmc+Cg==",
			"imageAlt": "脉宽 2 毫秒、周期 8 毫秒的矩形脉冲"
		},
		{
			"id": "q69",
			"module": "M1",
			"type": "gray",
			"difficulty": 2,
			"stem": "4 位二进制 1001 对应的格雷码是？",
			"options": [
				"1001",
				"1101",
				"1111",
				"1011"
			],
			"answer": 1,
			"explain": "格雷码最高位与二进制相同，其余每位等于本位与高位异或，得到 1101。",
			"verify": {
				"args": [
					"gray",
					"--bits",
					"4",
					"--value",
					"9"
				],
				"field": "gray"
			}
		},
		{
			"id": "q70",
			"module": "M5",
			"type": "concept",
			"difficulty": 2,
			"stem": "DRAM 需要定期刷新的原因是？",
			"options": [
				"存储容量太小",
				"掉电后数据会丢失",
				"靠电容存电荷，电荷会泄漏",
				"读写速度太快"
			],
			"answer": 2,
			"explain": "DRAM 单元是一个电容加一个管子，电荷会漏掉，所以必须周期性刷新。"
		},
		{
			"id": "q71",
			"module": "M1",
			"type": "bcd",
			"difficulty": 3,
			"stem": "十进制数字 8 的 2421 码是哪一组 4 位编码？",
			"options": [
				"1110",
				"1011",
				"1000",
				"0001"
			],
			"answer": 0,
			"explain": "2421 码按权重 2、4、2、1 相加：8 对应 1110。8421 码则是 1000。"
		},
		{
			"id": "q72",
			"module": "M5",
			"type": "concept",
			"difficulty": 2,
			"stem": "SRAM 的存储单元本质上是什么？",
			"options": [
				"一个电容",
				"一根熔丝",
				"双稳态触发器",
				"一个浮栅管"
			],
			"answer": 2,
			"explain": "SRAM 用六个管子构成双稳态，只要供电就保持，不需要刷新。"
		},
		{
			"id": "q73",
			"module": "M1",
			"type": "hamming",
			"difficulty": 3,
			"stem": "对数据 0010 做偶校验的 (7,4) 海明编码，结果（第 1 到第 7 位）是？",
			"options": [
				"0100010",
				"0101010",
				"0101100",
				"1101010"
			],
			"answer": 1,
			"explain": "p1=⊕(3,5,7)=0，p2=⊕(3,6,7)=1，p4=⊕(5,6,7)=1，按 p1 p2 d1 p4 d2 d3 d4 排列得 0101010。",
			"verify": {
				"args": [
					"hamming",
					"--data",
					"0010"
				],
				"field": "code"
			}
		},
		{
			"id": "q74",
			"module": "M3",
			"type": "figure",
			"difficulty": 2,
			"stem": "图示七段数码管各段的亮灭状态，显示的数字是？",
			"options": [
				"9",
				"8",
				"5",
				"6"
			],
			"answer": 3,
			"explain": "6 点亮 a、c、d、e、f、g 六段，右上方的 b 段熄灭；5 会点亮 a、c、d、f、g，e 段不亮。",
			"image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNjAgMzQwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IuS4g+auteaVsOeggeeuoeaYvuekuuaVsOWtlyA2Ij4KPHN0eWxlPgoudHtmaWxsOiM5YWEyYjE7Zm9udC1mYW1pbHk6IlNlZ29lIFVJIiwiTWljcm9zb2Z0IFlhSGVpIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxM3B4fQo8L3N0eWxlPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMTQxODIxIi8+CjxyZWN0IHg9IjMwIiB5PSI1MCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyNDAiIHJ4PSIxNiIgZmlsbD0iIzFiMjAyOSIgc3Ryb2tlPSIjM2E0MjUwIiBzdHJva2Utd2lkdGg9IjEuNSIvPgo8cmVjdCB4PSI2NiIgeT0iNjQiIHdpZHRoPSIxMjgiIGhlaWdodD0iMTIiIHJ4PSI0IiBmaWxsPSIjNThjYzAyIi8+CjxyZWN0IHg9IjE5NCIgeT0iNzgiIHdpZHRoPSIxMiIgaGVpZ2h0PSI4NCIgcng9IjQiIGZpbGw9IiMyYzMxM2IiLz4KPHJlY3QgeD0iMTk0IiB5PSIxNzgiIHdpZHRoPSIxMiIgaGVpZ2h0PSI4NCIgcng9IjQiIGZpbGw9IiM1OGNjMDIiLz4KPHJlY3QgeD0iNjYiIHk9IjI2MiIgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMiIgcng9IjQiIGZpbGw9IiM1OGNjMDIiLz4KPHJlY3QgeD0iNTQiIHk9IjE3OCIgd2lkdGg9IjEyIiBoZWlnaHQ9Ijg0IiByeD0iNCIgZmlsbD0iIzU4Y2MwMiIvPgo8cmVjdCB4PSI1NCIgeT0iNzgiIHdpZHRoPSIxMiIgaGVpZ2h0PSI4NCIgcng9IjQiIGZpbGw9IiM1OGNjMDIiLz4KPHJlY3QgeD0iNjYiIHk9IjE3MCIgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMiIgcng9IjQiIGZpbGw9IiM1OGNjMDIiLz4KPC9zdmc+Cg==",
			"imageAlt": "七段数码管显示数字 6 的段码"
		},
		{
			"id": "q75",
			"module": "M1",
			"type": "hamming",
			"difficulty": 3,
			"stem": "接收到的 7 位海明码是 0100110（偶校验，(7,4) 码），按综合症判断，第几位出错？",
			"options": [
				"7",
				"5",
				"1",
				"2"
			],
			"answer": 2,
			"explain": "对 p1、p2、p4 三组分别求偶校验，综合症 S4S2S1 的十进制值就是出错位号 1；把该位取反即可纠正。",
			"verify": {
				"args": [
					"hamming",
					"--check",
					"0100110"
				],
				"field": "position"
			}
		},
		{
			"id": "q76",
			"module": "M7",
			"type": "concept",
			"difficulty": 3,
			"stem": "ASM 图中的状态框表示什么？",
			"options": [
				"一个输入变量",
				"一个时钟周期内保持的状态及该状态的输出",
				"一个组合逻辑门",
				"一条微指令"
			],
			"answer": 1,
			"explain": "状态框对应现态，框内写输出；框之间用判断框按条件分支。"
		},
		{
			"id": "q77",
			"module": "M2",
			"type": "minterms",
			"difficulty": 2,
			"stem": "函数在 010、011、100、101、110 这几组输入下取值为 1（变量顺序 A B C），它的最小项之和怎么写？",
			"options": [
				"Σm(2, 3, 4, 5)",
				"Σm(2, 3, 4, 5, 6)",
				"Σm(0, 2, 3, 4, 5, 6)",
				"Σm(0, 1, 7)"
			],
			"answer": 1,
			"explain": "把每组取值为 1 的输入按 A B C 的二进制读出编号，就是 Σm(2, 3, 4, 5, 6)。"
		},
		{
			"id": "q78",
			"module": "M8",
			"type": "concept",
			"difficulty": 2,
			"stem": "描述组合逻辑的 always 块里应使用哪种赋值？",
			"options": [
				"只能用 assign",
				"两种混用",
				"非阻塞赋值 <=",
				"阻塞赋值 ="
			],
			"answer": 3,
			"explain": "组合逻辑要求按书写顺序立即得到结果，阻塞赋值符合这一语义。"
		},
		{
			"id": "q79",
			"module": "M2",
			"type": "kmap",
			"difficulty": 3,
			"stem": "三变量函数 F = Σm(1, 2, 4, 7)，在卡诺图上化简后的最简与或式是？",
			"options": [
				"A·~B·C + ~A·B·~C + A·~B·~C + A·B·C",
				"~A·~B·C + ~A·B·~C + A·~B·~C + A·B·C",
				"~A·~B·C + ~A·B·~C + A·~B·~C + A·B·C + ~A·~B·C",
				"A·B·C·A·~B·~C·~A·B·~C·~A·~B·C"
			],
			"answer": 1,
			"explain": "合并相邻的 1，可得到质蕴含项 ~A·~B·C、~A·B·~C、A·~B·~C、A·B·C，最简式取 ~A·~B·C + ~A·B·~C + A·~B·~C + A·B·C。"
		},
		{
			"id": "q80",
			"module": "M5",
			"type": "concept",
			"difficulty": 2,
			"stem": "用 1K×4 的芯片组成 1K×8 的存储器，需要几片？",
			"options": [
				"1 片",
				"4 片",
				"2 片",
				"8 片"
			],
			"answer": 2,
			"explain": "字数不变、位宽翻倍，属于位扩展，两片并排共用地址即可。"
		}
	]
};

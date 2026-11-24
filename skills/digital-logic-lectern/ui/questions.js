// 由 scripts/dlquiz.js 生成，种子 20261125，共 40 题。不要手改。
window.DL_QUIZ = {
	"seed": 20261125,
	"generatedAt": "2026-11-24T16:11:27.938Z",
	"checked": 12,
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
			"module": "M3",
			"type": "concept",
			"difficulty": 3,
			"stem": "组合逻辑中出现静态 1 型冒险，通常由什么形式引起？",
			"options": [
				"门电路的延迟完全相同",
				"A + A' 这类形式，在 A 翻转瞬间出现窄脉冲",
				"输出端接了电容",
				"两个输入同时为 0"
			],
			"answer": 1,
			"explain": "同一信号经不同路径到达，延迟不同，导致短暂输出错误；加冗余项可以消除。"
		},
		{
			"id": "q3",
			"module": "M1",
			"type": "code",
			"difficulty": 2,
			"stem": "8 位补码里，十进制 -8 的编码是哪一个？",
			"options": [
				"00001000",
				"10001000",
				"11111000",
				"11110111"
			],
			"answer": 2,
			"explain": "先写原码 10001000，数值位取反得反码 11110111，末位加一得补码 11111000。",
			"verify": {
				"args": [
					"code",
					"--bits",
					"8",
					"--value",
					"-8"
				],
				"field": "twosComplement"
			}
		},
		{
			"id": "q4",
			"module": "M8",
			"type": "concept",
			"difficulty": 2,
			"stem": "initial 块通常用于什么场合？",
			"options": [
				"仿真激励，一般不用于可综合设计",
				"替代 always 块",
				"描述上电复位电路",
				"描述组合逻辑"
			],
			"answer": 0,
			"explain": "initial 只在 0 时刻执行一次，多数综合工具不接受它作为硬件描述。"
		},
		{
			"id": "q5",
			"module": "M1",
			"type": "gray",
			"difficulty": 2,
			"stem": "4 位二进制 1101 对应的格雷码是？",
			"options": [
				"1110",
				"1101",
				"1011",
				"1001"
			],
			"answer": 2,
			"explain": "格雷码最高位与二进制相同，其余每位等于本位与高位异或，得到 1011。",
			"verify": {
				"args": [
					"gray",
					"--bits",
					"4",
					"--value",
					"13"
				],
				"field": "gray"
			}
		},
		{
			"id": "q6",
			"module": "M4",
			"type": "concept",
			"difficulty": 2,
			"stem": "锁存器和触发器最本质的区别是什么？",
			"options": [
				"触发器不需要时钟",
				"锁存器电平触发，触发器边沿触发",
				"锁存器是组合逻辑",
				"锁存器只能存 1 位，触发器能存多位"
			],
			"answer": 1,
			"explain": "关键在触发方式：使能期间透明的叫锁存器，只在跳变沿采样的叫触发器。"
		},
		{
			"id": "q7",
			"module": "M1",
			"type": "bcd",
			"difficulty": 3,
			"stem": "十进制数字 7 的 2421 码是哪一组 4 位编码？",
			"options": [
				"1010",
				"0010",
				"0111",
				"1101"
			],
			"answer": 3,
			"explain": "2421 码按权重 2、4、2、1 相加：7 对应 1101。8421 码则是 0111。"
		},
		{
			"id": "q8",
			"module": "M3",
			"type": "concept",
			"difficulty": 3,
			"stem": "用 8 选 1 数据选择器实现三变量函数，变量应该怎么接？",
			"options": [
				"三个变量都接地址端，八个数据端接 0 或 1",
				"最高位接地址端，其余接数据端",
				"三个变量都接数据端",
				"变量接使能端"
			],
			"answer": 0,
			"explain": "8 选 1 有 3 根地址线，正好对应三个变量；把真值表的 8 个输出值接到数据端即可。"
		},
		{
			"id": "q9",
			"module": "M1",
			"type": "hamming",
			"difficulty": 3,
			"stem": "对数据 1011 做偶校验的 (7,4) 海明编码，结果（第 1 到第 7 位）是？",
			"options": [
				"0110011",
				"1110011",
				"0111011",
				"0110101"
			],
			"answer": 0,
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
			"id": "q10",
			"module": "M6",
			"type": "concept",
			"difficulty": 3,
			"stem": "CPLD 与 FPGA 在掉电行为上的典型区别是？",
			"options": [
				"CPLD 配置不丢，FPGA 基于 SRAM 掉电丢配置",
				"两者都丢配置",
				"FPGA 不丢，CPLD 丢",
				"两者都不丢配置"
			],
			"answer": 0,
			"explain": "CPLD 多为 E²PROM 工艺，FPGA 多为 SRAM 工艺，上电要重新加载比特流。"
		},
		{
			"id": "q11",
			"module": "M2",
			"type": "minterms",
			"difficulty": 2,
			"stem": "函数在 000、001、010、011、100 这几组输入下取值为 1（变量顺序 A B C），它的最小项之和怎么写？",
			"options": [
				"Σm(0, 1, 2, 3, 4, 5)",
				"Σm(0, 1, 2, 3)",
				"Σm(0, 1, 2, 3, 4)",
				"Σm(5, 6, 7)"
			],
			"answer": 2,
			"explain": "把每组取值为 1 的输入按 A B C 的二进制读出编号，就是 Σm(0, 1, 2, 3, 4)。"
		},
		{
			"id": "q12",
			"module": "M5",
			"type": "concept",
			"difficulty": 3,
			"stem": "4K×8 的存储器需要多少根地址线？",
			"options": [
				"8 根",
				"13 根",
				"10 根",
				"12 根"
			],
			"answer": 3,
			"explain": "4K = 2¹²，所以地址线是 12 根；8 是数据位宽，不参与地址。"
		},
		{
			"id": "q13",
			"module": "M2",
			"type": "kmap",
			"difficulty": 3,
			"stem": "三变量函数 F = Σm(0, 1, 5, 6, 7)，在卡诺图上化简后的最简与或式是？",
			"options": [
				"A·~B + A·B + ~B·C",
				"~A·~B + A·B + ~B·C",
				"~B·C·A·B·~A·~B",
				"~A·~B + A·B + ~B·C + A·C"
			],
			"answer": 1,
			"explain": "合并相邻的 1，可得到质蕴含项 ~A·~B、~B·C、A·C、A·B，最简式取 ~A·~B + A·B + ~B·C。"
		},
		{
			"id": "q14",
			"module": "M4",
			"type": "concept",
			"difficulty": 3,
			"stem": "RS 锁存器在 R=S=1 时撤掉输入，输出会怎样？",
			"options": [
				"一定回到 0",
				"一定开始振荡",
				"一定保持在 1",
				"不确定，可能停在任意一侧"
			],
			"answer": 3,
			"explain": "R=S=1 是禁用组合，撤掉后两个门互相锁定，结果取决于延迟差异。"
		},
		{
			"id": "q15",
			"module": "M1",
			"type": "base",
			"difficulty": 1,
			"stem": "十进制 225 的 2 进制写法是 11100001，它换成 16 进制是多少？",
			"options": [
				"1C2",
				"E0",
				"E1",
				"1E"
			],
			"answer": 2,
			"explain": "按权展开得十进制 225，再除基取余并逆序读取，得到 E1。",
			"verify": {
				"args": [
					"base",
					"--from",
					"2",
					"--to",
					"16",
					"--value",
					"11100001"
				],
				"field": "result"
			}
		},
		{
			"id": "q16",
			"module": "M6",
			"type": "concept",
			"difficulty": 2,
			"stem": "FPGA 中的 4 输入 LUT 本质是什么？",
			"options": [
				"四个与门",
				"一个 4 位寄存器",
				"一个 16×1 的存储单元，靠查表得到输出",
				"一个译码器"
			],
			"answer": 2,
			"explain": "LUT 把输入当地址去取预先写入的值，所以能实现任意 4 变量函数。"
		},
		{
			"id": "q17",
			"module": "M1",
			"type": "code",
			"difficulty": 2,
			"stem": "8 位补码里，十进制 -87 的编码是哪一个？",
			"options": [
				"01010111",
				"10101000",
				"10101001",
				"11010111"
			],
			"answer": 2,
			"explain": "先写原码 11010111，数值位取反得反码 10101000，末位加一得补码 10101001。",
			"verify": {
				"args": [
					"code",
					"--bits",
					"8",
					"--value",
					"-87"
				],
				"field": "twosComplement"
			}
		},
		{
			"id": "q18",
			"module": "M7",
			"type": "concept",
			"difficulty": 3,
			"stem": "微程序控制器里的微指令存在哪里？",
			"options": [
				"控制存储器中，是硬件的一部分",
				"用户程序的内存里",
				"硬盘的普通文件里",
				"通用寄存器里"
			],
			"answer": 0,
			"explain": "微指令直接控制门电路，属于硬件设计，不是用户编写的程序。"
		},
		{
			"id": "q19",
			"module": "M1",
			"type": "gray",
			"difficulty": 2,
			"stem": "4 位二进制 1000 对应的格雷码是？",
			"options": [
				"1100",
				"1010",
				"1101",
				"0011"
			],
			"answer": 0,
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
			"id": "q20",
			"module": "M8",
			"type": "concept",
			"difficulty": 3,
			"stem": "Verilog 的 assign 语句描述的是什么？",
			"options": [
				"组合逻辑，输出随输入连续变化",
				"模块端口声明",
				"初始化赋值，只执行一次",
				"时序逻辑，每个时钟沿更新"
			],
			"answer": 0,
			"explain": "assign 是连续赋值，等价于一根线加一个门，没有时钟概念。"
		},
		{
			"id": "q21",
			"module": "M1",
			"type": "bcd",
			"difficulty": 3,
			"stem": "十进制数字 5 的 2421 码是哪一组 4 位编码？",
			"options": [
				"0101",
				"0100",
				"1000",
				"1011"
			],
			"answer": 3,
			"explain": "2421 码按权重 2、4、2、1 相加：5 对应 1011。8421 码则是 0101。"
		},
		{
			"id": "q22",
			"module": "M8",
			"type": "concept",
			"difficulty": 2,
			"stem": "时序逻辑的 always 块里应该用哪种赋值？",
			"options": [
				"阻塞赋值 =",
				"两种混用",
				"continuous assign",
				"非阻塞赋值 <="
			],
			"answer": 3,
			"explain": "非阻塞赋值在时间步结束时统一更新，能模拟真实触发器的同时翻转。"
		},
		{
			"id": "q23",
			"module": "M1",
			"type": "hamming",
			"difficulty": 3,
			"stem": "对数据 1101 做偶校验的 (7,4) 海明编码，结果（第 1 到第 7 位）是？",
			"options": [
				"1010101",
				"1010011",
				"1011101",
				"0010101"
			],
			"answer": 0,
			"explain": "p1=⊕(3,5,7)=1，p2=⊕(3,6,7)=0，p4=⊕(5,6,7)=0，按 p1 p2 d1 p4 d2 d3 d4 排列得 1010101。",
			"verify": {
				"args": [
					"hamming",
					"--data",
					"1101"
				],
				"field": "code"
			}
		},
		{
			"id": "q24",
			"module": "M1",
			"type": "concept",
			"difficulty": 2,
			"stem": "关于格雷码，下面哪个说法正确？",
			"options": [
				"相邻两个码可以有两位不同",
				"它是有权码，按 8-4-2-1 求和",
				"相邻两个码只有一位不同，且它没有位权",
				"它只能表示十进制数字"
			],
			"answer": 2,
			"explain": "格雷码靠相邻性工作，不能按位权求和，常用于角度编码和跨时钟域传地址。"
		},
		{
			"id": "q25",
			"module": "M2",
			"type": "minterms",
			"difficulty": 2,
			"stem": "函数在 000、001、100、101 这几组输入下取值为 1（变量顺序 A B C），它的最小项之和怎么写？",
			"options": [
				"Σm(0, 1, 4, 5)",
				"Σm(0, 1, 4)",
				"Σm(2, 3, 6, 7)",
				"Σm(0, 1, 2, 4, 5)"
			],
			"answer": 0,
			"explain": "把每组取值为 1 的输入按 A B C 的二进制读出编号，就是 Σm(0, 1, 4, 5)。"
		},
		{
			"id": "q26",
			"module": "M5",
			"type": "concept",
			"difficulty": 2,
			"stem": "把 1K×4 的芯片扩成 4K×8，一共需要几片？",
			"options": [
				"8 片",
				"16 片",
				"2 片",
				"4 片"
			],
			"answer": 0,
			"explain": "字方向扩 4 倍、位方向扩 2 倍，共 8 片；低 10 位地址进片内，高 2 位进译码器。"
		},
		{
			"id": "q27",
			"module": "M2",
			"type": "kmap",
			"difficulty": 3,
			"stem": "三变量函数 F = Σm(0, 1, 3, 5, 7)，在卡诺图上化简后的最简与或式是？",
			"options": [
				"A·~B + C + C + C",
				"~A·~B + C + C + C + ~A·~B",
				"C·C·C·~A·~B",
				"~A·~B + C + C + C"
			],
			"answer": 3,
			"explain": "合并相邻的 1，可得到质蕴含项 ~A·~B、C，最简式取 ~A·~B + C + C + C。"
		},
		{
			"id": "q28",
			"module": "M4",
			"type": "concept",
			"difficulty": 2,
			"stem": "Moore 型状态机的输出取决于什么？",
			"options": [
				"只取决于当前输入",
				"取决于时钟频率",
				"只取决于当前状态",
				"同时取决于当前状态和当前输入"
			],
			"answer": 2,
			"explain": "Moore 的输出挂在状态上，Mealy 的输出还随输入变化。"
		},
		{
			"id": "q29",
			"module": "M1",
			"type": "base",
			"difficulty": 1,
			"stem": "十进制 205 的 8 进制写法是 315，它换成 16 进制是多少？",
			"options": [
				"19A",
				"CD",
				"DC",
				"CE"
			],
			"answer": 1,
			"explain": "按权展开得十进制 205，再除基取余并逆序读取，得到 CD。",
			"verify": {
				"args": [
					"base",
					"--from",
					"8",
					"--to",
					"16",
					"--value",
					"315"
				],
				"field": "result"
			}
		},
		{
			"id": "q30",
			"module": "M8",
			"type": "concept",
			"difficulty": 3,
			"stem": "组合逻辑的 always 块里漏写 else，综合工具会推断出什么？",
			"options": [
				"锁存器",
				"触发器",
				"三态门",
				"加法器"
			],
			"answer": 0,
			"explain": "条件不满足时必须保持原值，这种「保持」就是锁存行为。补全所有分支即可消除。"
		},
		{
			"id": "q31",
			"module": "M1",
			"type": "code",
			"difficulty": 2,
			"stem": "8 位补码里，十进制 -48 的编码是哪一个？",
			"options": [
				"11010001",
				"00110000",
				"11010000",
				"10110000"
			],
			"answer": 2,
			"explain": "先写原码 10110000，数值位取反得反码 11001111，末位加一得补码 11010000。",
			"verify": {
				"args": [
					"code",
					"--bits",
					"8",
					"--value",
					"-48"
				],
				"field": "twosComplement"
			}
		},
		{
			"id": "q32",
			"module": "M3",
			"type": "concept",
			"difficulty": 2,
			"stem": "74LS138 译码器被选中时，对应输出端是什么电平？",
			"options": [
				"高电平",
				"低电平",
				"高阻态",
				"翻转状态"
			],
			"answer": 1,
			"explain": "138 的输出是低有效，选中的那一路为 0，其余为 1。"
		},
		{
			"id": "q33",
			"module": "M1",
			"type": "gray",
			"difficulty": 2,
			"stem": "4 位二进制 1110 对应的格雷码是？",
			"options": [
				"1000",
				"1001",
				"1101",
				"1110"
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
			"id": "q34",
			"module": "M2",
			"type": "concept",
			"difficulty": 3,
			"stem": "卡诺图化简时，无关项应该怎么处理？",
			"options": [
				"必须全部当成 1",
				"按需取用，能让圈更大就用，不用也合法",
				"必须全部当成 0，不许参与化简",
				"必须全部圈进去"
			],
			"answer": 1,
			"explain": "无关项的值不影响功能，参与化简只是为了让圈更大，不用它也不会算错。"
		},
		{
			"id": "q35",
			"module": "M1",
			"type": "bcd",
			"difficulty": 3,
			"stem": "十进制数字 6 的 2421 码是哪一组 4 位编码？",
			"options": [
				"0110",
				"1100",
				"1001",
				"0011"
			],
			"answer": 1,
			"explain": "2421 码按权重 2、4、2、1 相加：6 对应 1100。8421 码则是 0110。"
		},
		{
			"id": "q36",
			"module": "M1",
			"type": "concept",
			"difficulty": 1,
			"stem": "8 位补码 10000000 表示十进制几？",
			"options": [
				"−128",
				"128",
				"0",
				"−127"
			],
			"answer": 0,
			"explain": "补码的负数区间比正数多一个，10000000 是 −128。它没有对应的原码和反码。"
		},
		{
			"id": "q37",
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
			"id": "q38",
			"module": "M2",
			"type": "concept",
			"difficulty": 2,
			"stem": "卡诺图里两个相邻的 1 合并，能消去几个变量？",
			"options": [
				"两个",
				"一个",
				"三个",
				"一个都消不掉"
			],
			"answer": 1,
			"explain": "每合并一次消去一个变量，四个 1 成圈消两个，八个成圈消三个。"
		},
		{
			"id": "q39",
			"module": "M2",
			"type": "minterms",
			"difficulty": 2,
			"stem": "函数在 000、101、111 这几组输入下取值为 1（变量顺序 A B C），它的最小项之和怎么写？",
			"options": [
				"Σm(1, 2, 3, 4, 6)",
				"Σm(0, 5)",
				"Σm(0, 5, 7)",
				"Σm(0, 1, 5, 7)"
			],
			"answer": 2,
			"explain": "把每组取值为 1 的输入按 A B C 的二进制读出编号，就是 Σm(0, 5, 7)。"
		},
		{
			"id": "q40",
			"module": "M7",
			"type": "concept",
			"difficulty": 2,
			"stem": "硬布线控制器和微程序控制器，通常怎么选？",
			"options": [
				"两者速度完全一样",
				"微程序一定更快",
				"要快选微程序，要易改选硬布线",
				"要快选硬布线，要易改选微程序"
			],
			"answer": 3,
			"explain": "硬布线的控制信号直接由组合逻辑产生，快但改起来要动电路；微程序改的是存储内容。"
		}
	]
};

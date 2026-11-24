// 由 scripts/dlquiz.js 生成，种子 20261125，共 80 题。不要手改。
window.DL_QUIZ = {
	"seed": 20261125,
	"generatedAt": "2026-11-24T18:13:46.889Z",
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
			"module": "M1",
			"type": "concept",
			"difficulty": 1,
			"stem": "8 位补码 11111111 表示十进制几？",
			"options": [
				"−127",
				"−1",
				"−0",
				"255"
			],
			"answer": 1,
			"explain": "补码全 1 按位取反加一得 1，符号为负，所以是 −1。"
		},
		{
			"id": "q3",
			"module": "M1",
			"type": "code",
			"difficulty": 2,
			"stem": "8 位补码里，十进制 -43 的编码是哪一个？",
			"options": [
				"11010110",
				"10101011",
				"11010101",
				"00101011"
			],
			"answer": 2,
			"explain": "先写原码 10101011，数值位取反得反码 11010100，末位加一得补码 11010101。",
			"verify": {
				"args": [
					"code",
					"--bits",
					"8",
					"--value",
					"-43"
				],
				"field": "twosComplement"
			}
		},
		{
			"id": "q4",
			"module": "M8",
			"type": "concept",
			"difficulty": 2,
			"stem": "always @(*) 的敏感列表等价于什么？",
			"options": [
				"块内读取到的所有信号",
				"只有时钟信号",
				"只有输出信号",
				"工程里的全部信号"
			],
			"answer": 0,
			"explain": "@(*) 由工具自动补全敏感列表，避免漏写信号导致仿真与综合不一致。"
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
			"module": "M2",
			"type": "concept",
			"difficulty": 3,
			"stem": "F=AB+C 的反函数 F′ 是？",
			"options": [
				"(A′+B′)·C′",
				"A′B′C′",
				"(A+B)·C",
				"A′B′+C′"
			],
			"answer": 0,
			"explain": "对整个式子用德摩根定律：先变或为与，再逐项取反，得 (A′+B′)·C′。"
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
			"module": "M1",
			"type": "concept",
			"difficulty": 2,
			"stem": "余 3 码 0101 表示十进制数字几？",
			"options": [
				"8",
				"5",
				"12",
				"2"
			],
			"answer": 3,
			"explain": "余 3 码等于 8421 码加 3：0101 按 8421 读是 5，减 3 得 2。"
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
			"module": "M6",
			"type": "concept",
			"difficulty": 3,
			"stem": "PAL 器件的阵列结构是？",
			"options": [
				"与阵列可编程，或阵列固定",
				"与阵列固定，或阵列可编程",
				"两个阵列都固定",
				"与、或阵列都可编程"
			],
			"answer": 0,
			"explain": "PAL 用可编程与阵列产生乘积项，或阵列出厂已连好；PLA 才是两者都可编程。"
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
			"module": "M5",
			"type": "concept",
			"difficulty": 2,
			"stem": "1K×8 的存储器需要几根地址线？",
			"options": [
				"16 根",
				"11 根",
				"8 根",
				"10 根"
			],
			"answer": 3,
			"explain": "1K=2¹⁰，地址线 10 根；8 是数据位宽，不参与地址。"
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
			"module": "M3",
			"type": "concept",
			"difficulty": 2,
			"stem": "74LS138 译码器有几个输出端？",
			"options": [
				"3 个",
				"16 个",
				"4 个",
				"8 个"
			],
			"answer": 3,
			"explain": "138 是 3 线−8 线译码器，3 根地址输入对应 8 个低有效输出。"
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
			"difficulty": 2,
			"stem": "硬布线控制器的主要特点是？",
			"options": [
				"速度快，但修改控制逻辑困难",
				"不需要时钟信号",
				"速度慢，但容易修改",
				"速度与微程序控制器完全相同"
			],
			"answer": 0,
			"explain": "控制信号由组合逻辑直接产生，路径短所以快；要改功能就得改电路。"
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
			"module": "M7",
			"type": "concept",
			"difficulty": 3,
			"stem": "微指令中的下地址字段作用是什么？",
			"options": [
				"指出下一条微指令的地址",
				"指出主存地址",
				"指出 I/O 端口号",
				"指出操作数地址"
			],
			"answer": 0,
			"explain": "微程序按微指令顺序执行，下地址字段决定下一步跳到哪里。"
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
			"module": "M2",
			"type": "concept",
			"difficulty": 2,
			"stem": "判断两个逻辑函数是否相等，最可靠的方法是？",
			"options": [
				"列出真值表逐行比较",
				"看变量个数是否相同",
				"看表达式长得是否一样",
				"看卡诺图圈数是否相同"
			],
			"answer": 0,
			"explain": "表达式形式可以不同而功能相同；真值表相同才是函数相等的定义。"
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
			"module": "M8",
			"type": "concept",
			"difficulty": 3,
			"stem": "阻塞赋值的特点是？",
			"options": [
				"按书写顺序立即执行并更新",
				"所有语句并行更新",
				"只能用于时序逻辑",
				"延迟到时间步结束才更新"
			],
			"answer": 0,
			"explain": "阻塞赋值像普通程序语句，前一句的结果立刻影响后一句。"
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
			"module": "M4",
			"type": "concept",
			"difficulty": 2,
			"stem": "锁存器和触发器最本质的区别是什么？",
			"options": [
				"锁存器电平触发，触发器边沿触发",
				"锁存器是组合逻辑",
				"锁存器只能存 1 位，触发器能存多位",
				"触发器不需要时钟"
			],
			"answer": 0,
			"explain": "关键在触发方式：使能期间透明的叫锁存器，只在跳变沿采样的叫触发器。"
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
			"module": "M5",
			"type": "concept",
			"difficulty": 2,
			"stem": "SRAM 的存储单元本质上是什么？",
			"options": [
				"双稳态触发器",
				"一个电容",
				"一根熔丝",
				"一个浮栅管"
			],
			"answer": 0,
			"explain": "SRAM 用六个管子构成双稳态，只要供电就保持，不需要刷新。"
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
			"module": "M4",
			"type": "concept",
			"difficulty": 3,
			"stem": "设计同步时序电路时，第一步通常做什么？",
			"options": [
				"先列出全部真值表",
				"先画电路图",
				"根据功能要求画出原始状态图或状态表",
				"先选定触发器型号"
			],
			"answer": 2,
			"explain": "先把功能变成状态与转移关系，再谈状态化简、编码和触发器选型。"
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
			"module": "M7",
			"type": "concept",
			"difficulty": 3,
			"stem": "ASM 图中的状态框表示什么？",
			"options": [
				"一个时钟周期内保持的状态及该状态的输出",
				"一个输入变量",
				"一个组合逻辑门",
				"一条微指令"
			],
			"answer": 0,
			"explain": "状态框对应现态，框内写输出；框之间用判断框按条件分支。"
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
			"module": "M5",
			"type": "concept",
			"difficulty": 1,
			"stem": "ROM 在掉电后数据会怎样？",
			"options": [
				"全部丢失",
				"保持不变",
				"变成全 1",
				"需要重新刷新"
			],
			"answer": 1,
			"explain": "ROM 是非易失性存储器，断电后内容仍在；RAM 才需要持续供电。"
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
			"module": "M6",
			"type": "concept",
			"difficulty": 2,
			"stem": "基于 SRAM 工艺的 FPGA 掉电后配置会怎样？",
			"options": [
				"丢失，上电需要重新加载",
				"自动恢复出厂设置",
				"变成只读",
				"保留，随时可用"
			],
			"answer": 0,
			"explain": "SRAM 掉电即失，比特流通常存在外部 Flash，上电时再装入 FPGA。"
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
			"module": "M1",
			"type": "concept",
			"difficulty": 3,
			"stem": "格雷码 0101 对应的二进制数是什么？",
			"options": [
				"1100",
				"0110",
				"1010",
				"0100"
			],
			"answer": 1,
			"explain": "最高位照抄得 0，其后每位等于上一位二进制结果与本位格雷码异或，得 0110。"
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
			"module": "M8",
			"type": "concept",
			"difficulty": 2,
			"stem": "testbench 中产生周期性时钟的常见写法是？",
			"options": [
				"always @(clk) clk=~clk",
				"initial 置初值，再用 always #5 clk=~clk",
				"assign clk=~clk",
				"initial clk=~clk 单独一行"
			],
			"answer": 1,
			"explain": "always 加延时反复取反才能持续翻转；assign 自引用和敏感列表写法都不成立。"
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
			"module": "M8",
			"type": "concept",
			"difficulty": 2,
			"stem": "Verilog 中 parameter 的作用是？",
			"options": [
				"定义模块内常量，实例化时可覆盖",
				"产生时钟信号",
				"定义模块端口",
				"定义可变的寄存器"
			],
			"answer": 0,
			"explain": "parameter 常用来写位宽和延时，让同一模块在不同实例中取不同值。"
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
			"type": "concept",
			"difficulty": 2,
			"stem": "八选一数据选择器需要几根地址线？",
			"options": [
				"2 根",
				"3 根",
				"8 根",
				"4 根"
			],
			"answer": 1,
			"explain": "8=2³，3 根地址线正好选中 8 路数据中的一路。"
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
			"module": "M3",
			"type": "concept",
			"difficulty": 2,
			"stem": "全加器的本位和 S 等于？",
			"options": [
				"A⊕B",
				"AB+Cin",
				"A+B+Cin",
				"A⊕B⊕Cin"
			],
			"answer": 3,
			"explain": "三个输入中 1 的个数为奇数时本位为 1，即三次异或。"
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
			"module": "M3",
			"type": "concept",
			"difficulty": 3,
			"stem": "用 8 选 1 数据选择器实现三变量函数，变量应该怎么接？",
			"options": [
				"变量接使能端",
				"三个变量都接地址端，八个数据端接 0 或 1",
				"最高位接地址端，其余接数据端",
				"三个变量都接数据端"
			],
			"answer": 1,
			"explain": "8 选 1 有 3 根地址线，正好对应三个变量；把真值表的 8 个输出值接到数据端即可。"
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
			"module": "M2",
			"type": "concept",
			"difficulty": 3,
			"stem": "卡诺图化简时，无关项应该怎么处理？",
			"options": [
				"按需取用，能让圈更大就用，不用也合法",
				"必须全部当成 1",
				"必须全部圈进去",
				"必须全部当成 0，不许参与化简"
			],
			"answer": 0,
			"explain": "无关项的值不影响功能，参与化简只是为了让圈更大，不用它也不会算错。"
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
			"module": "M2",
			"type": "concept",
			"difficulty": 2,
			"stem": "逻辑函数 F=A+A′B 化简后等于？",
			"options": [
				"A+B",
				"AB",
				"B",
				"A"
			],
			"answer": 0,
			"explain": "A+A′B=(A+A′)(A+B)=A+B，用的是吸收律和分配律。"
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
			"difficulty": 2,
			"stem": "FPGA 中的 4 输入 LUT 本质是什么？",
			"options": [
				"四个与门",
				"一个 16×1 的存储单元，靠查表得到输出",
				"一个译码器",
				"一个 4 位寄存器"
			],
			"answer": 1,
			"explain": "LUT 把输入当地址去取预先写入的值，所以能实现任意 4 变量函数。"
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
			"module": "M8",
			"type": "concept",
			"difficulty": 2,
			"stem": "initial 块通常用于什么场合？",
			"options": [
				"替代 always 块",
				"描述组合逻辑",
				"描述上电复位电路",
				"仿真激励，一般不用于可综合设计"
			],
			"answer": 3,
			"explain": "initial 只在 0 时刻执行一次，多数综合工具不接受它作为硬件描述。"
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
			"difficulty": 2,
			"stem": "同步计数器与异步计数器的主要区别是？",
			"options": [
				"模值大小不同",
				"各级触发器是否由同一个时钟同时触发",
				"有没有进位输出",
				"能否可逆计数"
			],
			"answer": 1,
			"explain": "同步计数器所有触发器共用时钟；异步计数器把前级输出当时钟，逐级翻转。"
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
			"stem": "把 1K×4 的芯片扩成 4K×8，一共需要几片？",
			"options": [
				"2 片",
				"8 片",
				"4 片",
				"16 片"
			],
			"answer": 1,
			"explain": "字方向扩 4 倍、位方向扩 2 倍，共 8 片；低 10 位地址进片内，高 2 位进译码器。"
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
			"module": "M1",
			"type": "concept",
			"difficulty": 2,
			"stem": "8 位补码能表示的整数范围是？",
			"options": [
				"−128 到 128",
				"−128 到 127",
				"−127 到 127",
				"0 到 255"
			],
			"answer": 1,
			"explain": "n 位补码范围是 −2ⁿ⁻¹ 到 2ⁿ⁻¹−1；负数比正数多一个。"
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
			"module": "M4",
			"type": "concept",
			"difficulty": 2,
			"stem": "JK 触发器在 J=K=1 时，次态会怎样？",
			"options": [
				"翻转",
				"置 0",
				"保持",
				"置 1"
			],
			"answer": 0,
			"explain": "J=K=1 是计数状态，每个时钟沿输出取反。"
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
			"module": "M7",
			"type": "concept",
			"difficulty": 3,
			"stem": "微程序控制器里的微指令存在哪里？",
			"options": [
				"通用寄存器里",
				"控制存储器中，是硬件的一部分",
				"用户程序的内存里",
				"硬盘的普通文件里"
			],
			"answer": 1,
			"explain": "微指令直接控制门电路，属于硬件设计，不是用户编写的程序。"
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
			"module": "M7",
			"type": "concept",
			"difficulty": 2,
			"stem": "数据通路主要完成什么任务？",
			"options": [
				"存储微程序",
				"产生全部控制信号",
				"对指令地址进行译码",
				"在各部件之间传送数据并完成运算"
			],
			"answer": 3,
			"explain": "数据通路管数据怎么走、在哪算；控制信号由控制器给出。"
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
			"module": "M4",
			"type": "concept",
			"difficulty": 3,
			"stem": "主从 JK 触发器在 CP=1 期间输出会怎样？",
			"options": [
				"进入不定状态",
				"保持不变，到 CP 下降沿才更新",
				"随 J、K 立即变化",
				"每半个周期翻转一次"
			],
			"answer": 1,
			"explain": "CP=1 时主触发器接收、从触发器封锁；下降沿从触发器才接收主触发器的结果。"
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
			"module": "M8",
			"type": "concept",
			"difficulty": 2,
			"stem": "描述组合逻辑的 always 块里应使用哪种赋值？",
			"options": [
				"非阻塞赋值 <=",
				"阻塞赋值 =",
				"只能用 assign",
				"两种混用"
			],
			"answer": 1,
			"explain": "组合逻辑要求按书写顺序立即得到结果，阻塞赋值符合这一语义。"
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
			"module": "M2",
			"type": "concept",
			"difficulty": 3,
			"stem": "F=AB+C 的对偶式是？",
			"options": [
				"(A+B)·C",
				"AB+C",
				"A′B′+C′",
				"(A+B)+C"
			],
			"answer": 0,
			"explain": "对偶式把与换成或、或换成与，0 和 1 互换，变量保持不变。"
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
			"difficulty": 3,
			"stem": "用数据选择器实现任意组合函数，依据是什么？",
			"options": [
				"内部有触发器可以存储结果",
				"把真值表的输出值接到对应数据端",
				"地址端可以编程",
				"输出端能自动化简"
			],
			"answer": 1,
			"explain": "地址端接变量，数据端接 0 或 1，选择器就按真值表逐行输出。"
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
			"module": "M3",
			"type": "concept",
			"difficulty": 3,
			"stem": "组合逻辑中消除静态冒险的常用方法是？",
			"options": [
				"把所有门换成与非门",
				"增加冗余项，把相邻的圈搭接起来",
				"提高时钟频率",
				"减少输入变量个数"
			],
			"answer": 1,
			"explain": "冒险来自不同路径的延迟差；补一个冗余项可让两条路径互相覆盖。"
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
			"module": "M1",
			"type": "concept",
			"difficulty": 1,
			"stem": "8421BCD 码 1001 0110 表示十进制几？",
			"options": [
				"96",
				"156",
				"69",
				"10010110"
			],
			"answer": 0,
			"explain": "每四位一组：1001 是 9，0110 是 6，按高低位拼成 96。"
		}
	]
};

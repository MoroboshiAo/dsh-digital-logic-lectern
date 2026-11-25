// 由 scripts/dlbook.js 从 references 生成。这是自编学习资料，不是教材原文。
window.DL_BOOK = {
	"generatedAt": "2026-11-25T05:43:07.223Z",
	"source": {
		"title": "《数字逻辑》（第七版）",
		"editors": "白中英、朱正东 主编",
		"publisher": "科学出版社",
		"year": "2020",
		"note": "学习资料按该教材目录自编，不是教材原文。"
	},
	"chapters": [
		{
			"id": "c1",
			"label": "第一章",
			"title": "第一章 开关理论基础",
			"modules": [
				"M1",
				"M2"
			],
			"sections": [
				{
					"heading": "二进制系统",
					"lines": [
						""
					],
					"subs": [
						{
							"number": "1.1.1",
							"heading": "连续量和离散量",
							"anchor": "sec-1.1.1",
							"html": "<ul><li>连续量在时间上取连续值，任意两个取值之间总存在中间值，温度、电压这类物理量属于连续量。</li><li>离散量只在分离的取值上出现，相邻取值之间有间隔，无法再细分为中间状态。</li><li>把连续量送入数字系统前要经过采样、量化与编码，采样间隔限制可还原的信息，量化会引入误差。</li><li>离散量便于用有限个符号表示和存储，数字系统处理的对象都是离散量。</li></ul>"
						},
						{
							"number": "1.1.2",
							"heading": "开关量",
							"anchor": "sec-1.1.2",
							"html": "<ul><li>开关量是只取两种状态的离散量，习惯写成 0 和 1，这两个符号代表状态而不是数值大小。</li><li>实际电路用高电平、低电平两种电压范围承载开关量，两者之间存在不确定的过渡区。</li><li>0 和 1 与\"通／断\"\"真／假\"的对应关系由设计者约定，不由电平本身决定。</li><li>多个开关量按位组合后可以表示数值、字符或控制命令，是数字系统表示信息的基本单位。</li></ul>"
						},
						{
							"number": "1.1.3",
							"heading": "数字波形",
							"anchor": "sec-1.1.3",
							"html": "<ul><li>数字波形把开关量随时间的变化画成两条电平线之间的折线，纵轴为逻辑电平，横轴为时间。</li><li>波形上电平保持不变的一段对应一个位时间，各位时间宽度相等表示信号是同步的。</li><li>电平由低变高、由高变低的转折分别称为上升沿和下降沿，边沿在时序电路中用作触发时刻。</li><li>周期性波形用周期、频率和占空比描述，占空比是一个周期内高电平持续时间与周期之比。</li></ul>\n<p class=\"pitfall\">易错：开关量的 0 和 1 是两种逻辑状态，不能当作算术上的零和一参与普通四则运算。</p>\n<figure id=\"fig-sec-1.1.3-1\" data-fig=\"fig-sec-1.1.3-1\" data-sec=\"sec-1.1.3\" data-caption=\"矩形脉冲的上升时间、下降时间、脉宽、周期与占空比\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMzAwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IuefqeW9ouiEieWGsueahOS4iuWNh+aXtumXtOOAgeS4i+mZjeaXtumXtOOAgeiEieWuveOAgeWRqOacn+S4juWNoOepuuavlCI+CjxzdHlsZT4KLnN7ZmlsbDpub25lO3N0cm9rZTojNThjYzAyO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZH0KLmR7ZmlsbDpub25lO3N0cm9rZTojM2E0MjUwO3N0cm9rZS13aWR0aDoxLjI7c3Ryb2tlLWRhc2hhcnJheTo1IDR9Ci50e2ZpbGw6I2U2ZThlZTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHh9Ci5ie2ZpbGw6I2U2ZThlZTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NjAwfQoubXtmaWxsOiM5YWEyYjE7Zm9udC1mYW1pbHk6IlNlZ29lIFVJIiwiTWljcm9zb2Z0IFlhSGVpIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMi41cHh9Cjwvc3R5bGU+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxNDE4MjEiLz4KPHRleHQgeD0iMjQiIHk9IjI4IiBjbGFzcz0iYiI+55+p5b2i6ISJ5Yay55qE5Y+C5pWwPC90ZXh0Pgo8dGV4dCB4PSIyNCIgeT0iOTYiIGNsYXNzPSJtIj7pq5jnlLXlubM8L3RleHQ+Cjx0ZXh0IHg9IjI0IiB5PSIyMDQiIGNsYXNzPSJtIj7kvY7nlLXlubM8L3RleHQ+CjxsaW5lIHgxPSI5MCIgeTE9IjIwMCIgeDI9IjExMCIgeTI9IjEwMCIgY2xhc3M9InMiLz4KPGxpbmUgeDE9IjExMCIgeTE9IjEwMCIgeDI9IjI1MCIgeTI9IjEwMCIgY2xhc3M9InMiLz4KPGxpbmUgeDE9IjI1MCIgeTE9IjEwMCIgeDI9IjI3MiIgeTI9IjIwMCIgY2xhc3M9InMiLz4KPGxpbmUgeDE9IjI3MiIgeTE9IjIwMCIgeDI9IjM1MCIgeTI9IjIwMCIgY2xhc3M9InMiLz4KPGxpbmUgeDE9IjM1MCIgeTE9IjIwMCIgeDI9IjM3MCIgeTI9IjEwMCIgY2xhc3M9InMiLz4KPGxpbmUgeDE9IjM3MCIgeTE9IjEwMCIgeDI9IjQ1MCIgeTI9IjEwMCIgY2xhc3M9InMiLz4KPHRleHQgeD0iOTIiIHk9Ijg2IiBjbGFzcz0ibSI+dF9yPC90ZXh0Pgo8dGV4dCB4PSIxNzIiIHk9Ijg2IiBjbGFzcz0ibSI+dF93PC90ZXh0Pgo8dGV4dCB4PSIyNTQiIHk9Ijg2IiBjbGFzcz0ibSI+dF9mPC90ZXh0Pgo8bGluZSB4MT0iOTAiIHkxPSIyNDAiIHgyPSI5MCIgeTI9IjI1MiIgY2xhc3M9ImQiLz4KPGxpbmUgeDE9IjM1MCIgeTE9IjI0MCIgeDI9IjM1MCIgeTI9IjI1MiIgY2xhc3M9ImQiLz4KPGxpbmUgeDE9IjkwIiB5MT0iMjQ2IiB4Mj0iMzUwIiB5Mj0iMjQ2IiBjbGFzcz0iZCIvPgo8dGV4dCB4PSIyMjAiIHk9IjI3MiIgY2xhc3M9Im0iIHRleHQtYW5jaG9yPSJtaWRkbGUiPlTvvIjlkajmnJ/vvIk8L3RleHQ+Cjx0ZXh0IHg9IjQyMCIgeT0iMjcyIiBjbGFzcz0ibSI+5Y2g56m65q+UID0gdF93IC8gVDwvdGV4dD4KPC9zdmc+Cg==\" alt=\"矩形脉冲的上升时间、下降时间、脉宽、周期与占空比\" loading=\"lazy\"><figcaption>矩形脉冲的上升时间、下降时间、脉宽、周期与占空比</figcaption></figure>"
						},
						{
							"number": "1.1.4",
							"heading": "实际脉冲的参数",
							"anchor": "sec-1.1.4",
							"html": "<ul><li>实际脉冲的边沿不是垂直跳变，幅度从 10% 升到 90% 的时间称上升时间，从 90% 降到 10% 的时间称下降时间。</li><li>脉冲宽度在上升沿和下降沿的 50% 幅度点之间测量，这样定义不受边沿陡缓的影响。</li><li>脉冲幅度是基准线到高电平的电压差，周期、频率和占空比的测量都以幅度为参考。</li><li>上升时间越短，边沿越接近理想跳变，信号能通过的频率越高；边沿变缓会增大门电路的传输延迟。</li><li>按跳变方向分为正脉冲和负脉冲，正脉冲以向上跳变开始，负脉冲以向下跳变开始。</li></ul>\n<p class=\"pitfall\">易错：占空比是脉冲宽度与周期之比，不是高电平时间与低电平时间之比。</p>"
						}
					],
					"number": "1.1",
					"anchor": "sec-1.1",
					"html": ""
				},
				{
					"heading": "数制与码制",
					"lines": [
						""
					],
					"subs": [
						{
							"number": "1.2.1",
							"heading": "进位计数制",
							"anchor": "sec-1.2.1",
							"html": "<ul><li>进位计数制由一组有序数字符号和进位规则构成，基数等于该数制所用符号的个数。</li><li>每一位的权是基数的整数次幂，位置左移一位权乘基数，右移一位权除以基数。</li><li>二进制基数为 2，八进制为 8，十六进制为 16，同一个数值在不同数制下写法不同而值相同。</li><li>一个数的值等于各位数字与对应位权乘积之和，这一展开式是数制换算的出发点。</li></ul>"
						},
						{
							"number": "1.2.2",
							"heading": "进位计数制的相互转换",
							"anchor": "sec-1.2.2",
							"html": "<ul><li>十进制整数转二进制用除 2 取余法，先得的余数是低位，最后得的商是最高位。</li><li>十进制小数转二进制用乘 2 取整法，先得的整数是高位，过程可能不终止，需按精度截取。</li><li>二进制与八进制、十六进制之间按每 3 位、每 4 位分组直接对应，分组从小数点向两侧进行。</li><li>两种非十进制数制之间换算，一般先转成二进制或十进制再转目标数制，可减少出错。</li></ul>\n<figure id=\"fig-sec-1.2.2-1\" data-fig=\"fig-sec-1.2.2-1\" data-sec=\"sec-1.2.2\" data-caption=\"十六进制与十进制、十进制与二进制之间的换算步骤\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMjgwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IuWNgeWFrei/m+WItuS4juWNgei/m+WItuOAgeWNgei/m+WItuS4juS6jOi/m+WItuS5i+mXtOeahOaNoueul+atpemqpCI+CjxzdHlsZT4KLnN7ZmlsbDpub25lO3N0cm9rZTojNThjYzAyO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZH0KLnR7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweH0KLmJ7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo2MDB9Ci5te2ZpbGw6IzlhYTJiMTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEyLjVweH0KLmd7ZmlsbDpub25lO3N0cm9rZTojM2E0MjUwO3N0cm9rZS13aWR0aDoxLjJ9Ci5ke2ZpbGw6bm9uZTtzdHJva2U6IzNhNDI1MDtzdHJva2Utd2lkdGg6MS4yO3N0cm9rZS1kYXNoYXJyYXk6NSA1fQouYm94e2ZpbGw6IzFiMjAyOTtzdHJva2U6IzNhNDI1MDtzdHJva2Utd2lkdGg6MS41fQouY29kZXtmaWxsOiNlNmU4ZWU7Zm9udC1mYW1pbHk6IkNvbnNvbGFzIiwiQ291cmllciBOZXciLG1vbm9zcGFjZTtmb250LXNpemU6MTNweH0KPC9zdHlsZT4KPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzE0MTgyMSIvPgo8dGV4dCB4PSIyNCIgeT0iMjgiIGNsYXNzPSJiIj7mlbDliLbmjaLnrpfnmoTkuKTmnaHot6/lvoQ8L3RleHQ+Cjx0ZXh0IHg9IjI0IiB5PSI2NiIgY2xhc3M9Im0iPuaMieadg+WxleW8gO+8muWNgeWFrei/m+WItiDihpIg5Y2B6L+b5Yi2PC90ZXh0Pgo8dGV4dCB4PSIyNCIgeT0iOTgiIGNsYXNzPSJ0Ij4yQUYoMTYpID0gMsOXMTbCsiArIDEww5cxNiArIDE1PC90ZXh0Pgo8dGV4dCB4PSIyNCIgeT0iMTI0IiBjbGFzcz0idCI+PSA1MTIgKyAxNjAgKyAxNTwvdGV4dD4KPHRleHQgeD0iMjQiIHk9IjE1MCIgY2xhc3M9InQiPj0gNjg3PC90ZXh0Pgo8bGluZSB4MT0iMzIwIiB5MT0iNTYiIHgyPSIzMjAiIHkyPSIyNTIiIGNsYXNzPSJnIi8+Cjx0ZXh0IHg9IjM0NCIgeT0iNjYiIGNsYXNzPSJtIj7pmaTln7rlj5bkvZnvvJrljYHov5vliLYg4oaSIOS6jOi/m+WItjwvdGV4dD4KPHRleHQgeD0iMzQ0IiB5PSI5OCIgY2xhc3M9InQiPjY4NyDDtyAyID0gMzQzIOS9mSAxPC90ZXh0Pgo8dGV4dCB4PSIzNDQiIHk9IjEyMiIgY2xhc3M9InQiPjM0MyDDtyAyID0gMTcxIOS9mSAxPC90ZXh0Pgo8dGV4dCB4PSIzNDQiIHk9IjE0NiIgY2xhc3M9InQiPjE3MSDDtyAyID0gODUg5L2ZIDE8L3RleHQ+Cjx0ZXh0IHg9IjM0NCIgeT0iMTcwIiBjbGFzcz0idCI+ODUgw7cgMiA9IDQyIOS9mSAxPC90ZXh0Pgo8dGV4dCB4PSIzNDQiIHk9IjIwMiIgY2xhc3M9InQiPuS9meaVsOiHquS4i+iAjOS4iuivu++8mjEwMTAxMDExMTHigoI8L3RleHQ+Cjwvc3ZnPgo=\" alt=\"十六进制与十进制、十进制与二进制之间的换算步骤\" loading=\"lazy\"><figcaption>十六进制与十进制、十进制与二进制之间的换算步骤</figcaption></figure>"
						},
						{
							"number": "1.2.3",
							"heading": "二进制编码",
							"anchor": "sec-1.2.3",
							"html": "<ul><li>用若干位二进制码元表示十进制数字、字符或指令称为二进制编码，码元位数决定可表示的符号总数。</li><li>8421 BCD 码用 4 位二进制数表示 1 位十进制数，只取 0000 到 1001 这 10 个码字，其余 6 个为无效码。</li><li>格雷码相邻两个码字只有一位不同，可减少状态切换瞬间出现的错误读数。</li><li>ASCII 码用 7 位二进制数表示字符，多出的 1 位常用于校验，是设备间交换文本的通用编码。</li></ul>\n<figure id=\"fig-sec-1.2.3-1\" data-fig=\"fig-sec-1.2.3-1\" data-sec=\"sec-1.2.3\" data-caption=\"十进制数字的 8421、2421、余三、格雷编码对照\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NjAgMzUyIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IuWNgei/m+WItuaVsOWtl+eahCA4NDIx44CBMjQyMeOAgeS9meS4ieWSjOagvOmbt+e8lueggeWvueeFpyI+Cgk8cmVjdCB4PSIyMCIgeT0iMTYiIHdpZHRoPSI1MjAiIGhlaWdodD0iMzIwIiByeD0iMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzNhNDI1MCIgc3Ryb2tlLXdpZHRoPSIxLjYiLz4KCTxnIGZvbnQtZmFtaWx5PSJTZWdvZSBVSSwgTWljcm9zb2Z0IFlhSGVpLCBzYW5zLXNlcmlmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4KCQk8ZyBmaWxsPSIjNThjYzAyIiBmb250LXNpemU9IjEzIiBmb250LXdlaWdodD0iNjAwIj4KCQkJPHRleHQgeD0iNTIiIHk9IjQ0Ij7ljYHov5vliLY8L3RleHQ+CgkJCTx0ZXh0IHg9IjE0OCIgeT0iNDQiPjg0MjEg56CBPC90ZXh0PgoJCQk8dGV4dCB4PSIyNTIiIHk9IjQ0Ij4yNDIxIOeggTwvdGV4dD4KCQkJPHRleHQgeD0iMzU2IiB5PSI0NCI+5L2ZIDMg56CBPC90ZXh0PgoJCQk8dGV4dCB4PSI0NzQiIHk9IjQ0Ij7moLzpm7fnoIE8L3RleHQ+CgkJPC9nPgoJCTxnIGZpbGw9IiM5YWEyYjEiIGZvbnQtc2l6ZT0iMTMiPgoJCQk8dGV4dCB4PSI1MiIgeT0iNzIiPjA8L3RleHQ+PHRleHQgeD0iMTQ4IiB5PSI3MiI+MDAwMDwvdGV4dD48dGV4dCB4PSIyNTIiIHk9IjcyIj4wMDAwPC90ZXh0Pjx0ZXh0IHg9IjM1NiIgeT0iNzIiPjAwMTE8L3RleHQ+PHRleHQgeD0iNDc0IiB5PSI3MiI+MDAwMDwvdGV4dD4KCQkJPHRleHQgeD0iNTIiIHk9Ijk4Ij4xPC90ZXh0Pjx0ZXh0IHg9IjE0OCIgeT0iOTgiPjAwMDE8L3RleHQ+PHRleHQgeD0iMjUyIiB5PSI5OCI+MDAwMTwvdGV4dD48dGV4dCB4PSIzNTYiIHk9Ijk4Ij4wMTAwPC90ZXh0Pjx0ZXh0IHg9IjQ3NCIgeT0iOTgiPjAwMDE8L3RleHQ+CgkJCTx0ZXh0IHg9IjUyIiB5PSIxMjQiPjI8L3RleHQ+PHRleHQgeD0iMTQ4IiB5PSIxMjQiPjAwMTA8L3RleHQ+PHRleHQgeD0iMjUyIiB5PSIxMjQiPjAwMTA8L3RleHQ+PHRleHQgeD0iMzU2IiB5PSIxMjQiPjAxMDE8L3RleHQ+PHRleHQgeD0iNDc0IiB5PSIxMjQiPjAwMTE8L3RleHQ+CgkJCTx0ZXh0IHg9IjUyIiB5PSIxNTAiPjM8L3RleHQ+PHRleHQgeD0iMTQ4IiB5PSIxNTAiPjAwMTE8L3RleHQ+PHRleHQgeD0iMjUyIiB5PSIxNTAiPjAwMTE8L3RleHQ+PHRleHQgeD0iMzU2IiB5PSIxNTAiPjAxMTA8L3RleHQ+PHRleHQgeD0iNDc0IiB5PSIxNTAiPjAwMTA8L3RleHQ+CgkJCTx0ZXh0IHg9IjUyIiB5PSIxNzYiPjQ8L3RleHQ+PHRleHQgeD0iMTQ4IiB5PSIxNzYiPjAxMDA8L3RleHQ+PHRleHQgeD0iMjUyIiB5PSIxNzYiPjAxMDA8L3RleHQ+PHRleHQgeD0iMzU2IiB5PSIxNzYiPjAxMTE8L3RleHQ+PHRleHQgeD0iNDc0IiB5PSIxNzYiPjAxMTA8L3RleHQ+CgkJCTx0ZXh0IHg9IjUyIiB5PSIyMDIiPjU8L3RleHQ+PHRleHQgeD0iMTQ4IiB5PSIyMDIiPjAxMDE8L3RleHQ+PHRleHQgeD0iMjUyIiB5PSIyMDIiPjEwMTE8L3RleHQ+PHRleHQgeD0iMzU2IiB5PSIyMDIiPjEwMDA8L3RleHQ+PHRleHQgeD0iNDc0IiB5PSIyMDIiPjAxMTE8L3RleHQ+CgkJCTx0ZXh0IHg9IjUyIiB5PSIyMjgiPjY8L3RleHQ+PHRleHQgeD0iMTQ4IiB5PSIyMjgiPjAxMTA8L3RleHQ+PHRleHQgeD0iMjUyIiB5PSIyMjgiPjExMDA8L3RleHQ+PHRleHQgeD0iMzU2IiB5PSIyMjgiPjEwMDE8L3RleHQ+PHRleHQgeD0iNDc0IiB5PSIyMjgiPjAxMDE8L3RleHQ+CgkJCTx0ZXh0IHg9IjUyIiB5PSIyNTQiPjc8L3RleHQ+PHRleHQgeD0iMTQ4IiB5PSIyNTQiPjAxMTE8L3RleHQ+PHRleHQgeD0iMjUyIiB5PSIyNTQiPjExMDE8L3RleHQ+PHRleHQgeD0iMzU2IiB5PSIyNTQiPjEwMTA8L3RleHQ+PHRleHQgeD0iNDc0IiB5PSIyNTQiPjAxMDA8L3RleHQ+CgkJCTx0ZXh0IHg9IjUyIiB5PSIyODAiPjg8L3RleHQ+PHRleHQgeD0iMTQ4IiB5PSIyODAiPjEwMDA8L3RleHQ+PHRleHQgeD0iMjUyIiB5PSIyODAiPjExMTA8L3RleHQ+PHRleHQgeD0iMzU2IiB5PSIyODAiPjEwMTE8L3RleHQ+PHRleHQgeD0iNDc0IiB5PSIyODAiPjExMDA8L3RleHQ+CgkJCTx0ZXh0IHg9IjUyIiB5PSIzMDYiPjk8L3RleHQ+PHRleHQgeD0iMTQ4IiB5PSIzMDYiPjEwMDE8L3RleHQ+PHRleHQgeD0iMjUyIiB5PSIzMDYiPjExMTE8L3RleHQ+PHRleHQgeD0iMzU2IiB5PSIzMDYiPjExMDA8L3RleHQ+PHRleHQgeD0iNDc0IiB5PSIzMDYiPjExMDE8L3RleHQ+CgkJPC9nPgoJPC9nPgoJPGcgc3Ryb2tlPSIjMmMzMTNiIiBzdHJva2Utd2lkdGg9IjEiPgoJCTxwYXRoIGQ9Ik0yMCA1NGg1MjBNMjAgODJoNTIwTTIwIDEwOGg1MjBNMjAgMTM0aDUyME0yMCAxNjBoNTIwTTIwIDE4Nmg1MjBNMjAgMjEyaDUyME0yMCAyMzhoNTIwTTIwIDI2NGg1MjBNMjAgMjkwaDUyMCIvPgoJCTxwYXRoIGQ9Ik05NiAxNnYzMjBNMjAwIDE2djMyME0zMDQgMTZ2MzIwTTQwOCAxNnYzMjAiLz4KCTwvZz4KPC9zdmc+Cg==\" alt=\"十进制数字的 8421、2421、余三、格雷编码对照\" loading=\"lazy\"><figcaption>十进制数字的 8421、2421、余三、格雷编码对照</figcaption></figure>\n<p class=\"pitfall\">易错：BCD 码是用 4 位二进制数逐位表示十进制数的编码，不是把整个十进制数换成二进制。</p>"
						},
						{
							"number": "1.2.4",
							"heading": "常用 BCD 编码",
							"anchor": "sec-1.2.4",
							"html": "<ul><li>8421 码是按位权命名的有权码，四位权值依次为 8、4、2、1，最直观，也最常用。</li><li>2421 码和 5211 码同样是有权码，同一位十进制数在不同有权码中的码字不同，值仍相等。</li><li>余三码由 8421 码加 0011 得到，属无权码，每个码字都比对应的 8421 码多 3。</li><li>余三码具有自补性，0 与 9、1 与 8 等互反码逐位取反即可互换，便于求十进制补数。</li><li>两个余三码相加能直接产生进位，但和要按有无进位分别修正，不能当作普通二进制数使用。</li></ul>\n<p class=\"pitfall\">易错：BCD 码只取 0000 到 1001 这十个码字表示十进制数字，1010 到 1111 属无效码，运算结果落在这六个码字上说明需要修正。</p>"
						},
						{
							"number": "1.2.5",
							"heading": "格雷码的编码与解码",
							"anchor": "sec-1.2.5",
							"html": "<ul><li>典型格雷码从自然二进制码导出：第 i 位等于二进制码第 i 位与第 i+1 位异或，最高位之外的第 n 位按 0 处理。</li><li>解码方向相反：最高位保持不变，其余各位等于格雷码本位与已解出的高一位异或。</li><li>格雷码各位没有固定权值，不能直接做算术运算，参与运算前要先转回自然二进制码。</li><li>编码方案不唯一，除典型格雷码外还有余三格雷码等形式，选用时以约定的码表为准。</li><li>相邻码字只变一位，使状态切换时不会出现多位同时翻转的中间码，常用于位置检测和异步接口。</li></ul>"
						},
						{
							"number": "1.2.6",
							"heading": "带符号数的表示",
							"anchor": "sec-1.2.6",
							"html": "<ul><li>原码用最高位作符号位，0 表示正、1 表示负，其余各位表示数值，零有正零和负零两种写法。</li><li>反码对正数与原码相同，对负数保持符号位不变、数值位逐位取反。</li><li>补码对正数与原码相同，对负数等于反码加 1，零只有一种表示。</li><li>补码把减法化成加法，符号位与数值位一起参加运算，n 位补码能表示的范围是负 2 的 n-1 次方到正 2 的 n-1 次方减 1。</li><li>运算结果超出表示范围即为溢出，判断时要看符号位与进位的配合，不能只看数值位是否进位。</li></ul>\n<p class=\"pitfall\">易错：负数的补码不是把原码数值位取反，而是取反后再加 1；漏加 1 得到的仍是反码。</p>"
						}
					],
					"number": "1.2",
					"anchor": "sec-1.2",
					"html": ""
				},
				{
					"heading": "逻辑函数及其描述工具",
					"lines": [
						""
					],
					"subs": [
						{
							"number": "1.3.1",
							"heading": "逻辑函数的基本概念",
							"anchor": "sec-1.3.1",
							"html": "<ul><li>逻辑函数的自变量和函数值都只取 0 和 1，函数关系由输入组合与输出取值一一对应确定。</li><li>n 个变量的逻辑函数共有 2 的 n 次方种输入组合，函数就是给每种组合指定一个输出值。</li><li>两个逻辑函数相等，指对每一种输入组合两者的函数值都相同，而不是表达式形式相同。</li><li>变量在函数中的书写顺序必须固定，否则同一组取值会对应到不同的组合。</li></ul>"
						},
						{
							"number": "1.3.2",
							"heading": "逻辑函数的描述工具",
							"anchor": "sec-1.3.2",
							"html": "<ul><li>真值表把全部输入组合与对应输出逐行列出，直观完整，但变量增多时行数按 2 的 n 次方增长。</li><li>逻辑表达式用与、或、非等运算符连接变量，便于代数化简和门电路实现。</li><li>逻辑图用门符号和连线表示函数，与表达式可以互相转换。</li><li>卡诺图从图形上排列最小项，用于化简；波形图从时序上表示输出随输入的变化。</li><li>同一逻辑函数的各种描述方式可以互相转换，转换的共同依据是真值表。</li></ul>"
						},
						{
							"number": "1.3.3",
							"heading": "基本逻辑运算",
							"anchor": "sec-1.3.3",
							"html": "<ul><li>与运算在所有输入均为 1 时输出才为 1，相当于开关的串联。</li><li>或运算只要有一个输入为 1 输出即为 1，相当于开关的并联。</li><li>非运算对输入取反，输出与输入始终相反。</li><li>由三种基本运算可组合出与非、或非、异或、同或，异或在两输入相异时为 1，同或则相同为 1。</li><li>任何逻辑函数都能只用与、或、非表示，这三种运算构成完备集。</li></ul>\n<figure id=\"fig-sec-1.3.3-1\" data-fig=\"fig-sec-1.3.3-1\" data-sec=\"sec-1.3.3\" data-caption=\"与门、或门、非门、与非门的符号与表达式\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2ODAgMjEwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IuS4jumXqOOAgeaIlumXqOOAgemdnumXqOOAgeS4jumdnumXqOeahOespuWPt+S4juecn+WAvOWFs+ezuyI+Cgk8ZyBmaWxsPSJub25lIiBzdHJva2U9IiM1OGNjMDIiIHN0cm9rZS13aWR0aD0iMi40IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgoJCTxwYXRoIGQ9Ik00NiA1MmgzNGE0OCA0OCAwIDAgMSAwIDk2SDQ2eiIvPgoJCTxwYXRoIGQ9Ik0xNCA3NmgzMk0xNCAxMjRoMzJNMTI4IDEwMGgyOCIvPgoJCTxwYXRoIGQ9Ik0yMDIgNTJxNTggMCA5MCA0OC0zMiA0OC05MCA0OCAyMi00OCAwLTk2eiIvPgoJCTxwYXRoIGQ9Ik0xNzAgNzZoMzRNMTcwIDEyNGgzNE0yOTIgMTAwaDI2Ii8+CgkJPHBhdGggZD0iTTM1NiA2MGw1NCA0MC01NCA0MHoiLz4KCQk8Y2lyY2xlIGN4PSI0MjIiIGN5PSIxMDAiIHI9IjgiLz4KCQk8cGF0aCBkPSJNMzI2IDc2aDMwTTMyNiAxMjRoMzBNNDMwIDEwMGgyNCIvPgoJCTxwYXRoIGQ9Ik01MDggNTJoMzBhNDggNDggMCAwIDEgMCA5NmgtMzB6Ii8+CgkJPGNpcmNsZSBjeD0iNTk2IiBjeT0iMTAwIiByPSI4Ii8+CgkJPHBhdGggZD0iTTQ3NiA3NmgzMk00NzYgMTI0aDMyTTYwNCAxMDBoMjQiLz4KCTwvZz4KCTxnIGZpbGw9IiM4YjkzYTEiIGZvbnQtZmFtaWx5PSJTZWdvZSBVSSwgTWljcm9zb2Z0IFlhSGVpLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4KCQk8dGV4dCB4PSI4MCIgeT0iMTkyIj7kuI4gRj1BQjwvdGV4dD4KCQk8dGV4dCB4PSIyNDYiIHk9IjE5MiI+5oiWIEY9QStCPC90ZXh0PgoJCTx0ZXh0IHg9IjM5MiIgeT0iMTkyIj7pnZ4gRj1B4oCyPC90ZXh0PgoJCTx0ZXh0IHg9IjU1NiIgeT0iMTkyIj7kuI7pnZ4gRj0oQUIp4oCyPC90ZXh0PgoJCTx0ZXh0IHg9IjIyIiB5PSI3MCI+QTwvdGV4dD4KCQk8dGV4dCB4PSIyMiIgeT0iMTE4Ij5CPC90ZXh0PgoJCTx0ZXh0IHg9IjE3OCIgeT0iNzAiPkE8L3RleHQ+CgkJPHRleHQgeD0iMTc4IiB5PSIxMTgiPkI8L3RleHQ+CgkJPHRleHQgeD0iMzM0IiB5PSI3MCI+QTwvdGV4dD4KCQk8dGV4dCB4PSI0ODQiIHk9IjcwIj5BPC90ZXh0PgoJCTx0ZXh0IHg9IjQ4NCIgeT0iMTE4Ij5CPC90ZXh0PgoJPC9nPgo8L3N2Zz4K\" alt=\"与门、或门、非门、与非门的符号与表达式\" loading=\"lazy\"><figcaption>与门、或门、非门、与非门的符号与表达式</figcaption></figure>\n<figure id=\"fig-sec-1.3.3-2\" data-fig=\"fig-sec-1.3.3-2\" data-sec=\"sec-1.3.3\" data-caption=\"异或门与同或门的符号、表达式和真值表\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMjMwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IuW8guaIlumXqOS4juWQjOaIlumXqOeahOespuWPt+OAgeihqOi+vuW8j+WSjOecn+WAvOihqCI+CjxzdHlsZT4KLnN7ZmlsbDpub25lO3N0cm9rZTojNThjYzAyO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZH0KLnR7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweH0KLmJ7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo2MDB9Ci5te2ZpbGw6IzlhYTJiMTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEyLjVweH0KLmd7ZmlsbDpub25lO3N0cm9rZTojM2E0MjUwO3N0cm9rZS13aWR0aDoxLjJ9Ci5ib3h7ZmlsbDojMWIyMDI5O3N0cm9rZTojM2E0MjUwO3N0cm9rZS13aWR0aDoxLjV9Ci5obHtmaWxsOm5vbmU7c3Ryb2tlOiM1OGNjMDI7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWRhc2hhcnJheTo2IDR9Cjwvc3R5bGU+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxNDE4MjEiLz4KPHRleHQgeD0iMjQiIHk9IjI4IiBjbGFzcz0iYiI+5byC5oiW6Zeo5LiO5ZCM5oiW6ZeoPC90ZXh0Pgo8cmVjdCB4PSI0MCIgeT0iNzAiIHdpZHRoPSIxMTAiIGhlaWdodD0iNzAiIHJ4PSI2IiBjbGFzcz0iYm94Ii8+PHRleHQgeD0iOTUiIHk9IjExMiIgY2xhc3M9InQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPj0xPC90ZXh0Pgo8dGV4dCB4PSIyMCIgeT0iOTYiIGNsYXNzPSJ0Ij5BPC90ZXh0Pjx0ZXh0IHg9IjIwIiB5PSIxMjgiIGNsYXNzPSJ0Ij5CPC90ZXh0PjxsaW5lIHgxPSIzMCIgeTE9IjkyIiB4Mj0iNDAiIHkyPSI5MiIgY2xhc3M9InMiLz48bGluZSB4MT0iMzAiIHkxPSIxMjQiIHgyPSI0MCIgeTI9IjEyNCIgY2xhc3M9InMiLz4KPGxpbmUgeDE9IjE1MCIgeTE9IjEwNSIgeDI9IjE5MCIgeTI9IjEwNSIgY2xhc3M9InMiLz48dGV4dCB4PSIxOTYiIHk9IjEwOSIgY2xhc3M9InQiPkYgPSBB4oCyQiArIEFC4oCyID0gQSDiipUgQjwvdGV4dD4KPHJlY3QgeD0iNDAiIHk9IjE1NSIgd2lkdGg9IjExMCIgaGVpZ2h0PSI2MCIgcng9IjYiIGNsYXNzPSJib3giLz48dGV4dCB4PSI5NSIgeT0iMTkwIiBjbGFzcz0idCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+PTE8L3RleHQ+PGNpcmNsZSBjeD0iMTU2IiBjeT0iMTg1IiByPSI2IiBjbGFzcz0icyIvPgo8dGV4dCB4PSIyMCIgeT0iMTc2IiBjbGFzcz0idCI+QTwvdGV4dD48dGV4dCB4PSIyMCIgeT0iMjA0IiBjbGFzcz0idCI+QjwvdGV4dD48bGluZSB4MT0iMzAiIHkxPSIxNzIiIHgyPSI0MCIgeTI9IjE3MiIgY2xhc3M9InMiLz48bGluZSB4MT0iMzAiIHkxPSIyMDAiIHgyPSI0MCIgeTI9IjIwMCIgY2xhc3M9InMiLz4KPGxpbmUgeDE9IjE2MiIgeTE9IjE4NSIgeDI9IjE5MCIgeTI9IjE4NSIgY2xhc3M9InMiLz48dGV4dCB4PSIxOTYiIHk9IjE4OSIgY2xhc3M9InQiPkYgPSBBQiArIEHigLJC4oCyID0gQSDiipkgQjwvdGV4dD4KPHRleHQgeD0iMzkyIiB5PSI2MiIgY2xhc3M9Im0iPuecn+WAvOihqDwvdGV4dD4KPHJlY3QgeD0iMzgwIiB5PSI3MiIgd2lkdGg9IjIyMCIgaGVpZ2h0PSIxNDAiIHJ4PSIwIiBjbGFzcz0iZyIvPgo8bGluZSB4MT0iMzgwIiB5MT0iMTA0IiB4Mj0iNjAwIiB5Mj0iMTA0IiBjbGFzcz0iZyIvPjxsaW5lIHgxPSIzODAiIHkxPSIxMzYiIHgyPSI2MDAiIHkyPSIxMzYiIGNsYXNzPSJnIi8+PGxpbmUgeDE9IjM4MCIgeTE9IjE2OCIgeDI9IjYwMCIgeTI9IjE2OCIgY2xhc3M9ImciLz4KPGxpbmUgeDE9IjQzNiIgeTE9IjcyIiB4Mj0iNDM2IiB5Mj0iMjEyIiBjbGFzcz0iZyIvPjxsaW5lIHgxPSI0OTIiIHkxPSI3MiIgeDI9IjQ5MiIgeTI9IjIxMiIgY2xhc3M9ImciLz48bGluZSB4MT0iNTQ2IiB5MT0iNzIiIHgyPSI1NDYiIHkyPSIyMTIiIGNsYXNzPSJnIi8+Cjx0ZXh0IHg9IjQwOCIgeT0iOTIiIGNsYXNzPSJ0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BPC90ZXh0Pjx0ZXh0IHg9IjQ2NCIgeT0iOTIiIGNsYXNzPSJ0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5CPC90ZXh0Pjx0ZXh0IHg9IjUxOSIgeT0iOTIiIGNsYXNzPSJ0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7lvILmiJY8L3RleHQ+PHRleHQgeD0iNTczIiB5PSI5MiIgY2xhc3M9InQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPuWQjOaIljwvdGV4dD4KPHRleHQgeD0iNDA4IiB5PSIxMjQiIGNsYXNzPSJ0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4wPC90ZXh0Pjx0ZXh0IHg9IjQ2NCIgeT0iMTI0IiBjbGFzcz0idCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MDwvdGV4dD48dGV4dCB4PSI1MTkiIHk9IjEyNCIgY2xhc3M9InQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjA8L3RleHQ+PHRleHQgeD0iNTczIiB5PSIxMjQiIGNsYXNzPSJ0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xPC90ZXh0Pgo8dGV4dCB4PSI0MDgiIHk9IjE1NiIgY2xhc3M9InQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjA8L3RleHQ+PHRleHQgeD0iNDY0IiB5PSIxNTYiIGNsYXNzPSJ0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xPC90ZXh0Pjx0ZXh0IHg9IjUxOSIgeT0iMTU2IiBjbGFzcz0idCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTwvdGV4dD48dGV4dCB4PSI1NzMiIHk9IjE1NiIgY2xhc3M9InQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjA8L3RleHQ+Cjx0ZXh0IHg9IjQwOCIgeT0iMTg4IiBjbGFzcz0idCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTwvdGV4dD48dGV4dCB4PSI0NjQiIHk9IjE4OCIgY2xhc3M9InQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjA8L3RleHQ+PHRleHQgeD0iNTE5IiB5PSIxODgiIGNsYXNzPSJ0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xPC90ZXh0Pjx0ZXh0IHg9IjU3MyIgeT0iMTg4IiBjbGFzcz0idCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MDwvdGV4dD4KPHRleHQgeD0iNDA4IiB5PSIyMDgiIGNsYXNzPSJ0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xPC90ZXh0Pjx0ZXh0IHg9IjQ2NCIgeT0iMjA4IiBjbGFzcz0idCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTwvdGV4dD48dGV4dCB4PSI1MTkiIHk9IjIwOCIgY2xhc3M9InQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjA8L3RleHQ+PHRleHQgeD0iNTczIiB5PSIyMDgiIGNsYXNzPSJ0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xPC90ZXh0Pgo8L3N2Zz4K\" alt=\"异或门与同或门的符号、表达式和真值表\" loading=\"lazy\"><figcaption>异或门与同或门的符号、表达式和真值表</figcaption></figure>"
						},
						{
							"number": "1.3.4",
							"heading": "正逻辑、负逻辑、三态门",
							"anchor": "sec-1.3.4",
							"html": "<ul><li>正逻辑约定高电平为 1、低电平为 0，负逻辑约定相反，同一电路在两种约定下的功能不同。</li><li>正逻辑下的与门在负逻辑下起或门的作用，正逻辑的或门在负逻辑下起与门的作用。</li><li>三态门的输出除高、低电平外还有高阻态，高阻态下输出端与内部电路断开，相当于不接入。</li><li>三态门由使能端控制输出与否，多个三态门输出端并接时同一时刻只能有一个使能，否则发生总线冲突。</li></ul>\n<p class=\"pitfall\">易错：正、负逻辑改变的是电平与 0、1 的对应关系，门的实际电路并没有变，\"与门变或门\"只是描述方式的换算。</p>"
						}
					],
					"number": "1.3",
					"anchor": "sec-1.3",
					"html": ""
				},
				{
					"heading": "布尔代数",
					"lines": [
						"",
						"![三态门与总线连接方式](figures/tristate.svg)",
						""
					],
					"subs": [
						{
							"number": "1.4.1",
							"heading": "布尔代数的基本定律",
							"anchor": "sec-1.4.1",
							"html": "<ul><li>交换律、结合律与普通代数形式相同，分配律多出一条 A+BC=(A+B)(A+C)。</li><li>0-1 律给出变量与常量运算的结果，如 A·1=A、A+0=A、A·0=0、A+1=1。</li><li>重叠律为 A·A=A、A+A=A，互补律为 A·A′=0、A+A′=1。</li><li>反演律即狄摩根定理，(AB)′=A′+B′，(A+B)′=A′B′。</li><li>吸收律 A+AB=A、A+A′B=A+B 用来消去多余项或多余的变量。</li></ul>\n<figure id=\"fig-sec-1.4.1-1\" data-fig=\"fig-sec-1.4.1-1\" data-sec=\"sec-1.4.1\" data-caption=\"布尔代数常用公式\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMzA2IiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IuW4g+WwlOS7o+aVsOW4uOeUqOWFrOW8j+a4heWNlSI+CjxzdHlsZT4KLnN7ZmlsbDpub25lO3N0cm9rZTojNThjYzAyO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZH0KLnR7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweH0KLmJ7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo2MDB9Ci5te2ZpbGw6IzlhYTJiMTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEyLjVweH0KLmd7ZmlsbDpub25lO3N0cm9rZTojM2E0MjUwO3N0cm9rZS13aWR0aDoxLjJ9Ci5ke2ZpbGw6bm9uZTtzdHJva2U6IzNhNDI1MDtzdHJva2Utd2lkdGg6MS4yO3N0cm9rZS1kYXNoYXJyYXk6NSA1fQouYm94e2ZpbGw6IzFiMjAyOTtzdHJva2U6IzNhNDI1MDtzdHJva2Utd2lkdGg6MS41fQouY29kZXtmaWxsOiNlNmU4ZWU7Zm9udC1mYW1pbHk6IkNvbnNvbGFzIiwiQ291cmllciBOZXciLG1vbm9zcGFjZTtmb250LXNpemU6MTNweH0KPC9zdHlsZT4KPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzE0MTgyMSIvPgo8dGV4dCB4PSIyNCIgeT0iMzAiIGNsYXNzPSJiIj7luIPlsJTku6PmlbDluLjnlKjlhazlvI88L3RleHQ+CjxyZWN0IHg9IjEyIiB5PSI2OCIgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIiByeD0iMiIgZmlsbD0iIzU4Y2MwMiIvPgo8cmVjdCB4PSIxMiIgeT0iMTAwIiB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHJ4PSIyIiBmaWxsPSIjNThjYzAyIi8+CjxyZWN0IHg9IjEyIiB5PSIxMzIiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgcng9IjIiIGZpbGw9IiM1OGNjMDIiLz4KPHJlY3QgeD0iMTIiIHk9IjE2NCIgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIiByeD0iMiIgZmlsbD0iIzU4Y2MwMiIvPgo8cmVjdCB4PSIxMiIgeT0iMTk2IiB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHJ4PSIyIiBmaWxsPSIjNThjYzAyIi8+CjxyZWN0IHg9IjEyIiB5PSIyMjgiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgcng9IjIiIGZpbGw9IiM1OGNjMDIiLz4KPHJlY3QgeD0iMTIiIHk9IjI2MCIgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIiByeD0iMiIgZmlsbD0iIzU4Y2MwMiIvPgo8dGV4dCB4PSIzNiIgeT0iODAiIGNsYXNzPSJ0Ij5BICsgQiA9IEIgKyBBPC90ZXh0Pgo8dGV4dCB4PSIzNiIgeT0iMTEyIiBjbGFzcz0idCI+QSDCtyBCID0gQiDCtyBBPC90ZXh0Pgo8dGV4dCB4PSIzNiIgeT0iMTQ0IiBjbGFzcz0idCI+QSArIEEgPSBBPC90ZXh0Pgo8dGV4dCB4PSIzNiIgeT0iMTc2IiBjbGFzcz0idCI+QSDCtyBBID0gQTwvdGV4dD4KPHRleHQgeD0iMzYiIHk9IjIwOCIgY2xhc3M9InQiPkEgKyBB4oCyID0gMTwvdGV4dD4KPHRleHQgeD0iMzYiIHk9IjI0MCIgY2xhc3M9InQiPkEgwrcgQeKAsiA9IDA8L3RleHQ+Cjx0ZXh0IHg9IjM2IiB5PSIyNzIiIGNsYXNzPSJ0Ij4oQSArIEIp4oCyID0gQeKAsiDCtyBC4oCyPC90ZXh0Pgo8cmVjdCB4PSIzMTYiIHk9IjY4IiB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHJ4PSIyIiBmaWxsPSIjNThjYzAyIi8+CjxyZWN0IHg9IjMxNiIgeT0iMTAwIiB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHJ4PSIyIiBmaWxsPSIjNThjYzAyIi8+CjxyZWN0IHg9IjMxNiIgeT0iMTMyIiB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHJ4PSIyIiBmaWxsPSIjNThjYzAyIi8+CjxyZWN0IHg9IjMxNiIgeT0iMTY0IiB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHJ4PSIyIiBmaWxsPSIjNThjYzAyIi8+CjxyZWN0IHg9IjMxNiIgeT0iMTk2IiB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHJ4PSIyIiBmaWxsPSIjNThjYzAyIi8+CjxyZWN0IHg9IjMxNiIgeT0iMjI4IiB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHJ4PSIyIiBmaWxsPSIjNThjYzAyIi8+CjxyZWN0IHg9IjMxNiIgeT0iMjYwIiB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHJ4PSIyIiBmaWxsPSIjNThjYzAyIi8+Cjx0ZXh0IHg9IjM0MCIgeT0iODAiIGNsYXNzPSJ0Ij5BICsgMCA9IEHvvIxBIMK3IDEgPSBBPC90ZXh0Pgo8dGV4dCB4PSIzNDAiIHk9IjExMiIgY2xhc3M9InQiPkEgKyAxID0gMe+8jEEgwrcgMCA9IDA8L3RleHQ+Cjx0ZXh0IHg9IjM0MCIgeT0iMTQ0IiBjbGFzcz0idCI+QSArIEFCID0gQTwvdGV4dD4KPHRleHQgeD0iMzQwIiB5PSIxNzYiIGNsYXNzPSJ0Ij5BICsgQeKAskIgPSBBICsgQjwvdGV4dD4KPHRleHQgeD0iMzQwIiB5PSIyMDgiIGNsYXNzPSJ0Ij5BKEIgKyBDKSA9IEFCICsgQUM8L3RleHQ+Cjx0ZXh0IHg9IjM0MCIgeT0iMjQwIiBjbGFzcz0idCI+QSArIEJDID0gKEEgKyBCKShBICsgQyk8L3RleHQ+Cjx0ZXh0IHg9IjM0MCIgeT0iMjcyIiBjbGFzcz0idCI+KEFCKeKAsiA9IEHigLIgKyBC4oCyPC90ZXh0Pgo8L3N2Zz4K\" alt=\"布尔代数常用公式\" loading=\"lazy\"><figcaption>布尔代数常用公式</figcaption></figure>"
						},
						{
							"number": "1.4.2",
							"heading": "布尔代数运算的基本规则",
							"anchor": "sec-1.4.2",
							"html": "<ul><li>代入规则指等式中某个变量在所有出现处同时用同一逻辑函数替换，等式仍然成立。</li><li>反演规则把与、或互换，0、1 互换，原变量与反变量互换，由原函数得到反函数。</li><li>对偶规则把与、或互换，0、1 互换，变量保持不变，得到对偶式；原式成立则对偶式也成立。</li><li>使用反演和对偶规则时必须保持原来的运算顺序，必要时加括号，否则得到的式子不等价。</li></ul>"
						},
						{
							"number": "1.4.3",
							"heading": "用布尔代数简化逻辑函数",
							"anchor": "sec-1.4.3",
							"html": "<ul><li>化简的目标是减少乘积项数目和每项的变量数，从而减少门数和门的输入端数。</li><li>并项法利用 A+A′=1 合并两项，吸收法利用 A+AB=A 消去被包含的项。</li><li>消去法利用 A+A′B=A+B 去掉多余变量，配项法通过乘 (A+A′) 增加可合并的项。</li><li>化简结果不唯一，不同路径得到的式子可能都最简，最终要按可用门的类型选择。</li><li>代数化简依赖观察，变量较多时难以判断是否已最简，此时改用卡诺图更可靠。</li></ul>\n<p class=\"pitfall\">易错：反演规则与对偶规则都做与、或互换和 0、1 互换，区别只在于是否把原变量换成反变量。</p>"
						}
					],
					"number": "1.4",
					"anchor": "sec-1.4",
					"html": "<figure id=\"fig-sec-1.4-1\" data-fig=\"fig-sec-1.4-1\" data-sec=\"sec-1.4\" data-caption=\"三态门与总线连接方式\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMjMwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IuS4ieaAgemXqOS4juaAu+e6v+i/nuaOpeaWueW8jyI+CjxzdHlsZT4KLnN7ZmlsbDpub25lO3N0cm9rZTojNThjYzAyO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZH0KLnR7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweH0KLmJ7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo2MDB9Ci5te2ZpbGw6IzlhYTJiMTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEyLjVweH0KLmd7ZmlsbDpub25lO3N0cm9rZTojM2E0MjUwO3N0cm9rZS13aWR0aDoxLjJ9Ci5ib3h7ZmlsbDojMWIyMDI5O3N0cm9rZTojM2E0MjUwO3N0cm9rZS13aWR0aDoxLjV9Ci5obHtmaWxsOm5vbmU7c3Ryb2tlOiM1OGNjMDI7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWRhc2hhcnJheTo2IDR9Cjwvc3R5bGU+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxNDE4MjEiLz4KPHRleHQgeD0iMjQiIHk9IjI4IiBjbGFzcz0iYiI+5LiJ5oCB6Zeo5LiO5oC757q/PC90ZXh0Pgo8bGluZSB4MT0iNTAiIHkxPSI5MCIgeDI9IjkwIiB5Mj0iOTAiIGNsYXNzPSJzIi8+PGxpbmUgeDE9IjUwIiB5MT0iMTQwIiB4Mj0iOTAiIHkyPSIxNDAiIGNsYXNzPSJzIi8+CjxwYXRoIGQ9Ik05MCA3MCBsNzAgNDUgbC03MCA0NSB6IiBjbGFzcz0iYm94Ii8+Cjx0ZXh0IHg9IjMwIiB5PSI5NCIgY2xhc3M9InQiPkE8L3RleHQ+PHRleHQgeD0iMzAiIHk9IjE0NCIgY2xhc3M9InQiPkVOPC90ZXh0Pgo8bGluZSB4MT0iMTYwIiB5MT0iMTE1IiB4Mj0iMjEwIiB5Mj0iMTE1IiBjbGFzcz0icyIvPjx0ZXh0IHg9IjIxNiIgeT0iMTE5IiBjbGFzcz0idCI+RjwvdGV4dD4KPHRleHQgeD0iNDgiIHk9IjE4OCIgY2xhc3M9Im0iPkVOID0gMSDml7YgRiA9IEHvvJtFTiA9IDAg5pe2IEYgPSDpq5jpmLs8L3RleHQ+CjxsaW5lIHgxPSIzMDAiIHkxPSI2MiIgeDI9IjMwMCIgeTI9IjIwMCIgY2xhc3M9ImciLz4KPHRleHQgeD0iMzMwIiB5PSI3MiIgY2xhc3M9ImIiPuWkmuS4quS4ieaAgemXqOaMguWQjOS4gOe7hOaAu+e6vzwvdGV4dD4KPGxpbmUgeDE9IjM0MCIgeTE9IjExMCIgeDI9IjYwMCIgeTI9IjExMCIgY2xhc3M9InMiLz48bGluZSB4MT0iMzQwIiB5MT0iMTUwIiB4Mj0iNjAwIiB5Mj0iMTUwIiBjbGFzcz0icyIvPgo8cmVjdCB4PSIzNTAiIHk9IjkwIiB3aWR0aD0iNTUiIGhlaWdodD0iMzAiIHJ4PSI2IiBjbGFzcz0iYm94Ii8+PHRleHQgeD0iMzc3IiB5PSIxMTAiIGNsYXNzPSJ0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7pl6gxPC90ZXh0Pgo8cmVjdCB4PSI0MzAiIHk9IjkwIiB3aWR0aD0iNTUiIGhlaWdodD0iMzAiIHJ4PSI2IiBjbGFzcz0iYm94Ii8+PHRleHQgeD0iNDU3IiB5PSIxMTAiIGNsYXNzPSJ0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7pl6gyPC90ZXh0Pgo8cmVjdCB4PSI1MTAiIHk9IjkwIiB3aWR0aD0iNTUiIGhlaWdodD0iMzAiIHJ4PSI2IiBjbGFzcz0iYm94Ii8+PHRleHQgeD0iNTM3IiB5PSIxMTAiIGNsYXNzPSJ0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7pl6gzPC90ZXh0Pgo8dGV4dCB4PSI0NzAiIHk9IjE0MCIgY2xhc3M9Im0iIHRleHQtYW5jaG9yPSJtaWRkbGUiPuaAu+e6vzwvdGV4dD4KPHRleHQgeD0iNDcwIiB5PSIxODAiIGNsYXNzPSJtIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7ku7vkuIDml7bliLvlj6rlhYHorrjkuIDkuKrpl6jpqbHliqg8L3RleHQ+Cjwvc3ZnPgo=\" alt=\"三态门与总线连接方式\" loading=\"lazy\"><figcaption>三态门与总线连接方式</figcaption></figure>"
				},
				{
					"heading": "卡诺图",
					"lines": [
						""
					],
					"subs": [
						{
							"number": "1.5.1",
							"heading": "卡诺图的结构与特点",
							"anchor": "sec-1.5.1",
							"html": "<ul><li>卡诺图把真值表按格雷码顺序排成方格阵，n 个变量对应 2 的 n 次方个方格。</li><li>相邻方格只有一个变量取值不同，这一性质由行标、列标采用格雷码排列保证。</li><li>图形上首尾相接的方格、四角的方格也互为相邻，可以按圆柱面和球面来理解。</li><li>每个方格对应一个最小项，格内填 0 或 1 表示该输入组合下的函数值。</li></ul>"
						},
						{
							"number": "1.5.2",
							"heading": "用卡诺图简化逻辑函数",
							"anchor": "sec-1.5.2",
							"html": "<ul><li>化简时把相邻的 1 格圈成矩形，圈内格数必须是 2 的整数次幂，圈要尽量大、数目尽量少。</li><li>每个圈合并后消去取值发生变化的变量，只保留圈内取值不变的变量，取 1 写原变量，取 0 写反变量。</li><li>圈与圈允许重叠，同一格可被多个圈覆盖，但每个圈至少要有一个格不被其他圈覆盖。</li><li>卡诺图全部为 1 时结果为 1，没有 1 格时结果为 0，这两种情形不必再圈。</li><li>变量多于四个时卡诺图格子增多、相邻关系难以辨认，手算化简一般不再使用。</li></ul>\n<figure id=\"fig-sec-1.5.2-1\" data-fig=\"fig-sec-1.5.2-1\" data-sec=\"sec-1.5.2\" data-caption=\"三变量卡诺图，圈组后得到 A′B′+BC\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NjAgMzEwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IuS4ieWPmOmHj+WNoeivuuWbvu+8jDEg5qC85Li65pyA5bCP6aG5IDDjgIEx44CBM+OAgTfvvIzlnIjnu4TlvpfliLAgQeKAskLigLIg5LiOIEJDIj4KCTxnIGZvbnQtZmFtaWx5PSJTZWdvZSBVSSwgTWljcm9zb2Z0IFlhSGVpLCBzYW5zLXNlcmlmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4KCQk8dGV4dCB4PSIyMzAiIHk9IjI0IiBmaWxsPSIjNThjYzAyIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iNjAwIj7kuInlj5jph4/ljaHor7rlm77vvIhDIOWIhuWIl++8jEFCIOWIhuihjO+8iTwvdGV4dD4KCQk8ZyBmaWxsPSIjOWFhMmIxIiBmb250LXNpemU9IjEzIj4KCQkJPHRleHQgeD0iOTAiIHk9IjU2Ij5BQiBcIEM8L3RleHQ+CgkJCTx0ZXh0IHg9IjIwMCIgeT0iNTYiPjA8L3RleHQ+CgkJCTx0ZXh0IHg9IjMyMCIgeT0iNTYiPjE8L3RleHQ+CgkJCTx0ZXh0IHg9IjkwIiB5PSI5MiI+MDA8L3RleHQ+CgkJCTx0ZXh0IHg9IjkwIiB5PSIxMzYiPjAxPC90ZXh0PgoJCQk8dGV4dCB4PSI5MCIgeT0iMTgwIj4xMTwvdGV4dD4KCQkJPHRleHQgeD0iOTAiIHk9IjIyNCI+MTA8L3RleHQ+CgkJPC9nPgoJCTxnIGZpbGw9IiNlNmU4ZWUiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtd2VpZ2h0PSI2MDAiPgoJCQk8dGV4dCB4PSIyMDAiIHk9IjkyIj4xPC90ZXh0Pjx0ZXh0IHg9IjMyMCIgeT0iOTIiPjE8L3RleHQ+CgkJCTx0ZXh0IHg9IjIwMCIgeT0iMTM2Ij4wPC90ZXh0Pjx0ZXh0IHg9IjMyMCIgeT0iMTM2Ij4xPC90ZXh0PgoJCQk8dGV4dCB4PSIyMDAiIHk9IjE4MCI+MDwvdGV4dD48dGV4dCB4PSIzMjAiIHk9IjE4MCI+MTwvdGV4dD4KCQkJPHRleHQgeD0iMjAwIiB5PSIyMjQiPjA8L3RleHQ+PHRleHQgeD0iMzIwIiB5PSIyMjQiPjA8L3RleHQ+CgkJPC9nPgoJCTxnIGZpbGw9IiM2YjcyODAiIGZvbnQtc2l6ZT0iMTAiPgoJCQk8dGV4dCB4PSIyMDAiIHk9IjEwNiI+bTA8L3RleHQ+PHRleHQgeD0iMzIwIiB5PSIxMDYiPm0xPC90ZXh0PgoJCQk8dGV4dCB4PSIyMDAiIHk9IjE1MCI+bTI8L3RleHQ+PHRleHQgeD0iMzIwIiB5PSIxNTAiPm0zPC90ZXh0PgoJCQk8dGV4dCB4PSIyMDAiIHk9IjE5NCI+bTY8L3RleHQ+PHRleHQgeD0iMzIwIiB5PSIxOTQiPm03PC90ZXh0PgoJCQk8dGV4dCB4PSIyMDAiIHk9IjIzOCI+bTQ8L3RleHQ+PHRleHQgeD0iMzIwIiB5PSIyMzgiPm01PC90ZXh0PgoJCTwvZz4KCTwvZz4KCTxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzNhNDI1MCIgc3Ryb2tlLXdpZHRoPSIxLjQiPgoJCTxyZWN0IHg9IjE0MCIgeT0iNjQiIHdpZHRoPSIyNDAiIGhlaWdodD0iMTgwIi8+CgkJPHBhdGggZD0iTTE0MCAxMDhoMjQwTTE0MCAxNTJoMjQwTTE0MCAxOTZoMjQwIi8+CgkJPHBhdGggZD0iTTI2MCA2NHYxODAiLz4KCTwvZz4KCTxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzU4Y2MwMiIgc3Ryb2tlLXdpZHRoPSIyLjQiPgoJCTxyZWN0IHg9IjE0OCIgeT0iNzIiIHdpZHRoPSIyMjQiIGhlaWdodD0iMjgiIHJ4PSIxNCIvPgoJCTxyZWN0IHg9IjI2NiIgeT0iMTE2IiB3aWR0aD0iMTA4IiBoZWlnaHQ9IjcyIiByeD0iMTQiLz4KCTwvZz4KCTxnIGZvbnQtZmFtaWx5PSJTZWdvZSBVSSwgTWljcm9zb2Z0IFlhSGVpLCBzYW5zLXNlcmlmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4KCQk8dGV4dCB4PSIyMzAiIHk9IjI3OCIgZmlsbD0iI2U2ZThlZSIgZm9udC1zaXplPSIxNiI+RiA9IEHigLJC4oCyICsgQkM8L3RleHQ+CgkJPHRleHQgeD0iMjMwIiB5PSIzMDAiIGZpbGw9IiM5YWEyYjEiIGZvbnQtc2l6ZT0iMTIiPuS4iumdouaoquWciOaYryBB4oCyQuKAsu+8jOWPs+S+p+erluWciOaYryBCQzwvdGV4dD4KCTwvZz4KPC9zdmc+Cg==\" alt=\"三变量卡诺图，圈组后得到 A′B′+BC\" loading=\"lazy\"><figcaption>三变量卡诺图，圈组后得到 A′B′+BC</figcaption></figure>\n<p class=\"pitfall\">易错：圈内格数只能是 1、2、4、8 这类 2 的幂，圈成 3 格或 6 格不能合并成一个乘积项。</p>"
						},
						{
							"number": "1.5.3",
							"heading": "多变量卡诺图",
							"anchor": "sec-1.5.3",
							"html": "<ul><li>五变量卡诺图由两个四变量卡诺图叠成两层，同一位置的上下两格是相邻的，中轴左右对称的格也相邻。</li><li>变量数超过四个后，相邻关系不能再靠平面上的位置直接看出，圈的划分容易漏项或重复。</li><li>五变量仍可手工化简，但通常先按一个变量拆成两个四变量函数，再分别化简后合并。</li><li>变量更多时改用列表法或由计算机辅助化简，手工卡诺图只用于变量较少、需要直观判断的场合。</li><li>卡诺图适合人眼找相邻项，不便于写成算法，EDA 工具一般不用它做逻辑优化。</li></ul>\n<p class=\"pitfall\">易错：五变量卡诺图的上下两层要按同一位置配对看，把两层当作互不相关的两张图会漏掉可合并的最小项。</p>"
						}
					],
					"number": "1.5",
					"anchor": "sec-1.5",
					"html": ""
				},
				{
					"heading": "数字集成电路",
					"lines": [
						""
					],
					"subs": [
						{
							"number": "1.6.1",
							"heading": "集成电路的制造技术类型",
							"anchor": "sec-1.6.1",
							"html": "<ul><li>双极型集成电路以晶体管为基本器件，工作速度快、驱动能力强，但功耗较大。</li><li>MOS 集成电路以场效应管为基本器件，输入阻抗高、功耗低、便于提高集成度。</li><li>CMOS 电路由 NMOS 与 PMOS 互补构成，静态功耗很小，是目前数字集成电路的主流工艺。</li><li>TTL 属于双极型电路，曾是中小规模数字电路的主要类型，其电平标准至今影响接口设计。</li></ul>\n<figure id=\"fig-sec-1.6.1-1\" data-fig=\"fig-sec-1.6.1-1\" data-sec=\"sec-1.6.1\" data-caption=\"TTL 与 CMOS 两类数字集成电路的特点对比\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMjg0IiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IlRUTCDkuI4gQ01PUyDkuKTnsbvmlbDlrZfpm4bmiJDnlLXot6/nmoTnibnngrnlr7nmr5QiPgo8c3R5bGU+Ci5ze2ZpbGw6bm9uZTtzdHJva2U6IzU4Y2MwMjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmR9Ci50e2ZpbGw6I2U2ZThlZTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHh9Ci5ie2ZpbGw6I2U2ZThlZTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NjAwfQoubXtmaWxsOiM5YWEyYjE7Zm9udC1mYW1pbHk6IlNlZ29lIFVJIiwiTWljcm9zb2Z0IFlhSGVpIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMi41cHh9Ci5ne2ZpbGw6bm9uZTtzdHJva2U6IzNhNDI1MDtzdHJva2Utd2lkdGg6MS4yfQouZHtmaWxsOm5vbmU7c3Ryb2tlOiMzYTQyNTA7c3Ryb2tlLXdpZHRoOjEuMjtzdHJva2UtZGFzaGFycmF5OjUgNX0KLmJveHtmaWxsOiMxYjIwMjk7c3Ryb2tlOiMzYTQyNTA7c3Ryb2tlLXdpZHRoOjEuNX0KLmNvZGV7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJDb25zb2xhcyIsIkNvdXJpZXIgTmV3Iixtb25vc3BhY2U7Zm9udC1zaXplOjEzcHh9Cjwvc3R5bGU+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxNDE4MjEiLz4KPHRleHQgeD0iMjQiIHk9IjI4IiBjbGFzcz0iYiI+5Lik57G75pWw5a2X6ZuG5oiQ55S16Lev5bel6Im6PC90ZXh0Pgo8cmVjdCB4PSIyNCIgeT0iNTAiIHdpZHRoPSIyODQiIGhlaWdodD0iMjAwIiByeD0iOCIgY2xhc3M9ImJveCIvPgo8cmVjdCB4PSIzMzIiIHk9IjUwIiB3aWR0aD0iMjg0IiBoZWlnaHQ9IjIwMCIgcng9IjgiIGNsYXNzPSJib3giLz4KPHRleHQgeD0iNDQiIHk9IjgyIiBjbGFzcz0iYiI+5Y+M5p6B5Z6LIFRUTDwvdGV4dD4KPHRleHQgeD0iNDQiIHk9IjExNCIgY2xhc3M9InQiPuS7o+ihqO+8mjc0TFPjgIE3NEY8L3RleHQ+Cjx0ZXh0IHg9IjQ0IiB5PSIxNDQiIGNsYXNzPSJ0Ij7nlLXmupDvvJo1IFY8L3RleHQ+Cjx0ZXh0IHg9IjQ0IiB5PSIxNzQiIGNsYXNzPSJ0Ij7pgJ/luqbvvJrlv6s8L3RleHQ+Cjx0ZXh0IHg9IjQ0IiB5PSIyMDQiIGNsYXNzPSJ0Ij7pqbHliqjog73lipvvvJrlvLo8L3RleHQ+Cjx0ZXh0IHg9IjQ0IiB5PSIyMzQiIGNsYXNzPSJ0Ij7lip/ogJfvvJrovoPlpKc8L3RleHQ+Cjx0ZXh0IHg9IjM1MiIgeT0iODIiIGNsYXNzPSJiIj5NT1PvvIhDTU9T77yJPC90ZXh0Pgo8dGV4dCB4PSIzNTIiIHk9IjExNCIgY2xhc3M9InQiPuS7o+ihqO+8mjQwMDDjgIE3NEhDPC90ZXh0Pgo8dGV4dCB4PSIzNTIiIHk9IjE0NCIgY2xhc3M9InQiPueUtea6kO+8mjPvvZ4xOCBWPC90ZXh0Pgo8dGV4dCB4PSIzNTIiIHk9IjE3NCIgY2xhc3M9InQiPumAn+W6pu+8muS4reetiTwvdGV4dD4KPHRleHQgeD0iMzUyIiB5PSIyMDQiIGNsYXNzPSJ0Ij7ovpPlhaXpmLvmipfvvJrpq5g8L3RleHQ+Cjx0ZXh0IHg9IjM1MiIgeT0iMjM0IiBjbGFzcz0idCI+6Z2Z5oCB5Yqf6ICX77ya5p6B5L2OPC90ZXh0Pgo8L3N2Zz4K\" alt=\"TTL 与 CMOS 两类数字集成电路的特点对比\" loading=\"lazy\"><figcaption>TTL 与 CMOS 两类数字集成电路的特点对比</figcaption></figure>"
						},
						{
							"number": "1.6.2",
							"heading": "集成电路的封装类型",
							"anchor": "sec-1.6.2",
							"html": "<ul><li>封装为芯片提供机械支撑、引脚引出和散热通路，并隔离外界环境的影响。</li><li>双列直插式封装在两侧引出引脚，便于插装和手工焊接，适合实验与教学使用。</li><li>表面贴装封装把引脚做成短小的翼形或球形，直接焊在印制板表面，体积小、便于自动化生产。</li><li>封装形式决定引脚数、散热能力和安装工艺，选型时要与电路板的装配方式配套。</li></ul>"
						},
						{
							"number": "1.6.3",
							"heading": "集成电路的规模类型",
							"anchor": "sec-1.6.3",
							"html": "<ul><li>集成度按每片芯片所含门数或元件数划分，分为小规模、中规模、大规模和超大规模集成电路。</li><li>小规模电路门数很少，中规模介于小规模与大规模之间，大规模以上的单片可容纳成千上万个门。</li><li>规模越大，单片完成的功能越复杂，实现单位功能的成本与功耗越低。</li><li>课程中常用的门电路和触发器多属小规模，数据选择器、译码器一类属中规模。</li></ul>"
						},
						{
							"number": "1.6.4",
							"heading": "集成电路的使用特性",
							"anchor": "sec-1.6.4",
							"html": "<ul><li>输入、输出电平有规定范围，输入电压落在不确定区时输出可能出错。</li><li>扇出系数表示一个输出端能带动的同类输入端数目，超过扇出会使电平达不到规定值。</li><li>平均传输延迟时间衡量信号通过门所需的时间，它限制电路可以工作的最高频率。</li><li>使用时要注意电源电压范围和功耗上限，速度与功耗往往互相制约。</li><li>未使用的输入端不能悬空，应按逻辑功能接到固定电平，防止干扰引起误动作。</li></ul>\n<p class=\"pitfall\">易错：扇出指一个输出端能带动的输入端数目，扇入指一个门本身具有的输入端数目，两者不能混用。</p>"
						},
						{
							"number": "1.6.5",
							"heading": "数字集成电路的型号",
							"anchor": "sec-1.6.5",
							"html": "<ul><li>型号由前缀、编号和后缀组成，前缀多为厂标，编号含产品系列与品种，后缀注明温度等级和封装。</li><li>同一功能的 74 系列与 54 系列引脚相同，54 系列的工作温度范围更宽，用于要求更严的场合。</li><li>编号中的字母表示工艺与电平，LS 为低功耗肖特基，HC 为高速 CMOS，HCT 为可与 TTL 电平兼容的高速 CMOS。</li><li>同系列不同工艺的器件速度、功耗和电平不同，替换时要核对电源电压、输入电平和扇出能力。</li><li>选用时先按功能查品种号，再按速度、功耗、封装确定系列与后缀，不能只看型号数字相同就互换。</li></ul>\n<p class=\"pitfall\">易错：74LS00 与 74HC00 的功能和引脚相同，但电平标准与速度不同，直接互换可能超出输入电平允许范围。</p>"
						}
					],
					"number": "1.6",
					"anchor": "sec-1.6",
					"html": ""
				}
			]
		},
		{
			"id": "c2",
			"label": "第二章",
			"title": "第二章 组合逻辑",
			"modules": [
				"M3"
			],
			"sections": [
				{
					"heading": "组合逻辑分析",
					"lines": [
						""
					],
					"subs": [
						{
							"number": "2.1.1",
							"heading": "逐级电平推导法",
							"anchor": "sec-2.1.1",
							"html": "<ul><li>从输入端给定的电平出发，按各级门的类型逐个算出中间节点电平，一直推到输出端。</li><li>推导时把输入写成 0 和 1，按与门全 1 出 1、或门有 1 出 1、非门取反的规则逐级推进。</li><li>中间节点应逐个标注结果，不能跳过某级直接写输出，否则出错后无法定位在哪一级。</li><li>一次推导只得到一组输入对应的输出，要掌握电路功能必须对全部或有关键组合重复进行。</li></ul>"
						},
						{
							"number": "2.1.2",
							"heading": "列写布尔表达式法",
							"anchor": "sec-2.1.2",
							"html": "<ul><li>从输入端向输出端逐级写出每个门的输出表达式，最终得到输出与输入之间的布尔关系式。</li><li>表达式写完后可用布尔代数化简，从化简结果直接看出电路实现的逻辑功能。</li><li>多输入门和带反相输入的门，其表达式要保留括号以标明运算顺序。</li><li>表达式法给出的是函数形式，变量较多时化简工作量随之增大。</li></ul>"
						},
						{
							"number": "2.1.3",
							"heading": "数字波形图分析法",
							"anchor": "sec-2.1.3",
							"html": "<ul><li>把各输入波形按同一时间轴对齐，再按各级门的功能逐段确定输出波形。</li><li>分析时以输入发生变化的时刻为分界，把时间轴划成若干区间，在每个区间内输入电平保持不变。</li><li>组合电路的输出只取决于当时的输入，波形上输出应随输入变化，不带记忆。</li><li>忽略门延迟时输出边沿与输入边沿对齐，计入延迟时输出要滞后一段时间，窄脉冲还可能被削掉。</li></ul>"
						},
						{
							"number": "2.1.4",
							"heading": "列写逻辑电路真值表法",
							"anchor": "sec-2.1.4",
							"html": "<ul><li>按输入变量个数列出全部输入组合，逐行求出输出值，得到完整的真值表。</li><li>由真值表可以直接判断电路功能，也便于改写成标准与或式或最小项表达式。</li><li>变量较多时真值表行数增长很快，通常先化简表达式再列关键行。</li><li>真值表与逐级推导、表达式化简的结果应当一致，可用来互相校验。</li></ul>"
						},
						{
							"number": "2.1.5",
							"heading": "组合逻辑中的竞争冒险",
							"anchor": "sec-2.1.5",
							"html": "<ul><li>同一信号经不同路径到达同一个门时延迟不同，这种时间差称为竞争。</li><li>竞争使输出出现违背逻辑功能的窄脉冲，这种尖峰称为冒险；静态冒险表现为本应不变的输出出现毛刺。</li><li>判断静态冒险可看表达式在某种输入取值下是否能化成 A+A′ 或 A·A′ 的形式。</li><li>消除冒险可在表达式中增加冗余项，也可在输出端加滤波电容，或用选通脉冲避开过渡时刻。</li></ul>\n<p class=\"pitfall\">易错：有竞争不一定产生冒险，只有竞争的结果在输出端表现为错误尖峰时才算冒险。</p>"
						},
						{
							"number": "2.1.6",
							"heading": "用卡诺图判断冒险",
							"anchor": "sec-2.1.6",
							"html": "<ul><li>与或式的每个与项在卡诺图上对应一个圈，两圈相切而切点没有被第三个圈覆盖时，该处可能存在静态冒险。</li><li>相切处取值发生变化的那一个变量，就是可能引起冒险的变量，其余变量在切点处保持不变。</li><li>消除办法是在相切处补一个冗余圈，把两个圈连起来，对应在表达式里增加一个冗余与项。</li><li>冗余项不改变函数的逻辑值，只在与项交接的瞬间提供维持输出所需的通路。</li><li>卡诺图法与代数法判断的结论应一致，卡诺图更适合变量较多时直接看出相切位置。</li></ul>\n<p class=\"pitfall\">易错：两圈重叠或切点已被其他圈覆盖时不会产生冒险，把所有相切都当成冒险会加上不必要的冗余项。</p>"
						}
					],
					"number": "2.1",
					"anchor": "sec-2.1",
					"html": ""
				},
				{
					"heading": "组合逻辑设计",
					"lines": [
						"",
						"![A 与 A 非相加产生静态 1 冒险的波形](figures/hazard.svg)",
						""
					],
					"subs": [
						{
							"number": "2.2.1",
							"heading": "组合逻辑设计步骤",
							"anchor": "sec-2.2.1",
							"html": "<ul><li>明确输入变量和输出变量，并为每个变量的两种状态规定 0、1 的含义。</li><li>列真值表，把设计要求逐条转成输入组合与输出取值的对应关系。</li><li>由真值表写出表达式并化简，再按实际可用的门类型变换成便于实现的式子。</li><li>画出逻辑图后要复核门数、输入端数和扇出，必要时检查是否存在竞争冒险。</li></ul>\n<figure id=\"fig-sec-2.2.1-1\" data-fig=\"fig-sec-2.2.1-1\" data-sec=\"sec-2.2.1\" data-caption=\"组合逻辑设计的四个步骤\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMzMwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9Iue7hOWQiOmAu+i+keiuvuiuoeeahOWbm+S4quatpemqpCI+CjxzdHlsZT4KLnN7ZmlsbDpub25lO3N0cm9rZTojNThjYzAyO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZH0KLnR7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweH0KLmJ7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo2MDB9Ci5te2ZpbGw6IzlhYTJiMTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEyLjVweH0KLmd7ZmlsbDpub25lO3N0cm9rZTojM2E0MjUwO3N0cm9rZS13aWR0aDoxLjJ9Ci5ke2ZpbGw6bm9uZTtzdHJva2U6IzNhNDI1MDtzdHJva2Utd2lkdGg6MS4yO3N0cm9rZS1kYXNoYXJyYXk6NSA1fQouYm94e2ZpbGw6IzFiMjAyOTtzdHJva2U6IzNhNDI1MDtzdHJva2Utd2lkdGg6MS41fQouY29kZXtmaWxsOiNlNmU4ZWU7Zm9udC1mYW1pbHk6IkNvbnNvbGFzIiwiQ291cmllciBOZXciLG1vbm9zcGFjZTtmb250LXNpemU6MTNweH0KPC9zdHlsZT48ZGVmcz48bWFya2VyIGlkPSJhciIgbWFya2VyV2lkdGg9IjgiIG1hcmtlckhlaWdodD0iOCIgcmVmWD0iNiIgcmVmWT0iMyIgb3JpZW50PSJhdXRvIj48cGF0aCBkPSJNMCAwIEw2IDMgTDAgNiB6IiBmaWxsPSIjNThjYzAyIi8+PC9tYXJrZXI+PC9kZWZzPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMTQxODIxIi8+Cjx0ZXh0IHg9IjI0IiB5PSIyOCIgY2xhc3M9ImIiPue7hOWQiOmAu+i+keiuvuiuoea1geeoizwvdGV4dD4KPHJlY3QgeD0iOTAiIHk9IjQ4IiB3aWR0aD0iMzMwIiBoZWlnaHQ9IjQ0IiByeD0iNyIgY2xhc3M9ImJveCIvPgo8dGV4dCB4PSIxMDYiIHk9Ijc2IiBjbGFzcz0idCI+MeOAgOmAu+i+keaKveixoe+8muWumui+k+WFpei+k+WHuuS4jiAwLzEg5ZCr5LmJPC90ZXh0Pgo8cmVjdCB4PSI5MCIgeT0iMTE2IiB3aWR0aD0iMzMwIiBoZWlnaHQ9IjQ0IiByeD0iNyIgY2xhc3M9ImJveCIvPgo8dGV4dCB4PSIxMDYiIHk9IjE0NCIgY2xhc3M9InQiPjLjgIDliJfnnJ/lgLzooag8L3RleHQ+CjxyZWN0IHg9IjkwIiB5PSIxODQiIHdpZHRoPSIzMzAiIGhlaWdodD0iNDQiIHJ4PSI3IiBjbGFzcz0iYm94Ii8+Cjx0ZXh0IHg9IjEwNiIgeT0iMjEyIiBjbGFzcz0idCI+M+OAgOWNoeivuuWbvuaIluS7o+aVsOWMlueugDwvdGV4dD4KPHJlY3QgeD0iOTAiIHk9IjI1MiIgd2lkdGg9IjMzMCIgaGVpZ2h0PSI0NCIgcng9IjciIGNsYXNzPSJib3giLz4KPHRleHQgeD0iMTA2IiB5PSIyODAiIGNsYXNzPSJ0Ij4044CA5Y+Y5o2i5Li65Y+v55So6Zeo5bm255S76YC76L6R5Zu+PC90ZXh0Pgo8bGluZSB4MT0iMjU1IiB5MT0iOTIiIHgyPSIyNTUiIHkyPSIxMTIiIGNsYXNzPSJzIiBtYXJrZXItZW5kPSJ1cmwoI2FyKSIvPgo8bGluZSB4MT0iMjU1IiB5MT0iMTYwIiB4Mj0iMjU1IiB5Mj0iMTgwIiBjbGFzcz0icyIgbWFya2VyLWVuZD0idXJsKCNhcikiLz4KPGxpbmUgeDE9IjI1NSIgeTE9IjIyOCIgeDI9IjI1NSIgeTI9IjI0OCIgY2xhc3M9InMiIG1hcmtlci1lbmQ9InVybCgjYXIpIi8+Cjx0ZXh0IHg9IjQ0MCIgeT0iMTQwIiBjbGFzcz0ibSI+5ZCr5Lu75oSP6aG55pe25YWI5oyJIMOXPC90ZXh0Pgo8dGV4dCB4PSI0NDAiIHk9IjE2MCIgY2xhc3M9Im0iPuWhq+ihqOWGjeWciOe7hDwvdGV4dD4KPC9zdmc+Cg==\" alt=\"组合逻辑设计的四个步骤\" loading=\"lazy\"><figcaption>组合逻辑设计的四个步骤</figcaption></figure>"
						},
						{
							"number": "2.2.2",
							"heading": "逻辑问题的描述",
							"anchor": "sec-2.2.2",
							"html": "<ul><li>描述逻辑问题的关键是把文字条件转成变量及取值约定，约定不同会得到不同的真值表。</li><li>\"多数同意\"\"至少两个为 1\"这类条件可以直接按输入中 1 的个数填表。</li><li>输入组合中不会出现的情形应在描述阶段指出，它们在真值表中对应任意项。</li><li>同一个问题可能有多种描述方式，化简完成后要回到原始条件逐条核对，防止遗漏。</li></ul>"
						},
						{
							"number": "2.2.3",
							"heading": "利用任意项的逻辑设计",
							"anchor": "sec-2.2.3",
							"html": "<ul><li>任意项是输入端不会出现的组合，其函数值既可填 0 也可填 1，常记作 d 或 ×。</li><li>在卡诺图中可把任意项当作 1 参与圈组，使圈画得更大，表达式更简单。</li><li>对化简没有帮助的任意项就不圈，最终电路在这些组合下的输出无需关心。</li><li>只有确认输入组合不可能出现时才能使用任意项，输入可能出现时随意取值会使电路出错。</li></ul>\n<p class=\"pitfall\">易错：任意项可以任意取值，但前提是该输入组合确实不会发生；把可能出现的组合当任意项化简，得到的电路在正常输入下就会出错。</p>"
						}
					],
					"number": "2.2",
					"anchor": "sec-2.2",
					"html": "<figure id=\"fig-sec-2.2-1\" data-fig=\"fig-sec-2.2-1\" data-sec=\"sec-2.2\" data-caption=\"A 与 A 非相加产生静态 1 冒险的波形\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMjQwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IkEg5LiOIEEg6Z2e55u45Yqg5Lqn55Sf6Z2Z5oCBIDEg5YaS6Zmp55qE5rOi5b2iIj4KPHN0eWxlPgouc3tmaWxsOm5vbmU7c3Ryb2tlOiM1OGNjMDI7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kfQoudHtmaWxsOiNlNmU4ZWU7Zm9udC1mYW1pbHk6IlNlZ29lIFVJIiwiTWljcm9zb2Z0IFlhSGVpIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNHB4fQouYntmaWxsOiNlNmU4ZWU7Zm9udC1mYW1pbHk6IlNlZ29lIFVJIiwiTWljcm9zb2Z0IFlhSGVpIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjYwMH0KLm17ZmlsbDojOWFhMmIxO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTIuNXB4fQouZ3tmaWxsOm5vbmU7c3Ryb2tlOiMzYTQyNTA7c3Ryb2tlLXdpZHRoOjEuMn0KLmJveHtmaWxsOiMxYjIwMjk7c3Ryb2tlOiMzYTQyNTA7c3Ryb2tlLXdpZHRoOjEuNX0KLmhse2ZpbGw6bm9uZTtzdHJva2U6IzU4Y2MwMjtzdHJva2Utd2lkdGg6MjtzdHJva2UtZGFzaGFycmF5OjYgNH0KPC9zdHlsZT4KPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzE0MTgyMSIvPgo8dGV4dCB4PSIyNCIgeT0iMjgiIGNsYXNzPSJiIj7nq57kuonlhpLpmak8L3RleHQ+CjxsaW5lIHgxPSI2MCIgeTE9IjcwIiB4Mj0iNjAiIHkyPSIyMDAiIGNsYXNzPSJnIi8+PGxpbmUgeDE9IjYwIiB5MT0iMTkwIiB4Mj0iNjAwIiB5Mj0iMTkwIiBjbGFzcz0iZyIvPgo8dGV4dCB4PSIyMCIgeT0iODUiIGNsYXNzPSJ0Ij5BPC90ZXh0Pjx0ZXh0IHg9IjIwIiB5PSIxMzUiIGNsYXNzPSJ0Ij5B4oCyPC90ZXh0Pjx0ZXh0IHg9IjIwIiB5PSIxODUiIGNsYXNzPSJ0Ij5GPC90ZXh0Pgo8cGF0aCBkPSJNODAgODAgaDgwIHY0MCBoODAgdi00MCBoODAgdjQwIGg4MCB2LTQwIGg4MCB2NDAgaDgwIiBjbGFzcz0icyIvPgo8cGF0aCBkPSJNODAgMTMwIHY0MCBoODAgdi00MCBoODAgdjQwIGg4MCB2LTQwIGg4MCB2NDAgaDgwIHYtNDAgaDgwIiBjbGFzcz0icyIgb3BhY2l0eT0iMC43NSIvPgo8bGluZSB4MT0iODAiIHkxPSIxNzUiIHgyPSI2MDAiIHkyPSIxNzUiIGNsYXNzPSJzIi8+CjxwYXRoIGQ9Ik04MCAxNzUgaDEwMCB2LTIyIGg4IHYyMiBoMTAwIHYtMjIgaDggdjIyIGgxMDAgdi0yMiBoOCB2MjIgaDEwMCB2LTIyIGg4IHYyMiBoOTYiIGNsYXNzPSJzIi8+CjxsaW5lIHgxPSIxODAiIHkxPSIxNDAiIHgyPSIxODgiIHkyPSIyMDAiIGNsYXNzPSJobCIvPgo8dGV4dCB4PSIxOTYiIHk9IjIxNCIgY2xhc3M9Im0iPueqhOiEieWGsjwvdGV4dD4KPHRleHQgeD0iNDEwIiB5PSI0MCIgY2xhc3M9Im0iPueQhuaDsyBGID0gQSArIEHigLIgPSAxPC90ZXh0Pgo8L3N2Zz4K\" alt=\"A 与 A 非相加产生静态 1 冒险的波形\" loading=\"lazy\"><figcaption>A 与 A 非相加产生静态 1 冒险的波形</figcaption></figure>"
				},
				{
					"heading": "组合逻辑电路的等价变换",
					"lines": [
						""
					],
					"subs": [
						{
							"number": "2.3.1",
							"heading": "狄摩根定理的应用",
							"anchor": "sec-2.3.1",
							"html": "<ul><li>狄摩根定理把乘积的反写成各反变量之和，(AB)′=A′+B′，把和的反写成各反变量之积。</li><li>连续使用定理可以把表达式中成层的与、或运算整体取反，从而实现门类型的替换。</li><li>应用时必须对整个被取反的子表达式取反，只对其中一部分取反会改变函数。</li><li>该定理是把与或式改写为与非式、或非式的直接依据。</li></ul>"
						},
						{
							"number": "2.3.2",
							"heading": "与非门、或非门作为通用元件",
							"anchor": "sec-2.3.2",
							"html": "<ul><li>与非门可以单独实现非、与、或三种基本运算，把输入并接即得非门，再取反即得与门。</li><li>或非门同样能单独构成任何逻辑函数，二者都属于通用门。</li><li>用与非门实现与或式时，先对表达式两次取反，再用狄摩根定理展开成与非形式。</li><li>通用门便于统一器件类型、减少备件种类，实际电路常只使用一种门完成设计。</li></ul>\n<figure id=\"fig-sec-2.3.2-1\" data-fig=\"fig-sec-2.3.2-1\" data-sec=\"sec-2.3.2\" data-caption=\"与或式经两次取反改成与非-与非结构\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMzMwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IuS4juaIluW8j+eUqOS4pOe6p+S4jumdnumXqOWunueOsCI+CjxzdHlsZT4KLnN7ZmlsbDpub25lO3N0cm9rZTojNThjYzAyO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZH0KLnR7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweH0KLmJ7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo2MDB9Ci5te2ZpbGw6IzlhYTJiMTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEyLjVweH0KLmd7ZmlsbDpub25lO3N0cm9rZTojM2E0MjUwO3N0cm9rZS13aWR0aDoxLjJ9Cjwvc3R5bGU+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxNDE4MjEiLz4KPHRleHQgeD0iMjQiIHk9IjMwIiBjbGFzcz0iYiI+5LiO5oiW5byP6L2s5LiO6Z2eLeS4jumdnjwvdGV4dD4KPHRleHQgeD0iMjQiIHk9IjY0IiBjbGFzcz0idCI+RiA9IEFCICsgQ0Q8L3RleHQ+Cjx0ZXh0IHg9IjI0IiB5PSI5MiIgY2xhc3M9InQiPj0gKCAoQUIp4oCyIMK3IChDRCnigLIgKeKAsjwvdGV4dD4KPHRleHQgeD0iMjQiIHk9IjEyMCIgY2xhc3M9Im0iPuWFiOS4pOasoeWPluWPje+8jOWGjeeUqOWPjea8lOW+i+aLhuW8gOS4remXtOeahOaIljwvdGV4dD4KCjxwYXRoIGQ9Ik0xMjIgMTQ4IGgxNiBhMjQgMjQgMCAwIDEgMCA0OCBoLTE2IHoiIGNsYXNzPSJzIi8+CjxjaXJjbGUgY3g9IjE4MiIgY3k9IjE3MiIgcj0iNCIgZmlsbD0iIzE0MTgyMSIgc3Ryb2tlPSIjNThjYzAyIiBzdHJva2Utd2lkdGg9IjIiLz4KPGxpbmUgeDE9IjkwIiB5MT0iMTYyIiB4Mj0iMTIyIiB5Mj0iMTYyIiBjbGFzcz0icyIvPgo8bGluZSB4MT0iOTAiIHkxPSIxODIiIHgyPSIxMjIiIHkyPSIxODIiIGNsYXNzPSJzIi8+Cjx0ZXh0IHg9IjgyIiB5PSIxNjYiIGNsYXNzPSJ0IiB0ZXh0LWFuY2hvcj0iZW5kIj5BPC90ZXh0Pgo8dGV4dCB4PSI4MiIgeT0iMTg2IiBjbGFzcz0idCIgdGV4dC1hbmNob3I9ImVuZCI+QjwvdGV4dD4KPGxpbmUgeDE9IjE4NiIgeTE9IjE3MiIgeDI9IjIxMCIgeTI9IjE3MiIgY2xhc3M9InMiLz4KPGxpbmUgeDE9IjIxMCIgeTE9IjE3MiIgeDI9IjIxMCIgeTI9IjIwNSIgY2xhc3M9InMiLz4KPGxpbmUgeDE9IjIxMCIgeTE9IjIwNSIgeDI9IjM0MiIgeTI9IjIwNSIgY2xhc3M9InMiLz4KCjxwYXRoIGQ9Ik0xMjIgMjM4IGgxNiBhMjQgMjQgMCAwIDEgMCA0OCBoLTE2IHoiIGNsYXNzPSJzIi8+CjxjaXJjbGUgY3g9IjE4MiIgY3k9IjI2MiIgcj0iNCIgZmlsbD0iIzE0MTgyMSIgc3Ryb2tlPSIjNThjYzAyIiBzdHJva2Utd2lkdGg9IjIiLz4KPGxpbmUgeDE9IjkwIiB5MT0iMjUyIiB4Mj0iMTIyIiB5Mj0iMjUyIiBjbGFzcz0icyIvPgo8bGluZSB4MT0iOTAiIHkxPSIyNzIiIHgyPSIxMjIiIHkyPSIyNzIiIGNsYXNzPSJzIi8+Cjx0ZXh0IHg9IjgyIiB5PSIyNTYiIGNsYXNzPSJ0IiB0ZXh0LWFuY2hvcj0iZW5kIj5DPC90ZXh0Pgo8dGV4dCB4PSI4MiIgeT0iMjc2IiBjbGFzcz0idCIgdGV4dC1hbmNob3I9ImVuZCI+RDwvdGV4dD4KPGxpbmUgeDE9IjE4NiIgeTE9IjI2MiIgeDI9IjIzMCIgeTI9IjI2MiIgY2xhc3M9InMiLz4KPGxpbmUgeDE9IjIzMCIgeTE9IjI2MiIgeDI9IjIzMCIgeTI9IjIyOSIgY2xhc3M9InMiLz4KPGxpbmUgeDE9IjIzMCIgeTE9IjIyOSIgeDI9IjM0MiIgeTI9IjIyOSIgY2xhc3M9InMiLz4KCjxwYXRoIGQ9Ik0zNDIgMTkzIGgxNiBhMjQgMjQgMCAwIDEgMCA0OCBoLTE2IHoiIGNsYXNzPSJzIi8+CjxjaXJjbGUgY3g9IjQwMiIgY3k9IjIxNyIgcj0iNCIgZmlsbD0iIzE0MTgyMSIgc3Ryb2tlPSIjNThjYzAyIiBzdHJva2Utd2lkdGg9IjIiLz4KPGxpbmUgeDE9IjQwNiIgeTE9IjIxNyIgeDI9IjQ0OCIgeTI9IjIxNyIgY2xhc3M9InMiLz4KPHRleHQgeD0iNDU2IiB5PSIyMjEiIGNsYXNzPSJ0Ij5GPC90ZXh0Pgo8L3N2Zz4K\" alt=\"与或式经两次取反改成与非-与非结构\" loading=\"lazy\"><figcaption>与或式经两次取反改成与非-与非结构</figcaption></figure>"
						},
						{
							"number": "2.3.3",
							"heading": "利用与非门／或非门进行等价变换",
							"anchor": "sec-2.3.3",
							"html": "<ul><li>与或式转与非式的一般做法是先两次求反，再把中间的或项化成与非项。</li><li>或与式转或非式的步骤与与或式转与非式对称：两次求反，再用狄摩根定理把外层的积化成或非形式。</li><li>变换后级数往往增加，门数、输入端数和传输延迟要一起权衡，不能只看形式整齐。</li><li>用与非门作非门时多余输入端可并接或接高电平，接低电平会使输出恒为 1。</li></ul>"
						},
						{
							"number": "2.3.4",
							"heading": "逻辑函数的「与或非」门实现",
							"anchor": "sec-2.3.4",
							"html": "<ul><li>与或非门一次完成先与、再或、最后取反的运算，输出即为与或非形式的函数值。</li><li>用与或非门实现时，可先求反函数的最简与或式，允许任意项参与化简，再整体取反得到输出。</li><li>与或非门能减少级数，但输入端数目固定，变量较多时要拆分成多片或扩展输入。</li><li>与或非是一种门的完整功能，若按与门后接或非门的两级结构估计级数和延迟，结果会偏大。</li></ul>\n<p class=\"pitfall\">易错：与或非门输出的是\"与或\"结果的反，直接按与或式接数据端会得到反函数，需要再取反或改接反变量。</p>"
						}
					],
					"number": "2.3",
					"anchor": "sec-2.3",
					"html": ""
				},
				{
					"heading": "数据选择器与分配器",
					"lines": [
						""
					],
					"subs": [
						{
							"number": "2.4.1",
							"heading": "数据选择器",
							"anchor": "sec-2.4.1",
							"html": "<ul><li>数据选择器在地址码控制下从多路输入中选出一路送到输出，又称多路开关。</li><li>n 位地址码可以选择 2 的 n 次方路输入，地址码取值与输入路号一一对应。</li><li>数据选择器带使能端，多片并联并用使能端控制，可以扩展输入路数。</li><li>数据选择器还能实现逻辑函数：变量接地址端，按真值表把各数据端接 0 或 1 即可。</li></ul>\n<figure id=\"fig-sec-2.4.1-1\" data-fig=\"fig-sec-2.4.1-1\" data-sec=\"sec-2.4.1\" data-caption=\"四选一数据选择器的数据端、地址端与输出\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MDAgMzAwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IuWbm+mAieS4gOaVsOaNrumAieaLqeWZqOeahOi+k+WFpeOAgeWcsOWdgOerr+S4jui+k+WHuiI+Cgk8ZyBmaWxsPSIjMWMxZjI2IiBzdHJva2U9IiM1OGNjMDIiIHN0cm9rZS13aWR0aD0iMi4yIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj4KCQk8cGF0aCBkPSJNMTUwIDQ2aDIyNmwtNDIgOTQgNDIgOTRIMTUweiIvPgoJPC9nPgoJPGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOGI5M2ExIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+CgkJPHBhdGggZD0iTTcwIDc4aDgwTTcwIDEyMmg4ME03MCAxNjZoODBNNzAgMjEwaDgwIi8+CgkJPHBhdGggZD0iTTIxNCAyMzR2NDRNMjkwIDIzNHY0NCIvPgoJCTxwYXRoIGQ9Ik00MTggMTQwaDUyIi8+Cgk8L2c+Cgk8ZyBmb250LWZhbWlseT0iU2Vnb2UgVUksIE1pY3Jvc29mdCBZYUhlaSwgc2Fucy1zZXJpZiIgZmlsbD0iIzlhYTJiMSIgZm9udC1zaXplPSIxMyI+CgkJPHRleHQgeD0iMzYiIHk9IjgyIj5EMDwvdGV4dD4KCQk8dGV4dCB4PSIzNiIgeT0iMTI2Ij5EMTwvdGV4dD4KCQk8dGV4dCB4PSIzNiIgeT0iMTcwIj5EMjwvdGV4dD4KCQk8dGV4dCB4PSIzNiIgeT0iMjE0Ij5EMzwvdGV4dD4KCQk8dGV4dCB4PSIyMTQiIHk9IjI5MiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UzE8L3RleHQ+CgkJPHRleHQgeD0iMjkwIiB5PSIyOTIiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlMwPC90ZXh0PgoJCTx0ZXh0IHg9IjQ0NiIgeT0iMTMyIj5ZPC90ZXh0PgoJPC9nPgoJPGcgZm9udC1mYW1pbHk9IlNlZ29lIFVJLCBNaWNyb3NvZnQgWWFIZWksIHNhbnMtc2VyaWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPgoJCTx0ZXh0IHg9IjI2NCIgeT0iMTMyIiBmaWxsPSIjZTZlOGVlIiBmb250LXNpemU9IjE1IiBmb250LXdlaWdodD0iNjAwIj7lm5vpgInkuIA8L3RleHQ+CgkJPHRleHQgeD0iMjY0IiB5PSIxNTQiIGZpbGw9IiNlNmU4ZWUiIGZvbnQtc2l6ZT0iMTUiIGZvbnQtd2VpZ2h0PSI2MDAiPk1VWDwvdGV4dD4KCQk8dGV4dCB4PSIyNTAiIHk9IjM2IiBmaWxsPSIjOWFhMmIxIiBmb250LXNpemU9IjEyIj5TMVMwIOmAieS4reS4gOi3r+mAgeWIsCBZPC90ZXh0PgoJPC9nPgo8L3N2Zz4K\" alt=\"四选一数据选择器的数据端、地址端与输出\" loading=\"lazy\"><figcaption>四选一数据选择器的数据端、地址端与输出</figcaption></figure>"
						},
						{
							"number": "2.4.2",
							"heading": "数据分配器",
							"anchor": "sec-2.4.2",
							"html": "<ul><li>数据分配器把一路输入数据按地址码送到 2 的 n 次方个输出端中的某一个。</li><li>未被选中的输出端保持无效电平，同一时刻只有一路输出跟随输入数据变化。</li><li>数据分配器与数据选择器功能相反，两者配合可实现信号的分时传送。</li><li>数据分配器可看作地址译码器加数据选通，地址决定哪一路导通。</li></ul>\n<p class=\"pitfall\">易错：数据选择器是\"多入一出\"，数据分配器是\"一入多出\"，两者的地址端作用方向相反。</p>"
						},
						{
							"number": "2.4.3",
							"heading": "用数据选择器实现逻辑函数",
							"anchor": "sec-2.4.3",
							"html": "<ul><li>地址端接 n 个输入变量时，数据端按真值表接 0 或 1，就能实现这 n 个变量的任意函数。</li><li>函数变量比地址多一个时，把多出的变量接到数据端，按它取 0 或 1 选接 0、1、原变量或反变量。</li><li>实现步骤是先写出函数的最小项表达式，再与选择器的输出表达式逐项对照，确定各数据端的接法。</li><li>未用到的数据端要接固定电平，不能悬空，否则输出可能落在不确定状态。</li><li>多片选择器用使能端分级，可以扩展地址位数，实现变量更多的函数。</li></ul>\n<p class=\"pitfall\">易错：把变量接到地址端和数据端时顺序要对齐，地址码对应的最小项编号与接线不符，得到的函数整体错位。</p>"
						}
					],
					"number": "2.4",
					"anchor": "sec-2.4",
					"html": ""
				},
				{
					"heading": "译码器和编码器",
					"lines": [
						""
					],
					"subs": [
						{
							"number": "2.5.1",
							"heading": "译码器",
							"anchor": "sec-2.5.1",
							"html": "<ul><li>译码器把 n 位二进制代码译成 2 的 n 次方个输出中唯一有效的一路，常用于地址选择。</li><li>二进制译码器的每个输出对应一个最小项，输出有效电平分高有效和低有效两种。</li><li>利用使能端可以把多片译码器级联，扩展成位数更多的译码电路。</li><li>译码器配合与非门或或门可以构成组合逻辑电路，输出就是若干最小项之和。</li><li>数字显示用的七段译码器把 BCD 码译成段控制信号，属于代码变换型译码器。</li></ul>\n<figure id=\"fig-sec-2.5.1-1\" data-fig=\"fig-sec-2.5.1-1\" data-sec=\"sec-2.5.1\" data-caption=\"三线八线译码器的输入输出关系\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMjcwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IuS4iee6v+WFq+e6v+ivkeeggeWZqOeahOi+k+WFpei+k+WHuuWFs+ezuyI+CjxzdHlsZT4KLnN7ZmlsbDpub25lO3N0cm9rZTojNThjYzAyO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZH0KLnR7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweH0KLmJ7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo2MDB9Ci5te2ZpbGw6IzlhYTJiMTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEyLjVweH0KLmd7ZmlsbDpub25lO3N0cm9rZTojM2E0MjUwO3N0cm9rZS13aWR0aDoxLjJ9Ci5ib3h7ZmlsbDojMWIyMDI5O3N0cm9rZTojM2E0MjUwO3N0cm9rZS13aWR0aDoxLjV9Ci5obHtmaWxsOm5vbmU7c3Ryb2tlOiM1OGNjMDI7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWRhc2hhcnJheTo2IDR9Cjwvc3R5bGU+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxNDE4MjEiLz4KPHRleHQgeD0iMjQiIHk9IjI4IiBjbGFzcz0iYiI+My04IOivkeeggeWZqDwvdGV4dD4KPHJlY3QgeD0iMTIwIiB5PSI1NSIgd2lkdGg9IjE1MCIgaGVpZ2h0PSIxOTAiIHJ4PSI2IiBjbGFzcz0iYm94Ii8+Cjx0ZXh0IHg9IjEzMiIgeT0iOTAiIGNsYXNzPSJ0Ij5BMjwvdGV4dD48dGV4dCB4PSIxMzIiIHk9IjEyNSIgY2xhc3M9InQiPkExPC90ZXh0Pjx0ZXh0IHg9IjEzMiIgeT0iMTYwIiBjbGFzcz0idCI+QTA8L3RleHQ+Cjx0ZXh0IHg9IjE1MCIgeT0iOTAiIGNsYXNzPSJ0Ij4xMDE8L3RleHQ+CjxsaW5lIHgxPSIxMTUiIHkxPSI4NCIgeDI9IjEyMCIgeTI9Ijg0IiBjbGFzcz0icyIvPjxsaW5lIHgxPSIxMTUiIHkxPSIxMTkiIHgyPSIxMjAiIHkyPSIxMTkiIGNsYXNzPSJzIi8+PGxpbmUgeDE9IjExNSIgeTE9IjE1NCIgeDI9IjEyMCIgeTI9IjE1NCIgY2xhc3M9InMiLz4KPHRleHQgeD0iMzAwIiB5PSI3NiIgY2xhc3M9InQiPlkwPC90ZXh0Pjx0ZXh0IHg9IjMwMCIgeT0iOTgiIGNsYXNzPSJ0Ij5ZMTwvdGV4dD48dGV4dCB4PSIzMDAiIHk9IjEyMCIgY2xhc3M9InQiPlkyPC90ZXh0Pjx0ZXh0IHg9IjMwMCIgeT0iMTQyIiBjbGFzcz0idCI+WTM8L3RleHQ+PHRleHQgeD0iMzAwIiB5PSIxNjQiIGNsYXNzPSJ0Ij5ZNDwvdGV4dD48dGV4dCB4PSIzMDAiIHk9IjE4NiIgY2xhc3M9InQiPlk1PC90ZXh0Pjx0ZXh0IHg9IjMwMCIgeT0iMjA4IiBjbGFzcz0idCI+WTY8L3RleHQ+PHRleHQgeD0iMzAwIiB5PSIyMzAiIGNsYXNzPSJ0Ij5ZNzwvdGV4dD4KPGxpbmUgeDE9IjI3MCIgeTE9IjcxIiB4Mj0iMjk0IiB5Mj0iNzEiIGNsYXNzPSJzIi8+PGxpbmUgeDE9IjI3MCIgeTE9IjkzIiB4Mj0iMjk0IiB5Mj0iOTMiIGNsYXNzPSJzIi8+PGxpbmUgeDE9IjI3MCIgeTE9IjExNSIgeDI9IjI5NCIgeTI9IjExNSIgY2xhc3M9InMiLz48bGluZSB4MT0iMjcwIiB5MT0iMTM3IiB4Mj0iMjk0IiB5Mj0iMTM3IiBjbGFzcz0icyIvPjxsaW5lIHgxPSIyNzAiIHkxPSIxNTkiIHgyPSIyOTQiIHkyPSIxNTkiIGNsYXNzPSJzIi8+PGxpbmUgeDE9IjI3MCIgeTE9IjE4MSIgeDI9IjI5NCIgeTI9IjE4MSIgY2xhc3M9InMiLz48bGluZSB4MT0iMjcwIiB5MT0iMjAzIiB4Mj0iMjk0IiB5Mj0iMjAzIiBjbGFzcz0icyIvPjxsaW5lIHgxPSIyNzAiIHkxPSIyMjUiIHgyPSIyOTQiIHkyPSIyMjUiIGNsYXNzPSJzIi8+CjxyZWN0IHg9IjI4NiIgeT0iMTcxIiB3aWR0aD0iNjAiIGhlaWdodD0iMjQiIHJ4PSI0IiBjbGFzcz0iaGwiLz4KPHRleHQgeD0iMzkwIiB5PSI5MCIgY2xhc3M9Im0iPui+k+WFpSBBMkExQTAgPSAxMDE8L3RleHQ+Cjx0ZXh0IHg9IjM5MCIgeT0iMTE4IiBjbGFzcz0ibSI+5Y+q5pyJIFk1IOacieaViDwvdGV4dD4KPHRleHQgeD0iMzkwIiB5PSIxNDYiIGNsYXNzPSJtIj7kvY7nlLXlubPmnInmlYjml7YgWTUgPSAwPC90ZXh0Pgo8dGV4dCB4PSIzOTAiIHk9IjE3NCIgY2xhc3M9Im0iPuWFtuS9mei+k+WHuuS4uiAxPC90ZXh0Pgo8L3N2Zz4K\" alt=\"三线八线译码器的输入输出关系\" loading=\"lazy\"><figcaption>三线八线译码器的输入输出关系</figcaption></figure>\n<figure id=\"fig-sec-2.5.1-2\" data-fig=\"fig-sec-2.5.1-2\" data-sec=\"sec-2.5.1\" data-caption=\"七段数码管的 a 到 g 段与显示译码器的对应关系\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMzYwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IuS4g+auteaVsOeggeeuoeeahCBhIOWIsCBnIOauteS4juaVsOWtlyA1IOeahOeCueS6ruaDheWGtSI+CjxzdHlsZT4KLnR7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTNweH0KLmJ7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo2MDB9Ci5te2ZpbGw6IzlhYTJiMTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEyLjVweH0KPC9zdHlsZT4KPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzE0MTgyMSIvPgo8dGV4dCB4PSIyNCIgeT0iMjgiIGNsYXNzPSJiIj7kuIPmrrXmlbDnoIHnrqHkuI7mmL7npLror5HnoIE8L3RleHQ+CjxyZWN0IHg9IjUwIiB5PSI1MCIgd2lkdGg9IjIzMCIgaGVpZ2h0PSIyODAiIHJ4PSIxNiIgZmlsbD0iIzFiMjAyOSIgc3Ryb2tlPSIjM2E0MjUwIiBzdHJva2Utd2lkdGg9IjEuNSIvPgo8cmVjdCB4PSI5MCIgeT0iNjQiIHdpZHRoPSIxNDAiIGhlaWdodD0iMTQiIHJ4PSI0IiBmaWxsPSIjNThjYzAyIi8+CjxyZWN0IHg9IjIzMCIgeT0iODAiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxMDAiIHJ4PSI0IiBmaWxsPSIjMmMzMTNiIi8+CjxyZWN0IHg9IjIzMCIgeT0iMTk0IiB3aWR0aD0iMTQiIGhlaWdodD0iMTAwIiByeD0iNCIgZmlsbD0iIzU4Y2MwMiIvPgo8cmVjdCB4PSI5MCIgeT0iMzAwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0IiByeD0iNCIgZmlsbD0iIzU4Y2MwMiIvPgo8cmVjdCB4PSI2NiIgeT0iMTk0IiB3aWR0aD0iMTQiIGhlaWdodD0iMTAwIiByeD0iNCIgZmlsbD0iIzJjMzEzYiIvPgo8cmVjdCB4PSI2NiIgeT0iODAiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxMDAiIHJ4PSI0IiBmaWxsPSIjNThjYzAyIi8+CjxyZWN0IHg9IjkwIiB5PSIxODYiIHdpZHRoPSIxNDAiIGhlaWdodD0iMTQiIHJ4PSI0IiBmaWxsPSIjNThjYzAyIi8+Cjx0ZXh0IHg9IjE2MCIgeT0iNDAiIGNsYXNzPSJtIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5hPC90ZXh0Pgo8dGV4dCB4PSIyNTYiIHk9IjEzNCIgY2xhc3M9Im0iPmI8L3RleHQ+Cjx0ZXh0IHg9IjI1NiIgeT0iMjQ4IiBjbGFzcz0ibSI+YzwvdGV4dD4KPHRleHQgeD0iMTYwIiB5PSIzNDgiIGNsYXNzPSJtIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5kPC90ZXh0Pgo8dGV4dCB4PSI0MCIgeT0iMjQ4IiBjbGFzcz0ibSI+ZTwvdGV4dD4KPHRleHQgeD0iNDAiIHk9IjEzNCIgY2xhc3M9Im0iPmY8L3RleHQ+Cjx0ZXh0IHg9IjI1NiIgeT0iMTk2IiBjbGFzcz0ibSI+ZzwvdGV4dD4KPHRleHQgeD0iMzMwIiB5PSI4MCIgY2xhc3M9ImIiPuaYvuekuuivkeeggeWZqDwvdGV4dD4KPHRleHQgeD0iMzMwIiB5PSIxMTgiIGNsYXNzPSJtIj44NDIxIOeggei/m++8jOS4g+auteaOp+WItuWHujwvdGV4dD4KPHRleHQgeD0iMzMwIiB5PSIxNTAiIGNsYXNzPSJtIj7lhbHpmLTmjqXms5XvvJrmrrXnoIEgMSDngrnkuq48L3RleHQ+Cjx0ZXh0IHg9IjMzMCIgeT0iMTgyIiBjbGFzcz0ibSI+5YWx6Ziz5o6l5rOV77ya5q6156CBIDAg54K55LquPC90ZXh0Pgo8dGV4dCB4PSIzMzAiIHk9IjIxNCIgY2xhc3M9Im0iPuaVsOWtlyA1IOeCueS6riBh44CBY+OAgWTjgIFm44CBZzwvdGV4dD4KPHRleHQgeD0iMzMwIiB5PSIyNDYiIGNsYXNzPSJtIj7lj6borr7nga3pm7bkuI7or5Xnga/mjqfliLbnq688L3RleHQ+Cjwvc3ZnPgo=\" alt=\"七段数码管的 a 到 g 段与显示译码器的对应关系\" loading=\"lazy\"><figcaption>七段数码管的 a 到 g 段与显示译码器的对应关系</figcaption></figure>"
						},
						{
							"number": "2.5.2",
							"heading": "编码器",
							"anchor": "sec-2.5.2",
							"html": "<ul><li>编码器把多路输入中有效的一路编成二进制代码输出，是译码的逆过程。</li><li>普通编码器要求同一时刻只有一个输入有效，同时有多个输入有效时输出没有确定含义。</li><li>优先编码器为各输入规定优先级，允许多个输入同时有效，输出对应级别最高的那一路。</li><li>编码器的输入路数不一定等于 2 的整数次幂，多余的输入码组按无效码处理。</li></ul>\n<p class=\"pitfall\">易错：译码器的输出是\"一路有效、其余无效\"，编码器的输入也必须保证唯一有效，两者对有效路数的要求不能混。</p>\n<figure id=\"fig-sec-2.5.2-1\" data-fig=\"fig-sec-2.5.2-1\" data-sec=\"sec-2.5.2\" data-caption=\"八线三线优先编码器的输入、输出与优先级规则\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMzQwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IuWFq+e6v+S4iee6v+S8mOWFiOe8lueggeWZqOeahOi+k+WFpei+k+WHuuS4juS8mOWFiOe6pyI+CjxzdHlsZT4KLnN7ZmlsbDpub25lO3N0cm9rZTojNThjYzAyO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZH0KLnR7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTNweH0KLmJ7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo2MDB9Ci5te2ZpbGw6IzlhYTJiMTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEyLjVweH0KPC9zdHlsZT4KPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzE0MTgyMSIvPgo8dGV4dCB4PSIyNCIgeT0iMjgiIGNsYXNzPSJiIj44IOe6vy0zIOe6v+S8mOWFiOe8lueggeWZqDwvdGV4dD4KPHJlY3QgeD0iMTkwIiB5PSI4MCIgd2lkdGg9IjE2MCIgaGVpZ2h0PSIyMDAiIHJ4PSI4IiBmaWxsPSIjMWIyMDI5IiBzdHJva2U9IiM1OGNjMDIiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSIyNzAiIHk9IjE3MCIgY2xhc3M9InQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjgg57q/LTMg57q/PC90ZXh0Pgo8dGV4dCB4PSIyNzAiIHk9IjE5NCIgY2xhc3M9InQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPuS8mOWFiOe8lueggeWZqDwvdGV4dD4KPGxpbmUgeDE9IjkwIiB5MT0iOTQiIHgyPSIxOTAiIHkyPSI5NCIgY2xhc3M9InMiLz4KPGxpbmUgeDE9IjkwIiB5MT0iMTE2IiB4Mj0iMTkwIiB5Mj0iMTE2IiBjbGFzcz0icyIvPgo8bGluZSB4MT0iOTAiIHkxPSIxMzgiIHgyPSIxOTAiIHkyPSIxMzgiIGNsYXNzPSJzIi8+CjxsaW5lIHgxPSI5MCIgeTE9IjE2MCIgeDI9IjE5MCIgeTI9IjE2MCIgY2xhc3M9InMiLz4KPGxpbmUgeDE9IjkwIiB5MT0iMTgyIiB4Mj0iMTkwIiB5Mj0iMTgyIiBjbGFzcz0icyIvPgo8bGluZSB4MT0iOTAiIHkxPSIyMDQiIHgyPSIxOTAiIHkyPSIyMDQiIGNsYXNzPSJzIi8+CjxsaW5lIHgxPSI5MCIgeTE9IjIyNiIgeDI9IjE5MCIgeTI9IjIyNiIgY2xhc3M9InMiLz4KPGxpbmUgeDE9IjkwIiB5MT0iMjQ4IiB4Mj0iMTkwIiB5Mj0iMjQ4IiBjbGFzcz0icyIvPgo8dGV4dCB4PSI4MiIgeT0iOTgiIGNsYXNzPSJ0IiB0ZXh0LWFuY2hvcj0iZW5kIj5JMDwvdGV4dD4KPHRleHQgeD0iODIiIHk9IjEyMCIgY2xhc3M9InQiIHRleHQtYW5jaG9yPSJlbmQiPkkxPC90ZXh0Pgo8dGV4dCB4PSI4MiIgeT0iMTQyIiBjbGFzcz0idCIgdGV4dC1hbmNob3I9ImVuZCI+STI8L3RleHQ+Cjx0ZXh0IHg9IjgyIiB5PSIxNjQiIGNsYXNzPSJ0IiB0ZXh0LWFuY2hvcj0iZW5kIj5JMzwvdGV4dD4KPHRleHQgeD0iODIiIHk9IjE4NiIgY2xhc3M9InQiIHRleHQtYW5jaG9yPSJlbmQiPkk0PC90ZXh0Pgo8dGV4dCB4PSI4MiIgeT0iMjA4IiBjbGFzcz0idCIgdGV4dC1hbmNob3I9ImVuZCI+STU8L3RleHQ+Cjx0ZXh0IHg9IjgyIiB5PSIyMzAiIGNsYXNzPSJ0IiB0ZXh0LWFuY2hvcj0iZW5kIj5JNjwvdGV4dD4KPHRleHQgeD0iODIiIHk9IjI1MiIgY2xhc3M9InQiIHRleHQtYW5jaG9yPSJlbmQiPkk3PC90ZXh0Pgo8bGluZSB4MT0iMzUwIiB5MT0iMTMwIiB4Mj0iNDMwIiB5Mj0iMTMwIiBjbGFzcz0icyIvPgo8bGluZSB4MT0iMzUwIiB5MT0iMTcwIiB4Mj0iNDMwIiB5Mj0iMTcwIiBjbGFzcz0icyIvPgo8bGluZSB4MT0iMzUwIiB5MT0iMjEwIiB4Mj0iNDMwIiB5Mj0iMjEwIiBjbGFzcz0icyIvPgo8dGV4dCB4PSI0MzgiIHk9IjEzNCIgY2xhc3M9InQiPlkyPC90ZXh0Pgo8dGV4dCB4PSI0MzgiIHk9IjE3NCIgY2xhc3M9InQiPlkxPC90ZXh0Pgo8dGV4dCB4PSI0MzgiIHk9IjIxNCIgY2xhc3M9InQiPlkwPC90ZXh0Pgo8dGV4dCB4PSI2MCIgeT0iMzEyIiBjbGFzcz0ibSI+6auY57yW5Y+36L6T5YWl5LyY5YWI77yaSTcg5pyJ5pWI5pe26L6T5Ye6IDExMe+8jEk2IOacieaViOaXtuS4uiAxMTA8L3RleHQ+Cjwvc3ZnPgo=\" alt=\"八线三线优先编码器的输入、输出与优先级规则\" loading=\"lazy\"><figcaption>八线三线优先编码器的输入、输出与优先级规则</figcaption></figure>"
						},
						{
							"number": "2.5.3",
							"heading": "译码器与数据分配器的区别",
							"anchor": "sec-2.5.3",
							"html": "<ul><li>译码器只有地址输入，输出表示哪一个码位被选中；数据分配器多一路数据输入，输出还携带这一路数据的内容。</li><li>结构上分配器可看作译码器加数据选通，地址仍然决定通路，数据线决定被选中输出端的电平。</li><li>74LS155 一类器件两种用法都支持：数据线接固定电平作译码器，接数据信号作分配器。</li><li>译码器的输出是选中标志，未被选中的输出保持无效电平；分配器只有被选中的那一路跟随数据变化。</li><li>选型时看是否需要把数据送到指定通道，只表示选中关系时用译码器更直接。</li></ul>\n<p class=\"pitfall\">易错：译码器输出有效只说明该路被选中，不代表线上有数据；把译码输出直接当数据输出会丢掉数据内容。</p>"
						},
						{
							"number": "2.5.4",
							"heading": "显示译码器的辅助控制端",
							"anchor": "sec-2.5.4",
							"html": "<ul><li>灯测试端有效时全部段点亮，用来检查数码管各段是否完好，不依赖输入代码。</li><li>消隐端有效时全部段熄灭，常用于按位分时显示时关闭当前位。</li><li>灭零输入判断本位是否为零，灭零输出把结果传给相邻高位，使高位的无效零不显示。</li><li>三个控制端多为低电平有效，接线时要按器件手册确认极性，不能按名称想当然。</li><li>共阴极与共阳极数码管的段码极性相反，译码器输出极性必须与所选数码管匹配。</li></ul>\n<p class=\"pitfall\">易错：灭零只隐藏高位的无效零，个位的零仍要显示，否则整数 0 会变成全黑。</p>"
						}
					],
					"number": "2.5",
					"anchor": "sec-2.5",
					"html": ""
				},
				{
					"heading": "数据比较器和加法器",
					"lines": [
						""
					],
					"subs": [
						{
							"number": "2.6.1",
							"heading": "数据比较器",
							"anchor": "sec-2.6.1",
							"html": "<ul><li>数据比较器比较两个二进制数的大小，输出大于、等于、小于三种结果。</li><li>一位比较器先用同或运算得到相等信号，再由本位取值和低位比较结果判断大小。</li><li>多位比较器从高位向低位逐级判断，高位已经分出大小时低位不再影响结论。</li><li>集成比较器带级联输入，多片串联可扩比较位数，级联端要按规定接固定电平。</li></ul>\n<figure id=\"fig-sec-2.6.1-1\" data-fig=\"fig-sec-2.6.1-1\" data-sec=\"sec-2.6.1\" data-caption=\"四位数值比较器的两组数据输入与三种比较结果\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMzQwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IuWbm+S9jeaVsOWAvOavlOi+g+WZqOeahOS4pOe7hOaVsOaNrui+k+WFpeS4juS4ieenjeavlOi+g+e7k+aenCI+CjxzdHlsZT4KLnN7ZmlsbDpub25lO3N0cm9rZTojNThjYzAyO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZH0KLnR7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTNweH0KLmJ7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo2MDB9Ci5te2ZpbGw6IzlhYTJiMTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEyLjVweH0KPC9zdHlsZT4KPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzE0MTgyMSIvPgo8dGV4dCB4PSIyNCIgeT0iMjgiIGNsYXNzPSJiIj40IOS9jeaVsOWAvOavlOi+g+WZqDwvdGV4dD4KPHJlY3QgeD0iMjAwIiB5PSI3MCIgd2lkdGg9IjI0MCIgaGVpZ2h0PSIxOTAiIHJ4PSI4IiBmaWxsPSIjMWIyMDI5IiBzdHJva2U9IiM1OGNjMDIiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSIzMjAiIHk9IjE0NiIgY2xhc3M9InQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjQg5L2N5pWw5YC85q+U6L6D5ZmoPC90ZXh0Pgo8dGV4dCB4PSIzMjAiIHk9IjE3MCIgY2xhc3M9Im0iIHRleHQtYW5jaG9yPSJtaWRkbGUiPjc0TFM4NTwvdGV4dD4KPGxpbmUgeDE9IjEzMCIgeTE9Ijg0IiB4Mj0iMjAwIiB5Mj0iODQiIGNsYXNzPSJzIi8+CjxsaW5lIHgxPSIxMzAiIHkxPSIxMDQiIHgyPSIyMDAiIHkyPSIxMDQiIGNsYXNzPSJzIi8+CjxsaW5lIHgxPSIxMzAiIHkxPSIxMjQiIHgyPSIyMDAiIHkyPSIxMjQiIGNsYXNzPSJzIi8+CjxsaW5lIHgxPSIxMzAiIHkxPSIxNDQiIHgyPSIyMDAiIHkyPSIxNDQiIGNsYXNzPSJzIi8+CjxsaW5lIHgxPSIxMzAiIHkxPSIxNzAiIHgyPSIyMDAiIHkyPSIxNzAiIGNsYXNzPSJzIi8+CjxsaW5lIHgxPSIxMzAiIHkxPSIxOTAiIHgyPSIyMDAiIHkyPSIxOTAiIGNsYXNzPSJzIi8+CjxsaW5lIHgxPSIxMzAiIHkxPSIyMTAiIHgyPSIyMDAiIHkyPSIyMTAiIGNsYXNzPSJzIi8+CjxsaW5lIHgxPSIxMzAiIHkxPSIyMzAiIHgyPSIyMDAiIHkyPSIyMzAiIGNsYXNzPSJzIi8+Cjx0ZXh0IHg9IjEyMiIgeT0iODgiIGNsYXNzPSJ0IiB0ZXh0LWFuY2hvcj0iZW5kIj5BMzwvdGV4dD4KPHRleHQgeD0iMTIyIiB5PSIxMDgiIGNsYXNzPSJ0IiB0ZXh0LWFuY2hvcj0iZW5kIj5BMjwvdGV4dD4KPHRleHQgeD0iMTIyIiB5PSIxMjgiIGNsYXNzPSJ0IiB0ZXh0LWFuY2hvcj0iZW5kIj5BMTwvdGV4dD4KPHRleHQgeD0iMTIyIiB5PSIxNDgiIGNsYXNzPSJ0IiB0ZXh0LWFuY2hvcj0iZW5kIj5BMDwvdGV4dD4KPHRleHQgeD0iMTIyIiB5PSIxNzQiIGNsYXNzPSJ0IiB0ZXh0LWFuY2hvcj0iZW5kIj5CMzwvdGV4dD4KPHRleHQgeD0iMTIyIiB5PSIxOTQiIGNsYXNzPSJ0IiB0ZXh0LWFuY2hvcj0iZW5kIj5CMjwvdGV4dD4KPHRleHQgeD0iMTIyIiB5PSIyMTQiIGNsYXNzPSJ0IiB0ZXh0LWFuY2hvcj0iZW5kIj5CMTwvdGV4dD4KPHRleHQgeD0iMTIyIiB5PSIyMzQiIGNsYXNzPSJ0IiB0ZXh0LWFuY2hvcj0iZW5kIj5CMDwvdGV4dD4KPGxpbmUgeDE9IjQ0MCIgeTE9IjEwMCIgeDI9IjUxMCIgeTI9IjEwMCIgY2xhc3M9InMiLz4KPGxpbmUgeDE9IjQ0MCIgeTE9IjE2MCIgeDI9IjUxMCIgeTI9IjE2MCIgY2xhc3M9InMiLz4KPGxpbmUgeDE9IjQ0MCIgeTE9IjIyMCIgeDI9IjUxMCIgeTI9IjIyMCIgY2xhc3M9InMiLz4KPHRleHQgeD0iNTE4IiB5PSIxMDQiIGNsYXNzPSJ0Ij5BICZndDsgQjwvdGV4dD4KPHRleHQgeD0iNTE4IiB5PSIxNjQiIGNsYXNzPSJ0Ij5BID0gQjwvdGV4dD4KPHRleHQgeD0iNTE4IiB5PSIyMjQiIGNsYXNzPSJ0Ij5BICZsdDsgQjwvdGV4dD4KPHRleHQgeD0iMjAwIiB5PSIzMDAiIGNsYXNzPSJtIj7lhYjmr5Tpq5jkvY3vvJrpq5jkvY3kuI3nrYnljbPlj6/lrprnu5PmnpzvvIznm7jnrYnml7blho3mr5TkvY7kvY08L3RleHQ+Cjwvc3ZnPgo=\" alt=\"四位数值比较器的两组数据输入与三种比较结果\" loading=\"lazy\"><figcaption>四位数值比较器的两组数据输入与三种比较结果</figcaption></figure>"
						},
						{
							"number": "2.6.2",
							"heading": "加法器",
							"anchor": "sec-2.6.2",
							"html": "<ul><li>半加器只把两个本位相加，输出本位和与向高位的进位，不能接收低位送来的进位。</li><li>全加器有三个输入：两个加数和低位进位，输出本位和与向高位的进位。</li><li>全加器可由两个半加器和一个或门构成，多位全加器串接起来得到串行进位加法器。</li><li>串行进位加法器的进位逐级传递，位数越多延迟越长；超前进位用附加逻辑提前产生各位进位。</li><li>加法器配合反相器和进位输入可以实现减法，是算术运算电路的基础。</li></ul>\n<p class=\"pitfall\">易错：半加器只有两个加数，本位和是两个加数的异或；全加器的和还要再异或低位进位，两者的和与进位输出都不能混用。</p>"
						},
						{
							"number": "2.6.3",
							"heading": "加法器的进位延迟",
							"anchor": "sec-2.6.3",
							"html": "<ul><li>串行进位加法器中，高位的进位要等低位逐级算出，最坏情况下 n 位进位要经过 n 级进位逻辑。</li><li>单级进位延迟由所用门的传输延迟相加得到，求和输出还要再加一级异或门的延迟。</li><li>位数增加时串行进位延迟线性增长，这是限制其工作速度的主要原因。</li><li>超前进位用生成信号和传递信号直接算出各位进位，把进位链的级数压缩到常数级。</li><li>位数很多时采用分组超前进位，组内并行、组间再级联，在速度和器件数量之间折中。</li></ul>\n<p class=\"pitfall\">易错：估算最长延迟要按最坏进位路径累加，不能用平均延迟乘位数；不同门的延迟不同，必须逐级查手册。</p>"
						}
					],
					"number": "2.6",
					"anchor": "sec-2.6",
					"html": ""
				},
				{
					"heading": "奇偶校验器",
					"lines": [
						"",
						"![半加器与全加器的输入输出及方程](figures/adder.svg)",
						""
					],
					"subs": [
						{
							"number": "2.7.1",
							"heading": "奇偶校验的基本原理",
							"anchor": "sec-2.7.1",
							"html": "<ul><li>奇偶校验在数据位之外附加一位校验位，使整个码字中 1 的个数为奇数或偶数。</li><li>偶校验要求码字中 1 的个数为偶数，奇校验要求为奇数，校验位的取值由此确定。</li><li>接收端重新统计 1 的个数，与约定不符就判定传输出错。</li><li>校验只能发现奇数个数据位同时出错的情况，偶数位出错无法察觉，也不能指出出错位置。</li></ul>\n<figure id=\"fig-sec-2.7.1-1\" data-fig=\"fig-sec-2.7.1-1\" data-sec=\"sec-2.7.1\" data-caption=\"偶校验与奇校验的校验位取值\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MjAgMjQwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IuWBtuagoemqjOS4juWlh+agoemqjOeahOagoemqjOS9jeWPluWAvCI+CjxzdHlsZT4KLnN7ZmlsbDpub25lO3N0cm9rZTojNThjYzAyO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZH0KLnR7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweH0KLmJ7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo2MDB9Ci5te2ZpbGw6IzlhYTJiMTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEyLjVweH0KLmd7ZmlsbDpub25lO3N0cm9rZTojM2E0MjUwO3N0cm9rZS13aWR0aDoxLjJ9Ci5ib3h7ZmlsbDojMWIyMDI5O3N0cm9rZTojM2E0MjUwO3N0cm9rZS13aWR0aDoxLjV9Ci5obHtmaWxsOm5vbmU7c3Ryb2tlOiM1OGNjMDI7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWRhc2hhcnJheTo2IDR9Cjwvc3R5bGU+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxNDE4MjEiLz4KPHRleHQgeD0iMjQiIHk9IjI4IiBjbGFzcz0iYiI+5aWH5YG25qCh6aqMPC90ZXh0Pgo8dGV4dCB4PSI0MCIgeT0iNzAiIGNsYXNzPSJtIj7mlbDmja7kvY0gMTAxMSDkuK0gMSDnmoTkuKrmlbDkuLogMzwvdGV4dD4KPHJlY3QgeD0iNDAiIHk9IjkwIiB3aWR0aD0iMjYwIiBoZWlnaHQ9IjQ2IiByeD0iNiIgY2xhc3M9ImJveCIvPjx0ZXh0IHg9IjE3MCIgeT0iMTE4IiBjbGFzcz0iYiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MSAgMCAgMSAgMTwvdGV4dD4KPHJlY3QgeD0iMzE2IiB5PSI5MCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSI0NiIgcng9IjYiIGNsYXNzPSJib3giLz48dGV4dCB4PSIzNzYiIHk9IjExOCIgY2xhc3M9ImIiIHRleHQtYW5jaG9yPSJtaWRkbGUiPuWBtuagoemqjOS9jSAxPC90ZXh0Pgo8cmVjdCB4PSI0NTIiIHk9IjkwIiB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQ2IiByeD0iNiIgY2xhc3M9ImJveCIvPjx0ZXh0IHg9IjUxMiIgeT0iMTE4IiBjbGFzcz0iYiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+5aWH5qCh6aqM5L2NIDA8L3RleHQ+Cjx0ZXh0IHg9IjQwIiB5PSIxNjgiIGNsYXNzPSJtIj7lgbbmoKHpqozvvJrooaUgMSDlkI4gMSDnmoTmgLvmlbDkuLrlgbbmlbA8L3RleHQ+Cjx0ZXh0IHg9IjQwIiB5PSIxOTQiIGNsYXNzPSJtIj7lpYfmoKHpqozvvJrooaUgMSDlkI4gMSDnmoTmgLvmlbDkuLrlpYfmlbA8L3RleHQ+CjxsaW5lIHgxPSI2MDAiIHkxPSI2MiIgeDI9IjYwMCIgeTI9IjIxMCIgY2xhc3M9ImciLz4KPHRleHQgeD0iNjI0IiB5PSI3NCIgY2xhc3M9ImIiPuaOpeaUtuerrzwvdGV4dD4KPHRleHQgeD0iNjI0IiB5PSIxMDQiIGNsYXNzPSJtIj7nu5/orqEgMSDnmoTkuKrmlbDlubbmoLjlr7nlpYflgbY8L3RleHQ+Cjx0ZXh0IHg9IjYyNCIgeT0iMTMyIiBjbGFzcz0ibSI+5YG25pWw5LiqIDEg6ZSZ5L2N5pe25peg5rOV5qOA5Ye6PC90ZXh0Pgo8dGV4dCB4PSI2MjQiIHk9IjE3NiIgY2xhc3M9Im0iPuWPquiDveajgOmUme+8jOS4jeiDvee6oOmUmTwvdGV4dD4KPC9zdmc+Cg==\" alt=\"偶校验与奇校验的校验位取值\" loading=\"lazy\"><figcaption>偶校验与奇校验的校验位取值</figcaption></figure>"
						},
						{
							"number": "2.7.2",
							"heading": "具有奇偶校验的数据传输",
							"anchor": "sec-2.7.2",
							"html": "<ul><li>发送端用异或门逐位异或求出校验位，异或结果为 1 说明数据位中 1 的个数为奇数。</li><li>数据位与校验位一起传输，接收端对全部位再做一次异或，偶校验时结果应为 0。</li><li>校验只能指示传输是否有错，发现错误后一般要求重发，而不由校验电路自行纠正。</li><li>校验位的产生与检测都用异或门级联实现，数据位数增加时异或门的级数相应增加。</li></ul>\n<p class=\"pitfall\">易错：奇偶校验只能发现奇数位出错，偶数位同时出错时 1 的个数奇偶性不变，检查结果仍显示正确。</p>"
						}
					],
					"number": "2.7",
					"anchor": "sec-2.7",
					"html": "<figure id=\"fig-sec-2.7-1\" data-fig=\"fig-sec-2.7-1\" data-sec=\"sec-2.7\" data-caption=\"半加器与全加器的输入输出及方程\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMjcwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IuWNiuWKoOWZqOS4juWFqOWKoOWZqOeahOi+k+WFpei+k+WHuuWPiuaWueeoiyI+CjxzdHlsZT4KLnN7ZmlsbDpub25lO3N0cm9rZTojNThjYzAyO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZH0KLnR7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweH0KLmJ7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo2MDB9Ci5te2ZpbGw6IzlhYTJiMTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEyLjVweH0KLmd7ZmlsbDpub25lO3N0cm9rZTojM2E0MjUwO3N0cm9rZS13aWR0aDoxLjJ9Ci5ib3h7ZmlsbDojMWIyMDI5O3N0cm9rZTojM2E0MjUwO3N0cm9rZS13aWR0aDoxLjV9Ci5obHtmaWxsOm5vbmU7c3Ryb2tlOiM1OGNjMDI7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWRhc2hhcnJheTo2IDR9Cjwvc3R5bGU+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxNDE4MjEiLz4KPHRleHQgeD0iMjQiIHk9IjI4IiBjbGFzcz0iYiI+5Y2K5Yqg5Zmo5LiO5YWo5Yqg5ZmoPC90ZXh0Pgo8dGV4dCB4PSIzMCIgeT0iNjYiIGNsYXNzPSJtIj7ljYrliqDlmag8L3RleHQ+CjxyZWN0IHg9IjQwIiB5PSI4MCIgd2lkdGg9IjExMCIgaGVpZ2h0PSI4MCIgcng9IjYiIGNsYXNzPSJib3giLz48dGV4dCB4PSI5NSIgeT0iMTE1IiBjbGFzcz0idCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SEE8L3RleHQ+PHRleHQgeD0iOTUiIHk9IjEzOCIgY2xhc3M9Im0iIHRleHQtYW5jaG9yPSJtaWRkbGUiPlMgPSBB4oqVQjwvdGV4dD4KPHRleHQgeD0iMTgiIHk9IjEwNCIgY2xhc3M9InQiPkE8L3RleHQ+PHRleHQgeD0iMTgiIHk9IjE0MCIgY2xhc3M9InQiPkI8L3RleHQ+PGxpbmUgeDE9IjI4IiB5MT0iMTAwIiB4Mj0iNDAiIHkyPSIxMDAiIGNsYXNzPSJzIi8+PGxpbmUgeDE9IjI4IiB5MT0iMTM2IiB4Mj0iNDAiIHkyPSIxMzYiIGNsYXNzPSJzIi8+CjxsaW5lIHgxPSIxNTAiIHkxPSIxMDAiIHgyPSIxNzgiIHkyPSIxMDAiIGNsYXNzPSJzIi8+PHRleHQgeD0iMTg0IiB5PSIxMDQiIGNsYXNzPSJ0Ij5TPC90ZXh0Pgo8bGluZSB4MT0iMTUwIiB5MT0iMTQwIiB4Mj0iMTc4IiB5Mj0iMTQwIiBjbGFzcz0icyIvPjx0ZXh0IHg9IjE4NCIgeT0iMTQ0IiBjbGFzcz0idCI+QyA9IEFCPC90ZXh0Pgo8dGV4dCB4PSIzMCIgeT0iMjAwIiBjbGFzcz0ibSI+5YWo5Yqg5ZmoPC90ZXh0Pgo8cmVjdCB4PSI0MCIgeT0iMjE0IiB3aWR0aD0iMTMwIiBoZWlnaHQ9IjQwIiByeD0iNiIgY2xhc3M9ImJveCIvPjx0ZXh0IHg9IjEwNSIgeT0iMjM5IiBjbGFzcz0idCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RkE8L3RleHQ+Cjx0ZXh0IHg9IjE4IiB5PSIyMjYiIGNsYXNzPSJ0Ij5BPC90ZXh0Pjx0ZXh0IHg9IjE4IiB5PSIyNDgiIGNsYXNzPSJ0Ij5CPC90ZXh0Pjx0ZXh0IHg9IjE0MCIgeT0iMjA4IiBjbGFzcz0idCI+Q2luPC90ZXh0Pgo8bGluZSB4MT0iMjgiIHkxPSIyMjIiIHgyPSI0MCIgeTI9IjIyMiIgY2xhc3M9InMiLz48bGluZSB4MT0iMjgiIHkxPSIyNDQiIHgyPSI0MCIgeTI9IjI0NCIgY2xhc3M9InMiLz48bGluZSB4MT0iMTA1IiB5MT0iMjA0IiB4Mj0iMTA1IiB5Mj0iMjE0IiBjbGFzcz0icyIvPgo8bGluZSB4MT0iMTcwIiB5MT0iMjI2IiB4Mj0iMTk4IiB5Mj0iMjI2IiBjbGFzcz0icyIvPjx0ZXh0IHg9IjIwNCIgeT0iMjMwIiBjbGFzcz0idCI+UzwvdGV4dD4KPGxpbmUgeDE9IjE3MCIgeTE9IjI0NiIgeDI9IjE5OCIgeTI9IjI0NiIgY2xhc3M9InMiLz48dGV4dCB4PSIyMDQiIHk9IjI1MCIgY2xhc3M9InQiPkNvdXQ8L3RleHQ+CjxsaW5lIHgxPSIzMDAiIHkxPSI2MiIgeDI9IjMwMCIgeTI9IjI1NiIgY2xhc3M9ImciLz4KPHRleHQgeD0iMzMwIiB5PSI3NCIgY2xhc3M9ImIiPuWFqOWKoOWZqOaWueeoizwvdGV4dD4KPHRleHQgeD0iMzMwIiB5PSIxMDQiIGNsYXNzPSJ0Ij5TID0gQSDiipUgQiDiipUgQ2luPC90ZXh0Pgo8dGV4dCB4PSIzMzAiIHk9IjEzNCIgY2xhc3M9InQiPkNvdXQgPSBBQiArIENpbihBIOKKlSBCKTwvdGV4dD4KPHRleHQgeD0iMzMwIiB5PSIxNzQiIGNsYXNzPSJtIj7ov5vkvY3kvKDpgJLvvJpDaW4g57uPIEHiipVCIOS8oOWIsCBDb3V0PC90ZXh0Pgo8dGV4dCB4PSIzMzAiIHk9IjIwMCIgY2xhc3M9Im0iPuWkmuS9jeWKoOazleWZqOeUseatpOS4suaOpeaIlui2heWJjei/m+S9jTwvdGV4dD4KPC9zdmc+Cg==\" alt=\"半加器与全加器的输入输出及方程\" loading=\"lazy\"><figcaption>半加器与全加器的输入输出及方程</figcaption></figure>"
				}
			]
		},
		{
			"id": "c3",
			"label": "第三章",
			"title": "第三章 时序逻辑",
			"modules": [
				"M4"
			],
			"sections": [
				{
					"heading": "锁存器",
					"lines": [],
					"subs": [
						{
							"number": "3.1.1",
							"heading": "锁存器的基本特性",
							"anchor": "sec-3.1.1",
							"html": "<ul><li>锁存器是时序逻辑电路中最基本的存储单元，能在输入信号作用下改变状态，并在输入撤销后保持该状态。</li><li>锁存器的输出由当前输入和电路原先保存的状态共同决定，这一点与只依赖当前输入的组合电路不同。</li><li>锁存器一般由两个门电路交叉耦合构成正反馈回路，靠反馈维持两种稳定状态，分别表示逻辑 0 和逻辑 1。</li><li>锁存器属于电平敏感器件，使能信号有效期间输入的任何变化都会传到输出。</li></ul>"
						},
						{
							"number": "3.1.2",
							"heading": "基本SR锁存器",
							"anchor": "sec-3.1.2",
							"html": "<ul><li>基本SR锁存器由两个或非门交叉耦合而成，是最简单的双稳态存储单元。</li><li>用或非门构成时，S 置 1 使输出置位，R 置 1 使输出复位，S、R 均为 0 时保持原状态。</li><li>当 S 和 R 同时为 1 时，两个输出被强迫为同一电平，破坏了互补关系，撤销输入后的状态无法确定，因此这种组合应当禁止。</li><li>用与非门构成的基本SR锁存器以低电平作为有效输入，置位和复位的条件与或非门形式正好相反。</li><li>由于输入直接控制状态、没有同步信号，基本SR锁存器主要用于开关消抖一类的简单场合。</li></ul>\n<figure id=\"fig-sec-3.1.2-1\" data-fig=\"fig-sec-3.1.2-1\" data-sec=\"sec-3.1.2\" data-caption=\"与非门构成的基本 SR 锁存器及功能表\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMjcwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IuS4jumdnumXqOaehOaIkOeahOWfuuacrCBTUiDplIHlrZjlmajlj4rlip/og73ooagiPgo8c3R5bGU+Ci5ze2ZpbGw6bm9uZTtzdHJva2U6IzU4Y2MwMjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmR9Ci50e2ZpbGw6I2U2ZThlZTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHh9Ci5ie2ZpbGw6I2U2ZThlZTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NjAwfQoubXtmaWxsOiM5YWEyYjE7Zm9udC1mYW1pbHk6IlNlZ29lIFVJIiwiTWljcm9zb2Z0IFlhSGVpIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMi41cHh9Ci5ne2ZpbGw6bm9uZTtzdHJva2U6IzNhNDI1MDtzdHJva2Utd2lkdGg6MS4yfQouYm94e2ZpbGw6IzFiMjAyOTtzdHJva2U6IzNhNDI1MDtzdHJva2Utd2lkdGg6MS41fQouaGx7ZmlsbDpub25lO3N0cm9rZTojNThjYzAyO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1kYXNoYXJyYXk6NiA0fQo8L3N0eWxlPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMTQxODIxIi8+Cjx0ZXh0IHg9IjI0IiB5PSIyOCIgY2xhc3M9ImIiPuWfuuacrCBTUiDplIHlrZjlmag8L3RleHQ+CjxwYXRoIGQ9Ik05MCA2MCBoMzAgYTMwIDMwIDAgMCAxIDAgNjAgaC0zMCB6IiBjbGFzcz0iYm94Ii8+CjxwYXRoIGQ9Ik0yMTAgMTQwIGgtMzAgYTMwIDMwIDAgMCAwIDAgNjAgaDMwIHoiIGNsYXNzPSJib3giLz4KPGNpcmNsZSBjeD0iMTU0IiBjeT0iOTAiIHI9IjQiIGNsYXNzPSJzIi8+PGNpcmNsZSBjeD0iMTQ2IiBjeT0iMTcwIiByPSI0IiBjbGFzcz0icyIvPgo8dGV4dCB4PSI2MiIgeT0iNzkiIGNsYXNzPSJ0Ij5TzIQ8L3RleHQ+PGxpbmUgeDE9IjcwIiB5MT0iNzUiIHgyPSI5MCIgeTI9Ijc1IiBjbGFzcz0icyIvPgo8dGV4dCB4PSIyMjgiIHk9IjE4OSIgY2xhc3M9InQiPlLMhDwvdGV4dD48bGluZSB4MT0iMjIwIiB5MT0iMTg1IiB4Mj0iMjEwIiB5Mj0iMTg1IiBjbGFzcz0icyIvPgo8bGluZSB4MT0iMTU4IiB5MT0iOTAiIHgyPSIyODAiIHkyPSI5MCIgY2xhc3M9InMiLz48dGV4dCB4PSIyODYiIHk9Ijk0IiBjbGFzcz0idCI+UTwvdGV4dD4KPGxpbmUgeDE9IjI1MCIgeTE9IjkwIiB4Mj0iMjUwIiB5Mj0iMTU1IiBjbGFzcz0icyIvPjxsaW5lIHgxPSIyNTAiIHkxPSIxNTUiIHgyPSIyMTAiIHkyPSIxNTUiIGNsYXNzPSJzIi8+CjxjaXJjbGUgY3g9IjI1MCIgY3k9IjkwIiByPSIzIiBmaWxsPSIjNThjYzAyIi8+CjxsaW5lIHgxPSIxNDIiIHkxPSIxNzAiIHgyPSI2MCIgeTI9IjE3MCIgY2xhc3M9InMiLz48dGV4dCB4PSIzNCIgeT0iMTc0IiBjbGFzcz0idCI+UcyEPC90ZXh0Pgo8bGluZSB4MT0iNzAiIHkxPSIxNzAiIHgyPSI3MCIgeTI9IjEwNSIgY2xhc3M9InMiLz48bGluZSB4MT0iNzAiIHkxPSIxMDUiIHgyPSI5MCIgeTI9IjEwNSIgY2xhc3M9InMiLz4KPGNpcmNsZSBjeD0iNzAiIGN5PSIxNzAiIHI9IjMiIGZpbGw9IiM1OGNjMDIiLz4KPGxpbmUgeDE9IjMwMCIgeTE9IjYyIiB4Mj0iMzAwIiB5Mj0iMjQwIiBjbGFzcz0iZyIvPgo8dGV4dCB4PSIzMzAiIHk9Ijc0IiBjbGFzcz0iYiI+5Yqf6IO96KGoPC90ZXh0Pgo8cmVjdCB4PSIzMzAiIHk9Ijg4IiB3aWR0aD0iMjcwIiBoZWlnaHQ9IjEzMCIgcng9IjAiIGNsYXNzPSJnIi8+CjxsaW5lIHgxPSIzMzAiIHkxPSIxMTgiIHgyPSI2MDAiIHkyPSIxMTgiIGNsYXNzPSJnIi8+PGxpbmUgeDE9IjMzMCIgeTE9IjE0OCIgeDI9IjYwMCIgeTI9IjE0OCIgY2xhc3M9ImciLz48bGluZSB4MT0iMzMwIiB5MT0iMTc4IiB4Mj0iNjAwIiB5Mj0iMTc4IiBjbGFzcz0iZyIvPgo8bGluZSB4MT0iNDIwIiB5MT0iODgiIHgyPSI0MjAiIHkyPSIyMTgiIGNsYXNzPSJnIi8+PGxpbmUgeDE9IjUwMCIgeTE9Ijg4IiB4Mj0iNTAwIiB5Mj0iMjE4IiBjbGFzcz0iZyIvPgo8dGV4dCB4PSIzNzUiIHk9IjEwOCIgY2xhc3M9InQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlPMhCBSzIQ8L3RleHQ+PHRleHQgeD0iNDYwIiB5PSIxMDgiIGNsYXNzPSJ0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5RPC90ZXh0Pjx0ZXh0IHg9IjU1MCIgeT0iMTA4IiBjbGFzcz0idCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+6K+05piOPC90ZXh0Pgo8dGV4dCB4PSIzNzUiIHk9IjEzOCIgY2xhc3M9InQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjEgMDwvdGV4dD48dGV4dCB4PSI0NjAiIHk9IjEzOCIgY2xhc3M9InQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjE8L3RleHQ+PHRleHQgeD0iNTUwIiB5PSIxMzgiIGNsYXNzPSJ0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7nva4gMTwvdGV4dD4KPHRleHQgeD0iMzc1IiB5PSIxNjgiIGNsYXNzPSJ0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4wIDE8L3RleHQ+PHRleHQgeD0iNDYwIiB5PSIxNjgiIGNsYXNzPSJ0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4wPC90ZXh0Pjx0ZXh0IHg9IjU1MCIgeT0iMTY4IiBjbGFzcz0idCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+572uIDA8L3RleHQ+Cjx0ZXh0IHg9IjM3NSIgeT0iMTk4IiBjbGFzcz0idCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MSAxPC90ZXh0Pjx0ZXh0IHg9IjQ2MCIgeT0iMTk4IiBjbGFzcz0idCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+5L+d5oyBPC90ZXh0Pjx0ZXh0IHg9IjU1MCIgeT0iMTk4IiBjbGFzcz0idCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+5L+d5oyBPC90ZXh0Pgo8dGV4dCB4PSIzNzUiIHk9IjIzMiIgY2xhc3M9InQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjAgMDwvdGV4dD48dGV4dCB4PSI0NjAiIHk9IjIzMiIgY2xhc3M9InQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPuS4jeWumjwvdGV4dD48dGV4dCB4PSI1NTAiIHk9IjIzMiIgY2xhc3M9InQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPuemgeatojwvdGV4dD4KPC9zdmc+Cg==\" alt=\"与非门构成的基本 SR 锁存器及功能表\" loading=\"lazy\"><figcaption>与非门构成的基本 SR 锁存器及功能表</figcaption></figure>"
						},
						{
							"number": "3.1.3",
							"heading": "门控SR锁存器",
							"anchor": "sec-3.1.3",
							"html": "<ul><li>门控SR锁存器在基本SR锁存器之前增加两个与门，使输入能否起作用受时钟信号 CP 的控制。</li><li>当 CP=0 时输入门被封锁，锁存器保持原状态；CP=1 时 S、R 才能通过输入门作用于内部锁存器。</li><li>引入门控信号后，锁存器的状态更新与系统时钟同步，多个存储单元可以协调工作。</li><li>在 CP=1 期间输入若多次变化，输出会跟着多次翻转，这种空翻现象使门控SR锁存器不能直接用作边沿触发的存储元件。</li></ul>"
						},
						{
							"number": "3.1.4",
							"heading": "门控D锁存器",
							"anchor": "sec-3.1.4",
							"html": "<ul><li>门控D锁存器由门控SR锁存器把 S 端接 D、R 端接 D 的反相得到，从结构上消除了禁止输入组合。</li><li>当 CP=1 时输出跟随输入 D 变化，这一状态称为透明；当 CP 回到 0 时，锁存器保持 CP 下降前一刻的 D 值。</li><li>D 锁存器只有置 1 和置 0 两种输入情况，逻辑功能简单，常用于数据暂存和总线缓冲。</li><li>由于 CP 有效期间输出随 D 变化，D 锁存器仍然是电平敏感器件，在需要边沿触发的同步电路中不能直接替代触发器。</li></ul>\n<p class=\"pitfall\">易错：锁存器是电平敏感的，CP 有效期间输出会随输入改变，不能按边沿触发的时序去使用。</p>"
						}
					],
					"number": "3.1",
					"anchor": "sec-3.1",
					"html": ""
				},
				{
					"heading": "触发器",
					"lines": [],
					"subs": [
						{
							"number": "3.2.1",
							"heading": "SR触发器",
							"anchor": "sec-3.2.1",
							"html": "<ul><li>触发器是边沿触发的存储单元，状态只在时钟脉冲的上升沿或下降沿瞬间改变。</li><li>边沿触发的SR触发器可由门控SR锁存器加维持阻塞结构构成，使输入只在触发沿到来时被采样。</li><li>其功能与SR锁存器一致：S 置位、R 复位、S=R=0 时保持，S=R=1 仍属禁止状态。</li><li>因为一个时钟周期内输出最多改变一次，触发器克服了锁存器在电平期间的多次翻转问题。</li></ul>"
						},
						{
							"number": "3.2.2",
							"heading": "D触发器",
							"anchor": "sec-3.2.2",
							"html": "<ul><li>D触发器在时钟边沿把输入端 D 的值送入输出，是最常用的触发器类型。</li><li>其特性方程为 Q(n+1)=D，次态只由触发沿时刻的 D 决定，不存在禁止输入组合。</li><li>D触发器可用维持阻塞结构或主从结构实现，并有上升沿触发和下降沿触发两种形式。</li><li>由于输入单一且逻辑关系简单，D触发器广泛用于寄存器、移位寄存器和计数器的设计。</li></ul>\n<figure id=\"fig-sec-3.2.2-1\" data-fig=\"fig-sec-3.2.2-1\" data-sec=\"sec-3.2.2\" data-caption=\"D、JK、T 三种触发器的符号与特性方程\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MjAgMjUwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IkTjgIFKS+OAgVQg5LiJ56eN6Kem5Y+R5Zmo55qE56ym5Y+35LiO54m55oCn5pa556iLIj4KCTxnIGZpbGw9IiMxYzFmMjYiIHN0cm9rZT0iIzU4Y2MwMiIgc3Ryb2tlLXdpZHRoPSIyLjIiIHJ4PSI4Ij4KCQk8cmVjdCB4PSI0MCIgeT0iNTAiIHdpZHRoPSIxMzAiIGhlaWdodD0iMTIwIiByeD0iMTAiLz4KCQk8cmVjdCB4PSIyNDAiIHk9IjUwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjEyMCIgcng9IjEwIi8+CgkJPHJlY3QgeD0iNDUwIiB5PSI1MCIgd2lkdGg9IjEzMCIgaGVpZ2h0PSIxMjAiIHJ4PSIxMCIvPgoJPC9nPgoJPGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOGI5M2ExIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+CgkJPHBhdGggZD0iTTEyIDg2aDI4TTEyIDEzNGgyOE0xNzAgMTEwaDM0Ii8+CgkJPHBhdGggZD0iTTIxMiA4NmgyOE0yMTIgMTIyaDI4TTIxMiAxNThoMjhNMzgwIDExMGgzNiIvPgoJCTxwYXRoIGQ9Ik00MjIgODZoMjhNNDIyIDEzNGgyOE01ODAgMTEwaDI4Ii8+CgkJPHBhdGggZD0iTTUyIDE1MGwxNCAxMC0xNCAxMCIvPgoJCTxwYXRoIGQ9Ik0yNTIgMTUwbDE0IDEwLTE0IDEwIi8+CgkJPHBhdGggZD0iTTQ2MiAxNTBsMTQgMTAtMTQgMTAiLz4KCTwvZz4KCTxnIGZvbnQtZmFtaWx5PSJTZWdvZSBVSSwgTWljcm9zb2Z0IFlhSGVpLCBzYW5zLXNlcmlmIiBmaWxsPSIjOWFhMmIxIiBmb250LXNpemU9IjEzIj4KCQk8dGV4dCB4PSIxMiIgeT0iNzgiPkQ8L3RleHQ+CgkJPHRleHQgeD0iMTIiIHk9IjEyNCI+Q0xLPC90ZXh0PgoJCTx0ZXh0IHg9IjE3NiIgeT0iMTAyIj5RPC90ZXh0PgoJCTx0ZXh0IHg9IjIwNiIgeT0iNzgiPko8L3RleHQ+CgkJPHRleHQgeD0iMjA2IiB5PSIxMTQiPkNMSzwvdGV4dD4KCQk8dGV4dCB4PSIyMDYiIHk9IjE1MCI+SzwvdGV4dD4KCQk8dGV4dCB4PSIzODgiIHk9IjEwMiI+UTwvdGV4dD4KCQk8dGV4dCB4PSI0MTYiIHk9Ijc4Ij5UPC90ZXh0PgoJCTx0ZXh0IHg9IjQxNiIgeT0iMTI2Ij5DTEs8L3RleHQ+CgkJPHRleHQgeD0iNTg0IiB5PSIxMDIiPlE8L3RleHQ+Cgk8L2c+Cgk8ZyBmb250LWZhbWlseT0iU2Vnb2UgVUksIE1pY3Jvc29mdCBZYUhlaSwgc2Fucy1zZXJpZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+CgkJPHRleHQgeD0iMTA1IiB5PSIxMjAiIGZpbGw9IiNlNmU4ZWUiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI2MDAiPkQ8L3RleHQ+CgkJPHRleHQgeD0iMzEwIiB5PSIxMjAiIGZpbGw9IiNlNmU4ZWUiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI2MDAiPkpLPC90ZXh0PgoJCTx0ZXh0IHg9IjUxNSIgeT0iMTIwIiBmaWxsPSIjZTZlOGVlIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iNjAwIj5UPC90ZXh0PgoJCTx0ZXh0IHg9IjEwNSIgeT0iMjEyIiBmaWxsPSIjOWFhMmIxIiBmb250LXNpemU9IjEzIj5RKiA9IEQ8L3RleHQ+CgkJPHRleHQgeD0iMzEwIiB5PSIyMTIiIGZpbGw9IiM5YWEyYjEiIGZvbnQtc2l6ZT0iMTMiPlEqID0gSlHigLIgKyBL4oCyUTwvdGV4dD4KCQk8dGV4dCB4PSI1MTUiIHk9IjIxMiIgZmlsbD0iIzlhYTJiMSIgZm9udC1zaXplPSIxMyI+USogPSBUIOKKlSBRPC90ZXh0PgoJCTx0ZXh0IHg9IjMxMCIgeT0iMjM4IiBmaWxsPSIjNmI3MjgwIiBmb250LXNpemU9IjExIj5KPUs9MSDml7bnv7vovazvvIxKPUs9MCDml7bkv53mjIE8L3RleHQ+Cgk8L2c+Cjwvc3ZnPgo=\" alt=\"D、JK、T 三种触发器的符号与特性方程\" loading=\"lazy\"><figcaption>D、JK、T 三种触发器的符号与特性方程</figcaption></figure>"
						},
						{
							"number": "3.2.3",
							"heading": "JK触发器",
							"anchor": "sec-3.2.3",
							"html": "<ul><li>JK触发器利用了SR触发器中被禁止的那种输入组合，使 J=K=1 时输出翻转，功能比SR触发器更完整。</li><li>其特性方程为 Q(n+1)=JQ' + K'Q，J 起置位作用，K 起复位作用。</li><li>主从JK触发器用两级锁存结构实现边沿触发，时钟高电平期间主锁存器接收输入，时钟下降时从锁存器更新输出。</li><li>主从结构存在一次变化问题：CP=1 期间输入若发生多次改变，输出可能与预期不符，因此要求输入在 CP=1 期间保持稳定。</li></ul>"
						},
						{
							"number": "3.2.4",
							"heading": "触发器的应用和时间参数",
							"anchor": "sec-3.2.4",
							"html": "<ul><li>建立时间要求输入数据在时钟沿到来之前已经稳定保持一段时间，否则可能采到错误值。</li><li>保持时间要求输入数据在时钟沿之后继续稳定一段时间，防止数据过早改变而影响采样。</li><li>传输延迟是从时钟沿到输出达到稳定值所需的时间，它限制了触发器能够工作的最高频率。</li><li>最高时钟频率由建立时间、保持时间和传输延迟共同决定，是衡量触发器速度性能的重要指标。</li><li>触发器可用于构成分频器、脉冲同步电路和按键消抖电路等。</li></ul>\n<figure id=\"fig-sec-3.2.4-1\" data-fig=\"fig-sec-3.2.4-1\" data-sec=\"sec-3.2.4\" data-caption=\"D 触发器在时钟上升沿把 D 送到 Q 的时序波形\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NjAgMjYwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IkQg6Kem5Y+R5Zmo5Zyo5pe26ZKf5LiK5Y2H5rK/5oqKIEQg6YCB5YiwIFEg55qE5pe25bqP5rOi5b2iIj4KCTxnIHN0cm9rZT0iIzJjMzEzYiIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtZGFzaGFycmF5PSI0IDUiPgoJCTxwYXRoIGQ9Ik02MCA0MHYxOTBNMTgwIDQwdjE5ME0zMDAgNDB2MTkwTTQyMCA0MHYxOTAiLz4KCTwvZz4KCTxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzU4Y2MwMiIgc3Ryb2tlLXdpZHRoPSIyLjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+CgkJPHBhdGggZD0iTTQwIDg0aDIwdi0yOGg2MHYyOGg2MHYtMjhoNjB2MjhoNjB2LTI4aDYwdjI4aDYwdi0yOGg2MHYyOGgyMCIvPgoJCTxwYXRoIGQ9Ik00MCAxNDRoNjB2LTI4aDkwdjI4aDkwdi0yOGg5MHYyOGg5MHYtMjhoNDAiLz4KCQk8cGF0aCBkPSJNNDAgMjA0aDgwdi0yOGg2MHYyOGg2MHYtMjhoNjB2MjhoNjB2LTI4aDYwdjI4aDYwIi8+Cgk8L2c+Cgk8ZyBmb250LWZhbWlseT0iU2Vnb2UgVUksIE1pY3Jvc29mdCBZYUhlaSwgc2Fucy1zZXJpZiIgZmlsbD0iIzlhYTJiMSIgZm9udC1zaXplPSIxMyIgdGV4dC1hbmNob3I9ImVuZCI+CgkJPHRleHQgeD0iMzQiIHk9IjcwIj5DTEs8L3RleHQ+CgkJPHRleHQgeD0iMzQiIHk9IjEzMCI+RDwvdGV4dD4KCQk8dGV4dCB4PSIzNCIgeT0iMTkwIj5RPC90ZXh0PgoJPC9nPgoJPGcgZm9udC1mYW1pbHk9IlNlZ29lIFVJLCBNaWNyb3NvZnQgWWFIZWksIHNhbnMtc2VyaWYiIGZpbGw9IiM2YjcyODAiIGZvbnQtc2l6ZT0iMTEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPgoJCTx0ZXh0IHg9IjYwIiB5PSIyNDgiPuS4iuWNh+ayvzwvdGV4dD4KCQk8dGV4dCB4PSIxODAiIHk9IjI0OCI+5LiK5Y2H5rK/PC90ZXh0PgoJCTx0ZXh0IHg9IjMwMCIgeT0iMjQ4Ij7kuIrljYfmsr88L3RleHQ+CgkJPHRleHQgeD0iNDIwIiB5PSIyNDgiPuS4iuWNh+ayvzwvdGV4dD4KCTwvZz4KCTx0ZXh0IHg9IjI4MCIgeT0iMjQiIGZpbGw9IiM1OGNjMDIiIGZvbnQtZmFtaWx5PSJTZWdvZSBVSSwgTWljcm9zb2Z0IFlhSGVpLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5RIOWPquWcqOS4iuWNh+ayv+i3n+majyBE77yM5YW25L2Z5pe26Ze05L+d5oyBPC90ZXh0Pgo8L3N2Zz4K\" alt=\"D 触发器在时钟上升沿把 D 送到 Q 的时序波形\" loading=\"lazy\"><figcaption>D 触发器在时钟上升沿把 D 送到 Q 的时序波形</figcaption></figure>\n<p class=\"pitfall\">易错：触发器在时钟边沿采样，锁存器在电平有效期间透明，两者即使功能表相同也不能随意互换。</p>"
						},
						{
							"number": "3.2.5",
							"heading": "T触发器",
							"anchor": "sec-3.2.5",
							"html": "<ul><li>T触发器只有一个输入端 T，T 为 0 时保持原状态，T 为 1 时每来一个时钟沿翻转一次。</li><li>其特性方程为 Q(n+1)=T⊕Q，次态由现态和输入共同决定。</li><li>把 JK 触发器的 J、K 两端并接作 T 端，即得到 T 触发器；把 D 触发器接成 D=T⊕Q 也有同样功能。</li><li>T 触发器每翻转一次输出频率减半，是构成分频器和异步二进制计数器的基本单元。</li><li>与 JK 触发器相比，T 触发器没有独立的置位和复位输入，只能保持或翻转。</li></ul>\n<p class=\"pitfall\">易错：T 触发器在 T=1 时不是每次时钟都变为 1，而是在原状态上翻转，原状态为 0 才置 1、为 1 则清 0。</p>"
						}
					],
					"number": "3.2",
					"anchor": "sec-3.2",
					"html": ""
				},
				{
					"heading": "寄存器和移位寄存器",
					"lines": [],
					"subs": [
						{
							"number": "3.3.1",
							"heading": "寄存器",
							"anchor": "sec-3.3.1",
							"html": "<ul><li>寄存器由一组触发器并联组成，在同一个时钟沿下同时接收并保存多位二进制数据。</li><li>n 位寄存器需要 n 个触发器，各触发器时钟端连在一起，数据端分别接各位输入。</li><li>寄存器可带三态输出以便挂接总线，也可加使能控制，在不需要更新时保持原有数据。</li><li>并行输入并行输出的寄存器常用于暂存运算的中间结果和电路的状态信息。</li></ul>"
						},
						{
							"number": "3.3.2",
							"heading": "移位寄存器",
							"anchor": "sec-3.3.2",
							"html": "<ul><li>移位寄存器在时钟作用下把各位数据依次传给相邻触发器，实现数据的串行与并行转换。</li><li>按数据流动方向可分为左移、右移和双向移位，双向移位的方向由控制信号选择。</li><li>串入并出用于把串行数据转换为并行数据，并入串出用于把并行数据逐位串行发送。</li><li>移位寄存器还可构成环形计数器和扭环形计数器，也用于数据的延迟和序列的产生。</li></ul>\n<p class=\"pitfall\">易错：寄存器是各位同时写入，移位寄存器是逐位传递，二者的数据更新方式不同，不能混为一谈。</p>\n<figure id=\"fig-sec-3.3.2-1\" data-fig=\"fig-sec-3.3.2-1\" data-sec=\"sec-3.3.2\" data-caption=\"四位右移寄存器的串行输入与并行输出\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMjUwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IuWbm+S9jeWPs+enu+WvhOWtmOWZqOeahOS4suihjOi+k+WFpeS4juW5tuihjOi+k+WHuiI+CjxzdHlsZT4KLnN7ZmlsbDpub25lO3N0cm9rZTojNThjYzAyO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZH0KLnR7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweH0KLmJ7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo2MDB9Ci5te2ZpbGw6IzlhYTJiMTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEyLjVweH0KLmd7ZmlsbDpub25lO3N0cm9rZTojM2E0MjUwO3N0cm9rZS13aWR0aDoxLjJ9Ci5ib3h7ZmlsbDojMWIyMDI5O3N0cm9rZTojM2E0MjUwO3N0cm9rZS13aWR0aDoxLjV9Ci5obHtmaWxsOm5vbmU7c3Ryb2tlOiM1OGNjMDI7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWRhc2hhcnJheTo2IDR9Cjwvc3R5bGU+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxNDE4MjEiLz4KPHRleHQgeD0iMjQiIHk9IjI4IiBjbGFzcz0iYiI+5Zub5L2N5Y+z56e75a+E5a2Y5ZmoPC90ZXh0Pgo8bGluZSB4MT0iMzAiIHkxPSIxMDAiIHgyPSI3MCIgeTI9IjEwMCIgY2xhc3M9InMiLz48dGV4dCB4PSIyNCIgeT0iODYiIGNsYXNzPSJ0Ij5EX2luPC90ZXh0Pgo8cmVjdCB4PSI3MCIgeT0iODAiIHdpZHRoPSI5MCIgaGVpZ2h0PSI2MCIgcng9IjYiIGNsYXNzPSJib3giLz48dGV4dCB4PSIxMTUiIHk9IjExNiIgY2xhc3M9InQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkQzPC90ZXh0PjxyZWN0IHg9IjE5MCIgeT0iODAiIHdpZHRoPSI5MCIgaGVpZ2h0PSI2MCIgcng9IjYiIGNsYXNzPSJib3giLz48dGV4dCB4PSIyMzUiIHk9IjExNiIgY2xhc3M9InQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkQyPC90ZXh0PjxyZWN0IHg9IjMxMCIgeT0iODAiIHdpZHRoPSI5MCIgaGVpZ2h0PSI2MCIgcng9IjYiIGNsYXNzPSJib3giLz48dGV4dCB4PSIzNTUiIHk9IjExNiIgY2xhc3M9InQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkQxPC90ZXh0PjxyZWN0IHg9IjQzMCIgeT0iODAiIHdpZHRoPSI5MCIgaGVpZ2h0PSI2MCIgcng9IjYiIGNsYXNzPSJib3giLz48dGV4dCB4PSI0NzUiIHk9IjExNiIgY2xhc3M9InQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkQwPC90ZXh0Pgo8bGluZSB4MT0iMTYwIiB5MT0iMTEwIiB4Mj0iMTkwIiB5Mj0iMTEwIiBjbGFzcz0icyIvPjxwYXRoIGQ9Ik0xOTAgMTEwIGwtNiAtMyB2NiB6IiBmaWxsPSIjNThjYzAyIi8+PGxpbmUgeDE9IjI4MCIgeTE9IjExMCIgeDI9IjMxMCIgeTI9IjExMCIgY2xhc3M9InMiLz48cGF0aCBkPSJNMzEwIDExMCBsLTYgLTMgdjYgeiIgZmlsbD0iIzU4Y2MwMiIvPjxsaW5lIHgxPSI0MDAiIHkxPSIxMTAiIHgyPSI0MzAiIHkyPSIxMTAiIGNsYXNzPSJzIi8+PHBhdGggZD0iTTQzMCAxMTAgbC02IC0zIHY2IHoiIGZpbGw9IiM1OGNjMDIiLz4KPGxpbmUgeDE9IjU1MCIgeTE9IjExMCIgeDI9IjU5MCIgeTI9IjExMCIgY2xhc3M9InMiLz48cGF0aCBkPSJNNTkwIDExMCBsLTYgLTMgdjYgeiIgZmlsbD0iIzU4Y2MwMiIvPjx0ZXh0IHg9IjU5NiIgeT0iMTE0IiBjbGFzcz0idCI+RF9vdXQ8L3RleHQ+CjxsaW5lIHgxPSI1MCIgeTE9IjE3MCIgeDI9IjYwMCIgeTI9IjE3MCIgY2xhc3M9InMiLz48dGV4dCB4PSI1MCIgeT0iMTk2IiBjbGFzcz0ibSI+Q0xLPC90ZXh0Pgo8bGluZSB4MT0iMTE1IiB5MT0iMTQwIiB4Mj0iMTE1IiB5Mj0iMTcwIiBjbGFzcz0icyIvPjxsaW5lIHgxPSIyMzUiIHkxPSIxNDAiIHgyPSIyMzUiIHkyPSIxNzAiIGNsYXNzPSJzIi8+PGxpbmUgeDE9IjM1NSIgeTE9IjE0MCIgeDI9IjM1NSIgeTI9IjE3MCIgY2xhc3M9InMiLz48bGluZSB4MT0iNDc1IiB5MT0iMTQwIiB4Mj0iNDc1IiB5Mj0iMTcwIiBjbGFzcz0icyIvPgo8bGluZSB4MT0iMTE1IiB5MT0iODAiIHgyPSIxMTUiIHkyPSI2MiIgY2xhc3M9InMiLz48dGV4dCB4PSIxMTIiIHk9IjUyIiBjbGFzcz0ibSI+UTM8L3RleHQ+PGxpbmUgeDE9IjIzNSIgeTE9IjgwIiB4Mj0iMjM1IiB5Mj0iNjIiIGNsYXNzPSJzIi8+PHRleHQgeD0iMjMyIiB5PSI1MiIgY2xhc3M9Im0iPlEyPC90ZXh0PjxsaW5lIHgxPSIzNTUiIHkxPSI4MCIgeDI9IjM1NSIgeTI9IjYyIiBjbGFzcz0icyIvPjx0ZXh0IHg9IjM1MiIgeT0iNTIiIGNsYXNzPSJtIj5RMTwvdGV4dD48bGluZSB4MT0iNDc1IiB5MT0iODAiIHgyPSI0NzUiIHkyPSI2MiIgY2xhc3M9InMiLz48dGV4dCB4PSI0NzIiIHk9IjUyIiBjbGFzcz0ibSI+UTA8L3RleHQ+Cjx0ZXh0IHg9IjcwIiB5PSIyMjQiIGNsYXNzPSJtIj7mr4/kuKrml7bpkp/msr/lj7Pnp7vkuIDkvY3vvIzkuLLooYzovpPlhaXov5vlhaXmnIDpq5jkvY08L3RleHQ+Cjwvc3ZnPgo=\" alt=\"四位右移寄存器的串行输入与并行输出\" loading=\"lazy\"><figcaption>四位右移寄存器的串行输入与并行输出</figcaption></figure>"
						},
						{
							"number": "3.3.3",
							"heading": "移位寄存器的结构类型",
							"anchor": "sec-3.3.3",
							"html": "<ul><li>按数据进出方式分为串入串出、串入并出、并入串出、并入并出四种，区别在输入和输出端是否同时使用。</li><li>串入并出把逐位到达的数据凑成一个字并行送出，用于串行通信接收端。</li><li>并入串出把一个字按位依次送出，用于串行发送和并串转换。</li><li>按移位方向分左移、右移和双向移位，双向移位的方向由一根控制信号选择。</li><li>移位寄存器的首尾可以接反馈构成环形或扭环形计数器，也可串接多片扩展位数。</li></ul>\n<p class=\"pitfall\">易错：并入并出的移位寄存器在时钟作用后数据整体移动一位，不是保持不动；需要保持时要封锁时钟或使用保持功能。</p>"
						}
					],
					"number": "3.3",
					"anchor": "sec-3.3",
					"html": ""
				},
				{
					"heading": "计数器",
					"lines": [],
					"subs": [
						{
							"number": "3.4.1",
							"heading": "同步计数器",
							"anchor": "sec-3.4.1",
							"html": "<ul><li>同步计数器中所有触发器的时钟端并联，由同一个时钟沿同时触发，各触发器几乎同时更新状态。</li><li>由于不存在逐级延迟的累积，同步计数器工作速度快，可以达到较高的计数频率。</li><li>各触发器的输入由组合逻辑根据当前状态产生，进位链的设计决定了计数规律。</li><li>通过反馈清零或预置数改变计数长度，同步计数器可以实现任意模值的计数。</li></ul>"
						},
						{
							"number": "3.4.2",
							"heading": "异步计数器",
							"anchor": "sec-3.4.2",
							"html": "<ul><li>异步计数器中低位触发器的输出作为高位触发器的时钟，各级依次翻转，形成行波式进位。</li><li>电路结构简单、所用器件少，但各级翻转时间逐级累加，总延迟随位数增加而增大。</li><li>级间延迟会使状态译码时出现毛刺，因此异步计数器不宜用于高速或要求严格同步的场合。</li><li>异步计数器多用于速度要求不高的分频和计数电路。</li></ul>"
						},
						{
							"number": "3.4.3",
							"heading": "中规模集成计数器及应用",
							"anchor": "sec-3.4.3",
							"html": "<ul><li>74LS161 是四位同步二进制计数器，具有异步清零、同步置数、保持和计数四种工作方式。</li><li>利用 74LS161 的同步置数端可以在计到预定值时装入初值，从而构成模值小于 16 的计数器。</li><li>多片 74LS161 级联可扩展计数位数，低位的进位输出接到高位的使能端，实现同步级联。</li><li>中规模计数器常与译码器配合，构成时序脉冲分配器和分频电路。</li></ul>\n<p class=\"pitfall\">易错：74LS161 的清零是异步的、置数是同步的，两者的作用时刻不同，设计时要分别对待。</p>\n<figure id=\"fig-sec-3.4.3-1\" data-fig=\"fig-sec-3.4.3-1\" data-sec=\"sec-3.4.3\" data-caption=\"两片四位同步计数器级联扩展为八位\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMjUwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IuS4pOeJh+Wbm+S9jeWQjOatpeiuoeaVsOWZqOe6p+iBlOaJqeWxleS4uuWFq+S9jSI+CjxzdHlsZT4KLnN7ZmlsbDpub25lO3N0cm9rZTojNThjYzAyO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZH0KLnR7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweH0KLmJ7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo2MDB9Ci5te2ZpbGw6IzlhYTJiMTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEyLjVweH0KLmd7ZmlsbDpub25lO3N0cm9rZTojM2E0MjUwO3N0cm9rZS13aWR0aDoxLjJ9Ci5ib3h7ZmlsbDojMWIyMDI5O3N0cm9rZTojM2E0MjUwO3N0cm9rZS13aWR0aDoxLjV9Ci5obHtmaWxsOm5vbmU7c3Ryb2tlOiM1OGNjMDI7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWRhc2hhcnJheTo2IDR9Cjwvc3R5bGU+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxNDE4MjEiLz4KPHRleHQgeD0iMjQiIHk9IjI4IiBjbGFzcz0iYiI+5ZCM5q2l57qn6IGUPC90ZXh0Pgo8cmVjdCB4PSI1MCIgeT0iNzAiIHdpZHRoPSIxOTAiIGhlaWdodD0iMTAwIiByeD0iNiIgY2xhc3M9ImJveCIvPjx0ZXh0IHg9IjE0NSIgeT0iMTA1IiBjbGFzcz0iYiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NzRMUzE2MSDkvY7kvY08L3RleHQ+PHRleHQgeD0iMTQ1IiB5PSIxMzUiIGNsYXNzPSJtIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5RMC1RMzwvdGV4dD4KPHJlY3QgeD0iMzYwIiB5PSI3MCIgd2lkdGg9IjE5MCIgaGVpZ2h0PSIxMDAiIHJ4PSI2IiBjbGFzcz0iYm94Ii8+PHRleHQgeD0iNDU1IiB5PSIxMDUiIGNsYXNzPSJiIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj43NExTMTYxIOmrmOS9jTwvdGV4dD48dGV4dCB4PSI0NTUiIHk9IjEzNSIgY2xhc3M9Im0iIHRleHQtYW5jaG9yPSJtaWRkbGUiPlE0LVE3PC90ZXh0Pgo8dGV4dCB4PSIzMCIgeT0iMTMwIiBjbGFzcz0idCI+Q0xLPC90ZXh0PjxsaW5lIHgxPSI0MCIgeTE9IjEyNiIgeDI9IjUwIiB5Mj0iMTI2IiBjbGFzcz0icyIvPgo8bGluZSB4MT0iMjQwIiB5MT0iMTI2IiB4Mj0iMzYwIiB5Mj0iMTI2IiBjbGFzcz0icyIvPjx0ZXh0IHg9IjI2OCIgeT0iMTE2IiBjbGFzcz0ibSI+UkNPPC90ZXh0Pgo8bGluZSB4MT0iMzAwIiB5MT0iMTg1IiB4Mj0iMzAwIiB5Mj0iMTcwIiBjbGFzcz0icyIvPjxsaW5lIHgxPSIzMDAiIHkxPSIxNzAiIHgyPSIyNTAiIHkyPSIxNzAiIGNsYXNzPSJzIi8+PGxpbmUgeDE9IjI1MCIgeTE9IjE3MCIgeDI9IjI1MCIgeTI9IjE1MCIgY2xhc3M9InMiLz4KPGxpbmUgeDE9IjMwMCIgeTE9IjE3MCIgeDI9IjU1MCIgeTI9IjE3MCIgY2xhc3M9InMiLz48bGluZSB4MT0iNTUwIiB5MT0iMTcwIiB4Mj0iNTUwIiB5Mj0iMTUwIiBjbGFzcz0icyIvPgo8dGV4dCB4PSIzMTgiIHk9IjE5MiIgY2xhc3M9Im0iPkVOVCAvIEVOUDwvdGV4dD4KPGxpbmUgeDE9IjI0MCIgeTE9IjYwIiB4Mj0iMzYwIiB5Mj0iNjAiIGNsYXNzPSJzIi8+PHRleHQgeD0iMjcwIiB5PSI1MCIgY2xhc3M9Im0iPui/m+S9jTwvdGV4dD4KPHRleHQgeD0iNTAiIHk9IjIyNCIgY2xhc3M9Im0iPuS9juS9jeiuoea7oeWQjue7jyBSQ08g5L2/6IO96auY5L2N77yM5Lik54mH5YWx55So5ZCM5LiA5pe26ZKfPC90ZXh0Pgo8L3N2Zz4K\" alt=\"两片四位同步计数器级联扩展为八位\" loading=\"lazy\"><figcaption>两片四位同步计数器级联扩展为八位</figcaption></figure>"
						},
						{
							"number": "3.4.4",
							"heading": "环形计数器与扭环形计数器",
							"anchor": "sec-3.4.4",
							"html": "<ul><li>环形计数器把移位寄存器末级的输出直接接回第一级输入，k 个触发器只能循环 k 个状态，模为 k。</li><li>扭环形计数器把末级输出取反后接回第一级，k 个触发器可以循环 2k 个状态，模为 2k。</li><li>环形计数器的每个有效状态只有一个触发器为 1，状态译码只需一根线，不必另加译码器。</li><li>扭环形计数器的状态中相邻两个只差一位，译码时不会出现多位同时变化的竞争。</li><li>两者的有效状态都只是全部状态的一小部分，上电必须置入规定的初值，否则可能停在无效循环。</li></ul>\n<p class=\"pitfall\">易错：环形计数器的模等于触发器个数，扭环形计数器的模是触发器个数的两倍，两者不能按同一公式计算。</p>"
						},
						{
							"number": "3.4.5",
							"heading": "任意进制计数器的构成",
							"anchor": "sec-3.4.5",
							"html": "<ul><li>预置法在计到终止状态时把初值装入计数器，预置值等于计数器最大模值减去目标模值。</li><li>复位法在计到目标模值时产生复位信号，使计数器回到全零，复位状态是否计入模值取决于清零是同步还是异步。</li><li>同步清零在下一个时钟沿生效，异步清零立即生效，同一个译码状态在两种器件上对应的模值相差 1。</li><li>单片容量不够时级联扩模：同步级联时钟并联、低位进位接高位使能，异步级联把低位进位当高位时钟。</li><li>设计完成后要检查未使用的状态能否回到有效循环，不能自启动时需修改反馈逻辑。</li></ul>\n<p class=\"pitfall\">易错：预置法的预置值是最大模值减目标模值，不是目标模值本身；把它当成计数值直接置入会得到错误的计数长度。</p>"
						}
					],
					"number": "3.4",
					"anchor": "sec-3.4",
					"html": ""
				},
				{
					"heading": "定时脉冲产生器",
					"lines": [],
					"subs": [
						{
							"number": "3.5.1",
							"heading": "时钟脉冲源电路",
							"anchor": "sec-3.5.1",
							"html": "<ul><li>时钟脉冲源为时序电路提供周期稳定的方波，常用石英晶体振荡器或门电路构成的多谐振荡器实现。</li><li>石英晶体振荡器的频率稳定度高，适合作系统的主时钟，振荡电路可由反相器加晶体构成。</li><li>用门电路加 RC 构成的多谐振荡器成本低，但振荡频率受温度和电源电压的影响较大。</li><li>时钟源输出经过整形和分频，可以得到系统需要的各种频率的时钟信号。</li></ul>"
						},
						{
							"number": "3.5.2",
							"heading": "节拍脉冲产生器",
							"anchor": "sec-3.5.2",
							"html": "<ul><li>节拍脉冲产生器把主时钟变换成时间上依次错开的一组脉冲，用来控制机器各步操作的先后顺序。</li><li>常用计数器加译码器实现，计数器状态经译码后依次输出各拍脉冲。</li><li>节拍脉冲的宽度通常为一个时钟周期，各拍在时间上依次出现而不重叠。</li><li>为保证各拍严格有序，节拍产生器必须由同一时钟同步驱动。</li></ul>"
						},
						{
							"number": "3.5.3",
							"heading": "数字钟",
							"anchor": "sec-3.5.3",
							"html": "<ul><li>数字钟由石英晶体振荡器产生标准频率，经多级分频得到秒脉冲，再逐级计数得到分和时。</li><li>秒计数器和分计数器是模 60 计数器，时计数器为模 24 或模 12 计数器，计满后向高位进位并自身回零。</li><li>各级计数结果经译码器驱动七段显示器，把二进制编码转换成可读的数字。</li><li>数字钟通常还设有校时电路，通过置数或复位调整时间。</li></ul>\n<p class=\"pitfall\">易错：秒和分的计数器是模 60，计到 59 之后的下一个脉冲回到 00 并向高位进位，不要把模值当成 59。</p>"
						}
					],
					"number": "3.5",
					"anchor": "sec-3.5",
					"html": ""
				},
				{
					"heading": "同步时序逻辑分析",
					"lines": [],
					"subs": [
						{
							"number": "3.6.1",
							"heading": "同步时序逻辑电路的描述工具",
							"anchor": "sec-3.6.1",
							"html": "<ul><li>状态表以表格形式列出每种现态和输入组合下的次态与输出，完整描述电路的外部行为。</li><li>状态图用圆圈表示状态、用带箭头的线表示转移，箭头旁标注输入和输出，直观反映状态之间的转换关系。</li><li>状态方程和输出方程用逻辑表达式给出次态、输出与现态及输入的关系，便于代数运算和设计。</li><li>这三种工具描述的是同一个电路，可以相互转换，分析时按需要选用其中一种。</li></ul>\n<figure id=\"fig-sec-3.6.1-1\" data-fig=\"fig-sec-3.6.1-1\" data-sec=\"sec-3.6.1\" data-caption=\"三状态时序机的状态转换图，使能有效时按 S0、S1、S2 循环\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MDAgMzAwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IuS4ieeKtuaAgeaXtuW6j+acuueahOeKtuaAgei9rOaNouWbvu+8jOS9v+iDveS/oeWPt+S4uiAxIOaXtuW+queOr++8jOS4uiAwIOaXtuWBnOWcqOWOn+eKtuaAgSI+Cgk8ZGVmcz4KCQk8bWFya2VyIGlkPSJhcnJvdyIgdmlld0JveD0iMCAwIDEwIDEwIiByZWZYPSI5IiByZWZZPSI1IiBtYXJrZXJXaWR0aD0iNyIgbWFya2VySGVpZ2h0PSI3IiBvcmllbnQ9ImF1dG8tc3RhcnQtcmV2ZXJzZSI+CgkJCTxwYXRoIGQ9Ik0wIDBsMTAgNS0xMCA1eiIgZmlsbD0iIzU4Y2MwMiIvPgoJCTwvbWFya2VyPgoJPC9kZWZzPgoJPGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNThjYzAyIiBzdHJva2Utd2lkdGg9IjIuMiIgbWFya2VyLWVuZD0idXJsKCNhcnJvdykiPgoJCTxwYXRoIGQ9Ik0xNTUgNzZoMTAwIi8+CgkJPHBhdGggZD0iTTM4NSA4MnE1NSAzNCAyMCA5OCIvPgoJCTxwYXRoIGQ9Ik0xNjggMjAwcS02Mi0zNC0yNC05NiIvPgoJCTxwYXRoIGQ9Ik05NSA0OGEyNCAyNCAwIDEgMSA0NC04Ii8+Cgk8L2c+Cgk8ZyBmaWxsPSIjMWMxZjI2IiBzdHJva2U9IiM1OGNjMDIiIHN0cm9rZS13aWR0aD0iMi4yIj4KCQk8Y2lyY2xlIGN4PSIxMTIiIGN5PSI3NiIgcj0iNDIiLz4KCQk8Y2lyY2xlIGN4PSIzNTIiIGN5PSI3NiIgcj0iNDIiLz4KCQk8Y2lyY2xlIGN4PSIyMzAiIGN5PSIyMTYiIHI9IjQyIi8+Cgk8L2c+Cgk8ZyBmaWxsPSIjZTZlOGVlIiBmb250LWZhbWlseT0iU2Vnb2UgVUksIE1pY3Jvc29mdCBZYUhlaSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9IjYwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+CgkJPHRleHQgeD0iMTEyIiB5PSI4MiI+UzA8L3RleHQ+CgkJPHRleHQgeD0iMzUyIiB5PSI4MiI+UzE8L3RleHQ+CgkJPHRleHQgeD0iMjMwIiB5PSIyMjIiPlMyPC90ZXh0PgoJPC9nPgoJPGcgZmlsbD0iIzlhYTJiMSIgZm9udC1mYW1pbHk9IlNlZ29lIFVJLCBNaWNyb3NvZnQgWWFIZWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIHRleHQtYW5jaG9yPSJtaWRkbGUiPgoJCTx0ZXh0IHg9IjIwNSIgeT0iNjYiPkVOPTE8L3RleHQ+CgkJPHRleHQgeD0iMzkyIiB5PSIxNTYiPkVOPTE8L3RleHQ+CgkJPHRleHQgeD0iMTEyIiB5PSIxNTAiPkVOPTE8L3RleHQ+CgkJPHRleHQgeD0iMTYyIiB5PSIyNiI+RU49MDwvdGV4dD4KCQk8dGV4dCB4PSIyNTAiIHk9IjI4NiI+5LiJ5Liq54q25oCB5b6q546v77yM5qih5Li6IDM8L3RleHQ+Cgk8L2c+Cjwvc3ZnPgo=\" alt=\"三状态时序机的状态转换图，使能有效时按 S0、S1、S2 循环\" loading=\"lazy\"><figcaption>三状态时序机的状态转换图，使能有效时按 S0、S1、S2 循环</figcaption></figure>"
						},
						{
							"number": "3.6.2",
							"heading": "同步时序逻辑电路分析的一般方法",
							"anchor": "sec-3.6.2",
							"html": "<ul><li>首先由逻辑图写出各触发器的激励方程和电路的输出方程。</li><li>把激励方程代入所用触发器的特性方程，得到各触发器的次态方程。</li><li>由次态方程和输出方程列出状态表，再据此画出状态图。</li><li>根据状态图归纳电路的逻辑功能，检查是否存在无效状态以及电路能否自启动。</li><li>列状态表时按现态逐个代入，得到全部次态后再归纳规律，可以避免遗漏状态。</li></ul>\n<p class=\"pitfall\">易错：激励方程描述的是触发器输入端的表达式，次态方程才是状态转移的结果，两者不能混用。</p>"
						},
						{
							"number": "3.6.3",
							"heading": "米利型与摩尔型时序电路",
							"anchor": "sec-3.6.3",
							"html": "<ul><li>摩尔型电路的输出只由现态决定，输出方程中不含输入变量，状态图上输出标在状态圈内。</li><li>米利型电路的输出由现态和当前输入共同决定，输入一变输出可能立即跟着变，不必等时钟沿。</li><li>米利型用较少的状态就能实现同样的功能，但输出容易出现毛刺，对异步接收方不友好。</li><li>摩尔型输出在时钟沿更新后保持一个完整周期，波形干净，代价是可能多一个状态。</li><li>判断类型只看输出方程是否含输入变量，不看电路里有没有输入连线。</li></ul>\n<p class=\"pitfall\">易错：米利型输出变化不依赖时钟沿，按\"输出都在时钟沿变化\"的假设去分析会漏掉输入引起的即时跳变。</p>"
						}
					],
					"number": "3.6",
					"anchor": "sec-3.6",
					"html": ""
				},
				{
					"heading": "同步时序逻辑设计",
					"lines": [],
					"subs": [
						{
							"number": "3.7.1",
							"heading": "同步时序逻辑设计方法和步骤",
							"anchor": "sec-3.7.1",
							"html": "<ul><li>首先根据设计要求确定输入、输出变量，建立原始状态图或原始状态表。</li><li>对原始状态表进行状态化简，合并等价状态，以减少所需触发器的数目。</li><li>进行状态编码，为每个状态分配二进制代码，并选定触发器类型。</li><li>由编码后的状态表求出激励方程和输出方程，画出逻辑图，最后检查电路能否自启动。</li></ul>\n<figure id=\"fig-sec-3.7.1-1\" data-fig=\"fig-sec-3.7.1-1\" data-sec=\"sec-3.7.1\" data-caption=\"三状态时序电路的状态转移图\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMzAwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IuS4ieeKtuaAgeaXtuW6j+eUtei3r+eahOeKtuaAgei9rOenu+WbviI+CjxzdHlsZT4KLnN7ZmlsbDpub25lO3N0cm9rZTojNThjYzAyO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZH0KLnR7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweH0KLmJ7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo2MDB9Ci5te2ZpbGw6IzlhYTJiMTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEyLjVweH0KLmd7ZmlsbDpub25lO3N0cm9rZTojM2E0MjUwO3N0cm9rZS13aWR0aDoxLjJ9Ci5ke2ZpbGw6bm9uZTtzdHJva2U6IzNhNDI1MDtzdHJva2Utd2lkdGg6MS4yO3N0cm9rZS1kYXNoYXJyYXk6NSA1fQouYm94e2ZpbGw6IzFiMjAyOTtzdHJva2U6IzNhNDI1MDtzdHJva2Utd2lkdGg6MS41fQouY29kZXtmaWxsOiNlNmU4ZWU7Zm9udC1mYW1pbHk6IkNvbnNvbGFzIiwiQ291cmllciBOZXciLG1vbm9zcGFjZTtmb250LXNpemU6MTNweH0KPC9zdHlsZT48ZGVmcz48bWFya2VyIGlkPSJhciIgbWFya2VyV2lkdGg9IjgiIG1hcmtlckhlaWdodD0iOCIgcmVmWD0iNiIgcmVmWT0iMyIgb3JpZW50PSJhdXRvIj48cGF0aCBkPSJNMCAwIEw2IDMgTDAgNiB6IiBmaWxsPSIjNThjYzAyIi8+PC9tYXJrZXI+PC9kZWZzPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMTQxODIxIi8+Cjx0ZXh0IHg9IjI0IiB5PSIyOCIgY2xhc3M9ImIiPueKtuaAgei9rOenu+WbvjwvdGV4dD4KPGNpcmNsZSBjeD0iMTUwIiBjeT0iOTUiIHI9IjM0IiBmaWxsPSIjMWIyMDI5IiBzdHJva2U9IiM1OGNjMDIiIHN0cm9rZS13aWR0aD0iMiIvPgo8Y2lyY2xlIGN4PSIzNDAiIGN5PSI5NSIgcj0iMzQiIGZpbGw9IiMxYjIwMjkiIHN0cm9rZT0iIzU4Y2MwMiIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxjaXJjbGUgY3g9IjI0NSIgY3k9IjIyNSIgcj0iMzQiIGZpbGw9IiMxYjIwMjkiIHN0cm9rZT0iIzU4Y2MwMiIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTAxIiBjbGFzcz0idCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UzA8L3RleHQ+Cjx0ZXh0IHg9IjM0MCIgeT0iMTAxIiBjbGFzcz0idCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UzE8L3RleHQ+Cjx0ZXh0IHg9IjI0NSIgeT0iMjMxIiBjbGFzcz0idCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UzI8L3RleHQ+CjxsaW5lIHgxPSIxODQiIHkxPSI5NSIgeDI9IjMwMCIgeTI9Ijk1IiBjbGFzcz0icyIgbWFya2VyLWVuZD0idXJsKCNhcikiLz4KPHRleHQgeD0iMjQyIiB5PSI4NSIgY2xhc3M9Im0iIHRleHQtYW5jaG9yPSJtaWRkbGUiPjEvMDwvdGV4dD4KPGxpbmUgeDE9IjMyMCIgeTE9IjEyMiIgeDI9IjI2NyIgeTI9IjE5OCIgY2xhc3M9InMiIG1hcmtlci1lbmQ9InVybCgjYXIpIi8+Cjx0ZXh0IHg9IjMwNiIgeT0iMTcwIiBjbGFzcz0ibSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MS8xPC90ZXh0Pgo8bGluZSB4MT0iMjI1IiB5MT0iMTk4IiB4Mj0iMTcxIiB5Mj0iMTIzIiBjbGFzcz0icyIgbWFya2VyLWVuZD0idXJsKCNhcikiLz4KPHRleHQgeD0iMTgyIiB5PSIxNzYiIGNsYXNzPSJtIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4wLzE8L3RleHQ+CjxwYXRoIGQ9Ik0xMjQgNjggQzExNiAzMiAxODQgMzIgMTc2IDY4IiBjbGFzcz0icyIgbWFya2VyLWVuZD0idXJsKCNhcikiLz4KPHRleHQgeD0iMTUwIiB5PSIzMCIgY2xhc3M9Im0iIHRleHQtYW5jaG9yPSJtaWRkbGUiPjAvMDwvdGV4dD4KPHRleHQgeD0iMzkyIiB5PSIxOTYiIGNsYXNzPSJtIj7ovaznp7vnur/or7vkvZw8L3RleHQ+Cjx0ZXh0IHg9IjM5MiIgeT0iMjIwIiBjbGFzcz0idCI+6L6T5YWlIC8g6L6T5Ye6PC90ZXh0Pgo8dGV4dCB4PSIzOTIiIHk9IjI1MiIgY2xhc3M9Im0iPlMwIOS4uuWIneaAgTwvdGV4dD4KPC9zdmc+Cg==\" alt=\"三状态时序电路的状态转移图\" loading=\"lazy\"><figcaption>三状态时序电路的状态转移图</figcaption></figure>"
						},
						{
							"number": "3.7.2",
							"heading": "建立原始状态表的方法",
							"anchor": "sec-3.7.2",
							"html": "<ul><li>从文字描述中找出电路的输入序列、输出序列以及必须加以区分的状态，逐个确定状态转移。</li><li>每遇到一种新的状态条件就增设一个状态，先保证描述完整，不急于压缩状态数目。</li><li>由每个现态出发，针对每一种可能的输入确定次态和输出，逐项填入状态表。</li><li>原始状态表中允许存在等价状态，把它们留到状态化简步骤统一处理。</li></ul>"
						},
						{
							"number": "3.7.3",
							"heading": "状态编码",
							"anchor": "sec-3.7.3",
							"html": "<ul><li>状态编码是用一组二进制代码表示每个状态，代码位数 n 应满足 2^n 不小于状态总数。</li><li>常用的编码方式有自然二进制编码、格雷码编码和独热码编码。</li><li>不同的编码方案会使激励方程和输出方程的复杂程度不同，也影响电路的自启动特性。</li><li>编码时尽量使相邻状态的代码只相差一位，以减小状态转换过程中出现竞争的可能。</li></ul>\n<p class=\"pitfall\">易错：状态化简必须在状态编码之前完成，编码后再合并状态会破坏已经分配的代码。</p>"
						}
					],
					"number": "3.7",
					"anchor": "sec-3.7",
					"html": ""
				}
			]
		},
		{
			"id": "c4",
			"label": "第四章",
			"title": "第四章 存储逻辑",
			"modules": [
				"M5"
			],
			"sections": [
				{
					"heading": "特殊存储部件",
					"lines": [],
					"subs": [
						{
							"number": "4.1.1",
							"heading": "寄存器堆",
							"anchor": "sec-4.1.1",
							"html": "<ul><li>寄存器堆由若干个寄存器和一个地址译码网络组成，可按地址对其中任意一个寄存器进行读写。</li><li>寄存器堆通常设有两个读端口和一个写端口，允许在同一时钟周期内同时读出两个操作数。</li><li>读操作是组合性的，地址有效后数据很快出现在输出端；写操作则在时钟沿完成。</li><li>寄存器堆多用于处理器的通用寄存器组，为运算部件快速提供操作数。</li></ul>"
						},
						{
							"number": "4.1.2",
							"heading": "寄存器队列",
							"anchor": "sec-4.1.2",
							"html": "<ul><li>寄存器队列按先进先出的方式组织，数据从一端写入、从另一端读出。</li><li>队列由一组寄存器加上读指针和写指针构成，两个指针分别指示当前的读出位置和写入位置。</li><li>队列满时不能继续写入，队列空时不能读出，需要由满标志和空标志加以判断。</li><li>队列常用于缓冲两个速度不匹配的部件之间的数据传送。</li></ul>"
						},
						{
							"number": "4.1.3",
							"heading": "寄存器堆栈",
							"anchor": "sec-4.1.3",
							"html": "<ul><li>寄存器堆栈按后进先出的方式工作，最后写入的数据最先被读出。</li><li>堆栈用一个堆栈指针指示栈顶位置，入栈和出栈都围绕栈顶进行。</li><li>堆栈常用于保存子程序返回地址和中断现场，使嵌套调用能按相反顺序恢复。</li><li>堆栈深度有限，写入超出容量会发生溢出，读出空栈会发生下溢，需要由控制逻辑检测。</li></ul>\n<p class=\"pitfall\">易错：堆栈是后进先出，队列是先进先出，两者取出数据的顺序正好相反。</p>"
						},
						{
							"number": "4.1.4",
							"heading": "寄存器堆的端口",
							"anchor": "sec-4.1.4",
							"html": "<ul><li>单端口寄存器堆只有一个地址端，读和写分时进行，结构简单但每周期只能访问一个寄存器。</li><li>双端口寄存器堆有两套独立地址，可以在同一周期读出两个操作数，适合运算部件同时取两个源操作数。</li><li>读写端口分开时，一个端口专用于写、另一个专用于读，写操作仍由时钟沿控制。</li><li>同一地址在同一周期被同时读写时，输出取旧值还是新值由器件规定，设计不能依赖未定义的结果。</li><li>端口增加会使存储单元和译码网络成倍增加，端口数按实际访问需求确定。</li></ul>\n<p class=\"pitfall\">易错：双端口是指可同时访问两个不同地址，不等于可以同时向同一寄存器写入两个数据；同址写冲突仍要避免。</p>"
						}
					],
					"number": "4.1",
					"anchor": "sec-4.1",
					"html": ""
				},
				{
					"heading": "随机读写存储器 RAM",
					"lines": [],
					"subs": [
						{
							"number": "4.2.1",
							"heading": "RAM 的逻辑结构",
							"anchor": "sec-4.2.1",
							"html": "<ul><li>RAM 由存储阵列、地址译码器、读写控制电路和数据输入输出缓冲组成。</li><li>存储阵列按行和列排成矩阵，每个存储元保存一位二进制信息。</li><li>地址经译码后选中一个存储单元，读写控制信号决定该单元被读出还是被写入。</li><li>RAM 掉电后存储的信息全部丢失，属于易失性存储器。</li></ul>\n<figure id=\"fig-sec-4.2.1-1\" data-fig=\"fig-sec-4.2.1-1\" data-sec=\"sec-4.2.1\" data-caption=\"RAM 的地址译码、存储阵列与数据通路\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1ODAgMzEwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IlJBTSDnmoTpgLvovpHnu5PmnoTvvJrlnLDlnYDnu4/ooYzor5HnoIHpgInkuK3ooYzvvIzliJfpgInmi6npgIHliLDmlbDmja7nq6/vvIzor7vlhpnnlLHmjqfliLbkv6Hlj7flhrPlrpoiPgoJPGcgZmlsbD0iIzFjMWYyNiIgc3Ryb2tlPSIjNThjYzAyIiBzdHJva2Utd2lkdGg9IjIiPgoJCTxyZWN0IHg9IjE1MCIgeT0iNzAiIHdpZHRoPSI5NiIgaGVpZ2h0PSIxNTAiIHJ4PSI4Ii8+CgkJPHJlY3QgeD0iMzMwIiB5PSI3MCIgd2lkdGg9Ijk2IiBoZWlnaHQ9IjE1MCIgcng9IjgiLz4KCTwvZz4KCTxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzhiOTNhMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiPgoJCTxwYXRoIGQ9Ik00MCA5NmgxMTBNNDAgMTMwaDExME00MCAxNjRoMTEwIi8+CgkJPHBhdGggZD0iTTI0NiAxMDBoODRNMjQ2IDE0MGg4NE0yNDYgMTgwaDg0Ii8+CgkJPHBhdGggZD0iTTQyNiA5Nmg2NE00MjYgMTMwaDY0TTQyNiAxNjRoNjQiLz4KCQk8cGF0aCBkPSJNMjQ2IDIwOGg4NE0yOTAgMTMwdi0xOCIvPgoJCTxwYXRoIGQ9Ik00OTAgOTZ2MTEyIi8+Cgk8L2c+Cgk8ZyBzdHJva2U9IiMzYTQyNTAiIHN0cm9rZS13aWR0aD0iMS4yIj4KCQk8cGF0aCBkPSJNMzQ2IDg0aDY0TTM0NiAxMDRoNjRNMzQ2IDEyNGg2NE0zNDYgMTQ0aDY0TTM0NiAxNjRoNjRNMzQ2IDE4NGg2NE0zNDYgMjA0aDY0Ii8+CgkJPHBhdGggZD0iTTM2MiA3NHYxNDJNMzc4IDc0djE0Mk0zOTQgNzR2MTQyIi8+Cgk8L2c+Cgk8ZyBmb250LWZhbWlseT0iU2Vnb2UgVUksIE1pY3Jvc29mdCBZYUhlaSwgc2Fucy1zZXJpZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+CgkJPHRleHQgeD0iMTk4IiB5PSIxNTAiIGZpbGw9IiNlNmU4ZWUiIGZvbnQtc2l6ZT0iMTMiPuihjDwvdGV4dD4KCQk8dGV4dCB4PSIxOTgiIHk9IjE3MCIgZmlsbD0iI2U2ZThlZSIgZm9udC1zaXplPSIxMyI+6K+R56CB5ZmoPC90ZXh0PgoJCTx0ZXh0IHg9IjM3OCIgeT0iMTUwIiBmaWxsPSIjZTZlOGVlIiBmb250LXNpemU9IjEzIj7lrZjlgqjpmLXliJc8L3RleHQ+CgkJPHRleHQgeD0iMzc4IiB5PSIxNzAiIGZpbGw9IiM5YWEyYjEiIGZvbnQtc2l6ZT0iMTEiPjLigb8g6KGMIMOXIG0g5YiXPC90ZXh0PgoJCTx0ZXh0IHg9IjM3OCIgeT0iMjQ0IiBmaWxsPSIjOWFhMmIxIiBmb250LXNpemU9IjEyIj7liJfpgInmi6k8L3RleHQ+CgkJPHRleHQgeD0iNTIwIiB5PSIxNTIiIGZpbGw9IiM5YWEyYjEiIGZvbnQtc2l6ZT0iMTIiPuaVsOaNrjwvdGV4dD4KCQk8dGV4dCB4PSI1MjAiIHk9IjE3MCIgZmlsbD0iIzlhYTJiMSIgZm9udC1zaXplPSIxMiI+SS9PPC90ZXh0PgoJCTx0ZXh0IHg9IjYyIiB5PSI3NiIgZmlsbD0iIzlhYTJiMSIgZm9udC1zaXplPSIxMiI+QTA8L3RleHQ+CgkJPHRleHQgeD0iNjIiIHk9IjExMiIgZmlsbD0iIzlhYTJiMSIgZm9udC1zaXplPSIxMiI+QTE8L3RleHQ+CgkJPHRleHQgeD0iNjIiIHk9IjE0NiIgZmlsbD0iIzlhYTJiMSIgZm9udC1zaXplPSIxMiI+QW4tMTwvdGV4dD4KCQk8dGV4dCB4PSIyOTAiIHk9IjI4NCIgZmlsbD0iIzlhYTJiMSIgZm9udC1zaXplPSIxMiI+Ui9XIOaOp+WItuivu+aIluWGmTwvdGV4dD4KCTwvZz4KPC9zdmc+Cg==\" alt=\"RAM 的地址译码、存储阵列与数据通路\" loading=\"lazy\"><figcaption>RAM 的地址译码、存储阵列与数据通路</figcaption></figure>"
						},
						{
							"number": "4.2.2",
							"heading": "地址译码方法",
							"anchor": "sec-4.2.2",
							"html": "<ul><li>单译码方式用一个译码器直接译出全部地址，每个输出选中一整行存储单元。</li><li>双译码方式把地址分成行地址和列地址分别译码，由行线和列线的交点选中存储元。</li><li>地址位数较多时双译码可以显著减少译码输出线的数目，缓解译码器规模随地址位数迅速增长的矛盾。</li><li>译码器的输出作为字选信号，控制被选中的存储单元与数据线接通。</li></ul>"
						},
						{
							"number": "4.2.3",
							"heading": "SRAM 存储器",
							"anchor": "sec-4.2.3",
							"html": "<ul><li>SRAM 的存储元由六个 MOS 管组成的双稳态触发器构成，靠正反馈保持数据。</li><li>只要电源不断，SRAM 中的内容就能一直保持，不需要刷新。</li><li>SRAM 读写速度快，但每个存储元所用管子多，集成度较低、功耗较大。</li><li>2114 是 1K×4 的 SRAM，6264 是 8K×8 的 SRAM，常用于小型系统的高速缓冲和便签存储。</li></ul>\n<figure id=\"fig-sec-4.2.3-1\" data-fig=\"fig-sec-4.2.3-1\" data-sec=\"sec-4.2.3\" data-caption=\"六管 SRAM 存储元的双稳态结构与位线连接\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMjcwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IuWFreeuoSBTUkFNIOWtmOWCqOWFg+eahOWPjOeos+aAgee7k+aehOS4juS9jee6v+i/nuaOpSI+CjxzdHlsZT4KLnN7ZmlsbDpub25lO3N0cm9rZTojNThjYzAyO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZH0KLnR7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweH0KLmJ7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo2MDB9Ci5te2ZpbGw6IzlhYTJiMTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEyLjVweH0KLmd7ZmlsbDpub25lO3N0cm9rZTojM2E0MjUwO3N0cm9rZS13aWR0aDoxLjJ9Ci5ib3h7ZmlsbDojMWIyMDI5O3N0cm9rZTojM2E0MjUwO3N0cm9rZS13aWR0aDoxLjV9Cjwvc3R5bGU+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxNDE4MjEiLz4KPHRleHQgeD0iMjQiIHk9IjI4IiBjbGFzcz0iYiI+5YWt566hIFNSQU0g5a2Y5YKo5YWDPC90ZXh0Pgo8bGluZSB4MT0iMTIwIiB5MT0iNTUiIHgyPSIxMjAiIHkyPSIyMjAiIGNsYXNzPSJzIi8+PGxpbmUgeDE9IjE1MCIgeTE9IjU1IiB4Mj0iMTUwIiB5Mj0iMjIwIiBjbGFzcz0icyIvPjxsaW5lIHgxPSIxMjAiIHkxPSI1NSIgeDI9IjUyMCIgeTI9IjU1IiBjbGFzcz0icyIvPgo8dGV4dCB4PSI5NiIgeT0iNDgiIGNsYXNzPSJ0Ij5CTDwvdGV4dD48dGV4dCB4PSIxMzIiIHk9IjQ4IiBjbGFzcz0idCI+QkzMhDwvdGV4dD48dGV4dCB4PSI0NzAiIHk9IjQ2IiBjbGFzcz0ibSI+V0w8L3RleHQ+CjxyZWN0IHg9IjIyMCIgeT0iODAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNTUiIHJ4PSI2IiBjbGFzcz0iYm94Ii8+PHRleHQgeD0iMjgwIiB5PSIxMTMiIGNsYXNzPSJ0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7lj43nm7jlmaggMTwvdGV4dD4KPHJlY3QgeD0iMjIwIiB5PSIxNTUiIHdpZHRoPSIxMjAiIGhlaWdodD0iNTUiIHJ4PSI2IiBjbGFzcz0iYm94Ii8+PHRleHQgeD0iMjgwIiB5PSIxODgiIGNsYXNzPSJ0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7lj43nm7jlmaggMjwvdGV4dD4KPGxpbmUgeDE9IjM0MCIgeTE9IjEwMCIgeDI9IjM5MCIgeTI9IjEwMCIgY2xhc3M9InMiLz48bGluZSB4MT0iMzkwIiB5MT0iMTAwIiB4Mj0iMzkwIiB5Mj0iMTkwIiBjbGFzcz0icyIvPjxsaW5lIHgxPSIzOTAiIHkxPSIxOTAiIHgyPSIzNDAiIHkyPSIxOTAiIGNsYXNzPSJzIi8+CjxsaW5lIHgxPSIyMjAiIHkxPSIxOTAiIHgyPSIxNzAiIHkyPSIxOTAiIGNsYXNzPSJzIi8+PGxpbmUgeDE9IjE3MCIgeTE9IjE5MCIgeDI9IjE3MCIgeTI9IjEwMCIgY2xhc3M9InMiLz48bGluZSB4MT0iMTcwIiB5MT0iMTAwIiB4Mj0iMjIwIiB5Mj0iMTAwIiBjbGFzcz0icyIvPgo8cmVjdCB4PSIxNjAiIHk9IjEyMCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBjbGFzcz0iYm94Ii8+PHJlY3QgeD0iMTYwIiB5PSIxNDAiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgY2xhc3M9ImJveCIvPgo8bGluZSB4MT0iMTUwIiB5MT0iNzAiIHgyPSIxNjAiIHkyPSI3MCIgY2xhc3M9InMiLz48bGluZSB4MT0iMTYwIiB5MT0iNzAiIHgyPSIxNjAiIHkyPSIxMjAiIGNsYXNzPSJzIi8+CjxsaW5lIHgxPSIxNTAiIHkxPSIyMDAiIHgyPSIxNjAiIHkyPSIyMDAiIGNsYXNzPSJzIi8+PGxpbmUgeDE9IjE2MCIgeTE9IjIwMCIgeDI9IjE2MCIgeTI9IjE2NCIgY2xhc3M9InMiLz4KPGxpbmUgeDE9IjM0MCIgeTE9IjEwMCIgeDI9IjQyMCIgeTI9IjEwMCIgY2xhc3M9InMiLz48bGluZSB4MT0iNDIwIiB5MT0iMTAwIiB4Mj0iNDIwIiB5Mj0iMTUwIiBjbGFzcz0icyIvPgo8bGluZSB4MT0iMzQwIiB5MT0iMTkwIiB4Mj0iNDcwIiB5Mj0iMTkwIiBjbGFzcz0icyIvPjxsaW5lIHgxPSI0NzAiIHkxPSIxOTAiIHgyPSI0NzAiIHkyPSIxNjUiIGNsYXNzPSJzIi8+Cjx0ZXh0IHg9IjIxMCIgeT0iMjM4IiBjbGFzcz0ibSI+TTEtTTQg5Lqk5Y+J6ICm5ZCI5L+d5oyB54q25oCB77yMTTXjgIFNNiDlj5flrZfnur/mjqfliLbmjqXlhaXkvY3nur88L3RleHQ+Cjx0ZXh0IHg9IjQzMCIgeT0iOTAiIGNsYXNzPSJtIj5RPC90ZXh0Pjx0ZXh0IHg9IjQzMCIgeT0iMTc2IiBjbGFzcz0ibSI+UcyEPC90ZXh0Pgo8dGV4dCB4PSIzMzAiIHk9IjIxNCIgY2xhc3M9Im0iPuS4jeaWreeUteWNs+WPr+S/neaMgTwvdGV4dD4KPC9zdmc+Cg==\" alt=\"六管 SRAM 存储元的双稳态结构与位线连接\" loading=\"lazy\"><figcaption>六管 SRAM 存储元的双稳态结构与位线连接</figcaption></figure>"
						},
						{
							"number": "4.2.4",
							"heading": "DRAM 存储器",
							"anchor": "sec-4.2.4",
							"html": "<ul><li>DRAM 的存储元由一个 MOS 管和一个电容构成，靠电容上存储的电荷表示信息。</li><li>电容上的电荷会逐渐泄漏，因此必须在信息丢失之前周期性刷新。</li><li>刷新按行进行，只把存储内容读出再写回，不改变原有数据。</li><li>DRAM 存储元结构简单、集成度高、成本低，但需要刷新电路，速度略低于 SRAM。</li></ul>\n<p class=\"pitfall\">易错：RAM 是易失性存储器，掉电后内容全部丢失，不能用来长期保存程序和数据。</p>\n<figure id=\"fig-sec-4.2.4-1\" data-fig=\"fig-sec-4.2.4-1\" data-sec=\"sec-4.2.4\" data-caption=\"单管 DRAM 存储元与周期刷新\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMjUwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IuWNleeuoSBEUkFNIOWtmOWCqOWFg+S4juWRqOacn+WIt+aWsCI+CjxzdHlsZT4KLnN7ZmlsbDpub25lO3N0cm9rZTojNThjYzAyO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZH0KLnR7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweH0KLmJ7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo2MDB9Ci5te2ZpbGw6IzlhYTJiMTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEyLjVweH0KLmd7ZmlsbDpub25lO3N0cm9rZTojM2E0MjUwO3N0cm9rZS13aWR0aDoxLjJ9Ci5ib3h7ZmlsbDojMWIyMDI5O3N0cm9rZTojM2E0MjUwO3N0cm9rZS13aWR0aDoxLjV9Cjwvc3R5bGU+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxNDE4MjEiLz4KPHRleHQgeD0iMjQiIHk9IjI4IiBjbGFzcz0iYiI+MVQxQyDlrZjlgqjlhYM8L3RleHQ+CjxsaW5lIHgxPSI5MCIgeTE9IjU1IiB4Mj0iOTAiIHkyPSIyMDAiIGNsYXNzPSJzIi8+PHRleHQgeD0iNjYiIHk9IjQ4IiBjbGFzcz0idCI+Qkw8L3RleHQ+CjxsaW5lIHgxPSI5MCIgeTE9IjgwIiB4Mj0iMTkwIiB5Mj0iODAiIGNsYXNzPSJzIi8+PHRleHQgeD0iMTI0IiB5PSI3MiIgY2xhc3M9Im0iPldMPC90ZXh0Pgo8cmVjdCB4PSIxOTAiIHk9IjYyIiB3aWR0aD0iMzQiIGhlaWdodD0iMzYiIGNsYXNzPSJib3giLz48dGV4dCB4PSIyMDciIHk9Ijg2IiBjbGFzcz0ibSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TTwvdGV4dD4KPGxpbmUgeDE9IjIyNCIgeTE9IjgwIiB4Mj0iMjcwIiB5Mj0iODAiIGNsYXNzPSJzIi8+CjxsaW5lIHgxPSIyNzAiIHkxPSI3MCIgeDI9IjI3MCIgeTI9IjkwIiBjbGFzcz0icyIvPjxsaW5lIHgxPSIyODYiIHkxPSI3MCIgeDI9IjI4NiIgeTI9IjkwIiBjbGFzcz0icyIvPjxsaW5lIHgxPSIyNzAiIHkxPSI5MCIgeDI9IjI4NiIgeTI9IjkwIiBjbGFzcz0icyIvPgo8dGV4dCB4PSIyOTYiIHk9Ijg0IiBjbGFzcz0ibSI+QzwvdGV4dD4KPGxpbmUgeDE9IjI3OCIgeTE9IjkwIiB4Mj0iMjc4IiB5Mj0iMTMwIiBjbGFzcz0icyIvPjxsaW5lIHgxPSIyNjIiIHkxPSIxMzAiIHgyPSIyOTQiIHkyPSIxMzAiIGNsYXNzPSJzIi8+Cjx0ZXh0IHg9IjE5NiIgeT0iMTE4IiBjbGFzcz0ibSI+55S16I236KGo56S6IDEvMDwvdGV4dD4KPGxpbmUgeDE9IjMwMCIgeTE9IjYyIiB4Mj0iMzAwIiB5Mj0iMjI1IiBjbGFzcz0iZyIvPgo8dGV4dCB4PSIzMzAiIHk9Ijc0IiBjbGFzcz0iYiI+5Yi35pawPC90ZXh0Pgo8dGV4dCB4PSIzMzAiIHk9IjEwNCIgY2xhc3M9Im0iPueUteWuueeUteiNt+S8muazhOa8jzwvdGV4dD4KPHRleHQgeD0iMzMwIiB5PSIxMzIiIGNsYXNzPSJtIj7mjInooYzor7vlh7rlubbljp/moLflhpnlm548L3RleHQ+Cjx0ZXh0IHg9IjMzMCIgeT0iMTYwIiBjbGFzcz0ibSI+5Yi35paw5pyf6Ze05pWw5o2u5LiN5Y+YPC90ZXh0Pgo8dGV4dCB4PSIzMzAiIHk9IjE5NiIgY2xhc3M9Im0iPue7k+aehOeugOWNleOAgembhuaIkOW6pumrmO+8jOS9humcgOWIt+aWsOeUtei3rzwvdGV4dD4KPC9zdmc+Cg==\" alt=\"单管 DRAM 存储元与周期刷新\" loading=\"lazy\"><figcaption>单管 DRAM 存储元与周期刷新</figcaption></figure>"
						},
						{
							"number": "4.2.5",
							"heading": "存储容量与地址线",
							"anchor": "sec-4.2.5",
							"html": "<ul><li>容量写成\"字数乘字长\"，如 1K×4 表示 1024 个字、每字 4 位，总位数为 4096 位。</li><li>字数决定地址线条数，N 个字需要 log2 N 条地址线；字长决定数据线条数。</li><li>地址范围用十六进制表示时，1K 个单元占 000H 到 3FFH，2K 占 000H 到 7FFH。</li><li>多片扩展时高位地址经译码产生片选，低位地址接各片的片内地址端。</li><li>估算所需芯片数时分别算字扩展倍数和位扩展倍数，两者相乘就是总片数。</li></ul>\n<p class=\"pitfall\">易错：容量标称中的 K 按 1024 计算，与磁盘容量常用的 1000 进制不同，换算地址范围时按 1024 取整。</p>"
						}
					],
					"number": "4.2",
					"anchor": "sec-4.2",
					"html": ""
				},
				{
					"heading": "只读存储器 ROM",
					"lines": [],
					"subs": [
						{
							"number": "4.3.1",
							"heading": "掩模 ROM",
							"anchor": "sec-4.3.1",
							"html": "<ul><li>掩模 ROM 在制造时由光刻掩模决定每个存储元存储 0 还是 1，出厂后内容不能再更改。</li><li>存储阵列中有的单元有器件、有的没有，靠器件的有无来区分两种信息。</li><li>掩模 ROM 适合大批量生产内容固定的程序，单位成本低、可靠性高。</li><li>它的缺点是一旦设计定型就无法修改，只适用于程序已经稳定的场合。</li></ul>"
						},
						{
							"number": "4.3.2",
							"heading": "可编程 ROM",
							"anchor": "sec-4.3.2",
							"html": "<ul><li>可编程 ROM 出厂时各存储元处于同一状态，用户可用编程器按需要写入数据。</li><li>早期的 PROM 用熔丝作存储元，写入时熔断相应熔丝，属于一次性可编程。</li><li>紫外线擦除的 EPROM 用浮栅 MOS 管存储电荷，擦除后可以重新写入。</li><li>电擦除的 EEPROM 可按字节改写，使用灵活，但单元结构较复杂。</li></ul>\n<figure id=\"fig-sec-4.3.2-1\" data-fig=\"fig-sec-4.3.2-1\" data-sec=\"sec-4.3.2\" data-caption=\"ROM 的地址译码器与存储阵列\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMjkwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IlJPTSDnmoTlnLDlnYDor5HnoIHlmajkuI7lrZjlgqjpmLXliJciPgo8c3R5bGU+Ci5ze2ZpbGw6bm9uZTtzdHJva2U6IzU4Y2MwMjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmR9Ci50e2ZpbGw6I2U2ZThlZTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHh9Ci5ie2ZpbGw6I2U2ZThlZTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NjAwfQoubXtmaWxsOiM5YWEyYjE7Zm9udC1mYW1pbHk6IlNlZ29lIFVJIiwiTWljcm9zb2Z0IFlhSGVpIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMi41cHh9Ci5ne2ZpbGw6bm9uZTtzdHJva2U6IzNhNDI1MDtzdHJva2Utd2lkdGg6MS4yfQouZHtmaWxsOm5vbmU7c3Ryb2tlOiMzYTQyNTA7c3Ryb2tlLXdpZHRoOjEuMjtzdHJva2UtZGFzaGFycmF5OjUgNX0KLmJveHtmaWxsOiMxYjIwMjk7c3Ryb2tlOiMzYTQyNTA7c3Ryb2tlLXdpZHRoOjEuNX0KLmNvZGV7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJDb25zb2xhcyIsIkNvdXJpZXIgTmV3Iixtb25vc3BhY2U7Zm9udC1zaXplOjEzcHh9Cjwvc3R5bGU+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxNDE4MjEiLz4KPHRleHQgeD0iMjQiIHk9IjI4IiBjbGFzcz0iYiI+Uk9NIOeahOWtmOWCqOmYteWIlzwvdGV4dD4KPHJlY3QgeD0iMjQiIHk9IjY0IiB3aWR0aD0iODQiIGhlaWdodD0iMTU2IiByeD0iNyIgY2xhc3M9ImJveCIvPgo8dGV4dCB4PSI2NiIgeT0iMTM0IiBjbGFzcz0idCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+5Zyw5Z2APC90ZXh0Pgo8dGV4dCB4PSI2NiIgeT0iMTU2IiBjbGFzcz0idCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+6K+R56CBPC90ZXh0Pgo8bGluZSB4MT0iMTA4IiB5MT0iODQiIHgyPSI1NDAiIHkyPSI4NCIgY2xhc3M9InMiLz4KPGxpbmUgeDE9IjEwOCIgeTE9IjEyNCIgeDI9IjU0MCIgeTI9IjEyNCIgY2xhc3M9InMiLz4KPGxpbmUgeDE9IjEwOCIgeTE9IjE2NCIgeDI9IjU0MCIgeTI9IjE2NCIgY2xhc3M9InMiLz4KPGxpbmUgeDE9IjEwOCIgeTE9IjIwNCIgeDI9IjU0MCIgeTI9IjIwNCIgY2xhc3M9InMiLz4KPGxpbmUgeDE9IjIwMCIgeTE9IjY0IiB4Mj0iMjAwIiB5Mj0iMjI0IiBjbGFzcz0iZyIvPgo8bGluZSB4MT0iMzAwIiB5MT0iNjQiIHgyPSIzMDAiIHkyPSIyMjQiIGNsYXNzPSJnIi8+CjxsaW5lIHgxPSI0MDAiIHkxPSI2NCIgeDI9IjQwMCIgeTI9IjIyNCIgY2xhc3M9ImciLz4KPGxpbmUgeDE9IjUwMCIgeTE9IjY0IiB4Mj0iNTAwIiB5Mj0iMjI0IiBjbGFzcz0iZyIvPgo8Y2lyY2xlIGN4PSIyMDAiIGN5PSI4NCIgcj0iMy41IiBmaWxsPSIjM2E0MjUwIi8+PGNpcmNsZSBjeD0iMzAwIiBjeT0iODQiIHI9IjMuNSIgZmlsbD0iIzNhNDI1MCIvPjxjaXJjbGUgY3g9IjQwMCIgY3k9Ijg0IiByPSIzLjUiIGZpbGw9IiMzYTQyNTAiLz48Y2lyY2xlIGN4PSI1MDAiIGN5PSI4NCIgcj0iMy41IiBmaWxsPSIjM2E0MjUwIi8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjEyNCIgcj0iMy41IiBmaWxsPSIjM2E0MjUwIi8+PGNpcmNsZSBjeD0iMzAwIiBjeT0iMTI0IiByPSIzLjUiIGZpbGw9IiMzYTQyNTAiLz48Y2lyY2xlIGN4PSI0MDAiIGN5PSIxMjQiIHI9IjMuNSIgZmlsbD0iIzNhNDI1MCIvPjxjaXJjbGUgY3g9IjUwMCIgY3k9IjEyNCIgcj0iMy41IiBmaWxsPSIjM2E0MjUwIi8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjE2NCIgcj0iNSIgZmlsbD0iIzU4Y2MwMiIvPjxjaXJjbGUgY3g9IjMwMCIgY3k9IjE2NCIgcj0iNSIgZmlsbD0iIzU4Y2MwMiIvPjxjaXJjbGUgY3g9IjQwMCIgY3k9IjE2NCIgcj0iNSIgZmlsbD0iIzU4Y2MwMiIvPjxjaXJjbGUgY3g9IjUwMCIgY3k9IjE2NCIgcj0iNSIgZmlsbD0iIzU4Y2MwMiIvPgo8Y2lyY2xlIGN4PSIyMDAiIGN5PSIyMDQiIHI9IjMuNSIgZmlsbD0iIzNhNDI1MCIvPjxjaXJjbGUgY3g9IjMwMCIgY3k9IjIwNCIgcj0iMy41IiBmaWxsPSIjM2E0MjUwIi8+PGNpcmNsZSBjeD0iNDAwIiBjeT0iMjA0IiByPSIzLjUiIGZpbGw9IiMzYTQyNTAiLz48Y2lyY2xlIGN4PSI1MDAiIGN5PSIyMDQiIHI9IjMuNSIgZmlsbD0iIzNhNDI1MCIvPgo8dGV4dCB4PSIyMDAiIHk9IjU2IiBjbGFzcz0ibSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RDM8L3RleHQ+Cjx0ZXh0IHg9IjMwMCIgeT0iNTYiIGNsYXNzPSJtIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5EMjwvdGV4dD4KPHRleHQgeD0iNDAwIiB5PSI1NiIgY2xhc3M9Im0iIHRleHQtYW5jaG9yPSJtaWRkbGUiPkQxPC90ZXh0Pgo8dGV4dCB4PSI1MDAiIHk9IjU2IiBjbGFzcz0ibSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RDA8L3RleHQ+Cjx0ZXh0IHg9IjU1MiIgeT0iODgiIGNsYXNzPSJtIj5XMDwvdGV4dD4KPHRleHQgeD0iNTUyIiB5PSIxMjgiIGNsYXNzPSJtIj5XMTwvdGV4dD4KPHRleHQgeD0iNTUyIiB5PSIxNjgiIGNsYXNzPSJtIj5XMjwvdGV4dD4KPHRleHQgeD0iNTUyIiB5PSIyMDgiIGNsYXNzPSJtIj5XMzwvdGV4dD4KPHRleHQgeD0iMjQiIHk9IjI2NCIgY2xhc3M9Im0iPumAieS4reeahOWtl+e6v+aVtOihjOacieaViO+8jOWQhOS9jee6v+S4iueahOaVsOaNruWQjOaXtumAgeWHujwvdGV4dD4KPC9zdmc+Cg==\" alt=\"ROM 的地址译码器与存储阵列\" loading=\"lazy\"><figcaption>ROM 的地址译码器与存储阵列</figcaption></figure>\n<p class=\"pitfall\">易错：PROM 的可编程通常指一次性写入，写错后无法修改，并不等于可以反复擦写。</p>"
						},
						{
							"number": "4.3.3",
							"heading": "用 ROM 实现组合逻辑",
							"anchor": "sec-4.3.3",
							"html": "<ul><li>ROM 的地址译码器相当于与阵列，产生全部最小项；存储阵列相当于或阵列，把选中的最小项相加后输出。</li><li>把输入变量接地址端，按真值表在对应单元写入 0 或 1，输出就是所需的组合函数。</li><li>多个输出函数可以共用同一组地址，每个输出占字长的一位，一次读出全部结果。</li><li>这种实现不需要化简，改函数只需改存储内容，适合码表、字符发生器等查表型逻辑。</li><li>输入变量每增加一个，字数翻倍，容量随变量数迅速增长，只适合变量不多的函数。</li></ul>\n<p class=\"pitfall\">易错：ROM 实现组合逻辑时地址就是输入组合，地址接错一位相当于真值表整体错位，输出函数随之改变。</p>"
						}
					],
					"number": "4.3",
					"anchor": "sec-4.3",
					"html": ""
				},
				{
					"heading": "FLASH 存储器",
					"lines": [],
					"subs": [
						{
							"number": "4.4.1",
							"heading": "FLASH 存储元",
							"anchor": "sec-4.4.1",
							"html": "<ul><li>FLASH 存储元基于浮栅 MOS 管，用浮栅中是否存有电荷来表示逻辑 1 和逻辑 0。</li><li>写入时把电子注入浮栅，擦除时把电子从浮栅移走，两种操作改变的都是浮栅中的电荷量。</li><li>浮栅被氧化层包围，电荷泄漏很慢，因此 FLASH 具有非易失性。</li><li>读取时根据浮栅电荷引起的阈值电压变化判断存储内容是 1 还是 0。</li></ul>\n<figure id=\"fig-sec-4.4.1-1\" data-fig=\"fig-sec-4.4.1-1\" data-sec=\"sec-4.4.1\" data-caption=\"FLASH 存储元的浮栅 MOS 剖面结构\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMzAwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IkZMQVNIIOWtmOWCqOWFg+eahOa1ruaghSBNT1Mg5YmW6Z2i57uT5p6EIj4KPHN0eWxlPgouc3tmaWxsOm5vbmU7c3Ryb2tlOiM1OGNjMDI7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kfQoudHtmaWxsOiNlNmU4ZWU7Zm9udC1mYW1pbHk6IlNlZ29lIFVJIiwiTWljcm9zb2Z0IFlhSGVpIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNHB4fQouYntmaWxsOiNlNmU4ZWU7Zm9udC1mYW1pbHk6IlNlZ29lIFVJIiwiTWljcm9zb2Z0IFlhSGVpIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjYwMH0KLm17ZmlsbDojOWFhMmIxO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTIuNXB4fQouZ3tmaWxsOm5vbmU7c3Ryb2tlOiMzYTQyNTA7c3Ryb2tlLXdpZHRoOjEuMn0KLmR7ZmlsbDpub25lO3N0cm9rZTojM2E0MjUwO3N0cm9rZS13aWR0aDoxLjI7c3Ryb2tlLWRhc2hhcnJheTo1IDV9Ci5ib3h7ZmlsbDojMWIyMDI5O3N0cm9rZTojM2E0MjUwO3N0cm9rZS13aWR0aDoxLjV9Ci5jb2Rle2ZpbGw6I2U2ZThlZTtmb250LWZhbWlseToiQ29uc29sYXMiLCJDb3VyaWVyIE5ldyIsbW9ub3NwYWNlO2ZvbnQtc2l6ZToxM3B4fQo8L3N0eWxlPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMTQxODIxIi8+Cjx0ZXh0IHg9IjI0IiB5PSIyOCIgY2xhc3M9ImIiPkZMQVNIIOWtmOWCqOWFg+e7k+aehDwvdGV4dD4KPHJlY3QgeD0iOTAiIHk9IjIwMCIgd2lkdGg9IjM4MCIgaGVpZ2h0PSI1MiIgcng9IjQiIGNsYXNzPSJib3giLz4KPHRleHQgeD0iMjgwIiB5PSIyMzMiIGNsYXNzPSJtIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5QIOWei+ihrOW6lTwvdGV4dD4KPHJlY3QgeD0iMTEwIiB5PSIyMDAiIHdpZHRoPSI3MCIgaGVpZ2h0PSIyMCIgZmlsbD0iIzIwMzUxYSIgc3Ryb2tlPSIjNThjYzAyIiBzdHJva2Utd2lkdGg9IjEuNSIvPgo8cmVjdCB4PSIzODAiIHk9IjIwMCIgd2lkdGg9IjcwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjMjAzNTFhIiBzdHJva2U9IiM1OGNjMDIiIHN0cm9rZS13aWR0aD0iMS41Ii8+CjxyZWN0IHg9IjE4MCIgeT0iMTg2IiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE0IiBmaWxsPSIjM2E0MjUwIi8+CjxyZWN0IHg9IjE4MCIgeT0iMTY2IiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjMjAzNTFhIiBzdHJva2U9IiM1OGNjMDIiIHN0cm9rZS13aWR0aD0iMS41Ii8+CjxyZWN0IHg9IjE4MCIgeT0iMTUyIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE0IiBmaWxsPSIjM2E0MjUwIi8+CjxyZWN0IHg9IjE4MCIgeT0iMTMwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIyIiBjbGFzcz0iYm94Ii8+CjxsaW5lIHgxPSIzODAiIHkxPSIxNDEiIHgyPSI0NzIiIHkyPSIxNDQiIGNsYXNzPSJnIi8+Cjx0ZXh0IHg9IjQ4MCIgeT0iMTQ4IiBjbGFzcz0ibSI+5o6n5Yi25qCFPC90ZXh0Pgo8bGluZSB4MT0iMzgwIiB5MT0iMTc2IiB4Mj0iNDcyIiB5Mj0iMTgwIiBjbGFzcz0iZyIvPgo8dGV4dCB4PSI0ODAiIHk9IjE4NCIgY2xhc3M9Im0iPua1ruaghTwvdGV4dD4KPGxpbmUgeDE9IjM4MCIgeTE9IjE5MyIgeDI9IjQ3MiIgeTI9IjIwOCIgY2xhc3M9ImciLz4KPHRleHQgeD0iNDgwIiB5PSIyMTIiIGNsYXNzPSJtIj7pmqfpgZPmsKfljJblsYI8L3RleHQ+CjxsaW5lIHgxPSIxNDUiIHkxPSIyMjAiIHgyPSIxNDUiIHkyPSIyNjIiIGNsYXNzPSJnIi8+Cjx0ZXh0IHg9IjE0NSIgeT0iMjc4IiBjbGFzcz0ibSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+5rqQ5p6BPC90ZXh0Pgo8bGluZSB4MT0iNDE1IiB5MT0iMjIwIiB4Mj0iNDE1IiB5Mj0iMjYyIiBjbGFzcz0iZyIvPgo8dGV4dCB4PSI0MTUiIHk9IjI3OCIgY2xhc3M9Im0iIHRleHQtYW5jaG9yPSJtaWRkbGUiPua8j+aegTwvdGV4dD4KPHRleHQgeD0iNDgwIiB5PSIyNDAiIGNsYXNzPSJtIj7mta7moIXmnInnlLXojbfvvJror7sgMDwvdGV4dD4KPHRleHQgeD0iNDgwIiB5PSIyNjQiIGNsYXNzPSJtIj7mta7moIXml6DnlLXojbfvvJror7sgMTwvdGV4dD4KPC9zdmc+Cg==\" alt=\"FLASH 存储元的浮栅 MOS 剖面结构\" loading=\"lazy\"><figcaption>FLASH 存储元的浮栅 MOS 剖面结构</figcaption></figure>"
						},
						{
							"number": "4.4.2",
							"heading": "FLASH 存储器的基本操作",
							"anchor": "sec-4.4.2",
							"html": "<ul><li>FLASH 的读操作与普通 ROM 类似，给出地址即可读出对应单元的数据。</li><li>写操作称为编程，其作用方向与擦除相反，只能使存储元朝一个方向改变。</li><li>擦除通常以块为单位进行，把整块存储元恢复到初始状态，不能按字节任意擦除。</li><li>FLASH 的擦写次数有限，超过额定次数后存储元的可靠性会下降。</li></ul>"
						},
						{
							"number": "4.4.3",
							"heading": "FLASH 存储器的阵列结构",
							"anchor": "sec-4.4.3",
							"html": "<ul><li>FLASH 阵列按行和列组织，字线控制一行存储元的栅极，位线引出各列的数据。</li><li>常见阵列结构有 NOR 型和 NAND 型，前者随机读取快，后者集成度高、适合大容量存储。</li><li>NOR 型每个存储元直接连到位线，可按字节随机访问，多用于存放程序代码。</li><li>NAND 型把多个存储元串联成串，按页读写、按块擦除，多用于存放数据。</li></ul>\n<p class=\"pitfall\">易错：FLASH 的擦除以块为单位，不能像 RAM 那样直接改写某一个字节。</p>"
						}
					],
					"number": "4.4",
					"anchor": "sec-4.4",
					"html": ""
				},
				{
					"heading": "存储器容量的扩充",
					"lines": [],
					"subs": [
						{
							"number": "4.5.1",
							"heading": "字长位数扩展",
							"anchor": "sec-4.5.1",
							"html": "<ul><li>当存储芯片的字长不足时，用多片同容量芯片并联，共同组成一个更宽的字。</li><li>各片的地址线和读写控制线全部并联，数据线分别接到数据总线的不同位上。</li><li>扩展后的字存储容量不变，字长等于各片字长之和。</li><li>例如用两片 2114 并联，可把 1K×4 扩展成 1K×8。</li></ul>"
						},
						{
							"number": "4.5.2",
							"heading": "字存储容量扩展",
							"anchor": "sec-4.5.2",
							"html": "<ul><li>当需要的单元数超过单片容量时，用多片芯片扩展地址空间。</li><li>各片的数据线并联，高位地址经译码器产生片选信号，分别选中不同的芯片。</li><li>低位地址直接接到各片的地址端，用于片内存储单元的选择。</li><li>例如用八片 2114 配合地址译码，可扩展成 8K×4 的存储器。</li></ul>\n<figure id=\"fig-sec-4.5.2-1\" data-fig=\"fig-sec-4.5.2-1\" data-sec=\"sec-4.5.2\" data-caption=\"存储器的位扩展与字扩展接线方式\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMzAwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IuWtmOWCqOWZqOeahOS9jeaJqeWxleS4juWtl+aJqeWxleaOpee6v+aWueW8jyI+CjxzdHlsZT4KLnN7ZmlsbDpub25lO3N0cm9rZTojNThjYzAyO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZH0KLnR7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweH0KLmJ7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo2MDB9Ci5te2ZpbGw6IzlhYTJiMTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEyLjVweH0KLmd7ZmlsbDpub25lO3N0cm9rZTojM2E0MjUwO3N0cm9rZS13aWR0aDoxLjJ9Ci5ke2ZpbGw6bm9uZTtzdHJva2U6IzNhNDI1MDtzdHJva2Utd2lkdGg6MS4yO3N0cm9rZS1kYXNoYXJyYXk6NSA1fQouYm94e2ZpbGw6IzFiMjAyOTtzdHJva2U6IzNhNDI1MDtzdHJva2Utd2lkdGg6MS41fQouY29kZXtmaWxsOiNlNmU4ZWU7Zm9udC1mYW1pbHk6IkNvbnNvbGFzIiwiQ291cmllciBOZXciLG1vbm9zcGFjZTtmb250LXNpemU6MTNweH0KPC9zdHlsZT48ZGVmcz48bWFya2VyIGlkPSJhciIgbWFya2VyV2lkdGg9IjgiIG1hcmtlckhlaWdodD0iOCIgcmVmWD0iNiIgcmVmWT0iMyIgb3JpZW50PSJhdXRvIj48cGF0aCBkPSJNMCAwIEw2IDMgTDAgNiB6IiBmaWxsPSIjNThjYzAyIi8+PC9tYXJrZXI+PC9kZWZzPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMTQxODIxIi8+Cjx0ZXh0IHg9IjI0IiB5PSIzMCIgY2xhc3M9ImIiPuWtmOWCqOWZqOWuuemHj+aJqeWFhTwvdGV4dD4KPHRleHQgeD0iMjQiIHk9IjYyIiBjbGFzcz0ibSI+5L2N5omp5bGV77yaMUvDlzQg4oaSIDFLw5c4PC90ZXh0Pgo8cmVjdCB4PSIyNCIgeT0iNzYiIHdpZHRoPSIxMjAiIGhlaWdodD0iNDgiIHJ4PSI2IiBjbGFzcz0iYm94Ii8+Cjx0ZXh0IHg9Ijg0IiB5PSIxMDUiIGNsYXNzPSJ0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xS8OXNDwvdGV4dD4KPHJlY3QgeD0iMjQiIHk9IjEzOCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSI0OCIgcng9IjYiIGNsYXNzPSJib3giLz4KPHRleHQgeD0iODQiIHk9IjE2NyIgY2xhc3M9InQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjFLw5c0PC90ZXh0Pgo8bGluZSB4MT0iMTQ0IiB5MT0iMTAwIiB4Mj0iMjEwIiB5Mj0iMTAwIiBjbGFzcz0icyIvPgo8dGV4dCB4PSIyMTgiIHk9IjEwNSIgY2xhc3M9InQiPkQ3772eRDQ8L3RleHQ+CjxsaW5lIHgxPSIxNDQiIHkxPSIxNjIiIHgyPSIyMTAiIHkyPSIxNjIiIGNsYXNzPSJzIi8+Cjx0ZXh0IHg9IjIxOCIgeT0iMTY3IiBjbGFzcz0idCI+RDPvvZ5EMDwvdGV4dD4KPHRleHQgeD0iMjQiIHk9IjIyOCIgY2xhc3M9Im0iPuWcsOWdgOe6v+S4juivu+WGmee6v+WFqOmDqOW5tuiBlDwvdGV4dD4KPGxpbmUgeDE9IjMzMCIgeTE9IjUyIiB4Mj0iMzMwIiB5Mj0iMjY2IiBjbGFzcz0iZyIvPgo8dGV4dCB4PSIzNTYiIHk9IjYyIiBjbGFzcz0ibSI+5a2X5omp5bGV77yaMUvDlzgg4oaSIDJLw5c4PC90ZXh0Pgo8cmVjdCB4PSIzNTQiIHk9Ijc2IiB3aWR0aD0iNzYiIGhlaWdodD0iMTEwIiByeD0iNiIgY2xhc3M9ImJveCIvPgo8dGV4dCB4PSIzOTIiIHk9IjEyMiIgY2xhc3M9InQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjEtMjwvdGV4dD4KPHRleHQgeD0iMzkyIiB5PSIxNDQiIGNsYXNzPSJ0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7or5HnoIE8L3RleHQ+CjxsaW5lIHgxPSI0MzAiIHkxPSIxMDAiIHgyPSI0NzAiIHkyPSIxMDAiIGNsYXNzPSJzIi8+CjxsaW5lIHgxPSI0MzAiIHkxPSIxNjIiIHgyPSI0NzAiIHkyPSIxNjIiIGNsYXNzPSJzIi8+CjxyZWN0IHg9IjQ3MCIgeT0iNzYiIHdpZHRoPSIxNDAiIGhlaWdodD0iNDgiIHJ4PSI2IiBjbGFzcz0iYm94Ii8+Cjx0ZXh0IHg9IjU0MCIgeT0iMTA1IiBjbGFzcz0idCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MUvDlzg8L3RleHQ+CjxyZWN0IHg9IjQ3MCIgeT0iMTM4IiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjQ4IiByeD0iNiIgY2xhc3M9ImJveCIvPgo8dGV4dCB4PSI1NDAiIHk9IjE2NyIgY2xhc3M9InQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjFLw5c4PC90ZXh0Pgo8dGV4dCB4PSIzNTYiIHk9IjIyOCIgY2xhc3M9Im0iPumrmOS9jeWcsOWdgOe7j+ivkeeggeS6p+eUn+eJh+mAiTwvdGV4dD4KPC9zdmc+Cg==\" alt=\"存储器的位扩展与字扩展接线方式\" loading=\"lazy\"><figcaption>存储器的位扩展与字扩展接线方式</figcaption></figure>"
						},
						{
							"number": "4.5.3",
							"heading": "存储器模块条",
							"anchor": "sec-4.5.3",
							"html": "<ul><li>存储器模块条把多片存储芯片连同译码和驱动电路装在一块印制板上，形成可插拔的标准存储模块。</li><li>模块条内部已经完成字长和容量的扩展，对外只提供统一的地址线、数据线和控制线。</li><li>采用模块条便于灵活配置存储容量，也便于故障时整块更换。</li><li>模块条插在系统总线上，由系统按地址范围选择相应的模块工作。</li></ul>\n<p class=\"pitfall\">易错：字长扩展时数据线分开接、地址线并联，字数扩展时数据线并联、靠片选区分，两种扩展方式不能混用。</p>"
						}
					],
					"number": "4.5",
					"anchor": "sec-4.5",
					"html": ""
				}
			]
		},
		{
			"id": "c5",
			"label": "第五章",
			"title": "第五章 可编程逻辑",
			"modules": [
				"M6"
			],
			"sections": [
				{
					"heading": "PLD",
					"lines": [],
					"subs": [
						{
							"number": "5.1.1",
							"heading": "可编程阵列",
							"anchor": "sec-5.1.1",
							"html": "<ul><li>PLD 的内部主体是与阵列和或阵列，输入信号及其反相信号同时送入与阵列，交叉点上的可编程连接决定该与线取用哪些输入项，从而产生一个乘积项。</li><li>与阵列决定乘积项的个数，或阵列决定每个输出由哪些乘积项相加而成，两个阵列的分工使同一套结构可以描述多种逻辑函数。</li><li>交叉点的通断靠编程工艺实现，熔丝型用较大电流烧断熔丝，反熔丝型靠击穿形成通路，E2CMOS 型靠浮栅上的电荷控制管子导通。</li><li>由于熔丝和反熔丝一旦改变就无法恢复，这类器件只能编程一次，而 E2CMOS 器件可以擦除重写，适合反复修改的设计。</li><li>输出端通常配有极性控制用的异或门，对乘积项之和取反，使同一阵列既能实现与-或式，也能实现与-或-非式。</li></ul>\n<figure id=\"fig-sec-5.1.1-1\" data-fig=\"fig-sec-5.1.1-1\" data-sec=\"sec-5.1.1\" data-caption=\"PLD 的与阵列与或阵列结构\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMjgwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IlBMRCDnmoTkuI7pmLXliJfkuI7miJbpmLXliJfnu5PmnoQiPgo8c3R5bGU+Ci5ze2ZpbGw6bm9uZTtzdHJva2U6IzU4Y2MwMjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmR9Ci50e2ZpbGw6I2U2ZThlZTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHh9Ci5ie2ZpbGw6I2U2ZThlZTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NjAwfQoubXtmaWxsOiM5YWEyYjE7Zm9udC1mYW1pbHk6IlNlZ29lIFVJIiwiTWljcm9zb2Z0IFlhSGVpIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMi41cHh9Ci5ne2ZpbGw6bm9uZTtzdHJva2U6IzNhNDI1MDtzdHJva2Utd2lkdGg6MS4yfQouYm94e2ZpbGw6IzFiMjAyOTtzdHJva2U6IzNhNDI1MDtzdHJva2Utd2lkdGg6MS41fQo8L3N0eWxlPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMTQxODIxIi8+Cjx0ZXh0IHg9IjI0IiB5PSIyOCIgY2xhc3M9ImIiPlBMRCDnmoTkuI7pmLXliJflkozmiJbpmLXliJc8L3RleHQ+Cjx0ZXh0IHg9IjE1MCIgeT0iNjAiIGNsYXNzPSJtIj7kuI7pmLXliJc8L3RleHQ+PHRleHQgeD0iNDMwIiB5PSI2MCIgY2xhc3M9Im0iPuaIlumYteWIlzwvdGV4dD4KPGxpbmUgeDE9IjYwIiB5MT0iNzUiIHgyPSI2MCIgeTI9IjIyNSIgY2xhc3M9ImciLz48bGluZSB4MT0iMTEwIiB5MT0iNzUiIHgyPSIxMTAiIHkyPSIyMjUiIGNsYXNzPSJnIi8+PGxpbmUgeDE9IjE2MCIgeTE9Ijc1IiB4Mj0iMTYwIiB5Mj0iMjI1IiBjbGFzcz0iZyIvPjxsaW5lIHgxPSIyMTAiIHkxPSI3NSIgeDI9IjIxMCIgeTI9IjIyNSIgY2xhc3M9ImciLz4KPGxpbmUgeDE9IjQwIiB5MT0iOTUiIHgyPSIyNjAiIHkyPSI5NSIgY2xhc3M9ImciLz48bGluZSB4MT0iNDAiIHkxPSIxNDAiIHgyPSIyNjAiIHkyPSIxNDAiIGNsYXNzPSJnIi8+PGxpbmUgeDE9IjQwIiB5MT0iMTg1IiB4Mj0iMjYwIiB5Mj0iMTg1IiBjbGFzcz0iZyIvPgo8Y2lyY2xlIGN4PSI2MCIgY3k9Ijk1IiByPSI0IiBmaWxsPSIjNThjYzAyIi8+PGNpcmNsZSBjeD0iMTEwIiBjeT0iOTUiIHI9IjQiIGZpbGw9IiM1OGNjMDIiLz48Y2lyY2xlIGN4PSIxNjAiIGN5PSI5NSIgcj0iNCIgZmlsbD0iIzU4Y2MwMiIvPjxjaXJjbGUgY3g9IjIxMCIgY3k9Ijk1IiByPSI0IiBmaWxsPSIjNThjYzAyIi8+PGNpcmNsZSBjeD0iNjAiIGN5PSIxNDAiIHI9IjQiIGZpbGw9IiM1OGNjMDIiLz48Y2lyY2xlIGN4PSIxMTAiIGN5PSIxNDAiIHI9IjQiIGZpbGw9IiM1OGNjMDIiLz48Y2lyY2xlIGN4PSIxNjAiIGN5PSIxNDAiIHI9IjQiIGZpbGw9IiM1OGNjMDIiLz48Y2lyY2xlIGN4PSIyMTAiIGN5PSIxNDAiIHI9IjQiIGZpbGw9IiM1OGNjMDIiLz48Y2lyY2xlIGN4PSI2MCIgY3k9IjE4NSIgcj0iNCIgZmlsbD0iIzU4Y2MwMiIvPjxjaXJjbGUgY3g9IjExMCIgY3k9IjE4NSIgcj0iNCIgZmlsbD0iIzU4Y2MwMiIvPjxjaXJjbGUgY3g9IjE2MCIgY3k9IjE4NSIgcj0iNCIgZmlsbD0iIzU4Y2MwMiIvPjxjaXJjbGUgY3g9IjIxMCIgY3k9IjE4NSIgcj0iNCIgZmlsbD0iIzU4Y2MwMiIvPgo8dGV4dCB4PSI0MiIgeT0iMjUwIiBjbGFzcz0ibSI+6L6T5YWl5Y+K5YW25Y+N55u4PC90ZXh0Pgo8bGluZSB4MT0iMzAwIiB5MT0iOTUiIHgyPSI1MjAiIHkyPSI5NSIgY2xhc3M9ImciLz48bGluZSB4MT0iMzAwIiB5MT0iMTQwIiB4Mj0iNTIwIiB5Mj0iMTQwIiBjbGFzcz0iZyIvPjxsaW5lIHgxPSIzMDAiIHkxPSIxODUiIHgyPSI1MjAiIHkyPSIxODUiIGNsYXNzPSJnIi8+CjxsaW5lIHgxPSIzMjAiIHkxPSI3NSIgeDI9IjMyMCIgeTI9IjIyNSIgY2xhc3M9ImciLz48bGluZSB4MT0iMzc1IiB5MT0iNzUiIHgyPSIzNzUiIHkyPSIyMjUiIGNsYXNzPSJnIi8+PGxpbmUgeDE9IjQzMCIgeTE9Ijc1IiB4Mj0iNDMwIiB5Mj0iMjI1IiBjbGFzcz0iZyIvPjxsaW5lIHgxPSI0ODUiIHkxPSI3NSIgeDI9IjQ4NSIgeTI9IjIyNSIgY2xhc3M9ImciLz4KPGNpcmNsZSBjeD0iMzIwIiBjeT0iOTUiIHI9IjQiIGZpbGw9IiM5YWEyYjEiLz48Y2lyY2xlIGN4PSIzNzUiIGN5PSI5NSIgcj0iNCIgZmlsbD0iIzlhYTJiMSIvPjxjaXJjbGUgY3g9IjQzMCIgY3k9Ijk1IiByPSI0IiBmaWxsPSIjOWFhMmIxIi8+PGNpcmNsZSBjeD0iNDg1IiBjeT0iOTUiIHI9IjQiIGZpbGw9IiM5YWEyYjEiLz48Y2lyY2xlIGN4PSIzMjAiIGN5PSIxNDAiIHI9IjQiIGZpbGw9IiM5YWEyYjEiLz48Y2lyY2xlIGN4PSIzNzUiIGN5PSIxNDAiIHI9IjQiIGZpbGw9IiM5YWEyYjEiLz48Y2lyY2xlIGN4PSI0MzAiIGN5PSIxNDAiIHI9IjQiIGZpbGw9IiM5YWEyYjEiLz48Y2lyY2xlIGN4PSI0ODUiIGN5PSIxNDAiIHI9IjQiIGZpbGw9IiM5YWEyYjEiLz48Y2lyY2xlIGN4PSIzMjAiIGN5PSIxODUiIHI9IjQiIGZpbGw9IiM5YWEyYjEiLz48Y2lyY2xlIGN4PSIzNzUiIGN5PSIxODUiIHI9IjQiIGZpbGw9IiM5YWEyYjEiLz48Y2lyY2xlIGN4PSI0MzAiIGN5PSIxODUiIHI9IjQiIGZpbGw9IiM5YWEyYjEiLz48Y2lyY2xlIGN4PSI0ODUiIGN5PSIxODUiIHI9IjQiIGZpbGw9IiM5YWEyYjEiLz4KPGxpbmUgeDE9IjI2MCIgeTE9Ijk1IiB4Mj0iMzAwIiB5Mj0iOTUiIGNsYXNzPSJzIi8+PGxpbmUgeDE9IjI2MCIgeTE9IjE0MCIgeDI9IjMwMCIgeTI9IjE0MCIgY2xhc3M9InMiLz48bGluZSB4MT0iMjYwIiB5MT0iMTg1IiB4Mj0iMzAwIiB5Mj0iMTg1IiBjbGFzcz0icyIvPgo8dGV4dCB4PSI1MjAiIHk9IjEwMCIgY2xhc3M9Im0iPkYxPC90ZXh0Pjx0ZXh0IHg9IjUyMCIgeT0iMTQ1IiBjbGFzcz0ibSI+RjI8L3RleHQ+PHRleHQgeD0iNTIwIiB5PSIxOTAiIGNsYXNzPSJtIj5GMzwvdGV4dD4KPHRleHQgeD0iNjAiIHk9IjI3MiIgY2xhc3M9Im0iPuS6pOWPieeCueeUsee8lueoi+W3peiJuuWGs+WumumAmuaWre+8jOe7v+eCueS4uuW3sui/nuaOpTwvdGV4dD4KPC9zdmc+Cg==\" alt=\"PLD 的与阵列与或阵列结构\" loading=\"lazy\"><figcaption>PLD 的与阵列与或阵列结构</figcaption></figure>"
						},
						{
							"number": "5.1.2",
							"heading": "PLD的类型",
							"anchor": "sec-5.1.2",
							"html": "<ul><li>PROM 的与阵列固定、或阵列可编程，固定的与阵列相当于全译码，产生全部最小项，再由或阵列挑出所需项相加。</li><li>PLA 的与阵列和或阵列都可编程，乘积项按设计需要生成，器件利用率高，但两个阵列都要编程使早期器件的速度偏慢。</li><li>PAL 的与阵列可编程、或阵列固定，每个输出可用的乘积项数目由结构确定，因而速度较快、成本较低，在早期应用中最为普遍。</li><li>GAL 在 PAL 的结构上增加了输出逻辑宏单元，采用 E2CMOS 工艺，输出极性和输出方式可编程，并支持擦除后重写。</li><li>集成度更高的可编程器件把多个逻辑块和可编程互连集中在一片芯片内，用较少的器件实现规模较大的逻辑，减少了板级连线。</li></ul>\n<p class=\"pitfall\">易错：PROM、PLA、PAL 三者的区别在于哪个阵列可编程，不要按容量或型号去记。</p>"
						},
						{
							"number": "5.1.3",
							"heading": "可编程连接技术",
							"anchor": "sec-5.1.3",
							"html": "<ul><li>熔丝型连接在未编程时导通，编程时用较大电流烧断选定熔丝，断与通分别表示两种状态。</li><li>反熔丝型连接方向相反，未编程时断开，编程时击穿绝缘层建立通路，属于一次性编程。</li><li>E2CMOS 型用浮栅上的电荷控制管子通断，电可擦除重写，掉电后电荷仍能保持。</li><li>SRAM 型用存储元的状态控制开关，可反复改写，但掉电即失，上电要重新装入配置数据。</li><li>阵列输出常用 OC 门或三态门，OC 门只能拉低、需外接上拉电阻，三态门可输出高、低和高阻。</li></ul>\n<p class=\"pitfall\">易错：熔丝烧断后无法恢复，反熔丝击穿后同样不可逆，两者都只能编程一次，不能与可擦写的 E2CMOS 混为一谈。</p>"
						}
					],
					"number": "5.1",
					"anchor": "sec-5.1",
					"html": ""
				},
				{
					"heading": "现场可编程门阵列",
					"lines": [],
					"subs": [
						{
							"number": "5.2.1",
							"heading": "FPGA的基本结构",
							"anchor": "sec-5.2.1",
							"html": "<ul><li>FPGA 主要由可组态逻辑块阵列、可编程互连资源和可编程输入输出块三部分组成，各部分的功能和连接都由配置数据决定。</li><li>可编程互连资源分布在逻辑块之间的通道内，由开关盒和连接盒中的可编程开关把逻辑块的引脚接到所需的连线段上。</li><li>可编程输入输出块是芯片引脚与内部逻辑之间的接口，可配置为输入、输出或双向，并常带有寄存器以实现输入输出的同步。</li><li>配置数据存放在片内的配置存储器中，上电后由外部送入，它决定每个逻辑块实现什么函数、互连的哪些开关闭合，断电后一般需要重新加载。</li><li>与依靠与或阵列实现逻辑的 PLD 相比，FPGA 以查找表实现组合逻辑，逻辑粒度更细，更适合门数较多的设计。</li></ul>\n<figure id=\"fig-sec-5.2.1-1\" data-fig=\"fig-sec-5.2.1-1\" data-sec=\"sec-5.2.1\" data-caption=\"FPGA 的逻辑块阵列、互连、输入输出块与 CLB 内部结构\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgMzEwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IkZQR0Eg57uT5p6E77ya5Zub5ZGo5piv5Y+v57yW56iL6L6T5YWl6L6T5Ye65Z2X77yM5Lit6Ze05piv5Y+v57uE5oCB6YC76L6R5Z2X6Zi15YiX5LiO5LqS6L+e77yMQ0xCIOWGheWQq+afpeaJvuihqOWSjOinpuWPkeWZqCI+Cgk8ZyBmaWxsPSJub25lIiBzdHJva2U9IiMzYTQyNTAiIHN0cm9rZS13aWR0aD0iMS42Ij4KCQk8cmVjdCB4PSIyNCIgeT0iMjQiIHdpZHRoPSIzNjAiIGhlaWdodD0iMjYyIiByeD0iMTIiLz4KCQk8cGF0aCBkPSJNODQgMjR2MjYyTTE0NCAyNHYyNjJNMjA0IDI0djI2Mk0yNjQgMjR2MjYyTTMyNCAyNHYyNjIiLz4KCQk8cGF0aCBkPSJNMjQgODRoMzYwTTI0IDE0NGgzNjBNMjQgMjA0aDM2MCIvPgoJPC9nPgoJPGcgZmlsbD0iIzFjMWYyNiIgc3Ryb2tlPSIjNThjYzAyIiBzdHJva2Utd2lkdGg9IjEuOCI+CgkJPHJlY3QgeD0iOTQiIHk9Ijk0IiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSI0Ii8+CgkJPHJlY3QgeD0iMTU0IiB5PSI5NCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iNCIvPgoJCTxyZWN0IHg9IjIxNCIgeT0iOTQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcng9IjQiLz4KCQk8cmVjdCB4PSI5NCIgeT0iMTU0IiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSI0Ii8+CgkJPHJlY3QgeD0iMTU0IiB5PSIxNTQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcng9IjQiLz4KCQk8cmVjdCB4PSIyMTQiIHk9IjE1NCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iNCIvPgoJCTxyZWN0IHg9Ijk0IiB5PSIyMTQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcng9IjQiLz4KCQk8cmVjdCB4PSIxNTQiIHk9IjIxNCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iNCIvPgoJCTxyZWN0IHg9IjIxNCIgeT0iMjE0IiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSI0Ii8+Cgk8L2c+Cgk8ZyBmaWxsPSIjMWMxZjI2IiBzdHJva2U9IiM1OGNjMDIiIHN0cm9rZS13aWR0aD0iMS42Ij4KCQk8cmVjdCB4PSIzNCIgeT0iOTQiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgcng9IjQiLz4KCQk8cmVjdCB4PSIzNCIgeT0iMTU0IiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHJ4PSI0Ii8+CgkJPHJlY3QgeD0iMzQiIHk9IjIxNCIgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiByeD0iNCIvPgoJCTxyZWN0IHg9IjMzNCIgeT0iOTQiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgcng9IjQiLz4KCQk8cmVjdCB4PSIzMzQiIHk9IjE1NCIgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiByeD0iNCIvPgoJCTxyZWN0IHg9IjMzNCIgeT0iMjE0IiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHJ4PSI0Ii8+Cgk8L2c+Cgk8ZyBmb250LWZhbWlseT0iU2Vnb2UgVUksIE1pY3Jvc29mdCBZYUhlaSwgc2Fucy1zZXJpZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+CgkJPHRleHQgeD0iMjA0IiB5PSIyNzAiIGZpbGw9IiM5YWEyYjEiIGZvbnQtc2l6ZT0iMTEiPuWPr+e7hOaAgemAu+i+keWdlyBDTEIg6Zi15YiXPC90ZXh0PgoJCTx0ZXh0IHg9IjQ5IiB5PSIyODgiIGZpbGw9IiM5YWEyYjEiIGZvbnQtc2l6ZT0iMTEiPklPQjwvdGV4dD4KCQk8dGV4dCB4PSIzNTAiIHk9IjI4OCIgZmlsbD0iIzlhYTJiMSIgZm9udC1zaXplPSIxMSI+SU9CPC90ZXh0PgoJPC9nPgoJPGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNThjYzAyIiBzdHJva2Utd2lkdGg9IjIiPgoJCTxyZWN0IHg9IjQyMCIgeT0iNjQiIHdpZHRoPSIxNTYiIGhlaWdodD0iMTg4IiByeD0iMTAiLz4KCQk8cGF0aCBkPSJNNDIwIDE0MGg2ME01NjAgMTEyaDE2Ii8+Cgk8L2c+Cgk8ZyBmaWxsPSIjMWMxZjI2IiBzdHJva2U9IiM1OGNjMDIiIHN0cm9rZS13aWR0aD0iMiI+CgkJPHJlY3QgeD0iNDQwIiB5PSI5MiIgd2lkdGg9IjcwIiBoZWlnaHQ9IjQ4IiByeD0iNiIvPgoJCTxyZWN0IHg9IjQ0MCIgeT0iMTY4IiB3aWR0aD0iNDAiIGhlaWdodD0iNDgiIHJ4PSI2Ii8+CgkJPHBhdGggZD0iTTUxMCAxOTJoNDYiLz4KCQk8cGF0aCBkPSJNNDgwIDE2OHYtMjgiLz4KCTwvZz4KCTxnIGZvbnQtZmFtaWx5PSJTZWdvZSBVSSwgTWljcm9zb2Z0IFlhSGVpLCBzYW5zLXNlcmlmIiBmaWxsPSIjOWFhMmIxIiBmb250LXNpemU9IjExIj4KCQk8dGV4dCB4PSI0NDAiIHk9Ijg2Ij5MVVQ8L3RleHQ+CgkJPHRleHQgeD0iNDQwIiB5PSIxNjQiPkZGPC90ZXh0PgoJCTx0ZXh0IHg9IjUxMiIgeT0iMTk2Ij7ovpPlh7o8L3RleHQ+CgkJPHRleHQgeD0iNDQwIiB5PSIyNDAiPkNMQiDlhoXpg6g8L3RleHQ+Cgk8L2c+Cjwvc3ZnPgo=\" alt=\"FPGA 的逻辑块阵列、互连、输入输出块与 CLB 内部结构\" loading=\"lazy\"><figcaption>FPGA 的逻辑块阵列、互连、输入输出块与 CLB 内部结构</figcaption></figure>"
						},
						{
							"number": "5.2.2",
							"heading": "可组态逻辑块CLB",
							"anchor": "sec-5.2.2",
							"html": "<ul><li>CLB 是 FPGA 中实现逻辑功能的基本单元，内部包含若干查找表、触发器和多路选择器，可配置成纯组合逻辑或带寄存的时序逻辑。</li><li>查找表实质上是一块小容量 SRAM，n 输入的查找表存有 2 的 n 次方个数据位，输入作为地址读出对应单元，因此能实现任意 n 变量函数。</li><li>每个查找表的输出可以经触发器寄存，触发器由可编程的时钟和使能信号控制，配置数据决定信号是否经过触发器以及由哪个边沿触发。</li><li>相邻 CLB 之间设有专用的进位链和局部连线，宽位加法、计数等运算可以快速级联，不必绕经通用互连而增加延迟。</li><li>不同厂商的 CLB 在查找表输入数、触发器数目和控制信号上并不相同，使用时必须按具体器件的结构分配资源。</li></ul>"
						},
						{
							"number": "5.2.3",
							"heading": "SRAM为基础的FPGA",
							"anchor": "sec-5.2.3",
							"html": "<ul><li>以 SRAM 作为配置存储器的 FPGA，配置数据同时决定查找表的内容和互连开关的状态，断电后数据全部丢失，每次上电都要重新装载。</li><li>重新装载的代价换来了可重复配置的能力，改变配置数据就能更换电路功能，器件本身不必从电路板上取下。</li><li>SRAM 工艺与标准 CMOS 工艺兼容，集成度高、成本较低，但每个配置位都占用芯片面积，配置数据也容易受到干扰，需要在上电时可靠加载。</li><li>与反熔丝型 FPGA 相比，SRAM 型可以反复编程但要外接配置存储器，反熔丝型只能编程一次却掉电不丢失。</li><li>配置数据的加载有主动、被动和经边界扫描接口等方式，器件的工作模式引脚决定采用哪一种。</li></ul>\n<p class=\"pitfall\">易错：SRAM 型 FPGA 的配置数据掉电即失，上电必须重新加载，不能当作一次编程后永久保存的器件。</p>"
						},
						{
							"number": "5.2.4",
							"heading": "FPGA 与 CPLD 的比较",
							"anchor": "sec-5.2.4",
							"html": "<ul><li>CPLD 以与或阵列加集中式互连为主体，逻辑粒度粗，信号经过的路径固定，延迟容易预测。</li><li>FPGA 以查找表和分布式互连为主体，逻辑粒度细、寄存器多，适合规模较大的数据处理与控制。</li><li>CPLD 的配置多为 E2CMOS 工艺，掉电保持；FPGA 多为 SRAM 工艺，上电要从外部装入配置。</li><li>CPLD 容量较小、引脚较少，FPGA 容量从几千门到数百万门，能承载完整的片上系统。</li><li>选型时看逻辑规模、时序可预测性、上电行为和成本，组合逻辑为主的小设计用 CPLD 更省事。</li></ul>\n<p class=\"pitfall\">易错：CPLD 的延迟可预测不等于速度一定比 FPGA 快；大规模设计中 FPGA 的并行资源和寄存器更多。</p>"
						}
					],
					"number": "5.2",
					"anchor": "sec-5.2",
					"html": ""
				},
				{
					"heading": "在系统可编程",
					"lines": [],
					"subs": [
						{
							"number": "5.3.1",
							"heading": "ispLSI器件的体系结构",
							"anchor": "sec-5.3.1",
							"html": "<ul><li>ispLSI 是高密度在系统可编程逻辑器件，片内由若干通用逻辑块、全局布线区、输出布线区和输入输出单元组成。</li><li>通用逻辑块完成与或逻辑运算，并带有触发器和输出极性控制，其输出送到全局布线区，供其他逻辑块选用。</li><li>全局布线区位于芯片中央，把各逻辑块的输出按需接到各逻辑块的输入，形成集中式的可编程互连，缩短了长距离连接的延迟。</li><li>输入输出单元兼有输入、输出和双向功能，既可以直接连到全局布线区，也可以通过输出布线区回到器件内部。</li><li>器件内部集成了在系统编程所需的控制电路，编程时经专用接口接收命令和数据，不必把芯片从电路板上取下。</li></ul>\n<figure id=\"fig-sec-5.3.1-1\" data-fig=\"fig-sec-5.3.1-1\" data-sec=\"sec-5.3.1\" data-caption=\"ispLSI 器件的通用逻辑块与全局布线区\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMjkwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9ImlzcExTSSDlmajku7bnmoTpgJrnlKjpgLvovpHlnZfkuI7lhajlsYDluIPnur/ljLoiPgo8c3R5bGU+Ci5ze2ZpbGw6bm9uZTtzdHJva2U6IzU4Y2MwMjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmR9Ci50e2ZpbGw6I2U2ZThlZTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHh9Ci5ie2ZpbGw6I2U2ZThlZTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NjAwfQoubXtmaWxsOiM5YWEyYjE7Zm9udC1mYW1pbHk6IlNlZ29lIFVJIiwiTWljcm9zb2Z0IFlhSGVpIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMi41cHh9Ci5ne2ZpbGw6bm9uZTtzdHJva2U6IzNhNDI1MDtzdHJva2Utd2lkdGg6MS4yfQouYm94e2ZpbGw6IzFiMjAyOTtzdHJva2U6IzNhNDI1MDtzdHJva2Utd2lkdGg6MS41fQo8L3N0eWxlPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMTQxODIxIi8+Cjx0ZXh0IHg9IjI0IiB5PSIyOCIgY2xhc3M9ImIiPmlzcExTSSDkvZPns7vnu5PmnoQ8L3RleHQ+CjxyZWN0IHg9IjIzMCIgeT0iOTUiIHdpZHRoPSIxODAiIGhlaWdodD0iODAiIHJ4PSI2IiBjbGFzcz0iYm94Ii8+PHRleHQgeD0iMzIwIiB5PSIxNDAiIGNsYXNzPSJ0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7lhajlsYDluIPnur/ljLogR1JQPC90ZXh0Pgo8cmVjdCB4PSI2MCIgeT0iNjAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNTUiIHJ4PSI2IiBjbGFzcz0iYm94Ii8+PHRleHQgeD0iMTIwIiB5PSI5MiIgY2xhc3M9InQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkdMQiAxPC90ZXh0Pgo8cmVjdCB4PSI0NjAiIHk9IjYwIiB3aWR0aD0iMTIwIiBoZWlnaHQ9IjU1IiByeD0iNiIgY2xhc3M9ImJveCIvPjx0ZXh0IHg9IjUyMCIgeT0iOTIiIGNsYXNzPSJ0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5HTEIgMjwvdGV4dD4KPHJlY3QgeD0iNjAiIHk9IjE2MCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSI1NSIgcng9IjYiIGNsYXNzPSJib3giLz48dGV4dCB4PSIxMjAiIHk9IjE5MiIgY2xhc3M9InQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkdMQiAzPC90ZXh0Pgo8cmVjdCB4PSI0NjAiIHk9IjE2MCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSI1NSIgcng9IjYiIGNsYXNzPSJib3giLz48dGV4dCB4PSI1MjAiIHk9IjE5MiIgY2xhc3M9InQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkdMQiA0PC90ZXh0Pgo8bGluZSB4MT0iMTgwIiB5MT0iODgiIHgyPSIyMzAiIHkyPSIxMTUiIGNsYXNzPSJzIi8+PHBhdGggZD0iTTIzMCAxMTUgbC03IC0zLjUgdjcgeiIgZmlsbD0iIzU4Y2MwMiIvPjxsaW5lIHgxPSIyMzAiIHkxPSIxNzUiIHgyPSIxODAiIHkyPSIxODgiIGNsYXNzPSJzIi8+PHBhdGggZD0iTTE4MCAxODggbC03IC0zLjUgdjcgeiIgZmlsbD0iIzU4Y2MwMiIvPjxsaW5lIHgxPSI0NjAiIHkxPSI4OCIgeDI9IjQxMCIgeTI9IjExNSIgY2xhc3M9InMiLz48cGF0aCBkPSJNNDEwIDExNSBsLTcgLTMuNSB2NyB6IiBmaWxsPSIjNThjYzAyIi8+PGxpbmUgeDE9IjQxMCIgeTE9IjE3NSIgeDI9IjQ2MCIgeTI9IjE4OCIgY2xhc3M9InMiLz48cGF0aCBkPSJNNDYwIDE4OCBsLTcgLTMuNSB2NyB6IiBmaWxsPSIjNThjYzAyIi8+CjxyZWN0IHg9IjI0MCIgeT0iMjA1IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjQwIiByeD0iNiIgY2xhc3M9ImJveCIvPjx0ZXh0IHg9IjMyMCIgeT0iMjMwIiBjbGFzcz0idCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SVNQIOe8lueoi+aOp+WItjwvdGV4dD4KPGxpbmUgeDE9IjMyMCIgeTE9IjE3NSIgeDI9IjMyMCIgeTI9IjIwNSIgY2xhc3M9InMiLz4KPHRleHQgeD0iNjAiIHk9IjI3NSIgY2xhc3M9Im0iPui+k+WFpei+k+WHuuWNleWFg+e7jyBHUlAg5LqS6L+e77yM57yW56iL5peg6ZyA5ouG5LiL6Iqv54mHPC90ZXh0Pgo8L3N2Zz4K\" alt=\"ispLSI 器件的通用逻辑块与全局布线区\" loading=\"lazy\"><figcaption>ispLSI 器件的通用逻辑块与全局布线区</figcaption></figure>"
						},
						{
							"number": "5.3.2",
							"heading": "在系统编程原理",
							"anchor": "sec-5.3.2",
							"html": "<ul><li>在系统编程利用器件内集成的编程控制电路，在目标电路板上直接改写器件的阵列连接或配置，省去了拔插芯片和专用编程器。</li><li>编程时先把器件置入编程模式，串行送入指令与数据，由片内电荷泵产生擦写所需的高压，完成对 E2CMOS 单元的写入。</li><li>编程信息以电荷形式保存在浮栅上，擦除后可以重新写入，掉电时电荷仍能保持，因而兼有可重复编程和非易失的特点。</li><li>测试访问端口使用模式选择、时钟、数据输入和数据输出等信号，编程、校验与边界扫描共用这一条串行通路。</li><li>先装配后编程的方式便于修改设计和现场升级，已焊装的器件也能更换功能，必要时还可对配置加密以防读出。</li></ul>\n<p class=\"pitfall\">易错：在系统编程改写的是器件内部的 E2CMOS 配置，不需要拆下芯片，也不是改外部连线。</p>\n<figure id=\"fig-sec-5.3.2-1\" data-fig=\"fig-sec-5.3.2-1\" data-sec=\"sec-5.3.2\" data-caption=\"边界扫描链把各芯片的扫描单元串接在 TDI 与 TDO 之间\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMzAwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IkpUQUcg6L6555WM5omr5o+P6ZO+5oqK5ZCE6Iqv54mH55qE5omr5o+P5Y2V5YWD5Liy5o6l5ZyoIFRESSDkuI4gVERPIOS5i+mXtCI+CjxzdHlsZT4KLnN7ZmlsbDpub25lO3N0cm9rZTojNThjYzAyO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZH0KLnR7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTNweH0KLmJ7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo2MDB9Ci5te2ZpbGw6IzlhYTJiMTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEyLjVweH0KPC9zdHlsZT4KPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzE0MTgyMSIvPgo8dGV4dCB4PSIyNCIgeT0iMjgiIGNsYXNzPSJiIj7ovrnnlYzmiavmj4/pk748L3RleHQ+CjxyZWN0IHg9IjQwIiB5PSIxMTAiIHdpZHRoPSIxMDAiIGhlaWdodD0iNjAiIHJ4PSI2IiBmaWxsPSIjMWIyMDI5IiBzdHJva2U9IiM1OGNjMDIiIHN0cm9rZS13aWR0aD0iMiIvPgo8cmVjdCB4PSIxNzAiIHk9IjExMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSI2MCIgcng9IjYiIGZpbGw9IiMxYjIwMjkiIHN0cm9rZT0iIzU4Y2MwMiIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxyZWN0IHg9IjMwMCIgeT0iMTEwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjYwIiByeD0iNiIgZmlsbD0iIzFiMjAyOSIgc3Ryb2tlPSIjNThjYzAyIiBzdHJva2Utd2lkdGg9IjIiLz4KPHJlY3QgeD0iNDMwIiB5PSIxMTAiIHdpZHRoPSIxMDAiIGhlaWdodD0iNjAiIHJ4PSI2IiBmaWxsPSIjMWIyMDI5IiBzdHJva2U9IiM1OGNjMDIiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI5MCIgeT0iMTQ2IiBjbGFzcz0idCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+5omr5o+P5Y2V5YWDPC90ZXh0Pgo8dGV4dCB4PSIyMjAiIHk9IjE0NiIgY2xhc3M9InQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPuaJq+aPj+WNleWFgzwvdGV4dD4KPHRleHQgeD0iMzUwIiB5PSIxNDYiIGNsYXNzPSJ0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7miavmj4/ljZXlhYM8L3RleHQ+Cjx0ZXh0IHg9IjQ4MCIgeT0iMTQ2IiBjbGFzcz0idCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+5omr5o+P5Y2V5YWDPC90ZXh0Pgo8dGV4dCB4PSI5MCIgeT0iMTAwIiBjbGFzcz0ibSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+VTE8L3RleHQ+Cjx0ZXh0IHg9IjIyMCIgeT0iMTAwIiBjbGFzcz0ibSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+VTI8L3RleHQ+Cjx0ZXh0IHg9IjM1MCIgeT0iMTAwIiBjbGFzcz0ibSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+VTM8L3RleHQ+Cjx0ZXh0IHg9IjQ4MCIgeT0iMTAwIiBjbGFzcz0ibSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+VTQ8L3RleHQ+CjxsaW5lIHgxPSIyMCIgeTE9IjE0MCIgeDI9IjQwIiB5Mj0iMTQwIiBjbGFzcz0icyIvPgo8bGluZSB4MT0iMTQwIiB5MT0iMTQwIiB4Mj0iMTcwIiB5Mj0iMTQwIiBjbGFzcz0icyIvPgo8bGluZSB4MT0iMjcwIiB5MT0iMTQwIiB4Mj0iMzAwIiB5Mj0iMTQwIiBjbGFzcz0icyIvPgo8bGluZSB4MT0iNDAwIiB5MT0iMTQwIiB4Mj0iNDMwIiB5Mj0iMTQwIiBjbGFzcz0icyIvPgo8bGluZSB4MT0iNTMwIiB5MT0iMTQwIiB4Mj0iNTkwIiB5Mj0iMTQwIiBjbGFzcz0icyIvPgo8dGV4dCB4PSIyMCIgeT0iMTMwIiBjbGFzcz0ibSI+VERJPC90ZXh0Pgo8dGV4dCB4PSI1OTAiIHk9IjEzMCIgY2xhc3M9Im0iIHRleHQtYW5jaG9yPSJlbmQiPlRETzwvdGV4dD4KPHRleHQgeD0iNDAiIHk9IjIzMCIgY2xhc3M9Im0iPlRESSDliLAgVERPIOS4suaIkOS4gOadoemTvu+8jFRNUyDmjqfliLbnirbmgIHvvIxUQ0sg5o+Q5L6b56e75L2N5pe26ZKfPC90ZXh0Pgo8dGV4dCB4PSI0MCIgeT0iMjYyIiBjbGFzcz0ibSI+5rWL6K+V5pe25peg6ZyA5o6i6ZKI77yM5Y+v55u05o6l6KeC5a+f5byV6ISa55S15bmzPC90ZXh0Pgo8L3N2Zz4K\" alt=\"边界扫描链把各芯片的扫描单元串接在 TDI 与 TDO 之间\" loading=\"lazy\"><figcaption>边界扫描链把各芯片的扫描单元串接在 TDI 与 TDO 之间</figcaption></figure>"
						}
					],
					"number": "5.3",
					"anchor": "sec-5.3",
					"html": ""
				},
				{
					"heading": "可编程逻辑的原理图方式设计",
					"lines": [],
					"subs": [
						{
							"number": "5.4.1",
							"heading": "编程环境和设计流程图",
							"anchor": "sec-5.4.1",
							"html": "<ul><li>原理图方式的设计在开发软件的图形界面中完成，先建立工程并选定目标器件，再把逻辑符号用连线组成电路。</li><li>设计流程一般包括设计输入、功能模拟、综合与实现、器件下载几个阶段，后一阶段以前一阶段的检查通过为前提。</li><li>功能模拟只验证逻辑关系，不考虑器件延时，综合和实现之后的时序模拟才反映实际器件的延迟。</li><li>综合把原理图转换成与目标器件结构对应的网表，实现阶段完成逻辑划分、布局和布线，并生成配置文件。</li><li>若资源占用过大或时序不满足要求，就要回到设计输入或实现阶段修改，整个流程因此是反复迭代的。</li></ul>"
						},
						{
							"number": "5.4.2",
							"heading": "设计输入",
							"anchor": "sec-5.4.2",
							"html": "<ul><li>设计输入把设计意图以开发软件能够接受的形式送入计算机，原理图输入用元件符号和连线描述电路的结构。</li><li>元件库中既有基本门和触发器，也有计数器、译码器、寄存器等宏单元，调用宏单元可以减少连线并便于在不同设计中复用。</li><li>输入时要为元件和网络命名，信号名应反映实际功能，便于在模拟波形和实现报告中定位。</li><li>规模较大的设计可按功能分页绘制，用输入输出端口连接各页，层次化的组织使原理图便于阅读和修改。</li><li>输入完成后先做规则检查，排除悬空引脚、输出短接和信号重名等错误，再进入模拟。</li></ul>"
						},
						{
							"number": "5.4.3",
							"heading": "功能模拟",
							"anchor": "sec-5.4.3",
							"html": "<ul><li>功能模拟在忽略器件延时的条件下检查电路的逻辑功能，用来确认设计意图是否被正确表达。</li><li>模拟需要施加激励，即按时间顺序给输入引脚赋值，再观察输出波形是否与预期一致。</li><li>激励可以逐段手动加入，也可以用波形编辑器或测试向量文件描述，便于重复运行和比较不同方案。</li><li>模拟结果以波形或列表显示，出现输出不符、状态卡死或异常竞争时，应回到设计输入修改电路。</li><li>功能模拟通过只说明逻辑关系正确，不能保证在目标器件中满足时序，还需在实现之后做时序模拟。</li></ul>"
						},
						{
							"number": "5.4.4",
							"heading": "综合和实现",
							"anchor": "sec-5.4.4",
							"html": "<ul><li>综合把与工艺无关的原理图描述转换成目标器件可实现的逻辑网表，并在转换中做必要的化简与优化。</li><li>实现阶段把网表映射到器件的逻辑块和互连资源上，依次完成布局与布线，最终生成配置数据。</li><li>布局决定各部分逻辑放在哪个逻辑块，布线决定信号经过哪些连线和开关，两者共同决定电路的实际延时。</li><li>实现工具会给出资源占用和延时报告，若布线失败或时序不满足，需要调整设计或约束条件后重新实现。</li><li>实现后的时序模拟把布线得到的延时反标到网表中，用来检查建立时间、保持时间等约束是否满足。</li></ul>"
						},
						{
							"number": "5.4.5",
							"heading": "器件下载",
							"anchor": "sec-5.4.5",
							"html": "<ul><li>器件下载把实现阶段生成的配置文件写入目标器件，使芯片按设计的功能工作。</li><li>下载通过专用下载电缆和器件的编程接口进行，电缆一端接计算机，另一端接电路板上的编程插座。</li><li>对以 SRAM 保存配置的器件，配置文件在每次上电时由外部存储器加载，也可以由下载电缆直接送入；E2CMOS 器件则一次写入后掉电保持。</li><li>下载前应核对器件型号、封装与工程设置是否一致，下载后可回读校验，确认写入内容与配置文件相同。</li><li>器件已焊在板上时采用在系统编程方式可以免去拆卸，必要时还可对配置加密，防止被读出复制。</li></ul>\n<p class=\"pitfall\">易错：功能模拟通过不等于下载后一定工作，实际延时要在实现后的时序模拟中检查。</p>"
						}
					],
					"number": "5.4",
					"anchor": "sec-5.4",
					"html": ""
				},
				{
					"heading": "可编程逻辑的VHDL设计",
					"lines": [],
					"subs": [
						{
							"number": "5.5.1",
							"heading": "VHDL的基本概念",
							"anchor": "sec-5.5.1",
							"html": "<ul><li>VHDL 是一种硬件描述语言，用文本描述数字电路的结构和行为，同一段描述经综合可以映射到不同的可编程器件。</li><li>设计实体由实体说明和结构体组成，实体说明给出端口的名称、方向和数据类型，结构体描述内部的功能或连接。</li><li>端口方向有输入、输出、双向等，常用的数据类型有位、位矢量和标准逻辑类型，多位信号用矢量统一表示。</li><li>结构体中既可用并行语句描述数据流，也可用进程描述行为和时序，并行语句之间没有先后顺序，书写次序不影响含义。</li><li>库和程序包提供预定义的类型、函数与元件，使用前要声明相应的库，常见的标准逻辑类型就由标准程序包给出。</li></ul>"
						},
						{
							"number": "5.5.2",
							"heading": "VHDL的组合逻辑设计",
							"anchor": "sec-5.5.2",
							"html": "<ul><li>组合逻辑常用并行赋值语句、条件赋值语句和选择赋值语句描述，其输出只取决于当前的输入，不含记忆元件。</li><li>条件赋值按条件的优先顺序给出多个候选值，选择赋值按选择表达式的取值从候选中选定一个，两者都综合成组合网络。</li><li>用进程描述组合逻辑时，敏感表中要列全所有参与赋值的输入信号，否则模拟结果与综合结果可能不一致。</li><li>进程中的条件分支应覆盖全部可能的输入组合，未覆盖时信号保持原值，综合工具会据此生成锁存器，这通常不是设计本意。</li><li>译码器、编码器、多路选择器和加法器都可以用上述语句描述，书写时要注意矢量位序与端口定义的对应关系。</li></ul>"
						},
						{
							"number": "5.5.3",
							"heading": "VHDL的时序逻辑设计",
							"anchor": "sec-5.5.3",
							"html": "<ul><li>时序逻辑用进程描述，时钟作为敏感信号，进程只在时钟的有效边沿执行赋值，使寄存器状态按节拍更新。</li><li>边沿检测用时钟信号的上升沿或下降沿属性表达，属性写在进程的敏感表中，决定了触发器由哪个边沿触发。</li><li>异步复位和异步置位要与时钟一起列入敏感表，并在进程开头优先判断，复位有效时直接给寄存器赋初值，不受时钟约束。</li><li>同步复位不列入敏感表，而是在时钟边沿的进程体内判断，其作用只在时钟有效边沿到来时才体现。</li><li>多个寄存器共用同一时钟时应当使用统一的时钟信号，不宜在进程内用门控或分频另行产生时钟，以免引入毛刺和时钟偏斜。</li></ul>\n<p class=\"pitfall\">易错：VHDL 进程中的信号赋值要等进程挂起后才更新，与变量的立即赋值不同，不能照搬顺序程序设计的习惯。</p>"
						}
					],
					"number": "5.5",
					"anchor": "sec-5.5",
					"html": ""
				}
			]
		},
		{
			"id": "c6",
			"label": "第六章",
			"title": "第六章 数字系统",
			"modules": [
				"M7"
			],
			"sections": [
				{
					"heading": "数字系统的基本概念",
					"lines": [],
					"subs": [
						{
							"number": "6.1.1",
							"heading": "一个数字系统实例",
							"anchor": "sec-6.1.1",
							"html": "<ul><li>一个完整的数字系统实例通常既包含负责数据加工和传送的部件，也包含指挥各部件按时序动作的控制部件，两者分工明确。</li><li>寄存器、加法器、多路选择器等部件在控制信号作用下完成一步运算，结果再送回寄存器保存，构成数据在系统内的流动。</li><li>控制器根据外部输入和内部状态产生控制信号，并决定下一步进入哪个状态，使各个部件按规定的次序协同工作。</li><li>把系统划分为数据通路与控制器之后，各部分的功能较为单一，可以分别设计和验证，再组合成完整的系统。</li><li>实例的运行过程可以用状态转移来描述：每个状态对应一组控制信号，状态之间的转换由输入条件和状态标志决定。</li></ul>"
						},
						{
							"number": "6.1.2",
							"heading": "数字系统的基本模型",
							"anchor": "sec-6.1.2",
							"html": "<ul><li>数字系统的基本模型由数据通路和控制器两部分构成，前者处理数据，后者产生控制信号的序列。</li><li>数据通路包括寄存器、运算部件以及连接它们的总线或专用连线，结构在运行中基本不变，由控制信号选择数据流向。</li><li>控制器接收外部输入和来自数据通路的状态标志，输出控制信号，其行为可用状态图或算法流程图描述。</li><li>状态标志是数据通路给出的结果信息，例如进位、结果为零或比较大小，控制器据此在状态之间选择分支。</li><li>这种划分把\"做什么\"与\"何时做\"分开，便于由顶向下逐层细化，也便于分别排查数据和时序方面的问题。</li></ul>"
						},
						{
							"number": "6.1.3",
							"heading": "数字系统与逻辑功能部件的区别",
							"anchor": "sec-6.1.3",
							"html": "<ul><li>逻辑功能部件完成固定的单一功能，如译码、计数或加法，功能由器件型号确定，使用时按手册连接引脚即可。</li><li>数字系统由若干功能部件和控制逻辑组成，能按预定算法完成一系列操作，其功能由设计决定而不是由型号决定。</li><li>功能部件内部一般不含控制器，数字系统则必须有控制器协调各部件的动作次序，这是二者在结构上的关键差别。</li><li>系统的规模不由门数决定，而在于是不是一个按算法运行的整体；同样的功能部件可以组成不同规模和不同用途的系统。</li><li>从设计方法看，功能部件靠查手册选用，数字系统需要由顶向下划分，并先定控制流程再落实到具体器件。</li></ul>\n<p class=\"pitfall\">易错：判断是否为数字系统要看有没有控制器按算法协调各部件，不是看门数多少。</p>"
						}
					],
					"number": "6.1",
					"anchor": "sec-6.1",
					"html": ""
				},
				{
					"heading": "数据通路",
					"lines": [],
					"subs": [
						{
							"number": "6.2.1",
							"heading": "总线结构",
							"anchor": "sec-6.2.1",
							"html": "<ul><li>总线是一组公用的信号线，多个部件通过三态门挂到总线上，任一时刻只允许一个部件向总线驱动数据。</li><li>采用总线结构可以减少部件之间的连线，代价是数据必须分时传送，控制逻辑要负责判定当前由哪个部件占用总线。</li><li>三态门由使能信号控制，未被选中的部件输出高阻态，既不影响总线电平，也不会与占用总线的部件发生冲突。</li><li>总线上的数据可以从一个寄存器直接送入另一个寄存器，也可以先送到运算部件加工，再把结果写回指定寄存器。</li><li>数据通路的宽度由总线的位数决定，比总线宽的数据可以分几次传送，这需要额外的控制和寄存器配合。</li></ul>\n<figure id=\"fig-sec-6.2.1-1\" data-fig=\"fig-sec-6.2.1-1\" data-sec=\"sec-6.2.1\" data-caption=\"单总线数据通路的寄存器、运算部件与三态门\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMzAwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IuWNleaAu+e6v+aVsOaNrumAmui3r+eahOWvhOWtmOWZqOOAgei/kOeul+mDqOS7tuS4juS4ieaAgemXqCI+CjxzdHlsZT4KLnN7ZmlsbDpub25lO3N0cm9rZTojNThjYzAyO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZH0KLnR7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweH0KLmJ7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo2MDB9Ci5te2ZpbGw6IzlhYTJiMTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEyLjVweH0KLmd7ZmlsbDpub25lO3N0cm9rZTojM2E0MjUwO3N0cm9rZS13aWR0aDoxLjJ9Ci5ib3h7ZmlsbDojMWIyMDI5O3N0cm9rZTojM2E0MjUwO3N0cm9rZS13aWR0aDoxLjV9Cjwvc3R5bGU+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxNDE4MjEiLz4KPHRleHQgeD0iMjQiIHk9IjI4IiBjbGFzcz0iYiI+5Y2V5oC757q/5pWw5o2u6YCa6LevPC90ZXh0Pgo8bGluZSB4MT0iNjAiIHkxPSIxNzAiIHgyPSI1ODAiIHkyPSIxNzAiIGNsYXNzPSJzIi8+PGxpbmUgeDE9IjYwIiB5MT0iMTc4IiB4Mj0iNTgwIiB5Mj0iMTc4IiBjbGFzcz0icyIvPgo8dGV4dCB4PSI0MCIgeT0iMTY2IiBjbGFzcz0ibSI+5oC757q/PC90ZXh0Pgo8cmVjdCB4PSI3MCIgeT0iNzAiIHdpZHRoPSI3MCIgaGVpZ2h0PSI1MCIgcng9IjYiIGNsYXNzPSJib3giLz48dGV4dCB4PSIxMDUiIHk9IjEwMCIgY2xhc3M9InQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlIwPC90ZXh0PjxyZWN0IHg9IjE2MCIgeT0iNzAiIHdpZHRoPSI3MCIgaGVpZ2h0PSI1MCIgcng9IjYiIGNsYXNzPSJib3giLz48dGV4dCB4PSIxOTUiIHk9IjEwMCIgY2xhc3M9InQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlIxPC90ZXh0PjxyZWN0IHg9IjI1MCIgeT0iNzAiIHdpZHRoPSI3MCIgaGVpZ2h0PSI1MCIgcng9IjYiIGNsYXNzPSJib3giLz48dGV4dCB4PSIyODUiIHk9IjEwMCIgY2xhc3M9InQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlIyPC90ZXh0PjxyZWN0IHg9IjM0MCIgeT0iNzAiIHdpZHRoPSI3MCIgaGVpZ2h0PSI1MCIgcng9IjYiIGNsYXNzPSJib3giLz48dGV4dCB4PSIzNzUiIHk9IjEwMCIgY2xhc3M9InQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlIzPC90ZXh0Pgo8bGluZSB4MT0iMTA1IiB5MT0iMTIwIiB4Mj0iMTA1IiB5Mj0iMTQ2IiBjbGFzcz0icyIvPjxwYXRoIGQ9Ik05OCAxNDYgbDcgMTQgbDcgLTE0IHoiIGZpbGw9IiM1OGNjMDIiLz48bGluZSB4MT0iMTA1IiB5MT0iMTYwIiB4Mj0iMTA1IiB5Mj0iMTcwIiBjbGFzcz0icyIvPjxsaW5lIHgxPSIxOTUiIHkxPSIxMjAiIHgyPSIxOTUiIHkyPSIxNDYiIGNsYXNzPSJzIi8+PHBhdGggZD0iTTk4IDE0NiBsNyAxNCBsNyAtMTQgeiIgZmlsbD0iIzU4Y2MwMiIvPjxsaW5lIHgxPSIxOTUiIHkxPSIxNjAiIHgyPSIxOTUiIHkyPSIxNzAiIGNsYXNzPSJzIi8+PGxpbmUgeDE9IjI4NSIgeTE9IjEyMCIgeDI9IjI4NSIgeTI9IjE0NiIgY2xhc3M9InMiLz48cGF0aCBkPSJNOTggMTQ2IGw3IDE0IGw3IC0xNCB6IiBmaWxsPSIjNThjYzAyIi8+PGxpbmUgeDE9IjI4NSIgeTE9IjE2MCIgeDI9IjI4NSIgeTI9IjE3MCIgY2xhc3M9InMiLz48bGluZSB4MT0iMzc1IiB5MT0iMTIwIiB4Mj0iMzc1IiB5Mj0iMTQ2IiBjbGFzcz0icyIvPjxwYXRoIGQ9Ik05OCAxNDYgbDcgMTQgbDcgLTE0IHoiIGZpbGw9IiM1OGNjMDIiLz48bGluZSB4MT0iMzc1IiB5MT0iMTYwIiB4Mj0iMzc1IiB5Mj0iMTcwIiBjbGFzcz0icyIvPgo8dGV4dCB4PSI0MDAiIHk9IjE0MCIgY2xhc3M9Im0iPuS4ieaAgei+k+WHujwvdGV4dD4KPHJlY3QgeD0iMjUwIiB5PSIyMDUiIHdpZHRoPSIxNDAiIGhlaWdodD0iNTUiIHJ4PSI2IiBjbGFzcz0iYm94Ii8+PHRleHQgeD0iMzIwIiB5PSIyMzgiIGNsYXNzPSJ0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BTFU8L3RleHQ+CjxsaW5lIHgxPSIyODAiIHkxPSIyMDUiIHgyPSIyODAiIHkyPSIxNzgiIGNsYXNzPSJzIi8+PGxpbmUgeDE9IjM2MCIgeTE9IjIwNSIgeDI9IjM2MCIgeTI9IjE3OCIgY2xhc3M9InMiLz4KPGxpbmUgeDE9IjMyMCIgeTE9IjI2MCIgeDI9IjMyMCIgeTI9IjI3MiIgY2xhc3M9InMiLz48dGV4dCB4PSIzMjgiIHk9IjI4OCIgY2xhc3M9Im0iPue7k+aenOWbnuaAu+e6vzwvdGV4dD4KPGxpbmUgeDE9IjQ3MCIgeTE9IjcwIiB4Mj0iNDcwIiB5Mj0iMjA1IiBjbGFzcz0icyIvPjx0ZXh0IHg9IjQ3NiIgeT0iMTIwIiBjbGFzcz0ibSI+5o6n5Yi25L+h5Y+3PC90ZXh0Pjx0ZXh0IHg9IjQ3NiIgeT0iMTQwIiBjbGFzcz0ibSI+6YCJ5oup5rqQ5LiO5pON5L2cPC90ZXh0Pgo8L3N2Zz4K\" alt=\"单总线数据通路的寄存器、运算部件与三态门\" loading=\"lazy\"><figcaption>单总线数据通路的寄存器、运算部件与三态门</figcaption></figure>"
						},
						{
							"number": "6.2.2",
							"heading": "数据通路实例",
							"anchor": "sec-6.2.2",
							"html": "<ul><li>数据通路实例通常给出寄存器组、运算部件、总线和控制信号的连接关系，用来说明一步操作如何完成。</li><li>把某个寄存器的内容送上总线，需要打开它的输出三态门，同时使其他寄存器保持高阻，避免多个源同时驱动。</li><li>运算部件的两个输入可以分别取自总线和另一个寄存器，运算结果在时钟边沿写入目标寄存器，完成一次加工。</li><li>控制信号按节拍依次有效，一个节拍完成一次传送或运算，若干节拍组合起来就是一条指令或一个操作步骤的动作。</li><li>设计时要逐个节拍检查总线的驱动源，同一节拍出现两个驱动源就是逻辑错误，应在控制信号中排除。</li></ul>\n<p class=\"pitfall\">易错：总线上的数据是分时传送的，不能把两个寄存器同时打开到同一组总线。</p>"
						}
					],
					"number": "6.2",
					"anchor": "sec-6.2",
					"html": ""
				},
				{
					"heading": "由顶向下的设计方法",
					"lines": [],
					"subs": [
						{
							"number": "6.3.1",
							"heading": "数字系统的设计任务",
							"anchor": "sec-6.3.1",
							"html": "<ul><li>设计任务从功能要求出发，先明确输入输出信号、工作速度、数据宽度和接口方式等约束，再决定实现方案。</li><li>由顶向下的方法先把系统划分为若干子系统，再逐层细化到功能部件和门级电路，每一层都有明确的接口定义。</li><li>划分时应使子系统之间的连线少、接口简单、功能相对独立，便于分别设计、调试和更换。</li><li>确定方案时要作比较，权衡速度、器件数量和实现难易，选定后用总体框图固定下来，作为后续细化的依据。</li><li>每一层完成后都应验证，低层的错误若拖到最后才暴露，返工的范围和代价都会明显增大。</li></ul>"
						},
						{
							"number": "6.3.2",
							"heading": "算法状态机和算法流程图",
							"anchor": "sec-6.3.2",
							"html": "<ul><li>算法状态机用状态框、判断框和条件输出框描述控制器的时序行为，是设计控制器的主要工具。</li><li>状态框表示一个状态，框内注明该状态下产生的输出，框外标注状态名，状态之间按节拍推进。</li><li>判断框根据输入条件选择转移方向，菱形的每个分支对应一种输入取值，从而表达分支和循环。</li><li>条件输出框挂在状态框旁，表示只在满足某条件时才产生的输出，与状态框内标注的无条件输出相区别。</li><li>算法流程图把状态和操作按时间顺序展开，便于由算法直接得到状态表和状态图，再据此实现电路。</li></ul>\n<figure id=\"fig-sec-6.3.2-1\" data-fig=\"fig-sec-6.3.2-1\" data-sec=\"sec-6.3.2\" data-caption=\"ASM 图的状态框、判断框与条件分支\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MjAgMzMwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IkFTTSDlm77vvJrnirbmgIHmoYbnu5nlh7ror6XnirbmgIHnmoTovpPlh7rvvIzliKTmlq3moYbmjInmnaHku7bliIbmlK/liLDkuI3lkIzmrKHmgIEiPgoJPGRlZnM+CgkJPG1hcmtlciBpZD0iYSIgdmlld0JveD0iMCAwIDEwIDEwIiByZWZYPSI5IiByZWZZPSI1IiBtYXJrZXJXaWR0aD0iNyIgbWFya2VySGVpZ2h0PSI3IiBvcmllbnQ9ImF1dG8tc3RhcnQtcmV2ZXJzZSI+CgkJCTxwYXRoIGQ9Ik0wIDBsMTAgNS0xMCA1eiIgZmlsbD0iIzU4Y2MwMiIvPgoJCTwvbWFya2VyPgoJPC9kZWZzPgoJPGcgZmlsbD0iIzFjMWYyNiIgc3Ryb2tlPSIjNThjYzAyIiBzdHJva2Utd2lkdGg9IjIuMiI+CgkJPHJlY3QgeD0iMTcwIiB5PSIzMCIgd2lkdGg9IjE4MCIgaGVpZ2h0PSI2NCIgcng9IjgiLz4KCQk8cGF0aCBkPSJNMjYwIDEyNmw3MiA0Ni03MiA0Ni03Mi00NnoiLz4KCQk8cmVjdCB4PSI2MCIgeT0iMjUwIiB3aWR0aD0iMTUwIiBoZWlnaHQ9IjU2IiByeD0iOCIvPgoJCTxyZWN0IHg9IjMwOCIgeT0iMjUwIiB3aWR0aD0iMTUwIiBoZWlnaHQ9IjU2IiByeD0iOCIvPgoJPC9nPgoJPGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNThjYzAyIiBzdHJva2Utd2lkdGg9IjIuMiIgbWFya2VyLWVuZD0idXJsKCNhKSI+CgkJPHBhdGggZD0iTTI2MCA5NHYzMiIvPgoJCTxwYXRoIGQ9Ik0xODggMTcybC01OCA3OCIvPgoJCTxwYXRoIGQ9Ik0zMzIgMTcybDU4IDc4Ii8+CgkJPHBhdGggZD0iTTEzNSAyNTB2LTMwaDEyNSIvPgoJPC9nPgoJPGcgZm9udC1mYW1pbHk9IlNlZ29lIFVJLCBNaWNyb3NvZnQgWWFIZWksIHNhbnMtc2VyaWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPgoJCTx0ZXh0IHg9IjI2MCIgeT0iNTgiIGZpbGw9IiNlNmU4ZWUiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSI2MDAiPlMwPC90ZXh0PgoJCTx0ZXh0IHg9IjI2MCIgeT0iNzgiIGZpbGw9IiM5YWEyYjEiIGZvbnQtc2l6ZT0iMTIiPlkgPSAxPC90ZXh0PgoJCTx0ZXh0IHg9IjI2MCIgeT0iMTc4IiBmaWxsPSIjZTZlOGVlIiBmb250LXNpemU9IjEzIj5YID0gMSA/PC90ZXh0PgoJCTx0ZXh0IHg9IjEzNSIgeT0iMjc0IiBmaWxsPSIjZTZlOGVlIiBmb250LXNpemU9IjEzIj5TMDwvdGV4dD4KCQk8dGV4dCB4PSIxMzUiIHk9IjI5MiIgZmlsbD0iIzlhYTJiMSIgZm9udC1zaXplPSIxMSI+WSA9IDA8L3RleHQ+CgkJPHRleHQgeD0iMzgzIiB5PSIyNzQiIGZpbGw9IiNlNmU4ZWUiIGZvbnQtc2l6ZT0iMTMiPlMxPC90ZXh0PgoJCTx0ZXh0IHg9IjM4MyIgeT0iMjkyIiBmaWxsPSIjOWFhMmIxIiBmb250LXNpemU9IjExIj5ZID0gMTwvdGV4dD4KCQk8dGV4dCB4PSIxNzYiIHk9IjE2NiIgZmlsbD0iIzlhYTJiMSIgZm9udC1zaXplPSIxMSI+5ZCmPC90ZXh0PgoJCTx0ZXh0IHg9IjM0NCIgeT0iMTY2IiBmaWxsPSIjOWFhMmIxIiBmb250LXNpemU9IjExIj7mmK88L3RleHQ+CgkJPHRleHQgeD0iMjYwIiB5PSIzMjIiIGZpbGw9IiM2YjcyODAiIGZvbnQtc2l6ZT0iMTEiPueKtuaAgeahhuWGmei+k+WHuu+8jOWIpOaWreahhuWGmei9rOenu+adoeS7tjwvdGV4dD4KCTwvZz4KPC9zdmc+Cg==\" alt=\"ASM 图的状态框、判断框与条件分支\" loading=\"lazy\"><figcaption>ASM 图的状态框、判断框与条件分支</figcaption></figure>\n<p class=\"pitfall\">易错：算法流程图描述的是控制流程和状态，不是数据通路的连线图，两者不要混用一张图。</p>"
						}
					],
					"number": "6.3",
					"anchor": "sec-6.3",
					"html": ""
				},
				{
					"heading": "小型控制器的设计",
					"lines": [],
					"subs": [
						{
							"number": "6.4.1",
							"heading": "控制器的基本概念",
							"anchor": "sec-6.4.1",
							"html": "<ul><li>控制器在时钟驱动下按状态顺序产生控制信号，输入是外部信号和状态标志，输出是各部件所需的控制命令。</li><li>控制器的状态数由算法所需的步数决定，状态的编码方式影响所用触发器的数目和译码电路的规模。</li><li>按状态产生方式和实现结构的不同，小型控制器可分为计数器型、多路选择器型和定序型等。</li><li>控制器输出有摩尔型和米利型之分，前者只与当前状态有关，后者还与当前输入有关，二者的时序约束不同。</li><li>设计的一般步骤是画出状态图、列出状态表、选择状态编码和器件，再求出激励方程与输出方程。</li></ul>\n<figure id=\"fig-sec-6.4.1-1\" data-fig=\"fig-sec-6.4.1-1\" data-sec=\"sec-6.4.1\" data-caption=\"小型控制器由状态寄存器与组合逻辑组成\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMjgwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IuWwj+Wei+aOp+WItuWZqOeUseeKtuaAgeWvhOWtmOWZqOS4jue7hOWQiOmAu+i+kee7hOaIkCI+CjxzdHlsZT4KLnN7ZmlsbDpub25lO3N0cm9rZTojNThjYzAyO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZH0KLnR7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweH0KLmJ7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo2MDB9Ci5te2ZpbGw6IzlhYTJiMTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEyLjVweH0KLmd7ZmlsbDpub25lO3N0cm9rZTojM2E0MjUwO3N0cm9rZS13aWR0aDoxLjJ9Ci5ke2ZpbGw6bm9uZTtzdHJva2U6IzNhNDI1MDtzdHJva2Utd2lkdGg6MS4yO3N0cm9rZS1kYXNoYXJyYXk6NSA1fQouYm94e2ZpbGw6IzFiMjAyOTtzdHJva2U6IzNhNDI1MDtzdHJva2Utd2lkdGg6MS41fQouY29kZXtmaWxsOiNlNmU4ZWU7Zm9udC1mYW1pbHk6IkNvbnNvbGFzIiwiQ291cmllciBOZXciLG1vbm9zcGFjZTtmb250LXNpemU6MTNweH0KPC9zdHlsZT48ZGVmcz48bWFya2VyIGlkPSJhciIgbWFya2VyV2lkdGg9IjgiIG1hcmtlckhlaWdodD0iOCIgcmVmWD0iNiIgcmVmWT0iMyIgb3JpZW50PSJhdXRvIj48cGF0aCBkPSJNMCAwIEw2IDMgTDAgNiB6IiBmaWxsPSIjNThjYzAyIi8+PC9tYXJrZXI+PC9kZWZzPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMTQxODIxIi8+Cjx0ZXh0IHg9IjI0IiB5PSIyOCIgY2xhc3M9ImIiPuWwj+Wei+aOp+WItuWZqOeahOe7hOaIkDwvdGV4dD4KPHJlY3QgeD0iNjAiIHk9IjEwMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSI3MCIgcng9IjciIGNsYXNzPSJib3giLz4KPHRleHQgeD0iMTIwIiB5PSIxNDEiIGNsYXNzPSJ0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7nirbmgIHlr4TlrZjlmag8L3RleHQ+CjxyZWN0IHg9IjI4MCIgeT0iODAiIHdpZHRoPSIyMDAiIGhlaWdodD0iMTEwIiByeD0iNyIgY2xhc3M9ImJveCIvPgo8dGV4dCB4PSIzODAiIHk9IjEyOCIgY2xhc3M9InQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPue7hOWQiOmAu+i+kTwvdGV4dD4KPHRleHQgeD0iMzgwIiB5PSIxNTQiIGNsYXNzPSJtIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7lhrPlrprmrKHmgIHkuI7ovpPlh7o8L3RleHQ+CjxsaW5lIHgxPSIxODAiIHkxPSIxMjAiIHgyPSIyNzYiIHkyPSIxMjAiIGNsYXNzPSJzIiBtYXJrZXItZW5kPSJ1cmwoI2FyKSIvPgo8dGV4dCB4PSIyMjgiIHk9IjExMCIgY2xhc3M9Im0iIHRleHQtYW5jaG9yPSJtaWRkbGUiPueOsOaAgTwvdGV4dD4KPHBhdGggZD0iTTI4MCAxNzAgSDI0MCBWMjAwIEgxMjAgVjE3NCIgY2xhc3M9InMiIG1hcmtlci1lbmQ9InVybCgjYXIpIi8+Cjx0ZXh0IHg9IjE5NiIgeT0iMjE4IiBjbGFzcz0ibSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+5qyh5oCBPC90ZXh0Pgo8bGluZSB4MT0iOTAiIHkxPSIyNDQiIHgyPSI5MCIgeTI9IjE3NCIgY2xhc3M9InMiIG1hcmtlci1lbmQ9InVybCgjYXIpIi8+Cjx0ZXh0IHg9Ijk4IiB5PSIyMjgiIGNsYXNzPSJtIj5DTEs8L3RleHQ+CjxsaW5lIHgxPSIzODAiIHkxPSI0NCIgeDI9IjM4MCIgeTI9Ijc2IiBjbGFzcz0icyIgbWFya2VyLWVuZD0idXJsKCNhcikiLz4KPHRleHQgeD0iMzgwIiB5PSIzNCIgY2xhc3M9Im0iIHRleHQtYW5jaG9yPSJtaWRkbGUiPuWklumDqOS/oeWPt+OAgeeKtuaAgeagh+W/lzwvdGV4dD4KPGxpbmUgeDE9IjQ4MCIgeTE9IjEyMCIgeDI9IjU1NiIgeTI9IjEyMCIgY2xhc3M9InMiIG1hcmtlci1lbmQ9InVybCgjYXIpIi8+Cjx0ZXh0IHg9IjUyMCIgeT0iMTEwIiBjbGFzcz0ibSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+5o6n5Yi25L+h5Y+3PC90ZXh0Pgo8L3N2Zz4K\" alt=\"小型控制器由状态寄存器与组合逻辑组成\" loading=\"lazy\"><figcaption>小型控制器由状态寄存器与组合逻辑组成</figcaption></figure>"
						},
						{
							"number": "6.4.2",
							"heading": "计数器型控制器",
							"anchor": "sec-6.4.2",
							"html": "<ul><li>计数器型控制器用计数器产生状态，计数器的不同计数值直接对应各个状态，状态的先后由计数顺序决定。</li><li>控制信号由计数值经译码器译出，每个状态对应一条译码输出，再与条件信号组合形成所需的控制命令。</li><li>若状态转移需要跳过某些状态或有条件分支，就要在计数器输入端加入控制，使其置入指定的下一个状态。</li><li>这种结构的状态编码固定，译码输出可以直接当作节拍信号使用，适合状态顺序单一、分支较少的控制流程。</li><li>状态数不是 2 的幂时，多余的状态必须在设计中强制转入有效状态，防止控制器进入无效循环。</li></ul>"
						},
						{
							"number": "6.4.3",
							"heading": "多路选择器型控制器",
							"anchor": "sec-6.4.3",
							"html": "<ul><li>多路选择器型控制器由状态寄存器和多路选择器配合，用选择信号决定下一个状态。</li><li>状态寄存器保存当前状态，其输出经译码后作为多路选择器的选择输入，选出预先接在各数据端的下一状态值。</li><li>每个状态对应的下一状态由外部条件和状态标志经组合逻辑产生，接到多路选择器相应的数据输入端。</li><li>这种结构把状态转移表直接做进多路选择器的数据输入，修改转移关系只需改动数据或接线，规律比较直观。</li><li>状态较多时多路选择器的规模随之增大，可以分级或分组使用，在速度和器件数量之间取得平衡。</li></ul>"
						},
						{
							"number": "6.4.4",
							"heading": "定序型控制器",
							"anchor": "sec-6.4.4",
							"html": "<ul><li>定序型控制器由状态寄存器和组合逻辑构成，下一状态和输出都由当前状态与输入经组合逻辑算出。</li><li>状态寄存器在时钟边沿更新，组合逻辑按状态表和输出表实现，是最一般形式的有限状态机。</li><li>状态编码可以取二进制顺序，也可以采用相邻状态只变一位等方案，编码方式影响逻辑复杂度和运行可靠性。</li><li>设计时先由状态图列出状态表，再用卡诺图或逻辑化简求出激励方程与输出方程，最后用触发器和门电路实现。</li><li>定序型控制器对状态数和分支数目没有限制，但组合逻辑随状态数增长较快，规模很大时宜改用微程序方式。</li></ul>\n<p class=\"pitfall\">易错：计数器型与定序型的关键差别是状态怎么产生，前者靠计数顺序，后者靠组合逻辑按状态表决定。</p>"
						}
					],
					"number": "6.4",
					"anchor": "sec-6.4",
					"html": ""
				},
				{
					"heading": "微程序控制器的设计",
					"lines": [],
					"subs": [
						{
							"number": "6.5.1",
							"heading": "微程序控制的基本原理",
							"anchor": "sec-6.5.1",
							"html": "<ul><li>微程序控制把控制信号按节拍编成微指令，存放在控制存储器中，运行时逐条取出并产生相应的控制信号。</li><li>一条机器指令对应一段微程序，微程序由若干条微指令组成，每条微指令在一个或几个节拍内有效。</li><li>微指令中一位对应一根控制线，该位为 1 表示对应控制信号有效，这种直接编码方式直观但微指令字较长。</li><li>也可采用字段编码，把互斥的控制信号编在同一字段内，经译码后输出，以缩短微指令的字长。</li><li>下一条微指令的地址通常由微地址计数器给出，也可由微指令中的下址字段或条件转移信号决定。</li></ul>"
						},
						{
							"number": "6.5.2",
							"heading": "微程序控制器的一般结构",
							"anchor": "sec-6.5.2",
							"html": "<ul><li>微程序控制器由控制存储器、微指令寄存器、微地址寄存器和微地址形成电路组成。</li><li>控制存储器存放全部微指令，地址由微地址寄存器提供，读出的微指令送入微指令寄存器保存。</li><li>微指令的操作控制字段直接或经译码后送到各部件，形成控制信号；顺序控制字段决定下一条微指令的地址。</li><li>微地址形成电路根据操作码、状态标志和微指令中的下址字段产生下一微地址，从而实现微程序的分支与循环。</li><li>控制存储器可用只读存储器实现，采用可改写存储器时便于修改微程序，但成本与读出速度需要权衡。</li></ul>\n<figure id=\"fig-sec-6.5.2-1\" data-fig=\"fig-sec-6.5.2-1\" data-sec=\"sec-6.5.2\" data-caption=\"微指令格式与控制存储器读出流程\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMjYwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IuW+ruaMh+S7pOagvOW8j+S4juaOp+WItuWtmOWCqOWZqOivu+WHuua1geeoiyI+CjxzdHlsZT4KLnN7ZmlsbDpub25lO3N0cm9rZTojNThjYzAyO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZH0KLnR7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweH0KLmJ7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo2MDB9Ci5te2ZpbGw6IzlhYTJiMTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEyLjVweH0KLmd7ZmlsbDpub25lO3N0cm9rZTojM2E0MjUwO3N0cm9rZS13aWR0aDoxLjJ9Ci5ib3h7ZmlsbDojMWIyMDI5O3N0cm9rZTojM2E0MjUwO3N0cm9rZS13aWR0aDoxLjV9Cjwvc3R5bGU+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxNDE4MjEiLz4KPHRleHQgeD0iMjQiIHk9IjI4IiBjbGFzcz0iYiI+5b6u5oyH5Luk5qC85byPPC90ZXh0Pgo8cmVjdCB4PSI2MCIgeT0iNzAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNzAiIHJ4PSI2IiBjbGFzcz0iYm94Ii8+PHRleHQgeD0iMTIwIiB5PSIxMTAiIGNsYXNzPSJ0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7mjqfliLblrZjlgqjlmag8L3RleHQ+CjxsaW5lIHgxPSIxODAiIHkxPSIxMDUiIHgyPSIyMjAiIHkyPSIxMDUiIGNsYXNzPSJzIi8+PHBhdGggZD0iTTIyMCAxMDUgbC03IC0zLjUgdjcgeiIgZmlsbD0iIzU4Y2MwMiIvPgo8cmVjdCB4PSIyMjAiIHk9IjcwIiB3aWR0aD0iODAiIGhlaWdodD0iNzAiIHJ4PSI2IiBjbGFzcz0iYm94Ii8+PHRleHQgeD0iMjYwIiB5PSIxMTAiIGNsYXNzPSJ0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7lvq7mjIfku6Tlr4TlrZjlmag8L3RleHQ+CjxyZWN0IHg9IjMzMCIgeT0iNjAiIHdpZHRoPSIyNTAiIGhlaWdodD0iOTAiIHJ4PSI2IiBjbGFzcz0iYm94Ii8+CjxsaW5lIHgxPSI0MDAiIHkxPSI2MCIgeDI9IjQwMCIgeTI9IjE1MCIgY2xhc3M9InMiLz48bGluZSB4MT0iNDkwIiB5MT0iNjAiIHgyPSI0OTAiIHkyPSIxNTAiIGNsYXNzPSJzIi8+Cjx0ZXh0IHg9IjM2NSIgeT0iMTEyIiBjbGFzcz0idCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+5LiL5Z2APC90ZXh0Pjx0ZXh0IHg9IjQ0NSIgeT0iMTEyIiBjbGFzcz0idCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+5pON5L2c5o6n5Yi2PC90ZXh0Pjx0ZXh0IHg9IjUzNSIgeT0iMTEyIiBjbGFzcz0idCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+5Yik5YirPC90ZXh0Pgo8dGV4dCB4PSIzMzAiIHk9IjE4MCIgY2xhc3M9Im0iPuS4i+WdgOWtl+auteWGs+WumuWQjue7p+W+ruWcsOWdgDwvdGV4dD4KPHRleHQgeD0iMzMwIiB5PSIyMDYiIGNsYXNzPSJtIj7mk43kvZzmjqfliLblrZfmrrXnm7TmjqXmiJbor5HnoIHlkI7ovpPlh7rmjqfliLbkv6Hlj7c8L3RleHQ+CjxyZWN0IHg9IjgwIiB5PSIxOTAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNDAiIHJ4PSI2IiBjbGFzcz0iYm94Ii8+PHRleHQgeD0iMTQwIiB5PSIyMTUiIGNsYXNzPSJ0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7lvq7lnLDlnYDlr4TlrZjlmag8L3RleHQ+CjxsaW5lIHgxPSIxNDAiIHkxPSIxOTAiIHgyPSIxNDAiIHkyPSIxNDAiIGNsYXNzPSJzIi8+PHBhdGggZD0iTTE0MCAxNDAgbC03IC0zLjUgdjcgeiIgZmlsbD0iIzU4Y2MwMiIvPgo8dGV4dCB4PSI2MCIgeT0iMjUwIiBjbGFzcz0ibSI+5py65Zmo5oyH5Luk5pON5L2c56CB5pig5bCE5Li65b6u56iL5bqP5YWl5Y+jPC90ZXh0Pgo8L3N2Zz4K\" alt=\"微指令格式与控制存储器读出流程\" loading=\"lazy\"><figcaption>微指令格式与控制存储器读出流程</figcaption></figure>"
						},
						{
							"number": "6.5.3",
							"heading": "微程序控制器的设计",
							"anchor": "sec-6.5.3",
							"html": "<ul><li>设计微程序控制器先确定机器指令的操作序列，把每条指令分解为若干微操作，再按节拍编排成微指令。</li><li>根据微操作能否并行执行划分节拍，同一节拍内可以同时完成的微操作编入同一条微指令。</li><li>选定微指令格式和编码方式，确定控制字段的位数与下址字段的宽度，再逐条编写全部微指令。</li><li>微地址的分配要与微程序的执行顺序一致，转移入口和公共微程序段的地址应在设计中统一安排。</li><li>最后把微指令写入控制存储器，并用模拟或实际运行检查每条机器指令的功能与时序是否正确。</li></ul>\n<p class=\"pitfall\">易错：微程序方案改功能只改控制存储器中的微指令，不需要改动数据通路的连线。</p>"
						}
					],
					"number": "6.5",
					"anchor": "sec-6.5",
					"html": ""
				},
				{
					"heading": "数字系统设计实例",
					"lines": [],
					"subs": [
						{
							"number": "6.6.1",
							"heading": "由顶向下——子系统的划分",
							"anchor": "sec-6.6.1",
							"html": "<ul><li>设计实例从功能要求出发，先把系统划分为数据通路和控制器两个子系统，再分别向下划分到功能部件。</li><li>数据通路按数据宽度和运算种类划分为寄存器组、运算部件和总线等部分，接口用数据线与控制线表示。</li><li>控制器按所需状态数划分，先画出算法流程图，再决定采用小型控制器还是微程序控制器实现。</li><li>子系统之间的接口要在划分阶段定清楚，包括信号名称、方向、有效电平和时序关系，避免后期反复修改。</li><li>划分结果用框图表示，每一层只画出本层的部件和接口，具体电路留到下一层展开。</li></ul>"
						},
						{
							"number": "6.6.2",
							"heading": "小型控制器的实现方案",
							"anchor": "sec-6.6.2",
							"html": "<ul><li>小型控制器方案用状态图描述控制流程，再按状态数选择计数器型、多路选择器型或定序型的结构。</li><li>状态较少且顺序固定时，用计数器加译码器产生节拍信号最为直接，控制信号由节拍与条件信号组合得到。</li><li>分支较多时改用多路选择器型，把各状态的转移条件接到数据端，修改转移关系比较方便。</li><li>实现时要处理无效状态和上电复位，保证控制器每次都从确定的初始状态开始运行。</li><li>控制信号的有效时间要与数据通路的时序配合，不能与时钟边沿冲突，否则寄存器可能写入错误的数据。</li></ul>"
						},
						{
							"number": "6.6.3",
							"heading": "微程序控制器的实现方案",
							"anchor": "sec-6.6.3",
							"html": "<ul><li>微程序方案把控制信号编成微指令存入控制存储器，控制器的主体是控制存储器和微地址逻辑。</li><li>实现时先列出每条机器指令的微操作序列，按并行性划分节拍，再确定微指令格式。</li><li>微地址的形成要兼顾顺序执行、条件转移和各指令微程序的入口，常把操作码映射为对应的入口地址。</li><li>与小型控制器相比，微程序方案的控制逻辑规整、便于修改和扩展，但要额外的存储器，速度受取微指令时间的限制。</li><li>两种方案的选择取决于控制复杂度和速度要求，状态多、分支复杂时微程序方案更为合适。</li></ul>\n<p class=\"pitfall\">易错：两种方案输出的控制时序可以相同，比较的是实现代价和可修改性，不是功能强弱。</p>"
						}
					],
					"number": "6.6",
					"anchor": "sec-6.6",
					"html": ""
				}
			]
		},
		{
			"id": "c7",
			"label": "第七章",
			"title": "第七章 A/D转换与D/A转换",
			"modules": [],
			"sections": [
				{
					"heading": "数字信号处理的基本概念",
					"lines": [],
					"subs": [
						{
							"number": "7.1.1",
							"heading": "模拟量与数字量的转换",
							"anchor": "sec-7.1.1",
							"html": "<ul><li>模拟量在时间上和幅值上都连续，数字量在时间上和幅值上都离散，两者之间的转换要经过采样、量化和编码等步骤。</li><li>D/A 转换把数字量按各位的权值转换成对应的模拟电压或电流，A/D 转换则把模拟量转换成一定位数的数字代码。</li><li>转换器的位数决定分辨率，位数越多能区分的模拟量越小，但转换时间和电路规模也随之增加。</li><li>精度与分辨率不是一回事，精度还受基准电压、电阻匹配和比较器失调等因素影响。</li><li>实际系统常把传感器输出的微弱信号先放大到合适的范围，再送入 A/D 转换器，转换后的数字量交给处理器运算。</li></ul>\n<figure id=\"fig-sec-7.1.1-1\" data-fig=\"fig-sec-7.1.1-1\" data-sec=\"sec-7.1.1\" data-caption=\"模拟信号经采样和量化变成阶梯波形\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMzAwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IuaooeaLn+S/oeWPt+e7j+mHh+agt+WSjOmHj+WMluWPmOaIkOmYtuair+azouW9oiI+CjxzdHlsZT4KLnN7ZmlsbDpub25lO3N0cm9rZTojNThjYzAyO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZH0KLnR7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweH0KLmJ7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo2MDB9Ci5te2ZpbGw6IzlhYTJiMTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEyLjVweH0KLmd7ZmlsbDpub25lO3N0cm9rZTojM2E0MjUwO3N0cm9rZS13aWR0aDoxLjJ9Ci5ke2ZpbGw6bm9uZTtzdHJva2U6IzNhNDI1MDtzdHJva2Utd2lkdGg6MS4yO3N0cm9rZS1kYXNoYXJyYXk6NSA1fQouYm94e2ZpbGw6IzFiMjAyOTtzdHJva2U6IzNhNDI1MDtzdHJva2Utd2lkdGg6MS41fQouY29kZXtmaWxsOiNlNmU4ZWU7Zm9udC1mYW1pbHk6IkNvbnNvbGFzIiwiQ291cmllciBOZXciLG1vbm9zcGFjZTtmb250LXNpemU6MTNweH0KPC9zdHlsZT4KPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzE0MTgyMSIvPgo8dGV4dCB4PSIyNCIgeT0iMjgiIGNsYXNzPSJiIj7ph4fmoLfkuI7ph4/ljJY8L3RleHQ+CjxsaW5lIHgxPSI2MCIgeTE9IjI1MCIgeDI9IjU5MCIgeTI9IjI1MCIgY2xhc3M9ImciLz4KPGxpbmUgeDE9IjYwIiB5MT0iMjUwIiB4Mj0iNjAiIHkyPSI2MCIgY2xhc3M9ImciLz4KPGxpbmUgeDE9IjYwIiB5MT0iMjIwIiB4Mj0iNTkwIiB5Mj0iMjIwIiBjbGFzcz0iZCIvPgo8bGluZSB4MT0iNjAiIHkxPSIxOTAiIHgyPSI1OTAiIHkyPSIxOTAiIGNsYXNzPSJkIi8+CjxsaW5lIHgxPSI2MCIgeTE9IjE2MCIgeDI9IjU5MCIgeTI9IjE2MCIgY2xhc3M9ImQiLz4KPGxpbmUgeDE9IjYwIiB5MT0iMTMwIiB4Mj0iNTkwIiB5Mj0iMTMwIiBjbGFzcz0iZCIvPgo8bGluZSB4MT0iNjAiIHkxPSIxMDAiIHgyPSI1OTAiIHkyPSIxMDAiIGNsYXNzPSJkIi8+CjxwYXRoIGQ9Ik02MCAyMDAgQzEyMCAxMjAgMTgwIDIzMCAyNDAgMTUwIEMzMDAgODAgMzYwIDIxMCA0MjAgMTIwIEM0ODAgNjAgNTQwIDE2MCA1OTAgOTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzlhYTJiMSIgc3Ryb2tlLXdpZHRoPSIxLjYiIHN0cm9rZS1kYXNoYXJyYXk9IjQgNCIvPgo8cGF0aCBkPSJNNjAgMjIwIEgxMzAgVjE5MCBIMjEwIFYxNjAgSDI5MCBWMTkwIEgzNzAgVjEzMCBINDUwIFYxNjAgSDUzMCBWMTAwIEg1OTAiIGNsYXNzPSJzIi8+CjxjaXJjbGUgY3g9IjE3MCIgY3k9IjE5MCIgcj0iNSIgZmlsbD0iIzU4Y2MwMiIvPgo8Y2lyY2xlIGN4PSIyNTAiIGN5PSIxNjAiIHI9IjUiIGZpbGw9IiM1OGNjMDIiLz4KPGNpcmNsZSBjeD0iMzMwIiBjeT0iMTkwIiByPSI1IiBmaWxsPSIjNThjYzAyIi8+CjxjaXJjbGUgY3g9IjQxMCIgY3k9IjEzMCIgcj0iNSIgZmlsbD0iIzU4Y2MwMiIvPgo8Y2lyY2xlIGN4PSI0OTAiIGN5PSIxNjAiIHI9IjUiIGZpbGw9IiM1OGNjMDIiLz4KPGNpcmNsZSBjeD0iNTcwIiBjeT0iMTAwIiByPSI1IiBmaWxsPSIjNThjYzAyIi8+Cjx0ZXh0IHg9IjU0IiB5PSIyMjQiIGNsYXNzPSJtIiB0ZXh0LWFuY2hvcj0iZW5kIj4wMDA8L3RleHQ+Cjx0ZXh0IHg9IjU0IiB5PSIxOTQiIGNsYXNzPSJtIiB0ZXh0LWFuY2hvcj0iZW5kIj4wMDE8L3RleHQ+Cjx0ZXh0IHg9IjU0IiB5PSIxNjQiIGNsYXNzPSJtIiB0ZXh0LWFuY2hvcj0iZW5kIj4wMTA8L3RleHQ+Cjx0ZXh0IHg9IjU0IiB5PSIxMzQiIGNsYXNzPSJtIiB0ZXh0LWFuY2hvcj0iZW5kIj4wMTE8L3RleHQ+Cjx0ZXh0IHg9IjU0IiB5PSIxMDQiIGNsYXNzPSJtIiB0ZXh0LWFuY2hvcj0iZW5kIj4xMDA8L3RleHQ+Cjx0ZXh0IHg9IjU5NiIgeT0iMjcyIiBjbGFzcz0ibSI+dDwvdGV4dD4KPHRleHQgeD0iNDQiIHk9IjY4IiBjbGFzcz0ibSI+dTwvdGV4dD4KPHRleHQgeD0iNjAiIHk9IjI4OCIgY2xhc3M9Im0iPuiZmue6v++8muaooeaLn+i+k+WFpTwvdGV4dD4KPHRleHQgeD0iMjY2IiB5PSIyODgiIGNsYXNzPSJtIj7pmLbmoq/vvJrph4/ljJblgLw8L3RleHQ+Cjx0ZXh0IHg9IjQ1MiIgeT0iMjg4IiBjbGFzcz0ibSI+5ZyG54K577ya6YeH5qC35pe25Yi7PC90ZXh0Pgo8L3N2Zz4K\" alt=\"模拟信号经采样和量化变成阶梯波形\" loading=\"lazy\"><figcaption>模拟信号经采样和量化变成阶梯波形</figcaption></figure>"
						},
						{
							"number": "7.1.2",
							"heading": "数字信号处理系统的组成",
							"anchor": "sec-7.1.2",
							"html": "<ul><li>数字信号处理系统一般由模拟输入、抗混叠滤波、A/D 转换、数字处理器、D/A 转换和模拟输出等部分组成。</li><li>抗混叠滤波器接在采样之前，限制输入信号的带宽，使高于折叠频率的分量被衰减，避免采样后发生混叠。</li><li>数字处理器按程序对采样序列作运算，其字长和运算速度决定系统的精度与实时性。</li><li>输出端的 D/A 转换把处理结果还原为模拟量，再经低通滤波平滑，得到连续的输出波形。</li><li>系统各部分的时钟与基准要协调，采样时钟的稳定度直接影响转换结果的准确性。</li></ul>\n<p class=\"pitfall\">易错：D/A 是数字量到模拟量，A/D 是模拟量到数字量，名称顺序与信号流向一致，不要记反。</p>"
						},
						{
							"number": "7.1.3",
							"heading": "采样保持电路",
							"anchor": "sec-7.1.3",
							"html": "<ul><li>采样保持电路在采样阶段跟踪输入，在保持阶段把采样瞬间的电压存到电容上，供转换期间使用。</li><li>孔径时间是从发出保持命令到开关真正断开的时间，孔径抖动是这段时间的不确定量。</li><li>保持期间电容会因漏电和负载电流缓慢放电，转换时间越长，保持电压下降带来的误差越大。</li><li>输入信号变化越快，采样保持的作用越明显；变化缓慢的信号可以直接送入转换器。</li><li>采样保持的精度取决于开关的电荷注入、电容的介质吸收和缓冲放大器的失调。</li></ul>\n<p class=\"pitfall\">易错：采样保持只把电压冻结，不改善量化位数；保持电容上的电压仍会漂移，不能无限延长转换时间。</p>"
						}
					],
					"number": "7.1",
					"anchor": "sec-7.1",
					"html": ""
				},
				{
					"heading": "A/D转换",
					"lines": [],
					"subs": [
						{
							"number": "7.2.1",
							"heading": "采样定理",
							"anchor": "sec-7.2.1",
							"html": "<ul><li>采样定理指出，对最高频率为 fmax 的带限信号，采样频率不低于 fmax 的 2 倍时，可以由采样序列无失真地恢复原信号。</li><li>采样频率的这个下限常称为奈奎斯特速率，低于它采样会使高频分量折叠到低频，形成无法分离的混叠。</li><li>实际信号的频谱不会严格带限，采样前要用抗混叠滤波器把高于 fmax 的分量衰减到可接受的程度。</li><li>采样保持电路在采样瞬间保持输入不变，使 A/D 转换期间输入稳定，减小孔径误差。</li><li>采样频率高于下限时恢复更容易，滤波器的过渡带可以放宽，但数据量和后续运算量随之增加。</li></ul>"
						},
						{
							"number": "7.2.2",
							"heading": "模数转换过程",
							"anchor": "sec-7.2.2",
							"html": "<ul><li>模数转换一般经过采样、保持、量化和编码四个步骤，前两步把连续时间信号变成离散时间信号。</li><li>量化把采样值归入有限个离散电平，量化间隔越小误差越小，量化误差最大为半个量化单位。</li><li>编码把量化后的电平用二进制代码表示，代码位数 n 与量化级数满足 2 的 n 次方关系，位数决定分辨率。</li><li>量化方式有舍入和截断之分，舍入的最大误差为半个量化单位，截断的最大误差接近一个量化单位。</li><li>采样保持与量化编码由转换器的内部电路完成，使用者关心的是转换时间、位数和输入范围等外部指标。</li></ul>\n<figure id=\"fig-sec-7.2.2-1\" data-fig=\"fig-sec-7.2.2-1\" data-sec=\"sec-7.2.2\" data-caption=\"模数转换的采样、保持、量化、编码流程\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgMjYwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IuaooeaVsOi9rOaNoua1geeoi++8muaooeaLn+S/oeWPt+e7j+mHh+agt+S/neaMgeOAgemHj+WMluOAgee8lueggeW+l+WIsOaVsOWtl+mHjyI+Cgk8ZyBmaWxsPSJub25lIiBzdHJva2U9IiM4YjkzYTEiIHN0cm9rZS13aWR0aD0iMiI+CgkJPHBhdGggZD0iTTI4IDEyMHEyMC01MiA0MCAwdDQwIDAgNDAgMCA0MCAwIiBzdHJva2U9IiM1OGNjMDIiLz4KCQk8cGF0aCBkPSJNMjA4IDE0MGgzNE0zMzAgMTQwaDM0TTQ1MiAxNDBoMzQiLz4KCTwvZz4KCTxnIGZpbGw9IiMxYzFmMjYiIHN0cm9rZT0iIzU4Y2MwMiIgc3Ryb2tlLXdpZHRoPSIyIj4KCQk8cmVjdCB4PSIyNDIiIHk9IjEwNCIgd2lkdGg9Ijg4IiBoZWlnaHQ9IjcyIiByeD0iOCIvPgoJCTxyZWN0IHg9IjM2NCIgeT0iMTA0IiB3aWR0aD0iODgiIGhlaWdodD0iNzIiIHJ4PSI4Ii8+CgkJPHJlY3QgeD0iNDg2IiB5PSIxMDQiIHdpZHRoPSI4OCIgaGVpZ2h0PSI3MiIgcng9IjgiLz4KCTwvZz4KCTxnIGZvbnQtZmFtaWx5PSJTZWdvZSBVSSwgTWljcm9zb2Z0IFlhSGVpLCBzYW5zLXNlcmlmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4KCQk8dGV4dCB4PSIyODYiIHk9IjE0NiIgZmlsbD0iI2U2ZThlZSIgZm9udC1zaXplPSIxMyI+6YeH5qC3PC90ZXh0PgoJCTx0ZXh0IHg9IjI4NiIgeT0iMTY0IiBmaWxsPSIjZTZlOGVlIiBmb250LXNpemU9IjEzIj7kv53mjIE8L3RleHQ+CgkJPHRleHQgeD0iNDA4IiB5PSIxNDYiIGZpbGw9IiNlNmU4ZWUiIGZvbnQtc2l6ZT0iMTMiPumHj+WMljwvdGV4dD4KCQk8dGV4dCB4PSI1MzAiIHk9IjE0NiIgZmlsbD0iI2U2ZThlZSIgZm9udC1zaXplPSIxMyI+57yW56CBPC90ZXh0PgoJCTx0ZXh0IHg9Ijc0IiB5PSIyMDYiIGZpbGw9IiM5YWEyYjEiIGZvbnQtc2l6ZT0iMTIiPuaooeaLn+i+k+WFpTwvdGV4dD4KCQk8dGV4dCB4PSI1NjAiIHk9IjkyIiBmaWxsPSIjOWFhMmIxIiBmb250LXNpemU9IjEyIj7mlbDlrZfovpPlh7o8L3RleHQ+CgkJPHRleHQgeD0iMzAwIiB5PSIyMzYiIGZpbGw9IiM2YjcyODAiIGZvbnQtc2l6ZT0iMTEiPumHh+agt+mXtOmalOWGs+WumumHh+agt+mikeeOh++8jOmHj+WMluS9jeaVsOWGs+WumuWIhui+qOeOhzwvdGV4dD4KCTwvZz4KCTxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzNhNDI1MCIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1kYXNoYXJyYXk9IjQgNCI+CgkJPHBhdGggZD0iTTIwOCA4OHY5Nk0zMzAgODh2OTZNNDUyIDg4djk2Ii8+Cgk8L2c+Cjwvc3ZnPgo=\" alt=\"模数转换的采样、保持、量化、编码流程\" loading=\"lazy\"><figcaption>模数转换的采样、保持、量化、编码流程</figcaption></figure>"
						},
						{
							"number": "7.2.3",
							"heading": "A/D转换器",
							"anchor": "sec-7.2.3",
							"html": "<ul><li>并行比较型 ADC 用 2 的 n 次方减 1 个比较器同时把输入与各基准电平比较，一次比较即得结果，速度最快但器件数目最多。</li><li>逐次逼近型 ADC 用 D/A 转换器和比较器逐位试探，从最高位开始确定各位，n 位需 n 个节拍，速度与位数之间取得折中。</li><li>双积分型 ADC 先对输入积分固定时间，再对基准电压反向积分，用计数得到数字量，抗干扰能力好但转换速度慢。</li><li>计数式 ADC 用计数器累加，由 D/A 转换器产生阶梯电压与输入比较，结构简单，转换时间随输入大小而变。</li><li>选用 ADC 时要根据信号带宽、精度要求和成本，在速度与分辨率之间作取舍。</li></ul>\n<figure id=\"fig-sec-7.2.3-1\" data-fig=\"fig-sec-7.2.3-1\" data-sec=\"sec-7.2.3\" data-caption=\"逐次逼近型模数转换器的组成\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMjgwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IumAkOasoemAvOi/keWei+aooeaVsOi9rOaNouWZqOeahOe7hOaIkCI+CjxzdHlsZT4KLnN7ZmlsbDpub25lO3N0cm9rZTojNThjYzAyO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZH0KLnR7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweH0KLmJ7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo2MDB9Ci5te2ZpbGw6IzlhYTJiMTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEyLjVweH0KLmd7ZmlsbDpub25lO3N0cm9rZTojM2E0MjUwO3N0cm9rZS13aWR0aDoxLjJ9Ci5ib3h7ZmlsbDojMWIyMDI5O3N0cm9rZTojM2E0MjUwO3N0cm9rZS13aWR0aDoxLjV9Cjwvc3R5bGU+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxNDE4MjEiLz4KPHRleHQgeD0iMjQiIHk9IjI4IiBjbGFzcz0iYiI+6YCQ5qyh6YC86L+R5Z6LIEFEQzwvdGV4dD4KPHJlY3QgeD0iNDAiIHk9IjcwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjYwIiByeD0iNiIgY2xhc3M9ImJveCIvPjx0ZXh0IHg9IjkwIiB5PSIxMDQiIGNsYXNzPSJ0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7ph4fmoLfkv53mjIE8L3RleHQ+CjxyZWN0IHg9IjE5MCIgeT0iNzAiIHdpZHRoPSIxMDAiIGhlaWdodD0iNjAiIHJ4PSI2IiBjbGFzcz0iYm94Ii8+PHRleHQgeD0iMjQwIiB5PSIxMDQiIGNsYXNzPSJ0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7mr5TovoPlmag8L3RleHQ+CjxsaW5lIHgxPSIxNDAiIHkxPSIxMDAiIHgyPSIxOTAiIHkyPSIxMDAiIGNsYXNzPSJzIi8+Cjx0ZXh0IHg9IjgiIHk9IjkwIiBjbGFzcz0idCI+VmluPC90ZXh0PjxsaW5lIHgxPSIxOCIgeTE9Ijk2IiB4Mj0iNDAiIHkyPSI5NiIgY2xhc3M9InMiLz4KPGxpbmUgeDE9IjI5MCIgeTE9IjEwMCIgeDI9IjMzMCIgeTI9IjEwMCIgY2xhc3M9InMiLz48bGluZSB4MT0iMjkwIiB5MT0iMTAwIiB4Mj0iMzMwIiB5Mj0iMTAwIiBjbGFzcz0icyIvPjxwYXRoIGQ9Ik0zMzAgMTAwIGwtNyAtMy41IHY3IHoiIGZpbGw9IiM1OGNjMDIiLz4KPHJlY3QgeD0iMzMwIiB5PSI3MCIgd2lkdGg9IjExMCIgaGVpZ2h0PSI2MCIgcng9IjYiIGNsYXNzPSJib3giLz48dGV4dCB4PSIzODUiIHk9IjEwNCIgY2xhc3M9InQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlNBUiDlr4TlrZjlmag8L3RleHQ+CjxsaW5lIHgxPSI0NDAiIHkxPSIxMDAiIHgyPSI1MDAiIHkyPSIxMDAiIGNsYXNzPSJzIi8+PHRleHQgeD0iNTA4IiB5PSIxMDQiIGNsYXNzPSJ0Ij7mlbDlrZfovpPlh7o8L3RleHQ+CjxyZWN0IHg9IjMzMCIgeT0iMTcwIiB3aWR0aD0iMTEwIiBoZWlnaHQ9IjU1IiByeD0iNiIgY2xhc3M9ImJveCIvPjx0ZXh0IHg9IjM4NSIgeT0iMTk4IiBjbGFzcz0idCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RC9BIOi9rOaNouWZqDwvdGV4dD4KPGxpbmUgeDE9IjM4NSIgeTE9IjE3MCIgeDI9IjM4NSIgeTI9IjEzMCIgY2xhc3M9InMiLz4KPGxpbmUgeDE9IjI0MCIgeTE9IjEzMCIgeDI9IjI0MCIgeTI9IjE5OCIgY2xhc3M9ImciLz48bGluZSB4MT0iMjQwIiB5MT0iMTk4IiB4Mj0iMzMwIiB5Mj0iMTk4IiBjbGFzcz0icyIvPgo8cmVjdCB4PSIxOTAiIHk9IjE3MCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSI1NSIgcng9IjYiIGNsYXNzPSJib3giLz48dGV4dCB4PSIyNDAiIHk9IjE5OCIgY2xhc3M9InQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPuaOp+WItumAu+i+kTwvdGV4dD4KPGxpbmUgeDE9IjMzMCIgeTE9IjE5OCIgeDI9IjMzMCIgeTI9IjEzMCIgY2xhc3M9InMiLz48cGF0aCBkPSJNMzMwIDEzMCBsLTcgLTMuNSB2NyB6IiBmaWxsPSIjNThjYzAyIi8+Cjx0ZXh0IHg9IjE5MCIgeT0iMjQ4IiBjbGFzcz0ibSI+5LuO5pyA6auY5L2N6LW36YCQ5L2N6K+V5o6i77yMbiDkvY3pnIAgbiDkuKroioLmi408L3RleHQ+Cjx0ZXh0IHg9IjQ0MCIgeT0iMjQ4IiBjbGFzcz0ibSI+6YCf5bqm5LiO5L2N5pWw5oqY5LitPC90ZXh0Pgo8L3N2Zz4K\" alt=\"逐次逼近型模数转换器的组成\" loading=\"lazy\"><figcaption>逐次逼近型模数转换器的组成</figcaption></figure>"
						},
						{
							"number": "7.2.4",
							"heading": "ADC的性能参数",
							"anchor": "sec-7.2.4",
							"html": "<ul><li>分辨率指能分辨的最小输入变化，通常用位数或一个最低有效位对应的模拟量表示。</li><li>转换时间是从发出启动信号到输出稳定数字量所需的时间，转换速率是其倒数，两者含义不同，不能混为一谈。</li><li>精度描述实际转换特性与理想特性的偏差，包括偏移误差、增益误差和非线性误差等。</li><li>量化误差由有限位数引起，理想 ADC 的量化误差在正负半个最低有效位以内。</li><li>输入范围、基准电压的稳定度和温度漂移都会影响实际精度，选型时要与其他指标一并考虑。</li></ul>\n<p class=\"pitfall\">易错：采样频率不够造成的混叠无法靠提高位数弥补，必须在采样前限制信号带宽。</p>\n<figure id=\"fig-sec-7.2.4-1\" data-fig=\"fig-sec-7.2.4-1\" data-sec=\"sec-7.2.4\" data-caption=\"量化把连续输入折成阶梯，量化误差不超过 q 的一半\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMzIwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IumHj+WMluaKiui/nue7rei+k+WFpeaKmOaIkOmYtuair++8jOmHj+WMluWNleS9jSBx77yM5pyA5aSn6K+v5beu5Li6IHEg55qE5LiA5Y2KIj4KPHN0eWxlPgouc3tmaWxsOm5vbmU7c3Ryb2tlOiMzYTQyNTA7c3Ryb2tlLXdpZHRoOjEuNH0KLmR7ZmlsbDpub25lO3N0cm9rZTojNThjYzAyO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1kYXNoYXJyYXk6NiA1fQoudHtmaWxsOiNlNmU4ZWU7Zm9udC1mYW1pbHk6IlNlZ29lIFVJIiwiTWljcm9zb2Z0IFlhSGVpIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxM3B4fQouYntmaWxsOiNlNmU4ZWU7Zm9udC1mYW1pbHk6IlNlZ29lIFVJIiwiTWljcm9zb2Z0IFlhSGVpIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjYwMH0KLm17ZmlsbDojOWFhMmIxO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTIuNXB4fQo8L3N0eWxlPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMTQxODIxIi8+Cjx0ZXh0IHg9IjI0IiB5PSIyOCIgY2xhc3M9ImIiPumHj+WMlueJueaApzwvdGV4dD4KPGxpbmUgeDE9IjcwIiB5MT0iNjAiIHgyPSI3MCIgeTI9IjI4MCIgY2xhc3M9InMiLz4KPGxpbmUgeDE9IjcwIiB5MT0iMjgwIiB4Mj0iNTgwIiB5Mj0iMjgwIiBjbGFzcz0icyIvPgo8cGF0aCBkPSJNOTAgMjUwIEgxNTAgVjIyMCBIMjEwIFYxOTAgSDI3MCBWMTYwIEgzMzAgVjEzMCBIMzkwIFYxMDAgSDQ1MCBWNzAgSDUxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNThjYzAyIiBzdHJva2Utd2lkdGg9IjIuMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8bGluZSB4MT0iOTAiIHkxPSIyNTAiIHgyPSI1MTAiIHkyPSI3MCIgY2xhc3M9ImQiLz4KPGxpbmUgeDE9IjcwIiB5MT0iMTAwIiB4Mj0iODQiIHkyPSIxMDAiIGNsYXNzPSJzIi8+Cjx0ZXh0IHg9IjM0IiB5PSIxMDQiIGNsYXNzPSJtIj5xPC90ZXh0Pgo8dGV4dCB4PSI1ODQiIHk9IjI4NCIgY2xhc3M9Im0iPnU8L3RleHQ+Cjx0ZXh0IHg9IjU2IiB5PSI2NCIgY2xhc3M9Im0iIHRleHQtYW5jaG9yPSJlbmQiPui+k+WHujwvdGV4dD4KPHRleHQgeD0iOTAiIHk9IjMwNiIgY2xhc3M9Im0iPuWQjOS4gOeggeWvueW6lOS4gOautei+k+WFpeiMg+WbtO+8jOS6pOeVjOWkhOWPluaVtDwvdGV4dD4KPHRleHQgeD0iNDAwIiB5PSIzMDYiIGNsYXNzPSJtIj7ph4/ljJbor6/lt64g4omkIHEgLyAyPC90ZXh0Pgo8L3N2Zz4K\" alt=\"量化把连续输入折成阶梯，量化误差不超过 q 的一半\" loading=\"lazy\"><figcaption>量化把连续输入折成阶梯，量化误差不超过 q 的一半</figcaption></figure>"
						},
						{
							"number": "7.2.5",
							"heading": "双积分型 ADC",
							"anchor": "sec-7.2.5",
							"html": "<ul><li>第一次积分把输入电压接到积分器，固定时间 T1，积分器输出与输入电压的平均值成正比。</li><li>第二次积分把基准电压反向接入，积分器输出回到零，所用时间 T2 与输入电压成正比。</li><li>用同一时钟计数 T2，计数值就是转换结果，转换关系只取决于基准电压和时钟，不依赖电阻网络的精度。</li><li>积分过程对工频干扰有平均作用，叠加在输入上的周期噪声会被抵消，抗干扰能力较强。</li><li>两次积分耗时较长，转换速度慢，适合数字电压表一类对速度要求不高、对精度要求高的场合。</li></ul>\n<p class=\"pitfall\">易错：双积分型 ADC 的转换结果与积分时间常数无关，前提是两次积分使用同一积分器和同一时钟，更换元件后要重新校准。</p>"
						}
					],
					"number": "7.2",
					"anchor": "sec-7.2",
					"html": ""
				},
				{
					"heading": "D/A转换",
					"lines": [],
					"subs": [
						{
							"number": "7.3.1",
							"heading": "权电阻DAC",
							"anchor": "sec-7.3.1",
							"html": "<ul><li>权电阻 DAC 由基准电压、权电阻网络、模拟开关和求和放大器组成，各支路的电阻按二进制权值取值。</li><li>每一位对应一个开关，该位为 1 时把支路接到基准电压，为 0 时接地，支路电流与这一位的权值成正比。</li><li>各支路电流在求和放大器的虚地点相加，输出电压与输入数字量成正比，从而实现数字量到模拟量的转换。</li><li>权电阻的阻值随位数按 2 的幂变化，位数较多时最大与最小电阻相差悬殊，给集成电路的制造带来困难。</li><li>这种结构简单、速度较快，但电阻精度直接决定转换精度，适用于位数不多的场合。</li></ul>"
						},
						{
							"number": "7.3.2",
							"heading": "R-2R T型DAC",
							"anchor": "sec-7.3.2",
							"html": "<ul><li>R-2R 梯形网络只用 R 和 2R 两种阻值，通过 T 型连接使各节点向右看的等效电阻恒为 R，克服了权电阻阻值范围过大的问题。</li><li>每一位的模拟开关把对应的 2R 支路接到基准电压或地，节点电流按二进制权值分流，各路电流之和经放大器输出。</li><li>由于只用两种电阻，阻值的匹配容易在集成电路中实现，便于制作位数较多的 DAC。</li><li>输出电压与输入数字量成正比，改变基准电压的极性即可得到双极性输出。</li><li>转换精度取决于电阻的匹配程度和模拟开关的导通电阻，开关上的压降会引入误差。</li></ul>\n<figure id=\"fig-sec-7.3.2-1\" data-fig=\"fig-sec-7.3.2-1\" data-sec=\"sec-7.3.2\" data-caption=\"R-2R 梯形网络数模转换器\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3MjAgMjcwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IlItMlIg5qKv5b2i572R57uc5pWw5qih6L2s5o2i5ZmoIj4KPHN0eWxlPgouc3tmaWxsOm5vbmU7c3Ryb2tlOiM1OGNjMDI7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kfQoudHtmaWxsOiNlNmU4ZWU7Zm9udC1mYW1pbHk6IlNlZ29lIFVJIiwiTWljcm9zb2Z0IFlhSGVpIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNHB4fQouYntmaWxsOiNlNmU4ZWU7Zm9udC1mYW1pbHk6IlNlZ29lIFVJIiwiTWljcm9zb2Z0IFlhSGVpIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjYwMH0KLm17ZmlsbDojOWFhMmIxO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTIuNXB4fQouZ3tmaWxsOm5vbmU7c3Ryb2tlOiMzYTQyNTA7c3Ryb2tlLXdpZHRoOjEuMn0KLmJveHtmaWxsOiMxYjIwMjk7c3Ryb2tlOiMzYTQyNTA7c3Ryb2tlLXdpZHRoOjEuNX0KPC9zdHlsZT4KPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzE0MTgyMSIvPgo8dGV4dCB4PSIyNCIgeT0iMjgiIGNsYXNzPSJiIj5SLTJSIOair+W9oiBEQUM8L3RleHQ+Cjx0ZXh0IHg9IjQwIiB5PSI4NiIgY2xhc3M9InQiPmIzPC90ZXh0Pjx0ZXh0IHg9IjQwIiB5PSIxMjYiIGNsYXNzPSJ0Ij5iMjwvdGV4dD48dGV4dCB4PSI0MCIgeT0iMTY2IiBjbGFzcz0idCI+YjE8L3RleHQ+PHRleHQgeD0iNDAiIHk9IjIwNiIgY2xhc3M9InQiPmIwPC90ZXh0Pgo8bGluZSB4MT0iNjAiIHkxPSI4MiIgeDI9IjExMCIgeTI9IjgyIiBjbGFzcz0icyIvPjxsaW5lIHgxPSI2MCIgeTE9IjEyMiIgeDI9IjExMCIgeTI9IjEyMiIgY2xhc3M9InMiLz48bGluZSB4MT0iNjAiIHkxPSIxNjIiIHgyPSIxMTAiIHkyPSIxNjIiIGNsYXNzPSJzIi8+PGxpbmUgeDE9IjYwIiB5MT0iMjAyIiB4Mj0iMTEwIiB5Mj0iMjAyIiBjbGFzcz0icyIvPgo8cmVjdCB4PSIxMTAiIHk9IjYwIiB3aWR0aD0iMTIwIiBoZWlnaHQ9IjE2MCIgcng9IjYiIGNsYXNzPSJib3giLz48dGV4dCB4PSIxNzAiIHk9IjEzMCIgY2xhc3M9InQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlItMlI8L3RleHQ+PHRleHQgeD0iMTcwIiB5PSIxNTIiIGNsYXNzPSJtIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7nvZHnu5w8L3RleHQ+Cjx0ZXh0IHg9IjgwIiB5PSI3MCIgY2xhc3M9Im0iPuW8gOWFszwvdGV4dD48dGV4dCB4PSI4MCIgeT0iMTEwIiBjbGFzcz0ibSI+5byA5YWzPC90ZXh0Pjx0ZXh0IHg9IjgwIiB5PSIxNTAiIGNsYXNzPSJtIj7lvIDlhbM8L3RleHQ+PHRleHQgeD0iODAiIHk9IjE5MCIgY2xhc3M9Im0iPuW8gOWFszwvdGV4dD4KPGxpbmUgeDE9IjIzMCIgeTE9IjE0MCIgeDI9IjMwMCIgeTI9IjE0MCIgY2xhc3M9InMiLz48cGF0aCBkPSJNMzAwIDEwMCBsNjAgNDAgbC02MCA0MCB6IiBjbGFzcz0iYm94Ii8+Cjx0ZXh0IHg9IjMxNiIgeT0iMTMyIiBjbGFzcz0idCI+4oiSPC90ZXh0Pjx0ZXh0IHg9IjMxNiIgeT0iMTYwIiBjbGFzcz0idCI+KzwvdGV4dD4KPGxpbmUgeDE9IjM2MCIgeTE9IjE0MCIgeDI9IjQwMCIgeTI9IjE0MCIgY2xhc3M9InMiLz48dGV4dCB4PSI0MDgiIHk9IjE0NCIgY2xhc3M9InQiPlZvPC90ZXh0Pgo8dGV4dCB4PSIzMDAiIHk9IjIxNiIgY2xhc3M9Im0iPlZvIOS4jui+k+WFpeaVsOWtl+mHj+aIkOato+avlDwvdGV4dD4KPGxpbmUgeDE9IjQ3MCIgeTE9IjYwIiB4Mj0iNDcwIiB5Mj0iMjIwIiBjbGFzcz0iZyIvPgo8dGV4dCB4PSI0OTgiIHk9Ijc0IiBjbGFzcz0iYiI+54m554K5PC90ZXh0Pgo8dGV4dCB4PSI0OTgiIHk9IjEwNCIgY2xhc3M9Im0iPuWPqueUqCBSIOWSjCAyUiDkuKTnp43pmLvlgLw8L3RleHQ+Cjx0ZXh0IHg9IjQ5OCIgeT0iMTMyIiBjbGFzcz0ibSI+6Zi75YC85Yy56YWN5a655piT77yM5L6/5LqO6ZuG5oiQPC90ZXh0Pgo8dGV4dCB4PSI0OTgiIHk9IjE2MCIgY2xhc3M9Im0iPuS9jeaVsOi2iuWkmui+k+WHuuWPsOmYtui2iue7hjwvdGV4dD4KPHRleHQgeD0iNDk4IiB5PSIxOTYiIGNsYXNzPSJtIj7lvIDlhbPljovpmY3kuI7nlLXpmLvlpLHphY3luKbmnaXor6/lt648L3RleHQ+Cjwvc3ZnPgo=\" alt=\"R-2R 梯形网络数模转换器\" loading=\"lazy\"><figcaption>R-2R 梯形网络数模转换器</figcaption></figure>"
						},
						{
							"number": "7.3.3",
							"heading": "DAC的性能参数",
							"anchor": "sec-7.3.3",
							"html": "<ul><li>分辨率指输入数字量的位数，也可用最低有效位对应的输出变化量表示，位数越多输出台阶越细。</li><li>转换时间指输入数字量变化后输出达到规定误差范围所需的时间，主要由开关和放大器的响应速度决定。</li><li>精度包括偏移误差、增益误差和非线性误差，偏移与增益误差可以通过外部调整减小。</li><li>单调性要求输入数字量增加时输出不减小，在进位处出现输出回落即属非单调，会造成闭环系统不稳定。</li><li>温度系数、基准电压的稳定度和负载变化都会影响实际使用效果，选型时要结合系统的精度与速度要求考虑。</li></ul>\n<p class=\"pitfall\">易错：分辨率高不等于精度高，位数只决定台阶的粗细，电阻失配和基准漂移同样带来误差。</p>"
						},
						{
							"number": "7.3.4",
							"heading": "DAC 的最低有效位与满量程",
							"anchor": "sec-7.3.4",
							"html": "<ul><li>n 位 DAC 有 2 的 n 次方个输入码，相邻码对应的输出差称为最低有效位，记为 1 LSB。</li><li>基准电压为 Vref 时，1 LSB 等于 Vref 除以 2 的 n 次方，位数每增加一位，台阶减半。</li><li>满量程输出为 2 的 n 次方减 1 个 LSB，比基准电压少一个台阶，最后一级达不到 Vref。</li><li>分辨率可用位数或 LSB 表示，精度则是实际输出与理想直线的最大偏差，两者不能互相替代。</li><li>建立时间、压摆率和负载能力决定输出能跟随多快的码字变化，选型时要与更新速率一起考虑。</li></ul>\n<p class=\"pitfall\">易错：把满量程当成 2 的 n 次方个 LSB 会算高一个台阶；最大输出码对应的电压是 2 的 n 次方减 1 个 LSB。</p>"
						}
					],
					"number": "7.3",
					"anchor": "sec-7.3",
					"html": ""
				}
			]
		},
		{
			"id": "c8",
			"label": "附录",
			"title": "附录 Verilog HDL",
			"modules": [
				"M8"
			],
			"sections": [
				{
					"heading": "A.1 模块与端口",
					"lines": [
						"- 模块用 module 与 endmodule 成对括起来，端口表里写方向、位宽和名字。",
						"- 端口方向分 input、output、inout，位宽不写时按 1 位处理。",
						"- 例化模块时按名字连接比按位置连接可靠，改端口顺序不会接错。",
						"- 一个设计可以拆成多个模块，顶层只负责连线。",
						"",
						"![一个 Verilog 模块的结构](figures/verilog-module.svg)",
						"",
						"易错：output 在模块内部要声明为 wire 或 reg，漏写会在综合时报错。",
						""
					],
					"subs": [],
					"number": "",
					"anchor": "sec-c8-0",
					"html": "<ul><li>模块用 module 与 endmodule 成对括起来，端口表里写方向、位宽和名字。</li><li>端口方向分 input、output、inout，位宽不写时按 1 位处理。</li><li>例化模块时按名字连接比按位置连接可靠，改端口顺序不会接错。</li><li>一个设计可以拆成多个模块，顶层只负责连线。</li></ul>\n<figure id=\"fig-sec-c8-0-1\" data-fig=\"fig-sec-c8-0-1\" data-sec=\"sec-c8-0\" data-caption=\"一个 Verilog 模块的结构\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMzAwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IuS4gOS4qiBWZXJpbG9nIOaooeWdl+eahOe7k+aehCI+CjxzdHlsZT4KLnN7ZmlsbDpub25lO3N0cm9rZTojNThjYzAyO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZH0KLnR7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweH0KLmJ7ZmlsbDojZTZlOGVlO2ZvbnQtZmFtaWx5OiJTZWdvZSBVSSIsIk1pY3Jvc29mdCBZYUhlaSIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo2MDB9Ci5te2ZpbGw6IzlhYTJiMTtmb250LWZhbWlseToiU2Vnb2UgVUkiLCJNaWNyb3NvZnQgWWFIZWkiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEyLjVweH0KLmd7ZmlsbDpub25lO3N0cm9rZTojM2E0MjUwO3N0cm9rZS13aWR0aDoxLjJ9Ci5ke2ZpbGw6bm9uZTtzdHJva2U6IzNhNDI1MDtzdHJva2Utd2lkdGg6MS4yO3N0cm9rZS1kYXNoYXJyYXk6NSA1fQouYm94e2ZpbGw6IzFiMjAyOTtzdHJva2U6IzNhNDI1MDtzdHJva2Utd2lkdGg6MS41fQouY29kZXtmaWxsOiNlNmU4ZWU7Zm9udC1mYW1pbHk6IkNvbnNvbGFzIiwiQ291cmllciBOZXciLG1vbm9zcGFjZTtmb250LXNpemU6MTNweH0KPC9zdHlsZT4KPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzE0MTgyMSIvPgo8dGV4dCB4PSIyNCIgeT0iMjgiIGNsYXNzPSJiIj5WZXJpbG9nIOaooeWdl+eahOmqqOaetjwvdGV4dD4KPHJlY3QgeD0iMjQiIHk9IjQ0IiB3aWR0aD0iNTkyIiBoZWlnaHQ9IjEyMCIgcng9IjgiIGZpbGw9IiMxYjIwMjkiIHN0cm9rZT0iIzNhNDI1MCIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPHRleHQgeD0iNDQiIHk9Ijc2IiBjbGFzcz0iY29kZSI+bW9kdWxlIGFuZDIgKGlucHV0IGEsIGlucHV0IGIsIG91dHB1dCB5KTs8L3RleHQ+Cjx0ZXh0IHg9IjQ0IiB5PSIxMDAiIGNsYXNzPSJjb2RlIj4gICAgYXNzaWduIHkgPSBhICZhbXA7IGI7PC90ZXh0Pgo8dGV4dCB4PSI0NCIgeT0iMTI0IiBjbGFzcz0iY29kZSI+ZW5kbW9kdWxlPC90ZXh0Pgo8cmVjdCB4PSIzMiIgeT0iMTk2IiB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHJ4PSIyIiBmaWxsPSIjNThjYzAyIi8+CjxyZWN0IHg9IjMyIiB5PSIyMjgiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgcng9IjIiIGZpbGw9IiM1OGNjMDIiLz4KPHJlY3QgeD0iMzIiIHk9IjI2MCIgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIiByeD0iMiIgZmlsbD0iIzU4Y2MwMiIvPgo8dGV4dCB4PSI1NiIgeT0iMjA4IiBjbGFzcz0idCI+bW9kdWxlIOS4jiBlbmRtb2R1bGUg5YiS5a6a5qih5Z2X6L6555WMPC90ZXh0Pgo8dGV4dCB4PSI1NiIgeT0iMjQwIiBjbGFzcz0idCI+56uv5Y+j6KGo5YaZ5pa55ZCR44CB5L2N5a695ZKM5ZCN5a2XPC90ZXh0Pgo8dGV4dCB4PSI1NiIgeT0iMjcyIiBjbGFzcz0idCI+YXNzaWduIOaYr+i/nue7rei1i+WAvO+8jOi+k+WFpeS4gOWPmOWwseabtOaWsDwvdGV4dD4KPC9zdmc+Cg==\" alt=\"一个 Verilog 模块的结构\" loading=\"lazy\"><figcaption>一个 Verilog 模块的结构</figcaption></figure>\n<p class=\"pitfall\">易错：output 在模块内部要声明为 wire 或 reg，漏写会在综合时报错。</p>"
				},
				{
					"heading": "A.2 组合逻辑建模",
					"lines": [
						"- assign 是连续赋值，右边任何输入变化都会立刻反映到左边。",
						"- always @(*) 或 always @(a, b) 里用阻塞赋值 =，敏感表要把用到的输入写全。",
						"- if 要有 else，case 要有 default，否则会综合出多余的锁存器。",
						"- 条件运算符 ? : 可以直接描述二选一，适合写多路选择。",
						"易错：always @(*) 里漏写分支，综合工具会补一个锁存器来保持旧值。",
						""
					],
					"subs": [],
					"number": "",
					"anchor": "sec-c8-1",
					"html": "<ul><li>assign 是连续赋值，右边任何输入变化都会立刻反映到左边。</li><li>always @(*) 或 always @(a, b) 里用阻塞赋值 =，敏感表要把用到的输入写全。</li><li>if 要有 else，case 要有 default，否则会综合出多余的锁存器。</li><li>条件运算符 ? : 可以直接描述二选一，适合写多路选择。</li></ul>\n<p class=\"pitfall\">易错：always @(*) 里漏写分支，综合工具会补一个锁存器来保持旧值。</p>"
				},
				{
					"heading": "A.3 时序逻辑建模",
					"lines": [
						"- always @(posedge clk) 描述上升沿触发的寄存器，下降沿写 negedge。",
						"- 时序块里用非阻塞赋值 <=，让所有寄存器在同一时刻统一更新。",
						"- 异步复位要写进敏感表，例如 always @(posedge clk or posedge rst)。",
						"- 同一个 always 块里不要混用阻塞与非阻塞赋值。",
						"- 计数器、移位寄存器、状态机都可以按这个模板写，状态用 parameter 定义。",
						"易错：时序块里用阻塞赋值，仿真结果依赖语句顺序，和综合后的电路对不上。",
						""
					],
					"subs": [],
					"number": "",
					"anchor": "sec-c8-2",
					"html": "<ul><li>always @(posedge clk) 描述上升沿触发的寄存器，下降沿写 negedge。</li><li>时序块里用非阻塞赋值 &lt;=，让所有寄存器在同一时刻统一更新。</li><li>异步复位要写进敏感表，例如 always @(posedge clk or posedge rst)。</li><li>同一个 always 块里不要混用阻塞与非阻塞赋值。</li><li>计数器、移位寄存器、状态机都可以按这个模板写，状态用 parameter 定义。</li></ul>\n<p class=\"pitfall\">易错：时序块里用阻塞赋值，仿真结果依赖语句顺序，和综合后的电路对不上。</p>"
				},
				{
					"heading": "A.4 仿真与验证",
					"lines": [
						"- 测试平台单独写一个无端口的模块，负责产生时钟和激励。",
						"- $display 打印中间值，$monitor 在信号变化时自动输出。",
						"- 仿真时间用 `timescale 指定单位和精度，例如 1ns/1ps。",
						"- 断言式检查把自己期望的值写成条件，不满足就报错退出。",
						"易错：测试平台里忘了给时钟，时序电路永远不动，波形看起来像全 0。",
						""
					],
					"subs": [],
					"number": "",
					"anchor": "sec-c8-3",
					"html": "<ul><li>测试平台单独写一个无端口的模块，负责产生时钟和激励。</li><li>$display 打印中间值，$monitor 在信号变化时自动输出。</li><li>仿真时间用 `timescale 指定单位和精度，例如 1ns/1ps。</li><li>断言式检查把自己期望的值写成条件，不满足就报错退出。</li></ul>\n<p class=\"pitfall\">易错：测试平台里忘了给时钟，时序电路永远不动，波形看起来像全 0。</p>"
				},
				{
					"heading": "A.5 数据类型与变量",
					"lines": [
						"- 线网类型表示元件之间的物理连线，本身不保存值，没有驱动时为高阻 z，wire 是最常用的一种。",
						"- 寄存器类型在过程块中被赋值，保持最后一次赋的值，未赋值时为不定值 x，reg 是最常用的一种。",
						"- 端口方向的类型规则不同：input 在模块内部按线网处理，output 可为线网或寄存器，inout 只能接各类线网。",
						"- 存储器用 reg 型数组描述，例如 reg [7:0] mem [0:255]，表示 256 个 8 位单元，不能整体赋值。",
						"- 位宽省略时按 1 位处理，向量要统一采用 [n-1:0] 或 [n:1] 的位序，混用会使位选错位。",
						"",
						"易错：reg 只说明它在过程块中被赋值，综合后既可能是触发器，也可能是组合逻辑，不能见到 reg 就认为一定是寄存器。",
						""
					],
					"subs": [],
					"number": "",
					"anchor": "sec-c8-4",
					"html": "<ul><li>线网类型表示元件之间的物理连线，本身不保存值，没有驱动时为高阻 z，wire 是最常用的一种。</li><li>寄存器类型在过程块中被赋值，保持最后一次赋的值，未赋值时为不定值 x，reg 是最常用的一种。</li><li>端口方向的类型规则不同：input 在模块内部按线网处理，output 可为线网或寄存器，inout 只能接各类线网。</li><li>存储器用 reg 型数组描述，例如 reg [7:0] mem [0:255]，表示 256 个 8 位单元，不能整体赋值。</li><li>位宽省略时按 1 位处理，向量要统一采用 [n-1:0] 或 [n:1] 的位序，混用会使位选错位。</li></ul>\n<p class=\"pitfall\">易错：reg 只说明它在过程块中被赋值，综合后既可能是触发器，也可能是组合逻辑，不能见到 reg 就认为一定是寄存器。</p>"
				},
				{
					"heading": "A.6 常量与参数",
					"lines": [
						"- 整数常量的完整写法是\"位宽、进制、数字\"三段，例如 8'hFF、4'b1010，位宽可以省略。",
						"- x 表示不定值，z 表示高阻值，在 casez 等语句中可用问号代替 z 作为通配位。",
						"- 负数写成 -8'd5，减号放在位宽之前；为便于阅读可在数字中加下划线，但不能加在进制与数字之间。",
						"- parameter 定义符号常量，模块例化时可用 #(值) 按位置覆盖，或用 defparam 按名字覆盖。",
						"- 位宽不一致时赋值会自动扩展或截断，有符号数要显式声明 signed，否则按无符号处理。",
						"",
						"易错：8'b1 与 8'd1 数值相同，但 8'b1x 只有最低两位有确定含义，其余高位按最高位的 x 扩展，容易得到意外的全 x。",
						""
					],
					"subs": [],
					"number": "",
					"anchor": "sec-c8-5",
					"html": "<ul><li>整数常量的完整写法是\"位宽、进制、数字\"三段，例如 8'hFF、4'b1010，位宽可以省略。</li><li>x 表示不定值，z 表示高阻值，在 casez 等语句中可用问号代替 z 作为通配位。</li><li>负数写成 -8'd5，减号放在位宽之前；为便于阅读可在数字中加下划线，但不能加在进制与数字之间。</li><li>parameter 定义符号常量，模块例化时可用 #(值) 按位置覆盖，或用 defparam 按名字覆盖。</li><li>位宽不一致时赋值会自动扩展或截断，有符号数要显式声明 signed，否则按无符号处理。</li></ul>\n<p class=\"pitfall\">易错：8'b1 与 8'd1 数值相同，但 8'b1x 只有最低两位有确定含义，其余高位按最高位的 x 扩展，容易得到意外的全 x。</p>"
				},
				{
					"heading": "A.7 运算符与表达式",
					"lines": [
						"- 算术运算符包括加、减、乘、除和求模，整数除法截去小数，求模结果的符号取左操作数。",
						"- 逻辑运算符与、或、非把操作数当作布尔量，结果只有 1 位；位运算符按位逐位运算，结果与操作数等宽。",
						"- 缩减运算符把向量的各位递推成一个 1 位结果，例如 &a 表示 a 的各位相与。",
						"- 关系与等式运算结果为 1 位，等于运算符遇到 x 或 z 时结果也为 x，全等运算符逐位比较后只给 0 或 1。",
						"- 移位运算空出的位补 0，左移可能使结果加宽；拼接用花括号，重复写法为 {n{信号}}，条件运算为三目运算。",
						"",
						"易错：逻辑与 && 与按位与 & 不是一回事，前者把整个操作数当布尔量，后者逐位运算，混用会得到完全不同的结果。",
						""
					],
					"subs": [],
					"number": "",
					"anchor": "sec-c8-6",
					"html": "<ul><li>算术运算符包括加、减、乘、除和求模，整数除法截去小数，求模结果的符号取左操作数。</li><li>逻辑运算符与、或、非把操作数当作布尔量，结果只有 1 位；位运算符按位逐位运算，结果与操作数等宽。</li><li>缩减运算符把向量的各位递推成一个 1 位结果，例如 &amp;a 表示 a 的各位相与。</li><li>关系与等式运算结果为 1 位，等于运算符遇到 x 或 z 时结果也为 x，全等运算符逐位比较后只给 0 或 1。</li><li>移位运算空出的位补 0，左移可能使结果加宽；拼接用花括号，重复写法为 {n{信号}}，条件运算为三目运算。</li></ul>\n<p class=\"pitfall\">易错：逻辑与 &amp;&amp; 与按位与 &amp; 不是一回事，前者把整个操作数当布尔量，后者逐位运算，混用会得到完全不同的结果。</p>"
				},
				{
					"heading": "A.8 赋值语句与块语句",
					"lines": [
						"- 连续赋值用 assign 驱动线网，右边任何一个输入变化都会立即反映到左边，适合描述组合逻辑。",
						"- 过程赋值写在 always 或 initial 块中，只能给寄存器类型赋值。",
						"- 阻塞赋值在语句执行时立即完成，后面的语句能立刻看到新值；非阻塞赋值要等块结束时统一更新。",
						"- 时序逻辑用非阻塞赋值，组合逻辑用阻塞赋值，同一个 always 块内不要混用两种赋值。",
						"- begin_end 是顺序块，块内语句按书写次序执行；fork_join 是并行块，主要用于仿真激励。",
						"",
						"易错：在时钟块中用阻塞赋值串联两个寄存器，第二个寄存器会采到第一个的新值，综合出的电路与预期少了一级。",
						""
					],
					"subs": [],
					"number": "",
					"anchor": "sec-c8-7",
					"html": "<ul><li>连续赋值用 assign 驱动线网，右边任何一个输入变化都会立即反映到左边，适合描述组合逻辑。</li><li>过程赋值写在 always 或 initial 块中，只能给寄存器类型赋值。</li><li>阻塞赋值在语句执行时立即完成，后面的语句能立刻看到新值；非阻塞赋值要等块结束时统一更新。</li><li>时序逻辑用非阻塞赋值，组合逻辑用阻塞赋值，同一个 always 块内不要混用两种赋值。</li><li>begin_end 是顺序块，块内语句按书写次序执行；fork_join 是并行块，主要用于仿真激励。</li></ul>\n<p class=\"pitfall\">易错：在时钟块中用阻塞赋值串联两个寄存器，第二个寄存器会采到第一个的新值，综合出的电路与预期少了一级。</p>"
				},
				{
					"heading": "A.9 条件语句与循环语句",
					"lines": [
						"- if-else 按条件选择分支，else 与最近的 if 配对，嵌套时用 begin_end 明确层次。",
						"- case 按表达式的取值选择分支，casez 忽略取值为 z 的位，casex 同时忽略 x 和 z 的位。",
						"- 组合逻辑中 if 要写全 else、case 要写 default，否则未覆盖的输入会使综合工具生成锁存器。",
						"- for 循环在综合时展开成并行硬件，循环次数必须是常数；repeat、while、forever 多用于仿真。",
						"- 循环变量一般用 integer 声明，循环体内不要依赖上一次迭代留下的中间值。",
						"",
						"易错：把三个条件写成并列的 if 而不是 if-else if 链，多个条件同时成立时会依次执行多条赋值，最后一句覆盖前面的结果。",
						""
					],
					"subs": [],
					"number": "",
					"anchor": "sec-c8-8",
					"html": "<ul><li>if-else 按条件选择分支，else 与最近的 if 配对，嵌套时用 begin_end 明确层次。</li><li>case 按表达式的取值选择分支，casez 忽略取值为 z 的位，casex 同时忽略 x 和 z 的位。</li><li>组合逻辑中 if 要写全 else、case 要写 default，否则未覆盖的输入会使综合工具生成锁存器。</li><li>for 循环在综合时展开成并行硬件，循环次数必须是常数；repeat、while、forever 多用于仿真。</li><li>循环变量一般用 integer 声明，循环体内不要依赖上一次迭代留下的中间值。</li></ul>\n<p class=\"pitfall\">易错：把三个条件写成并列的 if 而不是 if-else if 链，多个条件同时成立时会依次执行多条赋值，最后一句覆盖前面的结果。</p>"
				},
				{
					"heading": "A.10 门级与结构建模",
					"lines": [
						"- Verilog 内置与、或、非、与非、或非、异或、同或等门级原语，可直接例化描述门级电路。",
						"- 门级原语的端口顺序是输出在前、输入在后，多输出原语先列全部输出再列输入。",
						"- 三态门用 bufif1、bufif0、notif1、notif0 描述，使能端决定输出数据还是高阻。",
						"- 模块例化按名字连接写成 .端口名(信号)，可读性好；按位置连接要求端口顺序完全一致。",
						"- 模块可带参数，例化时覆盖参数就能复用于不同位宽，避免为每种位宽重写一遍。",
						"",
						"易错：按位置例化时端口顺序写错不会报语法错误，但连线整体错位，仿真结果异常而难以定位。",
						""
					],
					"subs": [],
					"number": "",
					"anchor": "sec-c8-9",
					"html": "<ul><li>Verilog 内置与、或、非、与非、或非、异或、同或等门级原语，可直接例化描述门级电路。</li><li>门级原语的端口顺序是输出在前、输入在后，多输出原语先列全部输出再列输入。</li><li>三态门用 bufif1、bufif0、notif1、notif0 描述，使能端决定输出数据还是高阻。</li><li>模块例化按名字连接写成 .端口名(信号)，可读性好；按位置连接要求端口顺序完全一致。</li><li>模块可带参数，例化时覆盖参数就能复用于不同位宽，避免为每种位宽重写一遍。</li></ul>\n<p class=\"pitfall\">易错：按位置例化时端口顺序写错不会报语法错误，但连线整体错位，仿真结果异常而难以定位。</p>"
				},
				{
					"heading": "A.11 有限状态机",
					"lines": [
						"- 状态用 parameter 或 localparam 命名，状态寄存器用 reg 向量保存，复位时装入初始状态。",
						"- 一段式把状态转移和输出写在同一 always 块，代码集中但不利于复用和修改。",
						"- 两段式把状态转移与输出分开，三段式再把组合输出单独写出，后者结构最清晰。",
						"- 状态转移用 case 描述，default 指向复位状态或规定的安全状态，保证电路能自启动。",
						"- 摩尔型输出只由状态决定，米利型输出还取决于输入；输出寄存器化可去毛刺，但会延迟一拍。",
						"",
						"易错：状态编码改变后，case 分支里的状态名要同步更新，直接写二进制码容易在增删状态时漏改。",
						""
					],
					"subs": [],
					"number": "",
					"anchor": "sec-c8-10",
					"html": "<ul><li>状态用 parameter 或 localparam 命名，状态寄存器用 reg 向量保存，复位时装入初始状态。</li><li>一段式把状态转移和输出写在同一 always 块，代码集中但不利于复用和修改。</li><li>两段式把状态转移与输出分开，三段式再把组合输出单独写出，后者结构最清晰。</li><li>状态转移用 case 描述，default 指向复位状态或规定的安全状态，保证电路能自启动。</li><li>摩尔型输出只由状态决定，米利型输出还取决于输入；输出寄存器化可去毛刺，但会延迟一拍。</li></ul>\n<p class=\"pitfall\">易错：状态编码改变后，case 分支里的状态名要同步更新，直接写二进制码容易在增删状态时漏改。</p>"
				},
				{
					"heading": "A.12 编译预处理与仿真语句",
					"lines": [
						"- `timescale 指定仿真时间单位与精度，写在文件开头，单位与精度都用 1、10、100 加 s、ms、us、ns、ps 表示。",
						"- `define 定义宏，`include 引入其他文件，`ifdef、`else、`endif 按条件选择参与编译的代码段。",
						"- $display 在语句执行时打印，$monitor 在信号变化时自动打印，$finish 结束仿真，$time 返回当前仿真时刻。",
						"- 测试平台用 initial 块产生时钟和激励，用 $dumpfile 与 $dumpvars 导出波形供查看。",
						"- 仿真通过只说明逻辑描述在给定激励下正确，还要看综合报告与实现后的时序是否满足要求。",
						"",
						"易错：`timescale 只影响仿真时间，不影响综合出的硬件延迟；把仿真波形上的延时当作电路实际延迟会判断错误。",
						""
					],
					"subs": [],
					"number": "",
					"anchor": "sec-c8-11",
					"html": "<ul><li>`timescale 指定仿真时间单位与精度，写在文件开头，单位与精度都用 1、10、100 加 s、ms、us、ns、ps 表示。</li><li><code>define 定义宏，</code>include 引入其他文件，<code>ifdef、</code>else、`endif 按条件选择参与编译的代码段。</li><li>$display 在语句执行时打印，$monitor 在信号变化时自动打印，$finish 结束仿真，$time 返回当前仿真时刻。</li><li>测试平台用 initial 块产生时钟和激励，用 $dumpfile 与 $dumpvars 导出波形供查看。</li><li>仿真通过只说明逻辑描述在给定激励下正确，还要看综合报告与实现后的时序是否满足要求。</li></ul>\n<p class=\"pitfall\">易错：`timescale 只影响仿真时间，不影响综合出的硬件延迟；把仿真波形上的延时当作电路实际延迟会判断错误。</p>"
				}
			]
		},
		{
			"id": "glossary",
			"label": "术语表",
			"title": "术语表",
			"modules": [],
			"sections": [
				{
					"heading": "全部术语",
					"lines": [
						"",
						"| 术语 | 一句话界定 | 小节 |",
						"| --- | --- | --- |",
						"| 连续量 | 数值随时间连续变化，可取得任意中间值的量 | 1.1.1 |",
						"| 离散量 | 只在离散时刻取有限个确定值的量 | 1.1.1 |",
						"| 开关量 | 只有两种取值状态并用0和1表示的物理量 | 1.1.2 |",
						"| 逻辑电平 | 用规定的高、低电压范围表示逻辑0和1 | 1.1.2 |",
						"| 数字波形 | 用高低电平随时间的跳变表示数字信号的图形 | 1.1.3 |",
						"| 占空比 | 脉冲宽度与重复周期之比，反映高电平占比 | 1.1.3 |",
						"| 上升时间 | 脉冲幅度从10%升到90%所需的时间 | 1.1.4 |",
						"| 下降时间 | 脉冲幅度从90%降到10%所需的时间 | 1.1.4 |",
						"| 脉冲宽度 | 脉冲上升沿与下降沿50%幅度点之间的时间 | 1.1.4 |",
						"| 正脉冲 | 以向上跳变开始、先高后低的脉冲 | 1.1.4 |",
						"| 基数 | 计数制中所用数码符号的个数，如二进制为2 | 1.2.1 |",
						"| 位权 | 某一位数码为1时所代表的实际数值大小 | 1.2.1 |",
						"| 除基取余法 | 整数转换时反复除以目标基数，余数逆序排列 | 1.2.2 |",
						"| 乘基取整法 | 小数转换时反复乘以目标基数，整数部分顺序排列 | 1.2.2 |",
						"| BCD码 | 用四位二进制代码表示一位十进制数的编码 | 1.2.3 |",
						"| 格雷码 | 相邻两组代码只有一位不同的可靠性编码 | 1.2.3 |",
						"| 余三码 | 8421码加0011得到的无权BCD码，具有自补性 | 1.2.4 |",
						"| 2421码 | 四位权值为2、4、2、1的有权BCD码 | 1.2.4 |",
						"| 格雷码编码 | 由二进制相邻两位异或得到格雷码的转换 | 1.2.5 |",
						"| 格雷码解码 | 由高位起逐位异或还原自然二进制码 | 1.2.5 |",
						"| 原码 | 最高位为符号位、其余位为数值的带符号数表示 | 1.2.6 |",
						"| 反码 | 负数符号位不变、数值位逐位取反的表示法 | 1.2.6 |",
						"| 补码 | 负数取反加1、零表示唯一的带符号数表示法 | 1.2.6 |",
						"| 溢出 | 运算结果超出位数所能表示范围的现象 | 1.2.6 |",
						"| 逻辑函数 | 输出逻辑变量与输入逻辑变量之间的对应关系 | 1.3.1 |",
						"| 逻辑变量 | 只取0或1两个值并表示逻辑状态的变量 | 1.3.1 |",
						"| 最小项 | 每个变量以原变量或反变量出现且只出现一次的与项 | 1.3.2 |",
						"| 最大项 | 每个变量以原变量或反变量出现且只出现一次的或项 | 1.3.2 |",
						"| 真值表 | 列出输入变量全部取值组合及对应输出的表格 | 1.3.2 |",
						"| 逻辑表达式 | 用与、或、非运算符连接变量构成的代数式 | 1.3.2 |",
						"| 与运算 | 所有输入均为1时输出才为1的逻辑运算 | 1.3.3 |",
						"| 或运算 | 只要有一个输入为1输出即为1的逻辑运算 | 1.3.3 |",
						"| 非运算 | 输出取值与单一输入取值始终相反的运算 | 1.3.3 |",
						"| 正逻辑 | 规定高电平为1、低电平为0的表示方法 | 1.3.4 |",
						"| 负逻辑 | 规定低电平为1、高电平为0的表示方法 | 1.3.4 |",
						"| 三态门 | 输出除0、1外还能处于高阻状态的门电路 | 1.3.4 |",
						"| 分配律 | 与对或、或对与可以提出公共因子的定律 | 1.4.1 |",
						"| 互补律 | 变量与其反变量相与为0、相或为1的定律 | 1.4.1 |",
						"| 代入规则 | 等式两边同一变量换成同一函数后等式仍成立 | 1.4.2 |",
						"| 反演规则 | 求反函数时运算符、常量互换并把变量取反 | 1.4.2 |",
						"| 对偶规则 | 运算符与常量互换得对偶式，原等式仍成立 | 1.4.2 |",
						"| 并项法 | 利用互补律把两个相邻与项合并成一项的方法 | 1.4.3 |",
						"| 吸收法 | 利用吸收律消去被另一项包含的多余与项 | 1.4.3 |",
						"| 消去法 | 利用冗余因子关系消去与项中多余变量的方法 | 1.4.3 |",
						"| 卡诺图 | 最小项按循环码排列成的方格图，用于化简 | 1.5.1 |",
						"| 相邻最小项 | 只有一个变量取值不同的两个最小项 | 1.5.1 |",
						"| 几何相邻 | 卡诺图中紧邻或首尾、上下对称位置的关系 | 1.5.1 |",
						"| 卡诺圈 | 卡诺图中圈住的2的整数次幂个相邻1格 | 1.5.2 |",
						"| 最小覆盖 | 用数量最少的卡诺圈覆盖全部1格的方案 | 1.5.2 |",
						"| 最简与或式 | 与项个数最少且每项变量最少的与或表达式 | 1.5.2 |",
						"| 五变量卡诺图 | 两个四变量卡诺图叠合、上下同格相邻的卡诺图 | 1.5.3 |",
						"| 双极型集成电路 | 以双极型晶体管为基本元件的集成电路 | 1.6.1 |",
						"| MOS集成电路 | 以MOS场效应管为基本元件的集成电路 | 1.6.1 |",
						"| TTL电路 | 采用晶体管-晶体管逻辑结构的双极型集成门 | 1.6.1 |",
						"| CMOS电路 | 由互补的NMOS管和PMOS管构成的集成电路 | 1.6.1 |",
						"| 扇出系数 | 一个门输出端能驱动的同类门输入端的个数 | 1.6.4 |",
						"| 传输延迟时间 | 输出信号相对输入信号变化滞后的时间 | 1.6.4 |",
						"| 噪声容限 | 不致使输出误判时允许叠加在输入上的最大干扰电压 | 1.6.4 |",
						"| 功耗 | 门电路在额定电源电压下所消耗的功率 | 1.6.4 |",
						"| 74系列 | 民品温度等级的通用数字集成电路系列 | 1.6.5 |",
						"| 54系列 | 与74系列引脚相同、温度范围更宽的军品系列 | 1.6.5 |",
						"| 逐级电平推导法 | 由输入电平出发按门功能逐级推算各点电平 | 2.1.1 |",
						"| 波形图法 | 按时间顺序画出各点波形以确定输出变化 | 2.1.1 |",
						"| 布尔表达式法 | 从输入到输出逐级写出各门输出表达式的方法 | 2.1.2 |",
						"| 中间变量 | 为简化书写而引入的门输出逻辑表达式 | 2.1.2 |",
						"| 真值表分析法 | 列出输入全部组合并算出对应输出以确定功能 | 2.1.4 |",
						"| 功能归纳 | 由真值表总结电路输出与输入的逻辑关系 | 2.1.4 |",
						"| 竞争 | 同一信号经不同路径到达同一门的时间不一致 | 2.1.5 |",
						"| 冒险 | 竞争使输出出现不应有的窄脉冲的现象 | 2.1.5 |",
						"| 静态冒险 | 输出本应保持不变却出现短暂尖峰的现象 | 2.1.5 |",
						"| 相切卡诺圈 | 相邻但切点无其他圈覆盖、可能产生冒险的圈 | 2.1.6 |",
						"| 冗余项 | 为消除冒险而增加的、不改变逻辑值的与项 | 2.1.6 |",
						"| 逻辑抽象 | 把实际问题归结为输入输出间逻辑关系的过程 | 2.2.1 |",
						"| 门级实现 | 按选定门类型把最简表达式画成逻辑电路 | 2.2.1 |",
						"| 逻辑问题描述 | 用文字或表格说明输入条件与所需输出功能 | 2.2.2 |",
						"| 功能表 | 用文字注明各输入组合对应输出含义的表格 | 2.2.2 |",
						"| 任意项 | 输入组合不会出现或输出可任意取值的项 | 2.2.3 |",
						"| 约束项 | 因输入变量受限而不会出现的组合所对应的项 | 2.2.3 |",
						"| 狄摩根定理 | 与项取非得或非、或项取非得与非的定理 | 2.3.1 |",
						"| 非号内移 | 把公共非号移到各变量上的等效变形方法 | 2.3.1 |",
						"| 与非门 | 先与后非、可单独实现任何逻辑功能的门 | 2.3.2 |",
						"| 或非门 | 先或后非、可单独实现任何逻辑功能的门 | 2.3.2 |",
						"| 与非-与非表达式 | 与或式两次取反后只用与非门实现的式子 | 2.3.3 |",
						"| 或非-或非表达式 | 或与式两次取反后只用或非门实现的式子 | 2.3.3 |",
						"| 数据选择器（MUX） | 按地址从多路输入中选出一路送到输出端 | 2.4.1 |",
						"| 地址输入 | 选择器用来指定被选数据通道的输入变量 | 2.4.1 |",
						"| 数据分配器（DEMUX） | 按地址把一路输入数据送到指定的输出端 | 2.4.2 |",
						"| 多路分配 | 把一路数据按地址分送到多个输出端之一的操作 | 2.4.2 |",
						"| 选择器实现函数 | 地址接变量、数据端接常量或变量以实现逻辑函数 | 2.4.3 |",
						"| 译码器 | 把多位二进制代码译成对应输出信号的电路 | 2.5.1 |",
						"| 二进制译码器 | 输入为二进制代码、输出对应各最小项的译码器 | 2.5.1 |",
						"| 显示译码器 | 把代码译成能驱动数码管各段信号的译码器 | 2.5.1 |",
						"| 灭零 | 隐藏高位无效零而保留个位零的显示控制 | 2.5.4 |",
						"| 灯测试 | 使全部段点亮以检查数码管各段是否完好 | 2.5.4 |",
						"| 编码器 | 把多个输入中的有效信号编成二进制代码的电路 | 2.5.2 |",
						"| 优先编码器 | 允许多个输入同时有效并按优先级别编码的电路 | 2.5.2 |",
						"| 数据比较器 | 判断两个二进制数大小或是否相等的组合电路 | 2.6.1 |",
						"| 比较器级联 | 多片比较器串接以扩展参与比较位数的连接 | 2.6.1 |",
						"| 半加器 | 只把两个一位数相加、不接收低位进位的电路 | 2.6.2 |",
						"| 全加器 | 把两个一位数连同低位进位相加得到和与进位 | 2.6.2 |",
						"| 超前进位加法器 | 由生成、传递信号并行算出各位进位的加法器 | 2.6.2 |",
						"| 进位延迟 | 进位从低位逐级传到高位所累加的门延迟 | 2.6.3 |",
						"| 生成信号 | 两个加数本位均为1时直接产生进位的条件 | 2.6.3 |",
						"| 传递信号 | 本位把低位进位传向高位的条件 | 2.6.3 |",
						"| 奇校验 | 使信息位与校验位中1的个数为奇数的校验 | 2.7.1 |",
						"| 偶校验 | 使信息位与校验位中1的个数为偶数的校验 | 2.7.1 |",
						"| 校验位 | 为满足奇偶性要求附加在信息位之后的冗余位 | 2.7.2 |",
						"| 检错 | 接收端按奇偶关系判断数据是否传错的过程 | 2.7.2 |",
						"| 锁存器 | 电平控制下随输入改变并可保持状态的存储元件 | 3.1.1 |",
						"| 双稳态 | 电路能长期稳定保持在0或1两种状态的性质 | 3.1.1 |",
						"| 基本SR锁存器 | 两个与非门交叉耦合构成的无时钟存储电路 | 3.1.2 |",
						"| 约束条件 | SR锁存器中不允许两个输入同时有效的限制 | 3.1.2 |",
						"| 不定状态 | 两个输入同时有效时输出无法确定的状态 | 3.1.2 |",
						"| 门控SR锁存器 | 增加使能端、只在使能期间接收输入的锁存器 | 3.1.3 |",
						"| 使能信号 | 决定锁存器当前是否接受输入的电平信号 | 3.1.3 |",
						"| 门控D锁存器 | 单数据端输入、靠反相器避免两输入同时有效的锁存器 | 3.1.4 |",
						"| 透明状态 | 使能有效期间输出随输入直接变化的状态 | 3.1.4 |",
						"| 空翻 | 使能有效期间输入多次变化引起输出多次翻转 | 3.1.4 |",
						"| 触发器 | 只在时钟有效沿瞬间按输入改变状态的存储元件 | 3.2.1 |",
						"| SR触发器 | 以S、R为输入、边沿时刻完成置位与复位的触发器 | 3.2.1 |",
						"| 主从结构 | 两级锁存器串接、靠从级隔离防止空翻的结构 | 3.2.1 |",
						"| D触发器 | 单输入端、时钟沿把输入值送入输出的触发器 | 3.2.2 |",
						"| 特征方程 | 描述触发器次态与现态及输入关系的逻辑式 | 3.2.2 |",
						"| JK触发器 | 具备置位、复位、保持、翻转四种功能的触发器 | 3.2.3 |",
						"| T触发器 | 单输入、T为1时翻转、T为0时保持的触发器 | 3.2.5 |",
						"| 翻转 | J、K同时为1时次态取现态反值的动作 | 3.2.3 |",
						"| 建立时间 | 时钟有效沿到来前数据必须稳定的最短时间 | 3.2.4 |",
						"| 保持时间 | 时钟有效沿过后数据仍需稳定的最短时间 | 3.2.4 |",
						"| 最高时钟频率 | 触发器能可靠工作的时钟频率上限 | 3.2.4 |",
						"| 寄存器 | 在时钟控制下并行存入或送出多位数据的部件 | 3.3.1 |",
						"| 并行输入 | 各位数据同时送入寄存器的数据输入方式 | 3.3.1 |",
						"| 移位寄存器 | 在时钟作用下使所存数据逐位移动的寄存器 | 3.3.2 |",
						"| 串行输入 | 数据按位从单一输入端依次进入寄存器的方式 | 3.3.2 |",
						"| 双向移位寄存器 | 由控制信号选择左移或右移的移位寄存器 | 3.3.2 |",
						"| 串并转换 | 串行数据与并行数据之间相互转换的过程 | 3.3.3 |",
						"| 并串转换 | 把并行数据逐位串行送出的过程 | 3.3.3 |",
						"| 同步计数器 | 各触发器共用同一时钟、状态同时更新的计数器 | 3.4.1 |",
						"| 计数模数 | 计数器一个完整循环所包含的状态数目 | 3.4.1 |",
						"| 同步二进制计数器 | 按二进制数顺序计数的同步计数器 | 3.4.1 |",
						"| 同步十进制计数器 | 按8421码顺序计满十个状态的同步计数器 | 3.4.1 |",
						"| 异步计数器 | 各触发器时钟不统一、状态逐级翻转的计数器 | 3.4.2 |",
						"| 纹波进位 | 把低位触发器输出直接作为高位时钟的方式 | 3.4.2 |",
						"| 异步二进制计数器 | 由T触发器逐级级联、按二分频方式计数的计数器 | 3.4.2 |",
						"| 环形计数器 | 末级输出直接反馈到首级、模等于触发器数的计数器 | 3.4.4 |",
						"| 扭环形计数器 | 末级反相后反馈、模为触发器数两倍的计数器 | 3.4.4 |",
						"| 集成计数器 | 带清零、置数、计数功能的标准化计数器芯片 | 3.4.3 |",
						"| 预置数 | 通过置数端把指定数据直接装入计数器的操作 | 3.4.3 |",
						"| 反馈清零法 | 用译码输出使计数器提前清零以获得任意模数 | 3.4.3 |",
						"| 反馈置数法 | 用进位或译码信号控制置数端改变计数起点 | 3.4.3 |",
						"| 预置值 | 预置法装入计数器的初值，等于最大模减目标模 | 3.4.5 |",
						"| 级联扩模 | 多片计数器串接以扩大计数模值的方式 | 3.4.5 |",
						"| 多谐振荡器 | 无需外加触发信号即可自激产生矩形波的电路 | 3.5.1 |",
						"| 石英晶体振荡器 | 用晶体谐振频率稳定输出频率的脉冲源电路 | 3.5.1 |",
						"| 节拍脉冲产生器 | 把时钟变换为多路依次出现的节拍信号的电路 | 3.5.2 |",
						"| 节拍 | 一个时钟周期内划分出的顺序工作时段 | 3.5.2 |",
						"| 状态转移表 | 列出各现态在输入作用下得到的次态和输出 | 3.6.1 |",
						"| 状态转移图 | 用圆圈表示状态、箭头表示转移方向的图形 | 3.6.1 |",
						"| 状态方程 | 由触发器输入逻辑式写出的次态表达式 | 3.6.1 |",
						"| 输出方程 | 表示输出与现态及输入之间关系的逻辑式 | 3.6.1 |",
						"| 同步时序电路分析 | 由电路逐级写出方程和状态表并归纳功能 | 3.6.2 |",
						"| 米利型电路 | 输出由现态和当前输入共同决定的时序电路 | 3.6.3 |",
						"| 摩尔型电路 | 输出只由现态决定的时序电路 | 3.6.3 |",
						"| 序列检测器 | 能识别输入码流中特定序列的时序电路 | 3.6.2 |",
						"| 状态化简 | 合并等价状态以减少状态总数的过程 | 3.7.1 |",
						"| 等价状态 | 在相同输入下输出相同且次态等价的现态 | 3.7.1 |",
						"| 激励表 | 由要求的现态与次态反推触发器输入端值的表 | 3.7.1 |",
						"| 原始状态图 | 由文字描述直接画出、尚未化简的状态转移图 | 3.7.2 |",
						"| 不完全确定状态表 | 存在未定义次态或输出的状态转移表 | 3.7.2 |",
						"| 状态编码 | 给化简后的每个状态指定一组二进制代码 | 3.7.3 |",
						"| 相邻编码 | 使相邻状态的代码只有一位不同的编码方案 | 3.7.3 |",
						"| 寄存器堆 | 多个寄存器统一编址、按地址选读选写的部件 | 4.1.1 |",
						"| 读写端口 | 寄存器堆用于读出数据或写入数据的通道 | 4.1.1 |",
						"| 寄存器队列 | 按先进先出规则存取数据的寄存器组 | 4.1.2 |",
						"| 先进先出（FIFO） | 先写入的数据先被读出的存取规则 | 4.1.2 |",
						"| 寄存器堆栈 | 按后进先出规则存取数据的寄存器组 | 4.1.3 |",
						"| 双端口寄存器堆 | 有两套独立地址、可同周期读两个操作数的寄存器堆 | 4.1.4 |",
						"| 栈顶指针 | 指示堆栈当前可读写位置的计数器 | 4.1.3 |",
						"| 随机存取存储器（RAM） | 可按地址随机读写任一存储单元的半导体存储器 | 4.2.1 |",
						"| 存储矩阵 | 由存储元按行列排列成的存储体阵列 | 4.2.1 |",
						"| 地址译码器 | 把地址代码译为选中某个存储单元控制信号的部件 | 4.2.1 |",
						"| 单译码 | 用全部地址位直接译出每一行选中信号的方式 | 4.2.2 |",
						"| 双译码 | 把地址分成行、列两组分别译码再交叉选中单元 | 4.2.2 |",
						"| 地址线 | 用于选择存储字、条数由字数决定的输入线 | 4.2.5 |",
						"| 静态随机存储器（SRAM） | 用触发器作存储元、不需刷新的RAM | 4.2.3 |",
						"| 存储元 | 存储器中存放一位二进制数据的单元电路 | 4.2.3 |",
						"| 动态随机存储器（DRAM） | 靠电容电荷存储信息、需定期刷新的RAM | 4.2.4 |",
						"| 刷新 | 定期给存储电容补充电荷以保持数据的过程 | 4.2.4 |",
						"| 行选通 | 锁存行地址并启动一次行操作的输入信号 | 4.2.4 |",
						"| 集中刷新 | 在一段时间内集中完成全部行刷新的方式 | 4.2.4 |",
						"| 掩模只读存储器（掩模ROM） | 生产时由光刻掩模固定存储内容的只读存储器 | 4.3.1 |",
						"| 字线 | ROM中选中某个存储字的一根连线 | 4.3.1 |",
						"| 可编程只读存储器（PROM） | 用户可一次性写入内容的只读存储器 | 4.3.2 |",
						"| 可擦除可编程只读存储器（EPROM） | 用紫外线擦除后可重新写入的只读存储器 | 4.3.2 |",
						"| 熔丝 | PROM中靠烧断与否表示所存数据的易熔连线 | 4.3.2 |",
						"| ROM实现逻辑 | 以地址为输入、按真值表写入内容的组合逻辑实现 | 4.3.3 |",
						"| 闪速存储器（FLASH） | 可电擦除、按块重写的非易失性存储器 | 4.4.1 |",
						"| 浮栅 | 能长期俘获电子从而保存数据的栅极结构 | 4.4.1 |",
						"| 编程 | 向浮栅注入电子以改变存储元阈值的写入操作 | 4.4.2 |",
						"| 擦除 | 移走浮栅中的电子使存储块恢复初始状态 | 4.4.2 |",
						"| 擦写寿命 | 存储元可承受的擦除写入次数上限 | 4.4.2 |",
						"| 位扩展 | 多片芯片并联以增加每字位数的容量扩展方式 | 4.5.1 |",
						"| 共用地址线 | 位扩展中各芯片地址端全部并联的连接方式 | 4.5.1 |",
						"| 字扩展 | 用片选信号分时选中多片芯片以增加存储字数 | 4.5.2 |",
						"| 片选信号 | 地址译码输出中用来选中某一片芯片的信号 | 4.5.2 |",
						"| 可编程逻辑器件（PLD） | 逻辑功能由用户编程决定的集成电路 | 5.1.1 |",
						"| 与阵列 | 器件中可编程产生各乘积项的阵列结构 | 5.1.1 |",
						"| 或阵列 | 器件中把各乘积项相或得到输出的阵列结构 | 5.1.1 |",
						"| 熔丝连接 | 未编程导通、编程烧断的一次性可编程连接 | 5.1.3 |",
						"| 反熔丝连接 | 未编程断开、编程击穿建立通路的一次性连接 | 5.1.3 |",
						"| OC门 | 只能拉低输出、需外接上拉电阻的门电路 | 5.1.3 |",
						"| 复杂可编程逻辑器件（CPLD） | 以与或阵列和集中互连构成的大规模PLD | 5.2.4 |",
						"| 可编程阵列逻辑（PAL） | 与阵列可编程、或阵列固定的PLD | 5.1.2 |",
						"| 通用阵列逻辑（GAL） | 带可编程输出宏单元、可反复改写的PLD | 5.1.2 |",
						"| 简单可编程逻辑器件（SPLD） | 与或阵列规模较小的一类PLD | 5.1.2 |",
						"| 现场可编程门阵列（FPGA） | 由可编程逻辑块和互连资源构成的芯片 | 5.1.2 |",
						"| 互连资源 | FPGA中连接逻辑块与输入输出块的可编程布线 | 5.2.1 |",
						"| 可编程输入输出块（IOB） | 提供芯片引脚与内部逻辑之间连接的单元 | 5.2.1 |",
						"| 可组态逻辑块（CLB） | FPGA中实现组合与时序逻辑的基本单元 | 5.2.2 |",
						"| 查找表（LUT） | 用小容量存储表实现任意组合逻辑的单元 | 5.2.2 |",
						"| 分布式存储器 | 用查找表配置成的片内小容量存储资源 | 5.2.2 |",
						"| SRAM型FPGA | 用片内SRAM存放编程数据的可重配置FPGA | 5.2.3 |",
						"| 配置数据 | 决定FPGA内部连线与逻辑功能的编程信息 | 5.2.3 |",
						"| 上电配置 | 每次上电后从外部存储器装入配置数据的过程 | 5.2.3 |",
						"| 在系统编程（ISP） | 器件已焊在板上仍可改写其编程数据的方式 | 5.3.2 |",
						"| 边界扫描 | 经专用端口访问器件引脚与内部节点的测试技术 | 5.3.2 |",
						"| JTAG接口 | 按IEEE 1149.1标准串行访问芯片的编程测试口 | 5.3.2 |",
						"| 硬件描述语言（HDL） | 描述数字电路结构与行为的文本语言 | 5.4.1 |",
						"| 综合 | 把HDL描述转换为门级或查找表级网表的过程 | 5.4.1 |",
						"| 布局布线 | 把网表单元分配到芯片资源并完成连线的步骤 | 5.4.1 |",
						"| 实体 | VHDL中说明器件端口名称与方向的描述部分 | 5.5.1 |",
						"| 结构体 | VHDL中描述实体内部功能实现的说明部分 | 5.5.1 |",
						"| 进程 | VHDL中被信号变化触发执行的并发语句块 | 5.5.1 |",
						"| 数字系统 | 由数据处理单元和控制单元构成的整体 | 6.1.2 |",
						"| 数据处理单元 | 完成数据运算、存储与传送的功能部件 | 6.1.2 |",
						"| 控制单元 | 按顺序发出控制信号协调各部件工作的部件 | 6.1.2 |",
						"| 总线 | 多个部件共同使用的一组数据传输线 | 6.2.1 |",
						"| 分时共享 | 同一时刻只允许一个部件向总线发送数据 | 6.2.1 |",
						"| 算法状态机（ASM） | 用状态框与判断框描述控制器时序的图形 | 6.3.2 |",
						"| 算法流程图 | 由状态框、判断框和条件输出框组成的图 | 6.3.2 |",
						"| 状态框 | ASM图中表示一个时钟周期内寄存器状态的框 | 6.3.2 |",
						"| 判断框 | ASM图中按输入条件选择后继路径的菱形框 | 6.3.2 |",
						"| 控制器 | 按规定顺序产生控制信号的时序逻辑部件 | 6.4.1 |",
						"| 控制信号 | 指挥各功能部件执行具体操作的命令信号 | 6.4.1 |",
						"| 计数器型控制器 | 用计数器状态经译码产生控制信号的结构 | 6.4.2 |",
						"| 节拍分配 | 把时钟周期划分为若干顺序节拍的控制方式 | 6.4.2 |",
						"| 多路选择器型控制器 | 用选择器按状态和条件选通控制信号的结构 | 6.4.3 |",
						"| 条件选通 | 由选择器依据输入条件决定输出哪路控制信号 | 6.4.3 |",
						"| 定序型控制器 | 用状态寄存器配合组合逻辑产生控制信号的结构 | 6.4.4 |",
						"| 状态转移逻辑 | 决定控制器下一状态的组合逻辑部分 | 6.4.4 |",
						"| 微程序控制 | 把控制信号编成微指令序列逐条执行的控制方式 | 6.5.1 |",
						"| 微指令 | 一个时钟周期内同时发出的控制信号的集合 | 6.5.1 |",
						"| 微命令 | 微指令中每一位所对应的具体控制操作 | 6.5.1 |",
						"| 微程序 | 完成一条机器指令功能的一组微指令序列 | 6.5.1 |",
						"| 控制存储器 | 存放全部微程序的只读存储器 | 6.5.2 |",
						"| 微地址寄存器 | 存放当前待执行微指令地址的寄存器 | 6.5.2 |",
						"| 微指令格式 | 微指令中控制字段与顺序控制字段的编排方式 | 6.5.2 |",
						"| 采样 | 按等间隔时刻抽取模拟信号瞬时值的过程 | 7.2.1 |",
						"| 采样定理 | 采样频率必须不低于信号最高频率两倍的定理 | 7.2.1 |",
						"| 采样保持电路 | 在采样瞬间冻结输入电压供转换使用的电路 | 7.1.3 |",
						"| 孔径时间 | 从发出保持命令到采样开关真正断开的时间 | 7.1.3 |",
						"| A/D转换器（ADC） | 把模拟量转换为数字量的电子电路 | 7.2.3 |",
						"| 量化 | 把取样得到的连续幅值归入有限个离散电平 | 7.2.3 |",
						"| 逐次逼近型ADC | 按二分比较逐步逼近输入模拟量的转换电路 | 7.2.3 |",
						"| 双积分型ADC | 先后对输入和基准积分、用时间计数的转换电路 | 7.2.5 |",
						"| D/A转换器（DAC） | 把数字量转换为模拟量输出的电子电路 | 7.3.2 |",
						"| R-2R T型网络 | 只用R和2R两种阻值产生二进制权电流的网络 | 7.3.2 |",
						"| 求和放大器 | 把各权电流相加并变换为输出电压的运放电路 | 7.3.2 |",
						"| 最低有效位（LSB） | 相邻输入码对应的输出差，等于基准除以2的n次方 | 7.3.4 |",
						"| 满量程 | 最大输入码对应的输出，为2的n次方减1个LSB | 7.3.4 |",
						"| 线网（wire） | 表示元件间连线、需驱动且默认高阻的类型 | A.5 |",
						"| 寄存器（reg） | 在过程块中赋值并保持最后一次赋值的类型 | A.5 |",
						"| 存储器数组 | 由多个同宽reg单元组成、按地址访问的数组 | A.5 |",
						"| 阻塞赋值 | 语句执行时立即完成、后续语句可见新值的赋值 | A.8 |",
						"| 非阻塞赋值 | 块结束时统一更新、避免顺序影响的赋值 | A.8 |",
						"| casez语句 | 忽略z位、按通配比较的分支语句 | A.9 |",
						"| 门级原语 | Verilog内置的与、或、非等门元件 | A.10 |",
						"| 有限状态机 | 用状态、转移和输出描述时序行为的模型 | A.11 |",
						"| timescale | 指定仿真时间单位与精度的编译指令 | A.12 |",
						""
					],
					"subs": [],
					"number": "",
					"anchor": "sec-glossary-0",
					"html": "<div class=\"table-wrap\"><table><thead><tr><th>术语</th><th>一句话界定</th><th>小节</th></tr></thead><tbody><tr><td>连续量</td><td>数值随时间连续变化，可取得任意中间值的量</td><td><a class=\"jump\" href=\"#sec-1.1.1\" data-sec=\"sec-1.1.1\">1.1.1</a></td></tr><tr><td>离散量</td><td>只在离散时刻取有限个确定值的量</td><td><a class=\"jump\" href=\"#sec-1.1.1\" data-sec=\"sec-1.1.1\">1.1.1</a></td></tr><tr><td>开关量</td><td>只有两种取值状态并用0和1表示的物理量</td><td><a class=\"jump\" href=\"#sec-1.1.2\" data-sec=\"sec-1.1.2\">1.1.2</a></td></tr><tr><td>逻辑电平</td><td>用规定的高、低电压范围表示逻辑0和1</td><td><a class=\"jump\" href=\"#sec-1.1.2\" data-sec=\"sec-1.1.2\">1.1.2</a></td></tr><tr><td>数字波形</td><td>用高低电平随时间的跳变表示数字信号的图形</td><td><a class=\"jump\" href=\"#sec-1.1.3\" data-sec=\"sec-1.1.3\">1.1.3</a></td></tr><tr><td>占空比</td><td>脉冲宽度与重复周期之比，反映高电平占比</td><td><a class=\"jump\" href=\"#sec-1.1.3\" data-sec=\"sec-1.1.3\">1.1.3</a></td></tr><tr><td>上升时间</td><td>脉冲幅度从10%升到90%所需的时间</td><td><a class=\"jump\" href=\"#sec-1.1.4\" data-sec=\"sec-1.1.4\">1.1.4</a></td></tr><tr><td>下降时间</td><td>脉冲幅度从90%降到10%所需的时间</td><td><a class=\"jump\" href=\"#sec-1.1.4\" data-sec=\"sec-1.1.4\">1.1.4</a></td></tr><tr><td>脉冲宽度</td><td>脉冲上升沿与下降沿50%幅度点之间的时间</td><td><a class=\"jump\" href=\"#sec-1.1.4\" data-sec=\"sec-1.1.4\">1.1.4</a></td></tr><tr><td>正脉冲</td><td>以向上跳变开始、先高后低的脉冲</td><td><a class=\"jump\" href=\"#sec-1.1.4\" data-sec=\"sec-1.1.4\">1.1.4</a></td></tr><tr><td>基数</td><td>计数制中所用数码符号的个数，如二进制为2</td><td><a class=\"jump\" href=\"#sec-1.2.1\" data-sec=\"sec-1.2.1\">1.2.1</a></td></tr><tr><td>位权</td><td>某一位数码为1时所代表的实际数值大小</td><td><a class=\"jump\" href=\"#sec-1.2.1\" data-sec=\"sec-1.2.1\">1.2.1</a></td></tr><tr><td>除基取余法</td><td>整数转换时反复除以目标基数，余数逆序排列</td><td><a class=\"jump\" href=\"#sec-1.2.2\" data-sec=\"sec-1.2.2\">1.2.2</a></td></tr><tr><td>乘基取整法</td><td>小数转换时反复乘以目标基数，整数部分顺序排列</td><td><a class=\"jump\" href=\"#sec-1.2.2\" data-sec=\"sec-1.2.2\">1.2.2</a></td></tr><tr><td>BCD码</td><td>用四位二进制代码表示一位十进制数的编码</td><td><a class=\"jump\" href=\"#sec-1.2.3\" data-sec=\"sec-1.2.3\">1.2.3</a></td></tr><tr><td>格雷码</td><td>相邻两组代码只有一位不同的可靠性编码</td><td><a class=\"jump\" href=\"#sec-1.2.3\" data-sec=\"sec-1.2.3\">1.2.3</a></td></tr><tr><td>余三码</td><td>8421码加0011得到的无权BCD码，具有自补性</td><td><a class=\"jump\" href=\"#sec-1.2.4\" data-sec=\"sec-1.2.4\">1.2.4</a></td></tr><tr><td>2421码</td><td>四位权值为2、4、2、1的有权BCD码</td><td><a class=\"jump\" href=\"#sec-1.2.4\" data-sec=\"sec-1.2.4\">1.2.4</a></td></tr><tr><td>格雷码编码</td><td>由二进制相邻两位异或得到格雷码的转换</td><td><a class=\"jump\" href=\"#sec-1.2.5\" data-sec=\"sec-1.2.5\">1.2.5</a></td></tr><tr><td>格雷码解码</td><td>由高位起逐位异或还原自然二进制码</td><td><a class=\"jump\" href=\"#sec-1.2.5\" data-sec=\"sec-1.2.5\">1.2.5</a></td></tr><tr><td>原码</td><td>最高位为符号位、其余位为数值的带符号数表示</td><td><a class=\"jump\" href=\"#sec-1.2.6\" data-sec=\"sec-1.2.6\">1.2.6</a></td></tr><tr><td>反码</td><td>负数符号位不变、数值位逐位取反的表示法</td><td><a class=\"jump\" href=\"#sec-1.2.6\" data-sec=\"sec-1.2.6\">1.2.6</a></td></tr><tr><td>补码</td><td>负数取反加1、零表示唯一的带符号数表示法</td><td><a class=\"jump\" href=\"#sec-1.2.6\" data-sec=\"sec-1.2.6\">1.2.6</a></td></tr><tr><td>溢出</td><td>运算结果超出位数所能表示范围的现象</td><td><a class=\"jump\" href=\"#sec-1.2.6\" data-sec=\"sec-1.2.6\">1.2.6</a></td></tr><tr><td>逻辑函数</td><td>输出逻辑变量与输入逻辑变量之间的对应关系</td><td><a class=\"jump\" href=\"#sec-1.3.1\" data-sec=\"sec-1.3.1\">1.3.1</a></td></tr><tr><td>逻辑变量</td><td>只取0或1两个值并表示逻辑状态的变量</td><td><a class=\"jump\" href=\"#sec-1.3.1\" data-sec=\"sec-1.3.1\">1.3.1</a></td></tr><tr><td>最小项</td><td>每个变量以原变量或反变量出现且只出现一次的与项</td><td><a class=\"jump\" href=\"#sec-1.3.2\" data-sec=\"sec-1.3.2\">1.3.2</a></td></tr><tr><td>最大项</td><td>每个变量以原变量或反变量出现且只出现一次的或项</td><td><a class=\"jump\" href=\"#sec-1.3.2\" data-sec=\"sec-1.3.2\">1.3.2</a></td></tr><tr><td>真值表</td><td>列出输入变量全部取值组合及对应输出的表格</td><td><a class=\"jump\" href=\"#sec-1.3.2\" data-sec=\"sec-1.3.2\">1.3.2</a></td></tr><tr><td>逻辑表达式</td><td>用与、或、非运算符连接变量构成的代数式</td><td><a class=\"jump\" href=\"#sec-1.3.2\" data-sec=\"sec-1.3.2\">1.3.2</a></td></tr><tr><td>与运算</td><td>所有输入均为1时输出才为1的逻辑运算</td><td><a class=\"jump\" href=\"#sec-1.3.3\" data-sec=\"sec-1.3.3\">1.3.3</a></td></tr><tr><td>或运算</td><td>只要有一个输入为1输出即为1的逻辑运算</td><td><a class=\"jump\" href=\"#sec-1.3.3\" data-sec=\"sec-1.3.3\">1.3.3</a></td></tr><tr><td>非运算</td><td>输出取值与单一输入取值始终相反的运算</td><td><a class=\"jump\" href=\"#sec-1.3.3\" data-sec=\"sec-1.3.3\">1.3.3</a></td></tr><tr><td>正逻辑</td><td>规定高电平为1、低电平为0的表示方法</td><td><a class=\"jump\" href=\"#sec-1.3.4\" data-sec=\"sec-1.3.4\">1.3.4</a></td></tr><tr><td>负逻辑</td><td>规定低电平为1、高电平为0的表示方法</td><td><a class=\"jump\" href=\"#sec-1.3.4\" data-sec=\"sec-1.3.4\">1.3.4</a></td></tr><tr><td>三态门</td><td>输出除0、1外还能处于高阻状态的门电路</td><td><a class=\"jump\" href=\"#sec-1.3.4\" data-sec=\"sec-1.3.4\">1.3.4</a></td></tr><tr><td>分配律</td><td>与对或、或对与可以提出公共因子的定律</td><td><a class=\"jump\" href=\"#sec-1.4.1\" data-sec=\"sec-1.4.1\">1.4.1</a></td></tr><tr><td>互补律</td><td>变量与其反变量相与为0、相或为1的定律</td><td><a class=\"jump\" href=\"#sec-1.4.1\" data-sec=\"sec-1.4.1\">1.4.1</a></td></tr><tr><td>代入规则</td><td>等式两边同一变量换成同一函数后等式仍成立</td><td><a class=\"jump\" href=\"#sec-1.4.2\" data-sec=\"sec-1.4.2\">1.4.2</a></td></tr><tr><td>反演规则</td><td>求反函数时运算符、常量互换并把变量取反</td><td><a class=\"jump\" href=\"#sec-1.4.2\" data-sec=\"sec-1.4.2\">1.4.2</a></td></tr><tr><td>对偶规则</td><td>运算符与常量互换得对偶式，原等式仍成立</td><td><a class=\"jump\" href=\"#sec-1.4.2\" data-sec=\"sec-1.4.2\">1.4.2</a></td></tr><tr><td>并项法</td><td>利用互补律把两个相邻与项合并成一项的方法</td><td><a class=\"jump\" href=\"#sec-1.4.3\" data-sec=\"sec-1.4.3\">1.4.3</a></td></tr><tr><td>吸收法</td><td>利用吸收律消去被另一项包含的多余与项</td><td><a class=\"jump\" href=\"#sec-1.4.3\" data-sec=\"sec-1.4.3\">1.4.3</a></td></tr><tr><td>消去法</td><td>利用冗余因子关系消去与项中多余变量的方法</td><td><a class=\"jump\" href=\"#sec-1.4.3\" data-sec=\"sec-1.4.3\">1.4.3</a></td></tr><tr><td>卡诺图</td><td>最小项按循环码排列成的方格图，用于化简</td><td><a class=\"jump\" href=\"#sec-1.5.1\" data-sec=\"sec-1.5.1\">1.5.1</a></td></tr><tr><td>相邻最小项</td><td>只有一个变量取值不同的两个最小项</td><td><a class=\"jump\" href=\"#sec-1.5.1\" data-sec=\"sec-1.5.1\">1.5.1</a></td></tr><tr><td>几何相邻</td><td>卡诺图中紧邻或首尾、上下对称位置的关系</td><td><a class=\"jump\" href=\"#sec-1.5.1\" data-sec=\"sec-1.5.1\">1.5.1</a></td></tr><tr><td>卡诺圈</td><td>卡诺图中圈住的2的整数次幂个相邻1格</td><td><a class=\"jump\" href=\"#sec-1.5.2\" data-sec=\"sec-1.5.2\">1.5.2</a></td></tr><tr><td>最小覆盖</td><td>用数量最少的卡诺圈覆盖全部1格的方案</td><td><a class=\"jump\" href=\"#sec-1.5.2\" data-sec=\"sec-1.5.2\">1.5.2</a></td></tr><tr><td>最简与或式</td><td>与项个数最少且每项变量最少的与或表达式</td><td><a class=\"jump\" href=\"#sec-1.5.2\" data-sec=\"sec-1.5.2\">1.5.2</a></td></tr><tr><td>五变量卡诺图</td><td>两个四变量卡诺图叠合、上下同格相邻的卡诺图</td><td><a class=\"jump\" href=\"#sec-1.5.3\" data-sec=\"sec-1.5.3\">1.5.3</a></td></tr><tr><td>双极型集成电路</td><td>以双极型晶体管为基本元件的集成电路</td><td><a class=\"jump\" href=\"#sec-1.6.1\" data-sec=\"sec-1.6.1\">1.6.1</a></td></tr><tr><td>MOS集成电路</td><td>以MOS场效应管为基本元件的集成电路</td><td><a class=\"jump\" href=\"#sec-1.6.1\" data-sec=\"sec-1.6.1\">1.6.1</a></td></tr><tr><td>TTL电路</td><td>采用晶体管-晶体管逻辑结构的双极型集成门</td><td><a class=\"jump\" href=\"#sec-1.6.1\" data-sec=\"sec-1.6.1\">1.6.1</a></td></tr><tr><td>CMOS电路</td><td>由互补的NMOS管和PMOS管构成的集成电路</td><td><a class=\"jump\" href=\"#sec-1.6.1\" data-sec=\"sec-1.6.1\">1.6.1</a></td></tr><tr><td>扇出系数</td><td>一个门输出端能驱动的同类门输入端的个数</td><td><a class=\"jump\" href=\"#sec-1.6.4\" data-sec=\"sec-1.6.4\">1.6.4</a></td></tr><tr><td>传输延迟时间</td><td>输出信号相对输入信号变化滞后的时间</td><td><a class=\"jump\" href=\"#sec-1.6.4\" data-sec=\"sec-1.6.4\">1.6.4</a></td></tr><tr><td>噪声容限</td><td>不致使输出误判时允许叠加在输入上的最大干扰电压</td><td><a class=\"jump\" href=\"#sec-1.6.4\" data-sec=\"sec-1.6.4\">1.6.4</a></td></tr><tr><td>功耗</td><td>门电路在额定电源电压下所消耗的功率</td><td><a class=\"jump\" href=\"#sec-1.6.4\" data-sec=\"sec-1.6.4\">1.6.4</a></td></tr><tr><td>74系列</td><td>民品温度等级的通用数字集成电路系列</td><td><a class=\"jump\" href=\"#sec-1.6.5\" data-sec=\"sec-1.6.5\">1.6.5</a></td></tr><tr><td>54系列</td><td>与74系列引脚相同、温度范围更宽的军品系列</td><td><a class=\"jump\" href=\"#sec-1.6.5\" data-sec=\"sec-1.6.5\">1.6.5</a></td></tr><tr><td>逐级电平推导法</td><td>由输入电平出发按门功能逐级推算各点电平</td><td><a class=\"jump\" href=\"#sec-2.1.1\" data-sec=\"sec-2.1.1\">2.1.1</a></td></tr><tr><td>波形图法</td><td>按时间顺序画出各点波形以确定输出变化</td><td><a class=\"jump\" href=\"#sec-2.1.1\" data-sec=\"sec-2.1.1\">2.1.1</a></td></tr><tr><td>布尔表达式法</td><td>从输入到输出逐级写出各门输出表达式的方法</td><td><a class=\"jump\" href=\"#sec-2.1.2\" data-sec=\"sec-2.1.2\">2.1.2</a></td></tr><tr><td>中间变量</td><td>为简化书写而引入的门输出逻辑表达式</td><td><a class=\"jump\" href=\"#sec-2.1.2\" data-sec=\"sec-2.1.2\">2.1.2</a></td></tr><tr><td>真值表分析法</td><td>列出输入全部组合并算出对应输出以确定功能</td><td><a class=\"jump\" href=\"#sec-2.1.4\" data-sec=\"sec-2.1.4\">2.1.4</a></td></tr><tr><td>功能归纳</td><td>由真值表总结电路输出与输入的逻辑关系</td><td><a class=\"jump\" href=\"#sec-2.1.4\" data-sec=\"sec-2.1.4\">2.1.4</a></td></tr><tr><td>竞争</td><td>同一信号经不同路径到达同一门的时间不一致</td><td><a class=\"jump\" href=\"#sec-2.1.5\" data-sec=\"sec-2.1.5\">2.1.5</a></td></tr><tr><td>冒险</td><td>竞争使输出出现不应有的窄脉冲的现象</td><td><a class=\"jump\" href=\"#sec-2.1.5\" data-sec=\"sec-2.1.5\">2.1.5</a></td></tr><tr><td>静态冒险</td><td>输出本应保持不变却出现短暂尖峰的现象</td><td><a class=\"jump\" href=\"#sec-2.1.5\" data-sec=\"sec-2.1.5\">2.1.5</a></td></tr><tr><td>相切卡诺圈</td><td>相邻但切点无其他圈覆盖、可能产生冒险的圈</td><td><a class=\"jump\" href=\"#sec-2.1.6\" data-sec=\"sec-2.1.6\">2.1.6</a></td></tr><tr><td>冗余项</td><td>为消除冒险而增加的、不改变逻辑值的与项</td><td><a class=\"jump\" href=\"#sec-2.1.6\" data-sec=\"sec-2.1.6\">2.1.6</a></td></tr><tr><td>逻辑抽象</td><td>把实际问题归结为输入输出间逻辑关系的过程</td><td><a class=\"jump\" href=\"#sec-2.2.1\" data-sec=\"sec-2.2.1\">2.2.1</a></td></tr><tr><td>门级实现</td><td>按选定门类型把最简表达式画成逻辑电路</td><td><a class=\"jump\" href=\"#sec-2.2.1\" data-sec=\"sec-2.2.1\">2.2.1</a></td></tr><tr><td>逻辑问题描述</td><td>用文字或表格说明输入条件与所需输出功能</td><td><a class=\"jump\" href=\"#sec-2.2.2\" data-sec=\"sec-2.2.2\">2.2.2</a></td></tr><tr><td>功能表</td><td>用文字注明各输入组合对应输出含义的表格</td><td><a class=\"jump\" href=\"#sec-2.2.2\" data-sec=\"sec-2.2.2\">2.2.2</a></td></tr><tr><td>任意项</td><td>输入组合不会出现或输出可任意取值的项</td><td><a class=\"jump\" href=\"#sec-2.2.3\" data-sec=\"sec-2.2.3\">2.2.3</a></td></tr><tr><td>约束项</td><td>因输入变量受限而不会出现的组合所对应的项</td><td><a class=\"jump\" href=\"#sec-2.2.3\" data-sec=\"sec-2.2.3\">2.2.3</a></td></tr><tr><td>狄摩根定理</td><td>与项取非得或非、或项取非得与非的定理</td><td><a class=\"jump\" href=\"#sec-2.3.1\" data-sec=\"sec-2.3.1\">2.3.1</a></td></tr><tr><td>非号内移</td><td>把公共非号移到各变量上的等效变形方法</td><td><a class=\"jump\" href=\"#sec-2.3.1\" data-sec=\"sec-2.3.1\">2.3.1</a></td></tr><tr><td>与非门</td><td>先与后非、可单独实现任何逻辑功能的门</td><td><a class=\"jump\" href=\"#sec-2.3.2\" data-sec=\"sec-2.3.2\">2.3.2</a></td></tr><tr><td>或非门</td><td>先或后非、可单独实现任何逻辑功能的门</td><td><a class=\"jump\" href=\"#sec-2.3.2\" data-sec=\"sec-2.3.2\">2.3.2</a></td></tr><tr><td>与非-与非表达式</td><td>与或式两次取反后只用与非门实现的式子</td><td><a class=\"jump\" href=\"#sec-2.3.3\" data-sec=\"sec-2.3.3\">2.3.3</a></td></tr><tr><td>或非-或非表达式</td><td>或与式两次取反后只用或非门实现的式子</td><td><a class=\"jump\" href=\"#sec-2.3.3\" data-sec=\"sec-2.3.3\">2.3.3</a></td></tr><tr><td>数据选择器（MUX）</td><td>按地址从多路输入中选出一路送到输出端</td><td><a class=\"jump\" href=\"#sec-2.4.1\" data-sec=\"sec-2.4.1\">2.4.1</a></td></tr><tr><td>地址输入</td><td>选择器用来指定被选数据通道的输入变量</td><td><a class=\"jump\" href=\"#sec-2.4.1\" data-sec=\"sec-2.4.1\">2.4.1</a></td></tr><tr><td>数据分配器（DEMUX）</td><td>按地址把一路输入数据送到指定的输出端</td><td><a class=\"jump\" href=\"#sec-2.4.2\" data-sec=\"sec-2.4.2\">2.4.2</a></td></tr><tr><td>多路分配</td><td>把一路数据按地址分送到多个输出端之一的操作</td><td><a class=\"jump\" href=\"#sec-2.4.2\" data-sec=\"sec-2.4.2\">2.4.2</a></td></tr><tr><td>选择器实现函数</td><td>地址接变量、数据端接常量或变量以实现逻辑函数</td><td><a class=\"jump\" href=\"#sec-2.4.3\" data-sec=\"sec-2.4.3\">2.4.3</a></td></tr><tr><td>译码器</td><td>把多位二进制代码译成对应输出信号的电路</td><td><a class=\"jump\" href=\"#sec-2.5.1\" data-sec=\"sec-2.5.1\">2.5.1</a></td></tr><tr><td>二进制译码器</td><td>输入为二进制代码、输出对应各最小项的译码器</td><td><a class=\"jump\" href=\"#sec-2.5.1\" data-sec=\"sec-2.5.1\">2.5.1</a></td></tr><tr><td>显示译码器</td><td>把代码译成能驱动数码管各段信号的译码器</td><td><a class=\"jump\" href=\"#sec-2.5.1\" data-sec=\"sec-2.5.1\">2.5.1</a></td></tr><tr><td>灭零</td><td>隐藏高位无效零而保留个位零的显示控制</td><td><a class=\"jump\" href=\"#sec-2.5.4\" data-sec=\"sec-2.5.4\">2.5.4</a></td></tr><tr><td>灯测试</td><td>使全部段点亮以检查数码管各段是否完好</td><td><a class=\"jump\" href=\"#sec-2.5.4\" data-sec=\"sec-2.5.4\">2.5.4</a></td></tr><tr><td>编码器</td><td>把多个输入中的有效信号编成二进制代码的电路</td><td><a class=\"jump\" href=\"#sec-2.5.2\" data-sec=\"sec-2.5.2\">2.5.2</a></td></tr><tr><td>优先编码器</td><td>允许多个输入同时有效并按优先级别编码的电路</td><td><a class=\"jump\" href=\"#sec-2.5.2\" data-sec=\"sec-2.5.2\">2.5.2</a></td></tr><tr><td>数据比较器</td><td>判断两个二进制数大小或是否相等的组合电路</td><td><a class=\"jump\" href=\"#sec-2.6.1\" data-sec=\"sec-2.6.1\">2.6.1</a></td></tr><tr><td>比较器级联</td><td>多片比较器串接以扩展参与比较位数的连接</td><td><a class=\"jump\" href=\"#sec-2.6.1\" data-sec=\"sec-2.6.1\">2.6.1</a></td></tr><tr><td>半加器</td><td>只把两个一位数相加、不接收低位进位的电路</td><td><a class=\"jump\" href=\"#sec-2.6.2\" data-sec=\"sec-2.6.2\">2.6.2</a></td></tr><tr><td>全加器</td><td>把两个一位数连同低位进位相加得到和与进位</td><td><a class=\"jump\" href=\"#sec-2.6.2\" data-sec=\"sec-2.6.2\">2.6.2</a></td></tr><tr><td>超前进位加法器</td><td>由生成、传递信号并行算出各位进位的加法器</td><td><a class=\"jump\" href=\"#sec-2.6.2\" data-sec=\"sec-2.6.2\">2.6.2</a></td></tr><tr><td>进位延迟</td><td>进位从低位逐级传到高位所累加的门延迟</td><td><a class=\"jump\" href=\"#sec-2.6.3\" data-sec=\"sec-2.6.3\">2.6.3</a></td></tr><tr><td>生成信号</td><td>两个加数本位均为1时直接产生进位的条件</td><td><a class=\"jump\" href=\"#sec-2.6.3\" data-sec=\"sec-2.6.3\">2.6.3</a></td></tr><tr><td>传递信号</td><td>本位把低位进位传向高位的条件</td><td><a class=\"jump\" href=\"#sec-2.6.3\" data-sec=\"sec-2.6.3\">2.6.3</a></td></tr><tr><td>奇校验</td><td>使信息位与校验位中1的个数为奇数的校验</td><td><a class=\"jump\" href=\"#sec-2.7.1\" data-sec=\"sec-2.7.1\">2.7.1</a></td></tr><tr><td>偶校验</td><td>使信息位与校验位中1的个数为偶数的校验</td><td><a class=\"jump\" href=\"#sec-2.7.1\" data-sec=\"sec-2.7.1\">2.7.1</a></td></tr><tr><td>校验位</td><td>为满足奇偶性要求附加在信息位之后的冗余位</td><td><a class=\"jump\" href=\"#sec-2.7.2\" data-sec=\"sec-2.7.2\">2.7.2</a></td></tr><tr><td>检错</td><td>接收端按奇偶关系判断数据是否传错的过程</td><td><a class=\"jump\" href=\"#sec-2.7.2\" data-sec=\"sec-2.7.2\">2.7.2</a></td></tr><tr><td>锁存器</td><td>电平控制下随输入改变并可保持状态的存储元件</td><td><a class=\"jump\" href=\"#sec-3.1.1\" data-sec=\"sec-3.1.1\">3.1.1</a></td></tr><tr><td>双稳态</td><td>电路能长期稳定保持在0或1两种状态的性质</td><td><a class=\"jump\" href=\"#sec-3.1.1\" data-sec=\"sec-3.1.1\">3.1.1</a></td></tr><tr><td>基本SR锁存器</td><td>两个与非门交叉耦合构成的无时钟存储电路</td><td><a class=\"jump\" href=\"#sec-3.1.2\" data-sec=\"sec-3.1.2\">3.1.2</a></td></tr><tr><td>约束条件</td><td>SR锁存器中不允许两个输入同时有效的限制</td><td><a class=\"jump\" href=\"#sec-3.1.2\" data-sec=\"sec-3.1.2\">3.1.2</a></td></tr><tr><td>不定状态</td><td>两个输入同时有效时输出无法确定的状态</td><td><a class=\"jump\" href=\"#sec-3.1.2\" data-sec=\"sec-3.1.2\">3.1.2</a></td></tr><tr><td>门控SR锁存器</td><td>增加使能端、只在使能期间接收输入的锁存器</td><td><a class=\"jump\" href=\"#sec-3.1.3\" data-sec=\"sec-3.1.3\">3.1.3</a></td></tr><tr><td>使能信号</td><td>决定锁存器当前是否接受输入的电平信号</td><td><a class=\"jump\" href=\"#sec-3.1.3\" data-sec=\"sec-3.1.3\">3.1.3</a></td></tr><tr><td>门控D锁存器</td><td>单数据端输入、靠反相器避免两输入同时有效的锁存器</td><td><a class=\"jump\" href=\"#sec-3.1.4\" data-sec=\"sec-3.1.4\">3.1.4</a></td></tr><tr><td>透明状态</td><td>使能有效期间输出随输入直接变化的状态</td><td><a class=\"jump\" href=\"#sec-3.1.4\" data-sec=\"sec-3.1.4\">3.1.4</a></td></tr><tr><td>空翻</td><td>使能有效期间输入多次变化引起输出多次翻转</td><td><a class=\"jump\" href=\"#sec-3.1.4\" data-sec=\"sec-3.1.4\">3.1.4</a></td></tr><tr><td>触发器</td><td>只在时钟有效沿瞬间按输入改变状态的存储元件</td><td><a class=\"jump\" href=\"#sec-3.2.1\" data-sec=\"sec-3.2.1\">3.2.1</a></td></tr><tr><td>SR触发器</td><td>以S、R为输入、边沿时刻完成置位与复位的触发器</td><td><a class=\"jump\" href=\"#sec-3.2.1\" data-sec=\"sec-3.2.1\">3.2.1</a></td></tr><tr><td>主从结构</td><td>两级锁存器串接、靠从级隔离防止空翻的结构</td><td><a class=\"jump\" href=\"#sec-3.2.1\" data-sec=\"sec-3.2.1\">3.2.1</a></td></tr><tr><td>D触发器</td><td>单输入端、时钟沿把输入值送入输出的触发器</td><td><a class=\"jump\" href=\"#sec-3.2.2\" data-sec=\"sec-3.2.2\">3.2.2</a></td></tr><tr><td>特征方程</td><td>描述触发器次态与现态及输入关系的逻辑式</td><td><a class=\"jump\" href=\"#sec-3.2.2\" data-sec=\"sec-3.2.2\">3.2.2</a></td></tr><tr><td>JK触发器</td><td>具备置位、复位、保持、翻转四种功能的触发器</td><td><a class=\"jump\" href=\"#sec-3.2.3\" data-sec=\"sec-3.2.3\">3.2.3</a></td></tr><tr><td>T触发器</td><td>单输入、T为1时翻转、T为0时保持的触发器</td><td><a class=\"jump\" href=\"#sec-3.2.5\" data-sec=\"sec-3.2.5\">3.2.5</a></td></tr><tr><td>翻转</td><td>J、K同时为1时次态取现态反值的动作</td><td><a class=\"jump\" href=\"#sec-3.2.3\" data-sec=\"sec-3.2.3\">3.2.3</a></td></tr><tr><td>建立时间</td><td>时钟有效沿到来前数据必须稳定的最短时间</td><td><a class=\"jump\" href=\"#sec-3.2.4\" data-sec=\"sec-3.2.4\">3.2.4</a></td></tr><tr><td>保持时间</td><td>时钟有效沿过后数据仍需稳定的最短时间</td><td><a class=\"jump\" href=\"#sec-3.2.4\" data-sec=\"sec-3.2.4\">3.2.4</a></td></tr><tr><td>最高时钟频率</td><td>触发器能可靠工作的时钟频率上限</td><td><a class=\"jump\" href=\"#sec-3.2.4\" data-sec=\"sec-3.2.4\">3.2.4</a></td></tr><tr><td>寄存器</td><td>在时钟控制下并行存入或送出多位数据的部件</td><td><a class=\"jump\" href=\"#sec-3.3.1\" data-sec=\"sec-3.3.1\">3.3.1</a></td></tr><tr><td>并行输入</td><td>各位数据同时送入寄存器的数据输入方式</td><td><a class=\"jump\" href=\"#sec-3.3.1\" data-sec=\"sec-3.3.1\">3.3.1</a></td></tr><tr><td>移位寄存器</td><td>在时钟作用下使所存数据逐位移动的寄存器</td><td><a class=\"jump\" href=\"#sec-3.3.2\" data-sec=\"sec-3.3.2\">3.3.2</a></td></tr><tr><td>串行输入</td><td>数据按位从单一输入端依次进入寄存器的方式</td><td><a class=\"jump\" href=\"#sec-3.3.2\" data-sec=\"sec-3.3.2\">3.3.2</a></td></tr><tr><td>双向移位寄存器</td><td>由控制信号选择左移或右移的移位寄存器</td><td><a class=\"jump\" href=\"#sec-3.3.2\" data-sec=\"sec-3.3.2\">3.3.2</a></td></tr><tr><td>串并转换</td><td>串行数据与并行数据之间相互转换的过程</td><td><a class=\"jump\" href=\"#sec-3.3.3\" data-sec=\"sec-3.3.3\">3.3.3</a></td></tr><tr><td>并串转换</td><td>把并行数据逐位串行送出的过程</td><td><a class=\"jump\" href=\"#sec-3.3.3\" data-sec=\"sec-3.3.3\">3.3.3</a></td></tr><tr><td>同步计数器</td><td>各触发器共用同一时钟、状态同时更新的计数器</td><td><a class=\"jump\" href=\"#sec-3.4.1\" data-sec=\"sec-3.4.1\">3.4.1</a></td></tr><tr><td>计数模数</td><td>计数器一个完整循环所包含的状态数目</td><td><a class=\"jump\" href=\"#sec-3.4.1\" data-sec=\"sec-3.4.1\">3.4.1</a></td></tr><tr><td>同步二进制计数器</td><td>按二进制数顺序计数的同步计数器</td><td><a class=\"jump\" href=\"#sec-3.4.1\" data-sec=\"sec-3.4.1\">3.4.1</a></td></tr><tr><td>同步十进制计数器</td><td>按8421码顺序计满十个状态的同步计数器</td><td><a class=\"jump\" href=\"#sec-3.4.1\" data-sec=\"sec-3.4.1\">3.4.1</a></td></tr><tr><td>异步计数器</td><td>各触发器时钟不统一、状态逐级翻转的计数器</td><td><a class=\"jump\" href=\"#sec-3.4.2\" data-sec=\"sec-3.4.2\">3.4.2</a></td></tr><tr><td>纹波进位</td><td>把低位触发器输出直接作为高位时钟的方式</td><td><a class=\"jump\" href=\"#sec-3.4.2\" data-sec=\"sec-3.4.2\">3.4.2</a></td></tr><tr><td>异步二进制计数器</td><td>由T触发器逐级级联、按二分频方式计数的计数器</td><td><a class=\"jump\" href=\"#sec-3.4.2\" data-sec=\"sec-3.4.2\">3.4.2</a></td></tr><tr><td>环形计数器</td><td>末级输出直接反馈到首级、模等于触发器数的计数器</td><td><a class=\"jump\" href=\"#sec-3.4.4\" data-sec=\"sec-3.4.4\">3.4.4</a></td></tr><tr><td>扭环形计数器</td><td>末级反相后反馈、模为触发器数两倍的计数器</td><td><a class=\"jump\" href=\"#sec-3.4.4\" data-sec=\"sec-3.4.4\">3.4.4</a></td></tr><tr><td>集成计数器</td><td>带清零、置数、计数功能的标准化计数器芯片</td><td><a class=\"jump\" href=\"#sec-3.4.3\" data-sec=\"sec-3.4.3\">3.4.3</a></td></tr><tr><td>预置数</td><td>通过置数端把指定数据直接装入计数器的操作</td><td><a class=\"jump\" href=\"#sec-3.4.3\" data-sec=\"sec-3.4.3\">3.4.3</a></td></tr><tr><td>反馈清零法</td><td>用译码输出使计数器提前清零以获得任意模数</td><td><a class=\"jump\" href=\"#sec-3.4.3\" data-sec=\"sec-3.4.3\">3.4.3</a></td></tr><tr><td>反馈置数法</td><td>用进位或译码信号控制置数端改变计数起点</td><td><a class=\"jump\" href=\"#sec-3.4.3\" data-sec=\"sec-3.4.3\">3.4.3</a></td></tr><tr><td>预置值</td><td>预置法装入计数器的初值，等于最大模减目标模</td><td><a class=\"jump\" href=\"#sec-3.4.5\" data-sec=\"sec-3.4.5\">3.4.5</a></td></tr><tr><td>级联扩模</td><td>多片计数器串接以扩大计数模值的方式</td><td><a class=\"jump\" href=\"#sec-3.4.5\" data-sec=\"sec-3.4.5\">3.4.5</a></td></tr><tr><td>多谐振荡器</td><td>无需外加触发信号即可自激产生矩形波的电路</td><td><a class=\"jump\" href=\"#sec-3.5.1\" data-sec=\"sec-3.5.1\">3.5.1</a></td></tr><tr><td>石英晶体振荡器</td><td>用晶体谐振频率稳定输出频率的脉冲源电路</td><td><a class=\"jump\" href=\"#sec-3.5.1\" data-sec=\"sec-3.5.1\">3.5.1</a></td></tr><tr><td>节拍脉冲产生器</td><td>把时钟变换为多路依次出现的节拍信号的电路</td><td><a class=\"jump\" href=\"#sec-3.5.2\" data-sec=\"sec-3.5.2\">3.5.2</a></td></tr><tr><td>节拍</td><td>一个时钟周期内划分出的顺序工作时段</td><td><a class=\"jump\" href=\"#sec-3.5.2\" data-sec=\"sec-3.5.2\">3.5.2</a></td></tr><tr><td>状态转移表</td><td>列出各现态在输入作用下得到的次态和输出</td><td><a class=\"jump\" href=\"#sec-3.6.1\" data-sec=\"sec-3.6.1\">3.6.1</a></td></tr><tr><td>状态转移图</td><td>用圆圈表示状态、箭头表示转移方向的图形</td><td><a class=\"jump\" href=\"#sec-3.6.1\" data-sec=\"sec-3.6.1\">3.6.1</a></td></tr><tr><td>状态方程</td><td>由触发器输入逻辑式写出的次态表达式</td><td><a class=\"jump\" href=\"#sec-3.6.1\" data-sec=\"sec-3.6.1\">3.6.1</a></td></tr><tr><td>输出方程</td><td>表示输出与现态及输入之间关系的逻辑式</td><td><a class=\"jump\" href=\"#sec-3.6.1\" data-sec=\"sec-3.6.1\">3.6.1</a></td></tr><tr><td>同步时序电路分析</td><td>由电路逐级写出方程和状态表并归纳功能</td><td><a class=\"jump\" href=\"#sec-3.6.2\" data-sec=\"sec-3.6.2\">3.6.2</a></td></tr><tr><td>米利型电路</td><td>输出由现态和当前输入共同决定的时序电路</td><td><a class=\"jump\" href=\"#sec-3.6.3\" data-sec=\"sec-3.6.3\">3.6.3</a></td></tr><tr><td>摩尔型电路</td><td>输出只由现态决定的时序电路</td><td><a class=\"jump\" href=\"#sec-3.6.3\" data-sec=\"sec-3.6.3\">3.6.3</a></td></tr><tr><td>序列检测器</td><td>能识别输入码流中特定序列的时序电路</td><td><a class=\"jump\" href=\"#sec-3.6.2\" data-sec=\"sec-3.6.2\">3.6.2</a></td></tr><tr><td>状态化简</td><td>合并等价状态以减少状态总数的过程</td><td><a class=\"jump\" href=\"#sec-3.7.1\" data-sec=\"sec-3.7.1\">3.7.1</a></td></tr><tr><td>等价状态</td><td>在相同输入下输出相同且次态等价的现态</td><td><a class=\"jump\" href=\"#sec-3.7.1\" data-sec=\"sec-3.7.1\">3.7.1</a></td></tr><tr><td>激励表</td><td>由要求的现态与次态反推触发器输入端值的表</td><td><a class=\"jump\" href=\"#sec-3.7.1\" data-sec=\"sec-3.7.1\">3.7.1</a></td></tr><tr><td>原始状态图</td><td>由文字描述直接画出、尚未化简的状态转移图</td><td><a class=\"jump\" href=\"#sec-3.7.2\" data-sec=\"sec-3.7.2\">3.7.2</a></td></tr><tr><td>不完全确定状态表</td><td>存在未定义次态或输出的状态转移表</td><td><a class=\"jump\" href=\"#sec-3.7.2\" data-sec=\"sec-3.7.2\">3.7.2</a></td></tr><tr><td>状态编码</td><td>给化简后的每个状态指定一组二进制代码</td><td><a class=\"jump\" href=\"#sec-3.7.3\" data-sec=\"sec-3.7.3\">3.7.3</a></td></tr><tr><td>相邻编码</td><td>使相邻状态的代码只有一位不同的编码方案</td><td><a class=\"jump\" href=\"#sec-3.7.3\" data-sec=\"sec-3.7.3\">3.7.3</a></td></tr><tr><td>寄存器堆</td><td>多个寄存器统一编址、按地址选读选写的部件</td><td><a class=\"jump\" href=\"#sec-4.1.1\" data-sec=\"sec-4.1.1\">4.1.1</a></td></tr><tr><td>读写端口</td><td>寄存器堆用于读出数据或写入数据的通道</td><td><a class=\"jump\" href=\"#sec-4.1.1\" data-sec=\"sec-4.1.1\">4.1.1</a></td></tr><tr><td>寄存器队列</td><td>按先进先出规则存取数据的寄存器组</td><td><a class=\"jump\" href=\"#sec-4.1.2\" data-sec=\"sec-4.1.2\">4.1.2</a></td></tr><tr><td>先进先出（FIFO）</td><td>先写入的数据先被读出的存取规则</td><td><a class=\"jump\" href=\"#sec-4.1.2\" data-sec=\"sec-4.1.2\">4.1.2</a></td></tr><tr><td>寄存器堆栈</td><td>按后进先出规则存取数据的寄存器组</td><td><a class=\"jump\" href=\"#sec-4.1.3\" data-sec=\"sec-4.1.3\">4.1.3</a></td></tr><tr><td>双端口寄存器堆</td><td>有两套独立地址、可同周期读两个操作数的寄存器堆</td><td><a class=\"jump\" href=\"#sec-4.1.4\" data-sec=\"sec-4.1.4\">4.1.4</a></td></tr><tr><td>栈顶指针</td><td>指示堆栈当前可读写位置的计数器</td><td><a class=\"jump\" href=\"#sec-4.1.3\" data-sec=\"sec-4.1.3\">4.1.3</a></td></tr><tr><td>随机存取存储器（RAM）</td><td>可按地址随机读写任一存储单元的半导体存储器</td><td><a class=\"jump\" href=\"#sec-4.2.1\" data-sec=\"sec-4.2.1\">4.2.1</a></td></tr><tr><td>存储矩阵</td><td>由存储元按行列排列成的存储体阵列</td><td><a class=\"jump\" href=\"#sec-4.2.1\" data-sec=\"sec-4.2.1\">4.2.1</a></td></tr><tr><td>地址译码器</td><td>把地址代码译为选中某个存储单元控制信号的部件</td><td><a class=\"jump\" href=\"#sec-4.2.1\" data-sec=\"sec-4.2.1\">4.2.1</a></td></tr><tr><td>单译码</td><td>用全部地址位直接译出每一行选中信号的方式</td><td><a class=\"jump\" href=\"#sec-4.2.2\" data-sec=\"sec-4.2.2\">4.2.2</a></td></tr><tr><td>双译码</td><td>把地址分成行、列两组分别译码再交叉选中单元</td><td><a class=\"jump\" href=\"#sec-4.2.2\" data-sec=\"sec-4.2.2\">4.2.2</a></td></tr><tr><td>地址线</td><td>用于选择存储字、条数由字数决定的输入线</td><td><a class=\"jump\" href=\"#sec-4.2.5\" data-sec=\"sec-4.2.5\">4.2.5</a></td></tr><tr><td>静态随机存储器（SRAM）</td><td>用触发器作存储元、不需刷新的RAM</td><td><a class=\"jump\" href=\"#sec-4.2.3\" data-sec=\"sec-4.2.3\">4.2.3</a></td></tr><tr><td>存储元</td><td>存储器中存放一位二进制数据的单元电路</td><td><a class=\"jump\" href=\"#sec-4.2.3\" data-sec=\"sec-4.2.3\">4.2.3</a></td></tr><tr><td>动态随机存储器（DRAM）</td><td>靠电容电荷存储信息、需定期刷新的RAM</td><td><a class=\"jump\" href=\"#sec-4.2.4\" data-sec=\"sec-4.2.4\">4.2.4</a></td></tr><tr><td>刷新</td><td>定期给存储电容补充电荷以保持数据的过程</td><td><a class=\"jump\" href=\"#sec-4.2.4\" data-sec=\"sec-4.2.4\">4.2.4</a></td></tr><tr><td>行选通</td><td>锁存行地址并启动一次行操作的输入信号</td><td><a class=\"jump\" href=\"#sec-4.2.4\" data-sec=\"sec-4.2.4\">4.2.4</a></td></tr><tr><td>集中刷新</td><td>在一段时间内集中完成全部行刷新的方式</td><td><a class=\"jump\" href=\"#sec-4.2.4\" data-sec=\"sec-4.2.4\">4.2.4</a></td></tr><tr><td>掩模只读存储器（掩模ROM）</td><td>生产时由光刻掩模固定存储内容的只读存储器</td><td><a class=\"jump\" href=\"#sec-4.3.1\" data-sec=\"sec-4.3.1\">4.3.1</a></td></tr><tr><td>字线</td><td>ROM中选中某个存储字的一根连线</td><td><a class=\"jump\" href=\"#sec-4.3.1\" data-sec=\"sec-4.3.1\">4.3.1</a></td></tr><tr><td>可编程只读存储器（PROM）</td><td>用户可一次性写入内容的只读存储器</td><td><a class=\"jump\" href=\"#sec-4.3.2\" data-sec=\"sec-4.3.2\">4.3.2</a></td></tr><tr><td>可擦除可编程只读存储器（EPROM）</td><td>用紫外线擦除后可重新写入的只读存储器</td><td><a class=\"jump\" href=\"#sec-4.3.2\" data-sec=\"sec-4.3.2\">4.3.2</a></td></tr><tr><td>熔丝</td><td>PROM中靠烧断与否表示所存数据的易熔连线</td><td><a class=\"jump\" href=\"#sec-4.3.2\" data-sec=\"sec-4.3.2\">4.3.2</a></td></tr><tr><td>ROM实现逻辑</td><td>以地址为输入、按真值表写入内容的组合逻辑实现</td><td><a class=\"jump\" href=\"#sec-4.3.3\" data-sec=\"sec-4.3.3\">4.3.3</a></td></tr><tr><td>闪速存储器（FLASH）</td><td>可电擦除、按块重写的非易失性存储器</td><td><a class=\"jump\" href=\"#sec-4.4.1\" data-sec=\"sec-4.4.1\">4.4.1</a></td></tr><tr><td>浮栅</td><td>能长期俘获电子从而保存数据的栅极结构</td><td><a class=\"jump\" href=\"#sec-4.4.1\" data-sec=\"sec-4.4.1\">4.4.1</a></td></tr><tr><td>编程</td><td>向浮栅注入电子以改变存储元阈值的写入操作</td><td><a class=\"jump\" href=\"#sec-4.4.2\" data-sec=\"sec-4.4.2\">4.4.2</a></td></tr><tr><td>擦除</td><td>移走浮栅中的电子使存储块恢复初始状态</td><td><a class=\"jump\" href=\"#sec-4.4.2\" data-sec=\"sec-4.4.2\">4.4.2</a></td></tr><tr><td>擦写寿命</td><td>存储元可承受的擦除写入次数上限</td><td><a class=\"jump\" href=\"#sec-4.4.2\" data-sec=\"sec-4.4.2\">4.4.2</a></td></tr><tr><td>位扩展</td><td>多片芯片并联以增加每字位数的容量扩展方式</td><td><a class=\"jump\" href=\"#sec-4.5.1\" data-sec=\"sec-4.5.1\">4.5.1</a></td></tr><tr><td>共用地址线</td><td>位扩展中各芯片地址端全部并联的连接方式</td><td><a class=\"jump\" href=\"#sec-4.5.1\" data-sec=\"sec-4.5.1\">4.5.1</a></td></tr><tr><td>字扩展</td><td>用片选信号分时选中多片芯片以增加存储字数</td><td><a class=\"jump\" href=\"#sec-4.5.2\" data-sec=\"sec-4.5.2\">4.5.2</a></td></tr><tr><td>片选信号</td><td>地址译码输出中用来选中某一片芯片的信号</td><td><a class=\"jump\" href=\"#sec-4.5.2\" data-sec=\"sec-4.5.2\">4.5.2</a></td></tr><tr><td>可编程逻辑器件（PLD）</td><td>逻辑功能由用户编程决定的集成电路</td><td><a class=\"jump\" href=\"#sec-5.1.1\" data-sec=\"sec-5.1.1\">5.1.1</a></td></tr><tr><td>与阵列</td><td>器件中可编程产生各乘积项的阵列结构</td><td><a class=\"jump\" href=\"#sec-5.1.1\" data-sec=\"sec-5.1.1\">5.1.1</a></td></tr><tr><td>或阵列</td><td>器件中把各乘积项相或得到输出的阵列结构</td><td><a class=\"jump\" href=\"#sec-5.1.1\" data-sec=\"sec-5.1.1\">5.1.1</a></td></tr><tr><td>熔丝连接</td><td>未编程导通、编程烧断的一次性可编程连接</td><td><a class=\"jump\" href=\"#sec-5.1.3\" data-sec=\"sec-5.1.3\">5.1.3</a></td></tr><tr><td>反熔丝连接</td><td>未编程断开、编程击穿建立通路的一次性连接</td><td><a class=\"jump\" href=\"#sec-5.1.3\" data-sec=\"sec-5.1.3\">5.1.3</a></td></tr><tr><td>OC门</td><td>只能拉低输出、需外接上拉电阻的门电路</td><td><a class=\"jump\" href=\"#sec-5.1.3\" data-sec=\"sec-5.1.3\">5.1.3</a></td></tr><tr><td>复杂可编程逻辑器件（CPLD）</td><td>以与或阵列和集中互连构成的大规模PLD</td><td><a class=\"jump\" href=\"#sec-5.2.4\" data-sec=\"sec-5.2.4\">5.2.4</a></td></tr><tr><td>可编程阵列逻辑（PAL）</td><td>与阵列可编程、或阵列固定的PLD</td><td><a class=\"jump\" href=\"#sec-5.1.2\" data-sec=\"sec-5.1.2\">5.1.2</a></td></tr><tr><td>通用阵列逻辑（GAL）</td><td>带可编程输出宏单元、可反复改写的PLD</td><td><a class=\"jump\" href=\"#sec-5.1.2\" data-sec=\"sec-5.1.2\">5.1.2</a></td></tr><tr><td>简单可编程逻辑器件（SPLD）</td><td>与或阵列规模较小的一类PLD</td><td><a class=\"jump\" href=\"#sec-5.1.2\" data-sec=\"sec-5.1.2\">5.1.2</a></td></tr><tr><td>现场可编程门阵列（FPGA）</td><td>由可编程逻辑块和互连资源构成的芯片</td><td><a class=\"jump\" href=\"#sec-5.1.2\" data-sec=\"sec-5.1.2\">5.1.2</a></td></tr><tr><td>互连资源</td><td>FPGA中连接逻辑块与输入输出块的可编程布线</td><td><a class=\"jump\" href=\"#sec-5.2.1\" data-sec=\"sec-5.2.1\">5.2.1</a></td></tr><tr><td>可编程输入输出块（IOB）</td><td>提供芯片引脚与内部逻辑之间连接的单元</td><td><a class=\"jump\" href=\"#sec-5.2.1\" data-sec=\"sec-5.2.1\">5.2.1</a></td></tr><tr><td>可组态逻辑块（CLB）</td><td>FPGA中实现组合与时序逻辑的基本单元</td><td><a class=\"jump\" href=\"#sec-5.2.2\" data-sec=\"sec-5.2.2\">5.2.2</a></td></tr><tr><td>查找表（LUT）</td><td>用小容量存储表实现任意组合逻辑的单元</td><td><a class=\"jump\" href=\"#sec-5.2.2\" data-sec=\"sec-5.2.2\">5.2.2</a></td></tr><tr><td>分布式存储器</td><td>用查找表配置成的片内小容量存储资源</td><td><a class=\"jump\" href=\"#sec-5.2.2\" data-sec=\"sec-5.2.2\">5.2.2</a></td></tr><tr><td>SRAM型FPGA</td><td>用片内SRAM存放编程数据的可重配置FPGA</td><td><a class=\"jump\" href=\"#sec-5.2.3\" data-sec=\"sec-5.2.3\">5.2.3</a></td></tr><tr><td>配置数据</td><td>决定FPGA内部连线与逻辑功能的编程信息</td><td><a class=\"jump\" href=\"#sec-5.2.3\" data-sec=\"sec-5.2.3\">5.2.3</a></td></tr><tr><td>上电配置</td><td>每次上电后从外部存储器装入配置数据的过程</td><td><a class=\"jump\" href=\"#sec-5.2.3\" data-sec=\"sec-5.2.3\">5.2.3</a></td></tr><tr><td>在系统编程（ISP）</td><td>器件已焊在板上仍可改写其编程数据的方式</td><td><a class=\"jump\" href=\"#sec-5.3.2\" data-sec=\"sec-5.3.2\">5.3.2</a></td></tr><tr><td>边界扫描</td><td>经专用端口访问器件引脚与内部节点的测试技术</td><td><a class=\"jump\" href=\"#sec-5.3.2\" data-sec=\"sec-5.3.2\">5.3.2</a></td></tr><tr><td>JTAG接口</td><td>按IEEE 1149.1标准串行访问芯片的编程测试口</td><td><a class=\"jump\" href=\"#sec-5.3.2\" data-sec=\"sec-5.3.2\">5.3.2</a></td></tr><tr><td>硬件描述语言（HDL）</td><td>描述数字电路结构与行为的文本语言</td><td><a class=\"jump\" href=\"#sec-5.4.1\" data-sec=\"sec-5.4.1\">5.4.1</a></td></tr><tr><td>综合</td><td>把HDL描述转换为门级或查找表级网表的过程</td><td><a class=\"jump\" href=\"#sec-5.4.1\" data-sec=\"sec-5.4.1\">5.4.1</a></td></tr><tr><td>布局布线</td><td>把网表单元分配到芯片资源并完成连线的步骤</td><td><a class=\"jump\" href=\"#sec-5.4.1\" data-sec=\"sec-5.4.1\">5.4.1</a></td></tr><tr><td>实体</td><td>VHDL中说明器件端口名称与方向的描述部分</td><td><a class=\"jump\" href=\"#sec-5.5.1\" data-sec=\"sec-5.5.1\">5.5.1</a></td></tr><tr><td>结构体</td><td>VHDL中描述实体内部功能实现的说明部分</td><td><a class=\"jump\" href=\"#sec-5.5.1\" data-sec=\"sec-5.5.1\">5.5.1</a></td></tr><tr><td>进程</td><td>VHDL中被信号变化触发执行的并发语句块</td><td><a class=\"jump\" href=\"#sec-5.5.1\" data-sec=\"sec-5.5.1\">5.5.1</a></td></tr><tr><td>数字系统</td><td>由数据处理单元和控制单元构成的整体</td><td><a class=\"jump\" href=\"#sec-6.1.2\" data-sec=\"sec-6.1.2\">6.1.2</a></td></tr><tr><td>数据处理单元</td><td>完成数据运算、存储与传送的功能部件</td><td><a class=\"jump\" href=\"#sec-6.1.2\" data-sec=\"sec-6.1.2\">6.1.2</a></td></tr><tr><td>控制单元</td><td>按顺序发出控制信号协调各部件工作的部件</td><td><a class=\"jump\" href=\"#sec-6.1.2\" data-sec=\"sec-6.1.2\">6.1.2</a></td></tr><tr><td>总线</td><td>多个部件共同使用的一组数据传输线</td><td><a class=\"jump\" href=\"#sec-6.2.1\" data-sec=\"sec-6.2.1\">6.2.1</a></td></tr><tr><td>分时共享</td><td>同一时刻只允许一个部件向总线发送数据</td><td><a class=\"jump\" href=\"#sec-6.2.1\" data-sec=\"sec-6.2.1\">6.2.1</a></td></tr><tr><td>算法状态机（ASM）</td><td>用状态框与判断框描述控制器时序的图形</td><td><a class=\"jump\" href=\"#sec-6.3.2\" data-sec=\"sec-6.3.2\">6.3.2</a></td></tr><tr><td>算法流程图</td><td>由状态框、判断框和条件输出框组成的图</td><td><a class=\"jump\" href=\"#sec-6.3.2\" data-sec=\"sec-6.3.2\">6.3.2</a></td></tr><tr><td>状态框</td><td>ASM图中表示一个时钟周期内寄存器状态的框</td><td><a class=\"jump\" href=\"#sec-6.3.2\" data-sec=\"sec-6.3.2\">6.3.2</a></td></tr><tr><td>判断框</td><td>ASM图中按输入条件选择后继路径的菱形框</td><td><a class=\"jump\" href=\"#sec-6.3.2\" data-sec=\"sec-6.3.2\">6.3.2</a></td></tr><tr><td>控制器</td><td>按规定顺序产生控制信号的时序逻辑部件</td><td><a class=\"jump\" href=\"#sec-6.4.1\" data-sec=\"sec-6.4.1\">6.4.1</a></td></tr><tr><td>控制信号</td><td>指挥各功能部件执行具体操作的命令信号</td><td><a class=\"jump\" href=\"#sec-6.4.1\" data-sec=\"sec-6.4.1\">6.4.1</a></td></tr><tr><td>计数器型控制器</td><td>用计数器状态经译码产生控制信号的结构</td><td><a class=\"jump\" href=\"#sec-6.4.2\" data-sec=\"sec-6.4.2\">6.4.2</a></td></tr><tr><td>节拍分配</td><td>把时钟周期划分为若干顺序节拍的控制方式</td><td><a class=\"jump\" href=\"#sec-6.4.2\" data-sec=\"sec-6.4.2\">6.4.2</a></td></tr><tr><td>多路选择器型控制器</td><td>用选择器按状态和条件选通控制信号的结构</td><td><a class=\"jump\" href=\"#sec-6.4.3\" data-sec=\"sec-6.4.3\">6.4.3</a></td></tr><tr><td>条件选通</td><td>由选择器依据输入条件决定输出哪路控制信号</td><td><a class=\"jump\" href=\"#sec-6.4.3\" data-sec=\"sec-6.4.3\">6.4.3</a></td></tr><tr><td>定序型控制器</td><td>用状态寄存器配合组合逻辑产生控制信号的结构</td><td><a class=\"jump\" href=\"#sec-6.4.4\" data-sec=\"sec-6.4.4\">6.4.4</a></td></tr><tr><td>状态转移逻辑</td><td>决定控制器下一状态的组合逻辑部分</td><td><a class=\"jump\" href=\"#sec-6.4.4\" data-sec=\"sec-6.4.4\">6.4.4</a></td></tr><tr><td>微程序控制</td><td>把控制信号编成微指令序列逐条执行的控制方式</td><td><a class=\"jump\" href=\"#sec-6.5.1\" data-sec=\"sec-6.5.1\">6.5.1</a></td></tr><tr><td>微指令</td><td>一个时钟周期内同时发出的控制信号的集合</td><td><a class=\"jump\" href=\"#sec-6.5.1\" data-sec=\"sec-6.5.1\">6.5.1</a></td></tr><tr><td>微命令</td><td>微指令中每一位所对应的具体控制操作</td><td><a class=\"jump\" href=\"#sec-6.5.1\" data-sec=\"sec-6.5.1\">6.5.1</a></td></tr><tr><td>微程序</td><td>完成一条机器指令功能的一组微指令序列</td><td><a class=\"jump\" href=\"#sec-6.5.1\" data-sec=\"sec-6.5.1\">6.5.1</a></td></tr><tr><td>控制存储器</td><td>存放全部微程序的只读存储器</td><td><a class=\"jump\" href=\"#sec-6.5.2\" data-sec=\"sec-6.5.2\">6.5.2</a></td></tr><tr><td>微地址寄存器</td><td>存放当前待执行微指令地址的寄存器</td><td><a class=\"jump\" href=\"#sec-6.5.2\" data-sec=\"sec-6.5.2\">6.5.2</a></td></tr><tr><td>微指令格式</td><td>微指令中控制字段与顺序控制字段的编排方式</td><td><a class=\"jump\" href=\"#sec-6.5.2\" data-sec=\"sec-6.5.2\">6.5.2</a></td></tr><tr><td>采样</td><td>按等间隔时刻抽取模拟信号瞬时值的过程</td><td><a class=\"jump\" href=\"#sec-7.2.1\" data-sec=\"sec-7.2.1\">7.2.1</a></td></tr><tr><td>采样定理</td><td>采样频率必须不低于信号最高频率两倍的定理</td><td><a class=\"jump\" href=\"#sec-7.2.1\" data-sec=\"sec-7.2.1\">7.2.1</a></td></tr><tr><td>采样保持电路</td><td>在采样瞬间冻结输入电压供转换使用的电路</td><td><a class=\"jump\" href=\"#sec-7.1.3\" data-sec=\"sec-7.1.3\">7.1.3</a></td></tr><tr><td>孔径时间</td><td>从发出保持命令到采样开关真正断开的时间</td><td><a class=\"jump\" href=\"#sec-7.1.3\" data-sec=\"sec-7.1.3\">7.1.3</a></td></tr><tr><td>A/D转换器（ADC）</td><td>把模拟量转换为数字量的电子电路</td><td><a class=\"jump\" href=\"#sec-7.2.3\" data-sec=\"sec-7.2.3\">7.2.3</a></td></tr><tr><td>量化</td><td>把取样得到的连续幅值归入有限个离散电平</td><td><a class=\"jump\" href=\"#sec-7.2.3\" data-sec=\"sec-7.2.3\">7.2.3</a></td></tr><tr><td>逐次逼近型ADC</td><td>按二分比较逐步逼近输入模拟量的转换电路</td><td><a class=\"jump\" href=\"#sec-7.2.3\" data-sec=\"sec-7.2.3\">7.2.3</a></td></tr><tr><td>双积分型ADC</td><td>先后对输入和基准积分、用时间计数的转换电路</td><td><a class=\"jump\" href=\"#sec-7.2.5\" data-sec=\"sec-7.2.5\">7.2.5</a></td></tr><tr><td>D/A转换器（DAC）</td><td>把数字量转换为模拟量输出的电子电路</td><td><a class=\"jump\" href=\"#sec-7.3.2\" data-sec=\"sec-7.3.2\">7.3.2</a></td></tr><tr><td>R-2R T型网络</td><td>只用R和2R两种阻值产生二进制权电流的网络</td><td><a class=\"jump\" href=\"#sec-7.3.2\" data-sec=\"sec-7.3.2\">7.3.2</a></td></tr><tr><td>求和放大器</td><td>把各权电流相加并变换为输出电压的运放电路</td><td><a class=\"jump\" href=\"#sec-7.3.2\" data-sec=\"sec-7.3.2\">7.3.2</a></td></tr><tr><td>最低有效位（LSB）</td><td>相邻输入码对应的输出差，等于基准除以2的n次方</td><td><a class=\"jump\" href=\"#sec-7.3.4\" data-sec=\"sec-7.3.4\">7.3.4</a></td></tr><tr><td>满量程</td><td>最大输入码对应的输出，为2的n次方减1个LSB</td><td><a class=\"jump\" href=\"#sec-7.3.4\" data-sec=\"sec-7.3.4\">7.3.4</a></td></tr><tr><td>线网（wire）</td><td>表示元件间连线、需驱动且默认高阻的类型</td><td>A.5</td></tr><tr><td>寄存器（reg）</td><td>在过程块中赋值并保持最后一次赋值的类型</td><td>A.5</td></tr><tr><td>存储器数组</td><td>由多个同宽reg单元组成、按地址访问的数组</td><td>A.5</td></tr><tr><td>阻塞赋值</td><td>语句执行时立即完成、后续语句可见新值的赋值</td><td>A.8</td></tr><tr><td>非阻塞赋值</td><td>块结束时统一更新、避免顺序影响的赋值</td><td>A.8</td></tr><tr><td>casez语句</td><td>忽略z位、按通配比较的分支语句</td><td>A.9</td></tr><tr><td>门级原语</td><td>Verilog内置的与、或、非等门元件</td><td>A.10</td></tr><tr><td>有限状态机</td><td>用状态、转移和输出描述时序行为的模型</td><td>A.11</td></tr><tr><td>timescale</td><td>指定仿真时间单位与精度的编译指令</td><td>A.12</td></tr></tbody></table></div>"
				}
			]
		}
	]
};

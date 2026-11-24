`timescale 1ns / 1ps

module counter4_tb;

	reg clk = 1'b0;
	reg rst_n = 1'b0;
	wire [3:0] q;

	counter4 dut (
		.clk(clk),
		.rst_n(rst_n),
		.q(q)
	);

	// 10 ns 周期
	always #5 clk = ~clk;

	initial begin
		$timeformat(-9, 0, " ns", 0);
		$monitor("t=%t rst_n=%b q=%b (%0d)", $time, rst_n, q, q);
		#12 rst_n = 1'b1;
		#200 $finish;
	end

endmodule

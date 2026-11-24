`timescale 1ns / 1ps

module counter4 (
	input wire clk,
	input wire rst_n,
	output reg [3:0] q
);

	// 同步计数，异步复位；复位低有效
	always @(posedge clk or negedge rst_n) begin
		if (!rst_n) q <= 4'b0000;
		else q <= q + 1'b1;
	end

endmodule

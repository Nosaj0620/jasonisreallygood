//封装球类
function Ball(bx, by, bvx, bvy, br) {
	this.bx = bx;
	this.by = by;
	this.bvx = bvx;
	this.bvy = bvy;
	this.br = br;
}
//原型函数
Ball.prototype.move = function() {
	this.bx += this.bvx;
	this.by += this.bvy;
	//	if(this.bx<15 || this.bx> mc.width-15){
	//		this.bvx=  -this.bvx;
	//	}
	if(this.by < 15 || this.by > mc.height - 15) {
		this.bvy = -this.bvy;
		hitwall.currentTime = 0;
		hitwall.volume = 0.3;
		hitwall.play();
	}
	ctx.beginPath();
	ctx.fillStyle = "deepskyblue";
	ctx.arc(this.bx, this.by, 15, 0, 2 * pai);
	ctx.fill();
};
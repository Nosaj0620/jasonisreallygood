//玩家类
var pvy = 0;
var apv = 0;

function Player(py, pvy) {
	this.py = py;
	this.px = 50;
	this.pvy = pvy;
}
Player.prototype.draw = function() {
	this.py = this.py + this.pvy;
	if(this.py > mc.height - 110) {
		this.py = mc.height - 110;
	}
	if(this.py < 10) {
		this.py = 10;
	}
	ctx.beginPath();
	ctx.lineCap = "round";
	ctx.fillStyle = '#AA3A38';
	ctx.strokeStyle = '#AA3A38';
	ctx.moveTo(this.px, this.py);
	ctx.lineWidth = 15;
	ctx.lineTo(this.px, this.py + 100);
	//	ctx.fillRect(this.px, this.py, 15, 100);
	ctx.stroke();
	//	ctx.fill();
}

function Aiplayer(apy, apv) {
	this.apy = apy;
	this.apx = mc.width - 50;
	this.apv = apv;
}
Aiplayer.prototype.draw = function() {
	this.apy = this.apy + this.apv;
	if(this.apy > mc.height - 110) {
		this.apy = mc.height - 110;
	}
	if(this.apy < 10) {
		this.apy = 10;
	}
	ctx.beginPath();
	ctx.lineCap = "round";
	ctx.strokeStyle = '#2C7744';
	ctx.moveTo(this.apx, this.apy);
	ctx.lineWidth = -15;
	ctx.lineTo(this.apx, this.apy + 100);
	ctx.stroke();
}

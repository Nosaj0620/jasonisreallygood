var img = new Image();
img.src = 'img/wintext.png';
var img2 = new Image();
img2.src = 'img/losetext.png';

function winText() {
	ctx.drawImage(img, 80, nowY - 80, 100, 100);
	ctx.fillStyle = "deepskyblue"
	ctx.font = '20px Arial';
	ctx.fillText("i've got", 95, nowY - 45);
	ctx.fillText("you!", 100, nowY - 22)
	over.style.display = "block";
	otext.innerText = "你赢了"
}

function loseText() {
	ctx.drawImage(img2, mc.width - 150, anowY - 80, 100, 100);
	ctx.fillStyle = "yellow"
	ctx.font = '18px Arial';
	ctx.fillText("打得不错", mc.width - 138, anowY - 45);
	ctx.fillText("我很抱歉!", mc.width - 138, anowY - 22);
	over.style.display = "block";
	otext.innerText = "你输了"
}
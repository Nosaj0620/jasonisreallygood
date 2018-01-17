var playervsplayer = false;
var level = 700;
var levels = 5;
var speed = 1;
var speedx = 1;
var ballArr = [];
var aiArr = [];
var pArr = [];
var ballvx = rd(1, 100) > 50 ? -1 : 1,
	ballvy = rd(1, 2);
var nowY;
var anowY;
var bnowY;
var bnowX;
var ball = new Ball(593, 393, ballvx, ballvy, 15);
var p1 = new Player(100, pvy);
var aip = new Aiplayer(100, apv);
aiArr.push(aip);
pArr.push(p1);
ballArr.push(ball);
var start = document.getElementById("start");
var over = document.getElementById("over");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var otext = document.getElementById("overText")
var restart = document.getElementById("btn3");
var levelup = document.getElementById("btn4");
var levelText = 1;
var levelTitle = document.querySelector(".level");
var aiTimer;
btn1.onclick = function() {
	clearInterval(aiTimer);
	playervsplayer = false;
	start.style.display = "none";
	go();
	aiControl();
	humanControl();
	setTimeout(function() {
		bgm1.play();
	}, 200);
	bgm1.onended = function() {
		bgm2.play();
	}
}
btn2.onclick = function() {
	clearInterval(aiTimer);
	playervsplayer = true;
	start.style.display = "none";
	go();
	aiControl();
	humanControl();
	setTimeout(function() {
		bgm1.play();
	}, 200);
	bgm1.onended = function() {
		bgm2.play();
	}
	btn4.style.display = "none";
}
btn3.onclick = function() {
	ctx.clearRect(0, 0, mc.width, mc.height);
	start.style.display = "block";
	over.style.display = "none";
	btn4.style.display = "inline-block";
	ballvx = rd(1, 100) > 50 ? -1 : 1;
	ballvy = rd(1, 2);
	ball = new Ball(593, 393, ballvx, ballvy, 15);
	ballArr.push(ball);
	ballArr.shift();
	levels = 5;
	level = 700;
	levelText = 1;
	levelTitle.innerText = "当前电脑难度:" + levelText;

}
btn4.onclick = function() {
	ctx.clearRect(0, 0, mc.width, mc.height);
	over.style.display = "none";
	playervsplayer = false;
	start.style.display = "none";
	go();
	aiControl();
	humanControl();
	ballvx = rd(1, 100) > 50 ? -1 : 1;
	ballvy = rd(1, 2);
	ball = new Ball(593, 393, ballvx, ballvy, 15);
	ballArr.push(ball);
	ballArr.shift();
	levels += 1;
	level += 20;
	levelText += 1;
	setTimeout(function() {
		bgm1.play();
	}, 200);
	bgm1.onended = function() {
		bgm2.play();
	}
	levelTitle.innerText = "当前电脑难度:" + levelText;
}

function rd(x, y) {
	return Math.round(Math.random() * (y - x) + x);
}

function aiControl() {
	if(playervsplayer) {
		var move1 = function() {
			var ex = event || window.event;
			if(ex.keyCode == 40) {
				speed = -2;
				apv = 8;
				var aip = new Aiplayer(anowY, apv);
				aiArr.push(aip);
				aiArr.shift();
			}
			if(ex.keyCode == 38) {
				speed = 2;
				apv = -8;
				var aip = new Aiplayer(anowY, apv);
				aiArr.push(aip);
				aiArr.shift();
			}
		}
		var stay1 = function() {
			var e = event || window.event;
			if(e.keyCode == 38 || e.keyCode == 40) {
				apv = 0;
				//			speed =1;
				var aip = new Aiplayer(anowY, apv);
				aiArr.push(aip);
				aiArr.shift();
			}
		}
		window.addEventListener("keydown", move1);

		window.addEventListener("keyup", stay1);
	} else {
		aiTimer = setInterval(function() {
			if(apv == 0) {
				apv = rd(1, 2) == 1 ? apv + rd(1, 3) : apv - rd(1, 3);
			}
			if(apv > 0) {
				apv = apv - rd(1, 5);
			}
			if(apv < 0) {
				apv = apv + rd(1, 5);
			}
			var aip = new Aiplayer(anowY, apv);
			aiArr.push(aip);
			aiArr.shift();
		}, 300);

	}
}

function smartAI() {
	if(anowY + 40 >= bnowY) {
		apv = -levels;
		var aip = new Aiplayer(anowY, apv);
		aiArr.push(aip);
		aiArr.shift();
	}
	if(anowY + 40 <= bnowY) {
		apv = levels;
		var aip = new Aiplayer(anowY, apv);
		aiArr.push(aip);
		aiArr.shift();
	}

}

function humanControl() {
	var move2 = function() {
		var e = event || window.event;
		if(e.keyCode == 83) {
			speed = rd(-3, -1);
			speedx = rd(1, 3);
			pvy = 8;
			var p1 = new Player(nowY, pvy);
			pArr.push(p1);
			pArr.shift();
		}
		if(e.keyCode == 87) {
			speed = rd(1, 3);
			speedx = rd(1, 3);
			pvy = -8;
			var p1 = new Player(nowY, pvy);
			pArr.push(p1);
			pArr.shift();
		}
	}
	var stay2 = function() {
		var e = event || window.event;
		if(e.keyCode == 83 || e.keyCode == 87) {
			pvy = 0;
			var p1 = new Player(nowY, pvy);
			pArr.push(p1);
			pArr.shift();
		}

	}
	window.addEventListener("keydown", move2);
	window.addEventListener("keyup", stay2);

}

function hit() {
	if(ballArr[0].bx - ballArr[0].br < 65 && ballArr[0].bx + ballArr[0].br > 50 && ballArr[0].by - ballArr[0].br < pArr[0].py + 100 && ballArr[0].by + ballArr[0].br > pArr[0].py) {
		hitsd.currentTime = 0;
		hitsd.volume = 0.3;
		hitsd.play();
		ballvx = rd(1, 3);
		ballvy = -speed;
		var ball = new Ball(bnowX, bnowY, ballvx, ballvy, 15);
		ballArr.push(ball);
		ballArr.shift();
	}
}

function enemyhit() {
	if(ballArr[0].bx + ballArr[0].br > aiArr[0].apx - 15 && ballArr[0].bx - ballArr[0].br < aiArr[0].apx && ballArr[0].by - ballArr[0].br < aiArr[0].apy + 100 && ballArr[0].by + ballArr[0].br > aiArr[0].apy) {
		hitsd.currentTime = 0;
		hitsd.volume = 0.3;
		hitsd.play();
		ballvx = rd(-3, -1);
		ballvy = -speed;
		var ball = new Ball(bnowX, bnowY, ballvx, ballvy, 15);
		ballArr.push(ball);
		ballArr.shift();
	}
}

function go() {
	var runTimer = setInterval(function() {
		ctx.clearRect(0, 0, mc.width, mc.height);
		Dbline();
		pArr[0].draw();
		aiArr[0].draw();
		nowY = pArr[0].py;
		anowY = aiArr[0].apy;
		bnowY = ballArr[0].by;
		bnowX = ballArr[0].bx;
		if(playervsplayer == false) {
			if(ballArr[0].bx > level) {
				smartAI();
			}
		}

		if(ballArr[0].bx > -15) {
			hit();
			enemyhit();
			ballArr[0].move();

		} else {
			bgm1.pause();
			bgm1.currentTime = 0;
			bgm2.pause();
			bgm2.currentTime = 0;
			die.currentTime = 0;
			die.play();
			loseText();
			clearInterval(aiTimer);
			clearInterval(runTimer);

		}
		if(ballArr[0].bx < mc.width + 15) {
			hit();
			enemyhit();
			ballArr[0].move();

		} else {
			bgm1.pause();
			bgm1.currentTime = 0;
			bgm2.pause();
			bgm2.currentTime = 0;
			winsd.currentTime = 0;
			winsd.play();
			winText();
			clearInterval(aiTimer);
			clearInterval(runTimer);

		}
	}, 5);
}
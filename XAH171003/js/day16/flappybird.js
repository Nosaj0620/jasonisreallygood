//神鸟操作模块
var gameOver = document.querySelector('#gameOver');
var mainWindow = document.getElementById("mainWindow"); //获取游戏主体界面
var bird = document.getElementById("bird"); //获取游戏开始后的小鸟
var downTimer; //定义下落计时器
var upTimer; //定义点击跳跃计时器
var createPipeTimer; //声明一个不停创建管道的计时器
var startModule = document.getElementById('gameStart'); //整个开始游戏模块
var startBtn = document.getElementById('button'); //开始游戏的两个按键
var startBtnItem = document.querySelector('#button>img:nth-child(1)'); //start按键
var scoreNum = 0; //柱子的位置判断加分
var scoreDiv = document.getElementById("score"); //获取黑色分数块
var pipeWrap = document.querySelector('#pipeWrap'); //获取放置管道的腹肌元素
var scroll = document.querySelector('#scroll') //获取滚动的地面
var record = document.getElementById('record'); //分数
var recordBest = document.getElementById("recordBest"); //最高分数
var recordArr = []; //放分数记录的函数
var okBtn = document.getElementById('okBtn');
var flag;
var bgm = document.getElementById("bgm");
var bgm2 = document.getElementById("bgm2");
var dead = document.getElementById("dead");
var flyFly = document.getElementById("flyFly");
var Space = document.getElementById("Space");
var scoreGet = document.getElementById("scoreGet");
var speed = 1;
var onceUp;

function doNothing() {
	window.event.returnValue = false;
	return false;
}

function birdDown() { //小鸟随时会下落
	bird.style.transition = '';
	downTimer = setInterval(function() { //用计时器给小鸟的高度累加
		bird.style.top = bird.offsetTop + speed + 'px';
		//		bird.style.background = 'url(img/down_bird0.png)';
		if(bird.offsetTop + bird.offsetHeight >= mainWindow.offsetHeight - 57) { //当小鸟触地时清除计时器
			birdDead();
		}
	}, 7);
	bird.style.animation = "birdDown 0.7s cubic-bezier(1, 0.53, 1, 1.26) forwards  running"; //大鹏俯冲
	//bird.style.animation = "birdDown2 0.2s  alternate infinite running";//大鹏展翅
	document.onkeydown = function() {
		var e = event || window.event;
		if(e.keyCode == 32) {
			speed = 3;

			audioPlay(Space);
			setTimeout(function() {
				speed = 1;
			}, 300);
		}

	}
	mainWindow.oncontextmenu = function() {
		audioPlay(flyFly);
		onceUp = 60; //小鸟跳动的幅度
		var nowTop = bird.offsetTop; //每点一次鼠标获取当前top值
		var endTop = nowTop - onceUp; //计算出每次跳动之后的top值
		clearInterval(downTimer); //点击的时候清除下落计时器
		clearInterval(upTimer); //点击的时候清除上次跳动的计时器(不清会导致神鸟飞天)
		upTimer = setInterval(function() { //写一个小鸟跳动的计时器
			bird.style.top = bird.offsetTop - 6 + 'px'; //小鸟高度一点一点变高
			bird.style.animation = "birdDown3 0.3s    forwards running";
			bird.style.background = "url(img/up_bird0.png)";
			if(bird.offsetTop < 0) {
				clearInterval(upTimer);
				bird.style.top = 0;
				birdDown();
			}
			if(bird.offsetTop <= endTop) { //神鸟跳一下清除一下计时器,然后让他继续下落
				clearInterval(upTimer);
				birdDown();
			}
		}, 15);
	}

	mainWindow.onclick = function() {
		audioPlay(flyFly);
		onceUp = 50; //小鸟跳动的幅度
		var nowTop = bird.offsetTop; //每点一次鼠标获取当前top值
		var endTop = nowTop - onceUp; //计算出每次跳动之后的top值
		clearInterval(downTimer); //点击的时候清除下落计时器
		clearInterval(upTimer); //点击的时候清除上次跳动的计时器(不清会导致神鸟飞天)
		upTimer = setInterval(function() { //写一个小鸟跳动的计时器
			bird.style.top = bird.offsetTop - 5 + 'px'; //小鸟高度一点一点变高
			bird.style.animation = "birdDown3 0.3s    forwards running";
			bird.style.background = "url(img/up_bird0.png)";
			if(bird.offsetTop < 0) {
				clearInterval(upTimer);
				bird.style.top = 0;
				birdDown();
			}
			if(bird.offsetTop <= endTop) { //神鸟跳一下清除一下计时器,然后让他继续下落
				clearInterval(upTimer);
				birdDown();
			}
		}, 17);
	}
}

//游戏开始模块
startBtnItem.onclick = function() {
		startGone();
		creatingPipe(); //每隔一段时间，创建一个管道
		birdDown(); //鸟降落
		scoreNum = 0;

	}
	//游戏重新开始模块
okBtn.onclick = function() {
		restart();
	}
	//粗又硬大柱子模块
function randomNum(x, y) { //随机数
	return Math.round(Math.random() * (y - x) + x);
}
//管道创建过程
function createPipe() {
	var onePipe = document.createElement('div'); //创建管道
	onePipe.className = 'pipe';
	var topHeight = randomNum(60, 240); //上管道高度(随机)
	var bottomHeight = 330 - topHeight; //下管道高度(计算)
	onePipe.innerHTML = '<div class = "topItem" style = "height:' + topHeight + 'px;"><div class = "topHead" ></div></div><div class = "bottomItem" style = "height:' + bottomHeight + 'px;"><div class = "bottomHead" ></div></div>';
	pipeWrap.appendChild(onePipe);
	var topItem = document.querySelector('.topItem');
	onePipe.leftTimer = setInterval(function() { //每个管道都有自己的left值累减的计时器
		onePipe.style.left = onePipe.offsetLeft - 2 + "px";
		birdHit();
		//管道移除时，清除
		if(onePipe.offsetLeft == -onePipe.offsetWidth) {
			clearInterval(onePipe.leftTimer); //清除计时器
			onePipe.remove(); //移除此节点
		}
		if(onePipe.offsetLeft == bird.offsetLeft) {
			scoreNum += 1;
			audioPlay(scoreGet);
			//记分模块 
			calcScore();
		}
	}, 5);

}
//碰撞事件
function birdHit() {
	var pipeArr = document.querySelectorAll('.pipe>div');
	for(var i = 0; i < pipeArr.length; i++) {
		judgeHit(bird, pipeArr[i]);
	}
}
//碰撞检测
function judgeHit(a, b) {
	if(a.offsetLeft + a.offsetWidth >= b.parentNode.offsetLeft && a.offsetLeft <= b.parentNode.offsetLeft + b.parentNode.offsetWidth && a.offsetTop + a.offsetHeight >= b.offsetTop && a.offsetTop <= b.offsetTop + b.offsetHeight) {
		birdFall();
		birdDead();
	}
}

function calcScore() { //计算分数
	var scoreArr = String(scoreNum).split(''); //把加起来的分数分割成单个字符串
	var scoreDivArr = score.getElementsByTagName('img');

	score.innerHTML = '';
	for(var i = 0; i < scoreArr.length; i++) {
		var newImg = new Image(); //创建图片
		newImg.className = 'Img';
		newImg.src = 'img/' + scoreArr[i] + '.jpg'; //拼接路径
		scoreDiv.appendChild(newImg);
	}
}

//创建管道的动作
function creatingPipe() {
	createPipeTimer = setInterval(function() {
		createPipe();
		mainWindow.style.animation = "";
	}, 650);
}
//保存分数
function saveRecord(a) {
	recordArr.push(a);
}

function getMax(a) { //求所有分数数组里的最大值
	if(a.length > 1) {
		for(var i = 0; i < a.length; i++) {
			var max = max > a[i] ? max : a[i];

		}
		return max;
	} else {
		return scoreNum;
	}
}

function birdDead() {
	audioPlay(dead);
	bgm2.pause();
	mainWindow.style.animation = "flash 0.3s running ";
	clearInterval(downTimer);
	clearInterval(upTimer);
	pipeWrap.innerHTML = '';
	clearInterval(createPipeTimer);
	mainWindow.onclick = null; //鸟死不能复生
	mainWindow.oncontextmenu = null; //鸟死不能复生
	scroll.style.animation = "scrollMove 3s infinite linear paused";
	gameOver.style.display = "block";
	saveRecord(scoreNum);
	record.innerText = scoreNum;
	var BestS = localStorage.getItem('Best');
	BestS = BestS > scoreNum ? BestS : scoreNum;
	localStorage.setItem('Best', BestS);
	recordBest.innerText = BestS;
}

function startGone() {
	//点击start  开始模块消失
	bgm.pause();
	audioPlay(bgm2);
	startModule.style.display = 'none';
	startBtn.style.display = 'none';
	bird.style.display = "block";
	bird.style.left = "70px";
	bird.style.top = "250px";
}

function restart() {
	bgm.play();
	//	startModule.style.display = 'block';
	//	startBtn.style.display = 'flex';
	//	gameOver.style.display = "none";
	//	bird.style.display = "none";
	//	pipeWrap.innerHTML = '';
	//	scoreDiv.innerHTML = "<img src='img/0.jpg' alt=''>";
	//	scroll.style.animation = "scrollMove 3s infinite linear running";
	history.go(0);

}

function birdFall() {
	bird.style.top = mainWindow.offsetHeight - bird.offsetHeight - 57 + "px";
	bird.style.transition = '1s linear';
}
var isPlaying = false;

function audioPlay(audioName) {
	if(isPlaying) {
		audioName.pause();
		audioName.style.display = 'none';

	} else {
		audioName.scr = audioName.id + '.wav';
		audioName.play();
	}
}
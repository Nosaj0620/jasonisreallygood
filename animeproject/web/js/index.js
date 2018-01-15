var navText = $('.navdl');
var navBig = $('#nav>li>a');

//喵喵喵?
$('.auto>img').on('mouseover', function() {
	$('.auto>img').addClass('animated tada');
	setTimeout(function() {
		$('.auto>img').removeClass('animated tada');
	}, 1000);
});
//导航的hover border效果
$.each(navText, function(i, item) {
	$(item).on('mouseover', function() {

		$(navBig[i + 1]).addClass('borderOn');
	});
	$(item).on('mouseout', function() {
		$(navBig[i + 1]).removeClass('borderOn');
	});
	$(navBig[i + 1]).on('mouseover', function() {
		$(navBig[i + 1]).addClass('navFloat');
	});
	$(navBig[i + 1]).on('mouseout', function() {
		$(navBig[i + 1]).removeClass('navFloat');
	});
});
//swiper.stopAutoplay();
//swiper.startAutoplay();
//轮播图
var swiper = new Swiper('.swiper-container', {
	loop: true,
	autoplayDisableOnInteraction: false,
	roundLengths: true,
	direction: 'horizontal',
	autoplay: {
		delay: 2500,
		stopOnLastSlide: false,
		disableOnInteraction: true,

	},
	speed: 1000,
	pagination: {
		el: '.swiper-pagination',
		type: 'progressbar',

	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

//var swiper2 = new Swiper('.swiper-container2', {
//	loop: true,
//	spaceBetween: 30,
//	effect: 'fade',
//	autoplay: {
//		delay: 2500,
//		stopOnLastSlide: false,
//		disableOnInteraction: true,
//	},
//});
window.onresize = function() {
	var windowWidth = $(window).width();
	if(windowWidth <= 1208) {
		$('#moveText1>p').css('font-size', '30px');
		$('#moveText1>h2').css('font-size', '50px');
		$('#moveText2>p').css('font-size', '30px');
		$('#moveText2>h2').css('font-size', '50px');
	} else if(windowWidth > 1208) {
		$('#moveText1>p').css('font-size', '50px');
		$('#moveText1>h2').css('font-size', '70px');
		$('#moveText2>p').css('font-size', '50px');
		$('#moveText2>h2').css('font-size', '70px');
	}
	if(windowWidth < 877) {
		$('#moveText1>p').css('font-size', '25px');
		$('#moveText1>h2').css('font-size', '25px');
		$('#moveText2>p').css('font-size', '25px');
		$('#moveText2>h2').css('font-size', '25px');
	}
	if(windowWidth <= 900) {
		$('.logoText').css('margin-left', '44%');
		$('.navMenu').css('display', 'block');
		$('#nav').css('display', 'none');
		$('#ewm').css({
			'display': 'none'
		});
		$('.section2Left').css({
			'margin-left': '20%',
		});
	} else if(windowWidth > 900) {
		$('.navMenu').css('display', 'none');
		$('.logoText').css('margin-left', '15%');
		$('#nav').css('display', 'block');
		$('#ewm').css({
			'display': 'block'
		});
		$('.section2Left').css({
			'margin-left': '0',
		});

	}
	if(windowWidth <= 500) {
		$('#moveText1>p').css('font-size', '30px');
		$('#moveText1>h2').css('font-size', '20px');
		$('#moveText2>p').css('font-size', '30px');
		$('#moveText2>h2').css('font-size', '20px');
	}

	//	else if(windowWidth> 896){
	//		$('#moveText1>h2').css('font-size', '70px');
	//	}
}

function fff() {
	var windowWidth = $(window).width();
	
	if(windowWidth <= 1208) {
		$('#moveText1>p').css('font-size', '30px');
		$('#moveText1>h2').css('font-size', '50px');
		$('#moveText2>p').css('font-size', '30px');
		$('#moveText2>h2').css('font-size', '50px');
	} else if(windowWidth > 1208) {
		$('#moveText1>p').css('font-size', '50px');
		$('#moveText1>h2').css('font-size', '70px');
		$('#moveText2>p').css('font-size', '50px');
		$('#moveText2>h2').css('font-size', '70px');
	}
	if(windowWidth < 877) {
		$('#moveText1>p').css('font-size', '25px');
		$('#moveText1>h2').css('font-size', '25px');
		$('#moveText2>p').css('font-size', '25px');
		$('#moveText2>h2').css('font-size', '25px');
		
	}
	if(windowWidth <= 900) {
		$('.logoText').css('margin-left', '44%');
		$('.navMenu').css('display', 'block');
		$('#nav').css('display', 'none');
		$('#ewm').css({
			'display': 'none'
		});
		$('.section2Left').css({
			'margin-left': '20%',
		});
		$('.arrowLeft').css({
			'transform':'scale(0.7)'
		});
	} else if(windowWidth > 900) {
		$('.navMenu').css('display', 'none');
		$('.logoText').css('margin-left', '15%');
		$('#nav').css('display', 'block');
		$('#ewm').css({
			'display': 'block'
		});
		$('.section2Left').css({
			'margin-left': '0',
		});
		

	}
	if(windowWidth <= 500) {
		$('#moveText1>p').css('font-size', '30px');
		$('#moveText1>h2').css('font-size', '20px');
		$('#moveText2>p').css('font-size', '30px');
		$('#moveText2>h2').css('font-size', '20px');
	}
	if(windowWidth <= 1208) {
		$('#moveText1>p').css('font-size', '30px');
		$('#moveText1>h2').css('font-size', '50px');
		$('#moveText2>p').css('font-size', '30px');
		$('#moveText2>h2').css('font-size', '50px');
	} else if(windowWidth > 1208) {
		$('#moveText1>p').css('font-size', '50px');
		$('#moveText1>h2').css('font-size', '70px');
		$('#moveText2>p').css('font-size', '50px');
		$('#moveText2>h2').css('font-size', '70px');
	}
	if(windowWidth < 877) {
		$('#moveText1>p').css('font-size', '25px');
		$('#moveText1>h2').css('font-size', '25px');
		$('#moveText2>p').css('font-size', '25px');
		$('#moveText2>h2').css('font-size', '25px');
	}
	if(windowWidth <= 500) {
		$('#moveText1>p').css('font-size', '30px');
		$('#moveText1>h2').css('font-size', '20px');
		$('#moveText2>p').css('font-size', '30px');
		$('#moveText2>h2').css('font-size', '20px');
	}
}

	//if($(window).width() >= 1520) {
	//	$(document).ready(function() {
	//		var nowPage = 0;
	//		var lock = true; //函数节流的锁  
	//		$(document).mousewheel(function(event, delta) {
	//			//				console.log(event);
	//			nowPage = nowPage - delta;
	//			if(nowPage < 0) { //如果nowpPage小于0，就让它=0
	//				nowPage = 0;
	//			}
	//			if(nowPage > 4) { //如果nowPage大于4,就让它=4
	//				nowPage = 4;
	//			}
	//			console.log(nowPage);
	//		})
	//	})
	//} else {
	//	console.log('浏览器窗口太小');
	//}
$('.playVideo').on('click', function() {
	$('.playVideo').css('display', 'none');
	$('.videoBg').trigger('play');
	$('.circleBox').css('display', 'none');
})
$('.videoBg').on('click', function() {
	$('.playVideo').css('display', 'block');
	$('.videoBg').trigger('pause');
	$('.circleBox').css('display', 'block');
})
$('#moveText1').on('mouseover', function() {
	$('.section2>img').addClass('greySky');
});
//console.log($('.section2>img'));
$('#moveText1').on('mouseout', function() {
	$('.section2>img').removeClass('greySky');
});
var flag = true;

$('.navMenu').on('click', function() {
	if(flag) {
		$('#login').css({
			'display': 'block',
		});
		flag = false;
	} else {
		$('#login').css({
			'display': 'none',

		});
		flag = true;
	}
});
$('.loginMain>.glyphicon').on('click', function() {
	if(flag) {
		$('.loginMain').css('right', '0');
		$('.loginMain>.glyphicon').css('transform', 'rotate(180deg)');
		flag = false;
	} else {
		$('.loginMain').css('right', '-50px');
		$('.loginMain>.glyphicon').css('transform', 'rotate(0deg)');
		flag = true;
	}
});
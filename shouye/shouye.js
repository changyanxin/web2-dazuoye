//顶部悬浮
window.onload=function(){
  var top=document.getElementById("top");
  window.onscroll=function(){
    var dis=document.documentElement.scrollTop || document.body.scrollTop;
    if(dis>100){
      top.style.position="fixed";
    }
    else{
      top.style.position="static";
    }
  }
}

// 中间轮播
var mmt = document.getElementById('mmt');		var slider = document.getElementById('slider');
var left = document.getElementById('left');
var right = document.getElementById('right');
var oNavlist = document.getElementById('nav').children;
var index = 1; //打开页面生效的图片的下标为1
var timer;
var isMoving = false;
mmt.onmouseover = function () {
	clearInterval(timer); //图片停止滚动
}
mmt.onmouseout = function () {
	timer = setInterval(next, 300); //图片开始接着滚动
}
function next() {
	if (isMoving) {
		return;
	}
	isMoving = true;
	index++;
	navmove();
	animate(slider, {
		left: -805 * index
		}, function () {
			if (index == 7) {
				slider.style.left = '-805px';
				index = 1;
			}
			isMoving = false;
	});
}

function prev() {
	if (isMoving) {
		return;
	}
	isMoving = true;
	index--;
	navmove();
	animate(slider, {
		left: -805 * index
		}, function () {
			if (index == 0) {
				slider.style.left = '-4830px';
				index = 7;
			}
			isMoving = false;
		});
}
//按钮点击切换图片事件
for (var i = 0; i < oNavlist.length; i++) {
	oNavlist[i].index = i;
	oNavlist[i].onclick = function () {
		index = this.index + 1;
		navmove();
		animate(slider, {
			left: -805 * index
		});
	}
}
//图片切换时按钮样式跟着切换
function navmove() {
	for (var i = 0; i < oNavlist.length; i++) {
		oNavlist[i].className = "";
	}
	if (index > 6) {
		oNavlist[0].className = "active";
	} else if (index <= 0) {
		oNavlist[5].className = "active";
	} else {
		oNavlist[index - 1].className = "active";
	}
}
//页面打开时自动滚动切换
timer = setInterval(next, 2000);

function getStyle(obj, attr) { //返回值带有单位px
  	if (obj.currentStyle) {
  		return obj.currentStyle[attr];
  	} else {
  		return getComputedStyle(obj, null)[attr];
  	}
}

function animate(obj, json, callback) {
  	clearInterval(obj.timer);
  	obj.timer = setInterval(function () {
  		var flag = true;
  		for (var attr in json) {
  			(function (attr) {
  				if (attr == "opacity") {
  					var now = parseInt(getStyle(obj, attr) * 100);
  					var dest = json[attr] * 100;
  				} else {
  					var now = parseInt(getStyle(obj, attr));
  					var dest = json[attr];
  				}
  				var speed = (dest - now) / 8;
  				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
  				if (now != dest) {
  					flag = false;
  					if (attr == "opacity") {
  						obj.style[attr] = (now + speed) / 100;
  					} else {
  						obj.style[attr] = now + speed + "px";
  					}
  				}
  			})(attr);
  		}
  		if (flag) {
  			clearInterval(obj.timer);
  			callback && callback(); //如果回调函数存在，就调用回调函数
  		}
  	}, 30);
  }

// 右侧轮播
// var mrm = document.getElementById("mrm");
// var list = mrm.children;
// function show(){
// 	var top = mrm.offsetTop - 3;
// 	mrm.style.top = top +"px";
// 	if(mrm.offsetBottom == 0){
// 		mrm.style.top = 0 +"px";
// 	}
// }
// var t=setInterval(show,30);
var ul = document.getElementById("mrm1");
function show() {
    var top = ul.offsetTop - 3;
    ul.style.top = top + "px";
     if (-1 * ul.offsetTop >= ul.offsetHeight-300) {
         ul.style.top = 0;
     }
    // if(top == 0.5*offsetHeight){
    // 	ul.style.top=0;
    // }
}
var t = setInterval(show, 20);
ul.onmouseout=function(){
	clearInterval(t);
}
ul.onmouseover=function(){
	t=setInterval(show,20);
}

//下拉菜单动态效果
var select = document.getElementById("select");
var options = document.getElementsByTagName("option");
var charge = document.getElementById("charge");
var index = select.selectedIndex;
var txt = select.options[index].text;
charge.innerHTML = txt;

// 右侧固定
var r1 = document.getElementById('r1');
r1.onmouseover = function(){
    animate(r1,{right:0,top:75,opacity:100});
}
r1.onmouseout = function(){
    animate(r1,{right:-80,top:75,opacity:100});
}

var r2 = document.getElementById('r2');
r2.onmouseover = function(){
    animate(r2,{right:0,top:200,opacity:100});
}
r2.onmouseout = function(){
    animate(r2,{right:-80,top:200,opacity:100});
}

var r3 = document.getElementById('r3');
var r33 = document.getElementById('r33');
r3.onmouseover = function(){
    animate(r3,{right:0,top:350,opacity:100});
    r33.setAttribute('src',"img1/erwei.png");
    r33.style.marginTop = "3px";
}
r3.onmouseout = function(){
    animate(r3,{right:-80 ,top:350,opacity:100});
    r33.setAttribute('src',"img1/serwei.png");
    r33.style.marginTop = "36px";
}

var r4 = document.getElementById('r4');
r4.onmouseover = function(){
    animate(r4,{right:0,top:500,opacity:100});
}
r4.onmouseout = function(){
    animate(r4,{right:-80,top:500,opacity:100});
}     

// 放大镜开始
var B1 = document.getElementById('B1');
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var big = document.getElementById('big');
var Img = document.getElementById('Img');

img1.onmouseover = function () {
    big.style.display = 'block';
    img2.style.display = 'block';
}
img1.onmouseout = function () {
    big.style.display = 'none';
    img2.style.display = 'none';
}
img1.onmousemove = function (ev) {
    var ev = ev || window.event;

    var oL = ev.clientX - B1.offsetLeft - big.offsetWidth / 2;
    var oT = ev.clientY - B1.offsetTop - big.offsetHeight / 2;

    var oMaxw = img1.offsetWidth - big.offsetWidth;
    var oMaxh = img1.offsetHeight - big.offsetHeight;
    oL = oL > oMaxw ? oMaxw : oL < 0 ? 0 : oL;
    oT = oT > oMaxh ? oMaxh : oT < 0 ? 0 : oT;
    big.style.left = oL + 'px';
    big.style.top = oT + 'px';
    var scale = img2.offsetWidth / big.offsetWidth;
    Img.style.left = -scale * oL +22 + 'px'
    Img.style.top = -scale * oT +33 + 'px'
}
// 点击显示
var m51 = document.getElementById('m51');
var m52 = document.getElementById('m52');
var m53 = document.getElementById('m53');
var m54 = document.getElementById('m54');
var m41 = document.getElementById('m41');

m52.onmouseover = function(){
	m52.style.border = "1px solid #ff9003";
	m53.style.border = "1px solid #ffffff";
	m41.src = "img1/pp0.jpeg";
	Img.src = "img1/pp0.jpeg";
}
m53.onmouseover = function(){
	m53.style.border = "1px solid #ff9003";
	m52.style.border = "1px solid #ffffff";
	m41.src = "img1/pp1.jpeg";
	Img.src = "img1/pp1.jpeg";
}
m51.onclick = function(){
	m52.style.border = "1px solid #ff9003";
	m53.style.border = "1px solid #ffffff";
	m41.src = "img1/pp0.jpeg";
	Img.src = "img1/pp0.jpeg";
}
m54.onclick = function(){
	m53.style.border = "1px solid #ff9003";
	m52.style.border = "1px solid #ffffff";
	m41.src = "img1/pp1.jpeg";
	Img.src = "img1/pp1.jpeg";
}
// 点击含量
var fi2 = document.getElementById('fi2');/*150*/
var fi3 = document.getElementById('fi3');/*200*/
var e2 = document.getElementById('e2');/*e2*/
var fi4 = document.getElementById('fi4');/*150图*/
var fi5 = document.getElementById('fi5');/*200图*/

fi2.onclick = function(){
	fi2.style.border = "1px solid #ff0066";
	//fi2.style.borderRadius = "3px";
	fi3.style.border = "1px solid #ffffff";
	fi4.src = "img1/duigou.png";
	fi5.src = "";
	e2.innerHTML = "150ml";
}
fi3.onclick = function(){
	fi2.style.border = "1px solid #ffffff";
	fi3.style.border = "1px solid #ff0066";
	fi3.style.borderRadius = "3px";
	fi5.src = "img1/duigou.png";
	fi4.src = "";/*fi4*/
	e2.innerHTML = "200ml";
}
//点击数量
var s2 = document.getElementById('s2');
var s3 = document.getElementById('s3');
var s4 = document.getElementById('s4');

s2.onclick = function(){
	var i = s3.value;
	if(i>1){
		--i;
		s3.value = i;
		s2.style.cursor = "pointer";
	}else{
		s3.value = 1;
		s2.style.cursor = "not-shopowed";
	}
}
s4.onclick = function(){
	var i = s3.value;
	if(i<4){
		++i;
		s3.value = i;
		s4.style.cursor = "pointer";
	}else{
		s3.value = 5;
		s4.style.cursor = "not-shopowed";
	}
}
// 加入购物车
var shop2 = document.getElementById('shop2');
var n2 = document.getElementById('n2');
var shop = document.getElementById('shop');
var shop1 = document.getElementById('shop1');
var shop4 = document.getElementById('shop4');
n2.onclick = function(){
    shop.style.display = "block";
    shop1.style.display = "block";
}
shop2.onclick = function(){
	shop.style.display = "none";
	shop1.style.display = "none";
}
shop4.onclick = function(){
	shop.style.display = "none";
	shop1.style.display = "none";
}

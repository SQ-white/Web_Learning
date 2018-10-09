

//把所有电影的标题存为一个数组


var h2 = document.getElementsByTagName("h2");
var array = [];
var l = h2.length;
for(var i = 0,l=h2.length;i<l;i++){
	array.push(h2[i].id);
}

console.log(111);

//document.getElementsByTagName("h2").forEach(function(e){
//	e.style.color = "red";
//});

var colorArray = new Array("red","black");
var colorNum = 0;

function changeColor(){
	console.log(111);
	for(var i=0;i<l;i++){
	document.getElementsByTagName("h2")[i].style.color = colorArray[colorNum];
}
	colorNum++;
	colorNum = colorNum%2;
	var colorTime = setTimeout("changeColor()",10000);
}


function changeOrder(){
	var movie_names = $('num1','num2','num3','num4','num5','num6','num7','num8');
	var p = "反序处理结果："+("\n");
	for(var i=0;i<movie_names.length;i++){
		var a = movie_names.length - i - 1;
		var num = movie_names.length - i;
		p = p + num + "." + movie_names[a].innerHTML + ("\n");
	}
	alert(p);
}











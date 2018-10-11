

//把所有电影的标题存为一个数组


var h2 = document.getElementsByTagName("h2");
var array = [];
var l = h2.length;
for(var i = 0,l=h2.length;i<l;i++){
	array.push(h2[i].id);
}


var colorArray = new Array("red","black");
var colorNum = 0;


//逐个变化颜色

function change(){
	for(var i=0;i<l;i++){
		var t = i*1000;
		(function(i) {
			setTimeout(function a(){
				console.log(i);
				document.getElementsByTagName("h2")[i].style.color = colorArray[colorNum];	  
			},t);
		})(i)
	}
}


//每隔10s电影标题颜色逐个从红色变黑色

function changeColor(){
	change();
	colorNum++;
	colorNum = colorNum%2;
	var colorTime = setTimeout("changeColor()",10000);
}



//改变颜色的傻瓜做法

//function red(){
//	setTimeout("document.getElementById('num1').style.color = 'red'",1000);
//    setTimeout("document.getElementById('num2').style.color = 'red'",2000);
//    setTimeout("document.getElementById('num3').style.color = 'red'",3000);
//	setTimeout("document.getElementById('num4').style.color = 'red'",4000);
//	setTimeout("document.getElementById('num5').style.color = 'red'",5000);
//	setTimeout("document.getElementById('num6').style.color = 'red'",6000);
//	setTimeout("document.getElementById('num7').style.color = 'red'",7000);
//	setTimeout("document.getElementById('num8').style.color = 'red'",8000);
//}
//
//function black(){
//	setTimeout("document.getElementById('num1').style.color = 'black'",1000);
//    setTimeout("document.getElementById('num2').style.color = 'black'",2000);
//    setTimeout("document.getElementById('num3').style.color = 'black'",3000);
//	setTimeout("document.getElementById('num4').style.color = 'black'",4000);
//    setTimeout("document.getElementById('num5').style.color = 'black'",5000);
//    setTimeout("document.getElementById('num6').style.color = 'black'",6000);
//	setTimeout("document.getElementById('num7').style.color = 'black'",7000);
//    setTimeout("document.getElementById('num8').style.color = 'black'",8000);
//}

//var i=0;
//
//function changeColor(){
//	i++;
//	var t=i%2;
//	console.log(t);
//	if(t==1){
//		red();
//	}
//	if(t==0){
//		black();
//	}
//	var color = setTimeout("changeColor()",8000);
//	
//}




//function changeColor(){
////	change();
//	setTimeout("document.getElementById('num1').style.color = 'red'",2000);
//	setTimeout("document.getElementById('num2').style.color = 'red'",4000);
//	setTimeout("document.getElementById('num3').style.color = 'red'",6000);
//	colorNum++;
//	colorNum = colorNum%2;
////	setTimeout("changeColor()",1000);
//	
//}

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












// 
"use strict";


// 快速排序算法

function quick_sort(a,left,right){
	var l = left;
	var r = right;
	var key = a[left];

	if(left >= right){
		return;
	}

	while(l < r){
		while(a[r] > key && l<r){
			r--;
		}
		while(a[l] <= key && l<r){
			l++;
		}
		if(l < r){
			var temp = a[l];
			a[l] = a[r];
			a[r] = temp;
		}
	}
	a[left] = a[l];
	a[l] = key;
	quick_sort(a,left,l-1);
	quick_sort(a,l+1,right);
}



//点击排序按钮时，文本显示排序前和排序后的数组

document.getElementById('submit').onclick = function(){
	var a = stringToArray(document.getElementById("enterArray").value) ;
    document.getElementById('input').innerHTML=a;
    console.log(a);
    quick_sort(a,0,a.length-1);
    document.getElementById('output').innerHTML = a;
    console.log(a);
};


//将输入框的字符串转换为数组

function stringToArray(str){
	var array = new Array();
	var arr = str.split(',');
	for(var i=0;i<arr.length;i++){
		array.push(parseFloat(arr[i]));
	}
	return array;
}

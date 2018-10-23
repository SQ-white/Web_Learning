function add(){
	var newli = document.createElement("li");
	var newinput = document.createElement("input");
//	var content = document.getElementById("add_content").value;
	var content = $("add_content").value;
	if(content == ""){
		alert("待办事项不能为空");
	}
	else{
		newinput.setAttribute("type","checkbox");
		newinput.setAttribute("name","box");
		newinput.setAttribute("id","card");
//		newinput.type="checkbox";
//		newinput.name = "box";
		newli.appendChild(newinput);
		newli.appendChild(document.createTextNode(content));
//		document.getElementById("list").appendChild(newli);
		$("list").appendChild(newli);
		newli.className = "card";
	}
	
}


function select_all(){
	var allValue = document.getElementsByName("box");
	//console.log(allValue.length);
	for(var i=0;i<allValue.length;i++){
		if(allValue[i].type == "checkbox")
			allValue[i].checked = true;
	}
}

function deselect_all(){
	var allValue = document.getElementsByName("box");
	for(var i=0;i<allValue.length;i++){
		if(allValue[i].type == "checkbox")
			allValue[i].checked = false;
	}
}

function move(){
	var allValue = document.getElementsByName("box");
//	var myp = document.getElementsByTagName('p')[0];
//	var removed = document.body.removeChild(myp);
	var tmp_bool = false;
	for(var i=0;i<allValue.length;i++){
		if(allValue[i].type == "checkbox" && allValue[i].name == 'box' && allValue[i].checked == true){
			tmp_bool = true;
			break;
		}
	}
	if(!tmp_bool){
		alert("请选择记录！");
		return;
	}
	if(confirm("确定要删除记录吗？")){
		
			for(var i=allValue.length-1;i>=0;i--){
				//千万不要从0开始到4，因为这样子的话当你删掉第一个的时候，第二个就会顺位变成0，那你就删不到他了。。。
				console.log(i);
				//console.log(allValue.length);
				if(allValue[i].type == "checkbox" && allValue[i].name == 'box' && allValue[i].checked == true){
					
					//allValue[i].parentNode.removeChild(allValue[i]); 如果加上这一行，删掉了这个复选框，下面那一句就没有办法找到复选框的父节点了
					var l = allValue[i].parentNode;
					l.parentNode.removeChild(l);	
				}
				
	}
	}
}

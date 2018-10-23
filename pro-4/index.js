// JavaScript Document

//这家iKON公司一共有7名雇员
//名字："B.I","Bobby","Jay","JU-NE","DK","SONG","CHAN"
//工资分别为：7000,6000,5000,4000,3000,2000,1000
//经理A、B、C："B.I","Jay","SONG"
//经理A的下属：Bobby,Jay,JU-NE,DK,SONG,CHAN
//经理B的下属：JU-NE，DK，CHAN
//经理C的下属：CHAN
//换言之
//Bobby,Jay,JU-NE,DK,SONG,CHAN的上司：B.I
//JU-NE，DK，CHAN的上司：Jay
//CHAN的上司：SONG


//原型继承与属性拷贝的混合应用 p195

function objectPlus(o,stuff){
	var n;
	function F(){}
	F.prototype = o;
	n = new F();
	n.uber = o;

	for(var i in stuff){
		n[i] = stuff[i];
	}
	return n;
}

var iKON = ["B.I","Bobby","Jay","JU-NE","DK","SONG","CHAN"];
var money = [7000,6000,5000,4000,3000,2000,1000];
var team_A = ["Bobby","Jay","JU-NE","DK","SONG","CHAN"];
var team_B = ["JU-NE","DK","CHAN"];
var list = [];   //存放employee对象的数组


//定义Employee对象

for(var i in money){
	var Employee = {
	name:iKON[i],
	salary:money[i],
	show:function(){
		return this.name + " " + this.salary;
	}
};
	list.push(Employee);
}


//定义Manager对象

var Manager_A = objectPlus(list[0],{
	interiors:team_A,
	getInteriors:function(){
		return this.uber.name + "的下属是：" + this.interiors;
	}
})

var Manager_B = objectPlus(list[2],{
	interiors:team_B,
	getInteriors:function(){
		return this.uber.name + "的下属是：" + this.interiors;
	}
})

var Manager_C = objectPlus(list[5],{
	interiors:"CHAN",
	getInteriors:function(){
		return this.uber.name + "的下属是：" + this.interiors;
	}
})

//定义Secretary对象

var Secretary_A = objectPlus(team_A,{
	superior:"B.I",
	getSuperior:function(){
		return team_A + "的上司是：" + this.superior;
	}
})

var Secretary_B = objectPlus(team_B,{
	superior:"Jay",
	getSuperior:function(){
		return team_B + "的上司是：" + this.superior;
	}
})

var Secretary_C = objectPlus(list[6],{
	superior:"SONG",
	getSuperior:function(){
		return this.uber.name + "的上司是：" + this.superior;
	}
})


//测试代码
//var a = Manager_A;
//a.getInteriors();
//var b = Manager_B;
//b.getInteriors();
//var c = Manager_C;
//c.getInteriors();
//var sa = Secretary_A;
//sa.getSuperior();
//var sb = Secretary_B;
//sb.getSuperior();
//var sc = Secretary_C;
//sc.getSuperior();
//var l = list;
//l;






class ball(){
	var tab=document.getElementById("tablero");
	var clr;
	var ctx;
	var cty;
	var rad;
	var vx,vy;
	var maxctx=tab.height-2*rad;
	var maxcty=tab.width-2*rad;
	constructor (){
		clr=rndclr();
		rad=Math.floor(Math.rnd()*25)+25;
		vx=Math.floor(Math.rnd()*10)+1;
		vy=Math.floor(Math.rnd()*10)+1;
		ctx=rad+Math.floor(Math.rnd()*maxctx);
		cty=rad+Math.floor(Math.rnd()*maxcty);
	}
	function draw(){
		cir=document.getElementById("tablero").createElement("circle");
		document.getElementById("tablero").appendChild(cir);
		cir.cx=ctx+"";
		cir.cy=cty+"";
		cir.fill=clr;
	}
	function collide1(tab){
		if (rad>=ctx=<maxctx){
		}else{
			setvelx();
		}
	}
	function rndclr(){
		var num=Math.floor(Math.rnd()*3)+1;
		switch(num){
			case 1: return "red";
			case 2: return "yellow";
			case 3: return "blue";
		}
	}
	//function setcolor(){}
	//function setradio(){}
	function setvelx(){
		var vl=Math.floor(Math.rnd()*10)+1;
		if(ctx=<maxctx){
			vl=vl*-1;
		}
		return vl;
	}
	function setvely(){
		var vl=Math.floor(Math.rnd()*10)+1;
		if(cty=<maxcty){
			vl=vl*-1;
		}
		return vl;
	}
}
public class ball(){
	var tab=document.getElementById("tablero");
	var id;
	var clr;
	var ctx;
	var cty;
	var rad;
	var maxctx=tab.height-2*rad;
	var maxcty=tab.width-2*rad;
	constructor (){
		clr="black";
		id="base";
		rad=10;
		ctx=rad+Math.floor(Math.random()*maxctx);
		cty=rad+Math.floor(Math.random()*maxcty);
	}
	function draw(){
		cir=document.getElementById("tablero").createElement("circle");
		document.getElementById("tablero").appendChild(cir);
		cir.cx=ctx+"";
		cir.cy=cty+"";
		cir.r=rad+"";
		cir.fill=clr;
	}
	function collide(){
	}
}
public class enemy() extends ball{
	var tab=document.getElementById("tablero");
	var clr;
	var id;
	var ctx;
	var cty;
	var rad;
	var vx,vy;
	var maxctx=tab.height-2*rad;
	var maxcty=tab.width-2*rad;
	constructor (id){
		clr=rndclr();
		id=id;
		rad=Math.floor(Math.rnd()*25)+25;
		vx=Math.floor(Math.rnd()*10)+1;
		vy=Math.floor(Math.rnd()*10)+1;
		ctx=rad+Math.floor(Math.rnd()*maxctx);
		cty=rad+Math.floor(Math.rnd()*maxcty);
	}
	function collide1(tab){
		if (rad>=ctx=<maxctx){
		}else{
			setvelx();
		}
		if (rad>=cty=<maxcty){
		}else{
			setvely();
		}
	}
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
	//function setradio(){}
}


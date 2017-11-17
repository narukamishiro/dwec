public class ball(){
	var tab=document.getElementById("tablero");
	var id;
	var clr;
	var ctx;
	var cty;
	var rad;
	var crd;
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
	function getcrd(){
		crd=new array[];
		var cod;
		var x;
		var y;
		var g=0;
		do{
			x=rad*Math.cos(g)+ctx;
			y=rad*Math.sin(g)+cty;
			cod=new array[x,y];
			crd.push(cod);
			g=g+45;
		}while (g<=360);
		return crd;
	}
	function collide(){
	}
}



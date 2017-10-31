class Carta{
	var palo;
	var num;
	var valor;
	var disp;
	constructor(pl,nm){
		this.palo=pl;
		this.num=nm;
		this.valor=this.getValor(nm);
		this.disp=true;
	}
	getnum(){
		switch(num){
			case 1: return " el as ";break;
			case 10:return " el "+num+" ";break;
			case 11:return " el sota ";break;
			case 12:return " la reina ";break;
			case 13:return " el rey ";break;
		}
	}
	getpalo(){
		switch(palo){
			case 1: return "de picas";break;
			case 2: return "de corazones";break;
			case 3: return "de rombos";break;
			case 4: return "de treboles";break;
		}	
	}
	getvalor(){
		switch(num){
			case 1:
				var op=prompt("el valor predeteminado es 11 pero si quieres puede ser 1 ¿aceptas el trato?(s/n)"):
				if(op=="s"){
					return 1;
				}else{
					return 11;
				}
				break;
			case 10: return num;break;
			case 13: return 10;break;
		}
	}
	sacar(){
		disp=false;
	}
	getdisp(){
		return disp;
	}
}
class jugador{
	var nombre;
	var puntuacion;
	var cartas;
	constructor(nmb){
		this nombre=nmb;
		this puntuacion=0;
		this cartas=new array();
	}
	añadir(cart){
		if(puntuacion<21){
			cartas.push(cart);
			setpuntuacion();
			return "";
		}else{
			console.log("no puedes pedir mas cartas");
			return "er";
			
		}
		
	}
	setpuntuacion(){
		puntuacion=0;
		for(x=0;x<cartas.length;x++){
			puntuacion=puntuacion+cartas[x].getvalor();
		}
	}
	setdisp(){
		disp=true;
	}
	getnombre(){
		return puntuacion;
	}
	getPuntuacion(){
		return puntuacion;
	}
}
class crupier extends jugador{
	pedir(cart){
		if(puntuacion<18){
			cartas.push(cart);
		}else{
			console.log("no puedes pedir mas cartas");
		}
		
	}
}
class blackjack(){
	var jug;
	var crp;
	var baraja;
	constructor(){
		this jug=new jugador("bad luck brian");
		this crp=new crupier("trollface master");
		baraja=new array();
	}
	constructor(nmb){
		this jug=new jugador(nmb);
		this crp=new crupier("trollface master");
		baraja=new array();
	}
	rellenar(){
		for(x=1;x<=4;x++){
			for(y=1;y<=13;y++){
				baraja.push(new Carta(x,y));
			}
		}
	}
	resultado(){
		var pjg=jug.getPuntuacion();
		var pcr=crupier.getPuntuacion();
		if(pcr<=pjg<=21 || pjg<=21<pcr){
			console.log("has ganado/ you win");
		}else{
			console.log("has perdido/ you lose");
		}
	}
	sacarCartajg(){
		var rndnm;
		var crt;
		do{
			rndnm=Math.floor(Math.random()*52+1);
			crt=baraja[rndnm];
		}while(crt.getdisp()=false);
		console.log("has salido "+crt.getnum()+crt.getpalo());
		if(jug.añadir()=="er"){
			crt.setdisp();
		}
		
	}
	sacarCartaCrp(){
		var rndnm;
		var crt;
		do{
			rndnm=Math.floor(Math.random()*52+1);
			crt=baraja[rndnm];
		}while(baraja[rndnm].getdisp()=false);
		console.log("ha salido "+crt.getnum()+crt.getpalo());
	}
	juego(){
		var rp="";
		do{
			sacarCartajg();
			rp=prompt("tu puntuacion hasta ahora es "+jug.getPuntuacion()+" ¿quieres sacar otra carta? (s/n)");
		}while(jug.getPuntuacion()<21 & rp=="s");
		do{
			sacarCartaCrp();
		}while(crp.getPuntuacion<18);
		resultado();
	}
	
}
function maxfn(){
	max=0;
	nm1=prompt("primer numero:");
	nm2=prompt("segundo numero:");
	nm3=prompt("tercer numero:");
	nm4=prompt("cuarto numero:");
	if(max<nm1){
		max=nm1;
	}
	if(max<nm2){
		max=nm2;
	}
	if(max<nm3){
		max=nm3;
	}
	if(max<nm4){
		max=nm4;
	}
	document.body.innerHTML="el maximo entre estos 4 numeros ("+num1+","+num2+","+num3+","+num4+") es: "+max;
}
function dado(){
	rndnm=Math.rnd()*5+1:
	rndnm=Math.round(rndnm);
	return rndnm;
}
function serdad(){
	tir=prompt("indiquen numero de tiradas");
	cnt1=0;
	cnt2=0;
	cnt3=0;
	cnt4=0;
	cnt5=0;
	cnt6=0;
	for(x=0;x<tir;x++){
		rnd=dado();
		switch(rnd){
			case 1:cnt1++;break;
			case 2:cnt2++;break;
			case 3:cnt3++;break;
			case 4:cnt4++;break;
			case 5:cnt5++;break;
			case 6:cnt6++;break;
		}
	}
	document.body.innerHTML="el resultado despues de lanzar un dado "+tir+" veces ha sido de: "+cnt1+" 1 //"
	+cnt2+" 2 //"+cnt3+" 3 //"+cnt4+" 4 //"+cnt5+" 5 //"+cnt6+" 6.";
}
function potencia(base,exp){
	if(exp>1){
		return base * potencia(base,exp-1);
	}else{
		return 1;
	}
}
function factorial(nm){
	fac=1;
	if(nm>1){
		fac=fac*factorial(nm-1);
	}
	return fac;
}
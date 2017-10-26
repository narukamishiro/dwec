function dado(){
	rndnum=Math.random()*6+1;
	rndnum=Math.floor(rndnum);
	return rndnum;
}
function parimpar(){
	nm=0;
	base=new array();
	par=new array();
	impar=new array();
	for(x=0;x<1000;x++){
		nm=Math.floor(Math.random()+1000+1);
		base.push(nm);	
	}
	for each (var nm in base){
		if(nm%2==0){
			par.push(nm);
		}else{
			impar.push(nm);
		}
	}
	console.log("pares:");
	for(x=0;x<par.length;x++){
		console.log(par[x]+","); 
	}
	console.log("impares:");
	for(x=0;x<impar.length;x++){
		console.log(impar[x]+","); 
	}
}
function allo(arr,num){
	for(x=0;x<10;x++){
		arr[x]=0;
	}
}
function sum1(arr,num){
	for(x=0;x<arr.lenght;x++){
		arr[x]=arr[x]+num;
	}
}
function show(arr){
	for(x=0;x<arr.lenght;x++){
		console.log(arr[x]+" ")
	}
}
function simudadv1(){
	var num=prompt("introduzca numero tiradas");
	var rn=[];
	var tot=0;
	var cont2=0;
	var cont3=0;
	var cont4=0;
	var cont5=0;
	var cont6=0;
	var cont7=0;
	var cont8=0;
	var cont9=0;
	var cont10=0;
	var cont11=0;
	var cont12=0;
	for(x=0;x<num;x++){
		var ale=dado();
		rn.push(ale);
		if(x%2==0){
			for(y=0;y<rn.length;y++){
				tot=tot+rn[y];
			}
		}
		switch(tot){
			case 2:cont2++;break;
			case 3:cont3++;break;
			case 4:cont4++;break;
			case 5:cont5++;break;
			case 6:cont6++;break;
			case 7:cont7++;break;
			case 8:cont8++;break;
			case 9:cont9++;break;
			case 10:cont10++;break;
			case 11:cont1++;break;
			case 12:cont12++;break;
		}
		tot=0;
		rn[];
	}
	document.getElementById("pri").innerHTML="de "+num+" tiradas ha salido :<br>"+cont2 +" combinaciones de 2<br>"+cont3 +" combinaciones de 3<br>"+cont4 +" combinaciones de 4<br>"+cont5 +" combinaciones de 5<br>"+cont6 +" combinaciones de 6<br>"+cont7 +" combinaciones de 7<br>"+cont8 +" combinaciones de 8<br>"+cont9 +" combinaciones de 9<br>"+cont10 +" combinaciones de 10<br>"+cont11 +" combinaciones de 11<br>"+cont12 +" combinaciones de 12<br>";
}
simudadv1();
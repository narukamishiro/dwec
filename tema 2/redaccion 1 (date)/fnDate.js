var cont=60;
//ejercicio 1
function date1(){
	var d=new Date();
	document.write("ano actual:"+d.getFullYear()+"<br>");
	document.write("mes actual:"+d.getMonth()+"<br>");
	document.write("dia actual:"+d.getDay()+"<br>");
	document.write("hora actual:"+d.getHours()+"<br>");
	document.write("minutos actuales:"+d.getMinutes()+"<br>");
	document.write("segundos actuales:"+d.getSeconds()+"<br>");
}
// ejercicio 2
function date2(){
	var d=new Date();
	var dhoy=d;
	var d85=d.setDate(85);
	var d187=d.setDate(-187);
	var dres=new date(d85.getDate()-d187.getdate());
	document.write(d.setdate(d85+2*365));
	document.write(d.setdate(d85+2*365).getDate());
	document.write(drest.getdate());
}
function chrono(){
	
	document.write(cont+"<br>");
	cont--;
	if(cont>=0){
		setTimeout(chrono,1000);
	}
}
function reloj(){
	document.cle;
	f=new Date();
	hor=f.getHours();
	min=f.getMinutes();
	seg=f.getSeconds();
	mend=hor+":"+min+":"+seg;
	document.body.innerHTML=mend;
	setTimeout(reloj,1000);
}
//date1();
//date2();
//chrono(60);
reloj()

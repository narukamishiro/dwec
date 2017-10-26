function click(){
	alert("¿para que tocas?");
}
function gps(event){
	var mnx=document.getElementById("px");
	var mny=document.getElementById("py");
	mnx.innerHTML="posicion x: "+event.screenX;
	mny.innerHTML="posicion y: "+event.screenY;
}
function createtb(){
	var cod="<table id='tb' border='1'>";
	var n=1;
	for(x=1;x<=100;x++){
		cod=cod+"<tr>";
		for(y=1;y<=100;y++){
			cod=cod+"<td id="+n+" ></td>";
			n++;
		}
		cod=cod+"</tr>";
	}
	cod=cod+"</table>";
	return cod;
}
function pintv1(event){
	if(event.shiftKey){
		event.target.style.backgroundColor='blue';
	}
	if(event.ctrlKey){
		event.target.style.backgroundColor='red';
	}
	if(event.wich==99){
		event.target.style.backgroundColor='#FFFFFF';
	}
	if(event.wich==97){
		for(z=1;z<=100;z++){
			for(p=1;p<=100;p++){
				n=100*(z-1)+p;
				document.getElementById(n).style.backgroundColor='#FFFFFF';
			}
		}
	}
}

//ejercicio 1
/*
window.onclick=click;
*/
// ejercicio 2
//document.addEventListener("mousemove",gps);
//window.onload;
//ejercicio 4 & 5
document.body.innerHTML=createtb();
	for(z=1;z<=100;z++){
	for(p=1;p<=100;p++){
		n=100*(z-1)+p;
		document.getElementById(n).addEventListener("mousemove",pintv1);
	}
}
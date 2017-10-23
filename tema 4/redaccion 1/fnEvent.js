function click(){
	alert("¿para que tocas?");
}
function gps(event){
	var mnx=document.getElementById("px");
	var mny=document.getElementById("py");
	mnx.innerHTML="posicion x: "+event.screenX;
	mny.innerHTML="posicion y: "+event.screenY;
}

//ejercicio 1
/*
window.onclick=click;
*/
// ejercicio 2
window.onload;
document.getElementById("gps").addEventListener("onmousemove",gps);
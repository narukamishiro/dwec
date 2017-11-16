function ejer1(){
	var list= document.getElementsByTagName("a");
	var nmenl=list.length;
	var hpeli=list[nmenl-1-1].href;
	var hgoo=0;
	for(x=0;x<nmenl;x++){
		if(list[x].href){
			hgoo++;
		}
	}
	var ter=document.getElementById("ter").getElementsByTagName("a").length;
	console.log("num enlace: "+nmenl);
	console.log("enlace pelitumo: "+hpeli);
	console.log("enlace google: "+hgoo);
	console.log("enlace tercer parrafo: "+ter);
}
function ejer4(){
	var it=document.getElementsByTagName("li").length;
	var nli=document.createElement("li");
	var cox=document.createTextNode("item"+it);
	nli.appendChild(cox);
	var cu=document.getElementById("list");
	document.body.insertBefore(nli,cu);
}
function ejer5(){
	var nli=document.createElement("li");
	var cox=document.createTextNode("item"+it);
	nli.appendChild(cox);
	var cu=document.getElementById("list");
	document.body.insertBefore(nli,cu);
}
window.onload=ejer1;
document.getElementById("btn").addEventListener("click",ejer4);
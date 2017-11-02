function ejer1(){
	var list= document.getElementsByTagName(a);
	var nmenl=list.length;
	var hpeli=list[length-1-1].href;
	var hgoo=0;
	for(x=0;x<nmenl-1;x++){
		if(list[x].href=="google"){
			hgoo++;
		}
	}
	var ter=document.getElementById("ter").getElementsByTagName(a).length;
}
function ejer4(){
	var it=document.getElementById("list").getElementsByTagName("li").length;
	var nli=document.createElement("li");
	var cox="item"+it+1;
	nli.appemdChild(cox);
	var cu=document.getElementById("list");
	document.body.insertBefore(nli,cu);
}
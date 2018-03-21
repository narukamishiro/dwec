function incol(event){
	var cl=event.target.innerHTML+"";
	document.body.style.backgroundColor=cl;
}
function outcol(event){
	document.body.style.backgroundColor="#FFFFFF";
}
var tds=document.getElementsByTagName("td");
for(x=0;x<tds.length;x++){
	tds[x].addEventListener("mouseenter",incol);
}
document.getElementById("tb").addEventListener("mouseleave",outcol);
function gps(event){
	tp="posicion: "+event.screenX+","+event.screenY;
	var newp = document.createElement("p"); 
  var newContent = document.createTextNode(tp);
  newp.appendChild(newContent);
  var id="p"+(document.getElementsByTagName("p")+1);
  newp.id=id;
  var currentDiv;
	if(document.getElementsByTagName("p")==0){
		currentDiv=document.getElementById("canvas");
	}else{
		currentDiv=document.getElementById("p"+document.getElementsByTagName("p"))
	}
  document.body.insertBefore(newp, currentDiv);
}
document.getElementById("canvas").addEventListener("click",gps);
window.onload;
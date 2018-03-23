function addRow(id,pos,dt){
	var tb=document.getElementById(id);
	var row=document.createElement("tr");
	var list=tb.getElementsByTagName("td");
	var p;
	var txt;
	var o;
	for(x=0;x<dt.length;x++){
		p=document.createElement("td");
		txt=document.createElement(dt[x]+"");
		p.apprendChild(txt);
		row.apprendChild(p);
	}
	o=list[pos-1];
	tb.insertBefore(p,o);
}
function setRow(id,pos,dt){
	
}
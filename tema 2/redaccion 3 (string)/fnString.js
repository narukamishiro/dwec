function inviertecadena(cad){
	var bs=cad;
	var ltr=" ";
	var rs=" ";
	var lg=bs.length;
	for(x=0;x<lg;x++){
		ltr=bs.charAt(lg-x-1);
		rs=rs+ltr;
	}
	return rs;
}
function inviertepal(cad){
	var bs=cad;
	var ltr=" ";
	var rs=new array{};
	var p="";
	var min=0;
	var max=0;
	var cont=0;
	var lg=bs.length;
	for(x=0;x<lg;x++){
		ltr=bs.charAt(lg-x-1);
		max=x;
		if(ltr==" "){
			for(y=min;y<max-1;y++){
				ltr=bs.charAt(max-y-1);
				p=p+ltr;
			}
			rs[cont]=p;
			cont++;
			min=max;
		}
		
	}
	return rs;
}
//ejercicio 1
//var p=inviertecadena("rade");

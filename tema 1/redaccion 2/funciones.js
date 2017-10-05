function edad(birth,current){
	var age=current-birth;
	document.write("tu tienes "+age+ "años,a mi no me engañas");
}
function suministrovida(age,maxage,ansia){
	var consano=ansia*365;
	var anosrest=maxage-age;
	var suministro=consano*anosrest;
	document.write("necesitaras "+suministro+ " snack, para aguantar hasta los "+ maxage);
}
function medidacirc(rad){
	var diametro=2*rad;
	var circuf=3.14*diametro;
	var areacirc=3.14*rad^2;
	console.log("diamentro: "+diametro);
	console.log("circuferencia: "+circuf);
	console.log("area:"+areacirc);
}
function temperatura(cel,fah){
	var refah=cel+32.8;
	var recel=fah-32.8;
	document.write(cel+" C es "+refah+" F <br>");
	document.write(fah+" F es "+recel+" C");
}
temperatura (60,60);


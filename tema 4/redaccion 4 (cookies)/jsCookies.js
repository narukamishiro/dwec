function saluda(){
	var exp;
	var nm;
	if(document.cookie=""){
		
		nm=prompt("introduzca tu nombre");
		var dt=new date;
		exp=dt.getMinutes()+5;
		document.cookie="username="+nm+"; expire="+exp.toDateString();
		document.innerHTML="hola sr/sra "+getCookie("username");
	}
}
function del(){
	document.cookie="";
}
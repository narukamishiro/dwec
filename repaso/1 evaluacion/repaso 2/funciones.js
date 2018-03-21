class agenda{
	var cont=[];
	function addCont(nm,drc,phn,ml){
		var nwcont=new contacto(nm,drc,phn,ml);
		cont.push(nwcont);
	}
	function showCont(nm){
		for(x=0;x<cont.length;x++){
			if(cont[x].getName()==nm){
				return cont[x];
			}
		}
		return "contact not found";
	}
	function showAll(){
		return cont.sort();
	}
	function removeCont(nm){
		for(x=0;x<cont.length;x++){
			if(cont[x].getName()==nm){
				cont.splice(x,1);
				return "contact removed";
			}
		}
		return "contact not found";
	}
}
class contacto{
	var name;
	var dir;
	var phn;
	var mail;
	constructor(nm,dr,tel,ml){
		name=nm;
		dir=dr;
		phn=tel;
		mail=ml;
	}
	function getName(){
		return name;
	}
}
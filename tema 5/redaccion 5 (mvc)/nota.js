class nota{
	var id;
	var title;
	var msj;
	var date;
	constructor(){
		id=0;
		title="prueba";
		msj="esto es una prueba";
		date=new Date;
	}
	constructor(tit,men){
		title=tit;
		msj=men;
		date=new Date;
	}
	function getActiveTime(){
		var cd=new Date;
		var cmin=cd.getMinutes;
		var pmin=date.getMinutes;
		return cmin-pmin;
	}
	function setTitle(t){
		title=t;
	}
	function setmsj(t){
		msj=t;
	}
	function getTitle(){
		return title;
	}
}

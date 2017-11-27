class nota{
	var id;
	var title;
	var msj;
	var date;
	constructor(){
		this.id=0;
		this.title="prueba";
		this.msj="esto es una prueba";
		this.date=new Date;
	}
	constructor(tit,men){
		this.title=tit;
		this.msj=men;
		this.date=new Date;
	}
	function getActiveTime(){
		var cd=new Date;
		var cmin=cd.getMinutes;
		var pmin=date.getMinutes;
		return cmin-pmin;
	}
	function setTitle(t){
		this.title=t;
	}
	function setmsj(t){
		this.msj=t;
	}
	function getTitle(){
		return title;
	}
	function getMsj(){
		return msj;
	}
	function getId(){
		return id;
	}
	function setId(t){
		this.id=t;
	}
}

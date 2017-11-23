class collection{
	var cnt;
	constructor(){
		cnt=new array();
	}
	function addNote(t,m){
		var nt=new nota(t,m);
		cnt.push(nt);
	}
	function removeNote(po){
		cnt.splice(po,1);
	}
}
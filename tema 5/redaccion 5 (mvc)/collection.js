class collection{
	var cnt;
	constructor(){
		this.cnt=new array();
	}
	function addNote(t,m){
		var nt=new nota(t,m);
		cnt.push(nt);
	}
	function removeNote(po){
		cnt.splice(po,1);
	}
	function getnote(t){
		for(x=0;x<nt.length;x++){
			if(nt[x].getTitle==t){
				return nt[x];
			}
		}
	}
}
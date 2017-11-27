function act(){
	for(x=0;x<nt.length;x++){
			nt(x).setId(x);
		}
	}
}
function newnote(){
	var t=prompt("escribe titulo de la nota");
	var m=prompt("escribe el mensaje de la nota");
	nt.addNote(t,m);
	act();
}
function rmvnote(event){
	var n=event.getElementsByTagName("input").text;
	var obj=nt.getnote(t);
	if(obj){
		nt.removenote(obj.getId());
	}
	act();
}
var nt=new collection();

/*
<div>
	<input type="text"></input>o
	<textarea></area>
	<button></button>
</div>
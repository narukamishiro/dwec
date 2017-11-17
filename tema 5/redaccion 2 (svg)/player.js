class player(){
	var name;
	var score;
	var coins;
	var life;
	var skill;
	var pos;
	constructor(){
		name="trollface";
		score=0;
		coins=0;
		life=3;
		skill="none";
	}
	function getPosition(event){
		var x=event.clientX;
		var y=event.clientY;
		pos=new array[x,y];
		return pos;
	}
	function collide(bl){
		var crd;
		var pcl=0;
		for(x=0;x<bl.length;x++){
			crd=bl[x].getcrd();
			for (y=0;y<crd.length;y++){
				if(pos[0]!=crd[y][0] || pos[1]!=crd[y][1]){
					return pcl;
				}
				pcl+45;
				;
			}
			
		}
		
	}
}
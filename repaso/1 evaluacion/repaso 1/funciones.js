function max(nums){
	var max=0;
	for(x=0;x<nums.length;x++){
		if(max<nums[x]){
			max=nums[x];
		}
	}
	return max;
}
function filtraPalabrasMayores(list,i){
	var nlst=[];
	for(x=0;x<list.length;x++){
		if(list[x].length>=i){
			nlst.push(list[x]);
		}
	}
	return nlst;
}
// ejercicio 3
/*var n=[7,1,10,-1];
var txt=max(n)+"";
console.log(txt);
*/
// ejercicio 8
/*var n=["toro","moro","batman","robin", "locuelo"];
var txt=filtraPalabrasMayores(n,5);
for(x=0;x<txt.length;x++){
	console.log(txt[x]+" ");
}
*/


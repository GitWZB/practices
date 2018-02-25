
window.onload=function(evt){
	
	var div=getElsByClassName(document,'moving-div');
	window.onmousemove=function(evt){
		var eventObj=evt || window.event;
		div[0].style.top=eventObj.clientY+20+'px';
		div[0].style.left=eventObj.clientX+20+'px';
		for(var i=div.length-1;i>0;i--){
			div[i].style.top=div[i-1].style.top;
			div[i].style.left=div[i-1].style.left;
		}
	}
}
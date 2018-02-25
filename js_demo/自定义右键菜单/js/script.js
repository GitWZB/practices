window.onload=function(){
	var menu=document.getElementById('menu');
	var lis=menu.getElementsByTagName('li');

	

	window.onclick=function(){
		menu.style.display='none';
	}

	document.oncontextmenu=function(evt){
		var evtObj = evt || window.event;
		evtObj.preventDefault();
		menu.style.display='block';
		menu.style.top=evtObj.clientY+'px';
		menu.style.left=evtObj.clientX+'px';

	}
}
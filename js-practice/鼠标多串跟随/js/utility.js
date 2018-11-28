// 自定义函数，通过class名获取元素节点，解决了系统自带的getElementsByClassName的一些兼容性问题；
function getElsByClassName(parent,className){
	var allEls=parent.getElementsByTagName('*')
	var els=[];
	for(var i=0;i<allEls.length;i++){
		if(allEls[i].className===className){
			els.push(allEls[i]);
		}
	}
	return els;
}


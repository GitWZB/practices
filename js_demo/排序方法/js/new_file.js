// 选择排序法
document.write('<br />11.选择排序法<br />');
function selection(array){  //选择排序法
	var len=array.length;
	var temp;
	for(var i=0;i<len-1;i++){
		for(var j=i+1;j<len;j++){
			if(array[i]>array[j]){
				temp=array[j];
				array[j]=array[i];
				array[i]=temp;
			}
		}
	}
	return array;
}
window.onload=function(){
	sortAge();
	sortArea();
}

function sortAge(){
	var ageBtn=document.getElementById('age');
	ageBtn.onclick=function(){

		// var tbody=document.getElementById('table-list');
		// var trs=tbody.getElementsByTagName('tr');
		// var trArray=[];
		// for(var i=0;i<trs.length;i++){
		// 	trArray.push(trs[i]);
		// }

		// trArray.sort(function(tr1,tr2){
		// 	var age1=parseInt(tr1.children[2].innerHTML);
		// 	var age2=parseInt(tr2.children[2].innerHTML);
		// 	if(age1<age2){
		// 		return -1;
		// 	}else{
		// 		return 1;
		// 	}
		// })

		// for (var i=0;i<trArray.length;i++){
		// 	tbody.appendChild(trArray[i]);
		// }
		sortList('age');
		
	}
}

function sortArea(){
	var areaBtn=document.getElementById('area');
	areaBtn.onclick=function(){

		// var tbody=document.getElementById('table-list');
		// var trs=tbody.getElementsByTagName('tr');
		// var trArray=[];
		// for(var i=0;i<trs.length;i++){
		// 	trArray.push(trs[i]);
		// }

		// trArray.sort(function(tr1,tr2){
		// 	var area1=tr1.children[3].innerHTML;
		// 	var area2=tr2.children[3].innerHTML;
		// 	return area1.localeCompare(area2);
		// })

		// for (var i=0;i<trArray.length;i++){
		// 	tbody.appendChild(trArray[i]);
		// }
		sortList('area');
		
	}
}


function sortList(category){
	var tbody=document.getElementById('table-list');
		var trs=tbody.getElementsByTagName('tr');
		var trArray=[];
		for(var i=0;i<trs.length;i++){
			trArray.push(trs[i]);
		}
		 if(category==='age'){
		 	trArray.sort(function(tr1,tr2){
			var age1=parseInt(tr1.children[2].innerHTML);
			var age2=parseInt(tr2.children[2].innerHTML);
			if(age1<age2){
				return -1;
			}else{
				return 1;
			}
		})
		 }else{
		 	trArray.sort(function(tr1,tr2){
			var area1=tr1.children[3].innerHTML;
			var area2=tr2.children[3].innerHTML;
			return area1.localeCompare(area2);
		})
		 }
		

		for (var i=0;i<trArray.length;i++){
			tbody.appendChild(trArray[i]);
		}
}

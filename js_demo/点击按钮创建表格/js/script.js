window.onload=function(){
	var createBtn=document.getElementById('create-table');
	createBtn.onclick=function(){
		if(document.querySelector("table")){
			document.body.removeChild(document.querySelector("table"));
		}
		var table=document.createElement('table');
		table.border=1;
		table.cellSpacing=10;
		table.cellPadding=10;
		table.style.margin="0 auto";
		table.style.background='#FF8000';
		table.style.border='1px solid #0000FF'
		var tbody=document.createElement('tbody');
		for(var i=0;i<3;i++){
			var tr=document.createElement('tr');
			
			for(var j=0;j<4;j++){
				var td=document.createElement('td');
				td.align='center';
//				var randomColor = "#" + Math.floor(Math.random()*0x1000000).toString(16);
				var randomColor = "#" + Math.floor(Math.random()*16).toString(16) + Math.floor(Math.random()*16).toString(16) + Math.floor(Math.random()*16).toString(16) + Math.floor(Math.random()*16).toString(16) + Math.floor(Math.random()*16).toString(16) + Math.floor(Math.random()*16).toString(16);
				td.bgColor= randomColor;
//				td.bgColor='#00FFFF'
				td.style.width="100px";
				td.style.height="80px";
				tr.appendChild(td);
			}
			tbody.appendChild(tr);
		}
		table.appendChild(tbody);
		document.body.appendChild(table);
	}
}


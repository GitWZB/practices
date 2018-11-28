window.onload=function(){
	bindInputBtn();
}

function bindInputBtn(){
	var rows=document.getElementById('rows');
	var columns=document.getElementById('columns')
	var createBtn=document.getElementById('create-btn');

	rows.onkeyup=function(evt){
		var eventObj= evt || window.event;
		var rowsInputStr=rows.value;
		var rowsInput=parseInt(rowsInputStr);
		var numberKey=eventObj.keyCode;

		if((rowsInputStr.length>2 && rowsInput!==100)||rowsInput===0){

					alert('请输入正确的数值：行列数范围【1-100】')
					rows.disabled = "disabled";

		}

		if(numberKey<48||numberKey>57){
			eventObj.preventDefault();
				alert('你输入的不是数字，请输入正确的数值：行列数范围【1-100】')
		}
	}

	columns.onkeyup=function(evt){

		var eventObj= evt || window.event;
		var colsInputStr=columns.value;
		var colsInput=parseInt(colsInputStr);
		var numberKey=eventObj.keyCode;
		if(colsInputStr.length>2 && colsInput!==100 || colsInput===0){
			eventObj.preventDefault();
			columns.disabled = "disabled";
				alert('请输入正确的数值：行列数范围【1-100】')
		}
		if(numberKey<48||numberKey>57){
			eventObj.preventDefault();
				alert('你输入的不是数字，请输入正确的数值：行列数范围【1-100】')
		}
	}
			
		

	createBtn.onclick=function(evt){
		
		
		
		var oTable = document.getElementsByTagName("table")[0];
		var oTable = document.getElementById("box");
		var oTable = document.getElementsByClassName("box1");
		var oInput = document.getElementsByName("box2");
		
		
		
		if(document.querySelector("table")){
			document.body.removeChild(document.querySelector("table"));
		}
		
		
		var rowsInput=parseInt(rows.value);
		var colsInput=parseInt(columns.value);
		var eventObj=evt || window.event
		if(rowsInput>100 || rowsInput===0 || colsInput>100 || colsInput===0){
			eventObj.preventDefault();
		}else{
			var table=document.createElement('table');
			var tbody=document.createElement('tbody');

			table.appendChild(tbody);
			document.body.appendChild(table);
			for(var i=0;i<rowsInput;i++){
				var tr=document.createElement('tr');
				for(var j=0;j<colsInput;j++){
					var td=document.createElement('td');
					td.innerHTML=Math.floor(Math.random()*10);
					td.style.backgroundColor = "#" + Math.floor(Math.random()*16).toString(16) + Math.floor(Math.random()*16).toString(16) + Math.floor(Math.random()*16).toString(16) + Math.floor(Math.random()*16).toString(16) + Math.floor(Math.random()*16).toString(16) +Math.floor(Math.random()*16).toString(16);
					tr.appendChild(td);
				}
				tbody.appendChild(tr);
			}	
		}
		
	}
}
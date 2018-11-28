window.onload=function(){
	//点table切换图片
	var tds=document.getElementsByTagName('td');
	var img=document.getElementById('pic')
	for(var i=0;i<tds.length;i++){
		tds[i].picPath='images/jlp0'+(i+1)+'.jpg';
		tds[i].onclick=function(){
			img.src=this.picPath;
			var focus=getElsByClassName(document,'focus')[0];
			focus.className='';
			this.className='focus';
		}
	}


	// JS日历
	var calendars=document.getElementById('calendar');
	var months=calendars.getElementsByTagName('div')
	var textOfMonths=['1月活动：新年快到了','2月活动','3月活动','4月活动','5月活动','6月活动','7月活动','8月活动','9月活动','10月活动','11月活动','12月活动'];
	var text=calendars.getElementsByTagName('span')[0]
	for(var i=0;i<months.length;i++){
		months[i].index = textOfMonths[i];
		months[i].onclick=function(){
		var focusA=document.querySelectorAll(".focusA")[0];
			 focusA.className='';
//			focusA.className=focusA.className.replace('focusA','');
			this.className='focusA';
			text.innerHTML=this.index;
		}
	}
	




//简易计算器
	var num1='';
	var oprater='';
	var ifNeedClear=false;//是否需要清除输入框中已有的内容


	function calc(inputNum1,inputNum2,inputOprater)
	{
		var inputResult=0;
		switch(inputOprater)
		{
			case '+':
				inputResult=inputNum1+inputNum2;
				break;
			case '-':
				inputResult=inputNum1-inputNum2;
				break;
			case '×':
				inputResult=inputNum1*inputNum2;
				break;
			case '÷':
				inputResult=inputNum1/inputNum2;
				break;
			defult:
				inputResult=inputNum2;
		}
		return inputResult;
	}

	var calculator=document.getElementById('counter_content');
	var inputText=document.getElementById('input1')
	var aLi=calculator.getElementsByTagName('li');
	// var aStr=['7','8','9','+','4','5','6','-','1','2','3','×','0','C','=','÷']
	for(var i=0;i<aLi.length;i++)
	{
		// aLi[i].contents2=aStr[i];
		aLi[i].onclick=function()
		{
			var sHtml=this.innerHTML.replace(' ','');
			switch(sHtml)
			{
				case '=':
					inputText.value=calc(parseInt(num1), parseInt(inputText.value), oprater);
					
					num1='';
					oprater='';
					ifNeedClear=true;
					break;
				case '+':
				case '-':
				case '×':
				case '÷':
					ifNeedClear=true;
					
					if(num1.length!=0)
					{
						inputText.value=calc(parseInt(num1), parseInt(inputText.value), oprater);
					}
					
					oprater=sHtml;
					
					num1=inputText.value;
					break;
				case 'C':
					inputText.value='0';
					num1='';
					oprater='';
					break;
				default:	//数字
					if(ifNeedClear)
					{
						inputText.value=parseInt(sHtml);
						ifNeedClear=false;
					}
					else
					{
						inputText.value=parseInt(inputText.value+sHtml);
					}
					break;
			}
				
		}
	}











}
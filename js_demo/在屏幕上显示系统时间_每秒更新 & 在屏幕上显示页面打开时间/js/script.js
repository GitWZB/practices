window.onload=function(){

	// 在屏幕上显示系统时间_每秒更新
	var clock=document.getElementById('clock');
	var counter=0
	var intervalId=setInterval(function(){
			var date=new Date();
			clock.innerHTML=date;
			counter++;
			if(counter===1000){
				clearInterval(intervalId);
			}
		},1000);


	//在屏幕上显示页面打开时间
	var timer=document.getElementById('timer')
	var seconds=0;
	var minutes=0;
	var hours=0;
	var intervalId=setInterval(function(){
		seconds++;
		if(seconds===60){
			minutes++;
			seconds=0;
		}
		if(minutes===60){
			hours++;
			minutes=0;
		}
		timer.innerHTML='页面打开了'+hours+'小时'+minutes+'分'+seconds+'秒';
	},1000);
	
}
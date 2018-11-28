$(function(){
      var index = 0;
    function move(){
      	 index+=1;
      	 if(index==4){
      	 	index=0;
      	 };
      	 $("input").eq(index).click();
      	 console.log(index);
      	 return index;
    }
    setInterval(move,2000);
});

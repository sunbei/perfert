/*var hov;*/
window.onload = function(){	

	hover();
	
};

function hover(){	 
	var hov= document.getElementById('hover').getElementsByTagName('a');	
	for(var i=0,len=hov.length;i<len;i++){
		hov[i].onmouseover=function(){
			this.setAttribute('class','bgAfter');//在这里使用this，不能用hover[i]
			}
		hov[i].onmouseout=function(){
			this.setAttribute('class', 'bgBefore');
			}
	 }
}


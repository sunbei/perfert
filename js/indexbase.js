/*var hov;*/
window.onload = function(){	
	
	navhover();
	imgrun();
	
};
/*导航hover*/
function navhover(){	 
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

/*banenr轮播*/
/*function imgrun()
	var imgs=document.getElementById('imgbox').getElementsByTagName('img');
	var pages=document.getElementById('banner').getElementsByTagName('div')[1].getElementsByTagName('a');
	var imgmove=setInterval(move,1000);
	for(var j=0;j<pages.length;j++){
		pages[j].index=j;
		pages[j].onmouseover=function(){
			for(var item in pages){
				pages[item].className='';
				}
			this.setAttribute('class','active');
			for(var item in imgs){
				imgs[item].className='hide';
				}
			imgs[this.index].className='';
		};
		pages[j].onmousemove=function(){
			clearInterval(imgmove);
			};
		pages[j].onmouseout=function(){
		imgmove=setInterval(move,1000);
		i=this.index;
		};
		}
		}*/  
/*$(function(){ 
	var i=0;
	var l=$("#imgbox img").size();
	$(".numbox a").mouseover(function(){
	   $(this).addClass("cur").siblings().removeClass("cur");
	   $("#imgbox img").eq($(this).index()).show().siblings().hide();
	}).mousemove(function(){
		clearInterval(move);
		i=$(this).index();
	}).mouseout(function(){
		move = setInterval(dong,2000)
	})
	function dong(){
		i+=1;
		if(i>l-1){
			i=0;
			}
		$(".over a").eq(i).addClass("cur").siblings().removeClass("cur");
		$("#imgbox img").eq(i).show().siblings().hide();
		}
	var move = setInterval(dong,2000);		
var i=0;
function move(){
	var pages=document.getElementById('banner').getElementsByTagName('div')[1].getElementsByTagName('a');	
	i++;
	if(i<3){
		pages[i].onmouseover();
		}
	else{
		i=3;
		pages[i].onmouseover();
		i=-1;
		}
}
})*/
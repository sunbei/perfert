
window.onload=function(){		
	imgrun();
};
/*banner轮播*/
function imgrun(){
	var imgs=document.getElementById('imgbox').getElementsByTagName('img');
	var pages=document.getElementsByName('page');
	var imgmove=setInterval(move,1300);	
	for(var i=0;i<pages.length;i++){
		pages[i].index=i;
		pages[i].onmouseover=function(){
			for(var item in pages){
				pages[item].className='noactive';
				}
			this.className='active';
			for(var item in imgs){
				imgs[item].className='hide';
				}
			imgs[this.index].className='';
				};
		pages[i].onmouseout=function(){
			imgmove=setInterval(move,1300);
			j=this.index;
			};
		pages[i].onmousemove=function(){
			clearInterval(imgmove);
				}
		}
	}
var j=0;
function move(){
	var pages=document.getElementsByName('page');
	j++;
	if(j<3){
		pages[j].onmouseover();
	}
	else{
		j=3;
		pages[j].onmouseover();
		j=-1;
		}
	}





















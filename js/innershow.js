
window.onload=function(){	
	hover();
	imgrun();
	change();
};
	
/*导航hover*/
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

/*图片放大缩小*/	
var zoomTimeId = null;
function change(){
	var uls=document.getElementsByName('ul');
	for(var i=0;i<uls.length;i++){
		var imgs = uls[i].getElementsByTagName('img');
			for(var k = 0 ; k < imgs.length; k++){
			//元素鼠标移入
				imgs[k].onmouseover = function(){
					if (document.getElementById('tempImg')){
						document.getElementById('tempImg').parentNode.removeChild(document.getElementById('tempImg'));
					}
					//动态创建一个与悬浮的图片相同的元素
					var imgTemp = document.createElement('img');
					imgTemp.setAttribute('id', 'tempImg');
					imgTemp.setAttribute('src' , this.getAttribute('src'));
					imgTemp.style.position = 'absolute';
					imgTemp.style.zIndex = 999;
					imgTemp.style.width = this.style.width;
					imgTemp.style.height = this.style.height;
					imgTemp.style.top = this.offsetTop + 'px';
					imgTemp.style.left = this.offsetLeft + 'px';
					//鼠标移出
					imgTemp.onmouseout = function(){
						
						if (zoomTimeId){
							//终止放大的动画
							clearTimeout(zoomTimeId);
							zoomTimeId = null;
						}
						//开启缩小的动画
						setZoom(1, document.getElementById('tempImg'));
					};
					document.body.appendChild(imgTemp);
					
					if (zoomTimeId){
						//有动画在执行, 终止动画
						clearTimeout(zoomTimeId);
						zoomTimeId = null;
					}
					//时间戳
					if (!zoomTimeId){
						//开始放大
						setZoom(0, imgTemp);
						//设置阴影
						imgTemp.setAttribute('class', 'cssshadow');
					}
			};
		}
	}
}
//type:0,放大 type:1 缩小
function setZoom(type, myImg){
	//宽
	var width = parseInt(myImg.style.width);
	//高
	var height = parseInt(myImg.style.height);
	var top = parseInt(myImg.style.top);
	var left = parseInt(myImg.style.left);
	//放大
	if (type == 0){
		width+=2;
		height+=2;
		top -= 1;
		left -= 1;
		//临界点
		if (width > 372 || height > 328){
			zoomTimeId = null;
			return;
		}
	}
	//缩小
	if (type == 1){
		width-=2;
		height-=2;
		top += 1;
		left += 1;
		//临界点
		if (width < 322 || height < 278){
			zoomTimeId = null;
			myImg.parentNode.removeChild(myImg);
			return;
		}
	}
	//赋值
	myImg.style.width = width + 'px';
	myImg.style.height = height + 'px';
	myImg.style.top = top + 'px';
	myImg.style.left = left + 'px';
	
	//设置下次循环 
	zoomTimeId = setTimeout(function(){setZoom(type, myImg);}, 30);
}










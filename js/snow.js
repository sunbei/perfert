
var snow = {
	snows:new Array(),
	myDraw:null,
	createCanvas:function(){
		var myCan = document.createElement('canvas');
		myCan.setAttribute('id', 'myCanvas');
		myCan.setAttribute('width', '1423px');
		myCan.setAttribute('height', '990px');
		myCan.setAttribute('style','position:absolute;top:0;left:0;')
		document.body.appendChild(myCan);
		this.myDraw = myCan.getContext('2d');
		this.myDraw.fillStyle = '#fff';
	},
	
	snowModel: function(){
		return {
			speed:0,
			size:0,
			x:0,
			y:0
		};
	},
	
	createSnow: function(){
		var maxCount = arguments[0] && !isNaN(arguments[0]) ? arguments[0] : 200;
		for(var i = 0; i < maxCount; i++){
			var item = this.snowModel();
			item.speed = Math.round(Math.random() * 20);
			if (item.speed < 1){
				item.speed = 1;
			}
			item.size = Math.round(Math.random() * 10);
			item.x = Math.round(Math.random() * 1423);
			item.y = Math.round(Math.random() * 990);
			
			this.snows.push(item);
		}
	},
	
	downSnow: function(){
		var me = this;
		this.myDraw.clearRect(0,0,1423,990);
	
		for(var i = 0, len = this.snows.length; i < len; i++){
			this.snows[i].y = this.snows[i].y + this.snows[i].speed;
			if (this.snows[i].y >990){
				this.snows[i].x = Math.round(Math.random() * 1423);
				this.snows[i].y = 0;
				this.snows[i].speed = Math.round(Math.random() * 20);
				if (this.snows[i].speed < 1){
					this.snows[i].speed = 1;
				}
				this.snows[i].size = Math.round(Math.random() * 10);
			}
			this.myDraw.beginPath();
			this.myDraw.moveTo(this.snows[i].x, this.snows[i].y);
			this.myDraw.arc(this.snows[i].x, this.snows[i].y, this.snows[i].size, 0, 2 * Math.PI);
			this.myDraw.closePath();
			this.myDraw.fill();
		}
		
		setTimeout(function(){ me.downSnow(); }, 50);
	},
	
	init: function(){
		this.createCanvas();
		this.createSnow();
		this.downSnow();
	}
};
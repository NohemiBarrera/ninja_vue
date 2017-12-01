new Vue({	//vue instance
	el:'#vue-app',	//this is what the instance gonna control
	data: {
		age: 23,
		x: 0,
		y: 0
	},
	methods: {
		add: function(inc){
			this.age += inc;
		},
		subtract: function(dec){
			this.age-=dec;
		},
		updateXY:function(event){
			this.x = event.offsetX;
			this.y = event.offsetY;
		}
	}
}); 

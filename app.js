new Vue({	//vue instance
	el:'#vue-app',	//this is what the instance gonna control
	data: {
		available: false,
		nearby: false
	},
	methods: {
		
	},
	computed:{
		compClasses: function(){
			return {
				available: this.available,
				nearby: this.nearby
			}
		}
	}
}); 

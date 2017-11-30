new Vue({	//vue instance
	el:'#vue-app',	//this is what the instance gonna control
	data: {
		name: 'Meme',
		job: 'Developer',
	},
	methods: {
		greet: function(time){
			return 'Good ' + time + ' ' + this.name;
		}
	}
}); 

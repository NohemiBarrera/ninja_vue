new Vue({	//vue instance
	el:'#vue-app',	//this is what the instance gonna control
	data: {
		name: 'Meme',
		job: 'Developer',
		website: 'hhtp://www.thenetninja.co.uk',
		websiteTag: '<a href="hhtp://www.thenetninja.co.uk">Ninja net</a>'
	},
	methods: {
		greet: function(time){
			return 'Good ' + time + ' ' + this.name;
		}
	}
}); 

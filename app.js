new Vue({	//vue instance
	el:'#vue-app',	//this is what the instance gonna control
	data: {
		name: '',
		age: ''
	},
	methods: {
		logName: function(){
			console.log('you enter your name')
		},
		logAge: function(){
			console.log('you enter you age')
		}
	}
}); 

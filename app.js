new Vue({	//vue instance
	el:'#vue-app',	//this is what the instance gonna control
	data: {
		age: 23,
		a: 0,
		b: 0
	},
	methods: {
		/*addToA: function(){
			return this.a + this.age;
		},
		addToB: function(){
			return this.b + this.age;
		}*/
	},
	computed:{
		addToA: function(){
			return this.a + this.age;
		},
		addToB: function(){
			return this.b + this.age;
		}
	}
}); 

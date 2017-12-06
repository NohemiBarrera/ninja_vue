
new Vue({
	el:'#vue-app',
	data: {
		output: 'Tu comida favorita'
	},
	methods: {
		readRefs: function(){
			console.log(this.$refs);
			this.output = this.$refs.input.value;
		}
	},
	computed:{
		
	}
}); 

Vue.component('greeting', {
	template: '<p>Hey, soy {{name}}. <button v-on:click="changeName">Change name</button></p>',
	data: function(){
		return{
			name: 'Pomelo',
		}
	},
	methods:{
		changeName: function(){
			this.name='Mario';
		}
	}
})

new Vue({
	el:'#vue-app-one',
	data: {
		
	},
	methods: {
		
	},
	computed:{
		
	}
}); 
new Vue({
	el:'#vue-app-two',
	data: {
		
	},
	methods: {
		
	},
	computed:{
		
	}
});

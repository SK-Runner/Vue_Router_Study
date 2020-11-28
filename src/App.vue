<template>
  <div id="app">
		<h1>路由组件标题</h1>
<!--    <router-link to="/home" tag="button" replace>首页</router-link>
		<router-link to="/about">关于</router-link> -->
		<button @click="toHome">首页</button>
		<button @click="toAbout">关于</button>
		<button @click="toUser">用户</button>
		<router-link :to="{path:'/profile',query:{name:'sk',age:'21'}}">档案</router-link>
		<button @click="toProfile">用户</button>
		<router-view></router-view>
		<p>版权声明</p>
  </div>
</template>

<script>
export default {
  name: 'App',
	data(){
		return{
			id:'lisi'
		}
	},
	methods:{
		toHome(){
			//通过代码修改路由
			//vuerouter在所有组件中都添加了$router属性
			this.$router.push('/home')
		},
		toAbout(){
			this.$router.push('/about')
		},
		toUser(){
			this.$router.push('/user/'+this.id)
		},
		toProfile(){
			this.$router.push({
				path:'/profile',
				query:{name:'sk',age:'21'}
			})
		}
	}
}
</script>

<style>
	#app{
		position: relative;
		width: 300px;
		height: 200px;
    margin: 0 auto;
		text-align: center;
	}
</style>

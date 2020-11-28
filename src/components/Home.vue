<template>
	<div>
		<h2>我是首页</h2>
		<p>首页内容</p>
		<router-link to="/home/news">新闻</router-link>
		<router-link to="/home/message">信息</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
	export default{
		name:'Home',
		data(){
			return {
				path:'/home/news'
			}
		},
		created() {
			console.log('创建');
		},
		activated(){
			//组件活跃时，跳转到path
			this.$router.push(this.path)
		},
		destroyed() {
			console.log('销毁');
		},
		beforeRouteLeave(to,from,next) {
			//离开组件时，记录离开时的path，下次访问依旧是离开前path
			console.log(this.$route.path)
			this.path = this.$route.path
			next()
		}
	}
</script>

<style>
</style>

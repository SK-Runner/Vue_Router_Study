<template>
	<div>
		<h2>用户界面</h2>
		<p>用户信息:{{userId}}</p>
		<p>用户信息:{{$route.params.userId}}</p>
	</div>
</template>

<script>
	export default{
		name:'User',
		computed:{
			userId(){
				return this.$route.params.userId
			}
		}
	}
</script>

<style>
</style>

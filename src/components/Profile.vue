<template>
	<div>
		<p>我是profile</p>
		<p>{{$route.query.name}}</p>
		<p>{{$route.query.age}}</p>
	</div>
</template>

<script>
	export default{
		name:'Profile'
	}
</script>

<style>
</style>

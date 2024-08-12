<template>
	<view class="nav">
		
			test
	
		<view class="navBar">
			
		</view>
	</view>
</template>

<script setup>
	//计算状态高度
	import { onBeforeMount } from 'vue';
	onBeforeMount(() =>{
		setNavSize()
	})
	console.log(111)
		
	const setNavSize = () =>{
		const res = uni.getSystemInfoSync()
		console.log(res)
	}
	
</script>

<style>
	.nav{
		position: fixed;
		width: 100%;
		top: 0;
		left: 0;
		z-index: 2;
	}
</style>
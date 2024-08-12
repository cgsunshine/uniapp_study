<template>
	<view class="content">
		首页
		
		<navBar name="navBar组件"  :content="data" @changeData="changeData">
			<view>我是插槽值</view>
		</navBar>
		
		<navCC/>
	</view>
</template>

<script setup>
	import { computed, reactive, ref } from 'vue'
	const data = ref('动态数据')
	const changeData = (val) => {
		data.value = val
	}

</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
    
	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>

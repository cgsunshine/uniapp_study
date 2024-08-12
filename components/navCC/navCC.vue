<template>
	<view>
		<view :style="'height:' + status + 'rpx;' + containerStyle">
			test
		</view>
		<view class="navBar" :style="'height:' + status + 'rpx;' + containerStyle">
			
		</view>
	</view>
</template>

<script setup>
	//计算状态高度
	import { ref,onBeforeMount,defineProps } from 'vue';
	const props = defineProps({
		background: {
			type: String,
			default: 'rgba(255,255,255,1)'
		},
		color: {
			type: String,
			default: 'rgba(0,0,0,1)'
		},
		fontSize: {
			type: String,
			default: 32
		},
		iconWidth: {
			type: String,
			default: 115
		},
		iconHeight: {
			type: String,
			default: 38
		}
	})
	
	onBeforeMount(() =>{
		setNavSize()
		setStyle()
	})
	//状态栏高度
	const status = ref(0)
	//内容高度
	const navHeight = ref(0)
	//背景颜色
	const containerStyle = ref('')
	//字体颜色
	const textStyle = ref('')
	//图标样式
	const iconStyle = ref('')
	//计算状态高度
	const setNavSize = () =>{
		const {system,statusBarHeight} = uni.getSystemInfoSync()
		status.value = statusBarHeight * 2
		const isIOS = system.indexOf('IOS') > -1
		if(!isIOS){
			navHeight.value = 96
			console.log('安卓系统')
		}
		console.log('苹果系统')
		navHeight.value = 88
		
	}
	
	//样式设置
	const setStyle = () =>{
		containerStyle.value = ['background:'+props.background].join(';')
		textStyle.value = ['color:'+props.color, 'font-size:' + props.fontSize + 'rpx'].join(';')
		iconStyle.value = ['width:' + props.iconHeight + 'rpx', 'height' + props.iconHeight + 'rpx']
	}
</script>

<style>

</style>
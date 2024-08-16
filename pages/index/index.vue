<template>
	<view class="content">
		<navBar :isHome="true"></navBar>
		<view style="margin-top: 130rpx">
			<view class="weui-cell" style="background: #fff9eb;">
				<view class="weui-cell__hd">
					<image src="/static/resource/images/ic_myapp.png" style="display: block;width: 40rpx;height:40rpx;margin-right: 14rpx;"></image>
				</view>
				<view class="weui-cell__bd">
					<text style="color: #be9719;font-size: 26rpx;">点击右上角 添加到我的小程序，方便下次找到</text>
				</view>
				<view class="weui-cell__ft">
					<image src="/static/resource/images/modal_closer.png" style="display: block;width: 30rpx;height: 15rpx;"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { computed, reactive, ref } from 'vue'
	import { onLoad } from '@dcloudio/uni-app'
	const data = ref('动态数据')
	const changeData = (val) => {
		data.value = val
	}
	
	const navigateToo = () =>{
		uni.navigateTo({
			url:'/pages/search/index'
		})
	}
	const app = getApp()
	
	onLoad(() => {
		app.globalData.utils.getUserInfo()
	})
</script>

<style>

    
	page{
		background: #fff;
	}

	
	
</style>

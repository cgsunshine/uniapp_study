<template>
	<view>
		<view class="od-banner">
			<image class="od-banner-icon" src="/static/resource/images/od_bg_icon.png" mode="widthFix"></image>
			<view class="od-jd od-jd-0">	
				<view class="od-jd-out">
					<view class="od-jd-in"></view>
				</view>
				<view class="vp-flex od-jd-text">
					<view class="vp-flex_1">
						<text class="od-jd-st-0">填写订单</text>
					</view>
					<view class="vp-flex_1">
						<text class="od-jd-st-10">在线支付</text>
					</view>
					<view class="vp-flex_1">
						<text class="od-jd-st-20">专人服务</text>
					</view>
					<view class="vp-flex_1">
						<text class="od-jd-st-30">服务完成</text>
					</view>
				</view>
			</view>
		</view>
		<view class="pub-box">
			<view class="pub-box-bd">
				<view class="weui-cell weui-cell_input">
					<view class="weui-cell__hd">
						<image class="serv-icon" :src="service.icon_image ? service.icon_image_url : '/static/resource/images/avatar_def.png'"></image>
					</view>
					<view class="weui-cell__bd">
						<text class="serv-name">{{service.name}}</text>
					</view>
					<view class="weui-cell__ft">
						<view class="f5 ic_info" @click="handleTap">服务内容</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { computed, reactive, ref, toRaw } from 'vue'
	import { onLoad } from '@dcloudio/uni-app'

	const app = getApp();
	onLoad((options) => {
		console.log(options,"options");
		 main_load(options);
	})

	//页面服务数据
	const service = ref({})
	const main_load = (options) => {
		app.globalData.utils.request({
			url: '/Service/order',
			data: {
				svid: options.svid
			},
			success: (res) => {
				console.log(res);
				service.value = res.data.service
			}
		});
	};
	const handleTap = () =>{
		console.log('弹出层')
	}
</script>

<style>
@import './index.css';
</style>

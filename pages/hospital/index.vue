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
	</view>
</template>

<script step>
	import { computed, reactive, ref, toRaw } from 'vue';
	import { onLoad } from '@dcloudio/uni-app';

	const app = getApp()

	onLoad((option) => {
		console.log(option);
	});

	const main_load = (option) => {
		app.globalData.utils.request({
			url: '/Service/order',
			data: {
				svid: option.svid
			},
			success: (res) => {
				console.log(11);
			}
		});
	};
</script>

<style>
@import './index.css';
</style>

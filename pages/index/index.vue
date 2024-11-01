<template>
	<view class="content">
		<navBar :isHome="true"></navBar>
		<view style="margin-top: 200rpx">
			<view class="weui-cell" style="background: #fff9eb">
				<view class="weui-cell__hd">
					<image src="/static/resource/images/ic_myapp.png" style="display: block; width: 40rpx; height: 40rpx; margin-right: 14rpx"></image>
				</view>
				<view class="weui-cell__bd">
					<text style="color: #be9719; font-size: 26rpx">点击右上角 添加到我的小程序，方便下次找到</text>
				</view>
				<view class="weui-cell__ft">
					<image src="/static/resource/images/modal_closer.png" style="display: block; width: 30rpx; height: 15rpx"></image>
				</view>
			</view>
		</view>
		<view v-if="slides && slides.length > 0" class="index-swiper">
			<swiper autoplay circular :interval="3000" :duration="500">
				<block v-for="(item, index) in slides" :key="index">
					<swiper-item>
						<image :src="item.pic_image_url" mod="widthFix" show-menu-by-longpress :data-index="index"></image>
					</swiper-item>
				</block>
			</swiper>
		</view>

		<view v-if="nav2s && nav2s.length > 0" class="nav2-list">
			<block v-for="(item, index) in nav2s" :key="index">
				<view class="nav2-item" :data-index="index" @click="onNav2Tap">
					<view class="nav2-pic">
						<image :src="item.pic_image_url"></image>
					</view>
				</view>
			</block>
		</view>

		<view v-if="nav4s && nav4s.length > 0" class="nav-list">
			<block v-for="(item, index) in nav4s" :key="index">
				<view class="nav-item" :data-index="index" @click="onNav4Tap">
					<view class="nav-pic"><image :src="item.pic_image_url"></image></view>
					<view class="nav-text" :style="'color:' + (item.tcolor ? item.tcolor : '')">{{ item.title }}</view>
				</view>
			</block>
		</view>
		
		<view class="weui-cells hosp-list">
			<view class="weui-cell hosp-item weui-cell_access"
				v-for="(item,index) in hospitals"
				:key="item.id"
				:data-hid="item.id"
				@click="toHospital"
			>
				<view class="weui-cell__hd">
					<image class="hosp-avatar" mode="aspectFill" :src="item.avatar ? item.avatar_url : '../../static/resource/images/avatar_def.png'"></image>
				</view>
				<view class="weui-cell__bd">
					<view>
						<text class="hosp-name">{{item.name}}</text>
					</view>
					<view class = "hosp-line">
						<text class="hosp-rank">{{item.rank}}</text>
						<text class="hosp-label">{{item.label}}</text>
					</view>
					<view class="hosp-line">
						<text class="hosp-intro">{{item.intro}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { computed, reactive, ref, toRaw } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
const app = getApp();
//定义轮播图数据
const slides = ref([]);
//快捷入口2
const nav2s = ref([]);
//快捷入口4
const nav4s = ref([]);
//医院列表
const hospitals = ref([]);

onLoad(() => {
	app.globalData.utils.getUserInfo();
	app.globalData.utils.request({
		url: '/app/init',
		success: (res) => {
			console.log(res);
			const { id } = res.data.area;
			app.globalData.utils.request({
				url: '/Index/index',
				data: {
					aid: id
				},
				success: ({ data }) => {
					slides.value = data.slides;
					nav2s.value = data.nav2s;
					nav4s.value = data.navs;
					hospitals.value = data.hospitals;
					console.log(nav2s);
				}
			});
		}
	});
});

const onNav2Tap = (e) => {
	const nav = toRaw(nav2s.value)[e.currentTarget.dataset.index];
	jump(nav, 'nav2');
};

const onNav4Tap = (e) => {
	const nav = toRaw(nav4s.value)[e.currentTarget.dataset.index];
	// console.log('1111');
	// console.log(e);
	jump(nav, 'nav4');
};

const jump = (nav) => {
	//判断是否为内部链接
	if (nav.stype == 1) {
		uni.navigateTo({
			url: nav.stype_link
		});
	}
};

const toHospital = (e) => {
	console.log("e.currentTarget.dataset.hid",e.currentTarget.dataset.hid)
	uni.navigateTo({
		url:'/pages/hospital/index?hid='+e.currentTarget.dataset.hid,
	})
};
</script>

<style>
page {
	background: #fff;
}

.index-swiper {
	padding: 20rpx 20rpx 0 20rpx;
	overflow: hidden;
}
.index-swiper swiper {
	height: 320rpx;
	overflow: hidden;
	border-radius: 10rpx;
}
.index-swiper swiper image {
	width: 100%;
	height: 100%;
}

.nav2-list {
	margin: 10rpx 20rpx 0 20rpx;
}
.nav2-list::after {
	content: '';
	display: block;
	height: 0;
	line-height: 0;
	clear: both;
	visibility: hidden;
}
.nav2-item {
	float: left;
	margin-top: 20rpx;
	width: 50%;
	text-align: center;
	box-sizing: border-box;
	padding: 0 5rpx;
}
.nav2-pic {
	width: 100%;
}
.nav2-pic image {
	display: block;
	/* margin: 0 auto; */
	/* width: 100%; */
	width: 350rpx;
	height: 190rpx;
}
.nav-list::after {
	content: '';
	display: block;
	height: 0;
	line-height: 0;
	clear: both;
	visibility: hidden;
}
.nav-item {
	float: left;
	margin-top: 20rpx;
	width: 20%;
	text-align: center;
	padding: 10rpx 0;
}
.nav-pic image {
	display: block;
	margin: 0 auto;
	width: 110rpx;
	height: 110rpx;
}
.nav-text {
	font-size: 24rpx;
	font-weight: bold;
	white-space: nowrap;
	overflow: hidden;
}

.hosp-list {
	margin: 10rpx 0 0 0;
	background: none;
}
.hosp-list::before {
	display: none;
}
.hosp-list::after {
	display: none;
}

.hosp-item {
	-webkit-box-align: stretch;
	-webkit-align-items: stretch;
	align-items: stretch;
	padding: 20rpx;
	margin: 20rpx;
	border-radius: 10rpx;
	overflow: hidden;
	box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.04), 0 1px 6px 0 rgba(0, 0, 0, 0.04);
}
.hosp-item::before {
	display: none;
}
.hosp-item::after {
	display: none;
}
.hosp-name {
	font-weight: bold;
	font-size: 34rpx;
}
.hosp-avatar {
	display: block;
	width: 200rpx;
	height: 180rpx;
	border-radius: 10rpx;
	overflow: hidden;
	margin-right: 20rpx;
}
.hosp-line {
	margin-top: 5rpx;
}
.hosp-line text {
	font-size: 26rpx;
}
.hosp-rank {
	font-weight: bold;
	color: #0bb585;
	margin-right: 15rpx;
}
.hosp-label {
	font-weight: bold;
	color: #0ca7ae;
	margin-right: 15rpx;
}
.hosp-intro {
	color: #999999;
}
</style>

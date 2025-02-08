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
						<text class="serv-name">{{ service.name }}</text>
					</view>
					<view class="weui-cell__ft">
						<view class="f5 ic_info" @click="handleTap">服务内容</view>
					</view>
				</view>
			</view>
		</view>
		<block v-if="service.stype == 10 || service.stype == 15 || service.stype == 20">
			<view class="pub-box">
				<view class="pub-box-bd">
					<view class="weui-cell weui-cell_input">
						<view class="weui-cell__hd">
							<view class="weui-label">就诊医院</view>
						</view>
						<view class="weui-cell__bd"></view>
						<view class="weui-cell__ft weui-cell__ft_in-access">
							<view>
								<picker @change="onHospitalChange" :value="hospital_index" :range="hospitals" range-key="name">
									<input type="text" :disabled="true" placeholder="请选择就诊医院" :value="hospitals[hospital_index].name" placeholder-class="vp-placeholder" />
								</picker>
							</view>
						</view>
					</view>
					<view class="weui-cell weui-cell_input">
						<view class="weui-cell__hd">
							<view class="weui-label">就诊时间</view>
						</view>
						<view class="weui-cell__bd"></view>
						<view class="weui-cell__ft weui-cell__ft_in-access">
							<view>
								<dtPicker @dtPickerChanged="onStartTimeChanged" placeholder="请选择就诊时间" :timestamp="order.starttime"></dtPicker>
							</view>
						</view>
					</view>
					<view class="weui-cell weui-cell_input" @click="onClinetChange">
						<view class="weui-cell__hd">
							<view class="weui-label">就诊人</view>
						</view>
						<view class="weui-cell__bd"></view>
						<view class="weui-cell__ft weui-cell__ft_in-access">
							<view>
								<input
									type="text"
									class="weui-input"
									placeholder-class="vp-placeholder"
									placeholder="请选择就诊人"
									style="text-align: right"
									:disabled="true"
									:value="client.name"
								/>
							</view>
						</view>
					</view>
					<block v-if="service.stype == 15">
						<!-- 接送陪诊 -->
						<view class="weui-cell weui-cell_input">
							<view class="weui-cell__hd">接送地址</view>
							<view class="weui-cell__bd">
								<input
									class="weui-input"
									name="receiveAddress"
									style="text-align: right"
									placeholder-class="vp-placeholder"
									placeholder="请填写就诊人所在地址"
									v-model="order.receiveAddress"
								/>
							</view>
						</view>
					</block>

					<view class="weui-cell weui-cell_input">
						<view class="weui-cell__hd">联系电话</view>
						<view class="weui-cell__bd">
							<input
								class="weui-input"
								type="number"
								name="tel"
								style="text-align: right"
								placeholder-class="vp-placeholder"
								placeholder="请填写您的联系电话"
								v-model="order.tel"
							/>
						</view>
					</view>
				</view>
			</view>
			<view class="pub-box">
				<view class="pub-box-tt">服务需求</view>
				<view class="pub-box-bd">
					<view class="weui-cell weui-cell_input">
						<view class="weui-cell__bd">
							<textarea
								name="demand"
								auto-height
								placeholder="请简单描述您要就诊的科室.."
								placeholder-class="vp-placeholder"
								style="min-height: 150rpx"
								v-model="order.demand"
							/>
						</view>
					</view>
				</view>
			</view>
		</block>
		<block v-if="service.stype == 30 || service.stype == 40">
			<!-- 送取结果,代跑取药 -->
			<view class="pub-box">
				<view class="pub-box-bd">
					<view class="weui-cell weui-cell_input">
						<view class="weui-cell__hd">
							<view class="weui-label">所在医院</view>
						</view>
						<view class="weui-cell__bd"></view>
						<view class="weui-cell__ft weui-cell__ft_in-access">
							<view>
								<picker @change="onHospitalChange" :value="hospital_index" :range="hospitals" range-key="name">
									<input
										type="text"
										:disabled="true"
										placeholder="请选择就诊所在医院"
										:value="hospitals[hospital_index].name"
										placeholder-class="vp-placeholder"
									/>
								</picker>
							</view>
						</view>
					</view>

					<view class="weui-cell weui-cell_input">
						<view class="weui-cell__hd">
							<view class="weui-label">服务时间</view>
						</view>
						<view class="weui-cell__bd"></view>
						<view class="weui-cell__ft weui-cell__ft_in-access">
							<view>
								<dtPicker @dtPickerChanged="onStartTimeChanged" :timestamp="order.starttime" placeholder="请选择期望服务时间"></dtPicker>
							</view>
						</view>
					</view>

					<view class="weui-cell weui-cell_input" @click="onAddressChange">
						<view class="weui-cell__hd">
							<view class="weui-label">收件信息</view>
						</view>
						<view class="weui-cell__bd"></view>
						<view class="weui-cell__ft weui-cell__ft_in-access">
							<input
								class="weui-input"
								:disabled="true"
								style="text-align: right"
								placeholder-class="vp-placeholder"
								placeholder="请选择收件信息"
								:value="
									order.address.userName ? order.address.userName + '(' + order.address.cityName + order.address.countyName + order.address.detailInfo + ')' : ''
								"
							/>
							<!-- {{order.address?(order.address.userName+'('+order.address.telNumber+')'):''}} -->
						</view>
					</view>
					<view class="weui-cell weui-cell_input">
						<view class="weui-cell__hd">联系电话</view>
						<view class="weui-cell__bd">
							<input
								class="weui-input"
								type="number"
								name="tel"
								style="text-align: right"
								placeholder-class="vp-placeholder"
								placeholder="请填写您的联系电话"
								v-model="order.tel"
							/>
						</view>
					</view>
				</view>
			</view>

			<view class="pub-box">
				<view class="pub-box-tt">服务需求</view>
				<view class="pub-box-bd">
					<view class="weui-cell weui-cell_input">
						<view class="weui-cell__bd">
							<textarea
								name="demand"
								auto-height
								placeholder="如有其他服务要求请在此填写.."
								placeholder-class="vp-placeholder"
								style="min-height: 150rpx"
								v-model="order.demand"
							/>
						</view>
					</view>
				</view>
			</view>
		</block>
		<view style="height: 300rpx"></view>
		<!-- 悬浮提交按钮 -->
		<view class="vp-foot">
			<view style="background: #ffffff; padding: 20rpx">
				<view class="xieyi" style="text-align: center">
					<text :class="'is_xieyi ' + (is_xieyi ? 'is_xieyi_on' : '')" @click="onXieyiChange">我已阅读并同意</text>
					<navigator :url="cfg.page_xy">《用户协议》</navigator>
					<text>和</text>
					<navigator :url="cfg.page_fw">《服务协议》</navigator>
				</view>
				<view>
					<button :class="'btnp ' + (is_xieyi ? '' : 'btnp-disabled')" @click="submit">
						确认下单
						<block v-if="order.price > 0">（支付{{ order.price }}元）</block>
					</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { computed, reactive, ref, toRaw } from 'vue';
import { onLoad } from '@dcloudio/uni-app';

const app = getApp();
onLoad((options) => {
	console.log(options, 'options');
	main_load(options);
});

//页面服务数据
const service = ref({});
///医院的列表
const hospitals = ref([]);
//选中医院的索引
const hospital_index = ref(0);
//是否同意协议
const is_xieyi = ref(false);
//订单的数据
const order = reactive({
	price: '',
	starttime: '',
	address: {
		userName: '',
		cityName: '',
		countyName: '',
		detailInfo: ''
	},
	receiveAddress:'',
	tel:'',
	demand:''
});

const client = reactive({
	name: ''
});

const cfg = reactive({
	page_xy: '',
	page_fw: ''
});

const main_load = (options) => {
	app.globalData.utils.request({
		url: '/Service/order',
		data: {
			svid: options.svid
		},
		success: (res) => {
			console.log(res);
			service.value = res.data.service;
			hospitals.value = res.data.hospitals;
			//默认选中
			const hospitalsData = toRaw(hospitals.value);
			if (options.hid > 0) {
				for (let i = 0; i < hospitalsData.length; i++) {
					if (hospitalsData[i].id == options.hid) {
						hospital_index.value = i;
						order.price = hospitalsData[i].service_price;
						break;
					}
				}
			}
		}
	});
};
const handleTap = () => {
	console.log('弹出层');
};

//改变医院数据提醒
const onHospitalChange = (e) => {
	const value = parseInt(e.detail.value);
	hospital_index = value;
	order.price = toRaw(hospitals.value)[value].service_price;
};
//修改日期后的回调

const onStartTimeChanged = (e) => {
	// console.log(e);
	order.starttime = e.detail.value
};

//选择就诊人
const onClinetChange = (e) => {
	uni.navigateTo({
		url: '../clients/index?act=select'
	});
};

//创建监听全局的自定义事件
uni.$on('clientChange', (data) => {
	console.log(data);
	client.name = data.name;
	client.id = data.id;
	client.sex = data.sex;
	client.age = data.age;
	client.mobile = data.mobile;
});

const onXieyiChange = () => {
	is_xieyi.value = !is_xieyi.value;
};
const onAddressChange = () => {
	uni.chooseAddress({
		success: (res) => {
			console.log(res);
			order.address.userName = res.userName;
			order.address.cityName = res.cityName;
			order.address.countyName = res.countyName;
			order.address.detailInfo = res.detailInfo;
		},
		fail: (res) => {
			console.log(res);
		}
	});
};

const submit = () => {
	console.log(is_xieyi.value)
	if (!is_xieyi.value) {
		return uni.showToast({
			title: '请先阅读并同意协议和服务协议',
			icon: 'none',
			duration: 1500
		});
	}
		const orderData = toRaw(order)
		const serviceData = toRaw(service.value)
		const hospitalsData = toRaw(hospitals.value)
		const clientData = toRaw(client)

		//医院的选择校验
		if(serviceData.stype < 100){
			if (hospital_index.value == 0){
				return uni.showToast({
					title: '请选择医院',
					icon: 'none',
					duration: 1500
				});
			}

			orderData.hospital_id = hospitalsData[hospital_index.value].id
			orderData.hospital_name = hospitalsData[hospital_index.value].name

			if(!orderData.starttime){
				return uni.showToast({
					title: '请选择服务时间',
					icon: 'none',
					duration: 1500
				});
			}
			//服务类型为陪诊
			if(serviceData.stype == 10 || serviceData.stype == 15 || serviceData.stype == 20){
				//就诊人验证
				if(!clientData.id){
					return uni.showToast({
						title: '请选就诊人',
						icon: 'none',
						duration: 1500
					});
				}
			}

			orderData.client = {}
			orderData.client.age = clientData.age
			orderData.client.mobile = clientData.mobile
			orderData.client.name = clientData.name
			orderData.client.sex = clientData.sex

			//接送地址验证
			if(serviceData.stype == 15){
				if(!orderData.receiveAddress){
					return uni.showToast({
						title: '请选就诊人所在地址',
						icon: 'none',
						duration: 1500
					});
				}
			}
		}

		if(serviceData.stype == 30 ||serviceData.stype == 40 ){
			//收件地址是否存在
			if(!orderData.address.userName){
				return uni.showToast({
					title: '请选择收件信息',
					icon: 'none',
					duration: 1500
				});
			}
		}
		//判断联系电话
		if(!orderData.tel){
			return uni.showToast({
				title: '请填写联系方式',
				icon: 'none',
				duration: 1500
			});
		}
		
		console.log(orderData)
	
};
</script>

<style>
@import './index.css';
</style>

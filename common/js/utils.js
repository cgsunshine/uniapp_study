class Utils {
	constructor() {
		this.baseUrl = 'http://159.75.169.224:7300/pz'
	}
	//获取用户信息
	getUserInfo() {
		//调用登录的api
		uni.login({
			success: res => {
				console.log(res)
				this.request({
					url: '/auth/wxLogin',
					data: {
						code: res.code
					},
					success: res => {
						console.log(res, 'res')
					}
				})
			}
		})
	}
	//http://159.75.169.224:7300/pz/auth/wxLogin
	request(option = {
		showLoading: false
	}) {
		if (!option.url) {
			return false
		}
		if (option.showLoading) {
			this.showLoading()
		}
		uni.request({
			url: this.baseUrl + option.url,
			data: option.data ? option.data : {},
			header: option.header ? option.header : {},
			method: option.method ? option.method : 'GET',
			success: (res) => {
				uni.hideLoading()
				if (res.data.code != 10000) {
					if (option.fail && typeof option.fail == 'function') {
						option.fail(res)
					}
				} else {
					if (option.success && typeof option.success == 'function') {
						option.success(res.data)
					}
				}
			},
			fail: res => {
				console.log(res)
				uni.hideLoading()
			}
		})
	}
	//创建加载logding效果
	showLoding() {
		const isShowLoading = uni.getStorageSync('isShowLoading')
		if (isShowLoading) {
			uni.hideLoading()
			uni.setStorageSync('isShowLoading', false)
		}
		uni.showLoading({
			title: '加载中...',
			complete: function() {
				uni.setStorageSync('isShowLoading', true)
			},
			fail: function() {
				uni.setStorageSync('isShowLoading', false)
			}
		})
	}
}

export default new Utils()
"use strict";
const common_vendor = require("../vendor.js");
class Utils {
  constructor() {
    this.baseUrl = "http://159.75.169.224:7300/pz";
  }
  //获取用户信息
  getUserInfo() {
    common_vendor.index.login({
      success: (res) => {
        common_vendor.index.__f__("log", "at common/js/utils.js:10", res);
        this.request({
          url: "/auth/wxLogin",
          data: {
            code: res.code
          },
          success: (res2) => {
            common_vendor.index.__f__("log", "at common/js/utils.js:17", res2, "res");
          }
        });
      }
    });
  }
  //http://159.75.169.224:7300/pz/auth/wxLogin
  request(option = {
    showLoading: false
  }) {
    if (!option.url) {
      return false;
    }
    if (option.showLoading) {
      this.showLoading();
    }
    common_vendor.index.request({
      url: this.baseUrl + option.url,
      data: option.data ? option.data : {},
      header: option.header ? option.header : {},
      method: option.method ? option.method : "GET",
      success: (res) => {
        common_vendor.index.hideLoading();
        if (res.data.code != 1e4) {
          if (option.fail && typeof option.fail == "function") {
            option.fail(res);
          }
        } else {
          if (option.success && typeof option.success == "function") {
            option.success(res.data);
          }
        }
      },
      fail: (res) => {
        common_vendor.index.__f__("log", "at common/js/utils.js:51", res);
        common_vendor.index.hideLoading();
      }
    });
  }
  //创建加载logding效果
  showLoding() {
    const isShowLoading = common_vendor.index.getStorageSync("isShowLoading");
    if (isShowLoading) {
      common_vendor.index.hideLoading();
      common_vendor.index.setStorageSync("isShowLoading", false);
    }
    common_vendor.index.showLoading({
      title: "加载中...",
      complete: function() {
        common_vendor.index.setStorageSync("isShowLoading", true);
      },
      fail: function() {
        common_vendor.index.setStorageSync("isShowLoading", false);
      }
    });
  }
}
const Utils$1 = new Utils();
exports.Utils = Utils$1;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/common/js/utils.js.map

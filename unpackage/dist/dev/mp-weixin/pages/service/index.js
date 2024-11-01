"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const app = getApp();
    common_vendor.onLoad((options) => {
      console.log(options, "options");
      main_load(options);
    });
    const service = common_vendor.ref({});
    const main_load = (options) => {
      app.globalData.utils.request({
        url: "/Service/order",
        data: {
          svid: options.svid
        },
        success: (res) => {
          console.log(res);
          service.value = res.data.service;
        }
      });
    };
    const handleTap = () => {
      console.log("弹出层");
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$1,
        b: service.value.icon_image ? service.value.icon_image_url : "/static/resource/images/avatar_def.png",
        c: common_vendor.t(service.value.name),
        d: common_vendor.o(handleTap)
      };
    };
  }
};
wx.createPage(_sfc_main);

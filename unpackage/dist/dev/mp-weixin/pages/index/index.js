"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_navBar2 = common_vendor.resolveComponent("navBar");
  _easycom_navBar2();
}
const _easycom_navBar = () => "../../components/navBar/navBar.js";
if (!Math) {
  _easycom_navBar();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const app = getApp();
    const slides = common_vendor.ref([]);
    common_vendor.onLoad(() => {
      app.globalData.utils.getUserInfo();
      app.globalData.utils.request({
        url: "/app/init",
        success: (res) => {
          console.log(res);
          const { id } = res.data.area;
          app.globalData.utils.request({
            url: "/Index/index",
            data: {
              aid: id
            },
            success: ({ data }) => {
              console.log("111111111111");
              slides.value = data.slides;
            }
          });
        }
      });
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          isHome: true
        }),
        b: common_assets._imports_0,
        c: common_assets._imports_1,
        d: slides.value && slides.value.length > 0
      }, slides.value && slides.value.length > 0 ? {
        e: common_vendor.f(slides.value, (item, index, i0) => {
          return {
            a: item.pic_image_url,
            b: index,
            c: index
          };
        })
      } : {});
    };
  }
};
wx.createPage(_sfc_main);

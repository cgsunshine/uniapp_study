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
    const nav2s = common_vendor.ref([]);
    common_vendor.ref([]);
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
              slides.value = data.slides;
              nav2s.value = data.nav2s;
              console.log(nav2s);
            }
          });
        }
      });
    });
    const onNav2Tap = (e) => {
      console.log(e);
      console.log(common_vendor.toRaw(nav2s.value));
      console.log(e.currentTarget.dataset);
      const nav = common_vendor.toRaw(nav2s.value)[e.currentTarget.dataset.index];
      console.log(nav);
      if (nav.stype == 1) {
        common_vendor.index.navigateTo({
          url: nav.stype_link
        });
      }
    };
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
      } : {}, {
        f: nav2s.value && nav2s.value.length > 0
      }, nav2s.value && nav2s.value.length > 0 ? {
        g: common_vendor.f(nav2s.value, (item, index, i0) => {
          return {
            a: item.pic_image_url,
            b: index,
            c: common_vendor.o(onNav2Tap, index),
            d: index
          };
        })
      } : {});
    };
  }
};
wx.createPage(_sfc_main);

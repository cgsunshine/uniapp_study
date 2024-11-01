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
    const nav4s = common_vendor.ref([]);
    const hospitals = common_vendor.ref([]);
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
              nav4s.value = data.navs;
              hospitals.value = data.hospitals;
              console.log(nav2s);
            }
          });
        }
      });
    });
    const onNav2Tap = (e) => {
      const nav = common_vendor.toRaw(nav2s.value)[e.currentTarget.dataset.index];
      jump(nav);
    };
    const onNav4Tap = (e) => {
      const nav = common_vendor.toRaw(nav4s.value)[e.currentTarget.dataset.index];
      jump(nav);
    };
    const jump = (nav) => {
      if (nav.stype == 1) {
        common_vendor.index.navigateTo({
          url: nav.stype_link
        });
      }
    };
    const toHospital = (e) => {
      console.log("e.currentTarget.dataset.hid", e.currentTarget.dataset.hid);
      common_vendor.index.navigateTo({
        url: "/pages/hospital/index?hid=" + e.currentTarget.dataset.hid
      });
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
      } : {}, {
        h: nav4s.value && nav4s.value.length > 0
      }, nav4s.value && nav4s.value.length > 0 ? {
        i: common_vendor.f(nav4s.value, (item, index, i0) => {
          return {
            a: item.pic_image_url,
            b: common_vendor.t(item.title),
            c: common_vendor.s("color:" + (item.tcolor ? item.tcolor : "")),
            d: index,
            e: common_vendor.o(onNav4Tap, index),
            f: index
          };
        })
      } : {}, {
        j: common_vendor.f(hospitals.value, (item, index, i0) => {
          return {
            a: item.avatar ? item.avatar_url : "../../static/resource/images/avatar_def.png",
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.rank),
            d: common_vendor.t(item.label),
            e: common_vendor.t(item.intro),
            f: item.id,
            g: item.id,
            h: common_vendor.o(toHospital, item.id)
          };
        })
      });
    };
  }
};
wx.createPage(_sfc_main);

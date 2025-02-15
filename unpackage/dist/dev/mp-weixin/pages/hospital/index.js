"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_navBar2 = common_vendor.resolveComponent("navBar");
  const _easycom_share2 = common_vendor.resolveComponent("share");
  (_easycom_navBar2 + _easycom_share2)();
}
const _easycom_navBar = () => "../../components/navBar/navBar.js";
const _easycom_share = () => "../../components/share/share.js";
if (!Math) {
  (_easycom_navBar + _easycom_share)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const app = getApp();
    const navBarHeight = common_vendor.ref("");
    const onNavBarAttached = (e) => {
      navBarHeight.value = e.detail.navBarHeight;
    };
    const clone_shareModal = common_vendor.ref(false);
    const showShareModal = () => {
      clone_shareModal.value = true;
    };
    const hospital = common_vendor.ref({});
    common_vendor.onLoad((params) => {
      app.globalData.utils.request({
        url: "/Hospital/index",
        data: {
          hid: params.hid
        },
        success: (res) => {
          common_vendor.index.__f__("log", "at pages/hospital/index.vue:118", res);
          hospital.value = res.data.hospital;
          services.value = res.data.services;
        }
      });
    });
    const services = common_vendor.ref([]);
    const toService = (e) => {
      common_vendor.index.navigateTo({
        url: "../service/index?hid=" + hospital.value.id + "&svid" + e.currentTarget.dataset.svid
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onNavBarAttached),
        b: common_vendor.p({
          ["title-text"]: "",
          isHeight: false,
          isWhite: true,
          background: "none"
        }),
        c: hospital.value.avatar_url,
        d: hospital.value.avatar_url,
        e: common_vendor.t(hospital.value.name),
        f: common_vendor.t(hospital.value.rank),
        g: common_vendor.t(hospital.value.label),
        h: common_vendor.o(showShareModal),
        i: common_assets._imports_0$4,
        j: common_vendor.t(hospital.value.city),
        k: common_vendor.t(hospital.value.district),
        l: common_vendor.t(hospital.value.address),
        m: common_vendor.o((...args) => _ctx.toMap && _ctx.toMap(...args)),
        n: common_vendor.f(services.value, (item, index, i0) => {
          return common_vendor.e({
            a: item.use_switch == 1
          }, item.use_switch == 1 ? {
            b: item.logo_image ? item.logo_image_url : "../../resource/images/avatar.jpg",
            c: common_vendor.t(item.name),
            d: common_vendor.t(item.intro),
            e: common_vendor.t(item.price)
          } : {}, {
            f: common_vendor.o(toService, index),
            g: item.id,
            h: index
          });
        }),
        o: common_vendor.s("position:absolute;top:" + navBarHeight.value + "rpx;padding-top:65rpx;overflow:hidden;width:100%;"),
        p: common_vendor.p({
          shareModal: clone_shareModal.value
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/hospital/index.js.map

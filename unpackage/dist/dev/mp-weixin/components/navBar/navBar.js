"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "navBar",
  props: {
    background: {
      type: String,
      default: "rgba(255,255,255,1)"
    },
    color: {
      type: String,
      default: "rgba(0,0,0,1)"
    },
    fontSize: {
      type: String,
      default: 32
    },
    iconWidth: {
      type: String,
      default: 115
    },
    iconHeight: {
      type: String,
      default: 38
    },
    titleText: {
      type: String,
      default: ""
    },
    isHome: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    common_vendor.onBeforeMount(() => {
      setNavSize();
      setStyle();
    });
    const status = common_vendor.ref(0);
    const navHeight = common_vendor.ref(0);
    const containerStyle = common_vendor.ref("");
    const textStyle = common_vendor.ref("");
    const pages = common_vendor.ref(getCurrentPages().length);
    console.log();
    const iconStyle = common_vendor.ref("");
    const menu = common_vendor.reactive(common_vendor.index.getMenuButtonBoundingClientRect());
    const setNavSize = () => {
      const { system, statusBarHeight } = common_vendor.index.getSystemInfoSync();
      status.value = statusBarHeight * 2;
      const isIOS = system.indexOf("IOS") > -1;
      if (!isIOS) {
        navHeight.value = 96;
        console.log("安卓系统");
      }
      console.log("苹果系统");
      navHeight.value = 88;
    };
    const setStyle = () => {
      containerStyle.value = ["background:" + props.background].join(";");
      textStyle.value = ["color:" + props.color, "font-size:" + props.fontSize + "rpx"].join(";");
      iconStyle.value = ["width:" + props.iconHeight + "rpx", "height" + props.iconHeight + "rpx"];
    };
    const backOrHome = () => {
      if (pages.value > 1) {
        common_vendor.index.navigateBack();
      } else {
        common_vendor.index.switchTab({
          url: "/pages/user/index"
        });
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.s("height:" + status.value + "rpx;" + containerStyle.value),
        b: __props.isHome
      }, __props.isHome ? {
        c: common_vendor.s("height:" + menu.height * 2 + "rpx;line-height:" + menu.height * 2 + "rpx;margin:top:" + menu.top * 2 - status.value + "rpx;margin-left:32rpx;margin-right:" + (menu.width * 2 + 24) + "rpx;background:#f4f4f4;border-radius:200rpx;text-align:center;"),
        d: common_vendor.s("height:" + navHeight.value + "rpx;line-height:" + navHeight.value + "rpx;padding-left:20rpx;")
      } : common_vendor.e({
        e: pages.value > 1
      }, pages.value > 1 ? {
        f: common_assets._imports_0$2
      } : {
        g: common_assets._imports_1$1
      }, {
        h: common_vendor.o(backOrHome),
        i: __props.titleText
      }, __props.titleText ? {
        j: common_vendor.t(__props.titleText),
        k: common_vendor.s("height:" + navHeight.value + "prx;line-height:" + navHeight.value + "rpx;" + textStyle.value)
      } : {}, {
        l: common_vendor.s("height:" + navHeight.value + "rpx;" + containerStyle.value)
      }));
    };
  }
};
wx.createComponent(_sfc_main);

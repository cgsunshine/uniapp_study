"use strict";
const common_vendor = require("../../common/vendor.js");
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
    const data = common_vendor.ref("动态数据");
    const changeData = (val) => {
      data.value = val;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(changeData),
        b: common_vendor.p({
          name: "navBar组件",
          content: data.value
        })
      };
    };
  }
};
wx.createPage(_sfc_main);

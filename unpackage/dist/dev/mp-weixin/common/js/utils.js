"use strict";
const common_vendor = require("../vendor.js");
class Utils {
  //获取用户信息
  getUserInfo() {
    common_vendor.index.login({
      success: function(res) {
        console.log(res);
      }
    });
  }
}
const Utils$1 = new Utils();
exports.Utils = Utils$1;

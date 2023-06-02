// 常量集合
import constant from "./core/constant";

// 字符串
import * as stringUtil from "./core/string";
// 数字
import * as numberUtil from "./core/number";
// 数组
import * as arrayUtil from "./core/array";
// 日期
import * as dateUtil from "./core/date";
// 对象
import * as objectUtil from "./core/object";
// 函数
import * as functionUtil from "./core/function";

// 正则
import * as regexpUtil from "./core/regexp";

// 数学
import * as mathUtil from "./core/math";

// 随机数
import * as randomUtil from "./core/random";

// 文件
import * as fileUtil from "./core/file";

// 颜色
import * as colorUtil from "./core/color";

// 校验
import * as validateUtil from "./core/validate";

// 键盘 Keycode
import * as keyCodeUtil from "./core/keycode";

// 浏览器 Url
import * as urlUtil from "./core/url";
// 浏览器 Cookie
import * as cookieUtil from "./core/cookie";
// 浏览器 Storage
import * as storageUtil from "./core/storage";
// 浏览器 Dom
import * as domUtil from "./core/dom";
// 浏览器 Device
import * as deviceUtil from "./core/device";

// 微信小程序工具类
import * as weappUtil from "./core/weapp";

// 导出
export default {
  // 常量集合
  ...constant,

  // 字符串
  ...stringUtil,
  // 数字
  ...numberUtil,
  // 数组
  ...arrayUtil,
  ...dateUtil,
  // 对象
  ...objectUtil,
  // 函数
  ...functionUtil,

  // 正则
  ...regexpUtil,

  // 数学
  ...mathUtil,

  // 随机数
  ...randomUtil,

  // 文件
  ...fileUtil,

  // 颜色
  ...colorUtil,

  // 校验
  ...validateUtil,

  // 键盘 Keycode
  ...keyCodeUtil,

  // 浏览器 Url
  ...urlUtil,
  // 浏览器 Cookie
  ...cookieUtil,
  // 浏览器 Storage
  ...storageUtil,
  // 浏览器 Dom
  ...domUtil,
  // 浏览器 Device
  ...deviceUtil,

  // 微信小程序
  ...weappUtil,
};

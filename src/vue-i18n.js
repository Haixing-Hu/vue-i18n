/**
 * A plugin of Vue.js providing i18n functions.
 *
 * @author Haixing Hu
 */
exports.install = function (Vue, options) {
  var format = require("./format.js");
  // add the $format function
  Vue.prototype.$i18n = format;
};
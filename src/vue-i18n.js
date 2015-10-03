
/**
 * Shallowly clone an object.
 *
 * @param obj
 *   the object to be cloned.
 * @return
 *   the shallowly cloned object,
 */
function cloneObject(obj) {
  var result = {};
  if (obj !== undefined && obj !== null) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        result[prop] = obj[prop];
      }
    }
  }
  return result;
}

/**
 * Merges the customized options to the default options.
 *
 * If a property exists in both the default options and the customized options,
 * the value in the customized options will override the value in the default
 * options.
 *
 * @param defaultOptions
 *    the default options.
 * @param customizedOptions
 *    the secondary options.
 * @return
 *    the merged options, which is a new object.
 */
function mergeOptions(defaultOptions, customizedOptions) {
  var result = {};
  if (target === undefined || target === null) {
    result = defaultOptions;
  } else {

    for (var key : target) {
      if (target.hasOwnProperty(key)) {
        source[key] = target[key];
      }
    }
  }
  return source;
}

/**
 * The default options.
 */
var DEFAULT_OPTIONS = {
  basePath: "i18n",
  defaultLanguage: "en-US"
};

/**
 * A plugin of Vue.js providing i18n functions.
 *
 * @param Vue
 *    the Vue class.
 * @param options
 *    the configuration options.
 * @author Haixing Hu
 */
exports.install = function (Vue, options) {
  // merge the default options
  var opts = mergeOptions(DEFAULT_OPTIONS, options);

  if (options !== undefined && options != null) {
    if (options.basePath) {
      opts.basePath = options.basePath;
    }
    if (options.defaultLanguage) {
      opts.defaultLanguage = options.defaultLanguage;
    }
  }

  // add the $format function
  Vue.prototype.$setLanguage = function(language) {

  };
};

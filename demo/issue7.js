var Vue = require("../lib/vue/dist/vue.js");
var i18n = require("../src/vue-i18n.js");
var format = require("../lib/vue-format/src/vue-format.js");
Vue.use(format);
Vue.use(i18n);

var vm = new Vue({
  el: "#app",
  data: {
    user: "Tom",
    concated_list: "1,2,3",
    list: [1,2,3],
    language: "en-US"
  },
  watch: {
    "language": function(val, oldVal) {
      this.$setLanguage(val);
    },
    "concated_list": function(val, oldVal) {
      this.list = val.split(",");
    }
  },
  created: function() {
    this.$setLanguage(this.language);
  },
  methods: {
    getUser: function() {
      return user;
    }
  }
});
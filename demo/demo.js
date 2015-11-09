var Vue = require("../lib/vue/dist/vue.js");
var i18n = require("../src/vue-i18n.js");
Vue.use(i18n);

var vm = new Vue({
  el: "#app",
  data: {
    language: "en-US"
  },
  watch: {
    "language": function(val, oldVal) {
      this.$setLanguage(val);
    }
  },
  created: function() {
    this.$setLanguage(this.language);
  },
  components: {
    "hello-world": {
      template: "<span>{{$i18n.message.hello}}, {{$i18n.message.world}}</span>"
    }
  }
});
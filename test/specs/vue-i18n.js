var assert = require("assert");
var Vue = require("vue");
var VueI18n = require("../../src/vue-i18n.js");

describe("vue-i18n", function() {

  var VmBase = {
    template: "<div>" +
                "<p class='lang'>{{$language}}</p>" +
                "<p class='hello'>{{$i18n.message.hello}}</p>" +
                "<p class='world'>{{$i18n.message.world}}</p>" +
                "<p class='hello-world'><hello-world></hello-world></p>" +
                "<p class='world-hello'><world-hello></world-hello></p>" +
              "</div>",
    components: {
      "hello-world": {
        template: "<span>{{$i18n.message.hello}}, {{$i18n.message.world}}</span>",
        inherit: true
      },
      "world-hello": {
        template: "<span>{{$i18n.message.world}}, {{$i18n.message.hello}}</span>",
        inherit: false
      }
    }
  };

  describe("default options", function() {
    before(function() {
      Vue.use(VueI18n, {
        baseUrl: "/base/test/specs/i18n"
      });
    });

    context("normal", function() {
      it("en-US", function(done) {
        var VM = Vue.extend({
          mixins: [VmBase],
          el: function() {
            var el = document.createElement("div");
            el.id = "default-opt-en-US";
            document.body.appendChild(el);
            return el;
          },
          beforeCompile: function() {
            this.$setLanguage("en-US");
          }
        });
        var vm = new VM();
        vm.$nextTick(function() {
          var lang = document.querySelector("#default-opt-en-US .lang");
          assert.equal(lang.textContent, "en-US");
          var hello = document.querySelector("#default-opt-en-US .hello");
          assert.equal(hello.textContent, "Hello");
          var world = document.querySelector("#default-opt-en-US .world");
          assert.equal(world.textContent, "World");
          var hello_world = document.querySelector("#default-opt-en-US .hello-world");
          assert.equal(hello_world.textContent, "Hello, World");
          var world_hello = document.querySelector("#default-opt-en-US .world-hello");
          assert.equal(world_hello.textContent, "World, Hello");
          done();
        });
      });

      it("zh-CN", function(done) {
        var VM = Vue.extend({
          mixins: [VmBase],
          el: function() {
            var el = document.createElement("div");
            el.id = "default-opt-zh-CN";
            document.body.appendChild(el);
            return el;
          },
          beforeCompile: function() {
            this.$setLanguage("zh-CN");
          }
        });
        var vm = new VM();
        vm.$nextTick(function() {
          var lang = document.querySelector("#default-opt-zh-CN .lang");
          assert.equal(lang.textContent, "zh-CN");
          var hello = document.querySelector("#default-opt-zh-CN .hello");
          assert.equal(hello.textContent, "您好");
          var world = document.querySelector("#default-opt-zh-CN .world");
          assert.equal(world.textContent, "世界");
          var hello_world = document.querySelector("#default-opt-zh-CN .hello-world");
          assert.equal(hello_world.textContent, "您好, 世界");
          var world_hello = document.querySelector("#default-opt-zh-CN .world-hello");
          assert.equal(world_hello.textContent, "世界, 您好");
          done();
        });
      });
    });

    context("fallback language", function() {
      it("ja-JP", function(done) {
        var VM = Vue.extend({
          mixins: [VmBase],
          el: function() {
            var el = document.createElement("div");
            el.id = "default-opt-ja-JP";
            document.body.appendChild(el);
            return el;
          },
          beforeCompile: function() {
            this.$setLanguage("ja-JP");
          }
        });
        var vm = new VM();
        vm.$nextTick(function() {
          var lang = document.querySelector("#default-opt-ja-JP .lang");
          assert.equal(lang.textContent, "ja-JP");
          var hello = document.querySelector("#default-opt-ja-JP .hello");
          assert.equal(hello.textContent, "Hello");
          var world = document.querySelector("#default-opt-ja-JP .world");
          assert.equal(world.textContent, "World");
          var hello_world = document.querySelector("#default-opt-ja-JP .hello-world");
          assert.equal(hello_world.textContent, "Hello, World");
          var world_hello = document.querySelector("#default-opt-ja-JP .world-hello");
          assert.equal(world_hello.textContent, "World, Hello");
          done();
        });
      });
    });
  });

  describe("customized fallback language", function() {
    before(function() {
      Vue.use(VueI18n, {
        baseUrl: "/base/test/specs/i18n",
        fallbackLanguage: "zh-CN"
      });
    });

    context("normal", function() {
      it("en-US", function(done) {
        var VM = Vue.extend({
          mixins: [VmBase],
          el: function() {
            var el = document.createElement("div");
            el.id = "customized-opt-en-US";
            document.body.appendChild(el);
            return el;
          },
          beforeCompile: function() {
            this.$setLanguage("en-US");
          }
        });
        var vm = new VM();
        vm.$nextTick(function() {
          var lang = document.querySelector("#customized-opt-en-US .lang");
          assert.equal(lang.textContent, "en-US");
          var hello = document.querySelector("#customized-opt-en-US .hello");
          assert.equal(hello.textContent, "Hello");
          var world = document.querySelector("#customized-opt-en-US .world");
          assert.equal(world.textContent, "World");
          var hello_world = document.querySelector("#customized-opt-en-US .hello-world");
          assert.equal(hello_world.textContent, "Hello, World");
          var world_hello = document.querySelector("#customized-opt-en-US .world-hello");
          assert.equal(world_hello.textContent, "World, Hello");
          done();
        });
      });

      it("zh-CN", function(done) {
        var VM = Vue.extend({
          mixins: [VmBase],
          el: function() {
            var el = document.createElement("div");
            el.id = "customized-opt-zh-CN";
            document.body.appendChild(el);
            return el;
          },
          beforeCompile: function() {
            this.$setLanguage("zh-CN");
          }
        });
        var vm = new VM();
        vm.$nextTick(function() {
          var lang = document.querySelector("#customized-opt-zh-CN .lang");
          assert.equal(lang.textContent, "zh-CN");
          var hello = document.querySelector("#customized-opt-zh-CN .hello");
          assert.equal(hello.textContent, "您好");
          var world = document.querySelector("#customized-opt-zh-CN .world");
          assert.equal(world.textContent, "世界");
          var hello_world = document.querySelector("#customized-opt-zh-CN .hello-world");
          assert.equal(hello_world.textContent, "您好, 世界");
          var world_hello = document.querySelector("#customized-opt-zh-CN .world-hello");
          assert.equal(world_hello.textContent, "世界, 您好");
          done();
        });
      });
    });

    context("fallback language", function() {
      it("ja-JP", function(done) {
        var VM = Vue.extend({
          mixins: [VmBase],
          el: function() {
            var el = document.createElement("div");
            el.id = "customized-opt-ja-JP";
            document.body.appendChild(el);
            return el;
          },
          beforeCompile: function() {
            this.$setLanguage("ja-JP");
          }
        });
        var vm = new VM();
        vm.$nextTick(function() {
          var lang = document.querySelector("#customized-opt-ja-JP .lang");
          assert.equal(lang.textContent, "ja-JP");
          var hello = document.querySelector("#customized-opt-ja-JP .hello");
          assert.equal(hello.textContent, "您好");
          var world = document.querySelector("#customized-opt-ja-JP .world");
          assert.equal(world.textContent, "世界");
          var hello_world = document.querySelector("#customized-opt-ja-JP .hello-world");
          assert.equal(hello_world.textContent, "您好, 世界");
          var world_hello = document.querySelector("#customized-opt-ja-JP .world-hello");
          assert.equal(world_hello.textContent, "世界, 您好");
          done();
        });
      });
    });
  });
});

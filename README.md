# vue-i18n

[![Build Status](https://circleci.com/gh/Haixing-Hu/vue-i18n/tree/master.svg?style=shield)](https://circleci.com/gh/Haixing-Hu/vue-i18n/tree/master)
[![Coverage Status](https://coveralls.io/repos/Haixing-Hu/vue-i18n/badge.svg?branch=master&service=github)](https://coveralls.io/github/Haixing-Hu/vue-i18n?branch=master)
[![bitHound Score](https://www.bithound.io/github/Haixing-Hu/vue-i18n/badges/score.svg)](https://www.bithound.io/github/Haixing-Hu/vue-i18n)
[![Dependency Status](https://david-dm.org/Haixing-Hu/vue-i18n.svg)](https://david-dm.org/Haixing-Hu/vue-i18n)
[![devDependency Status](https://david-dm.org/Haixing-Hu/vue-i18n/dev-status.svg)](https://david-dm.org/Haixing-Hu/vue-i18n#info=devDependencies)

Yet another internationalization plugin for Vue.js.

# Requirements
- [Vue.js](https://github.com/yyx990803/vue) `^0.12.10`
- [JQuery](https://github.com/jquery/jquery) `^2.1.4`

# Instllation

## npm

```shell
$ npm install vuejs-i18n
```

## bower

```shell
$ bower install vuejs-i18n
```

# Usage

JSON file: `resources/i18n/en.json`

```json
message: {
  "hello": "the world"
}
```

JSON file: `resources/i18n/ja.json`
```json
message: {
  "hello": "ザ・ワールド"
}
```

```javascript
var Vue = require('vue')
var i18n = require('vue-i18n')

// set plugin
Vue.use(i18n, {
  basePath: 'resources/i18n'
})

// create instance
new Vue({
  el: '#test-i18n',
  beforeCompile: function() {
    this.$language = "ja";
  },
  methods: {
    switchLanguage: function(lang) {
      this.$language = lang;
    }
  }
})
```

Template the following:

```html
<div id="test-i18n" class="message">
  <p>{{$i18n.message.hello}}</p>
</div>
```

Output the following:

```html
<div id="test-i18n" class="message">
  <p>ザ・ワールド</p>
</div>
```
# Formatting Messages

This plugin could work together with the [vue-format](https://github.com/Haixing-Hu/vue-format/) plugin.

## Named formatting

JSON file: `resources/i18n/en.json`

```json
message: {
  "hello": "Hello {name}!"
}
```

Javascript file:
```javascript
var Vue = require('vue')
var i18n = require('vue-i18n')
var format = require('vue-format')

// set plugin
Vue.use(i18n, {
  basePath: 'resources/i18n'
})
Vue.use(format)

// create instance
new Vue({
  el: '#test-i18n'
})
```

Template the following:

```html
<div class="message">
  <p>{{ $format($i18n.message.hello, {name: "world"}) }}</p>
</div>
```

Output the following:

```html
<div class="message">
  <p>Hello world!</p>
</div>
```

## List formatting

JSON file: `resources/i18n/en.json`

```json
message: {
  "hello": "Hello {0}, {1}!"
}
```

Template the following:

```html
<div class="message">
  <p>{{ $format($i18n.message.hello, ["world", 123]) }}</p>
</div>
```

Output the following:

```html
<div class="message">
  <p>Hello world, 123!</p>
</div>
```

# API

## $language
- The code of the current language. Setting this value will change the language and reload the localization messages according to the new language.

## $i18n
- An object which contains the localization messages for the current language.

# Options

## Plugin options

```javascript
Vue.use(plugin, {
  defaultLanguage: "en",
  basePath: "resources/i18n"
})
```

### defaultLanguage
Specify the code of the default langauge. If the current language is not specified, the default language will be used. If the localization JSON file of the specified language is not found, the localization JSON file of the default language will be loaded.

The default value of this option is "en".

### basePath
Specify the base path of the localization JSON files, relative to the current javascript file.

The default value of this option is ".".

# Contributing
- Fork it !
- Create your top branch from `dev`: `git branch my-new-topic origin/dev`
- Commit your changes: `git commit -am 'Add some topic'`
- Push to the branch: `git push origin my-new-topic`
- Submit a pull request to `dev` branch of `Haixing-Hu/vue-i18n` repository !


# Testing

```shell
$ gulp test
```


# License

## MIT

[MIT](http://opensource.org/licenses/MIT)


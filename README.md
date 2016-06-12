# vue-i18n

[![Build Status](https://circleci.com/gh/Haixing-Hu/vue-i18n/tree/master.svg?style=shield)](https://circleci.com/gh/Haixing-Hu/vue-i18n/tree/master)
[![Coverage Status](https://coveralls.io/repos/Haixing-Hu/vue-i18n/badge.svg?branch=master&service=github)](https://coveralls.io/github/Haixing-Hu/vue-i18n?branch=master)
[![bitHound Score](https://www.bithound.io/github/Haixing-Hu/vue-i18n/badges/score.svg)](https://www.bithound.io/github/Haixing-Hu/vue-i18n)
[![Dependency Status](https://david-dm.org/Haixing-Hu/vue-i18n.svg)](https://david-dm.org/Haixing-Hu/vue-i18n)
[![devDependency Status](https://david-dm.org/Haixing-Hu/vue-i18n/dev-status.svg)](https://david-dm.org/Haixing-Hu/vue-i18n#info=devDependencies)

Yet another internationalization plugin for Vue.js.

# Requirements
- [Vue.js](https://github.com/yyx990803/vue) `^1.0.24`
- [JQuery](https://github.com/jquery/jquery) `^3.0.0`

# Instllation

## npm

```shell
$ npm install vue-i18n-plugin
```

## bower

```shell
$ bower install vue-i18n-plugin
```

# Usage

JSON file: `resources/i18n/en-US.json`

```json
{
  "message": {
    "hello": "Hello",
    "world": "World"
  }
}
```

JSON file: `resources/i18n/zh-CN.json`
```json
{
  "message": {
    "hello": "您好",
    "world": "世界"
  }
}
```

```javascript
var Vue = require('vue');
var i18n = require('vue-i18n');

// set plugin
Vue.use(i18n, {
  baseUrl: 'resources/i18n'
});

// create instance
new Vue({
  el: '#test-i18n',
  beforeCompile: function() {
    this.$setLanguage("zh-CN");
  },
  methods: {
    switchLanguage: function(lang) {
      this.$setLanguage(lang);
    }
  }
});
```

Template the following:

```html
<div id="test-i18n" class="message">
  <p>Language: {{$language}}</p>
  <p>{{$i18n.message.hello}}, {{$i18n.message.world}}</p>
</div>
```

Output the following:

```html
<div id="test-i18n" class="message">
  <p>Language: zh-CN</p>
  <p>您好, 世界</p>
</div>
```
# Formatting Messages

This plugin could work together with the [vue-format](https://github.com/Haixing-Hu/vue-format/) plugin.

JSON file: `resources/i18n/en.json`

```json
{
  "message": {
    "hello": "Hello {0}, {1}!"
  }
}
```

Template the following:

```html
<div class="message">
  <p>{{ $i18n.message.hello | format "world" 123 }}</p>
</div>
```

Output the following:

```html
<div class="message">
  <p>Hello world, 123!</p>
</div>
```

# API

## `$setLanguage(lang)`

Sets the current language. Calling this value will reload the localization files
according to the new language and change the current displayed language.

- `lang`: the code of the new language.

## `$language`

Stores the current language.

## `$i18n`

An object which contains the localization messages for the current language.

# Options

## Plugin options

```javascript
Vue.use(plugin, {
  baseUrl: "i18n"
  fallbackLanguage: "en-US",
  timeout: 500,
  async: false
})
```

### `baseUrl`
Specify the base URL of the localization files, which could be either an
absolute URL, or a relative URL relative to the current javascript file.

The default value of this option is `i18n`.

### `fallbackLanguage`

Specify the code of the fallback langauge. If the localization file of the
current language cannot be load, the localization file of the fallback language
will be load.

The default value of this option is `en-US`.

### `timeout`

The timeout for the AJAX calls, in milliseconds. Default value is `500`.

### `async`

Indicates whether to load the localization file asynchronously. Default value
is `false`.

# Contributing
- Fork it !
- Create your top branch from `dev`: `git branch my-new-topic origin/dev`
- Commit your changes: `git commit -am 'Add some topic'`
- Push to the branch: `git push origin my-new-topic`
- Submit a pull request to `dev` branch of `Haixing-Hu/vue-i18n` repository !

# Building and Testing

First you should install all depended NPM packages. The NPM packages are used
for building and testing this package.

```shell
$ npm install
```

Then install all depended bower packages. The bower packages are depended by
this packages.

```shell
$ bower install
```

Now you can build the project.
```shell
$ gulp build
```

The following command will test the project.
```shell
$ gulp test
```

The following command will perform the test and generate a coverage report.
```shell
$ gulp test:coverage
```

The following command will perform the test, generate a coverage report, and
upload the coverage report to [coveralls.io](https://coveralls.io/).
```shell
$ gulp test:coveralls
```

You can also run `bower install` and `gulp build` together with the following
command:
```shell
npm build
```

Or run `bower install` and `gulp test:coveralls` together with the following
command:
```shell
npm test
```

# License

## MIT

[MIT](http://opensource.org/licenses/MIT)


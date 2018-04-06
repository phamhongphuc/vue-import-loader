# Vue Import Loader

[![Travis Build](https://travis-ci.org/phamhongphuc/vue-import-loader.svg?branch=master)](https://travis-ci.org/phamhongphuc/vue-import-loader/builds "Most recent build") [![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/phamhongphuc/vue-import-loader.svg)](https://github.com/phamhongphuc/vue-import-loader/issues "Average time to resolve an issue") [![Percentage of issues still open](http://isitmaintained.com/badge/open/phamhongphuc/vue-import-loader.svg)](https://github.com/phamhongphuc/vue-import-loader/issues "Percentage of issues still open")

> Vue.js component pre-loader for Webpack

## Description

In vue file, this loader create a new way to import your components.

```js
// From this
...'path/to/your/component.vue'

// To this
'ai-component': () => import('path/to/your/component.vue')
```

## Usage

### Install Package

* Install Packge via Github

`npm install phamhongphuc/vue-import-loader`

* Add `vue-import-loader` after `vue-loader` in webpack config

```js
module.exports = {
  // More config
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader",
            query: {
              presets: ["es2015", "stage-2"]
            }
          },
          {
            loader: "vue-import-loader"
          }
        ]
      }
    ]
  }
};
```

😎 Happy Coding 😎

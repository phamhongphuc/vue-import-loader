# Vue Import Loader

> Vue.js component pre-loader for Webpack

## Description

In vue file, this loader create a new way to import your components.

```js
// From this
...('path/to/your/component.vue')

// To this
'ai-component': () => import('path/to/your/component.vue')
```

## Usage

### Install Package

+ Install Packge via Github

```npm install phamhongphuc/vue-import-loader#master```

+ Add `vue-import-loader` to webpack

```js
module.exports = {
    // More config
    module: {
        rules: [{
            test: /\.vue$/,
            use: [{
                loader: 'vue-loader',
                query: {
                    presets: ['es2015', 'stage-2']
                }
            }, {
                loader: 'vue-import-loader'
            }]
        }]
    }
}
```

😎 Happy Coding 😎
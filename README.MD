# step 1
## vue环境最小需求

### vue
1. vue
2. vue-loader
3. vue-style-loader
4. babel-preset-vue
5. vue-template-compiler

### webpack
1. webpack
2. webpack-cli
3. webpack-dev-server

### babel
1. babel-loader
2. @babel/core
3. @babel/preset-env
4. @babel/polyfill
5. @babel/plugin-transform-runtime

### 其它loaders
- css相关
    1. sass-loader
    2. postcss-loader
    3. css-loader
    4. vue-style-loader(vue里面己有)
- 文件相关
    1. file-loader
    2. url-loader

### webpack plugins
1. clean-webpack-plugin
2. html-webpack-plugin
3. VueLoaderPlugin(在vue-loader里面，vue-loader 15之后才有)

### 其它
1. node-sass
2. autoprefixer

# step 2
## 开发环境完善eslint + jsx(2)
1. eslint
    1. babel-eslint
    2. eslint-config-vue
    3. eslint-plugin-vue
2. jsx
    1. babel-plugin-transform-vue-jsx
3. json-server
4. dev-server proxy

## 构建
1. plugins
    1. mini-css-extract-plugin(webpack4以前一般用extract-text-webpack-plugin)
    2. optimize-css-assets-webpack-plugin(压缩css)
2. 环境变量
    1. 在命令行中添加（如NODE_ENV=development MODE=sit, 通过process.env.MODE获取)
    2. webpack.EnvironmentPlugin定义变量，该变量可以注入代码里面

# step 3
## vue-router

## vuex

process.env.NODE_ENV = 'production'
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpack = require('./base.config.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = merge(baseWebpack, {
  mode: 'production',
  plugins: [
    new webpack.EnvironmentPlugin({
      'NODE_ENV': '"production"'
    }),
    /**
     * 将css提取到文件，文件数量要看splitChunks的配置
     */
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    /**
     * 压缩css，就算是production, 样式也是没压缩的,只是合并
     */
    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: {
        safe: true
      }
    })
  ]
})

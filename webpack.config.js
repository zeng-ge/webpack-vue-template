const path = require('path')
const rootDir = __dirname
const distDir = path.resolve(rootDir, './dist')
const { VueLoaderPlugin } = require('vue-loader')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  context: rootDir,
  devtool: 'cheap-module-source-map',
  entry: {
    app: './src/index.js'
  },
  output: {
    path: distDir,
    filename: '[name].js'
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.runtime.esm.js'
    },
    extensions: ['.vue', '.js']
  },
  optimization: {
    runtimeChunk: { name: 'runtime' },
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules.*\.js$/,
          name: 'vendor',
          chunks: 'all'
        },
      }
    }
  },
  module: {
    rules: [
      {
        test: /.vue$/,
        use: {
          loader: 'vue-loader'
        }
      },
      {
        test: /.js$/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    })
  ],
  devServer: {
    publicPath: '/',
    host: 'localhost',
    port: 4000,
    open: true,
    hot: true,
    overlay: true
  }
}

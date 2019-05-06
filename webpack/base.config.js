const path = require('path')
const projectDir = path.resolve(__dirname, '../')
const distDir = path.resolve(__dirname, '../dist')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

const isProduction = process.env.NODE_ENV === 'production'
const cssStyles = [
  { loader: isProduction ? MiniCssExtractPlugin.loader : 'vue-style-loader' },
  { loader: 'css-loader' },
  { loader: 'postcss-loader' }
]
const scssStyles = cssStyles.slice()
scssStyles.push({ loader: 'sass-loader' })

module.exports = {
  mode: 'development',
  context: projectDir,
  entry: {
    main: './src/index.js'
  },
  output: {
    path: distDir,
    filename: '[name].js'
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js'
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
        styles: {
          test: /\.(scss|css)/,
          name: 'styles',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          { loader: 'vue-loader' }
        ]
      },
      {
        test: /\.js$/,
        use: [
          { loader: 'babel-loader' }
        ]
      },
      {
        test: /\.scss$/,
        use: scssStyles
      },
      {
        test: /\.css$/,
        use: cssStyles
      },
      {
        test: /\.png|\.jpg/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 8192
            }
          }
        ]
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
  ]
}

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = require('./config')

module.exports = {
  entry: {
    client: './src/index.js'
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: './'
  },
  {{#if_eq theme 'antd'}}
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  {{else}}
  resolve: {
    extensions: ['.web.js', '.js', '.jsx', '.json']
  },
  {{/if_eq}}
  module: {
    rules: [
      {{#if eslint}}
      {
        enforce: 'pre',
        test: /.js[x]?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {{/if}}
      {
        test: /\.js[x]?$/,
        loader: 'babel-loader',
        exclude: [/node_modules/]
      },
      {
        test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file-loader?limit=8192'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: config.title,
      template: path.join(__dirname, '/index.html'),
      filename: './index.html'
    })
  ]
}

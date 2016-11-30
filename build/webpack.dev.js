const webpack = require('webpack')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

const base = require('./webpack.base')
const config = require('./config')

base.devtool = 'eval-source-map'
base.output.publicPath = '/assets/'

// Plugins Configuration
base.plugins.push(
  new ProgressBarPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.LoaderOptionsPlugin({
    options: {
      babel: config.babel,
      postcss: config.postcss
    }
  })
)

base.module.rules.push(
  {
    test: /\.css$/,
    loaders: [
      'style-loader',
      'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]',
      'postcss-loader'
    ]
  },
  {
    test: /\.less$/,
    loader: 'style-loader!css-loader!less-loader'
  }
)

module.exports = base

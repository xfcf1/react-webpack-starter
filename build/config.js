const env = process.env.NODE_ENV

const config = {
  port: '4000',
  title: 'react-webpack-starter',
  vendor: [
    'react',
    'react-dom',
    'redux',
    'react-redux',
    'react-router',
    'redux-thunk'
  ],
  babel: {
    babelrc: false,
    plugins: [['import', [
      { libraryName: 'antd', style: true }
    ]]],
    presets: ['es2015', 'stage-0', 'react']
  },
  postcss: [
    require('postcss-cssnext')({
      browsers: ['last 2 versions', 'ie > 8']
    })
  ]
}

if (env === 'production') {
  config.babel.presets.push('react-optimize')
} else {
  config.babel.presets.push('react-hmre')
}

module.exports = config

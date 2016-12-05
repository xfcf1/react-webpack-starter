const env = process.env.NODE_ENV

const config = {
  port: '{{port}}',
  title: '{{name}}',
  vendor: [
    'react',
    'react-dom',
    'redux',
    'react-redux',
    'react-router',
    'redux-thunk'
  ],
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

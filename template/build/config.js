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

module.exports = config

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./store.production')
} else {
  module.exports = require('./store.development')
}

import _ from 'lodash'
const {
  resolve
} = require('path')

const defaults = {
  nodeCache: {
    enabled: false,
    options: {}
  },
  wpApi: {
    enabled: true,
    options: {
      endpoint: null,
      transport: {}
    }
  }
}
module.exports = function simpleNuxtWpapi (moduleOptions) {
  const options = _.merge(defaults, moduleOptions)
  if (!options.wpApi.enabled || !options.wpApi.options.endpoint) return

  this.addPlugin({
    src: resolve(__dirname, 'templates/plugin.js'),
    fileName: 'simple-nuxt-wpapi.js',
    options
  })
}

module.exports.meta = require('../package.json')

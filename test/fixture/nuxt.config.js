const {
  resolve
} = require('path')

module.exports = {
  rootDir: resolve(__dirname, '../..'),
  srcDir: __dirname,
  dev: false,
  render: {
    resourceHints: false
  },
  modules: [
    [
      '@@',
      {
        nodeCache: {
          enabled: true,
          options: {}
        },
        wpApi: {
          enabled: true,
          options: {
            endpoint: 'http://demo.wp-api.org/wp-json'
          }
        }
      }
    ]
  ]
}

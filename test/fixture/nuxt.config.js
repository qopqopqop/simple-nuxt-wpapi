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
          debug: true,
          options: {
            endpoint: 'https://ab.kik.avatarla.io/wp-json'
          }
        }
      }
    ]
  ]
}

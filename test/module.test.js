const {
  Nuxt,
  Builder
} = require('nuxt')
const request = require('request-promise-native')

const config = require('./fixture/nuxt.config')

const url = path => `http://localhost:4000${path}`
const get = path => request(url(path))

describe('simple nuxt wpapi module', () => {
  let nuxt
  let addTemplate
  let pageWpCall = null

  beforeAll(async () => {
    nuxt = new Nuxt(config)

    addTemplate = nuxt.moduleContainer.addTemplate = jest.fn(
      nuxt.moduleContainer.addTemplate
    )

    await new Builder(nuxt).build()
    await nuxt.listen(4000)
    pageWpCall = await nuxt.renderAndGetWindow(url('/wpcall'))
  }, 60000)

  afterAll(async () => {
    await nuxt.close()
  })

  test('endpoint', () => {
    expect(addTemplate).toBeDefined()
    let call = addTemplate.mock.calls.find(args =>
      args[0].src.includes('plugin.js')
    )
    let options = call[0].options
    expect(options.wpApi.options.endpoint.toString()).toBe(
      `https://ab.kik.avatarla.io/wp-json`
    )
  })

  test('should contain the string Hello World!', async () => {
    let html = await get('/')
    expect(html).toContain('Hello World!')
  })

  describe('pageWpCall', () => {
    it('should load /wpcall with sample-page and render the id', () => {
      const html = pageWpCall.document.body.innerHTML
      expect(html).toContain('<span>2</span>')
    })
  })
})

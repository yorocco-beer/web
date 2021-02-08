const contentful = require('contentful')

// eslint-disable-next-line no-console
console.log('hoge')
console.log(process.env.CTFL_SPACE)
console.log(process.env.CTFL_ACCESS_TOKEN)

module.exports = {
  createClient() {
    return contentful.createClient({
      space: process.env.CTFL_SPACE,
      accessToken: process.env.CTFL_ACCESS_TOKEN,
    })
  },
}

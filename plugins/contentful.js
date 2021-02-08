const contentful = require('contentful')

// eslint-disable-next-line no-console
console.log(process.env.CTFL_SPACE)

module.exports = {
  createClient() {
    return contentful.createClient({
      space: process.env.CTFL_SPACE,
      accessToken: process.env.CTFL_ACCESS_TOKEN,
    })
  },
}

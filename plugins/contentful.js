const contentful = require('contentful')

module.exports = {
  createClient() {
    return contentful.createClient({
      space: process.env.CTFL_SPACE,
      accessToken: process.env.CTFL_ACCESS_TOKEN,
    })
  },
}

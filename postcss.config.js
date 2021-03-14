module.exports = () => ({
  parser: false,
  plugins: {
    'postcss-easy-import': { extensions: ['.pcss'] },
    'postcss-simple-vars': { silent: true },
    'postcss-mixins': {},
    'postcss-extend': {},
    'postcss-nested': {},
    'postcss-each': {},
    'postcss-calc': {},
    'postcss-utilities': {},
    autoprefixer: {},
  },
})

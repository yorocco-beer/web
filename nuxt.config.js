import { createClient } from './plugins/contentful.js'
const environment = process.env.NODE_ENV || 'development'
let envSet

if (!process.env.NETLIFY) {
  envSet = require(`./env.${environment}.js`)
}

export default {
  env: envSet,
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'yorocco',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    bodyAttrs: {
      class: 'box-home',
    },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        crossorigin: 'anonymous',
        href:
          'https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/swiper/swiper-bundle.min.css',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Mr+De+Haviland&display=swap',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;800&display=swap',
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/style.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/composition-api',
    { src: '@/plugins/vue-awesome-swiper', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  generate: {
    routes() {
      const client = createClient()
      return client
        .getEntries({ content_type: process.env.CTFL_CONTENT_TYPE_POST })
        .then((entries) => {
          return entries.items.map((entry) => {
            return {
              route: '/blog/' + entry.sys.id,
              payload: entry,
            }
          })
        })
    },
  },
}

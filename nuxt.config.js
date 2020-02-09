const colors = require('vuetify/es5/util/colors').default

module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  env: {
    CTF_SPACE_ID: "3k0xnhg46uck",
    CTF_CDA_ACCESS_TOKEN: "tHYIEIk0fX0lpq7YcVjl1WG7fNsJyxKY9qa-UruFpAI",
    CTF_PERSON_ID: "",
    CTF_BLOG_POST_TYPE_ID: ""
  },
  head: {
    title: 'Multimedia Laboratory',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1'},
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat|Quicksand' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#f0f0f0' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/main.scss'
  ],
  layoutTransition: {
    name: 'page',
    mode: 'out-in'
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    [
      'nuxt-fire',
      {
        config: {
          apiKey: "AIzaSyAruiS-ZOiUOSYZP4q7xev9UMckcN8OA40",
          authDomain: "rudyfoods-98.firebaseapp.com",
          databaseURL: "https://rudyfoods-98.firebaseio.com",
          projectId: "rudyfoods-98",
          storageBucket: "rudyfoods-98.appspot.com",
          messagingSenderId: "821510242303",
          appId: "1:821510242303:web:f7ea6d2c74887eed9531ca"
        },
        services: {
          firestore: {
            static: false, // default
            preload: false, // default
            enablePersistence: true
          },
          auth: true
        }
      }
    ]
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  generate: {
    fallback: true
  }
}

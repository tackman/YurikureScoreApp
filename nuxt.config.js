const webpack = require('webpack');

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '百合紅 支援点計算アプリ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Yurikure point calc app'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/app/animate.min.css' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*/compo
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }

      config.plugins.push(
        new webpack.EnvironmentPlugin([
          'APIKEY',
          'AUTHDOMAIN',
          'DATABASEURL',
          'PROJECTID',
          'STORAGEBUCKET',
          'MESSAGINGSENDERID'
        ])
      );
    }
  },

  modules: ['@nuxtjs/pwa'],
  workbox: {
    dev: false
  },

  router: {
    base: '/app/'
  }
};

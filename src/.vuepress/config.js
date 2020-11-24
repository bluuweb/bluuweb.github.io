module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'bluuweb!',
  locales:{
    '/':{
      lang: 'es-ES'
    }
  },
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'bluuweb es un canal de youtube dedicado a la entrega de tutoriales y cursos sobre el desarrollo web.',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      // {
      //   text: 'Cursos',
      //   link: '/cursos/',
      // },
      { text: 'Youtube', link: 'https://bit.ly/3kLYAqr' },
      { text: 'Curso Vue.js', link: 'http://curso-vue-js-udemy.bluuweb.cl' },
      { text: 'Curso React.js', link: 'http://curso-react-js-udemy.bluuweb.cl' },
      { text: 'Curso Bootstrap', link: 'http://curso-bootstrap-4-udemy.bluuweb.cl' },
    ],
    // sidebar: {
    //   '/cursos/': [
    //     {
    //       title: 'Cursos',
    //       collapsable: false,
    //       children: [
    //         '',
    //         'using-vue',
    //       ]
    //     }
    //   ],
    // }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}

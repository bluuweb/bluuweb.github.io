module.exports = {
  title: 'bluuweb!',
  locales:{
    '/':{
      lang: 'es-ES'
    }
  },

  description: 'bluuweb es un canal de youtube dedicado a la entrega de tutoriales y cursos sobre el desarrollo web.',
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  ],
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      { text: 'Youtube', link: 'https://bit.ly/3kLYAqr' },
      { text: 'Curso Vue.js', link: 'http://curso-vue-js-udemy.bluuweb.cl' },
      { text: 'Curso React.js', link: 'http://curso-react-js-udemy.bluuweb.cl' },
      { text: 'Curso Bootstrap', link: 'http://curso-bootstrap-4-udemy.bluuweb.cl' },
    ],
  },
}

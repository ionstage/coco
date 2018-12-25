import Main from './components/main.js'

const main = new Main({ element: document.body })

// for debug
if (typeof global === 'undefined') {
  window.app = { main }
}

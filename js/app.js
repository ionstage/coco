import dom from './dom.js'
import Main from './components/main.js'

const main = new Main({ element: dom.body() })

// for debug
if (typeof global === 'undefined') {
  window.app = { main }
}

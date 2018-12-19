import { body } from './dom.js'
import Main from './components/main.js'

const main = new Main({ element: body() })

// for debug
if (typeof global === 'undefined') {
  window.app = { main }
}

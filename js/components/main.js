import Content from './content.js'

const jCore = require('jcore')

export default class extends jCore.Component {
  constructor (props) {
    super(props)
    this.content = new Content({ element: this.findElement('.content') })
  }
}

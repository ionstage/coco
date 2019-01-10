const template = document.createElement('template')

template.innerHTML = `<input type="text" autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false">`

class CocoTextInput extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

window.customElements.define('coco-textinput', CocoTextInput)

const template = document.createElement('template')

template.innerHTML = `
  <style>
    :host {
      display: inline-block;
      padding: 8px;
    }

    input {
      border-radius: 3px;
      box-sizing: border-box;
      color: #212121;
      height: 32px;
    }
  </style>
  <input type="text" autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false">
`

class CocoTextInput extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

window.customElements.define('coco-textinput', CocoTextInput)

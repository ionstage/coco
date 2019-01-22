const template = document.createElement('template')

template.innerHTML = `
  <style>
    :host {
      display: inline-block;
      padding: 8px;
    }

    input {
      border: 1px solid #212121;
      border-radius: 3px;
      box-sizing: border-box;
      color: #212121;
      font-size: 16px;
      height: 32px;
      margin: 0;
      padding: 0 8px;
      width: 100%;
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

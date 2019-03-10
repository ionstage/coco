const template = document.createElement('template')

template.innerHTML = `
  <style>
    :host {
      display: inline-block;
      padding: 8px;
    }

    textarea {
      -webkit-appearance: none;
      border: 1px solid #212121;
      border-radius: 3px;
      box-sizing: border-box;
      color: #212121;
      font-size: 16px;
      height: 100%;
      margin: 0;
      padding: 8px;
      vertical-align: middle;
      width: 100%;
    }
  </style>
  <textarea></textarea>
`

class CocoTextarea extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

window.customElements.define('coco-textarea', CocoTextarea)

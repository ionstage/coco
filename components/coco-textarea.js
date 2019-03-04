const template = document.createElement('template')

template.innerHTML = `
  <style>
    :host {
      display: inline-block;
    }

    textarea {
      -webkit-appearance: none;
      border: 1px solid #212121;
      border-radius: 3px;
      color: #212121;
      font-size: 16px;
      margin: 0;
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

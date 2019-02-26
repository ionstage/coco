const template = document.createElement('template')

template.innerHTML = `
  <style>
    :host {
      display: inline-block;
    }

    textarea {
      -webkit-appearance: none;
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

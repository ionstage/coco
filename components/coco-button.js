const template = document.createElement('template')

template.innerHTML = `
  <style>
    :host {
      display: inline-block;
    }
  </style>
  <button>
    <slot></slot>
  </button>
`

class CocoButton extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

window.customElements.define('coco-button', CocoButton)

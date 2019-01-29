const template = document.createElement('template')

template.innerHTML = `
  <style>
    :host {
      display: inline-block;
    }

    button {
      -webkit-appearance: none;
      border-radius: 3px;
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

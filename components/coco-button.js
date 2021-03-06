const template = document.createElement('template')

template.innerHTML = `
  <style>
    :host {
      display: inline-block;
      padding: 8px;
    }

    button {
      -webkit-appearance: none;
      background-color: #f5f5f5;
      border: 1px solid #212121;
      border-radius: 3px;
      color: #212121;
      cursor: pointer;
      font-size: 16px;
      height: 32px;
      margin: 0;
    }

    button:active {
      background-color: #e0e0e0;
    }

    slot {
      pointer-events: none;
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

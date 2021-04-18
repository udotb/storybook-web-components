import '../../jsys/types/non-empty-string';

const templateInputNumber = document.createElement('template');
templateInputNumber.innerHTML = `
<style>
  input {
    width: 100%;
    padding: 9px 20px;
    margin: 2px 0;
    box-sizing: border-box;
    background: transparent ;
    color: var(--primary-text, hsla(0, 0%, 0%, 1));
    border: 1px solid #ccc;
    font-size: var(--text-paragraph, 18px);
    border-radius: 4px;
  }
  input:focus{
    outline: none;
}
  p{
    color:var(--color-danger-darker, hsla(354, 70.3%, 44.9%, 1));
    font-size: var(--text-caption, 14px);
    margin: 2px;
  }
    input:disabled {
      background: #dddddd;
    }
</style>
<input id="input" type="number">    
<p id="require"></p>
<p id="max"></p>
<p id="min"></p>
`;

class InputNumber extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(templateInputNumber.content.cloneNode(true));
    }

    static get observedAttributes() {
        return ['validate', 'placeholder', 'value'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'placeholder') {
            this.shadowRoot.querySelector('input').placeholder = this.placeholder;
        } else if (name === 'value') {
            this.shadowRoot.querySelector('input').value = this.value;
        } else if (name === 'validate') {
            this.getValue();
        }
    }

    connectedCallback() {
        this.input = this.shadowRoot.querySelector('input');
        if (this.placeholder == null) {
            this.setAttribute('placeholder', '');
        }
        this.input.placeholder = '';
        this.input.value = '';
        this.input.placeholder = this.placeholder;
        if (this.disable === true) {
            this.input.setAttribute('disabled', 'true');
        } else {
            this.input.removeAttribute('disabled');
        }
        this.input.value = this.value;
        this.addEventListener('focusout', this.getValue);
        this.addEventListener('keydown', function () {
            this.shadowRoot.getElementById("max").innerHTML = null;
            this.shadowRoot.getElementById("min").innerHTML = null;
            this.shadowRoot.getElementById("require").innerHTML = null;
        })
    }

    getValue() {
        const inputValue = this.input.value;
        this.verify(inputValue);
        this.setAttribute('value', inputValue);
    }

    verify(inputValue) {
        this.deleteInnerHTML('require');
        this.deleteInnerHTML('max');
        this.deleteInnerHTML('min');
        if (inputValue === '' && this.required === true) {
            this.shadowRoot.getElementById("require").innerHTML = "This field is required";
            this.deleteInnerHTML('max');
            this.deleteInnerHTML('min');
            this.setAttribute('valid', 'false');
            return false;
        } else if (inputValue.length < this.min && this.min != null) {
            this.shadowRoot.getElementById("min").innerHTML = "Value cannot be less then " + this.min;
            this.deleteInnerHTML('max');
            this.deleteInnerHTML('require');
            this.setAttribute('valid', 'false');
            return false;
        } else if (inputValue.length > this.max && this.max != null) {
            this.shadowRoot.getElementById("max").innerHTML = "Value cannot be greater then " + this.max;
            this.deleteInnerHTML('require');
            this.deleteInnerHTML('min');
            this.setAttribute('valid', 'false');
            return false;
        }
        this.setAttribute('valid', 'true');
    }

    deleteInnerHTML(div) {
        this.shadowRoot.querySelector('#' + div).innerHTML = null;
    }

    get min() {
        return this.getAttribute('min');
    }

    get max() {
        return this.getAttribute('max');
    }

    get placeholder() {
        return this.getAttribute('placeholder');
    }

    get required() {
        return this.hasAttribute('required');
    }

    get value() {
        return this.getAttribute('value');
    }

    get validate() {
        return this.getAttribute('validate');
    }

    get disable() {
        return this.hasAttribute('disable');
    }
}

window.customElements.define('input-number', InputNumber);

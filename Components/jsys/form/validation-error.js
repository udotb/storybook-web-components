const validationErrorTemplate = document.createElement('template');
validationErrorTemplate.innerHTML = `

<style>
:host {
    display: block;
}

:host([hidden]) {
    display: none
}

small{
    color: red;
}
</style>

<small></small>
`;

class ValidationError extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(validationErrorTemplate.content.cloneNode(true));
    }

    connectedCallback() {
        // this.addEventListener('click', this.thisFunction);
        // window.addEventListener('componentSelected', this.windowFunction);
    }

    disconnectedCallback() {
        // this.removeEventListener('click', this.thisFunction);
        // window.removeEventListener('componentSelected', this.windowFunction);
    }

    static get observedAttributes() {
        return ['text', 'font-size', 'text-color'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'text':
                this.shadowRoot.querySelector('small').innerHTML = newValue;
                break;
            case 'font-size':
                this.shadowRoot.querySelector('small').style.fontSize = newValue;
                break;
            case 'text-color':
                this.shadowRoot.querySelector('small').style.color = newValue;
                break;
        }
    }
}

window.customElements.define('validation-error', ValidationError);
export default ValidationError;

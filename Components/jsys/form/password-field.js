const passwordFieldTemplate = document.createElement('template');
passwordFieldTemplate.innerHTML = `

<style>
:host {
    display: block;
}
:host([hidden]) {
    display: none
}

input{
    width: 100%;
    padding: 5px 10px;
    margin: 2px 0;
    box-sizing: border-box;
    background: transparent ;
    color: hsla(0, 0%, 0%, 1);
    border: 1px solid #ccc;
    font-size: 18px;
    border-radius: 4px;
    resize: vertical;
}

::placeholder{
    color: #ababab;
}

input:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.02rem rgba(0,123,255,.25);
}

.col-25 {
  float: left;
  width: 25%;
  margin-top: 6px;
}

.col-50 {
  float: left;
  width: 50%;
  margin-top: 6px;
}

.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
}

.col-100 {
  float: left;
  width: 100%;
  margin-top: 6px;
}

@media screen and (max-width: 600px) {
  .col-25,.col-50, .col-75 .col-100 {
    width: 80%;
  }
}
</style>
<div id="container">
<input id="text" type="password">
</div>
`;

class PasswordField extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(passwordFieldTemplate.content.cloneNode(true));
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
        return ['placeholder', 'background-color', 'text-color', 'class', 'focused', 'font-size'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'placeholder':
                this.shadowRoot.getElementById('text').placeholder = newValue;
                break;
            case 'background-color':
                this.shadowRoot.getElementById('text').style.backgroundColor = newValue;
                break;
            case 'text-color':
                this.shadowRoot.getElementById('text').style.color = newValue;
                break;
            case 'class':
                this.shadowRoot.getElementById('container').className = newValue;
                break;
            case 'focused':
                if (newValue) {
                    setTimeout(function () {
                        this.shadowRoot.querySelector('input').focus();
                    }.bind(this), 100);
                }
                break;
            case 'font-size':
                this.shadowRoot.getElementById('text').style.fontSize = newValue;
                break;
        }
    }
}

window.customElements.define('password-field', PasswordField);
export default PasswordField;

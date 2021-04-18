const searchBarInputFieldTemplate = document.createElement('template');
searchBarInputFieldTemplate.innerHTML = `

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
    border: 2px solid #494949;
    font-size: 18px;
    border-radius: 25px;
    resize: vertical;
}

input:focus {
    color: #495057;
    background-color: #fff;
    border-color: black;
    outline: 0;
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
<input id="text" autofocus>
</div>
`;

class SearchBarInputField extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(searchBarInputFieldTemplate.content.cloneNode(true));
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
        return ['background-color', 'text-color', 'width'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'background-color':
                this.shadowRoot.getElementById('text').style.backgroundColor = newValue;
                break;
            case 'text-color':
                this.shadowRoot.getElementById('text').style.color = newValue;
                break;
            case 'width':
                this.shadowRoot.getElementById('text').style.width = newValue;
                break;
        }
    }
}

window.customElements.define('search-bar-input-field', SearchBarInputField);
export default SearchBarInputField;

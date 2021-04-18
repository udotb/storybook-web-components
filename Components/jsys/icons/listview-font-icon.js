const listviewFontIconTemplate = document.createElement('template');
listviewFontIconTemplate.innerHTML = `

<style>
:host([hidden]) {
    display: none 
}

i{
    cursor: pointer;
}

</style>

<i title="List View">
<svg width="15px" height="15px" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M256 1312v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5zm1536 768v192q0 13-9.5 22.5t-22.5 9.5h-1344q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1344q13 0 22.5 9.5t9.5 22.5zm-1536-1152v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5zm1536 768v192q0 13-9.5 22.5t-22.5 9.5h-1344q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1344q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1344q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1344q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1344q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1344q13 0 22.5 9.5t9.5 22.5z"/>
</svg>
</i>

`;

class ListviewFontIcon extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(listviewFontIconTemplate.content.cloneNode(true));
    }

    connectedCallback() {
        this.shadowRoot.querySelector('i').addEventListener('click', this._onClick.bind(this));
    }

    disconnectedCallback() {
        this.shadowRoot.querySelector('i').removeEventListener('click', this._onClick.bind(this));
    }

    static get observedAttributes() {
        return ['color', 'width', 'height', 'dispatcher', 'value', 'title'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'color':
                this.shadowRoot.querySelector('svg').style.fill = newValue;
                break;
            case 'width':
                this.shadowRoot.querySelector('svg').style.width = newValue;
                break;
            case 'height':
                this.shadowRoot.querySelector('svg').style.height = newValue;
                break;
            case 'dispatcher':
                this.shadowRoot.querySelector('i').setAttribute('dispatcher', `${newValue}`);
                break;
            case 'value':
                this.shadowRoot.querySelector('i').setAttribute('value', `${newValue}`);
                break;
            case 'title':
                this.shadowRoot.querySelector('i').setAttribute('title', `${newValue}`);
                break;
        }
    }

    _onClick(event) {
        const iconClicked = new CustomEvent(this.shadowRoot.querySelector('i').getAttribute('dispatcher'), {
            bubbles: true,
            composed: true,
            detail: {value: this.shadowRoot.querySelector('i').getAttribute('value')}
        });
        this.dispatchEvent(iconClicked);
    }
}

window.customElements.define('listview-font-icon', ListviewFontIcon);
export default ListviewFontIcon;

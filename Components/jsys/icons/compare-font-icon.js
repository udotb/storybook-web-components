const compareFontIconTemplate = document.createElement('template');
compareFontIconTemplate.innerHTML = `

<style>
:host([hidden]) {
    display: none 
}

i{
    cursor: pointer;
}

</style>
<i title="Compare">
<img width="15px" height="15px" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDY5LjMzMyA0NjkuMzMzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NjkuMzMzIDQ2OS4zMzM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8Zz4NCgkJCTxwYXRoIGQ9Ik0xOTIsNDIuNjY3SDg1LjMzM2MtMjMuNTczLDAtNDIuNjY3LDE5LjA5My00Mi42NjcsNDIuNjY3VjM4NGMwLDIzLjU3MywxOS4wOTMsNDIuNjY3LDQyLjY2Nyw0Mi42NjdIMTkydjQyLjY2N2g0Mi42NjcNCgkJCQlWMEgxOTJWNDIuNjY3eiBNMTkyLDM2Mi42NjdIODUuMzMzbDEwNi42NjctMTI4VjM2Mi42Njd6Ii8+DQoJCQk8cGF0aCBkPSJNMzg0LDQyLjY2N0gyNzcuMzMzdjQyLjY2N0gzODR2Mjc3LjMzM2wtMTA2LjY2Ny0xMjh2MTkySDM4NGMyMy41NzMsMCw0Mi42NjctMTkuMDkzLDQyLjY2Ny00Mi42NjdWODUuMzMzDQoJCQkJQzQyNi42NjcsNjEuNzYsNDA3LjU3Myw0Mi42NjcsMzg0LDQyLjY2N3oiLz4NCgkJPC9nPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" alt="compare"/></i>
`;

class CompareFontIcon extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(compareFontIconTemplate.content.cloneNode(true));
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
                this.shadowRoot.querySelector('img').style.fill = newValue;
                break;
            case 'width':
                this.shadowRoot.querySelector('img').style.width = newValue;
                break;
            case 'height':
                this.shadowRoot.querySelector('img').style.height = newValue;
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

window.customElements.define('compare-font-icon', CompareFontIcon);
export default CompareFontIcon;

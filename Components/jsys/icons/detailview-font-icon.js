const detailviewFontIconTemplate = document.createElement('template');
detailviewFontIconTemplate.innerHTML = `

<style>
:host([hidden]) {
    display: none 
}

i{
    cursor: pointer;
}

</style>
<i title="Detail View">
<img width="15px" height="15px" src="data:image/svg+xml;base64,PHN2ZyBpZD0iQm9sZCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTIzLjI1IDcuNWgtOS41Yy0uNDE0IDAtLjc1LjMzNi0uNzUuNzVzLjMzNi43NS43NS43NWg5LjVjLjQxNCAwIC43NS0uMzM2Ljc1LS43NXMtLjMzNi0uNzUtLjc1LS43NXoiLz48cGF0aCBkPSJtMjMuMjUgMTAuNWgtOS41Yy0uNDE0IDAtLjc1LjMzNi0uNzUuNzVzLjMzNi43NS43NS43NWg5LjVjLjQxNCAwIC43NS0uMzM2Ljc1LS43NXMtLjMzNi0uNzUtLjc1LS43NXoiLz48cGF0aCBkPSJtMjMuMjUgMTMuNWgtOS41Yy0uNDE0IDAtLjc1LjMzNi0uNzUuNzVzLjMzNi43NS43NS43NWg5LjVjLjQxNCAwIC43NS0uMzM2Ljc1LS43NXMtLjMzNi0uNzUtLjc1LS43NXoiLz48cGF0aCBkPSJtMjMuMjUgMTYuNWgtOS41Yy0uNDE0IDAtLjc1LjMzNi0uNzUuNzVzLjMzNi43NS43NS43NWg5LjVjLjQxNCAwIC43NS0uMzM2Ljc1LS43NXMtLjMzNi0uNzUtLjc1LS43NXoiLz48cGF0aCBkPSJtMjMuMjUgMTkuNWgtOS41Yy0uNDE0IDAtLjc1LjMzNi0uNzUuNzVzLjMzNi43NS43NS43NWg5LjVjLjQxNCAwIC43NS0uMzM2Ljc1LS43NXMtLjMzNi0uNzUtLjc1LS43NXoiLz48cGF0aCBkPSJtMS43NSAxNWg3LjVjLjk2NSAwIDEuNzUtLjc4NSAxLjc1LTEuNzV2LTRjMC0uOTY1LS43ODUtMS43NS0xLjc1LTEuNzVoLTcuNWMtLjk2NSAwLTEuNzUuNzg1LTEuNzUgMS43NXY0YzAgLjk2NS43ODUgMS43NSAxLjc1IDEuNzV6Ii8+PHBhdGggZD0ibTEuNzUgMjRoNy41Yy45NjUgMCAxLjc1LS43ODUgMS43NS0xLjc1di00YzAtLjk2NS0uNzg1LTEuNzUtMS43NS0xLjc1aC03LjVjLS45NjUgMC0xLjc1Ljc4NS0xLjc1IDEuNzV2NGMwIC45NjUuNzg1IDEuNzUgMS43NSAxLjc1eiIvPjxwYXRoIGQ9Im0yMy4yNSAyMi41aC05LjVjLS40MTQgMC0uNzUuMzM2LS43NS43NXMuMzM2Ljc1Ljc1Ljc1aDkuNWMuNDE0IDAgLjc1LS4zMzYuNzUtLjc1cy0uMzM2LS43NS0uNzUtLjc1eiIvPjxwYXRoIGQ9Im0yMi4yNSAwaC0xMi41Yy0uOTY1IDAtMS43NS43ODUtMS43NSAxLjc1djIuNWMwIC45NjUuNzg1IDEuNzUgMS43NSAxLjc1aDEyLjVjLjk2NSAwIDEuNzUtLjc4NSAxLjc1LTEuNzV2LTIuNWMwLS45NjUtLjc4NS0xLjc1LTEuNzUtMS43NXoiLz48Y2lyY2xlIGN4PSIzIiBjeT0iMyIgcj0iMyIvPjwvc3ZnPg=="/>
</i>`;


class DetailviewFontIcon extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(detailviewFontIconTemplate.content.cloneNode(true));
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

window.customElements.define('detailview-font-icon', DetailviewFontIcon);
export default DetailviewFontIcon;

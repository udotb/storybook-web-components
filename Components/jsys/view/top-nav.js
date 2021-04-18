const topNavTemplate = document.createElement('template');
topNavTemplate.innerHTML = `

<style>
:host {
    display: block;
}

:host([hidden]) {
    display: none
}

.topnav {
    background-color: lightskyblue;
    overflow: hidden;
    padding: 15px;
}

.bold{
    font-weight: bold;
}

.box {
  border: 2px solid white;
  border-radius: 20px;
  cursor: pointer;
}

.input{
    color: white;
    text-align: center;
    padding: 8px;
    font-size: 19px;
    text-decoration: none;
}
</style>

<div class="topnav" id="topnav">
    <div>
        <a class="input bold box" href="/">LOGO</a>
    </div>
</div>
`;

class TopNav extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(topNavTemplate.content.cloneNode(true));
    }

    connectedCallback() {

    }

    disconnectedCallback() {
    }

    static get observedAttributes() {
        return ['background-color'];
    }


    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'background-color':
                this.shadowRoot.getElementById('topnav').style.backgroundColor = newValue;
                break;
        }
    }
}

window.customElements.define('top-nav', TopNav);
export default TopNav;

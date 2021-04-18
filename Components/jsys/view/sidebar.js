import AnchorLink from "../navigation/anchor-link";

const SidebarTemplate = document.createElement('template');
SidebarTemplate.innerHTML = `

<style>
:host {
    display: block;
}

:host([hidden]) {
    display: none
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

ul li anchor-link {
  display: block;
  padding: 8px;
}

ul li anchor-link:hover {
  background-color: #EBDEF0;
  width: 87.5%;
}

.container {
  display: block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 15px;
  margin-top: 25px;
}

.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 15px;
  width: 15px;
  background-color: #eee;
}

.container:hover input ~ .checkmark {
  background-color: #ccc;
}

.container input:checked ~ .checkmark {
  background-color: mediumpurple;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.container input:checked ~ .checkmark:after {
  display: block;
}

.container .checkmark:after {
  left: 6px;
  top: 3px;
  width: 3px;
  height: 6px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.box {
  border: 1px solid black;
  background-color: lightskyblue;
  height: 55%;
  width: 90%;
}

.input{
    text-align: center;
}

h3{
    padding: 0;
    margin: 0;
}

.side{
    padding-right: 50%;
}

</style>
<div class="side">
<div class="box">
<h3 class="input">Links</h3>
</div>
<div>
    <ul>
        <li><anchor-link href="" name="Link-1"></anchor-link></li>
        <li><anchor-link href="" name="Link-2"></anchor-link></li>
    </ul>
</div>
<div class="box">
<h3 class="input">Check Box</h3></div>
<div>
<div>
    <label class="container">Check-1
      <input type="checkbox" checked="checked">
      <span class="checkmark"></span>
    </label>
    <label class="container">Check-2
      <input type="checkbox">
      <span class="checkmark"></span>
    </label>
</div>
<hr>
</div>
`;

class Sidebar extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(SidebarTemplate.content.cloneNode(true));
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
        return [''];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        // switch(name) {
        //     case x:
        //         // code block
        //         break;
        //     case y:
        //         // code block
        //         break;
        //     default:
        //     // code block
        // }
    }
}

window.customElements.define('sidebar-component', Sidebar);
export default Sidebar;

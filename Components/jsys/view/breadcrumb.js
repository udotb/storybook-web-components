const breadcrumbComponentTemplate = document.createElement('template');
breadcrumbComponentTemplate.innerHTML = `

<style>
:host {
    display: block;
}
:host([hidden]) {
    display: none
}
ul.breadcrumb {
  padding: 6px 12px;
  list-style: none;
}
ul.breadcrumb li {
  display: inline;
  font-size: 18px;
}
ul.breadcrumb li+li:before {
  padding: 8px;
  color: black;
  content: ">";
}
ul.breadcrumb li a {
  color: black;
  text-decoration: none;
}
ul.breadcrumb li a:hover {
  color: black;
  text-decoration: underline;
}

@media screen and (max-width: 600px) {
  .col-25,.col-50, .col-75 .col-100 {
    width: 100%;
  }
}
</style>
<div class="col-50" id="container">
<ul class="breadcrumb" id="link">
<slot></slot>
</ul>
</div>
`;

class BreadcrumbComponent extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(breadcrumbComponentTemplate.content.cloneNode(true));

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
    return ['array', 'background-color', 'class'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'background-color':
        this.shadowRoot.getElementById('link').style.backgroundColor = newValue;
        break;
      case 'class':
        this.shadowRoot.getElementById('container').className = newValue;
        break;
      case 'array':
        let links = JSON.parse(newValue);
        for (let i = 0; i < links.length; i++) {
          let listItem = document.createElement('li');
          if(i === links.length-1){
            listItem.innerHTML = "<span style='color:grey'>" + links[i]['name'] + "</span>"
          }else{
            listItem.innerHTML = "<a href=" + links[i]['link'] + ">" + links[i]['name'] + "</a>"
          }
          this.shadowRoot.getElementById('link').append(listItem);
        }
        break;
    }
  }
}

window.customElements.define('breadcrumb-component', BreadcrumbComponent);
export default BreadcrumbComponent;

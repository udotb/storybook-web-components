const logoImageComponentTemplate = document.createElement('template');
logoImageComponentTemplate.innerHTML = `

<style>
:host {
    display: block;
}
:host([hidden]) {
    display: none
}

.logo-container{
 margin-left: 70px;
}


.col-25 {
  float: top;
  width: 25%;
  margin-top: 20px;
}

.col-50 {
  float: top;
  width: 50%;
  margin-top: 20px;
}

.col-75 {
  float: top;
  width: 75%;
  margin-top: 20px;
}

.col-100 {
  float: top;
  width: 100%;
  margin-top: 20px;
}

@media screen and (max-width: 1024px) {
  .logo-container{
 margin-left: 380px;
}

}
@media screen and (max-width: 900px) {
  .logo-container{
 margin-left: 300px;
}

}

@media screen and (max-width: 800px) {
 .logo-container{
 margin-left: 300px;
}

}
@media screen and (max-width: 700px) {
  .logo-container{
 margin-left: 200px;
}

}
@media screen and (max-width: 600px) {
  .logo-container{
 margin-left: 160px;
}

}
@media screen and (max-width: 500px) {
  .logo-container{
 margin-left: 120px;
}

}
@media screen and (max-width: 400px) {
  .logo-container{
 margin-left: 90px;
}

}
@media screen and (max-width: 350px) {
  .logo-container{
 margin-left: 60px;
}

}
@media screen and (max-width: 300px) {
  .logo-container{
 margin-left: 100px;
}

}
</style>

<div class="col-25" id="logo-container">
<img id="logo" class="img-rounded" alt="Logo">
</div>
`;

class LogoImageComponent extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(logoImageComponentTemplate.content.cloneNode(true));

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
        return ['filename', 'height', 'width'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch(name) {
            case 'filename':
                this.shadowRoot.getElementById('logo').setAttribute('src',newValue);
                break;
            case 'height':
                this.shadowRoot.getElementById('logo').style.height = newValue;
                break;
            case 'width':
                this.shadowRoot.getElementById('logo').style.width = newValue;
                break;
        }
    }
}

window.customElements.define('logo-image-component', LogoImageComponent);
export default LogoImageComponent;

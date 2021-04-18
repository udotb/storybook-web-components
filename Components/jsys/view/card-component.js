const cardTemplate = document.createElement('template');
cardTemplate.innerHTML = `

<style>
:host {
    display: block;
}

:host([hidden]) {
    display: none
}

.container {
  justify-content: center;
  align-items: center;
  height: 20vh;
  background-color: white;
}

.card {
  background-color: lightsteelblue;
  height: 8rem;
  width: 10rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 1px 4px rgba(181, 181, 181, 1);
  color: white;
  position: relative;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-5px) scale(1.005) translateZ(0);
}

.p-text {
  position: relative;
  top: 5px;
}

.col-25 {
  float: left;
  width: 25%;
  margin-top: 20px;
}

.col-50 {
  float: left;
  width: 50%;
  margin-top: 20px;
}

.col-75 {
  float: left;
  width: 75%;
  margin-top: 20px;
}

.col-100 {
  float: left;
  width: 100%;
  margin-top: 20px;
}

@media screen and (max-width: 800px) {
  .col-25,.col-50, .col-75 .col-100 {
  width: 100%;
  }
  .card{
    margin-top: 10px;
  }
}

@media screen and (max-width: 1024px) {
  .col-25,.col-50, .col-75 .col-100 {
  width: 100%;
  }
  .card{
    margin-top: 10px;
  }
}

@media screen and (max-width: 600px) {
  .col-25,.col-50, .col-75 .col-100 {
  width: 100%;
  }
  .card{
    margin-top: 10px;
  }
}

</style>

<div class="col-25" id="container">
    <div class="card" id="card-body">
        <div id="svg">
            <svg fill="#dcdcdc" width="100" height="80" viewBox="0 0 1792 1792"><path d="M1216 832q0-185-131.5-316.5t-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5 316.5-131.5 131.5-316.5zm512 832q0 52-38 90t-90 38q-54 0-90-38l-343-342q-179 124-399 124-143 0-273.5-55.5t-225-150-150-225-55.5-273.5 55.5-273.5 150-225 225-150 273.5-55.5 273.5 55.5 225 150 150 225 55.5 273.5q0 220-124 399l343 343q37 37 37 90z"/></svg>
        </div>
        <div id="image" style="display: none">
            <img height="80" width="100">
        </div>
        <p class="p-text" id="text">Name Here</p>
    </div>
</div>
`;

class CardComponent extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(cardTemplate.content.cloneNode(true));
        this.image = false;

    }

    static get observedAttributes() {
        return ['text', 'background-color', 'text-color', 'height', 'width', 'image', 'image-path'];
    }

    connectedCallback() {
    }

    disconnectedCallback() {
        // this.removeEventListener('click', this.thisFunction);
        // window.removeEventListener('componentSelected', this.windowFunction);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'text':
                this.shadowRoot.getElementById('text').innerHTML = newValue;
                break;
            case 'background-color':
                this.shadowRoot.getElementById('card-body').style.backgroundColor = newValue;
                break;
            case 'text-color':
                this.shadowRoot.getElementById('text').style.color = newValue;
                break;
            case 'height':
                this.shadowRoot.getElementById('card-body').style.height = newValue;
                break;
            case 'width':
                this.shadowRoot.getElementById('card-body').style.width = newValue;
                break;
            case 'class':
                this.shadowRoot.getElementById('container').className = newValue;
                break;
            case 'image':
                this.image = newValue;
                break;
            case 'image-path':
                if (this.image == 'true') {
                    let imageDiv = this.shadowRoot.getElementById('image');
                    imageDiv.style.display = 'block';
                    imageDiv.querySelector('img').setAttribute('src', newValue);
                    this.shadowRoot.getElementById('svg').style.display = 'none';
                } else {
                    let image = this.shadowRoot.getElementById('image');
                    image.style.display = 'none';
                    this.shadowRoot.getElementById('svg').style.display = 'block';
                }
                break;
        }
    }
}

window.customElements.define('card-component', CardComponent);
export default CardComponent;

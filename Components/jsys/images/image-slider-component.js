const imageSliderComponentTemplate = document.createElement('template');
imageSliderComponentTemplate.innerHTML = `

<style>
:host {
    display: block;
}

:host([hidden]) {
    display: none
}

img {
vertical-align: middle;
width: 100%;
height: 250px;
}

.slideshow-container {
  width: 100%;
  position: relative;
  margin: auto;
}

.slide {
  display: none;
}

.prev, .next {
  cursor: pointer;
  width: auto;
  padding: 16px;
  color: #c3c3c3;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

.text {
  color: #c3c3c3;
  font-weight: bold;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
  right: 0;
}

.active {
  background-color: #717171;
}

.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}
</style>

<div class="slideshow-container" id="slider-container">
</div>
<div style="text-align: center">
<a class="prev" id="prev">&#10094;</a>
  <a class="next" id="next">&#10095;</a>
</div>

`;

class ImageSliderComponent extends HTMLElement {
    #height;
    #width;

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(imageSliderComponentTemplate.content.cloneNode(true));
        this.slideIndex = 1;
        this.#height = '250px';
        this.#width = '100%';
    }

    connectedCallback() {
        this.shadowRoot.getElementById('prev').addEventListener('click', e => {
            this.plusSlides(-1)
        })
        this.shadowRoot.getElementById('next').addEventListener('click', e => {
            this.plusSlides(1)
        })
    }

    static get observedAttributes() {
        return ['height', 'width', 'array'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'height':
                this.#height = newValue;
                break;
            case 'width':
                this.#width = newValue;
                break;
            case 'array':
                let images = JSON.parse(newValue);
                for (let i = 0; i < images.length; i++) {
                    let parentDiv = document.createElement('div');
                    parentDiv.setAttribute('class', 'slide fade');
                    let image = document.createElement('img');
                    image.id = 'slider-' + i;
                    image.src = images[i];
                    image.style.height = this.#height;
                    image.style.width = this.#width;
                    parentDiv.appendChild(image);
                    let textDiv = document.createElement('div');
                    textDiv.setAttribute('class', 'text');
                    textDiv.innerHTML = i + 1 + '/' + images.length;
                    parentDiv.appendChild(textDiv);
                    this.shadowRoot.getElementById('slider-container').appendChild(parentDiv);
                }
                this.showSlides(this.slideIndex);
        }
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    currentSlide(n) {
        this.showSlides(this.slideIndex = n);
    }

    showSlides(n) {
        let i;
        let slides = this.shadowRoot.querySelector(".slideshow-container").querySelectorAll('.slide');
        if (slides.length > 0) {
            if (n > slides.length) {
                this.slideIndex = 1
            }
            if (n < 1) {
                this.slideIndex = slides.length
            }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[this.slideIndex - 1].style.display = 'block'
        }
    }
}

window.customElements.define('image-slider-component', ImageSliderComponent);
export default ImageSliderComponent;

const reviewFilterComponentTemplate = document.createElement('template');
reviewFilterComponentTemplate.innerHTML = `

<style>
:host {
    display: block;
}

:host([hidden]) {
    display: none
}

.container {
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
}

.review {
  display: flex;
  width: 100%;
  justify-content: center;
  overflow: hidden;
  flex-direction: row-reverse;
}

.review-0 {
  filter: grayscale(100%);
}

.review > input {
  display: none;
}

.review > label {
  cursor: pointer;
  width: 40px;
  height: 40px;
  margin-top: auto;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 76%;
  transition: .3s;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23e3e3e3' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e");
}

.review > input:checked ~ label,
.review > input:checked ~ label ~ label {
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23fcd93a' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e");
}

.review > input:not(:checked) ~ label:hover,
.review > input:not(:checked) ~ label:hover ~ label {
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23d8b11e' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e");
}

</style>

<div>
    <div class="review">
      <input type="radio" name="review" id="review-5">
      <label for="review-5"></label>
      <input type="radio" name="review" id="review-4">
      <label for="review-4"></label>
      <input type="radio" name="review" id="review-3">
      <label for="review-3"></label>
      <input type="radio" name="review" id="review-2">
      <label for="review-2"></label>
      <input type="radio" name="review" id="review-1">
      <label for="review-1"></label>
    </div>
</div>
`;

class ReviewFilterComponent extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(reviewFilterComponentTemplate.content.cloneNode(true));
    }

    static get observedAttributes() {
        // return [];
    }

    connectedCallback() {
        // this.addEventListener('click', this.thisFunction);
        // window.addEventListener('componentSelected', this.windowFunction);
    }

    disconnectedCallback() {
        // this.removeEventListener('click', this.thisFunction);
        // window.removeEventListener('componentSelected', this.windowFunction);
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

window.customElements.define('review-filter-component', ReviewFilterComponent);
export default ReviewFilterComponent;

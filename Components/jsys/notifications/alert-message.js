const alertMessageTemplate = document.createElement('template');
alertMessageTemplate.innerHTML = `
<style>
:host {
    display: block;
}

:host([hidden]) {
    display: none
}

.slider {
    margin-top: 45px;
    border-radius: 3px;
    min-height: 120px;
    width: 0;
    position: fixed;
    z-index: 100;
    top: 0;
    right: -40px;
    overflow: hidden;
    transition: 0.5s;
    border: 1px solid rgba(0,0,0,0.05);
    box-shadow: -3px 7px 23px 3px rgba(222,219,222,1);
    padding: 3px 10px;
    border-left:4px solid #5CB85C;
    background: white;
    color: rgba(0,0,0,0.73);
}

.cross-span{
    position: absolute;
    top: 10px;
    right:15px;
    text-shadow: 2px 2px rgba(0,0,0,0.05);
    cursor: pointer;
    transition: 0.2s;
}

.cross-span:hover{
    color: #e50000;
    font-size: 17px;
}

.text{
    display: inline;
}
</style>
    <div class="slider">
    <h3 class="heading">Success</h3>
    <p class="text"></p>
    <span class="cross-span">&#10006;</span>
</div>
`;

class AlertMessage extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(alertMessageTemplate.content.cloneNode(true));
    }
    static get observedAttributes() {
        return ['status', 'is'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        this.shadowRoot.querySelector('p').innerHTML = this.message;
        if (this.status === 'show') {
            this.showNotice();
            this.autoClose();
        }
        if (this.is === 'danger') {
            this.errorSlider();
        }
        if (this.is === 'success') {
            this.successSlider();
        } else if (this.status === 'hide') {
            this.closeSlide();
        }
    }

    connectedCallback() {
        this.shadowRoot.querySelector('.heading').style.color = '#5CB85C';
        this.shadowRoot.querySelector('.cross-span').addEventListener('click', this.closeSlide.bind(this), false);
        if (this.is === 'danger') {
            this.errorSlider();
        }
    }

    showNotice() {
        this.shadowRoot.querySelector('.slider').style.width = "350px";
        this.shadowRoot.querySelector('.slider').style.right = '0';
        let that = this;
        setTimeout(function () {
            that.shadowRoot.querySelector('.slider').style.width = "320px";
        }, 400);
    }

    closeSlide() {
        this.shadowRoot.querySelector('.slider').style.width = "0";
        this.shadowRoot.querySelector('.slider').style.right = '-40px';
    }

    autoClose() {
        let that = this;
        setTimeout(that.closeSlide.bind(this), this.autoCloseTime);
    }

    errorSlider() {
        this.shadowRoot.querySelector('.slider').style.borderLeftColor = '#d9534f';
        this.shadowRoot.querySelector('.heading').innerHTML = 'Error';
        this.shadowRoot.querySelector('.heading').style.color = '#D9534F';
    }

    successSlider() {
        this.shadowRoot.querySelector('.slider').style.borderLeftColor = '#5CB85C';
        this.shadowRoot.querySelector('.heading').innerHTML = 'Success';
        this.shadowRoot.querySelector('.heading').style.color = '#5CB85C';
    }

    get is() {
        return this.getAttribute("is")
    }

    get message() {
        return this.getAttribute("message")
    }

    get status() {
        return this.getAttribute("status");
    }

    get autoCloseTime() {
        return this.getAttribute("autoCloseTime");
    }
}

window.customElements.define('alert-message', AlertMessage);
export default AlertMessage;

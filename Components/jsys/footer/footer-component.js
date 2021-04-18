import "../footer/footer-links";
import "../footer/social-links";
import "../../../Components/jsys/navigation/anchor-link";

const footerComponentTemplate = document.createElement('template');
footerComponentTemplate.innerHTML = `
<style>
    .footer-container{
        border-top: 1px solid #cbcbcb;
    }
    .footer-links{
        padding: 30px 3%;
        background: lightblue;
    }
    .copy-write-container{
        padding: 10px 5%;
        text-align: center;
        background: lightskyblue;

    }
    .copy-write-container a{
        display: inline;
        text-decoration: underline;

    }
    .footer-heading{
        padding: 10px;
        text-align: center;
    }
    .footer-heading div{
    padding-top: 20px;
    font-size: 18px;
    }
</style>
<div class="footer-container">
    <div class="footer-heading">
        <a href="">
                <img src="/logo.png" width="43" height="40">
        </a>
        <div >Footer</div>
    </div>
    <div class="footer-links">
        <footer-links></footer-links>
        <social-links></social-links>
    </div>
    <div class="copy-write-container">
        © 2021 Co. Ltd. All Rights Reserved.
        | <a href="/">Privacy Statement</a>
    </div>
</div>
`;
export default class FooterComponent extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(footerComponentTemplate.content.cloneNode(true));
    }

    connectedCallback() {

    }
}
window.customElements.define('footer-component', FooterComponent);

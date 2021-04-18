import "../../jsys/navigation/anchor-link";
const footerLinkTemplate = document.createElement('template');
footerLinkTemplate.innerHTML = `
<style>
.link-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin:20px  0;
}
.link{
    padding: 0 10px;
}
</style>
<div class="link-container">
    <span class="link">
        <a href="/">About us</a>
    </span>
    <span class="link">
        <a href="/">Contact us</a>
    </span>
    
</div>
`;
export default class FooterLinks extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(footerLinkTemplate.content.cloneNode(true));
    }

    connectedCallback() {

    }
}
window.customElements.define('footer-links', FooterLinks);

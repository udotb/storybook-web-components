import ('../wizard-form/wizard-form');
import ('../wizard-form/wizard-step');
import ('./subscription');
const templateUserGuide = document.createElement('template');
templateUserGuide.innerHTML = `
<style>
    .card{
        padding: 30px 10%;
    }
    .heading{
        font-size: var(--text-heading, 28px);
        text-align: center;
    }
</style>
<div class="card">
    <wizard-form show-labels>
        <wizard-step>
            <subscription-step></subscription-step>
        </wizard-step>
        <wizard-step>
            Organization
        </wizard-step>
        <wizard-step>
            Business
        </wizard-step>
    </wizard-form>
</div>
  `;

export class UserGuide1 extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(templateUserGuide.content.cloneNode(true));
  }

  connectedCallback() {
    let labels = ['Describe yourself', 'Team name', 'Welcome'];
    this.shadowRoot.querySelector('wizard-form').setAttribute('labels', JSON.stringify(labels))
  }
}

window.customElements.define('user-guide-1', UserGuide1);

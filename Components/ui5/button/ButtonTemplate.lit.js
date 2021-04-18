
/* eslint no-unused-vars: 0 */
import ifDefined from '@ui5/webcomponents-base/dist/renderer/ifDefined.js';
import { html, svg, repeat, classMap, styleMap, unsafeHTML, setTags, setSuffix } from '@ui5/webcomponents-base/dist/renderer/LitRenderer.js';
const block0 = (context) => { return html`<button type="button" class="ui5-button-root" ?disabled="${context.disabled}" data-sap-focus-ref  dir="${ifDefined(context.effectiveDir)}" @focusout=${context._onfocusout} @focusin=${context._onfocusin} @click=${context._onclick} @mousedown=${context._onmousedown} @mouseup=${context._onmouseup} @keydown=${context._onkeydown} @keyup=${context._onkeyup} tabindex=${ifDefined(context.tabIndexValue)} aria-expanded="${ifDefined(context.accInfo.ariaExpanded)}" aria-controls="${ifDefined(context.accInfo.ariaControls)}" aria-haspopup="${ifDefined(context.accInfo.ariaHaspopup)}" aria-label="${ifDefined(context.ariaLabelText)}" title="${ifDefined(context.accInfo.title)}" part="button">${ context.icon ? block1(context) : undefined }<span id="${ifDefined(context._id)}-content" class="ui5-button-text"><bdi><slot></slot></bdi></span>${ context.hasButtonType ? block2(context) : undefined }</button> `; };
const block1 = (context) => { return html`<ui5-icon style="${styleMap(context.styles.icon)}" class="ui5-button-icon" name="${ifDefined(context.icon)}" ?show-tooltip=${context.showIconTooltip}></ui5-icon>`; };
const block2 = (context) => { return html`<span class="ui5-hidden-text">${ifDefined(context.buttonTypeText)}</span>`; };


const main = (context, tags, suffix) => {
	setTags(tags);
	setSuffix(suffix);
	return block0(context);
};
 
export default main;
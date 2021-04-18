import {
  browserDetection,
  css,
  DisabledWithTabIndexMixin,
  html,
  LitElement,
  SlotMixin,
} from '@lion/core';
import '@lion/core/differentKeyEventNamesShimIE';

const isKeyboardClickEvent = (/** @type {KeyboardEvent} */ e) => e.key === ' ' || e.key === 'Enter';
const isSpaceKeyboardClickEvent = (/** @type {KeyboardEvent} */ e) => e.key === ' ';

export class LionButton extends DisabledWithTabIndexMixin(SlotMixin(LitElement)) {
  static get properties() {
    return {
      role: {
        type: String,
        reflect: true,
      },
      active: {
        type: Boolean,
        reflect: true,
      },
      type: {
        type: String,
        reflect: true,
      },
    };
  }

  render() {
    return html`
      ${this._beforeTemplate()}
      <div class="button-content" id="${this._buttonId}"><slot></slot></div>
      ${this._afterTemplate()}
      <slot name="_button"></slot>
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  _beforeTemplate() {
    return html``;
  }

  // eslint-disable-next-line class-methods-use-this
  _afterTemplate() {
    return html``;
  }

  static get styles() {
    return [
      css`
        :host {
          position: relative;
          display: inline-flex;
          box-sizing: border-box;
          vertical-align: middle;
          line-height: 24px;
          background: #eee; /* minimal styling to make it recognizable as btn */
          padding: 8px; /* padding to fix with min-height */
          outline: none; /* focus style handled below */
          cursor: default; /* /* we should always see the default arrow, never a caret */
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
        }

        :host::before {
          content: '';

          /* center vertically and horizontally */
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);

          /* touch area (comes into play when button height goes below this one) */
          /* src = https://www.smashingmagazine.com/2012/02/finger-friendly-design-ideal-mobile-touchscreen-target-sizes/ */
          min-height: 40px;
          min-width: 40px;
          width: 100%;
          height: 100%;
        }

        .button-content {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        :host ::slotted(button) {
          position: absolute;
          top: 0;
          left: 0;
          clip: rect(0 0 0 0);
          clip-path: inset(50%);
          overflow: hidden;
          white-space: nowrap;
          height: 1px;
          width: 1px;
          padding: 0; /* reset default agent styles */
          border: 0; /* reset default agent styles */
        }

        /* Show focus styles on keyboard focus. */
        :host(:focus:not([disabled])),
        :host(:focus-visible) {
          /* if you extend, please overwrite */
          outline: 2px solid #bde4ff;
        }

        /* Hide focus styles if they're not needed, for example,
        when an element receives focus via the mouse. */
        :host(:focus:not(:focus-visible)) {
          outline: 0;
        }

        :host(:hover) {
          /* if you extend, please overwrite */
          background: #f4f6f7;
        }

        :host(:active), /* keep native :active to render quickly where possible */
        :host([active]) /* use custom [active] to fix IE11 */ {
          /* if you extend, please overwrite */
          background: gray;
        }

        :host([hidden]) {
          display: none;
        }

        :host([disabled]) {
          pointer-events: none;
          /* if you extend, please overwrite */
          background: lightgray;
          color: #adadad;
          fill: #adadad;
        }
      `,
    ];
  }

  /** @type {HTMLButtonElement} */
  get _nativeButtonNode() {
    return /** @type {HTMLButtonElement} */ (Array.from(this.children).find(
      child => child.slot === '_button',
    ));
  }

  // @ts-ignore
  get slots() {
    return {
      ...super.slots,
      _button: () => {
        /** @type {HTMLButtonElement} */
        const buttonEl = document.createElement('button');
        buttonEl.setAttribute('tabindex', '-1');
        buttonEl.setAttribute('aria-hidden', 'true');
        return buttonEl;
      },
    };
  }

  constructor() {
    super();
    this.role = 'button';
    this.type = 'submit';
    this.active = false;
    this.__setupDelegationInConstructor();

    this._buttonId = `button-${Math.random().toString(36).substr(2, 10)}`;
    if (browserDetection.isIE11) {
      this.updateComplete.then(() => {
        if (!this.hasAttribute('aria-labelledby')) {
          this.setAttribute('aria-labelledby', this._buttonId);
        }
      });
    }

    /** @type {HTMLButtonElement} */
    this.__submitAndResetHelperButton = document.createElement('button');

    /** @type {EventListener} */
    this.__preventEventLeakage = this.__preventEventLeakage.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    this.__setupEvents();
    // Old browsers (IE11, Old Edge, Firefox ESR 60) don't have the `.form`
    // property defined immediately on the native button, so do this after first render on connected.
    this.updateComplete.then(() => {
      this.__setupSubmitAndResetHelperOnConnected();
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.__teardownEvents();
    this.__teardownSubmitAndResetHelperOnDisconnected();
  }

  /**
   * @param {import('@lion/core').PropertyValues } changedProperties
   */
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has('type')) {
      const native = this._nativeButtonNode;
      if (native) {
        native.type = this.type;
      }
    }
    if (changedProperties.has('disabled')) {
      this.setAttribute('aria-disabled', `${this.disabled}`); // create mixin if we need it in more places
    }
  }

  /**
   * Delegate click, by flashing a native button as a direct child
   * of the form, and firing click on this button. This will fire the form submit
   * without side effects caused by the click bubbling back up to lion-button.
   * @param {Event} ev
   */
  async __clickDelegationHandler(ev) {
    // Wait for updateComplete if form is not yet available
    if (!this._form) {
      await this.updateComplete;
    }

    if ((this.type === 'submit' || this.type === 'reset') && ev.target === this && this._form) {
      /**
       * Here, we make sure our button is compatible with a native form, by firing a click
       * from a native button that our form responds to. The native button we spawn will be a direct
       * child of the form, plus the click event that will be sent will be prevented from
       * propagating outside of the form. This will keep the amount of 'noise' (click events
       * from 'ghost elements' that can be intercepted by listeners in the bubble chain) to an
       * absolute minimum.
       */
      this.__submitAndResetHelperButton.type = this.type;

      this._form.appendChild(this.__submitAndResetHelperButton);
      // Form submission or reset will happen
      this.__submitAndResetHelperButton.click();
      this._form.removeChild(this.__submitAndResetHelperButton);
    }
  }

  __setupDelegationInConstructor() {
    // do not move to connectedCallback, otherwise IE11 breaks.
    // more info: https://github.com/ing-bank/lion/issues/179#issuecomment-511763835
    this.addEventListener('click', this.__clickDelegationHandler, true);
  }

  __setupEvents() {
    this.addEventListener('mousedown', this.__mousedownHandler);
    this.addEventListener('keydown', this.__keydownHandler);
    this.addEventListener('keyup', this.__keyupHandler);
  }

  __teardownEvents() {
    this.removeEventListener('mousedown', this.__mousedownHandler);
    this.removeEventListener('keydown', this.__keydownHandler);
    this.removeEventListener('keyup', this.__keyupHandler);
    this.removeEventListener('click', this.__clickDelegationHandler);
  }

  __mousedownHandler() {
    this.active = true;
    const mouseupHandler = () => {
      this.active = false;
      document.removeEventListener('mouseup', mouseupHandler);
      this.removeEventListener('mouseup', mouseupHandler);
    };
    document.addEventListener('mouseup', mouseupHandler);
    this.addEventListener('mouseup', mouseupHandler);
  }

  /**
   * @param {KeyboardEvent} e
   */
  __keydownHandler(e) {
    if (this.active || !isKeyboardClickEvent(e)) {
      if (isSpaceKeyboardClickEvent(e)) {
        e.preventDefault();
      }
      return;
    }

    if (isSpaceKeyboardClickEvent(e)) {
      e.preventDefault();
    }

    this.active = true;
    /**
     * @param {KeyboardEvent} keyupEvent
     */
    const keyupHandler = keyupEvent => {
      if (isKeyboardClickEvent(keyupEvent)) {
        this.active = false;
        document.removeEventListener('keyup', keyupHandler, true);
      }
    };
    document.addEventListener('keyup', keyupHandler, true);
  }

  /**
   * @param {KeyboardEvent} e
   */
  __keyupHandler(e) {
    if (isKeyboardClickEvent(e)) {
      // Fixes IE11 double submit/click. Enter keypress somehow triggers the __keyUpHandler on the native <button>
      if (e.srcElement && e.srcElement !== this) {
        return;
      }
      // dispatch click
      this.click();
    }
  }

  /**
   * Prevents that someone who listens outside or on form catches the click event
   * @param {Event} e
   */
  __preventEventLeakage(e) {
    if (e.target === this.__submitAndResetHelperButton) {
      e.stopImmediatePropagation();
    }
  }

  __setupSubmitAndResetHelperOnConnected() {
    this._form = this._nativeButtonNode.form;

    if (this._form) {
      this._form.addEventListener('click', this.__preventEventLeakage);
    }
  }

  __teardownSubmitAndResetHelperOnDisconnected() {
    if (this._form) {
      this._form.removeEventListener('click', this.__preventEventLeakage);
    }
  }
}

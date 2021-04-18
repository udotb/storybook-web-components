import {storiesOf} from "@storybook/html";
import {withKnobs, text, boolean} from '@storybook/addon-knobs';

import '../../../Components/jsys/form/email-address-input';

storiesOf("Form/Email Input Field", module)
    .addDecorator(withKnobs)
    .add('Email Input Field', () => {
        const placeholder = text('Placeholder', 'Enter Your Email');
        const value = text('Value', '');
        const onfocusValidate = boolean('OnFocus Validation', false);
        return `<email-address placeholder="${placeholder}" onfocusout-validate="${onfocusValidate}" value="${value}"></email-address>`;
    });

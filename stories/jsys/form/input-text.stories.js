import {storiesOf} from "@storybook/html";
import {withKnobs, text, number} from '@storybook/addon-knobs';

import '../../../Components/jsys/form/input-text';

storiesOf("Form/Text Input Field", module)
    .addDecorator(withKnobs)
    .add('Text Input Field', () => {
        const placeholder = text('Placeholder', 'Enter Text');
        const value = text('Value', '');
        const min = number('Min', 0);
        const max = number('Max', 256);
        return `<input-text placeholder="${placeholder}" value="${value}" min="${min}" max="${max}" validate="true"></input-text>`;
    });

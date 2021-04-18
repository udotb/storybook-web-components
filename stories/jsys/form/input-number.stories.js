import {storiesOf} from "@storybook/html";
import {withKnobs, text, number} from '@storybook/addon-knobs';

import '../../../Components/jsys/form/input-number';

storiesOf("Form/Number Input Field", module)
    .addDecorator(withKnobs)
    .add('Number Input Field', () => {
        const placeholder = text('Placeholder', 'Enter Number');
        const value = number('Value', 0);
        const min = number('Min', 1);
        const max = number('Max', 65535);
        return `<input-number placeholder="${placeholder}" value="${value}" min="${min}" max="${max}"></input-number>`;
    });

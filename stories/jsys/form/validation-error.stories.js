import {storiesOf} from "@storybook/html";
import {withKnobs, number, text, color} from '@storybook/addon-knobs';

import '../../../Components/jsys/form/validation-error';

storiesOf("Form/Error Text", module)
    .addDecorator(withKnobs)
    .add('Error Text', () => {
        const errorText = text('Enter Error Text', 'Invalid Entry');
        const fontSize = number('Font Size', 14);
        const textColor = color('Error Text Color', 'red');
        return `<validation-error text="${errorText}" text-color="${textColor}" font-size="${fontSize}px"></validation-error>`;
    });

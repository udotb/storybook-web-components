import {storiesOf} from "@storybook/html";
import {withKnobs, text, number, color} from '@storybook/addon-knobs';

import '../../../Components/jsys/form/password-field';

storiesOf("Form/Password Input Field", module)
    .addDecorator(withKnobs)
    .add('Password Input Field', () => {
        const placeholder = text('Placeholder', 'Enter Password');
        const backgroundColor = color('Background Color', 'white');
        const textColor = color('Text Color', 'black');
        const fontSize = number('Font Size', 14);
        return `<password-field placeholder="${placeholder}" background-color="${backgroundColor}" text-color="${textColor}" font-size="${fontSize}px"></password-field>`;
    });

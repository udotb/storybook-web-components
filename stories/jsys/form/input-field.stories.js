import {storiesOf} from "@storybook/html";
import {withKnobs, text, color, number} from '@storybook/addon-knobs';

import '../../../Components/jsys/form/input-field';

storiesOf("Form/Input Field", module)
    .addDecorator(withKnobs)
    .add('Input Field', () => {
        const placeholder = text('Placeholder', 'Enter Text');
        const backgroundColor = color('Background Color', 'white');
        const value = text('Value', '');
        const textColor = color('Text Color', 'black');
        const fontSize = number('Font Size', 14);
        return `<input-field placeholder="${placeholder}" background-color="${backgroundColor}" value="${value}" text-color="${textColor}" font-size="${fontSize}px"></input-field>`;
    });

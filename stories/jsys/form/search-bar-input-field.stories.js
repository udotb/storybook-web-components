import {storiesOf} from "@storybook/html";
import {withKnobs, number, color} from '@storybook/addon-knobs';

import '../../../Components/jsys/form/search-bar-input-field';

storiesOf("Form/Search bar Input Field", module)
    .addDecorator(withKnobs)
    .add('Search bar Input Field', () => {
        const backgroundColor = color('Background Color', 'white');
        const textColor = color('Text Color', 'black');
        const width = number('Width', 50);
        return `<search-bar-input-field background-color="${backgroundColor}" text-color="${textColor}" width="${width}%"></search-bar-input-field>`;
    });

import {storiesOf} from "@storybook/html";
import {withKnobs, number, color} from '@storybook/addon-knobs';

import '../../../Components/jsys/icons/listview-font-icon';

storiesOf("Icons/List View Icon", module)
    .addDecorator(withKnobs)
    .add('List View Icon', () => {
        const iconColor = color('Color', 'green');
        const height = number('Height', 20);
        const width = number('Width', 20);
        return `<listview-font-icon width="${width}" height="${height}" color="${iconColor}"></listview-font-icon>`;
    });

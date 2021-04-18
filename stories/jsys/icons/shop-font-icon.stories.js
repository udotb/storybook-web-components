import {storiesOf} from "@storybook/html";
import {withKnobs, number, color} from '@storybook/addon-knobs';

import '../../../Components/jsys/icons/shop-font-icon';

storiesOf("Icons/Shop Icon", module)
    .addDecorator(withKnobs)
    .add('Shop Icon', () => {
        const iconColor = color('Color', 'green');
        const height = number('Height', 20);
        const width = number('Width', 20);
        return `<shop-font-icon width="${width}" height="${height}" color="${iconColor}"></shop-font-icon>`;
    });

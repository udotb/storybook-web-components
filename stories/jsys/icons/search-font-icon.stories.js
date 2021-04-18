import {storiesOf} from "@storybook/html";
import {withKnobs, number, color} from '@storybook/addon-knobs';

import '../../../Components/jsys/icons/search-font-icon';

storiesOf("Icons/Search Icon", module)
    .addDecorator(withKnobs)
    .add('Search Icon', () => {
        const iconColor = color('Color', 'green');
        const height = number('Height', 20);
        const width = number('Width', 20);
        return `<search-font-icon width="${width}" height="${height}" color="${iconColor}"></search-font-icon>`;
    });

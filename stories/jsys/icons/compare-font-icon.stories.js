import {storiesOf} from "@storybook/html";
import {withKnobs, number, color} from '@storybook/addon-knobs';

import '../../../Components/jsys/icons/compare-font-icon';

storiesOf("Icons/Compare Icon", module)
    .addDecorator(withKnobs)
    .add('Compare Icon', () => {
        const iconColor = color('Color', 'green');
        const height = number('Height', 20);
        const width = number('Width', 20);
        return `<compare-font-icon width="${width}" height="${height}" color="${iconColor}"></compare-font-icon>`;
    });

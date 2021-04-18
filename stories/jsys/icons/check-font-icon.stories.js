import {storiesOf} from "@storybook/html";
import {withKnobs, number, color} from '@storybook/addon-knobs';

import '../../../Components/jsys/icons/check-font-icon';

storiesOf("Icons/Check Icon", module)
    .addDecorator(withKnobs)
    .add('Check Icon', () => {
        const iconColor = color('Color', 'green');
        const height = number('Height', 20);
        const width = number('Width', 20);
        return `<check-font-icon width="${width}" height="${height}" color="${iconColor}"></check-font-icon>`;
    });

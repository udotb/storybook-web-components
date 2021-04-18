import {storiesOf} from "@storybook/html";
import {withKnobs, number, color} from '@storybook/addon-knobs';

import '../../../Components/jsys/icons/specs-font-icon';

storiesOf("Icons/Specs Icon", module)
    .addDecorator(withKnobs)
    .add('Specs Icon', () => {
        const iconColor = color('Color', 'green');
        const height = number('Height', 20);
        const width = number('Width', 20);
        return `<specs-font-icon width="${width}" height="${height}" color="${iconColor}"></specs-font-icon>`;
    });

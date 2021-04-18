import {storiesOf} from "@storybook/html";
import {withKnobs, number, color} from '@storybook/addon-knobs';

import '../../../Components/jsys/icons/times-font-icon';

storiesOf("Icons/Times Icon", module)
    .addDecorator(withKnobs)
    .add('Times Icon', () => {
        const iconColor = color('Color', 'red');
        const height = number('Height', 20);
        const width = number('Width', 20);
        return `<times-font-icon width="${width}" height="${height}" color="${iconColor}"></times-font-icon>`;
    });

import {storiesOf} from "@storybook/html";
import {withKnobs, number, color} from '@storybook/addon-knobs';

import '../../../Components/jsys/icons/imageview-font-icon';

storiesOf("Icons/Image View Icon", module)
    .addDecorator(withKnobs)
    .add('Image View Icon', () => {
        const iconColor = color('Color', 'green');
        const height = number('Height', 20);
        const width = number('Width', 20);
        return `<imageview-font-icon width="${width}" height="${height}" color="${iconColor}"></imageview-font-icon>`;
    });

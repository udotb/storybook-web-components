import {storiesOf} from "@storybook/html";
import {withKnobs, number, color} from '@storybook/addon-knobs';

import '../../../Components/jsys/icons/edit-font-icon';

storiesOf("Icons/Edit Icon", module)
    .addDecorator(withKnobs)
    .add('Edit Icon', () => {
        const iconColor = color('Color', 'green');
        const height = number('Height', 20);
        const width = number('Width', 20);
        return `<edit-font-icon width="${width}" height="${height}" color="${iconColor}"></edit-font-icon>`;
    });

import {storiesOf} from "@storybook/html";
import {withKnobs, number, color} from '@storybook/addon-knobs';

import '../../../Components/jsys/icons/trash-font-icon';

storiesOf("Icons/Trash Icon", module)
    .addDecorator(withKnobs)
    .add('Trash Icon', () => {
        const iconColor = color('Color', 'red');
        const height = number('Height', 20);
        const width = number('Width', 20);
        return `<trash-font-icon width="${width}" height="${height}" color="${iconColor}"></trash-font-icon>`;
    });

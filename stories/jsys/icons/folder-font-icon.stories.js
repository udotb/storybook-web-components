import {storiesOf} from "@storybook/html";
import {withKnobs, number, color} from '@storybook/addon-knobs';

import '../../../Components/jsys/icons/folder-font-icon';

storiesOf("Icons/Folder Icon", module)
    .addDecorator(withKnobs)
    .add('Folder Icon', () => {
        const iconColor = color('Color', 'green');
        const height = number('Height', 20);
        const width = number('Width', 20);
        return `<folder-font-icon width="${width}" height="${height}" color="${iconColor}"></folder-font-icon>`;
    });

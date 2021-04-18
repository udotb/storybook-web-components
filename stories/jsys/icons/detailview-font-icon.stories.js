import {storiesOf} from "@storybook/html";
import {withKnobs, number, color} from '@storybook/addon-knobs';

import '../../../Components/jsys/icons/detailview-font-icon';

storiesOf("Icons/Detail View Icon", module)
    .addDecorator(withKnobs)
    .add('Detail View Icon', () => {
        const iconColor = color('Color', 'green');
        const height = number('Height', 20);
        const width = number('Width', 20);
        return `<detailview-font-icon width="${width}" height="${height}" color="${iconColor}"></detailview-font-icon>`;
    });

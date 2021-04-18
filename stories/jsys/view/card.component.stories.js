import {storiesOf} from "@storybook/html";
import {withKnobs, text, color} from '@storybook/addon-knobs';
import '../../../Components/jsys/view/card-component';

storiesOf("View/Card", module)
    .addDecorator(withKnobs)
    .add('Card', () => {
        const textColor = color('Text Color', 'black');
        const backgroundColor = color('Background Color', 'lightskyblue')
        const height = text('Height', '150px');
        const width = text('Width', '150px');
        return `<card-component background-color="${backgroundColor}" width="${width}" height="${height}" text-color="${textColor}"></card-component>`;
    });

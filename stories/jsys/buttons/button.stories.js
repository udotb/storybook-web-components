import {storiesOf} from "@storybook/html";
import {withKnobs, text, color} from '@storybook/addon-knobs';

import '../../../Components/jsys/buttons/button';
import '../../../Components/jsys/buttons/radio-group';
import '../../../Components/jsys/buttons/radio-button';



storiesOf("Buttons/Button", module)
    .addDecorator(withKnobs)
    .add('Button', () => {
        const content = text('Text', 'Button');
        const background = color('Background Color', 'lightskyblue')
        return `<button-component color="${color}" background=${background}>${content}</button-component>`;
    })
    .add('Radio Button', () => '<radio-button>This is Radio Button</radio-button>')
    .add('Radio Button Group', () => '<radio-group Choose the option><radio-button>Option 1</radio-button><radio-button>Option 2</radio-button><radio-button>Option 3</radio-button></radio-group>');

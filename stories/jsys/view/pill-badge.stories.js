import {storiesOf} from "@storybook/html";
import {withKnobs, color} from '@storybook/addon-knobs';
import '../../../Components/jsys/view/pill-badge';

storiesOf("View/Pill Badge", module)
    .addDecorator(withKnobs)
    .add('Pill Badge', () => {
        const backgroundColor = color('Background Color', 'lightskyblue')
        const crossColor = color('Cross Color', 'red');
        return `<pill-badge background="${backgroundColor}" color="${crossColor}" show-cross-button></pill-badge>`;
    });

import {storiesOf} from "@storybook/html";
import {withKnobs, color} from '@storybook/addon-knobs';
import '../../../Components/jsys/view/top-nav';

storiesOf("View/Top Nav", module)
    .addDecorator(withKnobs)
    .add('Top Nav', () => {
        const backgroundColor = color('Background Color', 'lightskyblue');
        return `<top-nav background-color="${backgroundColor}"></top-nav>`;
    });

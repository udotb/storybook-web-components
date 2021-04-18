import {storiesOf} from "@storybook/html";
import {withKnobs, text} from '@storybook/addon-knobs';
import '../../../Components/jsys/view/tool-tip';

const parameters = {
    layout: 'centered',
};

storiesOf("View/Tool Tip", module)
    .addDecorator(withKnobs)
    .addParameters(parameters)
    .add('Tool Tip', () => {
        const trim = text('Trim', '25')
        const tooltip = text('Tool Tip Text', 'Hello World');
        const content = text('Hover Content', 'Hover your mouse here..');
        return `<tool-tip trim="${trim}" tooltip="${tooltip}" content="${content}"></tool-tip>`;
    });

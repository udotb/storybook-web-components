import {storiesOf} from "@storybook/html";
import {withKnobs, text, select} from '@storybook/addon-knobs';
import '../../../Components/jsys/notifications/alert-message';


storiesOf("Notification/Alert Message", module)
    .addDecorator(withKnobs)
    .add('Alert Message', () => {
        const options = {Success: 'success', Danger: 'danger'}
        const type = select('Type', options)
        const message = text('Message', 'Notification')
        return `<alert-message status="show" is="${type}" message="${message}"></alert-message>`;
    });



import {storiesOf} from "@storybook/html";
import {withKnobs, text, boolean} from '@storybook/addon-knobs';
import '../../../Components/jsys/notifications/pop-up';

storiesOf("Notification/Pop-up", module)
    .addDecorator(withKnobs)
    .add('Pop-up', () => {
        const show = boolean('Show', true)
        const width = text('Width', '50%')
        return `<pop-up show="${show}" width="${width}"><div slot="open-modal"></div></pop-up>`;
    });



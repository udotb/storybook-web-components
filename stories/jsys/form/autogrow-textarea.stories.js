import {storiesOf} from "@storybook/html";
import {withKnobs, number} from '@storybook/addon-knobs';

import '../../../Components/jsys/form/autogrow-textarea';

storiesOf("Form/Auto Grow Text Area", module)
    .addDecorator(withKnobs)
    .add('Auto Grow Text Area', () => {
        const rows = number('Rows', 2);
        return `<autogrow-textarea rows="${rows}"></autogrow-textarea>`;
    });

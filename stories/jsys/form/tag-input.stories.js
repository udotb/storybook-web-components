import {storiesOf} from "@storybook/html";
import {withKnobs, boolean} from '@storybook/addon-knobs';

import '../../../Components/jsys/form/tag-input';

storiesOf("Form/Tag Input", module)
    .addDecorator(withKnobs)
    .add('Tag Input', () => {
        const hint = boolean('Hint', true);
        return `<tag-input hint="${hint}"></tag-input>`;
    });

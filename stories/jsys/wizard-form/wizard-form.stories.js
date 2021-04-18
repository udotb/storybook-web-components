import {storiesOf} from '@storybook/html';
import '../../../Components/jsys/wizard-form/wizard-form';
import '../../../Components/jsys/wizard-form/wizard-step';

storiesOf('Wizard Form/Wizard Form', module)
    .add('Wizard Form', () => '<wizard-form show-labels>' +
        '        <wizard-step>Hello</wizard-step>' +
        '        <wizard-step>World</wizard-step>' +
        '    </wizard-form>'
    );

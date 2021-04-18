import {storiesOf} from '@storybook/html';
import '../../../Components/jsys/wizard-form/wizard-step';

storiesOf('Wizard Form/Wizard Step', module)
    .add('Wizard Step', () => '<wizard-step validate>Hello</wizard-step>'
    );

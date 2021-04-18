import {storiesOf} from '@storybook/html';
import '../../../Components/jsys/form/form-field';

storiesOf('Form/Form Field', module)
    .add('Form Field', () => '<form-field><label>Email</label><email-address required placeholder="Enter your email" onfocusout-validate="true"></email-address><button-component content="Submit" is="primary"></button-component></form-field>'
    );

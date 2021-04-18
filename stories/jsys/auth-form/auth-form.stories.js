import {storiesOf} from '@storybook/html';
import '../../../Components/jsys/auth-form/auth-form';

storiesOf('Auth/Auth form', module)
    .add('Auth form', () => '<auth-form><slot>Application Name</slot></auth-form>'
    );

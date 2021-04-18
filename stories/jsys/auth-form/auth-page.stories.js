import {storiesOf} from '@storybook/html';
import '../../../Components/jsys/auth-form/auth-page';

storiesOf('Auth/Auth Page', module)
    .add('Auth Page', () => '<auth-page><div><div><div class="alert alert-success" role="alert">' +
        '                            <strong></strong> Thank you! for sending us your response.</div></div>' +
        '                    <p class="text-center mt-5">' +
        '                    <a class="font-weight-bold cursorPointer" style="color: #6f88c1">Sign Up</a></p></div>' +
        '    </auth-page>'
    );

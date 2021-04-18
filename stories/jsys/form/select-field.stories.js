import {storiesOf} from '@storybook/html';
import '../../../Components/jsys/form/select-field';

storiesOf('form/Select Field', module)
    .add('Select Field', () => '<select-field><select-option value="option1">Option 1</select-option><select-option value="option2">Option 2</select-option></select-field>'
    );

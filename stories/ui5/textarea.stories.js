import {storiesOf} from '@storybook/html';
import '../../Components/ui5/textarea/TextArea';

storiesOf('ui5/Form', module)
    .add('TextArea', () => '<textarea class="ui5-textarea-inner" placeholder="Enter Text"></textarea>'
    );



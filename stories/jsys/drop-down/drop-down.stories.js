import {storiesOf} from '@storybook/html';
import '../../../Components/jsys/drop-down/drop-down';

storiesOf('Drop Down/Drop Down', module)
    .add('Drop Down', () => '<drop-down background="red" border="true">' +
        '</drop-down>'
    );

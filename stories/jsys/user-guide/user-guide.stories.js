import {storiesOf} from '@storybook/html';
import '../../../Components/jsys/user-guide/user-guide-1';
import '../../../Components/jsys/user-guide/user-guide';

storiesOf('User Guide/User Guide 1', module)
    .add('User Guide', () => '<user-guide></user-guide>')
    .add('User Guide 1', () => '<user-guide-1></user-guide-1>'
    );

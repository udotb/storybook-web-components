import {storiesOf} from '@storybook/html';
import '../../../Components/jsys/form/time-picker';

storiesOf('form/Time Picker', module)
    .add('Time Picker', () => '<time-picker required placeholder="Select start time"></time-picker><time-picker required placeholder="Select End time"></time-picker>'
    );

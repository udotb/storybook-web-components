import {storiesOf} from '@storybook/html';
import '../../../Components/jsys/form/date-picker';

storiesOf('form/Date Picker', module)
    .add('Date Picker', () => '<date-picker required placeholder="Select start date"></date-picker><date-picker required placeholder="Select End date"></date-picker>'
    );

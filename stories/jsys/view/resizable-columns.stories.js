import {storiesOf} from '@storybook/html';
import '../../../Components/jsys/view/resizeable-columns';

storiesOf('View/Resizable Columns', module)
    .add('Resizable Columns', () => '<resizeable-columns><div slot="first">Column 1</div><div slot="second">Column 2</div></resizeable-columns>'
    );

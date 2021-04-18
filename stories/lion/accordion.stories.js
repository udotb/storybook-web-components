import {storiesOf} from '@storybook/html';
import '../../Components/lion/accordion/lion-accordion';

storiesOf('View/Accordion', module)
    .add('Accordion', () => '<lion-accordion>' +
        '    <h3 slot="invoker">' +
        '      <button>Slot 1</button>' +
        '    </h3>' +
        '    <p slot="content">The data in slot 1 is showing now.</p>' +
        '    <h3 slot="invoker">' +
        '      <button>Slot 2</button>' +
        '    </h3>' +
        '    <p slot="content">' +
        '      The data in slot 2 is showing now.' +
        '    </p>' +
        '  </lion-accordion>'
    );

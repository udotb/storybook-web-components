import {storiesOf} from '@storybook/html';
import '../../Components/lion/tabs/lion-tabs';

storiesOf('Tabs/Lion Tabs', module)
    .add('Main', () => '<lion-tabs>detail' +
        '    <button slot="tab">Info</button>' +
        '    <p slot="panel">Info page with lots of information about us.</p>' +
        '    <button slot="tab">Work</button>' +
        '    <p slot="panel">Work page that showcases our work.</p>' +
        '  </lion-tabs>'
    )
    .add('Nested Tabs', () => '<lion-tabs>detail' +
        '    <button slot="tab">Movies</button>detail' +
        '    <button slot="tab">Work</button>detail' +
        '    <div slot="panel">detail' +
        '      <p>Find some more info about our favorite movies:</p>detail' +
        '      <lion-tabs>detail' +
        '        <button slot="tab">Info about Cars</button>detail' +
        '        <button slot="tab">Info about Toy Story</button>detail' +
        '        <p slot="panel">detail' +
        '          Cars is a 2006 American computer-animated comedy film produced by Pixar Animation Studiosdetail' +
        '          and released by Walt Disney Pictures.detail' +
        '        </p>detail' +
        '        <p slot="panel">detail' +
        '          The feature film directorial debut of John Lasseter, it was the first entirelydetail' +
        '          computer-animated feature film, as well as the first feature film from Pixar.detail' +
        '        </p>detail' +
        '      </lion-tabs>detail' +
        '    </div>detail' +
        '    <p slot="panel">Work page that showcases our work.</p>detail' +
        '  </lion-tabs>');

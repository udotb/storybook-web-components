import {storiesOf} from '@storybook/html';
import '../../Components/lion/button/lion-button';

storiesOf('Buttons/Lion-Button', module)
    .add('Main', () => '<lion-button>Default</lion-button>'
    ).add('Handler', () => '<lion-button @click="${ev => console.log(\'clicked/spaced/entered\', ev)}">' +
    '    Click | Space | Enter me and see log' +
    '  </lion-button>')
    .add('Disabled', () => '<lion-button disabled>Disabled</lion-button>')
    .add('Small', () => '<style>' +
        '    .small {' +
        '      padding: 4px;' +
        '      line-height: 1em;' +
        '    }' +
        '    .small::before {' +
        '      border: 1px dashed #000;' +
        '    }' +
        '  </style>' +
        '  <lion-button class="small">xs</lion-button>'
    );

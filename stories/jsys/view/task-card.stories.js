import {storiesOf} from "@storybook/html";
import {withKnobs, text, color} from '@storybook/addon-knobs';

import '../../../Components/jsys/view/task-card';

storiesOf("View/Task Card", module)
    .addDecorator(withKnobs)
    .add('Task Card', () => {
        const backgroundColor = color('Color', 'white');
        const task = text('Task Name', 'This is a Demo Task Card');
        const textColor = color('Text Color', 'black');
        return `<task-card text="${task}" background-color="${backgroundColor}" text-color="${textColor}"></task-card>`;
    });

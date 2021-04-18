import {storiesOf} from "@storybook/html";
import {withKnobs, text} from '@storybook/addon-knobs';
import '../../../Components/jsys/navigation/anchor-link';

storiesOf("Navigation/Anchor Link", module)
    .addDecorator(withKnobs)
    .add('Href', () => {
        const name = text('Text', 'Link');
        const href = text('Href', '/')
        return `<anchor-link name="${name}" href="${href}"></anchor-link>`
    })
    .add('Target', () => {
        const name = text('Text', 'Link');
        const target = text('Target', '#')
        return `<anchor-link name="${name}" href="${target}"></anchor-link>`
    });

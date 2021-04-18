import {storiesOf} from "@storybook/html";
import {withKnobs, text} from '@storybook/addon-knobs';
import '../../../Components/jsys/images/responsive-img';
import '../../../Components/jsys/images/logo-image-component';

storiesOf("Images/Logo Image", module)
    .addDecorator(withKnobs)
    .add('Logo Image', () => {
        const filename = text('Filename/Src', 'https://pbs.twimg.com/profile_images/1100804485616566273/sOct-Txm_400x400.png');
        const width = text('Width', '100px')
        const height = text('Height', '100px')
        return `<logo-image-component filename="${filename}" height="${height}" width="${width}"></logo-image-component>`;
    })
;
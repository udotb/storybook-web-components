import {storiesOf} from "@storybook/html";
import {withKnobs, text} from '@storybook/addon-knobs';
import '../../../Components/jsys/images/responsive-img';
import '../../../Components/jsys/images/logo-image-component';

storiesOf("Images/Responsive Image", module)
    .addDecorator(withKnobs)
    .add('Responsive Image', () => {
        const src = text('Filename/Src', 'https://pbs.twimg.com/profile_images/1100804485616566273/sOct-Txm_400x400.png');
        const width = text('Width', '250px')
        const height = text('Height', '250px')
        return `<responsive-img src="${src}" height="${height}" width="${width}"></responsive-img>`;
    });
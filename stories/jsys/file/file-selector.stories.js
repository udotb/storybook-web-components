import {storiesOf} from "@storybook/html";
import {withKnobs, text, color, boolean} from '@storybook/addon-knobs';
import '../../../Components/jsys/file/file-selector';
import '../../../Components/jsys/file/file-upload';
import '../../../Components/jsys/file/url-image-upload';

storiesOf("File/File Selection System", module)
    .addDecorator(withKnobs)
    .add('Url Image Uploader', () => {
        const multiple = boolean('Multiple', true)
        return `<url-image-upload multiple="${multiple}" placeholder="Paste image url here..." validate="true"></url-image-upload>`;
    })
    .add('File Selector', () => '<file-selector><button-component content="Select" background="primary" slot="upload-button"></button-component></file-selector>')
    .add('File Uploader', () => '<file-upload><span slot="upload-button"><button-component content="Upload file"></button-component></span></file-upload>');

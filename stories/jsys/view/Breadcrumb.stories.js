import {storiesOf} from '@storybook/html';
import '../../../Components/jsys/view/breadcrumb';

storiesOf('View/Breadcrumb', module)
    .add('Breadcrumb', () => '<breadcrumb-component background-color="lightskyblue">Home</breadcrumb-component>'
    );

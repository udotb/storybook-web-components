import {storiesOf} from "@storybook/html";
import '../../../Components/jsys/horizontal-tab/horizontal-tab';
import '../../../Components/jsys/horizontal-tab/tab-view';
import '../../../Components/jsys/horizontal-tab/tab-button';

storiesOf("Tabs/Horizontal Tab", module)
    .add('Horizontal Tab', () => '<horizontal-tab>' +
            '<tab-button slot="tab-button" target-id="tab1">Tab 1</tab-button>' +
            '<tab-button slot="tab-button" target-id="tab2">Tab 2</tab-button>' +
            '<tab-view slot="tab-view" id="tab1">Tab 1 view</tab-view>' +
            '<tab-view slot="tab-view" id="tab2">Tab 2 view</tab-view>' +
            '</horizontal-tab>')
    .add('Tab Button', () => '<tab-button>Tab Button</tab-button>')
    .add('Tab View', () => '<tab-view>Tab view</tab-view>');

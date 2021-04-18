module.exports = {
    "stories": [
        "../stories/**/*.stories.mdx",
        "../stories/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-essentials",
        "@storybook/addon-notes/register",
        "@storybook/addon-knobs/register",
        "@whitespace/storybook-addon-html"
    ]
}
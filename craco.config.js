/* craco.config.js */

const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#798878',
                            '@layout-header-background': '#cacbca',
                            '@layout-header-color': '@text-color',
                            '@layout-footer-background': '@layout-header-background',
                            '@menu-bg': '#cacbca',
                            '@divider-color': 'rgb(234,224,220)',
                            '@font-family': 'Arimo',

                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};

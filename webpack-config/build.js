const path = require('path');
const config = require('./config');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = () => {

    return {
        mode: 'production',
        entry: path.resolve('./', 'src/index.ts'),
        output: {
            path: path.resolve('./', 'npm'),
            filename: 'pixi-vue.min.js',
            library: 'pixiVue',
            libraryTarget: 'umd',
            libraryExport: 'default',
        },
        resolve: config.resolve,
        externals: {},
        module: config.module,
        plugins: [
            new CopyWebpackPlugin({
                patterns: [
                    {from: 'src/index.d.ts'},
                    {
                        from: 'src/types/**/*',
                        transformPath (targetPath) {
                            return targetPath.replace('src/', '');
                        },
                    },
                    {from: 'LICENSE'}
                ]
            }),
        ]
    };
};
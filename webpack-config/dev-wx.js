const path = require('path');
const config = require('./config');

module.exports = {
    watch: true,
    devtool: 'source-map',
    mode: 'development',
    entry: path.resolve('./', 'wx-minigame/src/index.ts'),
    output: {
        path: path.resolve('./', 'wx-minigame/dist'),
        filename: 'main.min.js',
        library: 'PixiVueWx',
        libraryTarget: 'umd',
        libraryExport: 'default',
        globalObject: 'this',
    },
    externals: {
    },
    resolve: config.resolve,
    module: config.module,
    plugins: config.plugins,
};
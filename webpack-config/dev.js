const path = require('path');
const config = require('./config');

module.exports = {
    mode: 'development',
    entry: path.resolve('./', 'src/index.ts'),
    output: {
        path: path.resolve('./', 'public'),
        filename: 'bundle.js'
    },
    resolve: config.resolve,
    devtool: 'eval-source-map',
    devServer: {
        contentBase: path.resolve('./', 'public'),
        historyApiFallback: true,
        inline: true,
        host: 'localhost',
        disableHostCheck: true,
        proxy: {
        },
    },
    module: config.module,
    plugins: config.plugins,
};
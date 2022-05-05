/*
 * @Author: tackchen
 * @Date: 2022-03-27 12:00:17
 * @LastEditors: tackchen
 * @LastEditTime: 2022-05-04 16:24:04
 * @FilePath: /pixi-vue/webpack-config/config.js
 * @Description: Coding something
 */
const {VueLoaderPlugin} = require('vue-loader');
const path = require('path');

module.exports = {
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
        alias: {
            'src': path.resolve('./', 'src/'),
            'types': path.resolve('./', 'src/types/'),
        }
    },
    module: {
        rules: [{
            test: /(.js)$/,
            use: [{
                loader: 'babel-loader',
            }]
        }, {
            test: /\.vue$/,
            loader: 'vue-loader',
            // options: {
            //     loaders: {
            //         js: 'ts-loader',
            //     },
            // },
        }, {
            test: /.ts$/,
            use: [{
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/.vue$/],
                }
            }]
        }, {
            test: /(.js)$/,
            loader: 'eslint-loader',
            enforce: 'pre',
            exclude: /node_modules/,
            options: {
                configFile: './.eslintrc.js'
            }
        }]
    },
    plugins: [
        new VueLoaderPlugin(),
        // new MonacoWebpackPlugin({
        //     languages: ['javascript', 'typescript', 'html', 'json']
        // })
    ]
};
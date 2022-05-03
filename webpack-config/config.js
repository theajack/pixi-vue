/*
 * @Author: tackchen
 * @Date: 2022-03-27 12:00:17
 * @LastEditors: tackchen
 * @LastEditTime: 2022-03-27 12:00:17
 * @FilePath: /npm-ts-template/webpack-config/config.js
 * @Description: Coding something
 */

module.exports = {
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    module: {
        rules: [{
            test: /(.ts)$/,
            use: {
                loader: 'ts-loader'
            }
        }, {
            test: /(.js)$/,
            use: [{
                loader: 'babel-loader',
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
    }
};
/*
 * @Author: tackchen
 * @Date: 2022-03-27 11:42:57
 * @LastEditors: tackchen
 * @LastEditTime: 2022-03-27 12:45:25
 * @FilePath: /npm-ts-template/helper/build/build-package-json.js
 * @Description: Coding something
 */
const pkg = require('../../package.json');
const {writeJsonFile, mkdirDir} = require('./utils');

const keys = ['name', 'version', 'description', 'main', 'unpkg', 'jsdelivr', 'typings', 'author', 'repository', 'keywords', 'dependencies'];

function buidPackageJson (version) {
    const package = {};
    keys.forEach(key => {
        package[key] = pkg[key];
    });

    if (version) {
        package.version = version;

        if (version !== pkg.version) {
            pkg.version = version;
            writeJsonFile('/package.json', pkg);
        }
    }

    mkdirDir('/npm');

    writeJsonFile('/npm/package.json', package);
};

module.exports = buidPackageJson;
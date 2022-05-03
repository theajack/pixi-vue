/*
 * @Author: tackchen
 * @Date: 2022-03-27 12:13:12
 * @LastEditors: tackchen
 * @LastEditTime: 2022-03-27 12:54:18
 * @FilePath: /npm-ts-template/helper/build/modify-readme.js
 * @Description: Coding something
 */

const {replaceFileContent} = require('./utils');

function buildReplacement (text) {
    return `--------

<details>
    <summary>${text}</summary>

<!-- toc -->

</details>

--------`;
}

const summargTocRepCn = buildReplacement('展开目录');
const summargTocRepEn = buildReplacement('Expand directory');

function modifyReadme () {
    replaceFileContent('/README.cn.md', /--------[\s\S]*--------/, summargTocRepCn);
    replaceFileContent('/README.md', /--------[\s\S]*--------/, summargTocRepEn);
}

module.exports = modifyReadme;
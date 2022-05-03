/*
 * @Author: tackchen
 * @Date: 2022-03-27 12:32:16
 * @LastEditors: tackchen
 * @LastEditTime: 2022-03-27 13:23:36
 * @FilePath: /landscape-simulator/helper/build/index.js
 * @Description: Coding something
 */
const childProcess = require('child_process');
const toc = require('gulp-markdown-toc');
const gulp = require('gulp');
const chalk = require('chalk');
const {clearDirectory, logLoading, writeFile} = require('./utils');
const buidPackageJson = require('./build-package-json');
const modifyReadme = require('./modify-readme');

function clearNpm () {
    const done = logLoading('Clearing npm workspace');
    clearDirectory('./npm');
    done();
}

async function main () {
    clearNpm();
    modifyReadme();
    syncVersion();
    readmeToc();
    await buildWebpack();
    console.log(chalk.green('Task All Success!'));
}

function clearNpm () {
    const done = logLoading('Clearing npm workspace');
    clearDirectory('../../npm');
    done();
}


async function buildWebpack () {
    const done = logLoading('Building Webpack');
    const webpackCmd = 'node ./node_modules/webpack/bin/webpack.js --config webpack-config/build.js';
    await exec(webpackCmd);
    done();
}

function readmeToc () {
    const done = logLoading('Rendering readme TOC');
    gulp.src(['README.md', 'README.cn.md'])
        .pipe(toc())
        .pipe(gulp.dest('.'))
        .pipe(gulp.dest('npm'));
    done();
}


async function exec (cmd) {
    return new Promise(resolve => {
        childProcess.exec(cmd, function (error, stdout, stderr) {
            if (error) {
                throw new Error(`Exec error${cmd}`);
            }
            resolve({
                success: true,
                stdout,
                stderr
            });
        });
    });
}

function syncVersion () {
    const done = logLoading('Syncing package version');
    const version = process.argv[2];
    buidPackageJson(version);
    writeFile('/src/version.ts', `export default '${version}';`);
    done();
}

main();
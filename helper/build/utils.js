/*
 * @Author: tackchen
 * @Date: 2022-03-27 12:13:39
 * @LastEditors: tackchen
 * @LastEditTime: 2022-03-27 13:21:10
 * @FilePath: /landscape-simulator/helper/build/utils.js
 * @Description: Coding something
 */
const fs = require('fs');
const path = require('path');
const slog = require('single-line-log').stdout;
const chalk = require('chalk');

function writeJsonFile (filePath, json) {
    fs.writeFileSync(resolvePath(filePath), JSON.stringify(json, null, 4), {encoding: 'utf-8'});
}

function writeFile (filePath, content) {
    fs.writeFileSync(resolvePath(filePath), content, {encoding: 'utf-8'});
}

function readFile (filePath) {
    return fs.readFileSync(resolvePath(filePath), {encoding: 'utf-8'});
}

function mkdirDir (filePath) {
    filePath = resolvePath(filePath);
    if (!fs.existsSync(filePath)) {
        console.log('mkdirSync', filePath);
        fs.mkdirSync(filePath);
    }
}

function replaceFileContent (filePath, regExp, replacement) {
    const content = readFile(filePath);
    const newContent = content.replace(regExp, replacement);
    writeFile(filePath, newContent);
    
}

function resolvePath (filePath) {
    if (filePath[0] === '@' || filePath[0] === '/') {
        filePath = '../../' + filePath.substring(1);
    }
    return path.resolve(__dirname, filePath);
}

function clearDirectory (dirPath) {
    dirPath = resolvePath(dirPath);
    if (!fs.existsSync(dirPath)) return;
    clearDirectoryBase(dirPath);
}

function clearDirectoryBase (dirPath) {
    const files = fs.readdirSync(dirPath);
    files.forEach((file) => {
        const filePath = `${dirPath}/${file}`;
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            clearDirectoryBase(filePath);
            fs.rmdirSync(filePath);
        } else {
            fs.unlinkSync(filePath);
        }
    });
};

function logLoading (text = 'Processing', time = 80) {
    const loadChar = ['\\', '|', '/', '-'];
    let index = 0;
    const interval = setInterval(() => {
        index ++;
        if (index >= loadChar.length) {
            index = 0;
        }
        slog(chalk.blue(`${loadChar[index]} ${text}...`));
    }, time);

    return () => {
        clearInterval(interval);
        slog(chalk.green(`${text} Done !`));
        console.log('');
    };
}
module.exports = {
    logLoading,
    replaceFileContent,
    resolvePath,
    writeJsonFile,
    writeFile,
    readFile,
    mkdirDir,
    clearDirectory,
};
/*
 * @Author: tackchen
 * @Date: 2022-05-04 19:35:42
 * @LastEditors: tackchen
 * @LastEditTime: 2022-05-04 20:38:50
 * @FilePath: /pixi-vue/src/renderer/style.ts
 * @Description: Coding something
 */

import {IPVStyle, IPVStyleKey} from '../types/dom';

const TextStyle: IPVStyleKey[] = [
    'fontFamily', 'fontSize', 'fontWeight',
    'color',
];

const BlockStyle: IPVStyleKey[] = [
    'left', 'top', 'height', 'width',
    'backgroundColor', 'backgroundImage',
];

export function isTextStyle (key: IPVStyleKey): boolean {
    return TextStyle.indexOf(key) !== -1;
}

export function isBlockStyle (key: IPVStyleKey): boolean {
    return BlockStyle.indexOf(key) !== -1;
}

export const DefaultStyle: IPVStyle = {
    fontSize: 14,
    fontFamily: 'Arial',
    color: '#000',
    fontWeight: 'normal',
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    backgroundColor: '#fff',
    backgroundImage: '',
};
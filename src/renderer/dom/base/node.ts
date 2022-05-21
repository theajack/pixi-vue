/*
 * @Author: tackchen
 * @Date: 2022-05-04 09:18:02
 * @LastEditors: tackchen
 * @LastEditTime: 2022-05-14 20:30:34
 * @FilePath: /pixi-vue/src/renderer/dom/base/node.ts
 * @Description: Coding something
 */

import {Style} from 'src/renderer/style/style-util';
import {IJson} from 'src/types/utils';
import {PVElement} from './element';

export abstract class PVNode {
    parentElement: PVElement;
    nodeName: string;

    props: IJson = {};

    textContent: string;

    abstract style: Style;

    setText (text: string) {
        this.textContent = text;
    }

    onClick?: (e: any) => void;
 
    onAdd (parent: PVElement) {
        this.parentElement = parent;
    }
}
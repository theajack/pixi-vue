/*
 * @Author: tackchen
 * @Date: 2022-05-14 20:23:52
 * @LastEditors: tackchen
 * @LastEditTime: 2022-05-14 20:27:29
 * @FilePath: /pixi-vue/src/renderer/style/text-style.ts
 * @Description: Coding something
 */
import {IPVStyleKey} from '../../types/dom';
import {IJson} from '../../types/utils';
import {TextNode, TextStyleMap} from '../dom/text';
import {Style} from './style-util';


export class PVTextStyle extends Style {
    parent: TextNode;
    constructor (parent: TextNode) {
        super(parent);
    }

    applyTextStyle (key: IPVStyleKey, value: any): boolean {
        const pixiKey = TextStyleMap[key];
    
        if (!pixiKey) return false;
        (this.parent.text.style as IJson)[pixiKey] = value;
        return true;
    }
}
/*
 * @Author: tackchen
 * @Date: 2022-05-04 09:21:19
 * @LastEditors: tackchen
 * @LastEditTime: 2022-05-05 09:27:11
 * @FilePath: /pixi-vue/src/renderer/dom/text.ts
 * @Description: Coding something
 */

import {PVNode} from './base/node';
import {Text} from 'pixi.js';
import {PVElement} from './base/element';
import {IPosition, IPVStyleKey} from 'types/dom.d';
import {IJson} from 'src/types/utils';


export const TextStyleMap: {
    [prop in IPVStyleKey]?: string;
} = {
    fontSize: 'fontSize',
    fontFamily: 'fontFamily',
    color: 'fill',
    fontWeight: 'fontWeight',
};

export class TextNode extends PVNode {
    text: Text;

    setText (value: string) {
        super.setText(value);
        this.text.text = value;
    }

    constructor (text = '') {
        super();
        this.text = new Text(text);
        this.textContent = text;
    }

    onAdd (parent: PVElement): void {
        super.onAdd(parent);
        parent.container.addChild(this.text);
    }

    setPosition ({
        left = 0, top = 0
    }: IPosition) {
        this.text.x = left;
        this.text.y = top;
    }

    applyTextStyle (key: IPVStyleKey, value: any): boolean {
        const pixiKey = TextStyleMap[key];

        if (!pixiKey) return false;
        (this.text.style as IJson)[pixiKey] = value;
        return true;
    }
}
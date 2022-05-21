/*
 * @Author: tackchen
 * @Date: 2022-05-04 09:21:19
 * @LastEditors: tackchen
 * @LastEditTime: 2022-05-14 20:12:06
 * @FilePath: /pixi-vue/src/renderer/dom/text.ts
 * @Description: Coding something
 */

import {PVNode} from './base/node';
import {Text} from 'pixi.js';
import {PVElement} from './base/element';
import {IPVStyleKey} from 'types/dom.d';
import {ENodeName} from 'types/enum';
import {PVTextStyle} from '../style/text-style';


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
    style: PVTextStyle;
    nodeName = ENodeName.Text;
    setText (value: string) {
        super.setText(value);
        
        this.text.text = value;
    }

    constructor (text = '') {
        super();
        this.style = new PVTextStyle(this);
        this.text = new Text(text);
        this.textContent = text;
    }

    onAdd (parent: PVElement): void {
        super.onAdd(parent);
        parent.container.addChild(this.text);
    }
}
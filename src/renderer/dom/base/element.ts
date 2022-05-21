/*
 * @Author: tackchen
 * @Date: 2022-05-04 09:18:07
 * @LastEditors: tackchen
 * @LastEditTime: 2022-05-14 21:03:14
 * @FilePath: /pixi-vue/src/renderer/dom/base/element.ts
 * @Description: Coding something
 */

import {Container} from 'pixi.js';
import {IPosition} from 'src/types/dom';
import {TextNode} from '../text';
import {PVNode} from './node';
import {ElementStyle} from '../../style/element-style';

export class PVElement extends PVNode {
    children: PVNode[] = [];

    textNode: TextNode;

    container: Container;

    style: ElementStyle;

    constructor () {
        super();
        this.style = new ElementStyle(this);
        this.container = new Container();
        this.textNode = new TextNode();
        this.container.addChild(this.textNode.text);
    }

    setText (value: string) {
        super.setText(value);
        this.textNode.setText(value);
    }

    onAdd (parent: PVElement): void {
        super.onAdd(parent);
        parent.container.addChild(this.container);
        this.style.initGraphics();
    }

    appendChild (child: PVNode) {
        this.children.push(child);
        child.onAdd(this);
    }
    setPosition ({
        left = 0,
        top = 0,
        width,
        height
    }: IPosition) {
        this.container.x = left;
        this.container.y = top;
        if (width) this.container.width = width;
        if (height) this.container.height = height;
    }

    on (event: string, callback: (...args: any[]) => void) {
        this.container.interactive = true;// 响应交互
        this.container.on(event, (e) => {
            callback(e);
        });
    }
}
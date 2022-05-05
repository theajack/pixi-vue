/*
 * @Author: tackchen
 * @Date: 2022-05-04 09:18:07
 * @LastEditors: tackchen
 * @LastEditTime: 2022-05-05 09:40:22
 * @FilePath: /pixi-vue/src/renderer/dom/base/element.ts
 * @Description: Coding something
 */

import {Container} from 'pixi.js';
import {IPosition, IPVStyle, IPVStyleKey} from 'src/types/dom';
import {TextNode} from '../text';
import {PVNode} from './node';
import {isBlockStyle, isTextStyle} from '../../style';
import {IJson} from 'src/types/utils';

const BlockStyleMap: {
    [prop in IPVStyleKey]?: string;
} = {
    left: 'x',
    top: 'y',
    width: 'width',
    height: 'height',
};

export class PVElement extends PVNode {
    children: PVNode[] = [];

    textNode: TextNode;

    container: Container;

    constructor () {
        super();
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

    setStyle (style: IPVStyle): void {
        super.setStyle(style, (key, value) => {
            if (isBlockStyle(key)) {
                this.applyBlockStyle(key, value);
            } else if (isTextStyle(key)) {
                this.applyTextStyle(key, value);
            }
        });
    }

    applyBlockStyle (key: IPVStyleKey, value: any) {
        const containerKey = BlockStyleMap[key];
        if (containerKey) {
            (this.container as IJson)[containerKey] = value;
        } else if (key === 'backgroundColor') {
            // todo
        } else if (key === 'backgroundImage') {
            // todo
        }
    }

    applyTextStyle (key: IPVStyleKey, value: any) {
        const success = this.textNode.applyTextStyle(key, value);
        if (success) {
            this.children.forEach(el => {
                if (typeof el.style[key] === 'undefined') {
                    el.applyTextStyle(key, value);
                }
            });
        }
        return success;
    }

    on (event: string, callback: (...args: any[]) => void) {
        this.container.interactive = true;// 响应交互
        this.container.on(event, (e) => {
            callback(e);
        });
    }
}
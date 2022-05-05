/*
 * @Author: tackchen
 * @Date: 2022-05-04 09:18:02
 * @LastEditors: tackchen
 * @LastEditTime: 2022-05-05 09:41:31
 * @FilePath: /pixi-vue/src/renderer/dom/base/node.ts
 * @Description: Coding something
 */

import {IPVStyle, IPVStyleKey} from 'src/types/dom';
import {IJson} from 'src/types/utils';
import {PVElement} from './element';

export abstract class PVNode {
    parentElement: PVElement;
    nodeName: string;

    props: IJson = {};

    textContent: string;

    setText (text: string) {
        this.textContent = text;
    }

    style: IPVStyle = {};

    left: number;
    top: number;
    width?: number;
    height?: number;
    onClick?: (e: any) => void;
 
    onAdd (parent: PVElement) {
        this.parentElement = parent;
    }

    setStyle (
        style: IPVStyle,
        onStyleChange?: (key: IPVStyleKey, value: any) => void
    ) {
        for (const k in style) {
            const key = k as IPVStyleKey;
            if (this.style[key] !== style[key]) {
                if (onStyleChange) {
                    onStyleChange(key, style[key]);
                }
                this.style[key] = style[key] as any;
            }
        }
    }

    abstract applyTextStyle(key: IPVStyleKey, value: any): boolean;
}
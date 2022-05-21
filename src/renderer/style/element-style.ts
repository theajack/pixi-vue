/*
 * @Author: tackchen
 * @Date: 2022-05-14 20:24:01
 * @LastEditors: tackchen
 * @LastEditTime: 2022-05-15 16:18:02
 * @FilePath: /pixi-vue/src/renderer/style/element-style.ts
 * @Description: Coding something
 */
import {Graphics, Sprite} from 'pixi.js';
import {IJson} from 'src/types/utils';
import {IPVStyle, IPVStyleKey} from '../../types/dom';
import {PVElement} from '../dom/base/element';
import {cssColorToHexValue, isBlockStyle, isTextStyle, Style} from './style-util';

const BlockStyleMap: {
    [prop in IPVStyleKey]?: string;
} = {
    left: 'x',
    top: 'y',
    width: 'width',
    height: 'height',
};

export class ElementStyle extends Style {
    parent: PVElement;

    backgroundSprite: Sprite;

    styleGraphics: Graphics;
    maskGraphics: Graphics;

    readyForRender = false;

    renderMap: {
        [prop in IPVStyleKey]?: ()=>void
    } = {};

    constructor (parent: PVElement) {
        super(parent);
        this.backgroundSprite = new Sprite();
        this.styleGraphics = new Graphics();
        this.maskGraphics = new Graphics();
    }

    initGraphics () {
        const container = this.parent.container;
        container.addChildAt(this.backgroundSprite, 0);
        container.addChildAt(this.styleGraphics, 0);
        container.addChildAt(this.maskGraphics, 0);
        this.backgroundSprite.width = container.width;
        this.backgroundSprite.height = container.height;
        this.styleGraphics.width = container.width;
        this.styleGraphics.height = container.height;

        this.readyForRender = true;

        this.checkRefreshRenderMap();
    }

    set (style: IPVStyle): void {
        super.set(style, (key, value) => {
            if (isBlockStyle(key)) {
                this.applyBlockStyle(key, value);
            } else if (isTextStyle(key)) {
                this.applyTextStyle(key, value);
            }
        });
    }
    
    applyTextStyle (key: IPVStyleKey, value: any): boolean {
        const parent = this.parent as PVElement;
        const success = parent.textNode.style.applyTextStyle(key, value);
        if (success) {
            parent.children.forEach(el => {
                if (typeof el.style.get(key) === 'undefined') {
                    el.style.applyTextStyle(key, value);
                }
            });
        }
        return success;
    }

    applyBlockStyle (key: IPVStyleKey, value: any) {
        const containerKey = BlockStyleMap[key];
        let triggerRender = false;
        if (containerKey) {
            (this.parent.container as IJson)[containerKey] = value;
            if (key === 'width' || key === 'height') {
                (this.styleGraphics as IJson)[containerKey] = value;
                triggerRender = true;
            }
        } else {
            switch (key) {
                case 'backgroundColor': {
                    triggerRender = true;
                    this.renderMap.backgroundColor = () => {
                        this.styleGraphics.beginFill(cssColorToHexValue(value));
                        this.styleGraphics.drawRect(0, 0, this.parent.container.width, this.parent.container.height);
                    };
                    // todo
                } break;
                case 'backgroundImage': {
                    // todo
                } break;
                case 'padding': {
        
                } break;
                // todo
                default: console.warn(`Unkonw style: key=${key}, value=${value}`); break;
            }
        }

        this.checkRefreshRenderMap(triggerRender);
        
    }

    checkRefreshRenderMap (triggerRender = true) {
        if (!this.readyForRender || !triggerRender) return;

        for (const k in this.renderMap) {
            (this.renderMap[k as IPVStyleKey] as ()=>void)();
        }
    }
}
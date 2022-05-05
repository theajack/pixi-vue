/*
 * @Author: tackchen
 * @Date: 2022-05-04 09:52:08
 * @LastEditors: tackchen
 * @LastEditTime: 2022-05-05 08:53:52
 * @FilePath: /pixi-vue/src/renderer/dom/body.ts
 * @Description: Coding something
 */

import {addSprite} from '../renderer';
import {PVElement} from './base/element';

export class Body extends PVElement {
    constructor () {
        super();

        addSprite(this.container);
    }
}
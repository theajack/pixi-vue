/*
 * @Author: tackchen
 * @Date: 2022-05-04 09:52:08
 * @LastEditors: tackchen
 * @LastEditTime: 2022-05-14 20:21:43
 * @FilePath: /pixi-vue/src/renderer/dom/body.ts
 * @Description: Coding something
 */

import {ENodeName} from 'src/types/enum';
import {addSprite} from '../renderer';
import {PVElement} from './base/element';

export class Body extends PVElement {
    nodeName: ENodeName.Body;
    constructor () {
        super();

        addSprite(this.container);
    }
}
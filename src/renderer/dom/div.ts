/*
 * @Author: tackchen
 * @Date: 2022-05-04 09:18:22
 * @LastEditors: tackchen
 * @LastEditTime: 2022-05-05 09:25:27
 * @FilePath: /pixi-vue/src/renderer/dom/div.ts
 * @Description: Coding something
 */

import {ENodeName} from 'src/types/enum';
import {PVElement} from './base/element';

export class Div extends PVElement {
    nodeName: ENodeName.Div;
}
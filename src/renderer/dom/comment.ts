/*
 * @Author: tackchen
 * @Date: 2022-05-04 15:50:38
 * @LastEditors: tackchen
 * @LastEditTime: 2022-05-05 09:25:34
 * @FilePath: /pixi-vue/src/renderer/dom/comment.ts
 * @Description: Coding something
 */

import {PVNode} from './base/node';

export class Comment extends PVNode {
    applyTextStyle () {
        return false;
    }
}
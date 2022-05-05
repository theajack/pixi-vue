/*
 * @Author: tackchen
 * @Date: 2022-05-05 09:15:09
 * @LastEditors: tackchen
 * @LastEditTime: 2022-05-05 09:15:31
 * @FilePath: /pixi-vue/src/renderer/wx-polyfill.ts
 * @Description: Coding something
 */
import * as PIXI from 'pixi.js';
import {install} from '@pixi/unsafe-eval';

install(PIXI);

const originText = PIXI.CanvasResource.test;
PIXI.CanvasResource.test = ((source: any) => {
    if (source.toString() === '[object HTMLCanvasElement]') {
        return true;
    }
    return originText(source);
}) as any;

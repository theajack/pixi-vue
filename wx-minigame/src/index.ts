/*
 * @Author: tackchen
 * @Date: 2022-05-04 21:39:41
 * @LastEditors: tackchen
 * @LastEditTime: 2022-05-05 09:36:45
 * @FilePath: /pixi-vue/wx-minigame/src/index.ts
 * @Description: Coding something
 */
import '../libs/weapp-adapter';
import '../libs/custom-event';
// import {createContainer, createRenderApplication, createSprite} from '../../src/renderer/renderer';

// import * as PIXI from 'pixi.js';

// Apply the patch to PIXI

// Create the renderer with patch applied
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// @pixi/unsafe-eval


import {createApp} from '../../src/renderer/create';
import App from '../../src/app.vue';

declare const canvas: HTMLCanvasElement;
// debugger;
// (canvas as any).__proto__.toString = () => '[object HTMLCanvasElement]';


// console.log(canvas, HTMLCanvasElement, canvas instanceof HTMLCanvasElement, canvas.toString());
// console.log(canvas instanceof HTMLCanvasElement);

// createRenderApplication({
//     canvas,
//     width: 300,
//     height: 600,
// });

// const container = createContainer({});

// createSprite({
//     x: 100,
//     y: 100,
//     width: 100,
//     height: 100,
//     src: 'https://shiyix.cn/assets/images/p1.png',
//     parent: container,
// });


// const titleView = new PIXI.Text('你好');
// titleView.style = new PIXI.TextStyle({
//     fontSize: 20,
//     fontWeight: 'bold',
//     fill: 0xCCCCCC
// });

// container.addChild(titleView);


createApp(App).mount({
    width: 300,
    height: 600,
    el: canvas,
});

canvas.addEventListener('touchstart', () => {
    console.log(111);
});
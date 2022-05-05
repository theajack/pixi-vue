/*
 * @Author: tackchen
 * @Date: 2022-05-04 09:20:08
 * @LastEditors: tackchen
 * @LastEditTime: 2022-05-05 09:13:35
 * @FilePath: /pixi-vue/src/renderer/renderer.ts
 * @Description: Coding something
 */
import * as PIXI from 'pixi.js';
import './wx-polyfill';
import {Application, Container, Graphics, Sprite, Text} from 'pixi.js';
// import {GameObject} from 'src/components/game-object';


let application: Application;

export function getApplication () {
    return application;
}

export function addSprite (obj: Container | Sprite) {
    application.stage.addChild(obj);
}

export function createRenderApplication ({
    canvas,
    width,
    height,
    resolution = 2
}: {
    canvas: HTMLCanvasElement;
    width: number;
    height: number;
    resolution?: number;
}) {
    canvas.width = width;
    canvas.height = height;
    application = new PIXI.Application({
        height: height,
        width: width,
        view: canvas,
        antialias: true, // default: false 反锯齿
        transparent: false, // default: false 透明度
        resolution, // default: 1 分辨率
        backgroundColor: 0xeeeeee,
        autoDensity: true, // 模糊的处理
    });
    application.render;
    // application.render =

    if (typeof window !== 'undefined')
        (window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__  && (window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__.register({PIXI: PIXI});
    return application;
}

export function createContainer ({
    x = 0,
    y = 0,
    width,
    height,
    parent,
}: {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    parent?: Container;
} = {}) {
    const container = new Container();
    container.x = x;
    container.y = y;
    if (width) container.width = width;
    if (height) container.height = height;
    if (parent) {
        parent.addChild(container);
    } else {
        addSprite(container);
    }
    return container;
}

export function createSprite ({
    x = 0,
    y = 0,
    width,
    height,
    parent,
    src,
}: {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    parent?: Container;
    src?: string;
}) {
    const sprite = src ? Sprite.from(src) : new Sprite();
    sprite.x = x;
    sprite.y = y;
    if (width) sprite.width = width;
    if (height) sprite.height = height;
    if (parent) {
        parent.addChild(sprite);
    } else {
        addSprite(sprite);
    }
    return sprite;
}

export function createGraphics ({
    x = 0,
    y = 0,
    parent,
}: {
    x?: number;
    y?: number;
    parent?: Container;
}) {
    const graphics = new Graphics();
    graphics.x = x;
    graphics.y = y;
    if (parent) {
        parent.addChild(graphics);
    } else {
        addSprite(graphics);
    }
    return graphics;
}

export function createText ({
    x = 0,
    y = 0,
    text = '',
    parent,
}: {
    x?: number;
    y?: number;
    text?: string;
    parent?: Container;
}) {
    const el = new Text(text);
    el.x = x;
    el.y = y;
    if (parent) {
        parent.addChild(el);
    } else {
        addSprite(el);
    }
    return el;
}

export function drawArc (
    target: Graphics,
    x: number,
    y: number,
    radius: number,
    arc: number,
    startAngle = 0,
    yRadius = 0
) {
    if (yRadius === 0) yRadius = radius;
    const segs = Math.ceil(Math.abs(arc) / 45);
    const segAngle = arc / segs;
    const theta = -(segAngle / 180) * Math.PI;
    let angle = -(startAngle / 180) * Math.PI;
    const ax = x - Math.cos(angle) * radius;
    const ay = y - Math.sin(angle) * yRadius;
    let angleMid, bx, by, cx, cy;
    if (segs > 0) {
        target.moveTo(x, y);
        for (let i = 0; i < segs; ++i) {
            angle += theta;
            angleMid = angle - theta / 2;
            bx = ax + Math.cos(angle) * radius;
            by = ay + Math.sin(angle) * yRadius;
            cx = ax + Math.cos(angleMid) * (radius / Math.cos(theta / 2));
            cy = ay + Math.sin(angleMid) * (yRadius / Math.cos(theta / 2));
            target.quadraticCurveTo(cx, cy, bx, by);
        }
    }
}

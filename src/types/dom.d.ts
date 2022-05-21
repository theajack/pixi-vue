/*
 * @Author: tackchen
 * @Date: 2022-05-04 15:39:18
 * @LastEditors: tackchen
 * @LastEditTime: 2022-05-14 21:25:10
 * @FilePath: /pixi-vue/src/types/dom.d.ts
 * @Description: Coding something
 */

export interface ISize {
    width?: number;
    height?: number;
}

export interface IOffset {
    left?: number;
    top?: number;
}

export interface IPosition extends ISize, IOffset {}

export type TFontWeight = 'normal' | 'bold' | 'bolder' | 'lighter';


export interface IPVStyle extends IPosition {
    fontSize?: number;
    fontFamily?: string;
    color?: string;
    fontWeight?: TFontWeight;
    
    backgroundColor?: string;
    backgroundImage?: string;

    padding?: string;
    border?: string;
    borderRadius?: string;
}

export type IPVStyleKey = keyof IPVStyle;

export interface IPVProps extends IPosition {
    style?: IPVStyle;
    onClick?: (e: any) => void;
}


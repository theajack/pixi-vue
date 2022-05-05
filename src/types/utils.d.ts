/*
 * @Author: tackchen
 * @Date: 2022-05-04 19:53:24
 * @LastEditors: tackchen
 * @LastEditTime: 2022-05-04 19:53:44
 * @FilePath: /pixi-vue/src/types/utils.d.ts
 * @Description: Coding something
 */

export interface IJson<T=any>{
    [prop: string]: T;
}
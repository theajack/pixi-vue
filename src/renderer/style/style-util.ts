
import {IPVStyle, IPVStyleKey} from '../../types/dom';
import {PVNode} from '../dom/base/node';
import {IJson} from '../../types/utils';

const TextStyle: IPVStyleKey[] = [
    'fontFamily', 'fontSize', 'fontWeight',
    'color',
];

const BlockStyle: IPVStyleKey[] = [
    'left', 'top', 'height', 'width',
    'backgroundColor', 'backgroundImage',
];

export function isTextStyle (key: IPVStyleKey): boolean {
    return TextStyle.indexOf(key) !== -1;
}

export function isBlockStyle (key: IPVStyleKey): boolean {
    return BlockStyle.indexOf(key) !== -1;
}

export const DefaultStyle: IPVStyle = {
    fontSize: 14,
    fontFamily: 'Arial',
    color: '#000',
    fontWeight: 'normal',
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    backgroundColor: '#fff',
    backgroundImage: '',

    padding: '0',
    border: 'none',
    borderRadius: '0',
};

export function cssColorToHexValue (value: string): number {
    let result = '';
    if (value[0] === '#') {
        result = value.substring(1);
        if (result.length <= 4) {
            value = '';
            for (let i = 0; i < result.length; i++) {
                value += result[i] + result[i];
            }
            result = value;
        }
    } else if (value.indexOf('rgb') === 0) {
        result = value.replace(/rgba?|\(|\)| /g, '').split(',').map(num => {
            const value = parseInt(num).toString(16);
            debugger;
            return (value.length === 1) ? `0${value}` : value;
        }).join('');
    } else {
        return 0;
    }
    return ('0x' + result) as unknown as number;
}

export abstract class Style {

    store: IPVStyle = {};
    parent: PVNode;

    constructor (parent: PVNode) {
        this.parent = parent;
    }

    set (
        style: IPVStyle,
        onStyleChange?: (key: IPVStyleKey, value: any) => void
    ) {
        for (const k in style) {
            const key = k as IPVStyleKey;
            if (this.store[key] !== style[key]) {
                if (onStyleChange) {
                    onStyleChange(key, style[key]);
                }
                (this.store as IJson)[key] = style[key];
            }
        }
    }

    get (key: IPVStyleKey) {
        return this.store[key];
    }

    abstract applyTextStyle (key: IPVStyleKey, value: any): boolean;
}
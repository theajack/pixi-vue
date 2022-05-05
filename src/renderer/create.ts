import {createRenderer} from '@vue/runtime-core';
import {PVNode} from './dom/base/node';
import {PVElement} from './dom/base/element';
import {Body} from './dom/body';
import {Div} from './dom/div';
import {Img} from './dom/img';
import {TextNode} from './dom/text';
import {Comment} from './dom/comment';
import {createRenderApplication} from './renderer';
import {IPVStyle} from 'src/types/dom';

// export declare interface RendererOptions<HostNode = RendererNode, HostElement = RendererElement> {
//     patchProp(el: HostElement, key: string, prevValue: any, nextValue: any, isSVG?: boolean, prevChildren?: VNode<HostNode, HostElement>[], parentComponent?: ComponentInternalInstance | null, parentSuspense?: SuspenseBoundary | null, unmountChildren?: UnmountChildrenFn): void;
//     insert(el: HostNode, parent: HostElement, anchor?: HostNode | null): void;
//     remove(el: HostNode): void;
//     createElement(type: string, isSVG?: boolean, isCustomizedBuiltIn?: string, vnodeProps?: (VNodeProps & {
//         [key: string]: any;
//     }) | null): HostElement;
//     createText(text: string): HostNode;
//     createComment(text: string): HostNode;
//     setText(node: HostNode, text: string): void;
//     setElementText(node: HostElement, text: string): void;
//     parentNode(node: HostNode): HostElement | null;
//     nextSibling(node: HostNode): HostNode | null;
//     querySelector?(selector: string): HostElement | null;
//     setScopeId?(el: HostElement, id: string): void;
//     cloneNode?(node: HostNode): HostNode;
//     insertStaticContent?(content: string, parent: HostElement, anchor: HostNode | null, isSVG: boolean, start?: HostNode | null, end?: HostNode | null): [HostNode, HostNode];
// }

const {createApp: originCa} = createRenderer<PVNode, PVElement>({
    insert: (child: PVNode, parent: PVElement, anchor: PVNode | null) => {
        console.log('insert:', child, parent, anchor);
        parent.appendChild(child);
        
    },
    //     createElement (type: string, isSVG?: boolean, isCustomizedBuiltIn?: string, vnodeProps?: (VNodeProps & {
    //         [key: string]: any;
    // }) | null): PVElement {
    createElement (type: string) {
        console.log('createElement', type);
        if (type === 'img') return new Img();
        return new Div();
    },
    setElementText (node, text) {
        node.setText(text);
    },
    patchProp (el, key, prev, next) {
        if (next === prev) return;
        if (key === 'style') {
            el.setStyle(next as IPVStyle);
        } else if (key === 'onClick') {
            // el.on('click', next);
            el.on('touchend', next);
        } else {
            el.props[key] = next;
        }
    },
    parentNode: (node: PVNode) => {
        return node.parentElement;
    },
    nextSibling: (node: PVNode) => node,
    createText: (text: string) => {
        return new TextNode(text);
    },
    remove: (node: PVNode) => node,
    setText (node: PVNode, text: string) {
        node.setText(text);
    },
    createComment () {
        return new Comment();
    },
    // querySelector?(selector: string): HostElement | null;
    // setScopeId?(el: HostElement, id: string): void;
    // cloneNode?(node: HostNode): HostNode;
    // insertStaticContent?(content: string, parent: HostElement, anchor: HostNode | null, isSVG: boolean, start?: HostNode | null, end?: HostNode | null): [HostNode, HostNode];
});

export function createApp (...args: [any]) {
    const app = originCa(...args);
    return {
        mount ({
            el,
            width = 500,
            height = 500
        }: {
            el?: string | HTMLCanvasElement;
            width?: number;
            height?: number;
        } = {}) {
            let canvas: HTMLCanvasElement | null = null;
            if (typeof el == 'string') {
                canvas = document.querySelector(el) as HTMLCanvasElement;
            } else if (typeof el === 'object') {
                canvas = el;
            } else {
                if (typeof document !== 'undefined') {
                    canvas = document.createElement('canvas');
                    document.body.appendChild(canvas);
                }
            }

            if (!canvas) {
                throw new Error('canvas is not found');
            }
            // console.log(createRenderApplication)
            createRenderApplication({width, height, canvas});
            const root = new Body();
            app.mount(root);
        }
    };
}
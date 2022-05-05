// import { createApp } from './three-renderer';
// import App from "./App.vue";

import {createApp} from './renderer/create';
import App from './app.vue';

createApp(App).mount({
    width: window.innerWidth,
    height: window.innerHeight,
});
// console.log(createApp)

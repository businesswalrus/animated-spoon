import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BpOZx6EH.mjs';
import { manifest } from './manifest_DVo1jEY9.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/blog/bill-477-update.astro.mjs');
const _page3 = () => import('./pages/blog/city-council-presentation.astro.mjs');
const _page4 = () => import('./pages/blog/cycling-infrastructure-study.astro.mjs');
const _page5 = () => import('./pages/blog/cyclist-decency-workshop.astro.mjs');
const _page6 = () => import('./pages/blog.astro.mjs');
const _page7 = () => import('./pages/contact.astro.mjs');
const _page8 = () => import('./pages/join.astro.mjs');
const _page9 = () => import('./pages/resources.astro.mjs');
const _page10 = () => import('./pages/shop.astro.mjs');
const _page11 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/blog/bill-477-update.astro", _page2],
    ["src/pages/blog/city-council-presentation.astro", _page3],
    ["src/pages/blog/cycling-infrastructure-study.astro", _page4],
    ["src/pages/blog/cyclist-decency-workshop.astro", _page5],
    ["src/pages/blog/index.astro", _page6],
    ["src/pages/contact.astro", _page7],
    ["src/pages/join.astro", _page8],
    ["src/pages/resources.astro", _page9],
    ["src/pages/shop.astro", _page10],
    ["src/pages/index.astro", _page11]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "a62ab645-bed0-4afe-88cb-22bb1d9d65f0",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };

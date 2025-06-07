import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BpOZx6EH.mjs';
import { manifest } from './manifest_BYwfFKUb.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/contact.astro.mjs');
const _page3 = () => import('./pages/join.astro.mjs');
const _page4 = () => import('./pages/news/bill-477-update.astro.mjs');
const _page5 = () => import('./pages/news/city-council-presentation.astro.mjs');
const _page6 = () => import('./pages/news/cycling-infrastructure-study.astro.mjs');
const _page7 = () => import('./pages/news/cyclist-decency-workshop.astro.mjs');
const _page8 = () => import('./pages/news/membership-milestone.astro.mjs');
const _page9 = () => import('./pages/news/operation-rush-hour.astro.mjs');
const _page10 = () => import('./pages/news.astro.mjs');
const _page11 = () => import('./pages/resources.astro.mjs');
const _page12 = () => import('./pages/shop.astro.mjs');
const _page13 = () => import('./pages/thank-you.astro.mjs');
const _page14 = () => import('./pages/tusk.astro.mjs');
const _page15 = () => import('./pages/tusk-login.astro.mjs');
const _page16 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/contact.astro", _page2],
    ["src/pages/join.astro", _page3],
    ["src/pages/news/bill-477-update.astro", _page4],
    ["src/pages/news/city-council-presentation.astro", _page5],
    ["src/pages/news/cycling-infrastructure-study.astro", _page6],
    ["src/pages/news/cyclist-decency-workshop.astro", _page7],
    ["src/pages/news/membership-milestone.astro", _page8],
    ["src/pages/news/operation-rush-hour.astro", _page9],
    ["src/pages/news/index.astro", _page10],
    ["src/pages/resources.astro", _page11],
    ["src/pages/shop.astro", _page12],
    ["src/pages/thank-you.astro", _page13],
    ["src/pages/tusk.astro", _page14],
    ["src/pages/tusk-login.astro", _page15],
    ["src/pages/index.astro", _page16]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "c24f5868-4e12-4c27-9118-6517e936b5bc",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };

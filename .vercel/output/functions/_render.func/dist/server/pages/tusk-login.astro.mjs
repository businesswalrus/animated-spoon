import { a as createComponent, f as renderComponent, r as renderTemplate, m as maybeRenderHead, b as renderScript } from '../chunks/astro/server_D0u0STEm.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_CKfS_0uY.mjs';
/* empty css                                      */
export { renderers } from '../renderers.mjs';

const $$TuskLogin = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Field Tech Calculator - Login", "data-astro-cid-kyxe5q2f": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="container" data-astro-cid-kyxe5q2f> <div class="login-container" data-astro-cid-kyxe5q2f> <h1 class="login-title" data-astro-cid-kyxe5q2f>Field Tech Calculator</h1> <div id="errorMessage" class="error-message" data-astro-cid-kyxe5q2f></div> <form id="loginForm" data-astro-cid-kyxe5q2f> <div class="form-group" data-astro-cid-kyxe5q2f> <label for="email" class="form-label" data-astro-cid-kyxe5q2f>Email Address</label> <input type="email" id="email" name="email" class="form-control" required autofocus placeholder="Enter your email" data-astro-cid-kyxe5q2f> </div> <div class="form-group" data-astro-cid-kyxe5q2f> <label for="password" class="form-label" data-astro-cid-kyxe5q2f>Password</label> <input type="password" id="password" name="password" class="form-control" required placeholder="Enter your password" data-astro-cid-kyxe5q2f> </div> <button type="submit" id="submitButton" class="btn-login" data-astro-cid-kyxe5q2f>Sign In</button> </form> <div class="info-message" data-astro-cid-kyxe5q2f>
Secure access for authorized technicians only
</div> </div> </div> ${renderScript($$result2, "/Users/cody/aarbaa/animated-spoon/src/pages/tusk-login.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/Users/cody/aarbaa/animated-spoon/src/pages/tusk-login.astro", void 0);

const $$file = "/Users/cody/aarbaa/animated-spoon/src/pages/tusk-login.astro";
const $$url = "/tusk-login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TuskLogin,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

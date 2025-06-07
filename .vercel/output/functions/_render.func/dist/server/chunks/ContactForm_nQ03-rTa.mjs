import { c as createComponent, m as maybeRenderHead, r as renderScript, a as renderTemplate } from './astro/server_poEu93J3.mjs';
import 'kleur/colors';
import 'clsx';

const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form id="contactForm"> <div class="row g-3"> <div class="col-md-6"> <label for="name" class="form-label">Name *</label> <input type="text" class="form-control" id="name" name="name" required> </div> <div class="col-md-6"> <label for="email" class="form-label">Email *</label> <input type="email" class="form-control" id="email" name="email" required> </div> <div class="col-12"> <label for="phone" class="form-label">Phone (optional)</label> <input type="tel" class="form-control" id="phone" name="phone"> </div> <div class="col-12"> <label for="message" class="form-label">Message *</label> <textarea class="form-control" id="message" name="message" rows="5" required></textarea> </div> <div class="col-12 text-center mt-4"> <button type="submit" class="btn btn-danger btn-lg px-5">Send Message</button> </div> </div> </form> <!-- Success Alert --> <div id="successAlert" class="alert alert-success mt-4 d-none"> <i class="fas fa-check-circle me-2"></i> Thank you! Your message has been sent.
</div> <!-- Error Alert --> <div id="errorAlert" class="alert alert-danger mt-4 d-none"> <i class="fas fa-exclamation-circle me-2"></i> <span id="errorText">Something went wrong. Please try again.</span> </div> ${renderScript($$result, "/Users/cody/aarbaa/animated-spoon/src/components/ContactForm.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/cody/aarbaa/animated-spoon/src/components/ContactForm.astro", void 0);

export { $$ContactForm as $ };

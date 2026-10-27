/* =========================================================
   DOM motion layer. Runs on the client after each route render.
   Content is in the HTML first (good for SEO); these effects only
   animate it in, so nothing depends on JS to be crawlable.
   ========================================================= */

export const reduceMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const store = {
  get(k) { try { return sessionStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { sessionStorage.setItem(k, v); } catch { /* storage blocked */ } }
};

function countUp(el) {
  const to = parseFloat(el.dataset.count), from = parseFloat(el.dataset.from || 0), suf = el.dataset.suffix || "";
  if (reduceMotion()) { el.textContent = to + suf; return; }
  let t0 = null;
  const step = (t) => {
    if (!t0) t0 = t;
    const p = Math.min(1, (t - t0) / 2000), e = 1 - Math.pow(1 - p, 4);
    el.textContent = Math.round(from + (to - from) * e) + suf;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/** Observe reveal targets, counters, parallax, sticky stack, timeline. Returns cleanup. */
export function scanPage(root = document) {
  const cleanups = [];
  root.querySelectorAll("[data-stagger]").forEach((g) => {
    const step = parseFloat(g.dataset.stagger) || 0.08;
    Array.from(g.children).forEach((ch, i) => {
      if (!ch.hasAttribute("data-reveal")) ch.setAttribute("data-reveal", "");
      ch.style.setProperty("--d", i * step + "s");
    });
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("in");
      if (e.target.hasAttribute("data-count")) countUp(e.target);
      io.unobserve(e.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
  root.querySelectorAll("[data-reveal], .split:not(.manual), .img-reveal, [data-count]").forEach((el) => io.observe(el));
  cleanups.push(() => io.disconnect());

  if (!reduceMotion()) {
    const par = Array.from(root.querySelectorAll("[data-speed]"));
    const stack = Array.from(root.querySelectorAll(".stack-card"));
    const tl = root.querySelector(".timeline"), fill = root.querySelector(".tl-fill");
    const tick = () => {
      const vh = window.innerHeight;
      par.forEach((el) => {
        const r = el.parentNode.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) return;
        el.style.transform = `translate3d(0,${(r.top + r.height / 2 - vh / 2) * parseFloat(el.dataset.speed)}px,0)`;
      });
      stack.forEach((c, i) => {
        const next = stack[i + 1];
        if (!next) return;
        const p = Math.max(0, Math.min(1, 1 - (next.getBoundingClientRect().top - c.getBoundingClientRect().top) / vh));
        c.style.transform = `scale(${1 - p * 0.06})`;
        c.style.filter = `brightness(${1 - p * 0.25})`;
      });
      if (tl && fill) {
        const r = tl.getBoundingClientRect();
        fill.style.height = Math.max(0, Math.min(1, (vh * 0.6 - r.top) / r.height)) * 100 + "%";
      }
    };
    window.addEventListener("scroll", tick, { passive: true });
    tick();
    cleanups.push(() => window.removeEventListener("scroll", tick));
  }
  return () => cleanups.forEach((f) => f());
}

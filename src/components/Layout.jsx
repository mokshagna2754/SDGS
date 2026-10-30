import { useCallback, useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation, useOutlet } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import SDGS from "../data.js";
import Icon from "./Icon.jsx";
import { SiteContext, LeadForm, Social } from "./ui.jsx";
import { getSeo } from "../seo.js";
import { reduceMotion, scanPage, store } from "../lib/effects.js";

const C = SDGS.contact;
const deptLinks = SDGS.departments.map((d) => [d.name, "/departments/" + d.id]);
export const NAV = [
  { t: "Home", h: "/" },
  { t: "About SDGS", h: "/about", c: [["Our Founder", "/about#founder"], ["Vision & Mission", "/about#vision"], ["History of SDGS", "/about#history"], ["Management", "/about#management"], ["Principal", "/about#principal"]] },
  { t: "Departments", h: "/departments", mega: true, c: deptLinks.concat([["All Departments", "/departments"]]) },
  { t: "Academics", h: "/academics", c: [["Programmes", "/academics#programmes"], ["Admissions", "/academics#admissions"], ["Examinations", "/academics#examinations"], ["Academic Calendar", "/academics#calendar"]] },
  { t: "Students Corner", h: "/students", c: [["NCC", "/students/ncc"], ["NSS", "/students/nss"], ["Sports", "/students/sports"], ["Culturals", "/students/culturals"]] },
  { t: "Infrastructure", h: "/infrastructure", c: [["Library", "/infrastructure#library"], ["Sports", "/infrastructure#sports"], ["Auditorium", "/infrastructure#auditorium"], ["Rain Water Harvesting", "/infrastructure#rainwater"], ["Solar System", "/infrastructure#solar"], ["Water Purifiers", "/infrastructure#water"], ["Campus Buildings", "/infrastructure#buildings"], ["Labs", "/infrastructure#labs"]] },
  { t: "Alumni", h: "/alumni" },
  { t: "Gallery", h: "/gallery" },
  { t: "NAAC", h: "/naac", c: [["IQAC", "/naac#iqac"], ["SSR Report", "/naac#ssr"], ["7 Criteria", "/naac#criteria"]] },
  { t: "Contact Us", h: "/contact" }
];

const EASE = [0.76, 0, 0.24, 1];

/* ---------------- Head updates on client navigation ---------------- */
function useHead(pathname) {
  useEffect(() => {
    const s = getSeo(pathname);
    document.title = s.title;
    const meta = (sel, attr, val) => {
      let el = document.head.querySelector(sel);
      if (!el) { el = document.createElement(sel.startsWith("link") ? "link" : "meta"); document.head.appendChild(el); }
      Object.entries(attr).forEach(([k, v]) => el.setAttribute(k, v));
      el.setAttribute(sel.startsWith("link") ? "href" : "content", val);
    };
    meta('meta[name="description"]', { name: "description" }, s.description);
    meta('link[rel="canonical"]', { rel: "canonical" }, s.canonical);
    meta('meta[property="og:title"]', { property: "og:title" }, s.title);
    meta('meta[property="og:description"]', { property: "og:description" }, s.description);
    meta('meta[property="og:url"]', { property: "og:url" }, s.canonical);
    let ld = document.head.querySelector('script[type="application/ld+json"]');
    if (s.jsonLd) {
      if (!ld) { ld = document.createElement("script"); ld.type = "application/ld+json"; document.head.appendChild(ld); }
      ld.textContent = JSON.stringify(s.jsonLd);
    }
  }, [pathname]);
}

/* ---------------- Header ---------------- */
function Header({ scrolled, onMenu, onEnquire }) {
  return (
    <>
      <div className="topbar">
        <div className="frame topbar-in">
          <div className="tb-left">
            <a href={"tel:" + C.tel}><Icon name="phone" />{C.phone}</a>
            <a className="mail" href={"mailto:" + C.email}><Icon name="mail" />{C.email}</a>
          </div>
          <div className="tb-right">
            <span className="tb-badge"><i></i>Admission enquiries open</span>
            <Social className="tb-social" />
          </div>
        </div>
      </div>
      <header className={"hdr" + (scrolled ? " is-scrolled" : "")}>
        <div className="hdr-brand-row"><div><div className="frame hdr-brand">
          <Link className="brand" to="/" aria-label="S.D.G.S College Hindupur home">
            <img src="/assets/logo-sm.png" alt="S.D.G.S College Hindupur crest" width="62" height="90" />
            <span className="brand-txt">
              <b>Saradamba Dasa Govindiah <span>Setty</span> College</b>
              <small>Hindupur · Est. 1965 · Affiliated to S.K. University</small>
            </span>
          </Link>
          <div className="hdr-actions">
            <Link className="btn btn-ghost btn-sm" to="/contact">Visit Campus</Link>
            <button className="btn btn-gold btn-sm" onClick={() => onEnquire()}>Apply Now<Icon name="arrow" /></button>
            <button className="burger" aria-label="Open menu" onClick={onMenu}><span></span><span></span></button>
          </div>
        </div></div></div>
        <nav className="nav" aria-label="Main">
          <div className="frame nav-in">
            <Link className="nav-mini" to="/" aria-label="Home"><img src="/assets/logo-sm.png" alt="" width="34" height="49" /><b>S.D.G.S</b></Link>
            <ul className="nav-list">
              {NAV.map((n) => (
                <li key={n.h}>
                  <NavLink end={n.h === "/"} className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to={n.h}>
                    {n.t}{n.c && <Icon name="chevron" />}
                  </NavLink>
                  {n.c && (
                    <div className={"dd" + (n.mega ? " dd-mega" : "")}>
                      {n.mega && <div className="dd-head">Departments of study</div>}
                      {n.c.map(([t, h]) => <Link key={h + t} to={h}>{t}<Icon name="arrow" /></Link>)}
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <button className="btn btn-maroon btn-sm nav-cta" onClick={() => onEnquire()}>Enquire<Icon name="arrow" /></button>
          </div>
        </nav>
      </header>
    </>
  );
}

/* ---------------- Mobile menu ---------------- */
function MobileNav({ open, onClose, onEnquire }) {
  const [exp, setExp] = useState(-1);
  return (
    <div className={"mnav" + (open ? " open" : "")} aria-hidden={!open} data-lenis-prevent>
      <div className="mnav-top">
        <img src="/assets/logo-sm.png" alt="" />
        <button className="mnav-close" aria-label="Close menu" onClick={onClose}><Icon name="x" /></button>
      </div>
      <ul>
        {NAV.map((n, i) => (
          <li key={n.h} style={{ transitionDelay: 0.25 + i * 0.04 + "s" }} className={exp === i ? "exp" : ""}>
            {!n.c ? <Link to={n.h} onClick={onClose}>{n.t}</Link> : (
              <>
                <button onClick={() => setExp(exp === i ? -1 : i)}>{n.t}<Icon name="plus" /></button>
                <div className="sub"><div>
                  <Link to={n.h} onClick={onClose}>Overview</Link>
                  {n.c.map(([t, h]) => <Link key={h + t} to={h} onClick={onClose}>{t}</Link>)}
                </div></div>
              </>
            )}
          </li>
        ))}
      </ul>
      <div className="mnav-foot">
        <button className="btn btn-gold btn-lg" onClick={() => { onClose(); onEnquire(); }}>Apply / Enquire<Icon name="arrow" /></button>
        <a href={"tel:" + C.tel}>{C.phone}</a>
        <a href={"mailto:" + C.email}>{C.email}</a>
      </div>
    </div>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="footer">
      <div className="frame">
        <div className="f-top">
          <div className="f-brand">
            <img src="/assets/logo-sm.png" alt="S.D.G.S College crest" width="84" height="122" />
            <b>Saradamba Dasa Govindiah Setty College</b>
            <p>Hindupur, Andhra Pradesh · A legacy of excellence since 1965. Recognised by UGC, affiliated to Sri Krishnadevaraya University, accredited by NAAC with B+ and approved by AICTE.</p>
            <p className="deva" style={{ color: "var(--gold-2)", fontSize: "1.1rem" }} lang="sa">तेजस्वि नावधीतमस्तु</p>
          </div>
          <div className="f-col"><h4>Explore</h4><ul>
            <li><Link to="/about">About SDGS</Link></li><li><Link to="/departments">Departments</Link></li>
            <li><Link to="/academics">Academics</Link></li><li><Link to="/students">Students Corner</Link></li>
            <li><Link to="/infrastructure">Infrastructure</Link></li></ul></div>
          <div className="f-col"><h4>Quick links</h4><ul>
            <li><Link to="/academics#admissions">Admissions</Link></li><li><Link to="/academics#examinations">Examinations</Link></li>
            <li><Link to="/naac">NAAC & IQAC</Link></li><li><Link to="/alumni">Alumni</Link></li><li><Link to="/gallery">Gallery</Link></li></ul></div>
          <div className="f-col"><h4>Reach us</h4>
            <address className="f-contact" style={{ fontStyle: "normal" }}>
              <a href={"tel:" + C.tel}><Icon name="phone" />{C.phone}</a>
              <a href={"mailto:" + C.email}><Icon name="mail" /><span style={{ wordBreak: "break-all" }}>{C.email}</span></a>
              <span><Icon name="pin" />{C.address}</span>
            </address>
            <Social className="f-social" />
          </div>
        </div>
      </div>
      <div className="f-bottom frame">
        <span>© {new Date().getFullYear()} Saradamba Dasa Govindiah Setty College, Hindupur. All rights reserved.</span>
        <span>Heritage since 1965 · Built for the next 60 years</span>
      </div>
    </footer>
  );
}

/* ---------------- Enquiry modal ---------------- */
function EnquiryModal({ state, onClose }) {
  useEffect(() => {
    if (!state) return;
    const k = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", k);
    return () => document.removeEventListener("keydown", k);
  }, [state, onClose]);
  return (
    <AnimatePresence>
      {state && (
        <motion.div className="modal open" role="dialog" aria-modal="true" aria-labelledby="enqTitle" data-lenis-prevent
          initial={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.35 } }}>
          <motion.div className="modal-bg" onClick={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
          <motion.div className="modal-box" style={{ opacity: 1, transform: "none" }}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.4, ease: [0.22, 0.7, 0.15, 1] }}>
            <button className="modal-x" onClick={onClose} aria-label="Close"><Icon name="x" /></button>
            <div className="modal-side">
              <img className="logo" src="/assets/logo-sm.png" alt="" />
              <h3>Begin your <em>legacy</em> at S.D.G.S</h3>
              <ul>
                <li><Icon name="checkCircle" />60 years of academic excellence in Hindupur</li>
                <li><Icon name="checkCircle" />NAAC B+ accredited, UGC recognised, SKU affiliated</li>
                <li><Icon name="checkCircle" />Intermediate + 5 UG programmes under one roof</li>
                <li><Icon name="checkCircle" />NCC, NSS, sports and a vibrant campus life</li>
              </ul>
              <p className="alt">Prefer to talk now? Call <a href={"tel:" + C.tel}>{C.phone}</a></p>
            </div>
            <div className="modal-main">
              <h4 id="enqTitle">Admission enquiry</h4>
              <p>Share a few details and our admissions desk will get back to you with fees, eligibility and seat availability.</p>
              <LeadForm id={"modal-" + state.n} programme={state.programme} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ---------------- Preloader (once per session) ---------------- */
function Preloader({ onDone }) {
  const [year, setYear] = useState(1965);
  const [p, setP] = useState(0);
  useEffect(() => {
    let t0 = null, raf;
    const to = new Date().getFullYear();
    const step = (t) => {
      if (!t0) t0 = t;
      const k = Math.min(1, (t - t0) / 1900), e = 1 - Math.pow(1 - k, 3);
      setYear(Math.round(1965 + (to - 1965) * e)); setP(e);
      if (k < 1) raf = requestAnimationFrame(step); else setTimeout(onDone, 300);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);
  return (
    <motion.div className="preloader" exit={{ opacity: 0, transition: { duration: 0.6, ease: EASE } }}>
      <div className="pl-in">
        <motion.img src="/assets/logo-sm.png" alt="" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} />
        <div className="pl-count">{year}</div>
        <div className="pl-sub">Sixty years of excellence</div>
        <div className="pl-bar"><i style={{ width: p * 100 + "%" }}></i></div>
      </div>
    </motion.div>
  );
}

/* Runs the motion scan once its page is mounted (inside the frozen outlet). */
function Scan() {
  const ref = useRef(null);
  useEffect(() => scanPage(ref.current.parentNode), []);
  return <span ref={ref} hidden />;
}

/* ---------------- Layout ---------------- */
export default function Layout() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [enq, setEnq] = useState(null);
  const [y, setY] = useState(0);
  const [nudge, setNudge] = useState(false);
  const [client, setClient] = useState(false);
  const [loading, setLoading] = useState(false);
  const lenis = useRef(null);
  const first = useRef(true);
  const outlet = useOutlet();
  const [navs, setNavs] = useState(0);
  const mounted = useRef(false);
  useEffect(() => { if (!mounted.current) { mounted.current = true; return; } setNavs((n) => n + 1); }, [location.pathname]);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });

  useHead(location.pathname);

  // client-only bits
  useEffect(() => {
    setClient(true);
    if (location.pathname === "/" && !store.get("sdgs-seen") && !reduceMotion()) { setLoading(true); store.set("sdgs-seen", "1"); }
    let raf;
    if (!reduceMotion()) {
      import("lenis").then(({ default: Lenis }) => {
        lenis.current = new Lenis({ duration: 1.15, smoothWheel: true, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
        const loop = (t) => { lenis.current && lenis.current.raf(t); raf = requestAnimationFrame(loop); };
        raf = requestAnimationFrame(loop);
      });
    }
    const onScroll = () => { const s = window.pageYOffset; setScrolled(s > 140); setY(s); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    onPageReady();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", onScroll); lenis.current && lenis.current.destroy(); };
  }, []);

  // gentle counselling nudge after real engagement
  useEffect(() => {
    if (store.get("sdgs-nudge") || store.get("sdgs-lead")) return;
    let armed = false;
    const t = setTimeout(() => { armed = true; }, 12000);
    const check = () => {
      const h = document.documentElement.scrollHeight - innerHeight;
      if (armed && h > 0 && window.pageYOffset / h > 0.4) {
        window.removeEventListener("scroll", check);
        setTimeout(() => { setNudge(true); store.set("sdgs-nudge", "1"); }, 800);
      }
    };
    window.addEventListener("scroll", check, { passive: true });
    return () => { clearTimeout(t); window.removeEventListener("scroll", check); };
  }, []);

  const lock = useCallback((on) => {
    document.body.classList.toggle("no-scroll", on);
    if (lenis.current) on ? lenis.current.stop() : lenis.current.start();
  }, []);
  useEffect(() => { lock(menu || !!enq || loading); }, [menu, enq, loading, lock]);

  const scrollTo = useCallback((el, immediate) => {
    if (el == null) return;
    const off = window.innerWidth > 1100 ? 120 : 90;
    if (el === 0) { lenis.current ? lenis.current.scrollTo(0, { immediate: !!immediate }) : window.scrollTo(0, 0); return; }
    if (lenis.current) lenis.current.scrollTo(el, { offset: -off, immediate: !!immediate });
    else window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - off, behavior: immediate ? "auto" : "smooth" });
  }, []);
  const openEnquiry = useCallback((programme) => { setNudge(false); setEnq((s) => ({ programme, n: (s?.n || 0) + 1 })); }, []);

  // after each page renders: scroll position + motion scan
  const onPageReady = useCallback(() => {
    const hash = window.location.hash;
    if (hash) {
      const t = document.getElementById(hash.slice(1));
      if (t) setTimeout(() => scrollTo(t), first.current ? 400 : 60);
    } else if (!first.current) scrollTo(0, true);
    first.current = false;
  }, [scrollTo]);


  // hash changes within the same page
  useEffect(() => {
    if (!location.hash || first.current) return;
    const t = document.getElementById(location.hash.slice(1));
    if (t) scrollTo(t);
  }, [location.hash, location.key, scrollTo]);

  const docH = typeof document !== "undefined" ? document.documentElement.scrollHeight - innerHeight : 1;
  const pct = docH > 0 ? Math.min(1, y / docH) : 0;

  return (
    <SiteContext.Provider value={{ openEnquiry, scrollTo, loading }}>
      <Header scrolled={scrolled} onMenu={() => setMenu(true)} onEnquire={openEnquiry} />
      <MobileNav open={menu} onClose={() => setMenu(false)} onEnquire={openEnquiry} />

      <AnimatePresence mode="wait" initial={false} onExitComplete={onPageReady}>
        <motion.main key={location.pathname} id="main"
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.75, 0.1, 1], delay: 0.25 } }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.45, ease: EASE } }}>
          {outlet}
          <Scan />
        </motion.main>
      </AnimatePresence>

      {/* route-change curtain */}
      {navs > 0 && !reduceMotion() && (
        <motion.div key={"curtain-" + navs} className="curtain" aria-hidden="true"
          initial={{ y: "100%" }}
          animate={{ y: ["100%", "0%", "0%", "-100%"] }}
          transition={{ duration: 1.25, times: [0, 0.36, 0.55, 1], ease: EASE }}>
          <img src="/assets/logo-sm.png" alt="" style={{ opacity: 1 }} />
        </motion.div>
      )}

      <Footer />

      <motion.div className="progress" style={{ scaleX: progress }} />
      <div className="dock">
        <button className={"dock-cta" + (y > 500 ? " show" : "")} onClick={() => openEnquiry()}><span>Admissions enquiry</span><i><Icon name="arrowUR" /></i></button>
        <a className="dock-btn dock-call" href={"tel:" + C.tel} aria-label="Call the college"><Icon name="phone" /></a>
        <a className="dock-btn dock-wa" href={`https://wa.me/${C.whatsapp}?text=${encodeURIComponent("Hello SDGS College, I would like to know about admissions.")}`} target="_blank" rel="noopener" aria-label="Chat on WhatsApp"><Icon name="whatsapp" /></a>
      </div>
      <button className={"to-top" + (y > 700 ? " show" : "")} aria-label="Back to top" onClick={() => scrollTo(0)}>
        <svg viewBox="0 0 50 50" style={{ position: "absolute", inset: -1, width: 50, height: 50, transform: "rotate(-90deg)" }}>
          <circle cx="25" cy="25" r="23.5" fill="none" stroke="var(--gold)" strokeWidth="2" strokeDasharray="147.6" strokeDashoffset={147.6 * (1 - pct)} />
        </svg>
        <Icon name="arrow" />
      </button>
      <div className={"nudge" + (nudge ? " show" : "")} role="status">
        <img src="/assets/logo-sm.png" alt="" />
        <div>
          <b>Confused about which course to pick?</b>
          <p>Get a free 10 minute counselling call from our admissions desk.</p>
          <button className="btn btn-maroon btn-sm" onClick={() => openEnquiry("Not sure yet, need guidance")}>Request a call<Icon name="arrow" /></button>
        </div>
        <button className="x" aria-label="Dismiss" onClick={() => setNudge(false)}><Icon name="x" /></button>
      </div>

      <EnquiryModal state={enq} onClose={() => setEnq(null)} />
      <AnimatePresence>{loading && <Preloader onDone={() => setLoading(false)} />}</AnimatePresence>
    </SiteContext.Provider>
  );
}

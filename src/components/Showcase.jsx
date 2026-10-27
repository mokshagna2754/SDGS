import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import SDGS from "../data.js";
import Icon from "./Icon.jsx";
import { Img, LeadForm, Split, useSite } from "./ui.jsx";
import { reduceMotion } from "../lib/effects.js";

/* =========================================================
   Hero slider: 5 slides, first is a 3-photo collage.
   Circular clip-path wipes from the click origin, Ken Burns,
   masked headline rise, progress bars, swipe + keyboard.
   ========================================================= */
const SLIDES = [
  { label: "Legacy", collage: ["campus", "graduation", "students"], eyebrow: "Since 1965 · Hindupur", title: <>Sixty years of <em>shaping</em> futures.</>, text: "Saradamba Dasa Govindiah Setty College: where heritage meets ambition, and every student is known by name." },
  { label: "Academics", img: "lecture", eyebrow: "Intermediate · Undergraduate", title: <>Learn from <em>mentors</em>, not just lecturers.</>, text: "Six Intermediate groups and five UG programmes, taught by faculty who care about outcomes." },
  { label: "Campus", img: "library", eyebrow: "Library · Labs · Auditorium", title: <>A campus built for <em>curiosity</em>.</>, text: "Well-stocked library, modern laboratories, a green solar-powered campus and spaces to grow." },
  { label: "Life", img: "crowd", eyebrow: "NCC · NSS · Sports · Culture", title: <>Find your <em>stage</em>. Own it.</>, text: "From parade grounds to cultural fests, student life at S.D.G.S builds character and confidence." },
  { label: "Admissions", img: "friends", eyebrow: "Admission enquiries open", title: <>Your <em>legacy</em> begins here.</>, text: "Talk to our admissions desk today and find the programme that fits your goals." }
];

export function HeroSlider() {
  const { openEnquiry, loading } = useSite();
  const [i, setI] = useState(0);
  const [prev, setPrev] = useState(-1);
  const [origin, setOrigin] = useState({ x: 85, y: 55 });
  const [paused, setPaused] = useState(false);
  const [ready, setReady] = useState(false);
  const [tick, setTick] = useState(0);
  const busy = useRef(false);
  const frame = useRef(null);
  const DUR = 6500;

  useEffect(() => { if (!loading) { const t = setTimeout(() => setReady(true), 250); return () => clearTimeout(t); } }, [loading]);

  const go = useCallback((n, x = 85, y = 55) => {
    if (busy.current) return;
    busy.current = true;
    setI((cur) => {
      const nn = (n + SLIDES.length) % SLIDES.length;
      if (nn === cur) { busy.current = false; return cur; }
      setPrev(cur);
      return nn;
    });
    setOrigin({ x, y });
    setTick((t) => t + 1);
    setTimeout(() => { busy.current = false; setPrev(-1); }, 1500);
  }, []);

  useEffect(() => {
    if (!ready || paused || reduceMotion()) return;
    const t = setTimeout(() => go(i + 1), DUR);
    return () => clearTimeout(t);
  }, [i, ready, paused, go, tick]);

  useEffect(() => {
    const k = (e) => {
      if (e.target.closest && e.target.closest("input,textarea,select")) return;
      const r = frame.current.getBoundingClientRect();
      if (r.bottom < 0 || r.top > innerHeight) return;
      if (e.key === "ArrowRight") go(i + 1, 92, 50);
      if (e.key === "ArrowLeft") go(i - 1, 8, 50);
    };
    document.addEventListener("keydown", k);
    return () => document.removeEventListener("keydown", k);
  }, [i, go]);

  // scroll drift
  const [drift, setDrift] = useState(0);
  useEffect(() => {
    if (reduceMotion()) return;
    const f = () => setDrift(Math.min(window.pageYOffset, 900));
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  const sx = useRef(null);
  return (
    <section className="hero" aria-label="Highlights">
      <div className={"hero-frame" + (paused ? " paused" : "")} ref={frame} style={{ "--dur": DUR + "ms" }}
        onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
        onTouchStart={(e) => { sx.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => { if (sx.current == null) return; const dx = e.changedTouches[0].clientX - sx.current; if (Math.abs(dx) > 50) go(dx < 0 ? i + 1 : i - 1, dx < 0 ? 92 : 8, 50); sx.current = null; }}>
        {SLIDES.map((s, n) => (
          <div key={n} className={"slide" + (n === i ? " is-active" : "") + (n === prev ? " is-prev" : "")}
            style={n === i ? { "--cx": origin.x + "%", "--cy": origin.y + "%" } : undefined} aria-hidden={n !== i}>
            <div className="slide-media">
              {s.collage ? (
                <div className="collage">
                  {s.collage.map((k, t) => <div className="tile" key={k}><Img k={k} w={t === 0 ? 1400 : 900} eager={n === 0} alt={t === 0 ? "S.D.G.S College campus, Hindupur" : ""} /></div>)}
                </div>
              ) : <Img k={s.img} w={2000} alt="" />}
            </div>
            <div className="slide-copy" style={drift ? { transform: `translateY(${drift * 0.18}px)`, opacity: 1 - drift / 900 } : undefined}>
              <span className="eyebrow">{s.eyebrow}</span>
              {n === 0
                ? <Split as="h1" manual active={ready && i === 0}>{s.title}</Split>
                : <Split as="p" className="h1" manual active={ready && i === n}>{s.title}</Split>}
              <p>{s.text}</p>
            </div>
          </div>
        ))}

        <aside className="hero-card">
          <span className="tag"><i></i>Admissions open</span>
          <h3>Find your perfect programme</h3>
          <p>Intermediate & UG seats are filling. Get fees, eligibility and a callback today.</p>
          <div className="row">
            <button className="btn btn-gold btn-sm" onClick={() => openEnquiry()}>Enquire now<Icon name="arrow" /></button>
            <a className="btn btn-ghost btn-sm" href="#finder">Course quiz</a>
          </div>
        </aside>

        <div className="hero-ui">
          <div className="hero-dots">
            {SLIDES.map((s, n) => (
              <button key={n + "-" + (n === i ? tick : "")} className={"hero-dot" + (n === i ? " on" : "")} aria-label={"Show slide " + (n + 1) + ": " + s.label}
                onClick={() => go(n, 15 + n * 17, 90)}>
                0{n + 1} · {s.label}<i><b style={!ready ? { animationPlayState: "paused" } : undefined}></b></i>
              </button>
            ))}
          </div>
          <div className="hero-arrows">
            <button aria-label="Previous slide" onClick={() => go(i - 1, 8, 50)}><Icon name="arrow" style={{ transform: "rotate(180deg)" }} /></button>
            <button aria-label="Next slide" onClick={() => go(i + 1, 92, 50)}><Icon name="arrow" /></button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   Notification bar with ringing bell + marquee
   ========================================================= */
export function NoticeBar() {
  const [paused, setPaused] = useState(false);
  const items = SDGS.notifications.map((n, k) => (
    <Link key={k} to={n.href || "/"} className={n.hot ? "hot" : undefined}>{n.text}{n.isNew && <span className="new">NEW</span>}</Link>
  ));
  return (
    <section className="notice" aria-label="Notifications">
      <div className={"notice-bar" + (paused ? " paused" : "")}>
        <div className="notice-title"><span className="bell"><Icon name="bell" /></span><b>Notifications</b></div>
        <div className="notice-track"><div className="notice-run">{items}<span aria-hidden="true" style={{ display: "contents" }}>{items}</span></div></div>
        <button className="notice-pause" aria-label={paused ? "Resume notifications" : "Pause notifications"} onClick={() => setPaused(!paused)}>
          <Icon name={paused ? "play" : "pause"} />
        </button>
      </div>
    </section>
  );
}

/* =========================================================
   Courses rail with animated tab pill (layoutId)
   ========================================================= */
export function CourseRail() {
  const { openEnquiry } = useSite();
  const [kind, setKind] = useState("intermediate");
  const rail = useRef(null);
  const [pct, setPct] = useState(20);
  const prog = () => { const r = rail.current; const max = r.scrollWidth - r.clientWidth; setPct(max > 0 ? 15 + 85 * r.scrollLeft / max : 100); };
  useEffect(() => { rail.current.scrollLeft = 0; prog(); }, [kind]);

  // drag to scroll with mouse
  useEffect(() => {
    const r = rail.current;
    let down = false, sx = 0, sl = 0;
    const d = (e) => { if (e.pointerType !== "mouse") return; down = true; sx = e.clientX; sl = r.scrollLeft; };
    const m = (e) => { if (!down) return; const dx = e.clientX - sx; if (Math.abs(dx) > 5) r.classList.add("drag"); r.scrollLeft = sl - dx; };
    const u = () => { down = false; setTimeout(() => r.classList.remove("drag"), 0); };
    r.addEventListener("pointerdown", d); window.addEventListener("pointermove", m); window.addEventListener("pointerup", u);
    return () => { r.removeEventListener("pointerdown", d); window.removeEventListener("pointermove", m); window.removeEventListener("pointerup", u); };
  }, []);

  const list = SDGS.programmes[kind];
  return (
    <div>
      <div className="sec-head" style={{ alignItems: "center" }}>
        <LayoutGroup>
          <div className="tabs" role="tablist" aria-label="Programme level">
            {[["intermediate", "Intermediate"], ["ug", "UG Programmes"]].map(([k, t]) => (
              <button key={k} role="tab" aria-selected={kind === k} className={kind === k ? "on" : ""} onClick={() => setKind(k)}>
                {kind === k && <motion.span layoutId="tabPill" className="pill" style={{ inset: 0, left: 0, width: "auto" }} transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
                <span style={{ position: "relative" }}>{t}</span>
              </button>
            ))}
          </div>
        </LayoutGroup>
        <div className="rail-ctrl">
          <button aria-label="Scroll left" onClick={() => rail.current.scrollBy({ left: -380, behavior: "smooth" })}><Icon name="arrow" style={{ transform: "rotate(180deg)" }} /></button>
          <button aria-label="Scroll right" onClick={() => rail.current.scrollBy({ left: 380, behavior: "smooth" })}><Icon name="arrow" /></button>
        </div>
      </div>
      <div className="rail-wrap">
        <div className="rail" ref={rail} onScroll={prog}>
          {list.map((p, k) => (
            <motion.article className="course" key={kind + p.code}
              initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: k * 0.07, ease: [0.2, 0.75, 0.1, 1] }}>
              <span className="lvl">{kind === "ug" ? "Undergraduate" : "Intermediate"}</span>
              <div className="code">{p.code}</div>
              <h3>{p.name}</h3>
              <p>{p.note}</p>
              <div className="subs">{p.subs.map((s) => <span key={s}>{s}</span>)}</div>
              <div className="foot">
                <Link className="link-arrow" to="/academics#programmes" style={{ fontSize: ".85rem" }}>Details<Icon name="arrowUR" /></Link>
                <button onClick={() => openEnquiry(kind === "ug" ? p.name : "Intermediate · " + p.code)}>Enquire<Icon name="arrowUR" /></button>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="rail-progress"><i style={{ width: pct + "%" }}></i></div>
      </div>
    </div>
  );
}

/* =========================================================
   Course finder quiz: 3 steps, ends in a lead form
   ========================================================= */
const INTERESTS = [
  { k: "bio", i: "leaf", t: "Life & living things", s: "Plants, animals, the human body" },
  { k: "math", i: "calc", t: "Numbers & logic", s: "Maths, physics, problem solving" },
  { k: "biz", i: "chart", t: "Business & money", s: "Trade, accounts, markets" },
  { k: "tech", i: "cpu", t: "Computers & tech", s: "Coding, apps, the digital world" },
  { k: "soc", i: "landmark", t: "Society & policy", s: "History, governance, economy" },
  { k: "lead", i: "briefcase", t: "Leading people", s: "Management, startups, teams" }
];
const REC = {
  inter: {
    bio: ["Intermediate · BiPC", "Biology, Physics, Chemistry", "Your interests point to life sciences. BiPC opens the door to medicine, pharmacy and B.Sc. Botany / Zoology.", ["MBiPC"]],
    math: ["Intermediate · MPC", "Mathematics, Physics, Chemistry", "You enjoy logic and numbers. MPC is the classic launchpad for engineering and B.Sc. Mathematics.", ["MBiPC", "MEC"]],
    biz: ["Intermediate · CEC", "Civics, Economics, Commerce", "You have a head for business. CEC builds the base for B.Com, BBA and chartered accountancy.", ["MEC"]],
    tech: ["Intermediate · MPC", "Mathematics, Physics, Chemistry", "Technology careers start with strong maths. MPC sets you up for BCA and B.Sc. Computer Science.", ["MEC"]],
    soc: ["Intermediate · HEC", "History, Economics, Civics", "You care about how society works. HEC leads to B.A., law, journalism and civil services.", ["CEC"]],
    lead: ["Intermediate · MEC", "Mathematics, Economics, Commerce", "Future leaders need numbers and business sense. MEC is a sharp start toward BBA and finance.", ["CEC"]]
  },
  ug: {
    bio: ["B.Sc. (Hons) Botany", "or B.Sc. (Hons) Zoology", "A four-year honours degree in life sciences with lab-intensive learning and field work.", ["B.Sc. Zoology"]],
    math: ["B.Sc. (Hons) Mathematics", "Four-year honours degree", "Deep mathematics for careers in research, teaching, data and finance.", ["B.Sc. Computer Science"]],
    biz: ["B.Com General", "or B.Com Computer Applications", "Accounting, taxation and business with an optional computing edge.", ["BBA"]],
    tech: ["B.C.A. (Honours)", "Bachelor of Computer Applications", "Industry-ready computing: programming, databases, web and projects.", ["B.Sc. Computer Science"]],
    soc: ["B.A. (Hons) Political Science", "or B.A. (Hons) Economics", "Policy, governance and economic thinking for public life, law and research.", ["B.A. Economics"]],
    lead: ["B.B.A. (General)", "Bachelor of Business Administration", "Management, marketing, finance and HR for future entrepreneurs and leaders.", ["B.Com"]]
  }
};

export function CourseFinder() {
  const [step, setStep] = useState(0);
  const [stage, setStage] = useState(null);
  const [int, setInt] = useState(null);
  const card = useRef(null);
  const rec = stage && int ? REC[stage][int] : null;
  const pick = (fn, v, next) => { fn(v); setTimeout(() => setStep(next), 260); };
  const anim = { initial: { opacity: 0, x: 40, filter: "blur(6px)" }, animate: { opacity: 1, x: 0, filter: "blur(0px)" }, exit: { opacity: 0, x: -40, filter: "blur(6px)" }, transition: { duration: 0.5, ease: [0.2, 0.75, 0.1, 1] } };
  return (
    <div className="finder-card on-glass" ref={card} data-reveal="scale">
      <div className="finder-steps" aria-hidden="true">{[0, 1, 2].map((k) => <i key={k} className={k <= step ? "on" : ""} />)}</div>
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div key="s0" className="fstep on" {...anim} style={{ animation: "none" }}>
            <div className="q">Where are you right now?</div>
            <div className="hint">Step 1 of 3 · takes 30 seconds</div>
            <div className="opts">
              {[["inter", "cap", "I've finished 10th / SSC", "Looking for an Intermediate group"], ["ug", "award", "I've finished 12th / Intermediate", "Looking for a degree programme"]].map(([v, ic, t, s]) => (
                <button key={v} className={"opt" + (stage === v ? " sel" : "")} onClick={() => pick(setStage, v, 1)}>
                  <span className="oi"><Icon name={ic} /></span><b>{t}</b><span>{s}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
        {step === 1 && (
          <motion.div key="s1" className="fstep on" {...anim} style={{ animation: "none" }}>
            <div className="q">What excites you the most?</div>
            <div className="hint">Step 2 of 3 · pick the one that feels most like you</div>
            <div className="opts">
              {INTERESTS.map((o) => (
                <button key={o.k} className={"opt" + (int === o.k ? " sel" : "")} onClick={() => pick(setInt, o.k, 2)}>
                  <span className="oi"><Icon name={o.i} /></span><b>{o.t}</b><span>{o.s}</span>
                </button>
              ))}
            </div>
            <button className="fback" onClick={() => setStep(0)}><Icon name="arrow" />Back</button>
          </motion.div>
        )}
        {step === 2 && rec && (
          <motion.div key="s2" className="fstep on" {...anim} style={{ animation: "none" }}>
            <div className="result">
              <small>Your best match</small>
              <h4>{rec[0]}</h4>
              <p><b style={{ color: "#fff" }}>{rec[1]}</b><br />{rec[2]}</p>
              <div className="also">{rec[3].map((a) => <span className="chip" key={a}>Also consider · {a}</span>)}</div>
            </div>
            <div className="hint" style={{ marginBottom: 14 }}>Step 3 of 3 · get the fee details and a free counselling call</div>
            <LeadForm id="finder" programme={rec[0]} fields="short" glass cta="Get my free counselling call" />
            <button className="fback" onClick={() => setStep(1)}><Icon name="arrow" />Change answer</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* =========================================================
   Gallery masonry + filter + lightbox
   ========================================================= */
export function Gallery({ limit, filters }) {
  const [cat, setCat] = useState("all");
  const [open, setOpen] = useState(-1);
  const all = limit ? SDGS.gallery.slice(0, limit) : SDGS.gallery;
  const list = all.filter((g) => cat === "all" || g.cat === cat);
  useEffect(() => {
    if (open < 0) return;
    const k = (e) => {
      if (e.key === "Escape") setOpen(-1);
      if (e.key === "ArrowRight") setOpen((o) => (o + 1) % list.length);
      if (e.key === "ArrowLeft") setOpen((o) => (o - 1 + list.length) % list.length);
    };
    document.addEventListener("keydown", k);
    document.body.classList.add("no-scroll");
    return () => { document.removeEventListener("keydown", k); document.body.classList.remove("no-scroll"); };
  }, [open, list.length]);
  const cur = open >= 0 ? list[open] : null;
  return (
    <>
      {filters && (
        <div className="filters" style={{ marginBottom: 30 }} role="toolbar" aria-label="Filter photos">
          {[["all", "All"], ["campus", "Campus"], ["academics", "Academics"], ["labs", "Labs"], ["events", "Events"], ["sports", "Sports"]].map(([k, t]) => (
            <button key={k} className={cat === k ? "on" : ""} onClick={() => setCat(k)}>{t}</button>
          ))}
        </div>
      )}
      <motion.div className="masonry" layout>
        <AnimatePresence>
          {list.map((g, k) => (
            <motion.figure key={g.img} layout initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, ease: [0.2, 0.75, 0.1, 1] }} onClick={() => setOpen(k)}>
              <Img k={g.img} w={900} alt={g.cap + " at S.D.G.S College Hindupur"} />
              <figcaption>{g.cap}</figcaption>
            </motion.figure>
          ))}
        </AnimatePresence>
      </motion.div>
      <AnimatePresence>
        {cur && (
          <motion.div className="lightbox open" role="dialog" aria-modal="true" aria-label={cur.cap} data-lenis-prevent
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={(e) => e.target === e.currentTarget && setOpen(-1)}>
            <button className="lb-btn lb-close" aria-label="Close" onClick={() => setOpen(-1)}><Icon name="x" /></button>
            <button className="lb-btn lb-prev" aria-label="Previous" onClick={() => setOpen((open - 1 + list.length) % list.length)}><Icon name="arrow" /></button>
            <button className="lb-btn lb-next" aria-label="Next" onClick={() => setOpen((open + 1) % list.length)}><Icon name="arrow" /></button>
            <figure style={{ margin: 0 }}>
              <motion.div key={cur.img} initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                <Img k={cur.img} w={1800} alt={cur.cap} style={{ transform: "none" }} />
              </motion.div>
              <p>{cur.cap}</p>
            </figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

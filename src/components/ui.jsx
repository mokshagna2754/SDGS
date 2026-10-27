import { createContext, useContext, useEffect, useRef, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import SDGS from "../data.js";
import Icon from "./Icon.jsx";
import { reduceMotion, store } from "../lib/effects.js";

export const SiteContext = createContext({ openEnquiry: () => {}, scrollTo: () => {} });
export const useSite = () => useContext(SiteContext);

/* ---------- Image from the central image map ---------- */
export function Img({ k, w, alt = "", eager, className, style }) {
  let src = SDGS.img[k] || k;
  if (w && src.includes("unsplash")) src = src.replace(/w=\d+/, "w=" + w);
  return (
    <img src={src} alt={alt} className={className} style={style}
      loading={eager ? "eager" : "lazy"} decoding="async" {...(eager ? { fetchpriority: "high" } : {})} />
  );
}

/* ---------- Word-split heading (masked rise on reveal) ---------- */
function splitNode(node, counter) {
  if (typeof node === "string") {
    return node.split(/(\s+)/).map((part, i) => {
      if (!part) return null;
      if (/^\s+$/.test(part)) return " ";
      const d = counter.n++ * 0.06;
      return <span className="w" key={i}><span className="wi" style={{ "--d": d + "s" }}>{part}</span></span>;
    });
  }
  if (Array.isArray(node)) return node.map((n, i) => <Fragment key={i}>{splitNode(n, counter)}</Fragment>);
  if (node && node.props) {
    if (node.type === "br") return node;
    return { ...node, props: { ...node.props, children: splitNode(node.props.children, counter) } };
  }
  return node;
}
export function Split({ as: Tag = "h2", children, className = "", manual, active, ...rest }) {
  const counter = { n: 0 };
  return (
    <Tag className={`split${manual ? " manual" : ""}${manual && active ? " in" : ""} ${className}`} {...rest}>
      {splitNode(children, counter)}
    </Tag>
  );
}

/* ---------- Scroll-scrubbed paragraph (words light up as you scroll) ---------- */
export function Scrub({ children, as: Tag = "p", className = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const words = Array.from(el.querySelectorAll(".sw"));
    if (reduceMotion()) { words.forEach((w) => w.classList.add("on")); return; }
    const tick = () => {
      const vh = window.innerHeight, r = el.getBoundingClientRect();
      const p = Math.max(0, Math.min(1, (vh * 0.85 - r.top) / (r.height + vh * 0.35)));
      const n = Math.round(p * words.length);
      words.forEach((w, i) => w.classList.toggle("on", i < n));
    };
    window.addEventListener("scroll", tick, { passive: true });
    tick();
    return () => window.removeEventListener("scroll", tick);
  }, []);
  const wrap = (node, key = 0) => {
    if (typeof node === "string") return node.split(/(\s+)/).map((p, i) => (!p ? null : /^\s+$/.test(p) ? " " : <span className="sw" key={key + "-" + i}>{p}</span>));
    if (Array.isArray(node)) return node.map((n, i) => <Fragment key={i}>{wrap(n, i)}</Fragment>);
    if (node && node.props) return { ...node, props: { ...node.props, children: wrap(node.props.children, key) } };
    return node;
  };
  return <Tag ref={ref} className={"scrub-text " + className}>{wrap(children)}</Tag>;
}

/* ---------- Accreditation emblem (auto-swaps to official logo file) ---------- */
const EMBLEM = {
  ugc: { a: "UGC", b: "UNIVERSITY GRANTS COMMISSION · INDIA · ", c: "#1f4e8c", alt: "University Grants Commission (UGC) logo" },
  sku: { a: "SKU", b: "SRI KRISHNADEVARAYA UNIVERSITY · ANANTAPUR · ", c: "#7a1420", alt: "Sri Krishnadevaraya University logo" },
  naac: { a: "B+", b: "NATIONAL ASSESSMENT & ACCREDITATION COUNCIL · ", c: "#0f6b4a", alt: "NAAC logo" },
  aicte: { a: "AICTE", b: "ALL INDIA COUNCIL FOR TECHNICAL EDUCATION · ", c: "#b5651d", alt: "AICTE logo" }
};
export function Emblem({ k }) {
  const e = EMBLEM[k];
  const [official, setOfficial] = useState(false);
  useEffect(() => {
    const probe = new Image();
    probe.onload = () => setOfficial(true);
    probe.src = `/assets/accreditation/${k}.png`;
  }, [k]);
  if (official) return <img src={`/assets/accreditation/${k}.png`} alt={e.alt} />;
  const id = "em-" + k;
  const big = e.a.length > 3;
  return (
    <svg viewBox="0 0 120 120" role="img" aria-label={e.alt}>
      <defs><path id={id} d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" /></defs>
      <circle cx="60" cy="60" r="58" fill={e.c} />
      <circle cx="60" cy="60" r="53" fill="none" stroke="#fff" strokeOpacity=".35" />
      <circle cx="60" cy="60" r="34" fill="#fff" />
      <text fontFamily="Archivo Narrow,sans-serif" fontSize="7.4" fontWeight="800" letterSpacing="1.2" fill="#fff">
        <textPath href={"#" + id}>{e.b}</textPath>
      </text>
      <text x="60" y={big ? 64 : 67} textAnchor="middle" fontFamily={k === "naac" ? "Libre Caslon Display,serif" : "Archivo Narrow,sans-serif"}
        fontWeight="800" fontSize={big ? 15 : k === "naac" ? 30 : 20} fill={e.c}>{e.a}</text>
    </svg>
  );
}

/* ---------- FAQ accordion (visible twin of FAQPage JSON-LD) ---------- */
export function Faq({ items, numbered = true, firstOpen = true }) {
  const [open, setOpen] = useState(firstOpen ? 0 : -1);
  return (
    <div className="acc">
      {items.map((f, i) => (
        <div className={"acc-item" + (open === i ? " open" : "")} key={i}>
          <h3 style={{ margin: 0, font: "inherit" }}>
            <button className="acc-btn" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
              <span className="n">{numbered ? String(i + 1).padStart(2, "0") : ""}</span>
              <b>{f.q}</b>
              <i><Icon name="plus" /></i>
            </button>
          </h3>
          <div className="acc-panel"><div><div className="inner">{f.body || <p>{f.a}</p>}</div></div></div>
        </div>
      ))}
    </div>
  );
}

/* ---------- Inner page hero ---------- */
export function PageHero({ title, lead, img, crumbs = [], ghost }) {
  return (
    <section className="phero">
      <div className="phero-in">
        <Img k={img} eager alt="" />
        {ghost && <span className="ghost-num" aria-hidden="true">{ghost}</span>}
        <div>
          <nav className="crumbs" aria-label="Breadcrumb" data-reveal>
            <Link to="/">Home</Link>
            {crumbs.map((c, i) => (
              <Fragment key={i}><Icon name="chevronR" />{c.to ? <Link to={c.to}>{c.t}</Link> : <span aria-current="page">{c.t}</span>}</Fragment>
            ))}
          </nav>
          <Split as="h1">{title}</Split>
          {lead && <p data-reveal style={{ "--d": ".3s" }}>{lead}</p>}
        </div>
      </div>
    </section>
  );
}

/* ---------- Sticky in-page sub navigation with scrollspy ---------- */
export function SubNav({ items }) {
  const { scrollTo } = useSite();
  const [cur, setCur] = useState(items[0][0]);
  const bar = useRef(null);
  useEffect(() => {
    const tick = () => {
      let c = items[0][0];
      items.forEach(([id]) => { const s = document.getElementById(id); if (s && s.getBoundingClientRect().top < innerHeight * 0.35) c = id; });
      setCur(c);
    };
    window.addEventListener("scroll", tick, { passive: true });
    tick();
    return () => window.removeEventListener("scroll", tick);
  }, [items]);
  useEffect(() => {
    const a = bar.current && bar.current.querySelector("a.on");
    if (a && bar.current.scrollWidth > bar.current.clientWidth) bar.current.scrollTo({ left: a.offsetLeft - 40, behavior: "smooth" });
  }, [cur]);
  return (
    <div className="subnav">
      <div className="frame">
        <nav className="subnav-in" ref={bar} aria-label="On this page">
          {items.map(([id, t]) => (
            <a key={id} href={"#" + id} className={cur === id ? "on" : ""}
              onClick={(e) => { e.preventDefault(); scrollTo(document.getElementById(id)); history.replaceState(null, "", "#" + id); }}>{t}</a>
          ))}
        </nav>
      </div>
    </div>
  );
}

export function Pending({ children = "Details to be provided by the college" }) {
  return <span className="pending"><Icon name="hourglass" />{children}</span>;
}

/* ---------- Social links ---------- */
export function Social({ className }) {
  const s = SDGS.social;
  const list = [["facebook", "Facebook"], ["instagram", "Instagram"], ["twitter", "X (Twitter)"], ["linkedin", "LinkedIn"], ["whatsapp", "WhatsApp"]];
  return (
    <div className={className}>
      {list.map(([k, label]) => s[k]
        ? <a key={k} href={s[k]} target="_blank" rel="noopener" aria-label={"S.D.G.S College on " + label}><Icon name={k} /></a>
        : <a key={k} className="soon" aria-label={label + " (coming soon)"} title="Coming soon"><Icon name={k} /></a>)}
    </div>
  );
}

/* ---------- Programme options ---------- */
export const programmeOptions = [
  ...SDGS.programmes.intermediate.map((p) => "Intermediate · " + p.code),
  ...SDGS.programmes.ug.flatMap((p) =>
    p.code === "B.Sc" ? p.subs.map((s) => "B.Sc. (Hons) " + s)
      : p.code === "B.Com" ? p.subs.map((s) => "B.Com " + s)
      : p.code === "B.A" ? p.subs.map((s) => "B.A. (Hons) " + s)
      : [p.name]),
  "Not sure yet, need guidance"
];

/* ---------- Lead form (enquiry / alumni / contact) ---------- */
export function LeadForm({ id = "lead", kind = "admission", programme, cta = "Request a callback", fields = "full", glass, onDone }) {
  const [vals, setVals] = useState({ name: "", phone: "", programme: programme || "", town: "", email: "", batch: "", message: "" });
  const [errs, setErrs] = useState({});
  const [done, setDone] = useState(null);
  const formRef = useRef(null);
  useEffect(() => { if (programme) setVals((v) => ({ ...v, programme })); }, [programme]);
  const set = (k) => (e) => setVals({ ...vals, [k]: e.target.value });

  const required = ["name", "phone"].concat(fields === "full" ? ["programme"] : fields === "alumni" ? ["batch"] : fields === "contact" ? ["message"] : []);
  const submit = (e) => {
    e.preventDefault();
    const er = {};
    required.forEach((k) => { if (!String(vals[k] || "").trim()) er[k] = true; });
    if (vals.phone && vals.phone.replace(/\D/g, "").length < 10) er.phone = true;
    if (vals.email && !/^\S+@\S+\.\S+$/.test(vals.email)) er.email = true;
    setErrs(er);
    if (Object.keys(er).length) {
      formRef.current.animate([{ transform: "translateX(0)" }, { transform: "translateX(-8px)" }, { transform: "translateX(8px)" }, { transform: "translateX(0)" }], { duration: 350 });
      return;
    }
    const data = { ...vals, form: kind, source: id, page: location.pathname, time: new Date().toISOString() };
    if (SDGS.leadEndpoint) {
      fetch(SDGS.leadEndpoint, { method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(data) }).catch(() => {});
    }
    const lines = ["Hello SDGS College,", kind === "alumni" ? "I would like to join the SDGS alumni network." : kind === "contact" ? "I have a query." : "I would like admission details."];
    if (vals.name) lines.push("Name: " + vals.name);
    if (vals.phone) lines.push("Mobile: " + vals.phone);
    if (vals.email) lines.push("Email: " + vals.email);
    if (vals.programme) lines.push((kind === "alumni" ? "Programme studied: " : "Programme: ") + vals.programme);
    if (vals.batch) lines.push("Batch: " + vals.batch);
    if (vals.town) lines.push("Town: " + vals.town);
    if (vals.message) lines.push("Message: " + vals.message);
    setDone({ first: vals.name.trim().split(" ")[0], phone: vals.phone, wa: `https://wa.me/${SDGS.contact.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}` });
    store.set("sdgs-lead", "1");
    onDone && onDone(data);
  };

  if (done) {
    return (
      <div className="success" ref={formRef}>
        <div className="tick"><Icon name="check" /></div>
        <h4>Thank you{done.first ? ", " + done.first : ""}!</h4>
        <p>{SDGS.leadEndpoint
          ? `Your details have reached the S.D.G.S desk. Expect a call on ${done.phone} soon.`
          : `One last tap: send your details to our desk on WhatsApp and we will call you back on ${done.phone}.`}</p>
        <a className={"btn " + (glass ? "btn-gold" : "btn-maroon")} href={done.wa} target="_blank" rel="noopener" style={{ marginTop: 6 }}>
          <Icon name="whatsapp" />{SDGS.leadEndpoint ? "Chat with us on WhatsApp" : "Send on WhatsApp"}
        </a>
      </div>
    );
  }

  const field = (k, label, extra = {}) => (
    <div className={"field" + (errs[k] ? " err" : "")}>
      <input id={`${id}-${k}`} name={k} placeholder=" " value={vals[k]} onChange={set(k)} {...extra} />
      <label htmlFor={`${id}-${k}`}>{label}</label>
    </div>
  );
  return (
    <form className="form" ref={formRef} onSubmit={submit} noValidate>
      <div className="two">
        {field("name", kind === "alumni" ? "Full name" : kind === "contact" ? "Your name" : "Student name", { autoComplete: "name" })}
        {field("phone", "Mobile number", { inputMode: "tel", autoComplete: "tel" })}
      </div>
      {fields === "full" && (
        <div className="two">
          <div className={"field" + (errs.programme ? " err" : "")}>
            <select id={`${id}-programme`} name="programme" value={vals.programme} onChange={set("programme")}>
              <option value="" disabled hidden></option>
              {!programmeOptions.includes(vals.programme) && vals.programme && <option>{vals.programme}</option>}
              <optgroup label="Intermediate">{programmeOptions.filter((o) => o.startsWith("Inter")).map((o) => <option key={o}>{o}</option>)}</optgroup>
              <optgroup label="Undergraduate">{programmeOptions.filter((o) => !o.startsWith("Inter") && !o.startsWith("Not")).map((o) => <option key={o}>{o}</option>)}</optgroup>
              <option>Not sure yet, need guidance</option>
            </select>
            <label htmlFor={`${id}-programme`}>Programme of interest</label>
          </div>
          {field("town", "Town / village", { autoComplete: "address-level2" })}
        </div>
      )}
      {fields === "alumni" && (
        <div className="two">
          {field("batch", "Passing-out year", { inputMode: "numeric" })}
          {field("programme", "Programme studied")}
        </div>
      )}
      {(fields === "alumni" || fields === "contact") && field("email", "Email (optional)", { type: "email", autoComplete: "email" })}
      {fields === "contact" && (
        <div className={"field" + (errs.message ? " err" : "")}>
          <textarea id={`${id}-message`} name="message" placeholder=" " value={vals.message} onChange={set("message")} />
          <label htmlFor={`${id}-message`}>How can we help?</label>
        </div>
      )}
      <button className="btn btn-gold btn-lg" type="submit">{cta}<Icon name="arrow" /></button>
      <p className="form-note"><Icon name="lock" />Your details are used only by S.D.G.S College to contact you.</p>
    </form>
  );
}

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";
import { useSite } from "./ui.jsx";
import { answer, SUGGESTIONS } from "../lib/assistant.js";

const WELCOME = { from: "bot", text: "Namaste! I'm the S.D.G.S AI College Assistant. Ask me anything about courses, admissions, scholarships, exams or campus life." };

/* One link chip under a bot reply: page link, enquiry, phone/WhatsApp or external site. */
function Chip({ label, href, onNavigate, onEnquire }) {
  if (href.startsWith("#enquire")) {
    return <button className="as-chip" onClick={() => onEnquire(href.split(":")[1])}>{label}<Icon name="arrowUR" /></button>;
  }
  if (href.startsWith("/")) return <Link className="as-chip" to={href} onClick={onNavigate}>{label}<Icon name="arrowUR" /></Link>;
  const ext = href.startsWith("http");
  return <a className="as-chip" href={href} target={ext ? "_blank" : undefined} rel={ext ? "noopener" : undefined}>{label}<Icon name="arrowUR" /></a>;
}

export default function Assistant({ open, onClose }) {
  const { openEnquiry } = useSite();
  const [msgs, setMsgs] = useState([WELCOME]);
  const [text, setText] = useState("");
  const [typing, setTyping] = useState(false);
  const body = useRef(null);
  const input = useRef(null);

  useEffect(() => { if (open) setTimeout(() => input.current && input.current.focus(), 300); }, [open]);
  useEffect(() => { body.current && body.current.scrollTo({ top: body.current.scrollHeight, behavior: "smooth" }); }, [msgs, typing]);
  useEffect(() => {
    if (!open) return;
    const k = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", k);
    return () => document.removeEventListener("keydown", k);
  }, [open, onClose]);

  const ask = (q) => {
    q = q.trim();
    if (!q || typing) return;
    setMsgs((m) => [...m, { from: "user", text: q }]);
    setText("");
    setTyping(true);
    setTimeout(() => {
      setMsgs((m) => [...m, { from: "bot", ...answer(q) }]);
      setTyping(false);
    }, 550 + Math.min(q.length * 12, 600));
  };

  const closeOnSmall = () => { if (window.innerWidth < 640) onClose(); };
  const enquire = (programme) => { onClose(); openEnquiry(programme); };

  return (
    <div className={"assistant" + (open ? " open" : "")} role="dialog" aria-modal="false" aria-label="AI College Assistant" aria-hidden={!open} data-lenis-prevent>
      <div className="as-head">
        <span className="as-avatar"><img src="/assets/logo-sm.png" alt="" /></span>
        <div>
          <b>AI College Assistant</b>
          <span><i></i>Instant answers about S.D.G.S</span>
        </div>
        <button className="as-x" onClick={onClose} aria-label="Close assistant"><Icon name="x" /></button>
      </div>

      <div className="as-body" ref={body} aria-live="polite">
        {msgs.map((m, i) => (
          <div className={"as-msg " + m.from} key={i}>
            <p>{m.text}</p>
            {m.links && m.links.length > 0 && (
              <div className="as-chips">
                {m.links.map(([l, h]) => <Chip key={l + h} label={l} href={h} onNavigate={closeOnSmall} onEnquire={enquire} />)}
              </div>
            )}
          </div>
        ))}
        {msgs.length === 1 && (
          <div className="as-suggest">
            {SUGGESTIONS.map((s) => <button key={s} onClick={() => ask(s)}>{s}</button>)}
          </div>
        )}
        {typing && <div className="as-msg bot as-typing" aria-label="Assistant is typing"><span></span><span></span><span></span></div>}
      </div>

      <form className="as-form" onSubmit={(e) => { e.preventDefault(); ask(text); }}>
        <input ref={input} value={text} onChange={(e) => setText(e.target.value)} placeholder="Ask about courses, fees, admissions…" aria-label="Your question" maxLength={300} />
        <button type="submit" aria-label="Send" disabled={!text.trim() || typing}><Icon name="arrow" /></button>
      </form>
      <p className="as-note">Answers come from the college website. For fees and seats, talk to our admissions desk.</p>
    </div>
  );
}

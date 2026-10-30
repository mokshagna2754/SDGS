import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import { Emblem, Faq, Img, Scrub, Split, useSite } from "../components/ui.jsx";
import { CourseFinder, CourseRail, Gallery, HeroSlider, NoticeBar } from "../components/Showcase.jsx";
import { FAQ_HOME } from "../seo.js";

const ACCR = [
  { k: "ugc", kicker: "Recognition", h: "Recognised by UGC", p: "Recognised by the University Grants Commission, upholding national standards in higher education." },
  { k: "sku", kicker: "Affiliation", h: "Affiliated to SKU", p: "Affiliated to Sri Krishnadevaraya University, Anantapur for all undergraduate programmes." },
  { k: "naac", kicker: "Accreditation", h: "NAAC accredited", p: "Accredited by the National Assessment and Accreditation Council with B+ grade.", grade: "B+" },
  { k: "aicte", kicker: "Approval", h: "Approved by AICTE", p: "Approved by the All India Council for Technical Education for applicable programmes." }
];

const FACILITIES = [
  { cls: "w2 h2", img: "library2", ic: "book", h: "Library", p: "A quiet, well-stocked library with reference collections, journals and reading halls.", to: "/infrastructure#library" },
  { cls: "", img: "chem", ic: "microscope", h: "Laboratories", p: "Science and computer labs for hands-on learning.", to: "/infrastructure#labs" },
  { cls: "gold", ic: "sun", h: "Solar powered", p: "A greener campus running on clean energy.", to: "/infrastructure#solar" },
  { cls: "", img: "auditorium", ic: "mic", h: "Auditorium", p: "Seminars, fests and convocations.", to: "/infrastructure#auditorium" },
  { cls: "plain", ic: "drop", h: "Rain water harvesting", p: "Harvesting rainwater to recharge groundwater.", to: "/infrastructure#rainwater" },
  { cls: "w2", img: "sports", ic: "trophy", h: "Sports grounds", p: "Track, field and indoor games that build champions.", to: "/infrastructure#sports" },
  { cls: "maroon", ic: "glass", h: "Pure drinking water", p: "Water purifiers across the campus.", to: "/infrastructure#water" },
  { cls: "", img: "campus", ic: "building", h: "Campus buildings", p: "Spacious classrooms and blocks.", to: "/infrastructure#buildings" }
];

export default function Home() {
  const { openEnquiry } = useSite();
  return (
    <>
      <HeroSlider />
      <NoticeBar />

      {/* ---------- Affiliation, Accreditation & Approval ---------- */}
      <section className="section-sm" aria-labelledby="accr-h">
        <div className="frame">
          <div className="sec-head">
            <div>
              <span className="eyebrow" data-reveal>Affiliation · Accreditation · Approval</span>
              <Split id="accr-h">Trusted by the <em>institutions</em> that matter.</Split>
            </div>
            <p className="lead" data-reveal>S.D.G.S College is recognised by UGC, affiliated to Sri Krishnadevaraya University, accredited by NAAC with B+ and approved by AICTE.</p>
          </div>
          <div className="accr-grid" data-stagger="0.1">
            {ACCR.map((a) => (
              <article className="accr spot" key={a.k}>
                {a.grade && <span className="grade" aria-hidden="true">{a.grade}</span>}
                <div className="accr-logo"><Emblem k={a.k} /></div>
                <div>
                  <div className="kicker">{a.kicker}</div>
                  <h3>{a.h}</h3>
                </div>
                <p>{a.p}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- About intro + scrub statement ---------- */}
      <section className="section" aria-labelledby="about-h">
        <div className="frame">
          <div className="intro-grid">
            <div>
              <span className="eyebrow" data-reveal>About S.D.G.S</span>
              <h2 id="about-h" className="sr">What is S.D.G.S College, Hindupur?</h2>
              <Scrub as="p">
                Since 1965, <em>Saradamba Dasa Govindiah Setty College</em> has shaped generations in Hindupur, pairing timeless values with a modern education that opens doors.
              </Scrub>
              <p className="lead" data-reveal style={{ marginTop: 28 }}>
                S.D.G.S College, Hindupur is a NAAC B+ accredited college affiliated to Sri Krishnadevaraya University, offering Intermediate and undergraduate programmes in science, commerce, arts, computing and management.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 28 }} data-reveal>
                <Link className="btn" to="/about">Our story<Icon name="arrow" /></Link>
                <Link className="btn btn-ghost" to="/about#principal">Principal's message</Link>
              </div>
            </div>
            <div className="intro-visual" data-reveal="scale">
              <div className="ph-a img-reveal"><Img k="campus" w={1000} alt="S.D.G.S College campus building in Hindupur" /></div>
              <div className="ph-b img-reveal" style={{ transitionDelay: ".25s" }}><Img k="classroom" w={700} alt="Students in a classroom at S.D.G.S College" /></div>
              <div className="seal-badge" aria-hidden="true">
                <svg viewBox="0 0 116 116"><defs><path id="sb" d="M58,58 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" /></defs>
                  <text fill="#e9c978" fontFamily="Archivo Narrow" fontSize="9" fontWeight="800" letterSpacing="2.6"><textPath href="#sb">• A LEGACY OF EXCELLENCE • SINCE 1965 </textPath></text></svg>
                <b>60</b>
              </div>
            </div>
          </div>
          <div className="stats">
            <div className="stat"><b><span data-count="60">60</span><sup>+</sup></b><span>Years of legacy</span></div>
            <div className="stat"><b><span data-count="6">6</span></b><span>Intermediate groups</span></div>
            <div className="stat"><b><span data-count="5">5</span></b><span>UG programmes</span></div>
            <div className="stat"><b><span data-count="9">9</span></b><span>Departments</span></div>
          </div>
        </div>
      </section>

      {/* ---------- Academics / Examinations / Admissions ---------- */}
      <section className="section ivory rounded-top" aria-labelledby="path-h">
        <div className="frame">
          <div className="sec-head">
            <div>
              <span className="eyebrow" data-reveal>Your journey</span>
              <Split id="path-h">Everything you need, <em>in one place.</em></Split>
            </div>
            <p className="lead" data-reveal>From choosing a programme to sitting your final exam, here is how S.D.G.S supports every step.</p>
          </div>
          <div className="path-grid" data-stagger="0.12">
            {[
              { n: "01", img: "lecture", h: "Academics", p: "Intermediate and UG programmes with experienced faculty, honours tracks and practical learning.", to: "/academics#programmes", chips: ["MPC", "BiPC", "B.Sc", "B.Com", "BCA", "BBA"] },
              { n: "02", img: "notebook", h: "Examinations", p: "Academic calendar, exam schedules and results, all in one place.", to: "/academics#examinations", chips: ["Calendar", "Schedules", "Results"] },
              { n: "03", img: "graduation", h: "Admissions", p: "Eligibility, documents and a simple process to secure your seat.", to: "/academics#admissions", chips: ["Eligibility", "Documents", "Apply"] }
            ].map((c) => (
              <Link className="path" to={c.to} key={c.n}>
                <Img k={c.img} w={1000} alt="" />
                <span className="num">{c.n}</span>
                <span className="go"><Icon name="arrowUR" /></span>
                <h3>{c.h}</h3>
                <p>{c.p}</p>
                <ul>{c.chips.map((x) => <li className="chip" key={x}>{x}</li>)}</ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Courses ---------- */}
      <section className="section dark on-dark" aria-labelledby="courses-h" style={{ overflow: "hidden" }}>
        <div className="dark-glow"></div>
        <div className="frame" style={{ position: "relative" }}>
          <div className="sec-head">
            <div>
              <span className="eyebrow" data-reveal>Courses</span>
              <Split id="courses-h">Programmes that <em>open doors.</em></Split>
            </div>
            <p className="lead" data-reveal>Six Intermediate groups and five undergraduate degrees, including four-year honours programmes.</p>
          </div>
          <CourseRail />
        </div>
      </section>

      {/* ---------- Course finder (lead capture) ---------- */}
      <section className="section" id="finder" aria-labelledby="finder-h">
        <div className="frame finder">
          <div className="finder-intro">
            <span className="eyebrow" data-reveal>Course finder</span>
            <Split id="finder-h">Not sure what to study? <em>Find your fit</em> in 30 seconds.</Split>
            <p className="lead" data-reveal style={{ marginTop: 18 }}>Answer two quick questions and we will match you with the right programme, then our counsellors will call you with fees and seat details.</p>
            <div className="perks" data-stagger="0.1">
              <div className="perk"><i><Icon name="compass" /></i><div><b>Personal match</b><span>Based on your stage and interests.</span></div></div>
              <div className="perk"><i><Icon name="phone" /></i><div><b>Free counselling call</b><span>Talk to our admissions desk, no obligation.</span></div></div>
              <div className="perk"><i><Icon name="clock" /></i><div><b>Takes 30 seconds</b><span>No sign-up, no spam.</span></div></div>
            </div>
          </div>
          <CourseFinder />
        </div>
      </section>

      <div className="band" aria-hidden="true">
        <div className="band-run">
          {[0, 1].map((k) => <span key={k}>Learn <i>deeply</i> Lead <i>boldly</i> Serve <i>proudly</i> Since <i>1965</i></span>)}
        </div>
      </div>

      {/* ---------- Facilities ---------- */}
      <section className="section" aria-labelledby="fac-h">
        <div className="frame">
          <div className="sec-head">
            <div>
              <span className="eyebrow" data-reveal>Facilities</span>
              <Split id="fac-h">A campus that <em>works</em> as hard as you.</Split>
            </div>
            <Link className="link-arrow" to="/infrastructure" data-reveal>Explore infrastructure<Icon name="arrowUR" /></Link>
          </div>
          <div className="bento" data-stagger="0.07">
            {FACILITIES.map((f) => (
              <Link to={f.to} className={"b " + f.cls} key={f.h}>
                {f.img && <Img k={f.img} w={900} alt="" />}
                <span className="ic"><Icon name={f.ic} /></span>
                <h3>{f.h}</h3>
                <p>{f.p}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Student life sticky stack ---------- */}
      <section className="section ivory" aria-labelledby="life-h">
        <div className="frame">
          <div className="sec-head">
            <div>
              <span className="eyebrow" data-reveal>Students corner</span>
              <Split id="life-h">Beyond the <em>classroom.</em></Split>
            </div>
            <p className="lead" data-reveal>NCC, NSS, sports and cultural life build discipline, service and confidence alongside academics.</p>
          </div>
          <div className="stack">
            {[
              { n: "01", h: "NCC", p: "Discipline, drill and leadership. Our NCC unit shapes confident cadets ready to serve the nation.", img: "students", to: "/students/ncc" },
              { n: "02", h: "NSS", p: "Not me, but you. NSS volunteers lead community service, awareness drives and special camps.", img: "friends", to: "/students/nss" },
              { n: "03", h: "Sports", p: "Athletics and team sports, from the annual sports meet to university-level tournaments.", img: "sports", to: "/students/sports" },
              { n: "04", h: "Culturals", p: "Annual day, music, dance, drama and literary events where every talent finds a stage.", img: "crowd", to: "/students/culturals" }
            ].map((c, k) => (
              <article className="stack-card" key={c.n} style={{ "--i": k }}>
                <div className="sc-body">
                  <span className="sc-n">{c.n} / 04</span>
                  <h3>{c.h}</h3>
                  <p className="muted">{c.p}</p>
                  <Link className="link-arrow" to={c.to}>Explore {c.h}<Icon name="arrowUR" /></Link>
                </div>
                <div className="sc-media"><Img k={c.img} w={1100} alt={c.h + " at S.D.G.S College Hindupur"} /></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Principal ---------- */}
      <section className="section" aria-labelledby="pr-h">
        <div className="frame quote-wrap">
          <div className="portrait" data-reveal="scale">
            <img className="ph" src="/assets/logo-sm.png" alt="" />
            <div className="cap"><b>The Principal</b>S.D.G.S College, Hindupur</div>
          </div>
          <div>
            <span className="eyebrow" data-reveal>From the principal's desk</span>
            <h2 id="pr-h" className="sr">Principal's message</h2>
            <blockquote data-reveal style={{ marginTop: 24 }}>
              Education here is not only about marks. It is about character, curiosity and the courage to serve. Welcome to a family that has believed in its students for sixty years.
            </blockquote>
            <Link className="link-arrow" to="/about#principal" style={{ marginTop: 28 }} data-reveal>Read the full message<Icon name="arrowUR" /></Link>
          </div>
        </div>
      </section>

      {/* ---------- Alumni ---------- */}
      <section className="section dark on-dark" aria-labelledby="al-h" style={{ overflow: "hidden" }}>
        <div className="dark-glow"></div>
        <div className="frame split-2" style={{ position: "relative" }}>
          <div>
            <span className="eyebrow" data-reveal>Alumni</span>
            <Split id="al-h">Six decades. <em>Thousands</em> of stories.</Split>
            <p className="lead" data-reveal style={{ marginTop: 20 }}>S.D.G.S graduates serve as teachers, doctors, entrepreneurs, officers and leaders. Reconnect with your batch and help the next generation.</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 28 }} data-reveal>
              <Link className="btn btn-gold" to="/alumni#register">Join the alumni network<Icon name="arrow" /></Link>
              <Link className="btn btn-ghost" to="/alumni">Alumni page</Link>
            </div>
          </div>
          <div className="cards-3" style={{ gridTemplateColumns: "1fr 1fr" }} data-stagger="0.1">
            {[["users", "Reconnect", "Find classmates from your batch."], ["heart", "Give back", "Mentor and support current students."], ["briefcase", "Network", "Open doors for fellow alumni."], ["calendar", "Reunions", "Homecomings and jubilee events."]].map(([i, h, p]) => (
              <div className="card" key={h}><span className="ic"><Icon name={i} /></span><h3>{h}</h3><p>{p}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Gallery ---------- */}
      <section className="section" aria-labelledby="gal-h">
        <div className="frame">
          <div className="sec-head">
            <div>
              <span className="eyebrow" data-reveal>Gallery</span>
              <Split id="gal-h">Moments from <em>campus.</em></Split>
            </div>
            <Link className="link-arrow" to="/gallery" data-reveal>View full gallery<Icon name="arrowUR" /></Link>
          </div>
          <Gallery limit={8} />
        </div>
      </section>

      {/* ---------- FAQ (AEO) ---------- */}
      <section className="section ivory" aria-labelledby="faq-h">
        <div className="frame split-2" style={{ alignItems: "start" }}>
          <div style={{ position: "sticky", top: 140 }}>
            <span className="eyebrow" data-reveal>Questions</span>
            <Split id="faq-h">Frequently <em>asked.</em></Split>
            <p className="lead" data-reveal style={{ marginTop: 18 }}>Quick answers about S.D.G.S College, Hindupur. Still curious? Our desk is a call away.</p>
            <a className="btn btn-ghost" href="tel:+916301776991" style={{ marginTop: 24 }} data-reveal><Icon name="phone" />+91 63017 76991</a>
          </div>
          <Faq items={FAQ_HOME} />
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="section-sm">
        <div className="frame">
          <div className="cta on-dark" data-reveal="scale">
            <div className="cta-orb"></div>
            <span className="eyebrow">Admission enquiries open</span>
            <Split style={{ marginTop: 18 }}>Begin your <em>legacy</em> today.</Split>
            <p>Join a college that has believed in its students since 1965. Talk to our admissions desk and find your programme.</p>
            <div className="row">
              <button className="btn btn-gold btn-lg" onClick={() => openEnquiry()}>Apply / Enquire<Icon name="arrow" /></button>
              <a className="btn btn-ghost btn-lg" href="https://wa.me/916301776991" target="_blank" rel="noopener"><Icon name="whatsapp" />WhatsApp us</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

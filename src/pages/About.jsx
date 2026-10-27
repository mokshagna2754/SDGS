import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import { Img, PageHero, Pending, Split, SubNav } from "../components/ui.jsx";

const TIMELINE = [
  { y: "1965", h: "The foundation", p: "S.D.G.S College is established in Hindupur with a mission to bring quality higher education to the region." },
  { y: "Growth", h: "Programmes expand", p: "The college grows from its first classrooms into Intermediate and degree streams across science, commerce and arts." },
  { y: "SKU", h: "University affiliation", p: "Affiliation to Sri Krishnadevaraya University, Anantapur, anchors the undergraduate programmes." },
  { y: "NAAC", h: "Accredited with B+", p: "The National Assessment and Accreditation Council accredits the college with B+ grade." },
  { y: "Today", h: "Honours & computing", p: "Four-year honours degrees, BCA and BBA bring S.D.G.S into a new era of learning." },
  { y: "2025", h: "Diamond jubilee", p: "Sixty years of excellence, celebrated with a refreshed identity and a promise for the next sixty." }
];

const MGMT = ["President", "Secretary", "Correspondent", "Treasurer", "Member", "Member", "Member", "Member"];

export default function About() {
  return (
    <>
      <PageHero title={<>A legacy of <em>excellence</em> since 1965.</>} img="campus" ghost="60"
        crumbs={[{ t: "About SDGS" }]}
        lead="Saradamba Dasa Govindiah Setty College, Hindupur has educated generations of students in Andhra Pradesh for sixty years, combining enduring values with modern learning." />
      <SubNav items={[["founder", "Founder"], ["vision", "Vision & Mission"], ["history", "History"], ["management", "Management"], ["principal", "Principal"]]} />

      <section className="section" id="founder" aria-labelledby="founder-h">
        <div className="frame quote-wrap">
          <div className="portrait" data-reveal="scale">
            <img className="ph" src="/assets/logo-sm.png" alt="" />
            <div className="cap"><b>Our Founder</b>Photograph to be added</div>
          </div>
          <div className="prose">
            <span className="eyebrow" data-reveal>Our founder</span>
            <Split id="founder-h" style={{ margin: "16px 0 22px" }}>A vision that <em>outlived</em> its time.</Split>
            <p className="lead" data-reveal>The college carries the name of Saradamba Dasa Govindiah Setty, honouring a commitment to make higher education accessible to the young people of Hindupur and its surrounding villages.</p>
            <p data-reveal>The founder's life story, photographs and contribution to the region will be presented here.</p>
            <div data-reveal><Pending>Founder biography and photo to be provided</Pending></div>
          </div>
        </div>
      </section>

      <section className="section-sm" id="vision" aria-labelledby="vm-h">
        <div className="frame">
          <h2 id="vm-h" className="sr">Vision and mission of S.D.G.S College</h2>
          <div className="vm">
            <article className="vm-card v" data-reveal="left">
              <div className="big">Vision</div>
              <p>To be a centre of excellence in higher education that nurtures knowledgeable, ethical and socially responsible citizens rooted in Indian values and ready for a global world.</p>
            </article>
            <article className="vm-card m" data-reveal="right">
              <div className="big">Mission</div>
              <ul>
                {["Provide accessible, affordable and quality education to students of Hindupur and the region.", "Foster critical thinking, research aptitude and practical skills through student-centred teaching.", "Build character through NCC, NSS, sports and cultural engagement.", "Empower students with employability, entrepreneurship and lifelong learning."].map((t) => (
                  <li key={t}><Icon name="checkCircle" />{t}</li>
                ))}
              </ul>
            </article>
          </div>
          <p className="muted" style={{ marginTop: 14, fontSize: ".85rem" }}>Draft wording, to be confirmed by the college.</p>
        </div>
      </section>

      <section className="section" id="history" aria-labelledby="hist-h">
        <div className="frame split-2" style={{ alignItems: "start" }}>
          <div style={{ position: "sticky", top: 150 }}>
            <span className="eyebrow" data-reveal>History of S.D.G.S</span>
            <Split id="hist-h" style={{ marginTop: 14 }}>Sixty years, <em>one promise.</em></Split>
            <p className="lead" data-reveal style={{ marginTop: 18 }}>S.D.G.S College was founded in Hindupur in 1965. Over six decades it has grown into a NAAC B+ accredited institution offering Intermediate and honours degree programmes.</p>
            <div className="media img-reveal" style={{ marginTop: 30, aspectRatio: "16/10" }}><Img k="graduation" w={1100} alt="Graduates celebrating at S.D.G.S College" /></div>
          </div>
          <div className="timeline">
            <div className="tl-fill"></div>
            {TIMELINE.map((t) => (
              <div className="tl-item" key={t.h} data-reveal>
                <div className="tl-year">{t.y}</div>
                <div><h3>{t.h}</h3><p>{t.p}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section ivory" id="management" aria-labelledby="mg-h">
        <div className="frame">
          <div className="sec-head">
            <div>
              <span className="eyebrow" data-reveal>Management</span>
              <Split id="mg-h">The people <em>behind</em> the legacy.</Split>
            </div>
            <div data-reveal><Pending>Member names and photos to be provided</Pending></div>
          </div>
          <div className="people" data-stagger="0.06">
            {MGMT.map((r, i) => (
              <article className="person" key={i}>
                <div className="ph"><span className="mono">{r[0]}</span></div>
                <div className="meta"><b>Name to be updated</b><span>{r}</span></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="principal" aria-labelledby="pr-h">
        <div className="frame quote-wrap">
          <div className="portrait" data-reveal="scale">
            <img className="ph" src="/assets/logo-sm.png" alt="" />
            <div className="cap"><b>The Principal</b>S.D.G.S College, Hindupur</div>
          </div>
          <div className="prose">
            <span className="eyebrow" data-reveal>Principal's message</span>
            <Split id="pr-h" style={{ margin: "16px 0 22px" }}>Welcome to the <em>S.D.G.S</em> family.</Split>
            <blockquote data-reveal style={{ fontSize: "clamp(1.4rem,2.4vw,2rem)", marginBottom: 24 }}>Education here is not only about marks. It is about character, curiosity and the courage to serve.</blockquote>
            <p data-reveal>For sixty years, S.D.G.S College has believed in the potential of every student who walks through its gates. Our faculty mentor, our programmes challenge, and our campus life shapes confident young citizens. Whether you join us for Intermediate or a degree, you become part of a proud legacy.</p>
            <div data-reveal><Pending>Principal's name, photo and full message to be provided</Pending></div>
            <div style={{ marginTop: 28 }} data-reveal><Link className="btn" to="/academics#admissions">Explore admissions<Icon name="arrow" /></Link></div>
          </div>
        </div>
      </section>
    </>
  );
}

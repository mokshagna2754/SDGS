import SDGS from "../data.js";
import Icon from "../components/Icon.jsx";
import { Faq, PageHero, Pending, Split, SubNav, useSite } from "../components/ui.jsx";
import { FAQ_ADMISSIONS } from "../seo.js";

const DOCS = [
  "SSC (Class 10) marks memo",
  "Intermediate marks memo (for UG admission)",
  "Transfer Certificate (TC) from the last institution",
  "Study and Conduct certificates",
  "Caste certificate (if applicable)",
  "Income certificate (for scholarships, if applicable)",
  "Aadhaar card of the student",
  "Recent passport-size photographs"
];

export default function Academics() {
  const { openEnquiry } = useSite();
  const P = SDGS.programmes;
  return (
    <>
      <PageHero title={<>Academics & <em>admissions.</em></>} img="lecture" crumbs={[{ t: "Academics" }]}
        lead="S.D.G.S College Hindupur offers six Intermediate groups and five undergraduate programmes. Find eligibility, documents required, the academic calendar and examination details below." />
      <SubNav items={[["programmes", "Programmes"], ["admissions", "Admissions"], ["examinations", "Examinations"], ["calendar", "Academic Calendar"], ["faq", "FAQ"]]} />

      <section className="section" id="programmes" aria-labelledby="prog-h">
        <div className="frame">
          <div className="sec-head">
            <div>
              <span className="eyebrow" data-reveal>Programmes</span>
              <Split id="prog-h">What can I study at <em>S.D.G.S College?</em></Split>
              <p className="lead" data-reveal>S.D.G.S College Hindupur offers Intermediate groups MPC, BiPC, MBiPC, CEC, MEC and HEC, and UG programmes B.Sc. (Honours), B.Com, B.A. (Honours), B.C.A. (Honours) and B.B.A., affiliated to Sri Krishnadevaraya University.</p>
            </div>
          </div>

          <h3 style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: "2rem", margin: "10px 0 18px" }} data-reveal>Intermediate section</h3>
          <div className="table-wrap" data-reveal>
            <table>
              <caption className="sr">Intermediate groups at S.D.G.S College</caption>
              <thead><tr><th>Group</th><th>Subjects</th><th>Leads to</th><th></th></tr></thead>
              <tbody>
                {P.intermediate.map((p) => (
                  <tr key={p.code}>
                    <td><b style={{ fontFamily: "var(--serif)", fontSize: "1.5rem", fontWeight: 400, color: "var(--maroon)" }}>{p.code}</b></td>
                    <td>{p.name}</td>
                    <td className="muted">{p.note}</td>
                    <td><button className="link-arrow" onClick={() => openEnquiry("Intermediate · " + p.code)}>Enquire<Icon name="arrowUR" /></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: "2rem", margin: "56px 0 18px" }} data-reveal>UG programmes</h3>
          <div className="cards-3" data-stagger="0.08">
            {P.ug.map((p, i) => (
              <article className="card spot" key={p.code}>
                <span className="ic" style={{ fontFamily: "var(--serif)", fontSize: "1.4rem" }}>0{i + 1}</span>
                <h3>{p.name}</h3>
                <p>{p.note}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 16 }}>{p.subs.map((s) => <span className="chip chip-light" key={s}>{s}</span>)}</div>
                <button className="link-arrow" style={{ marginTop: "auto", paddingTop: 18 }} onClick={() => openEnquiry(p.name)}>Enquire about {p.code}<Icon name="arrowUR" /></button>
              </article>
            ))}
            <article className="card" style={{ background: "var(--wine)", color: "#fff", borderColor: "transparent" }}>
              <span className="ic" style={{ background: "rgba(233,201,120,.15)", color: "var(--gold-2)" }}><Icon name="compass" /></span>
              <h3>Not sure which one?</h3>
              <p style={{ color: "rgba(255,255,255,.7)" }}>Take the 30-second course finder or talk to a counsellor.</p>
              <a className="link-arrow" href="/#finder" style={{ marginTop: "auto", paddingTop: 18, color: "var(--gold-2)" }}>Open course finder<Icon name="arrowUR" /></a>
            </article>
          </div>
        </div>
      </section>

      <section className="section ivory" id="admissions" aria-labelledby="adm-h">
        <div className="frame">
          <div className="sec-head">
            <div>
              <span className="eyebrow" data-reveal>Admissions</span>
              <Split id="adm-h">How do I get admission at <em>S.D.G.S?</em></Split>
              <p className="lead" data-reveal>Admission to S.D.G.S College Hindupur is open to students who have passed SSC (for Intermediate) or Intermediate (for UG). Enquire, submit documents, and confirm your seat in four simple steps.</p>
            </div>
          </div>
          <ol className="steps" data-stagger="0.1" style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li className="step"><h4>Enquire</h4><p>Call, WhatsApp or fill the enquiry form to know seats and fees.</p></li>
            <li className="step"><h4>Check eligibility</h4><p>Our desk confirms your eligibility for the chosen group or programme.</p></li>
            <li className="step"><h4>Submit documents</h4><p>Bring originals and photocopies of the documents listed below.</p></li>
            <li className="step"><h4>Confirm seat</h4><p>Complete the admission formalities and fee payment at the college.</p></li>
          </ol>
          <div className="split-2" style={{ marginTop: 60, alignItems: "start" }}>
            <div>
              <h3 data-reveal style={{ marginBottom: 16 }}>Eligibility criteria</h3>
              <div className="table-wrap" data-reveal>
                <table style={{ minWidth: 0 }}>
                  <thead><tr><th>Level</th><th>Minimum qualification</th></tr></thead>
                  <tbody>
                    <tr><td><b>Intermediate</b></td><td>Pass in SSC (Class 10) or equivalent, as per BIEAP norms</td></tr>
                    <tr><td><b>B.Sc. (Honours)</b></td><td>Pass in Intermediate with relevant science subjects</td></tr>
                    <tr><td><b>B.Com / BBA</b></td><td>Pass in Intermediate (any group)</td></tr>
                    <tr><td><b>B.A. (Honours)</b></td><td>Pass in Intermediate (any group)</td></tr>
                    <tr><td><b>B.C.A. (Honours)</b></td><td>Pass in Intermediate, as per SKU / APSCHE norms</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="muted" style={{ fontSize: ".82rem", marginTop: 10 }}>Final eligibility follows Board, University and APSCHE regulations for the admission year.</p>
            </div>
            <div>
              <h3 data-reveal style={{ marginBottom: 16 }}>Documents required</h3>
              <ul className="check-list" data-stagger="0.05">{DOCS.map((d) => <li key={d}><Icon name="file" />{d}</li>)}</ul>
              <button className="btn btn-gold" style={{ marginTop: 28 }} onClick={() => openEnquiry()} data-reveal>Start your admission<Icon name="arrow" /></button>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="examinations" aria-labelledby="ex-h">
        <div className="frame">
          <div className="sec-head">
            <div>
              <span className="eyebrow" data-reveal>Examinations</span>
              <Split id="ex-h">Exams, <em>made clear.</em></Split>
              <p className="lead" data-reveal>Intermediate examinations follow the Board of Intermediate Education, Andhra Pradesh. UG semester examinations follow Sri Krishnadevaraya University, with internal assessments conducted by the college.</p>
            </div>
          </div>
          <div className="docs" data-stagger="0.06">
            {[["Examination schedule", "Current semester timetable"], ["Hall ticket instructions", "How to download and verify"], ["Internal assessment plan", "Dates and syllabus coverage"], ["Results", "Links to Board / University results"]].map(([b, s]) => (
              <a className="doc" href="#examinations" key={b} aria-disabled="true">
                <i><Icon name="file" /></i><div><b>{b}</b><span>{s} · to be published</span></div><span className="dl"><Icon name="download" /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm" id="calendar" aria-labelledby="cal-h">
        <div className="frame">
          <div className="sec-head">
            <div><span className="eyebrow" data-reveal>Academic calendar</span><Split id="cal-h">The year <em>ahead.</em></Split></div>
            <div data-reveal><Pending>Calendar to be published by the college</Pending></div>
          </div>
          <div className="cards-4" data-stagger="0.07">
            {[["Term I", "Commencement, orientation and first internal assessment"], ["Term II", "Seminars, projects and second internal assessment"], ["Practicals", "Laboratory and practical examinations"], ["Semester exams", "Board / University examinations and results"]].map(([h, p], i) => (
              <article className="card" key={h}><span className="ic"><Icon name="calendar" /></span><h3>{h}</h3><p>{p}</p><span className="muted" style={{ marginTop: 14, fontSize: ".8rem" }}>Phase 0{i + 1}</span></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section ivory" id="faq" aria-labelledby="faq-h">
        <div className="frame split-2" style={{ alignItems: "start" }}>
          <div>
            <span className="eyebrow" data-reveal>Admissions FAQ</span>
            <Split id="faq-h" style={{ marginTop: 14 }}>Questions, <em>answered.</em></Split>
          </div>
          <Faq items={FAQ_ADMISSIONS} />
        </div>
      </section>
    </>
  );
}

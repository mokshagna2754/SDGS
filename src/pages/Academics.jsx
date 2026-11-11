import { Link } from "react-router-dom";
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

export function ProgCard({ p, level }) {
  return (
    <Link className="course" to={"/academics/" + p.id}>
      <span className="lvl">{level}</span>
      <div className="code">{p.code}</div>
      <h3>{p.name}</h3>
      <p>{p.note}</p>
      <div className="subs">{p.subs.map((s) => <span key={s}>{s}</span>)}</div>
      <div className="foot"><span>View programme<Icon name="arrowUR" /></span></div>
    </Link>
  );
}

export default function Academics() {
  const { openEnquiry } = useSite();
  const P = SDGS.programmes;
  return (
    <>
      <PageHero title={<>Academics & <em>admissions.</em></>} img="lecture" crumbs={[{ t: "Academics" }]}
        lead="S.D.G.S College Hindupur offers six Intermediate groups and five undergraduate programmes. Find eligibility, documents required, the academic calendar and examination details below." />
      <SubNav items={[["programmes", "Programmes Offered"], ["admissions", "Admissions"], ["examinations", "Examinations"], ["calendar", "Academic Calendar"], ["syllabus", "Syllabus"], ["faq", "FAQ"]]} />

      <section className="section dark on-dark" id="programmes" aria-labelledby="prog-h">
        <div className="frame">
          <div className="sec-head">
            <div>
              <span className="eyebrow" data-reveal>Academics</span>
              <Split id="prog-h">Programmes <em>offered.</em></Split>
            </div>
          </div>

          <div className="prog-label" data-reveal><h3>UG programmes</h3><span className="chip">Undergraduate · Sri Krishnadevaraya University</span></div>
          <div className="prog-grid ug" data-stagger="0.08">
            {P.ug.map((p) => <ProgCard p={p} level="Undergraduate" key={p.id} />)}
            <Link className="course" to="/#finder">
              <span className="lvl">Guidance</span>
              <div className="code"><Icon name="compass" /></div>
              <h3>Not sure which one?</h3>
              <p>Take the 30-second course finder or talk to a counsellor.</p>
              <div className="foot"><span>Open course finder<Icon name="arrowUR" /></span></div>
            </Link>
          </div>

          <div className="prog-label" style={{ marginTop: 64 }} data-reveal><h3>Intermediate programmes</h3><span className="chip">Board of Intermediate Education, A.P.</span></div>
          <div className="prog-grid inter" data-stagger="0.08">
            {P.intermediate.map((p) => <ProgCard p={p} level="Intermediate" key={p.id} />)}
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
                    <tr><td><b>B.Com / BBA (Honours)</b></td><td>Pass in Intermediate (any group)</td></tr>
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
            <a className="doc" href="#examinations" aria-disabled="true">
              <i><Icon name="file" /></i><div><b>Details of examinations</b><span>Semester details · to be published</span></div><span className="dl"><Icon name="download" /></span>
            </a>
            <a className="doc" href="#examinations" aria-disabled="true">
              <i><Icon name="file" /></i><div><b>Results</b><span>Links to Board / University results · to be published</span></div><span className="dl"><Icon name="download" /></span>
            </a>
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

      <section className="section-sm" id="syllabus" aria-labelledby="syl-h">
        <div className="frame">
          <div className="sec-head">
            <div><span className="eyebrow" data-reveal>Syllabus</span><Split id="syl-h">Syllabus copies, <em>year wise.</em></Split></div>
            <div data-reveal><Pending>PDFs to be uploaded by the college</Pending></div>
          </div>
          <div className="syllabus" data-stagger="0.07">
            {SDGS.syllabus.map((c) => (
              <article className="card" key={c.course}>
                <h3>{c.course}</h3>
                <ul>
                  {c.years.map((y) => (
                    <li key={y.y}>
                      <a className="doc" href={y.file || undefined} target={y.file ? "_blank" : undefined} rel="noopener" aria-disabled={!y.file || undefined}>
                        <i><Icon name="file" /></i><div><b>{y.y} syllabus</b><span>{y.file ? "PDF" : "To be uploaded"}</span></div><span className="dl"><Icon name="download" /></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
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

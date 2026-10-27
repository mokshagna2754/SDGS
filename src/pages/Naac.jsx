import Icon from "../components/Icon.jsx";
import { Emblem, Faq, PageHero, Pending, Split, SubNav } from "../components/ui.jsx";

const CRITERIA = [
  ["Curricular Aspects", "Curriculum planning and implementation, academic flexibility, curriculum enrichment and feedback system."],
  ["Teaching-Learning and Evaluation", "Student enrolment and profile, catering to student diversity, teaching-learning process, teacher profile and evaluation process."],
  ["Research, Innovations and Extension", "Resource mobilisation for research, innovation ecosystem, research publications, extension activities and collaboration."],
  ["Infrastructure and Learning Resources", "Physical facilities, library as a learning resource, IT infrastructure and maintenance of campus infrastructure."],
  ["Student Support and Progression", "Student support, student progression, student participation and activities, and alumni engagement."],
  ["Governance, Leadership and Management", "Institutional vision and leadership, strategy development, faculty empowerment, financial management and internal quality assurance."],
  ["Institutional Values and Best Practices", "Institutional values and social responsibilities, best practices and institutional distinctiveness."]
];

export default function Naac() {
  return (
    <>
      <PageHero title={<>NAAC accredited with <em>B+</em> grade.</>} img="hall" ghost="B+" crumbs={[{ t: "NAAC" }]}
        lead="S.D.G.S College Hindupur is accredited by the National Assessment and Accreditation Council (NAAC) with a B+ grade. This page hosts IQAC information, the Self Study Report and documents for all seven NAAC criteria." />
      <SubNav items={[["iqac", "IQAC"], ["ssr", "SSR Report"], ["criteria", "7 Criteria"]]} />

      <section className="section" id="iqac">
        <div className="frame split-2">
          <div className="prose">
            <span className="eyebrow" data-reveal>Internal Quality Assurance Cell</span>
            <Split style={{ margin: "14px 0 20px" }}>What is the <em>IQAC?</em></Split>
            <p className="lead" data-reveal>The Internal Quality Assurance Cell (IQAC) of S.D.G.S College plans, guides and monitors quality enhancement across teaching, research, administration and student support, as mandated by NAAC.</p>
            <ul className="check-list" data-stagger="0.06" style={{ marginTop: 22 }}>
              {["IQAC composition and coordinator", "Minutes of IQAC meetings", "Annual Quality Assurance Reports (AQAR)", "Feedback and action taken reports"].map((t) => <li key={t}><Icon name="checkCircle" />{t}</li>)}
            </ul>
            <div style={{ marginTop: 20 }} data-reveal><Pending>IQAC documents to be provided</Pending></div>
          </div>
          <div className="accr spot" data-reveal="scale" style={{ alignItems: "center", textAlign: "center", padding: 50 }}>
            <div className="accr-logo" style={{ width: 160, height: 160 }}><Emblem k="naac" /></div>
            <div className="kicker">Accreditation status</div>
            <h3 style={{ fontSize: "3.4rem" }}>Grade B+</h3>
            <p>National Assessment and Accreditation Council</p>
          </div>
        </div>
      </section>

      <section className="section-sm ivory" id="ssr">
        <div className="frame">
          <div className="sec-head"><div><span className="eyebrow" data-reveal>Self Study Report</span><Split>SSR & <em>reports.</em></Split></div>
            <p className="lead" data-reveal>The Self Study Report, NAAC certificate, peer team report and annual quality reports of the college.</p></div>
          <div className="docs" data-stagger="0.06">
            {[["Self Study Report (SSR)", "PDF · to be uploaded"], ["NAAC certificate", "PDF · to be uploaded"], ["NAAC peer team report", "PDF · to be uploaded"], ["AQAR reports", "PDF · to be uploaded"]].map(([b, s]) => (
              <a className="doc" href="#ssr" key={b} aria-disabled="true"><i><Icon name="file" /></i><div><b>{b}</b><span>{s}</span></div><span className="dl"><Icon name="download" /></span></a>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="criteria">
        <div className="frame">
          <div className="sec-head">
            <div><span className="eyebrow" data-reveal>Seven criteria</span><Split>The NAAC <em>framework.</em></Split>
              <p className="lead" data-reveal>NAAC assesses colleges on seven criteria. Supporting documents for each criterion will be linked below.</p></div>
          </div>
          <Faq items={CRITERIA.map(([q, a], i) => ({ q: "Criterion " + ["I", "II", "III", "IV", "V", "VI", "VII"][i] + ": " + q, a, body: <><p>{a}</p><Pending>Criterion documents to be uploaded</Pending></> }))} />
        </div>
      </section>
    </>
  );
}

import { Link, useParams } from "react-router-dom";
import SDGS from "../data.js";
import Icon from "../components/Icon.jsx";
import { Img, PageHero, Pending, Split, useSite } from "../components/ui.jsx";
import { ProgCard } from "./Academics.jsx";
import { DeptCard } from "./Departments.jsx";
import NotFound from "./NotFound.jsx";

const ELIGIBILITY = {
  intermediate: "Pass in SSC (Class 10) or equivalent, as per BIEAP norms.",
  "bsc-honours": "Pass in Intermediate with relevant science subjects.",
  bcom: "Pass in Intermediate (any group).",
  "ba-honours": "Pass in Intermediate (any group).",
  "bca-honours": "Pass in Intermediate, as per SKU / APSCHE norms.",
  "bba-honours": "Pass in Intermediate (any group)."
};

export const findProgramme = (id) => {
  const ug = SDGS.programmes.ug.find((p) => p.id === id);
  if (ug) return { p: ug, ug: true };
  const inter = SDGS.programmes.intermediate.find((p) => p.id === id);
  return inter ? { p: inter, ug: false } : null;
};

export default function Programme() {
  const { id } = useParams();
  const { openEnquiry } = useSite();
  const found = findProgramme(id);
  if (!found) return <NotFound />;
  const { p, ug } = found;
  const level = ug ? "Undergraduate" : "Intermediate";
  const title = ug ? p.name : "Intermediate " + p.code;
  const depts = (p.depts || []).map((d) => SDGS.departments.find((x) => x.id === d)).filter(Boolean);
  const others = (ug ? SDGS.programmes.ug : SDGS.programmes.intermediate).filter((x) => x.id !== p.id).slice(0, 3);

  return (
    <>
      <PageHero title={ug ? <>{p.name.replace(" (Honours)", "")} <em>{/Honours/.test(p.name) ? "(Honours)" : "programme"}</em></> : <>Intermediate <em>{p.code}</em></>}
        img={ug ? "lecture" : "classroom"} crumbs={[{ t: "Academics", to: "/academics" }, { t: "Programmes Offered", to: "/academics#programmes" }, { t: p.code }]}
        lead={`${title} at S.D.G.S College Hindupur: ${ug ? p.subs.join(", ") : p.name}. ${p.note}`} />

      <section className="section" id="overview">
        <div className="frame split-2">
          <div className="prose">
            <span className="eyebrow" data-reveal>{level} programme</span>
            <Split style={{ margin: "14px 0 20px" }}>{ug ? <>What you will <em>study.</em></> : <>Subjects in <em>{p.code}.</em></>}</Split>
            <p className="lead" data-reveal>{p.note}</p>
            <ul className="check-list" data-stagger="0.07" style={{ margin: "22px 0 26px" }}>
              {p.subs.map((s) => <li key={s}><Icon name="checkCircle" />{ug && p.code !== "BCA" && p.code !== "BBA" ? title + " · " + s : s}</li>)}
            </ul>
            <div className="table-wrap" data-reveal>
              <table style={{ minWidth: 0 }}>
                <tbody>
                  <tr><td><b>Level</b></td><td>{level}</td></tr>
                  <tr><td><b>{ug ? "Affiliation" : "Board"}</b></td><td>{ug ? "Sri Krishnadevaraya University" : "Board of Intermediate Education, Andhra Pradesh"}</td></tr>
                  <tr><td><b>Duration</b></td><td>{ug ? (/Honours/.test(p.name) ? "Four years (Honours)" : "Three years") : "Two years"}</td></tr>
                  <tr><td><b>Eligibility</b></td><td>{ELIGIBILITY[ug ? p.id : "intermediate"]}</td></tr>
                </tbody>
              </table>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 28 }} data-reveal>
              <button className="btn btn-gold" onClick={() => openEnquiry(ug ? p.name : "Intermediate · " + p.code)}>Enquire about this course<Icon name="arrow" /></button>
              <Link className="btn btn-ghost" to="/academics#admissions">Admission process</Link>
            </div>
          </div>
          <div>
            <div className="media img-reveal"><Img k={depts[0] ? depts[0].img : "students"} w={1100} alt={title + " at S.D.G.S College Hindupur"} /></div>
            <div style={{ marginTop: 14 }} data-reveal><Pending>Syllabus, fees and seat details to be provided</Pending></div>
          </div>
        </div>
      </section>

      {depts.length > 0 && (
        <section className="section-sm ivory">
          <div className="frame">
            <div className="sec-head">
              <div><span className="eyebrow" data-reveal>Departments</span><Split>Taught by the <em>department{depts.length > 1 ? "s" : ""}</em></Split></div>
            </div>
            <div className="cards-3" data-stagger="0.08">{depts.map((d) => <DeptCard d={d} key={d.id} showProgramme />)}</div>
          </div>
        </section>
      )}

      <section className="section dark on-dark">
        <div className="frame">
          <div className="sec-head">
            <div><span className="eyebrow" data-reveal>Explore more</span><Split>Other {ug ? "UG" : "Intermediate"} <em>programmes</em></Split></div>
            <Link className="link-arrow" to="/academics#programmes" data-reveal>All programmes<Icon name="arrowUR" /></Link>
          </div>
          <div className="prog-grid" data-stagger="0.08">{others.map((x) => <ProgCard p={x} level={level} key={x.id} />)}</div>
        </div>
      </section>
    </>
  );
}

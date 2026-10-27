import { Link, useParams } from "react-router-dom";
import SDGS from "../data.js";
import Icon from "../components/Icon.jsx";
import { Img, PageHero, Pending, Split, SubNav, useSite } from "../components/ui.jsx";
import { DeptCard } from "./Departments.jsx";
import NotFound from "./NotFound.jsx";

const CAL = [
  ["Commencement of classes", "Semester I / III / V", "To be announced"],
  ["Internal assessment I", "All semesters", "To be announced"],
  ["Mid-semester break", "All semesters", "To be announced"],
  ["Internal assessment II", "All semesters", "To be announced"],
  ["University practical exams", "All semesters", "As per SKU schedule"],
  ["University theory exams", "All semesters", "As per SKU schedule"]
];

export default function Department() {
  const { id } = useParams();
  const { openEnquiry } = useSite();
  const d = SDGS.departments.find((x) => x.id === id);
  if (!d) return <NotFound />;
  const others = SDGS.departments.filter((x) => x.id !== d.id).slice(0, 3);
  return (
    <>
      <PageHero title={<>Department of <em>{d.name}</em></>} img={d.img} crumbs={[{ t: "Departments", to: "/departments" }, { t: d.name }]}
        lead={`The Department of ${d.name} at S.D.G.S College Hindupur offers ${d.programme}. ${d.about}`} />
      <SubNav items={[["overview", "Overview"], ["vision", "Vision & Mission"], ["faculty", "Faculty"], ["photos", "Photos"], ["calendar", "Academic Calendar"]]} />

      <section className="section" id="overview">
        <div className="frame split-2">
          <div className="prose">
            <span className="eyebrow" data-reveal>{d.stream} · Overview</span>
            <Split style={{ margin: "14px 0 20px" }}>Learning that <em>goes deeper.</em></Split>
            <p className="lead" data-reveal>{d.about}</p>
            <ul className="check-list" data-stagger="0.08" style={{ margin: "24px 0 30px" }}>
              <li><Icon name="checkCircle" />Programme: {d.programme}</li>
              <li><Icon name="checkCircle" />Affiliated to Sri Krishnadevaraya University</li>
              <li><Icon name="checkCircle" />Experienced faculty and student mentoring</li>
              <li><Icon name="checkCircle" />Seminars, projects and field exposure</li>
            </ul>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }} data-reveal>
              <button className="btn btn-gold" onClick={() => openEnquiry(d.programme.split(" · ")[0])}>Enquire about this course<Icon name="arrow" /></button>
              <Link className="btn btn-ghost" to="/academics#admissions">Eligibility</Link>
            </div>
          </div>
          <div className="media img-reveal"><Img k={d.img} w={1100} alt={"Department of " + d.name} /></div>
        </div>
      </section>

      <section className="section-sm" id="vision">
        <div className="frame vm">
          <article className="vm-card v" data-reveal="left">
            <div className="big">Vision</div>
            <p>To build a department of distinction in {d.name.toLowerCase()} that nurtures knowledge, inquiry and responsible citizenship.</p>
          </article>
          <article className="vm-card m" data-reveal="right">
            <div className="big">Mission</div>
            <ul>
              <li><Icon name="checkCircle" />Deliver rigorous, student-centred teaching in {d.name.toLowerCase()}.</li>
              <li><Icon name="checkCircle" />Encourage projects, seminars and research aptitude.</li>
              <li><Icon name="checkCircle" />Connect learning with careers and community needs.</li>
            </ul>
          </article>
        </div>
        <div className="frame"><p className="muted" style={{ marginTop: 14, fontSize: ".85rem" }}>Draft wording, to be confirmed by the department.</p></div>
      </section>

      <section className="section" id="faculty">
        <div className="frame">
          <div className="sec-head">
            <div><span className="eyebrow" data-reveal>Faculty</span><Split>Meet the <em>mentors.</em></Split></div>
            <div data-reveal><Pending>Faculty details to be provided</Pending></div>
          </div>
          <div className="people" data-stagger="0.07">
            {["Head of Department", "Lecturer", "Lecturer", "Lecturer"].map((r, i) => (
              <article className="person" key={i}>
                <div className="ph"><span className="mono">{d.name[0]}</span></div>
                <div className="meta"><b>Name to be updated</b><span>{r} · Qualification</span></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm" id="photos">
        <div className="frame">
          <div className="sec-head"><div><span className="eyebrow" data-reveal>Photos</span><Split>Inside the <em>department.</em></Split></div>
            <p className="lead" data-reveal>Classrooms, laboratories and activities of the Department of {d.name}.</p></div>
          <div className="bento" style={{ gridAutoRows: 220 }} data-stagger="0.08">
            {[d.img, "classroom", "students", "library3", "notebook"].map((k, i) => (
              <div className={"b" + (i === 0 ? " w2 h2" : "")} key={k + i}><Img k={k} w={900} alt="" /></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="calendar">
        <div className="frame">
          <div className="sec-head">
            <div><span className="eyebrow" data-reveal>Academic calendar</span><Split>The year <em>at a glance.</em></Split></div>
            <div data-reveal><Pending>Dates to be published</Pending></div>
          </div>
          <div className="table-wrap" data-reveal>
            <table>
              <caption className="sr">Academic calendar for the Department of {d.name}</caption>
              <thead><tr><th>Event</th><th>Applies to</th><th>Date</th></tr></thead>
              <tbody>{CAL.map((r) => <tr key={r[0]}><td><b>{r[0]}</b></td><td>{r[1]}</td><td>{r[2]}</td></tr>)}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-sm ivory">
        <div className="frame">
          <div className="sec-head"><div><span className="eyebrow" data-reveal>Explore more</span><Split>Other <em>departments</em></Split></div>
            <Link className="link-arrow" to="/departments">All departments<Icon name="arrowUR" /></Link></div>
          <div className="cards-3" data-stagger="0.08">{others.map((x) => <DeptCard d={x} key={x.id} />)}</div>
        </div>
      </section>
    </>
  );
}

import { Link } from "react-router-dom";
import SDGS from "../data.js";
import Icon from "../components/Icon.jsx";
import { Img, PageHero, Split } from "../components/ui.jsx";

export function DeptCard({ d, showProgramme }) {
  return (
    <Link className="dept-card" to={"/departments/" + d.id}>
      <Img k={d.img} w={800} alt={"Department of " + d.name + ", S.D.G.S College Hindupur"} />
      <span className="chip stream">{d.stream}</span>
      <span className="go"><Icon name="arrowUR" /></span>
      <h3>{d.name}</h3>
      {showProgramme && <span style={{ fontSize: ".82rem", color: "var(--gold-2)", fontWeight: 700, marginTop: 6 }}>{d.programme}</span>}
      <p>{d.about}</p>
    </Link>
  );
}

export default function Departments() {
  const streams = ["Science", "Computing", "Commerce", "Management", "Arts"];
  return (
    <>
      <PageHero title={<>Nine departments. <em>Endless</em> paths.</>} img="lab" ghost="09" crumbs={[{ t: "Departments" }]}
        lead="S.D.G.S College Hindupur has nine academic departments across science, computing, commerce, management and arts. Each department has its own vision, faculty, labs and academic calendar." />
      <section className="section">
        <div className="frame">
          <div className="sec-head">
            <div>
              <span className="eyebrow" data-reveal>Departments of study</span>
              <Split>Choose your <em>discipline.</em></Split>
            </div>
            <div className="filters" data-reveal>{streams.map((s) => <span className="chip chip-light" key={s}>{s}</span>)}</div>
          </div>
          <div className="cards-3" data-stagger="0.07">
            {SDGS.departments.map((d) => <DeptCard d={d} key={d.id} showProgramme />)}
          </div>
        </div>
      </section>
      <section className="section-sm ivory">
        <div className="frame band-row">
          <p className="lead" data-reveal>Intermediate groups (MPC, BiPC, MBiPC, CEC, MEC, HEC) are taught by the same departments.</p>
          <Link className="btn" to="/academics#programmes" data-reveal>See all programmes<Icon name="arrow" /></Link>
        </div>
      </section>
    </>
  );
}

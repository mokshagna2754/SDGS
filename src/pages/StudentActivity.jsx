import { Link, useParams } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import { Img, PageHero, Pending, Split } from "../components/ui.jsx";
import NotFound from "./NotFound.jsx";
import { ACTIVITIES, ActivityCard } from "./Students.jsx";

export default function StudentActivity() {
  const { id } = useParams();
  const a = ACTIVITIES.find((x) => x.id === id);
  if (!a) return <NotFound />;
  const others = ACTIVITIES.filter((x) => x.id !== a.id);

  return (
    <>
      <PageHero title={a.h} img={a.img} crumbs={[{ t: "Students Corner", to: "/students" }, { t: a.nav }]} lead={a.lead} />
      <div className="subnav">
        <div className="frame">
          <nav className="subnav-in" aria-label="Students Corner">
            <Link to="/students">Overview</Link>
            {ACTIVITIES.map((x) => (
              <Link key={x.id} to={"/students/" + x.id} className={x.id === a.id ? "on" : ""} aria-current={x.id === a.id ? "page" : undefined}>{x.nav}</Link>
            ))}
          </nav>
        </div>
      </div>

      <section className="section" id="overview">
        <div className="frame split-2">
          <div className="prose">
            <span className="eyebrow" data-reveal>{a.eyebrow}</span>
            <Split style={{ margin: "14px 0 20px" }}>{a.sub}</Split>
            <p className="lead" data-reveal>{a.lead}</p>
            <ul className="check-list" data-stagger="0.07" style={{ margin: "22px 0 26px" }}>
              {a.points.map((p) => <li key={p}><Icon name="checkCircle" />{p}</li>)}
            </ul>
            <div className="doc" data-reveal style={{ maxWidth: 440 }}>
              <i><Icon name={a.icon} /></i>
              <div><b>{a.person[0]}</b><span>{a.person[1]} · name and photo to be added</span></div>
            </div>
          </div>
          <div>
            <div className="media img-reveal"><Img k={a.img} w={1100} alt={a.eyebrow + " at S.D.G.S College Hindupur"} /></div>
            <div style={{ marginTop: 14 }} data-reveal><Pending>Event photos to be provided</Pending></div>
          </div>
        </div>
      </section>

      <section className="section-sm ivory">
        <div className="frame">
          <div className="sec-head">
            <div>
              <span className="eyebrow" data-reveal>Students corner</span>
              <Split>More of <em>campus life.</em></Split>
            </div>
            <Link className="link-arrow" to="/students" data-reveal>All activities<Icon name="arrowUR" /></Link>
          </div>
          <div className="cards-3" data-stagger="0.08">
            {others.map((x) => <ActivityCard a={x} key={x.id} />)}
          </div>
        </div>
      </section>
    </>
  );
}

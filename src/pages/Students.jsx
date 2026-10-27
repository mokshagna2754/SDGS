import Icon from "../components/Icon.jsx";
import { Img, PageHero, Pending, Split, SubNav } from "../components/ui.jsx";

const BLOCKS = [
  {
    id: "ncc", eyebrow: "National Cadet Corps", h: <>NCC: <em>Unity</em> and discipline.</>, img: "sports",
    lead: "The NCC unit at S.D.G.S College Hindupur trains cadets in drill, leadership, adventure and national service, guided by the college's Care Taker Officer (CTO).",
    points: ["Drill, parade and weapon training as per NCC syllabus", "Annual training camps and national integration camps", "B and C certificate examinations", "Republic Day and Independence Day parades"],
    person: ["Care Taker Officer (CTO)", "NCC Unit, S.D.G.S College"], icon: "flag"
  },
  {
    id: "nss", eyebrow: "National Service Scheme", h: <>NSS: <em>Not me,</em> but you.</>, img: "friends",
    lead: "NSS volunteers at S.D.G.S College Hindupur lead community service, health and awareness drives, blood donation, tree plantation and special camps in nearby villages.",
    points: ["Regular community service activities", "Seven-day special camps in adopted villages", "Blood donation, health and literacy drives", "Swachh Bharat and environmental campaigns"],
    person: ["NSS Programme Officer", "NSS Unit, S.D.G.S College"], icon: "heart"
  },
  {
    id: "sports", eyebrow: "Sports & cultural activities", h: <>Where every <em>talent</em> finds a stage.</>, img: "crowd",
    lead: "Sports and cultural activities at S.D.G.S College are led by the Physical Education Teacher (PET) and cultural committee, with inter-collegiate tournaments, annual sports meet and cultural fests.",
    points: ["Athletics, kabaddi, kho-kho, volleyball, cricket and more", "Inter-collegiate and university-level tournaments", "Annual day, cultural fest and talent shows", "Music, dance, drama and literary competitions"],
    person: ["Physical Education Teacher (PET)", "Department of Physical Education"], icon: "trophy"
  }
];

export default function Students() {
  return (
    <>
      <PageHero title={<>Students <em>corner.</em></>} img="crowd" crumbs={[{ t: "Students Corner" }]}
        lead="Life at S.D.G.S College goes far beyond lectures. NCC, NSS, sports and cultural activities build discipline, service and confidence in every student." />
      <SubNav items={[["ncc", "NCC"], ["nss", "NSS"], ["sports", "Sports & Cultural"]]} />
      {BLOCKS.map((b, i) => (
        <section className={"section" + (i % 2 ? " ivory" : "")} id={b.id} key={b.id}>
          <div className={"frame split-2" + (i % 2 ? " rev" : "")}>
            <div className="prose">
              <span className="eyebrow" data-reveal>{b.eyebrow}</span>
              <Split style={{ margin: "14px 0 20px" }}>{b.h}</Split>
              <p className="lead" data-reveal>{b.lead}</p>
              <ul className="check-list" data-stagger="0.07" style={{ margin: "22px 0 26px" }}>{b.points.map((p) => <li key={p}><Icon name="checkCircle" />{p}</li>)}</ul>
              <div className="doc" data-reveal style={{ maxWidth: 440 }}>
                <i><Icon name={b.icon} /></i><div><b>{b.person[0]}</b><span>{b.person[1]} · name and photo to be added</span></div>
              </div>
            </div>
            <div>
              <div className="media img-reveal"><Img k={b.img} w={1100} alt={b.eyebrow + " at S.D.G.S College Hindupur"} /></div>
              <div style={{ marginTop: 14 }} data-reveal><Pending>Event photos to be provided</Pending></div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

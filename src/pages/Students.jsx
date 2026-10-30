import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import { Img, PageHero, Split } from "../components/ui.jsx";

export const ACTIVITIES = [
  {
    id: "ncc",
    nav: "NCC",
    chip: "Cadet corps",
    eyebrow: "National Cadet Corps",
    h: <>NCC: <em>Unity</em> and discipline.</>,
    img: "students",
    sub: <>Cadets trained for <em>service.</em></>,
    lead: "The NCC unit at S.D.G.S College Hindupur trains cadets in drill, leadership, adventure and national service, guided by the college's Care Taker Officer (CTO).",
    blurb: "Discipline, drill and leadership. The NCC unit shapes confident cadets ready to serve the nation.",
    points: ["Drill, parade and weapon training as per NCC syllabus", "Annual training camps and national integration camps", "B and C certificate examinations", "Republic Day and Independence Day parades"],
    person: ["Care Taker Officer (CTO)", "NCC Unit, S.D.G.S College"],
    icon: "flag"
  },
  {
    id: "nss",
    nav: "NSS",
    chip: "Service",
    eyebrow: "National Service Scheme",
    h: <>NSS: <em>Not me,</em> but you.</>,
    img: "friends",
    sub: <>Service that starts <em>here.</em></>,
    lead: "NSS volunteers at S.D.G.S College Hindupur lead community service, health and awareness drives, blood donation, tree plantation and special camps in nearby villages.",
    blurb: "Not me, but you. NSS volunteers lead community service, awareness drives and special camps.",
    points: ["Regular community service activities", "Seven-day special camps in adopted villages", "Blood donation, health and literacy drives", "Swachh Bharat and environmental campaigns"],
    person: ["NSS Programme Officer", "NSS Unit, S.D.G.S College"],
    icon: "heart"
  },
  {
    id: "sports",
    nav: "Sports",
    chip: "Games",
    eyebrow: "Sports",
    h: <>Sports: play with <em>purpose.</em></>,
    img: "sports",
    sub: <>On the <em>field.</em></>,
    lead: "Sports at S.D.G.S College are led by the Physical Education Teacher (PET), with athletics, team games, the annual sports meet and inter-collegiate tournaments.",
    blurb: "Athletics and team sports, from the annual sports meet to university-level tournaments.",
    points: ["Athletics, kabaddi, kho-kho, volleyball, cricket and more", "Inter-collegiate and university-level tournaments", "Annual sports meet", "Coaching and fitness with the Physical Education Teacher"],
    person: ["Physical Education Teacher (PET)", "Department of Physical Education"],
    icon: "trophy"
  },
  {
    id: "culturals",
    nav: "Culturals",
    chip: "Stage",
    eyebrow: "Cultural activities",
    h: <>Where every <em>talent</em> finds a stage.</>,
    img: "crowd",
    sub: <>On the <em>stage.</em></>,
    lead: "Cultural life at S.D.G.S College is led by the cultural committee, with the annual day, cultural fests and competitions in music, dance, drama and literature.",
    blurb: "Annual day, music, dance, drama and literary events where every talent finds a stage.",
    points: ["Annual day, cultural fest and talent shows", "Music, dance, drama and literary competitions", "Stage programmes for college events", "A platform for every student to perform"],
    person: ["Cultural Committee", "S.D.G.S College"],
    icon: "music"
  }
];

const LEGACY = { ncc: "/students/ncc", nss: "/students/nss", sports: "/students/sports", culturals: "/students/culturals", cultural: "/students/culturals" };

export function ActivityCard({ a }) {
  return (
    <Link className="dept-card" to={"/students/" + a.id}>
      <Img k={a.img} w={800} alt={a.eyebrow + " at S.D.G.S College Hindupur"} />
      <span className="chip stream">{a.chip}</span>
      <span className="go"><Icon name="arrowUR" /></span>
      <h3>{a.nav}</h3>
      <p>{a.blurb}</p>
    </Link>
  );
}

export default function Students() {
  const { hash } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const id = hash.replace("#", "");
    if (LEGACY[id]) navigate(LEGACY[id], { replace: true });
  }, [hash, navigate]);

  return (
    <>
      <PageHero title={<>Students <em>corner.</em></>} img="crowd" crumbs={[{ t: "Students Corner" }]}
        lead="Life at S.D.G.S College goes far beyond lectures. NCC, NSS, sports and cultural activities each have their own page, and each builds discipline, service and confidence." />
      <section className="section">
        <div className="frame">
          <div className="sec-head">
            <div>
              <span className="eyebrow" data-reveal>Student life</span>
              <Split>Four ways to <em>take part.</em></Split>
            </div>
            <p className="lead" data-reveal>Open NCC, NSS, Sports or Culturals for activities, the faculty in charge, and space for event photos.</p>
          </div>
          <div className="cards-4" data-stagger="0.07">
            {ACTIVITIES.map((a) => <ActivityCard a={a} key={a.id} />)}
          </div>
        </div>
      </section>
    </>
  );
}

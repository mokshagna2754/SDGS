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
    img: "realNccParade",
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
    img: "realNss",
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
  },
  {
    id: "achievements",
    group: "support",
    nav: "Achievements",
    chip: "Pride",
    eyebrow: "Achievements",
    h: <>Achievements we are <em>proud</em> of.</>,
    img: "realWomensTeam",
    sub: <>Wins worth <em>celebrating.</em></>,
    lead: "S.D.G.S College students bring home university ranks, sports trophies, NCC honours and cultural prizes. This page celebrates their achievements.",
    blurb: "University ranks, sports trophies, NCC honours and cultural prizes won by S.D.G.S students.",
    points: ["University ranks and academic toppers", "Sports and inter-collegiate championships", "NCC and NSS honours and certificates", "Cultural and literary competition prizes"],
    person: ["Achievements Committee", "S.D.G.S College"],
    icon: "award"
  },
  {
    id: "placements",
    group: "support",
    nav: "Placements & Career",
    chip: "Careers",
    eyebrow: "Placements and career",
    h: <>From campus to <em>career.</em></>,
    img: "graduation",
    sub: <>Ready for <em>work.</em></>,
    lead: "The placement and career guidance cell at S.D.G.S College prepares students for jobs and higher studies through training, campus drives and career counselling.",
    blurb: "Campus drives, skill training and career guidance for jobs and higher studies.",
    points: ["Campus recruitment drives and job melas", "Soft skills, aptitude and interview training", "Career counselling for higher studies", "Guidance for competitive examinations"],
    person: ["Placement Officer", "Placement & Career Guidance Cell"],
    icon: "briefcase"
  },
  {
    id: "scholarships",
    group: "support",
    nav: "Scholarships",
    chip: "Support",
    eyebrow: "Scholarships and internships",
    h: <>Scholarships & <em>opportunities.</em></>,
    img: "study",
    sub: <>Support for <em>every</em> student.</>,
    lead: "S.D.G.S College helps students apply for government scholarships and national internship and learning programmes. Use the official links below to register.",
    blurb: "Government scholarships, PM Internship, AICTE Internship, IIC and SWAYAM Plus.",
    points: ["Guidance on government scholarship applications", "Help with internship registrations", "Innovation and start-up support through IIC", "Online skill courses through SWAYAM Plus"],
    links: [
      ["PM Internship", "Prime Minister's Internship Scheme", "https://pminternship.mca.gov.in/"],
      ["AICTE Internship", "AICTE internship portal", "https://internship.aicte-india.org/"],
      ["IIC", "Institution's Innovation Council", "https://iic.mic.gov.in/"],
      ["SWAYAM Plus", "Industry-aligned online courses", "https://swayamplus.education.gov.in/"]
    ],
    person: ["Scholarship Cell", "S.D.G.S College"],
    icon: "cap"
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
        lead="Life at S.D.G.S College goes far beyond lectures. NCC, NSS, sports and cultural activities build discipline, service and confidence, while achievements, placements and scholarships support every student's growth." />
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
            {ACTIVITIES.filter((a) => !a.group).map((a) => <ActivityCard a={a} key={a.id} />)}
          </div>
        </div>
      </section>
      <section className="section-sm ivory">
        <div className="frame">
          <div className="sec-head">
            <div>
              <span className="eyebrow" data-reveal>Growth & support</span>
              <Split>Beyond the <em>classroom.</em></Split>
            </div>
            <p className="lead" data-reveal>Student achievements, placements and career guidance, and scholarship and internship links.</p>
          </div>
          <div className="cards-3" data-stagger="0.07">
            {ACTIVITIES.filter((a) => a.group).map((a) => <ActivityCard a={a} key={a.id} />)}
          </div>
        </div>
      </section>
    </>
  );
}

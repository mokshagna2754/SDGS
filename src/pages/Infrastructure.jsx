import Icon from "../components/Icon.jsx";
import { Img, PageHero, Split, SubNav } from "../components/ui.jsx";

const ITEMS = [
  { id: "library", ic: "book", tag: "Library", img: "library2", h: <>A library for <em>deep</em> work.</>, p: "The central library offers textbooks, reference works, journals and newspapers, with a calm reading hall for self-study. A dedicated librarian helps students find what they need.", pts: ["Reference and text book sections", "Journals, magazines and newspapers", "Reading hall for self-study", "Guidance from the librarian"] },
  { id: "labs", ic: "microscope", tag: "Labs", img: "chem", h: <>Learn by <em>doing.</em></>, p: "Laboratories for physics, chemistry, botany, zoology and computer science give students hands-on practice alongside theory.", pts: ["Physics and chemistry labs", "Botany and zoology labs", "Computer labs with internet"] },
  { id: "eclassrooms", ic: "cpu", tag: "E-classrooms", img: "classroom", h: <>Classrooms gone <em>digital.</em></>, p: "E-classrooms with projectors and digital teaching aids bring presentations, videos and online resources straight into everyday lectures.", pts: ["Projector and screen in every e-classroom", "Digital content and online lectures", "Interactive, visual teaching"] },
  { id: "videoconf", ic: "users", tag: "Video conference hall", img: "laptop", h: <>Experts, <em>one call</em> away.</>, p: "The video conference hall connects students with experts, universities and webinars from anywhere, without leaving the campus.", pts: ["Webinars and online guest lectures", "University and government video meetings", "Virtual workshops and trainings"] },
  { id: "seminar", ic: "mic", tag: "Seminar hall", img: "realSeminarHall", h: <>Where ideas are <em>shared.</em></>, p: "The seminar hall hosts department seminars, guest lectures, workshops and student presentations throughout the year.", pts: ["Department seminars and workshops", "Guest lectures and orientations", "Student paper presentations"] },
  { id: "auditorium", ic: "mic", tag: "Auditorium", img: "crowd", h: <>A stage for <em>every</em> voice.</>, p: "The auditorium hosts cultural programmes, celebrations, award functions and the annual day.", pts: ["Cultural events and annual day", "Orientation and award functions", "College-wide celebrations"] },
  { id: "sports", ic: "trophy", tag: "Sports", img: "sports", h: <>Grounds that build <em>champions.</em></>, p: "Outdoor grounds and indoor games facilities support athletics, team sports and fitness, coached by the Physical Education Teacher.", pts: ["Playground for outdoor games", "Indoor games equipment", "Annual sports meet", "Inter-collegiate participation"] }
];

const OTHER = [
  { id: "rainwater", ic: "drop", h: "Rain water harvesting", p: "Rooftop rainwater is collected to recharge groundwater, a practical lesson in sustainability for every student." },
  { id: "solar", ic: "sun", h: "Solar system", p: "Solar panels on campus generate clean energy, reducing the college's carbon footprint and electricity costs." },
  { id: "water", ic: "glass", h: "Mineral water facility", p: "A mineral water plant provides safe, purified drinking water for students and staff across the campus." },
  { id: "ambedkar", ic: "landmark", h: "Dr. B. R. Ambedkar Study Centre", p: "A dedicated study centre with books and resources for self-study, competitive exam preparation and reading." }
];

export default function Infrastructure() {
  return (
    <>
      <PageHero title={<>Campus & <em>infrastructure.</em></>} img="library" crumbs={[{ t: "Infrastructure" }]}
        lead="The S.D.G.S College campus in Hindupur includes a central library, laboratories, e-classrooms, a video conference hall, a seminar hall, an auditorium and sports facilities, along with solar power, rain water harvesting, a mineral water facility and the Dr. B. R. Ambedkar Study Centre." />
      <SubNav items={ITEMS.map((i) => [i.id, i.tag]).concat([["other", "Other Facilities"]])} />
      <section className="section-sm">
        <div className="frame">
          {ITEMS.map((it) => (
            <article className="infra-row" id={it.id} key={it.id}>
              <div className="media img-reveal"><Img k={it.img} w={1100} alt={it.tag + " at S.D.G.S College Hindupur"} /></div>
              <div>
                <span className="tag" data-reveal><i><Icon name={it.ic} /></i>{it.tag}</span>
                <Split>{it.h}</Split>
                <p className="lead" data-reveal>{it.p}</p>
                <ul className="check-list" data-stagger="0.06" style={{ marginTop: 20 }}>{it.pts.map((p) => <li key={p}><Icon name="checkCircle" />{p}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section ivory" id="other" aria-labelledby="other-h">
        <div className="frame">
          <div className="sec-head">
            <div>
              <span className="eyebrow" data-reveal>Other facilities</span>
              <Split id="other-h">A greener, <em>caring</em> campus.</Split>
            </div>
            <p className="lead" data-reveal>Sustainability and student welfare facilities that support everyday life at S.D.G.S.</p>
          </div>
          <div className="cards-4" data-stagger="0.07">
            {OTHER.map((o) => (
              <article className="card" id={o.id} key={o.id}><span className="ic"><Icon name={o.ic} /></span><h3>{o.h}</h3><p>{o.p}</p></article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

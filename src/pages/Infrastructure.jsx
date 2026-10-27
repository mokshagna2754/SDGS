import Icon from "../components/Icon.jsx";
import { Img, PageHero, Split, SubNav } from "../components/ui.jsx";

const ITEMS = [
  { id: "library", ic: "book", tag: "Library", img: "library2", h: <>A library for <em>deep</em> work.</>, p: "The central library offers textbooks, reference works, journals and newspapers, with a calm reading hall for self-study. A dedicated librarian helps students find what they need.", pts: ["Reference and text book sections", "Journals, magazines and newspapers", "Reading hall for self-study", "Guidance from the librarian"] },
  { id: "sports", ic: "trophy", tag: "Sports", img: "sports", h: <>Grounds that build <em>champions.</em></>, p: "Outdoor grounds and indoor games facilities support athletics, team sports and fitness, coached by the Physical Education Teacher.", pts: ["Playground for outdoor games", "Indoor games equipment", "Annual sports meet", "Inter-collegiate participation"] },
  { id: "auditorium", ic: "mic", tag: "Auditorium", img: "auditorium", h: <>A stage for <em>every</em> voice.</>, p: "The auditorium hosts seminars, guest lectures, cultural programmes, orientations and celebrations throughout the year.", pts: ["Seminars and guest lectures", "Cultural events and annual day", "Orientation and award functions"] },
  { id: "rainwater", ic: "drop", tag: "Rain water harvesting", img: "study", h: <>Saving <em>every</em> monsoon.</>, p: "Rain water harvesting structures on campus collect rainwater to recharge groundwater, a practical lesson in sustainability for every student.", pts: ["Rooftop rainwater collection", "Groundwater recharge", "Part of the green campus initiative"] },
  { id: "solar", ic: "sun", tag: "Solar system", img: "solar", h: <>Powered by the <em>sun.</em></>, p: "Solar panels on campus generate clean energy, reducing the college's carbon footprint and electricity costs.", pts: ["Rooftop solar power generation", "Lower carbon footprint", "Green campus commitment"] },
  { id: "water", ic: "glass", tag: "Water purifiers", img: "emptyClass", h: <>Safe water, <em>always.</em></>, p: "Water purifiers installed across the campus provide safe drinking water for students and staff.", pts: ["Purified drinking water points", "Regular maintenance", "Accessible across campus"] },
  { id: "buildings", ic: "building", tag: "Campus buildings", img: "campus", h: <>Spaces that <em>inspire.</em></>, p: "Spacious classroom blocks, staff rooms, administrative offices and open spaces make up the S.D.G.S campus in Hindupur.", pts: ["Spacious, ventilated classrooms", "Administrative and examination blocks", "Open green spaces"] },
  { id: "labs", ic: "microscope", tag: "Labs", img: "chem", h: <>Learn by <em>doing.</em></>, p: "Laboratories for physics, chemistry, botany, zoology and computer science give students hands-on practice alongside theory.", pts: ["Physics and chemistry labs", "Botany and zoology labs", "Computer labs with internet"] }
];

export default function Infrastructure() {
  return (
    <>
      <PageHero title={<>Campus & <em>infrastructure.</em></>} img="library" crumbs={[{ t: "Infrastructure" }]}
        lead="The S.D.G.S College campus in Hindupur includes a central library, science and computer laboratories, an auditorium, sports facilities, solar power, rain water harvesting and water purifiers." />
      <SubNav items={ITEMS.map((i) => [i.id, i.tag])} />
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
    </>
  );
}

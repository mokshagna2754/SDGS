import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import { Img, PageHero, Split, SubNav } from "../components/ui.jsx";

/* Full "Read more" page behind the About SDGS sections.
   All wording here comes from the college's own content document. */

const WHY = [
  { ic: "cap", h: "Academic excellence", p: "A diverse range of undergraduate and postgraduate programmes, including BA, B.Sc, B.Com, BBA and MBA, guided by highly qualified and deeply supportive faculty." },
  { ic: "microscope", h: "Cutting-edge laboratories", p: "Advanced, fully equipped science and computer labs emphasise practical knowledge, so students keep pace with modern technical and scientific innovation." },
  { ic: "shield", h: "National Cadet Corps (NCC)", p: "Cultivating discipline, leadership and a spirit of patriotism, our active NCC wing grooms students for careers in defence and character-driven leadership." },
  { ic: "heart", h: "National Service Scheme (NSS)", p: "Instilling civic responsibility, our NSS volunteers regularly lead community development, health camps and social awareness initiatives." },
  { ic: "building", h: "Comprehensive campus facilities", p: "An expansive, well-stocked central library, audio-visual classrooms, active sports infrastructure and a dedicated career placement cell partnered with leading firms." }
];

const MISSION = [
  ["Academic excellence", "To provide high-quality, inclusive and affordable education supported by state-of-the-art laboratory infrastructure and experiential learning practices."],
  ["Holistic development", "To foster leadership, discipline and a deep spirit of patriotism through active engagement in national initiatives like the National Cadet Corps (NCC)."],
  ["Social responsibility", "To instil civic consciousness, empathy and community-driven mindsets by empowering students through the National Service Scheme (NSS)."],
  ["Skill & employability", "To bridge the gap between classroom education and industry demands, equipping students with modern technical, scientific and corporate readiness skills."]
];

const MGMT = [
  { name: "Bysani Ram Prasad", q: "M.B.A", role: "Secretary & Correspondent", photo: "mgmt-ram-prasad" },
  { name: "Revur Chandra Mohan", q: "B.A", role: "President", photo: "mgmt-chandra-mohan" },
  { name: "Dasa V. Suresh", q: "M.Com", role: "Vice President", photo: "mgmt-suresh" },
  { name: "Dasa Gangadhar", q: "M.Com", role: "Joint Secretary", photo: "mgmt-gangadhar" },
  { name: "K. S. Nanda Kishore", q: "", role: "Treasurer", photo: "mgmt-nanda-kishore" }
];

const MOMENTS = [
  ["realNccGuard", "NCC guard of honour"],
  ["realNss", "NSS Swachh Bharat drive"],
  ["realYoga", "International Yoga Day"],
  ["realCollegeDay", "College Day, Jagruthi 2022"],
  ["realComputerLab", "Computer lab"],
  ["realMemorial", "Founder's memorial on campus"]
];

export default function AboutStory() {
  return (
    <>
      <PageHero title={<>Shaping futures, building <em>leaders</em> since 1965.</>} img="realCampus" ghost="1965"
        crumbs={[{ t: "About SDGS", to: "/about" }, { t: "Our story" }]}
        lead="The full story of S.D.G.S Degree College, Hindupur: who we are, why students choose us, our vision and mission, our founder, our history, our management and our principal." />
      <SubNav items={[["about", "About"], ["why", "Why SDGS"], ["vision-mission", "Vision & Mission"], ["founder-story", "Founder"], ["our-history", "History"], ["management-team", "Management"], ["principal-profile", "Principal"]]} />

      {/* ---------- About ---------- */}
      <section className="section" id="about" aria-labelledby="ab-h">
        <div className="frame split-2">
          <div className="prose">
            <span className="eyebrow" data-reveal>About S.D.G.S</span>
            <Split id="ab-h" style={{ margin: "14px 0 20px" }}>One of the region's <em>premier</em> institutions.</Split>
            <p className="lead" data-reveal>SDGS Degree College, established in 1965, stands as one of the region's premier institutions dedicated to higher learning, fostering academic excellence and holistic student development.</p>
            <p data-reveal>What started as a foundational centre for education has grown into a vibrant institution offering comprehensive degree courses, supported by state-of-the-art labs that cultivate practical expertise and scientific curiosity.</p>
            <p data-reveal>Nestled on a student-centric campus, the college offers an environment where academic focus and co-curricular excellence thrive hand in hand. Through active NCC and NSS units, the institution instils leadership, discipline and community service in its students, grooming the next generation of responsible citizens and skilled professionals.</p>
          </div>
          <div className="media img-reveal"><Img k="realCampus" alt="Main building of Saradamba Dasa Govindiah Setty College, Hindupur" /></div>
        </div>
      </section>

      {/* ---------- Welcome + Why choose ---------- */}
      <section className="section ivory" id="why" aria-labelledby="why-h">
        <div className="frame">
          <div className="sec-head">
            <div>
              <span className="eyebrow" data-reveal>Welcome to SDGS Degree College, Hindupur</span>
              <Split id="why-h">Why choose <em>SDGS?</em></Split>
            </div>
            <p className="lead" data-reveal>With a rich legacy of over six decades, SDGS has been a pioneer of quality higher education in the region. Affiliated with Sri Krishnadevaraya University and accredited by NAAC with a B+ grade, we deliver affordable, industry-aligned education that bridges classroom learning with real-world success.</p>
          </div>
          <p className="muted" data-reveal style={{ maxWidth: "62ch", marginBottom: 32 }}>At SDGS, we don't just focus on textbook learning. We foster holistic development to prepare our students as the future architects of India.</p>
          <div className="cards-3" data-stagger="0.08">
            {WHY.map((w) => (
              <div className="card" key={w.h}><span className="ic"><Icon name={w.ic} /></span><h3>{w.h}</h3><p>{w.p}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Vision & Mission ---------- */}
      <section className="section-sm" id="vision-mission" aria-labelledby="vm-h">
        <div className="frame">
          <h2 id="vm-h" className="sr">Vision and mission of S.D.G.S College</h2>
          <div className="vm">
            <article className="vm-card v" data-reveal="left">
              <div className="big">Our vision</div>
              <p>To emerge as a premier centre of higher education that empowers students through academic excellence, innovative skill-building and strong ethical values, transforming them into globally competent and socially responsible leaders.</p>
            </article>
            <article className="vm-card m" data-reveal="right">
              <div className="big">Our mission</div>
              <ul>
                {MISSION.map(([h, t]) => (
                  <li key={h}><Icon name="checkCircle" /><span><b>{h}:</b> {t}</span></li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* ---------- Founder ---------- */}
      <section className="section" id="founder-story" aria-labelledby="fd-h">
        <div className="frame quote-wrap">
          <div className="portrait" data-reveal="scale">
            <Img k="founder" className="photo" alt="Late Sri Dasa N. Govindaiah Setty, Founder President of S.D.G.S College" />
            <div className="cap"><b>Sri Dasa N. Govindaiah Setty</b>Founder President</div>
          </div>
          <div className="prose">
            <span className="eyebrow" data-reveal>About the founder president</span>
            <Split id="fd-h" style={{ margin: "16px 0 22px" }}>A vision that <em>outlived</em> its time.</Split>
            <p className="lead" data-reveal>Late Sri Dasa N. Govindaiah Setty (born 15 November 1901) was the visionary founder of S.D.G.S. College, Hindupur. Born in Hindupur to Sri Dasa E. Narayanaiah and Smt. Hanumakka, he believed that education was the key to the progress of society.</p>
            <p data-reveal>Although he could not continue his formal education beyond the III Form, he was determined to provide higher education opportunities for the youth of the region. In 1965, he established the first degree college in Hindupur, making quality higher education accessible to thousands of students.</p>
            <p data-reveal>A successful businessman and philanthropist, he generously donated a substantial amount for the establishment of the college and supported many educational, religious and charitable institutions.</p>
            <p data-reveal>Known for his humility, simplicity, integrity and compassionate nature, he earned the respect and admiration of the community. His vision, generosity and dedication continue to inspire generations, and his legacy lives on through S.D.G.S. Junior &amp; Degree College, Hindupur, which remains committed to academic excellence and service to society.</p>
          </div>
        </div>
      </section>

      {/* ---------- History ---------- */}
      <section className="section ivory" id="our-history" aria-labelledby="hs-h">
        <div className="frame split-2" style={{ alignItems: "start" }}>
          <div style={{ position: "sticky", top: 150 }}>
            <span className="eyebrow" data-reveal>History</span>
            <Split id="hs-h" style={{ marginTop: 14 }}>From a donation to the region's <em>oldest</em> aided college.</Split>
            <div className="media img-reveal" style={{ marginTop: 30, aspectRatio: "16/10" }}><Img k="realNccGuard" alt="NCC cadets presenting a guard of honour at S.D.G.S College" /></div>
          </div>
          <div className="prose">
            <p className="lead" data-reveal>S.D.G.S. College was started in 1965 in Hindupur thanks to a large donation by Sri Dasa N. Govindaiah Setty and 60 other local businessmen.</p>
            <p data-reveal>Local leaders helped get the college affiliated with S. V. University, and it was officially inaugurated on December 21, 1965, by Sri V. V. Giri, the Governor of Mysore. To give the college its own home, the management bought 22 acres of land in Naneppanagar, and the government added another 7½ acres next to it. Chief Minister Sri Kasu Brahmananda Reddy laid the foundation stone for the new site in September 1966.</p>
            <p data-reveal>The college began offering science courses right away and expanded to include English medium classes and a B.Com. programme in the 1970s. Even though the founder sadly passed away in 1981, his son and other leaders continued his work. With help from public donations and the University Grants Commission, a new building opened in 1982. By 1985, the college added advanced Computer Science, M.B.A. courses and an Open University study centre.</p>
            <p data-reveal>Today, the campus covers 30 acres on the Hindupur-Lepakshi Road and stands as the oldest and largest aided college in the area, successfully serving generations of students under the guidance of dedicated leaders and its long-serving first principal, Sri K. Subramanyam.</p>
          </div>
        </div>
      </section>

      {/* ---------- Management ---------- */}
      <section className="section" id="management-team" aria-labelledby="mg-h">
        <div className="frame">
          <div className="sec-head">
            <div>
              <span className="eyebrow" data-reveal>Management</span>
              <Split id="mg-h">The people <em>behind</em> the legacy.</Split>
            </div>
          </div>
          <div className="people people-5" data-stagger="0.06">
            {MGMT.map((m) => (
              <article className="person" key={m.name}>
                <div className="ph"><Img k={"/assets/photos/refined/" + m.photo + ".webp"} alt={m.name + ", " + m.role} /></div>
                <div className="meta"><b>{m.name}{m.q && <small> {m.q}</small>}</b><span>{m.role}</span></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Principal ---------- */}
      <section className="section ivory" id="principal-profile" aria-labelledby="pr-h">
        <div className="frame quote-wrap">
          <div className="portrait" data-reveal="scale">
            <img className="ph" src="/assets/logo-sm.png" alt="" />
            <div className="cap"><b>Dr. B. Polaiah</b>Principal, M.Sc., Ph.D.</div>
          </div>
          <div className="prose">
            <span className="eyebrow" data-reveal>About the principal</span>
            <Split id="pr-h" style={{ margin: "16px 0 22px" }}>Science, service and <em>steady</em> leadership.</Split>
            <p className="lead" data-reveal>Dr. B. Polaiah is a highly accomplished academician, researcher and seasoned administrator who serves as Principal, bringing 28 years of total institutional experience to his leadership role.</p>
            <p data-reveal>Born, raised and educated through his undergraduate years in Nandyal, he pursued his higher studies at Sri Venkateswara University, Tirupati, where he earned both his Master of Science in Chemistry and a Ph.D. specialising in Radio Chemical Methods of Analysis.</p>
            <p data-reveal>Before stepping into institutional leadership as Principal, Dr. Polaiah dedicated 27 years to classroom teaching and mentorship as a Professor of Chemistry. His contribution to scientific research includes 13 peer-reviewed papers: 11 international and 2 national publications.</p>
            <p data-reveal>He has actively participated in national UGC and NAAC seminars on themes ranging from nanomaterials and molecular reactivity to the UGC XII Plan guidelines, ICT integration in academic libraries and innovative evaluation methods. His completion of a foundation course in human values and professional ethics reflects a leadership that bridges scientific innovation with values-based institutional growth.</p>
            <div className="stats stats-3" style={{ marginTop: 28 }}>
              <div className="stat"><b>28</b><span>Years of experience</span></div>
              <div className="stat"><b>27</b><span>Years teaching chemistry</span></div>
              <div className="stat"><b>13</b><span>Research papers</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Moments ---------- */}
      <section className="section" aria-labelledby="mo-h">
        <div className="frame">
          <div className="sec-head">
            <div>
              <span className="eyebrow" data-reveal>Life at SDGS</span>
              <Split id="mo-h">Moments from <em>campus.</em></Split>
            </div>
            <Link className="link-arrow" to="/gallery" data-reveal>View full gallery<Icon name="arrowUR" /></Link>
          </div>
          <div className="moments" data-stagger="0.06">
            {MOMENTS.map(([k, cap]) => (
              <figure key={k}><Img k={k} alt={cap + " at S.D.G.S College Hindupur"} /><figcaption>{cap}</figcaption></figure>
            ))}
          </div>
          <div style={{ marginTop: 40 }} data-reveal><Link className="btn" to="/about">Back to About SDGS<Icon name="arrow" /></Link></div>
        </div>
      </section>
    </>
  );
}

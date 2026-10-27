import Icon from "../components/Icon.jsx";
import { Img, LeadForm, PageHero, Pending, Split } from "../components/ui.jsx";

export default function Alumni() {
  return (
    <>
      <PageHero title={<>Once S.D.G.S, <em>always</em> S.D.G.S.</>} img="graduation" crumbs={[{ t: "Alumni" }]}
        lead="The S.D.G.S College alumni network connects six decades of graduates from Hindupur who now serve as teachers, doctors, officers, entrepreneurs and leaders." />

      <section className="section">
        <div className="frame">
          <div className="sec-head">
            <div><span className="eyebrow" data-reveal>Why join</span><Split>Stay <em>connected</em> to where it began.</Split></div>
            <p className="lead" data-reveal>The alumni network keeps graduates in touch with the college and with each other, across six decades of batches.</p>
          </div>
          <div className="cards-4" data-stagger="0.08">
            {[["users", "Reconnect", "Find classmates and teachers from your batch."], ["heart", "Mentor", "Guide current students on careers and higher studies."], ["briefcase", "Opportunities", "Share jobs, internships and business contacts."], ["calendar", "Reunions", "Join homecomings and the diamond jubilee celebrations."]].map(([i, h, p]) => (
              <article className="card spot" key={h}><span className="ic"><Icon name={i} /></span><h3>{h}</h3><p>{p}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section ivory">
        <div className="frame">
          <div className="sec-head">
            <div><span className="eyebrow" data-reveal>Distinguished alumni</span><Split>Faces of our <em>legacy.</em></Split></div>
            <div data-reveal><Pending>Alumni profiles to be provided</Pending></div>
          </div>
          <div className="people" data-stagger="0.07">
            {["Batch of 19XX", "Batch of 19XX", "Batch of 20XX", "Batch of 20XX"].map((b, i) => (
              <article className="person" key={i}>
                <div className="ph"><span className="mono"><Icon name="cap" style={{ width: 38, height: 38 }} /></span></div>
                <div className="meta"><b>Alumnus name</b><span>{b} · Designation</span></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark on-dark" id="register" style={{ overflow: "hidden" }}>
        <div className="dark-glow"></div>
        <div className="frame split-2" style={{ position: "relative" }}>
          <div>
            <span className="eyebrow" data-reveal>Alumni registration</span>
            <Split style={{ marginTop: 14 }}>Add your name to <em>sixty years</em> of history.</Split>
            <p className="lead" data-reveal style={{ marginTop: 18 }}>Register with the S.D.G.S alumni network to receive reunion invites and opportunities to give back.</p>
            <div className="media img-reveal" style={{ marginTop: 30, aspectRatio: "16/10" }}><Img k="friends" w={1000} alt="S.D.G.S alumni reunion" /></div>
          </div>
          <div className="finder-card on-glass" style={{ minHeight: 0 }} data-reveal="scale">
            <h3 style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: "2rem", marginBottom: 18 }}>Register as alumni</h3>
            <LeadForm id="alumni" kind="alumni" fields="alumni" glass cta="Register" />
          </div>
        </div>
      </section>
    </>
  );
}

import SDGS from "../data.js";
import Icon from "../components/Icon.jsx";
import { LeadForm, PageHero, Social, Split } from "../components/ui.jsx";

const C = SDGS.contact;

export default function Contact() {
  return (
    <>
      <PageHero title={<>Let's <em>talk.</em></>} img="campus" crumbs={[{ t: "Contact Us" }]}
        lead="S.D.G.S College is located in Hindupur, Sri Sathya Sai District, Andhra Pradesh. Call +91 63017 76991, email us, or send a message and our office will respond." />
      <section className="section">
        <div className="frame">
          <div className="cards-3" data-stagger="0.08" style={{ marginBottom: 60 }}>
            <a className="card spot" href={"tel:" + C.tel}><span className="ic"><Icon name="phone" /></span><h3>Call us</h3><p>{C.phone}</p><span className="link-arrow">Call now<Icon name="arrowUR" /></span></a>
            <a className="card spot" href={"mailto:" + C.email}><span className="ic"><Icon name="mail" /></span><h3>Email us</h3><p style={{ wordBreak: "break-all" }}>{C.email}</p><span className="link-arrow">Write to us<Icon name="arrowUR" /></span></a>
            <a className="card spot" href={"https://wa.me/" + C.whatsapp} target="_blank" rel="noopener"><span className="ic"><Icon name="whatsapp" /></span><h3>WhatsApp</h3><p>Quick answers on admissions and fees.</p><span className="link-arrow">Start chat<Icon name="arrowUR" /></span></a>
          </div>
          <div className="split-2" style={{ alignItems: "start" }}>
            <div>
              <span className="eyebrow" data-reveal>Send a message</span>
              <Split style={{ margin: "14px 0 26px" }}>We'd love to <em>hear</em> from you.</Split>
              <LeadForm id="contact" kind="contact" fields="contact" cta="Send message" />
            </div>
            <div>
              <div className="map" data-reveal="scale">
                <iframe title="Map: S.D.G.S College, Hindupur" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  src={"https://www.google.com/maps?q=" + encodeURIComponent(C.mapQuery) + "&output=embed"}></iframe>
              </div>
              <address className="doc" style={{ marginTop: 14, fontStyle: "normal" }} data-reveal>
                <i><Icon name="pin" /></i><div><b>Saradamba Dasa Govindiah Setty College</b><span>{C.address}</span></div>
              </address>
              <div style={{ marginTop: 18 }} data-reveal><Social className="f-social" /></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { PageHero, Pending } from "../components/ui.jsx";
import { Gallery } from "../components/Showcase.jsx";

export default function GalleryPage() {
  return (
    <>
      <PageHero title={<>Life at <em>S.D.G.S</em> in frames.</>} img="friends" crumbs={[{ t: "Gallery" }]}
        lead="Photos of campus, classrooms, laboratories, events and sports at S.D.G.S College Hindupur." />
      <section className="section">
        <div className="frame">
          <div style={{ marginBottom: 20 }} data-reveal><Pending>Placeholder photos shown until the college shares its own</Pending></div>
          <Gallery filters />
        </div>
      </section>
    </>
  );
}

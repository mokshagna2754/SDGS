import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";

export default function NotFound() {
  return (
    <section className="section" style={{ textAlign: "center", minHeight: "60vh", display: "grid", placeItems: "center" }}>
      <div className="frame">
        <div style={{ fontFamily: "var(--serif)", fontSize: "clamp(6rem,20vw,14rem)", lineHeight: 0.8, color: "var(--maroon)" }}>404</div>
        <h1 style={{ fontSize: "clamp(2rem,4vw,3rem)", margin: "20px 0" }}>This page took a <em>different path.</em></h1>
        <Link className="btn" to="/">Back to home<Icon name="arrow" /></Link>
      </div>
    </section>
  );
}

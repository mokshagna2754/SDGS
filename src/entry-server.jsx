import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App.jsx";
import { allRoutes, headHtml } from "./seo.js";
import SDGS from "./data.js";

export function render(url) {
  const html = renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
  return { html, head: headHtml(url) };
}

export { allRoutes, SDGS };

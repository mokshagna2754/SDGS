// Static site generation: renders every route to its own index.html,
// then writes sitemap.xml, robots.txt and a 404 page.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const dir = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(dir, "dist");
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const { render, allRoutes, SDGS } = await import(pathToFileURL(path.join(dir, "dist-ssr", "entry-server.js")).href);

const site = SDGS.siteUrl.replace(/\/$/, "");
const write = (url, file) => {
  const { html, head } = render(url);
  const out = template.replace("<!--app-head-->", head).replace("<!--app-html-->", html);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, out);
};

const routes = allRoutes();
for (const url of routes) {
  write(url, path.join(dist, url === "/" ? "" : url, "index.html"));
  // also /about.html so hosts that map /about -> about.html (no trailing slash) get the right page
  if (url !== "/") write(url, path.join(dist, url + ".html"));
  console.log("prerendered", url);
}
write("/404", path.join(dist, "404.html"));

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((u) => `  <url><loc>${site}${u === "/" ? "/" : u}</loc><lastmod>${today}</lastmod></url>`).join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemap);

const robots = `# S.D.G.S College Hindupur
User-agent: *
Allow: /

# Search and AI answer engines are welcome to crawl and cite this site.
User-agent: Googlebot
Allow: /
User-agent: Bingbot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: PerplexityBot
Allow: /

Sitemap: ${site}/sitemap.xml
`;
fs.writeFileSync(path.join(dist, "robots.txt"), robots);
fs.rmSync(path.join(dir, "dist-ssr"), { recursive: true, force: true });
console.log(`done: ${routes.length} routes, sitemap.xml, robots.txt, 404.html`);

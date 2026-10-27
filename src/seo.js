/* =========================================================
   SEO: per-route metadata, JSON-LD and FAQ content.
   FAQ arrays here are rendered visibly on the page AND emitted
   as FAQPage JSON-LD, so schema always matches visible text.
   ========================================================= */
import SDGS from "./data.js";

const BRAND = "S.D.G.S College Hindupur";
export const abs = (path = "/") => SDGS.siteUrl.replace(/\/$/, "") + path;
const LOGO = abs("/assets/logo.png");
const OG = abs("/assets/og-image.jpg");

export const FAQ_HOME = [
  {
    q: "What is S.D.G.S College, Hindupur?",
    a: "S.D.G.S College (Saradamba Dasa Govindiah Setty College) is a college in Hindupur, Andhra Pradesh, established in 1965. It offers Intermediate and undergraduate programmes, is recognised by UGC, affiliated to Sri Krishnadevaraya University, accredited by NAAC with a B+ grade and approved by AICTE."
  },
  {
    q: "Which university is S.D.G.S College affiliated to?",
    a: "S.D.G.S College, Hindupur is affiliated to Sri Krishnadevaraya University (SKU), Anantapur. The college is also recognised by the University Grants Commission (UGC)."
  },
  {
    q: "What is the NAAC grade of S.D.G.S College?",
    a: "S.D.G.S College, Hindupur is accredited by the National Assessment and Accreditation Council (NAAC) with a B+ grade."
  },
  {
    q: "Which courses are offered at S.D.G.S College, Hindupur?",
    a: "Intermediate groups MPC, BiPC, MBiPC, CEC, MEC and HEC, and undergraduate programmes B.Sc. (Honours) in Botany, Zoology, Mathematics and Computer Science, B.Com (General and Computer Applications), B.A. (Honours) in Economics and Political Science, B.C.A. (Honours) and B.B.A. (General)."
  },
  {
    q: "How do I apply for admission at S.D.G.S College?",
    a: "Submit the admission enquiry form on this website, call the college on +91 63017 76991, or visit the campus in Hindupur with your marks memo and certificates. The admissions desk will guide you on eligibility, fees and seat availability."
  }
];

export const FAQ_ADMISSIONS = [
  {
    q: "Who is eligible for Intermediate admission at S.D.G.S College?",
    a: "Students who have passed the SSC (Class 10) examination or an equivalent recognised examination are eligible to apply for the Intermediate groups MPC, BiPC, MBiPC, CEC, MEC and HEC, subject to the norms of the Board of Intermediate Education, Andhra Pradesh."
  },
  {
    q: "Who is eligible for UG (degree) admission at S.D.G.S College?",
    a: "Students who have passed Intermediate (10+2) or an equivalent examination are eligible for the undergraduate programmes, subject to Sri Krishnadevaraya University and APSCHE admission norms. Subject-specific requirements apply for B.Sc. and B.C.A."
  },
  {
    q: "What documents are required for admission?",
    a: "Usually the SSC marks memo, Intermediate marks memo (for UG), Transfer Certificate, Study and Conduct certificates, caste and income certificates where applicable, Aadhaar card and recent passport-size photographs. Bring originals with photocopies."
  },
  {
    q: "Where can I find the academic calendar and exam schedule?",
    a: "The academic calendar and examination schedules are published in the Examinations section of the Academics page and on the notification bar of the S.D.G.S College website."
  }
];

const ROUTES = {
  "/": {
    title: "S.D.G.S College Hindupur | NAAC B+ Intermediate & Degree College since 1965",
    description: "Saradamba Dasa Govindiah Setty (S.D.G.S) College, Hindupur: NAAC B+, UGC recognised, SKU affiliated. Intermediate (MPC, BiPC, CEC, MEC, HEC) and UG programmes B.Sc, B.Com, B.A, BCA, BBA.",
    crumb: null
  },
  "/about": {
    title: "About S.D.G.S College Hindupur | Founder, Vision, History & Principal",
    description: "Discover the 60-year legacy of Saradamba Dasa Govindiah Setty College, Hindupur: our founder, vision and mission, history since 1965, management and principal's message.",
    crumb: "About SDGS"
  },
  "/departments": {
    title: "Departments | S.D.G.S College Hindupur",
    description: "Explore the departments of S.D.G.S College Hindupur: Botany, Zoology, Mathematics, Computer Science, Commerce, Computer Applications, Business Administration, Economics and Political Science.",
    crumb: "Departments"
  },
  "/academics": {
    title: "Admissions, Courses & Examinations | S.D.G.S College Hindupur",
    description: "Intermediate and UG programmes at S.D.G.S College Hindupur with admission eligibility, documents required, academic calendar and examination details.",
    crumb: "Academics"
  },
  "/students": {
    title: "Students Corner: NCC, NSS, Sports & Cultural | S.D.G.S College Hindupur",
    description: "Student life at S.D.G.S College Hindupur: NCC, NSS volunteering, sports and cultural activities that build character, leadership and service.",
    crumb: "Students Corner"
  },
  "/infrastructure": {
    title: "Campus & Infrastructure | S.D.G.S College Hindupur",
    description: "Library, laboratories, auditorium, sports facilities, solar power, rain water harvesting, water purifiers and campus buildings at S.D.G.S College Hindupur.",
    crumb: "Infrastructure"
  },
  "/alumni": {
    title: "Alumni Network | S.D.G.S College Hindupur",
    description: "Six decades of S.D.G.S graduates. Register with the S.D.G.S College Hindupur alumni network, reconnect with your batch and mentor current students.",
    crumb: "Alumni"
  },
  "/gallery": {
    title: "Photo Gallery | S.D.G.S College Hindupur",
    description: "Photos of campus life, events, laboratories, sports, NCC and NSS activities at S.D.G.S College Hindupur.",
    crumb: "Gallery"
  },
  "/naac": {
    title: "NAAC B+ Accreditation, IQAC & SSR | S.D.G.S College Hindupur",
    description: "S.D.G.S College Hindupur is accredited by NAAC with B+ grade. View IQAC details, the Self Study Report (SSR) and documentation for all 7 NAAC criteria.",
    crumb: "NAAC"
  },
  "/contact": {
    title: "Contact S.D.G.S College Hindupur | Address, Phone & Email",
    description: "Contact S.D.G.S College, Hindupur, Andhra Pradesh. Call +91 63017 76991, email sdgsdegreecollege1965@gmail.com or send an admission enquiry.",
    crumb: "Contact Us"
  }
};

export function deptMeta(d) {
  return {
    title: `Department of ${d.name} | ${d.programme} | S.D.G.S College Hindupur`,
    description: `Department of ${d.name} at S.D.G.S College Hindupur: ${d.programme}. Vision and mission, faculty, photos and academic calendar. ${d.about}`.slice(0, 300),
    crumb: d.name
  };
}

export function allRoutes() {
  return Object.keys(ROUTES).concat(SDGS.departments.map((d) => "/departments/" + d.id));
}

const ORG = {
  "@type": ["CollegeOrUniversity", "EducationalOrganization"],
  "@id": abs("/#organization"),
  name: SDGS.name,
  alternateName: ["S.D.G.S College", "SDGS College Hindupur", "S.D.G.S. College, Hindupur"],
  url: abs("/"),
  logo: LOGO,
  image: LOGO,
  foundingDate: "1965",
  slogan: "A Legacy of Excellence since 1965",
  telephone: SDGS.contact.tel,
  email: SDGS.contact.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hindupur",
    addressRegion: "Andhra Pradesh",
    postalCode: "515201",
    addressCountry: "IN"
  },
  sameAs: [SDGS.social.facebook, SDGS.social.instagram, SDGS.social.twitter, SDGS.social.linkedin].filter(Boolean),
  parentOrganization: { "@type": "CollegeOrUniversity", name: "Sri Krishnadevaraya University" },
  hasCredential: [
    { "@type": "EducationalOccupationalCredential", credentialCategory: "Accreditation", name: "NAAC accreditation, Grade B+", recognizedBy: { "@type": "Organization", name: "National Assessment and Accreditation Council" } },
    { "@type": "EducationalOccupationalCredential", credentialCategory: "Recognition", name: "UGC recognition", recognizedBy: { "@type": "Organization", name: "University Grants Commission" } },
    { "@type": "EducationalOccupationalCredential", credentialCategory: "Approval", name: "AICTE approval", recognizedBy: { "@type": "Organization", name: "All India Council for Technical Education" } }
  ]
};

const faqLd = (list) => ({
  "@type": "FAQPage",
  mainEntity: list.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
});

/** Returns { title, description, canonical, jsonLd } for a pathname. */
export function getSeo(pathname) {
  const path = pathname.replace(/\/+$/, "") || "/";
  let meta = ROUTES[path];
  let dept = null;
  if (!meta && path.startsWith("/departments/")) {
    dept = SDGS.departments.find((d) => "/departments/" + d.id === path);
    if (dept) meta = deptMeta(dept);
  }
  if (!meta) {
    return { title: "Page not found | " + BRAND, description: ROUTES["/"].description, canonical: abs("/"), noindex: true, jsonLd: null };
  }
  const canonical = abs(path === "/" ? "/" : path);
  const graph = [ORG, { "@type": "WebSite", "@id": abs("/#website"), url: abs("/"), name: BRAND, publisher: { "@id": abs("/#organization") }, inLanguage: "en-IN" }];
  graph.push({ "@type": "WebPage", "@id": canonical + "#webpage", url: canonical, name: meta.title, description: meta.description, isPartOf: { "@id": abs("/#website") }, about: { "@id": abs("/#organization") }, inLanguage: "en-IN" });

  if (meta.crumb) {
    const items = [{ name: "Home", item: abs("/") }];
    if (dept) items.push({ name: "Departments", item: abs("/departments") });
    items.push({ name: meta.crumb, item: canonical });
    graph.push({ "@type": "BreadcrumbList", itemListElement: items.map((x, i) => ({ "@type": "ListItem", position: i + 1, name: x.name, item: x.item })) });
  }
  if (path === "/") graph.push(faqLd(FAQ_HOME));
  if (path === "/academics") {
    graph.push(faqLd(FAQ_ADMISSIONS));
    const all = [
      ...SDGS.programmes.intermediate.map((p) => ({ name: "Intermediate " + p.code + " (" + p.name + ")", d: p.note })),
      ...SDGS.programmes.ug.map((p) => ({ name: p.name + " " + p.subs.join(", "), d: p.note }))
    ];
    graph.push({
      "@type": "ItemList", name: "Programmes at S.D.G.S College Hindupur",
      itemListElement: all.map((c, i) => ({ "@type": "ListItem", position: i + 1, item: { "@type": "Course", name: c.name, description: c.d, provider: { "@id": abs("/#organization") } } }))
    });
  }
  if (dept) {
    graph.push({ "@type": "Course", name: dept.programme, description: dept.about, provider: { "@id": abs("/#organization") } });
  }
  return { ...meta, canonical, image: OG, jsonLd: { "@context": "https://schema.org", "@graph": graph } };
}

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

/** Head HTML string used by the prerenderer. */
export function headHtml(pathname) {
  const s = getSeo(pathname);
  return [
    `<title>${esc(s.title)}</title>`,
    `<meta name="description" content="${esc(s.description)}" />`,
    `<link rel="canonical" href="${s.canonical}" />`,
    s.noindex ? `<meta name="robots" content="noindex, follow" />` : `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${BRAND}" />`,
    `<meta property="og:locale" content="en_IN" />`,
    `<meta property="og:title" content="${esc(s.title)}" />`,
    `<meta property="og:description" content="${esc(s.description)}" />`,
    `<meta property="og:url" content="${s.canonical}" />`,
    `<meta property="og:image" content="${s.image || OG}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(s.title)}" />`,
    `<meta name="twitter:description" content="${esc(s.description)}" />`,
    `<meta name="twitter:image" content="${s.image || OG}" />`,
    `<meta name="geo.region" content="IN-AP" />`,
    `<meta name="geo.placename" content="Hindupur" />`,
    s.jsonLd ? `<script type="application/ld+json">${JSON.stringify(s.jsonLd).replace(/</g, "\\u003c")}</script>` : ""
  ].join("\n    ");
}

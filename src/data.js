/* =========================================================
 S.D.G.S College · Site content & settings
 Edit this file to update contacts, notifications, images,
 departments and the lead-capture endpoint.
 ========================================================= */
// Placeholder photography (Unsplash). Replace any value with a local path,
// e.g. "assets/photos/campus.jpg", once the college provides its own pictures.
const U = (id, w = 1600) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${w}`;
// College's own photographs (refined copies in public/assets/photos).
const P = (name) => `/assets/photos/refined/${name}.webp`;

export const SDGS = {
  name: "Saradamba Dasa Govindiah Setty College",
  short: "S.D.G.S College",
  place: "Hindupur",
  founded: 1965,

  // PLACEHOLDER: set to the college's real domain before going live.
  // Used for canonical URLs, Open Graph, JSON-LD and sitemap.xml.
  siteUrl: "https://www.sdgscollegehindupur.in",

  contact: {
    phone: "+91 63017 76991",
    tel: "+916301776991",
    whatsapp: "916301776991",
    email: "sdgsdegreecollege1965@gmail.com",
    address: "S.D.G.S College, Hindupur, Sri Sathya Sai District, Andhra Pradesh 515201",
    mapQuery: "SDGS College Hindupur"
  },

  social: {
    facebook: "https://www.facebook.com/share/1DAtKqbtgx/",
    instagram: "https://www.instagram.com/sdgs_campuslife?igsh=dnZvZHhmZ241am9u",
    twitter: "",   // to be shared by the college
    linkedin: "",  // to be shared by the college
    whatsapp: ""   // channel / group link, to be shared by the college
  },

  // Optional: URL that accepts a JSON POST of every enquiry (Google Apps Script,
  // Formspree, a CRM webhook...). Leave empty to route enquiries to WhatsApp only.
  leadEndpoint: "",

  notifications: [
    { text: "WELCOME TO S.D.G.S COLLEGE", hot: true },
    { text: "Admission enquiries open for Intermediate & UG programmes", href: "/academics#admissions", isNew: true },
    { text: "Celebrating 60 years · A Legacy of Excellence since 1965", href: "/about#history" },
    { text: "Accredited by NAAC with B+ Grade", href: "/naac" },
    { text: "Examination schedule & academic calendar", href: "/academics#examinations" },
    { text: "NSS & NCC enrolments for the new academic year", href: "/students" }
  ],

  img: {
    realCampus: P("campus-building"),
    realLibrary: P("library"),
    realChemLab: P("chemistry-lab"),
    realComputerLab: P("computer-lab"),
    realSeminarHall: P("seminar-hall"),
    realNccSalute: P("ncc-salute"),
    realNccParade: P("ncc-parade"),
    realNccGuard: P("ncc-guard-of-honour"),
    realNss: P("nss-swachh-bharat"),
    realYoga: P("yoga-day"),
    realCollegeDay: P("college-day-2022"),
    realMemorial: P("founder-memorial"),
    realWomensTeam: P("womens-team-trophy"),
    realFootball: P("football-team"),
    realAthletics: P("athletics-championship"),
    realCricket: P("cricket-nets"),
    realCourt: P("basketball-court"),
    founder: P("founder"),
    campus: P("campus-building"),
    graduation: P("stock-graduation"),
    lecture: P("stock-lecture"),
    students: P("stock-students"),
    friends: P("stock-friends"),
    classroom: P("stock-classroom"),
    hall: P("seminar-hall"),
    library: P("library"),
    library2: P("library"),
    library3: P("library"),
    libraryWalk: P("library"),
    lab: P("chemistry-lab"),
    chem: P("chemistry-lab"),
    cells: P("stock-cells"),
    sports: P("athletics-championship"),
    maths: P("stock-maths"),
    code: P("computer-lab"),
    laptop: P("computer-lab"),
    team: P("stock-team"),
    solar: P("stock-solar"),
    crowd: P("college-day-2022"),
    auditorium: P("seminar-hall"),
    emptyClass: P("stock-emptyClass"),
    books: P("stock-books"),
    notebook: P("stock-notebook"),
    study: P("stock-study")
  },

  programmes: {
    intermediate: [
      { code: "MPC", name: "Mathematics, Physics, Chemistry", subs: ["Mathematics", "Physics", "Chemistry"], note: "Gateway to engineering, physical sciences and B.Sc. Mathematics / Computer Science." },
      { code: "BiPC", name: "Biology, Physics, Chemistry", subs: ["Botany", "Zoology", "Physics", "Chemistry"], note: "The route to medicine, life sciences and B.Sc. Botany / Zoology." },
      { code: "MBiPC", name: "Maths, Biology, Physics, Chemistry", subs: ["Mathematics", "Botany", "Zoology", "Physics", "Chemistry"], note: "Keeps both engineering and medical doors open." },
      { code: "CEC", name: "Civics, Economics, Commerce", subs: ["Civics", "Economics", "Commerce"], note: "Strong foundation for B.Com, BBA, CA and civil services." },
      { code: "MEC", name: "Mathematics, Economics, Commerce", subs: ["Mathematics", "Economics", "Commerce"], note: "Quantitative commerce for finance, analytics and CA." },
      { code: "HEC", name: "History, Economics, Civics", subs: ["History", "Economics", "Civics"], note: "Humanities pathway to B.A., law and public services." }
    ],
    ug: [
      { code: "B.Sc", name: "B.Sc. (Honours)", subs: ["Botany", "Zoology", "Mathematics", "Computer Science"], note: "Four-year honours degree with deep specialisation and lab-intensive learning." },
      { code: "B.Com", name: "B.Com", subs: ["General", "Computer Applications"], note: "Accounting, taxation and business with an optional computing edge." },
      { code: "B.A", name: "B.A. (Honours)", subs: ["Economics", "Political Science"], note: "Policy, society and economic thinking for public life and research." },
      { code: "BCA", name: "B.C.A. (Honours)", subs: ["Programming", "Data", "Web & Cloud"], note: "Industry-ready computing: software, databases, networks and projects." },
      { code: "BBA", name: "B.B.A. (General)", subs: ["Management", "Marketing", "Finance", "HR"], note: "Management fundamentals for entrepreneurs and future leaders." }
    ]
  },

  departments: [
    { id: "botany", name: "Botany", stream: "Science", img: "cells", programme: "B.Sc. (Honours) Botany",
      about: "Plant science from cell to ecosystem, with herbarium work, field studies and lab-based plant physiology." },
    { id: "zoology", name: "Zoology", stream: "Science", img: "lab", programme: "B.Sc. (Honours) Zoology",
      about: "Animal diversity, physiology, genetics and ecology taught through lab practice and field visits." },
    { id: "mathematics", name: "Mathematics", stream: "Science", img: "maths", programme: "B.Sc. (Honours) Mathematics",
      about: "Rigorous foundations in algebra, analysis and applied mathematics that power science, finance and technology." },
    { id: "computer-science", name: "Computer Science", stream: "Science", img: "code", programme: "B.Sc. (Honours) Computer Science",
      about: "Programming, data structures, databases and emerging technologies, taught hands-on in modern computer labs." },
    { id: "commerce", name: "Commerce", stream: "Commerce", img: "team", programme: "B.Com (General) · B.Com (Computer Applications)",
      about: "Accounting, taxation, banking and business law combined with digital tools for the modern economy." },
    { id: "bca", name: "Computer Applications", stream: "Computing", img: "laptop", programme: "B.C.A. (Honours)",
      about: "Software development, web technologies and project work that prepares students for the IT industry." },
    { id: "bba", name: "Business Administration", stream: "Management", img: "students", programme: "B.B.A. (General)",
      about: "Management, marketing, finance and human resources with case studies, presentations and industry exposure." },
    { id: "economics", name: "Economics", stream: "Arts", img: "books", programme: "B.A. (Honours) Economics",
      about: "Micro and macro economics, Indian economy and data-driven policy analysis." },
    { id: "political-science", name: "Political Science", stream: "Arts", img: "hall", programme: "B.A. (Honours) Political Science",
      about: "Constitution, governance, public administration and international relations for engaged citizens." }
  ],

  gallery: [
    { img: "realCampus", cap: "Main building", cat: "campus" },
    { img: "realNccSalute", cap: "NCC parade", cat: "events" },
    { img: "realAthletics", cap: "SKU inter-collegiate athletics", cat: "sports" },
    { img: "realLibrary", cap: "Central library", cat: "campus" },
    { img: "realChemLab", cap: "Chemistry lab", cat: "labs" },
    { img: "realWomensTeam", cap: "Women's team champions", cat: "sports" },
    { img: "realNss", cap: "NSS Swachh Bharat drive", cat: "events" },
    { img: "realComputerLab", cap: "Computer lab", cat: "labs" },
    { img: "realNccParade", cap: "NCC march past", cat: "events" },
    { img: "realFootball", cap: "Football team", cat: "sports" },
    { img: "realYoga", cap: "Yoga Day", cat: "events" },
    { img: "realSeminarHall", cap: "Seminar hall", cat: "academics" },
    { img: "realCricket", cap: "Cricket nets", cat: "sports" },
    { img: "realCourt", cap: "Basketball court", cat: "sports" },
    { img: "realCollegeDay", cap: "College Day 2022", cat: "events" },
    { img: "realMemorial", cap: "Founder's memorial", cat: "campus" },
    { img: "/assets/photos/refined/event-jagruthi-2013.webp", cap: "Jagruthi 2013 college fest", cat: "events" },
    { img: "/assets/photos/refined/event-ncc-review.webp", cap: "Salute at the NCC parade", cat: "events" },
    { img: "/assets/photos/refined/event-lamp-lighting.webp", cap: "Lamp lighting ceremony", cat: "events" },
    { img: "/assets/photos/refined/event-ncc-escort.webp", cap: "NCC cadets escorting guests", cat: "events" },
    { img: "/assets/photos/refined/event-ribbon-cutting.webp", cap: "Inauguration ceremony", cat: "events" },
    { img: "/assets/photos/refined/event-ncc-dais.webp", cap: "Guests at the NCC parade", cat: "events" },
    { img: "/assets/photos/refined/event-guests-arrive.webp", cap: "Guests arriving on campus", cat: "events" },
    { img: "/assets/photos/refined/event-plaque.webp", cap: "Plaque unveiling", cat: "events" },
    { img: "/assets/photos/refined/event-award.webp", cap: "Award ceremony", cat: "events" }
  ]
};

export default SDGS;

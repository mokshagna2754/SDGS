/* =========================================================
 S.D.G.S College · Site content & settings
 Edit this file to update contacts, notifications, images,
 departments and the lead-capture endpoint.
 ========================================================= */
// Placeholder photography (Unsplash). Replace any value with a local path,
// e.g. "assets/photos/campus.jpg", once the college provides its own pictures.
const U = (id, w = 1600) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${w}`;

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
    campus: U("1562774053-701939374585"),
    graduation: U("1541339907198-e08756dedf3f"),
    lecture: U("1524178232363-1fb2b075b655"),
    students: U("1522202176988-66273c2fd55f"),
    friends: U("1517486808906-6ca8b3f04846"),
    classroom: U("1571260899304-425eee4c7efc"),
    hall: U("1606761568499-6d2451b23c66"),
    library: U("1481627834876-b7833e8f5570"),
    library2: U("1507842217343-583bb7270b66"),
    library3: U("1498243691581-b145c3f54a5a"),
    libraryWalk: U("1427504494785-3a9ca7044f45"),
    lab: U("1532094349884-543bc11b234d"),
    chem: U("1554475901-4538ddfbccc2"),
    cells: U("1576086213369-97a306d36557"),
    sports: U("1461896836934-ffe607ba8211"),
    maths: U("1509228468518-180dd4864904"),
    code: U("1517694712202-14dd9538aa97"),
    laptop: U("1513258496099-48168024aec0"),
    team: U("1519389950473-47ba0277781c"),
    solar: U("1509391366360-2e959784a276"),
    crowd: U("1501386761578-eac5c94b800a"),
    auditorium: U("1544531586-fde5298cdd40"),
    emptyClass: U("1580582932707-520aed937b7b"),
    books: U("1503676260728-1c00da094a0b"),
    notebook: U("1535982330050-f1c2fb79ff78"),
    study: U("1529390079861-591de354faf5")
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
    { img: "campus", cap: "Campus", cat: "campus" },
    { img: "graduation", cap: "Graduation day", cat: "events" },
    { img: "lecture", cap: "Seminar session", cat: "academics" },
    { img: "library", cap: "Central library", cat: "campus" },
    { img: "sports", cap: "Athletics", cat: "sports" },
    { img: "friends", cap: "Campus life", cat: "events" },
    { img: "chem", cap: "Chemistry lab", cat: "labs" },
    { img: "crowd", cap: "Cultural fest", cat: "events" },
    { img: "auditorium", cap: "Auditorium", cat: "campus" },
    { img: "code", cap: "Computer lab", cat: "labs" },
    { img: "classroom", cap: "Classroom", cat: "academics" },
    { img: "solar", cap: "Solar power", cat: "campus" },
    { img: "team", cap: "Group project", cat: "academics" },
    { img: "lab", cap: "Science lab", cat: "labs" },
    { img: "library3", cap: "Reading hall", cat: "campus" },
    { img: "students", cap: "Peer learning", cat: "academics" }
  ]
};

export default SDGS;

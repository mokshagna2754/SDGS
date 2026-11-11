/* =========================================================
 College Assistant · answer engine
 Runs entirely in the browser: matches the visitor's question
 to a topic and answers from the site's own data (data.js).
 To plug in an AI service later, replace answer() with a call
 that returns the same { text, links } shape.
 ========================================================= */
import SDGS from "../data.js";

const C = SDGS.contact;
const P = SDGS.programmes;
const wa = (msg) => `https://wa.me/${C.whatsapp}?text=${encodeURIComponent(msg)}`;

const PROGRAMME_WORDS = [
  ["bsc-honours", /\bb\.?\s?sc\b|bachelor of science/],
  ["bcom", /\bb\.?\s?com\b|bachelor of commerce/],
  ["ba-honours", /\bb\.?\s?a\b(?!\.?\s?(sc|com))|bachelor of arts/],
  ["bca-honours", /\bb\.?\s?c\.?\s?a\b|computer applications/],
  ["bba-honours", /\bb\.?\s?b\.?\s?a\b|business administration/],
  ["mbipc", /\bm\.?\s?bi\.?\s?pc\b/],
  ["bipc", /\bbi\.?\s?pc\b/],
  ["mpc", /\bmpc\b/],
  ["cec", /\bcec\b/],
  ["mec", /\bmec\b/],
  ["hec", /\bhec\b/]
];

const DEPT_WORDS = [
  ["botany", /botany|plant/], ["zoology", /zoology|animal/], ["mathematics", /\bmaths?\b|mathematics/],
  ["computer-science", /computer science|\bcs\b/], ["commerce", /commerce dep/], ["economics", /economics/],
  ["political-science", /political|politics|civics/]
];

const allProgrammes = () => P.ug.map((p) => ({ ...p, ug: true })).concat(P.intermediate.map((p) => ({ ...p, ug: false })));
const progName = (p) => (p.ug ? p.name : "Intermediate " + p.code);

const ELIGIBILITY = [
  "Intermediate: pass in SSC (Class 10) or equivalent, as per BIEAP norms.",
  "B.Sc. (Honours): pass in Intermediate with relevant science subjects.",
  "B.Com, B.A. (Honours), B.B.A. (Honours): pass in Intermediate (any group).",
  "B.C.A. (Honours): pass in Intermediate, as per SKU / APSCHE norms."
];

const DOCS = ["SSC marks memo", "Intermediate marks memo (for UG)", "Transfer Certificate (TC)", "Study and Conduct certificates", "Caste certificate (if applicable)", "Income certificate (for scholarships)", "Aadhaar card", "Passport-size photographs"];

const contactLinks = [["Call " + C.phone, "tel:" + C.tel], ["WhatsApp us", wa("Hello SDGS College, I have a question.")]];

/* Each topic: words that suggest it, and the answer it gives. */
const TOPICS = [
  {
    id: "greet", words: [/^(hi|hello|hey|namaste|good (morning|afternoon|evening))\b/],
    reply: () => ({ text: "Hello! I'm the S.D.G.S College Assistant. Ask me about courses, admissions, eligibility, scholarships, facilities or how to reach us." })
  },
  {
    id: "thanks", words: [/\b(thanks|thank you|ok thanks|great)\b/],
    reply: () => ({ text: "You're welcome! Anything else you'd like to know about S.D.G.S College?" })
  },
  {
    id: "courses", words: [/course|programme|program|degree|study|groups?\b|offer|subjects|ug\b|intermediate|inter\b|honours/],
    reply: () => ({
      text: "S.D.G.S College offers:\n\nUG programmes: " + P.ug.map((p) => p.name).join(", ") + ".\n\nIntermediate groups: " + P.intermediate.map((p) => p.code).join(", ") + ".\n\nTap a programme to see its page.",
      links: allProgrammes().map((p) => [p.ug ? p.name : "Inter " + p.code, "/academics/" + p.id])
    })
  },
  {
    id: "admission", words: [/admission|apply|join|seat|enrol|enroll|how to get|application/],
    reply: () => ({
      text: "Admission takes four simple steps:\n1. Enquire by call, WhatsApp or the enquiry form.\n2. Our desk confirms your eligibility.\n3. Submit your documents.\n4. Complete formalities and fee payment at the college.",
      links: [["Admission details", "/academics#admissions"], ["Enquiry form", "#enquire"], ...contactLinks]
    })
  },
  {
    id: "eligibility", words: [/eligib|qualif|criteria|marks required|who can/],
    reply: () => ({ text: "Eligibility:\n• " + ELIGIBILITY.join("\n• ") + "\n\nFinal eligibility follows Board, University and APSCHE rules for the admission year.", links: [["Eligibility table", "/academics#admissions"]] })
  },
  {
    id: "documents", words: [/document|certificate|tc\b|marks memo|aadhaar|what to bring/],
    reply: () => ({ text: "Bring originals and photocopies of:\n• " + DOCS.join("\n• "), links: [["Admissions page", "/academics#admissions"]] })
  },
  {
    id: "fees", words: [/fee|fees|cost|price|tuition|how much/],
    reply: () => ({ text: "Fee details depend on the programme and are shared by our admissions desk. Call or WhatsApp us and we'll send you the current fees for your course.", links: [...contactLinks, ["Enquiry form", "#enquire"]] })
  },
  {
    id: "contact", words: [/contact|phone|number|call|email|mail|address|location|where is|reach|map|direction/],
    reply: () => ({ text: `📍 ${C.address}\n📞 ${C.phone}\n✉️ ${C.email}`, links: [...contactLinks, ["Contact page", "/contact"]] })
  },
  {
    id: "scholarship", words: [/scholar|internship|financial|aicte|swayam|\biic\b|pm intern/],
    reply: () => ({
      text: "The college guides students on government scholarships and national programmes: PM Internship, AICTE Internship, IIC (Institution's Innovation Council) and SWAYAM Plus.",
      links: [["Scholarships page", "/students/scholarships"], ["PM Internship", "https://pminternship.mca.gov.in/"], ["AICTE Internship", "https://internship.aicte-india.org/"], ["SWAYAM Plus", "https://swayamplus.education.gov.in/"]]
    })
  },
  {
    id: "exams", words: [/exam|result|semester|hall ticket|syllabus|calendar|timetable|schedule/],
    reply: () => ({
      text: "Intermediate exams follow the Board of Intermediate Education, A.P., and UG semester exams follow Sri Krishnadevaraya University. Semester details, results, the academic calendar and year-wise syllabus copies are on the Academics page as they are published.",
      links: [["Examinations", "/academics#examinations"], ["Academic calendar", "/academics#calendar"], ["Syllabus", "/academics#syllabus"]]
    })
  },
  {
    id: "placement", words: [/placement|job|career|recruit|campus drive|salary/],
    reply: () => ({ text: "The Placement & Career Guidance Cell runs campus drives, soft-skills and interview training, and counselling for higher studies and competitive exams.", links: [["Placements & Career", "/students/placements"]] })
  },
  {
    id: "activities", words: [/\bncc\b|\bnss\b|sport|game|cultural|fest|activit|club|cricket|athletic/],
    reply: (q) => {
      const pick = /ncc/.test(q) ? "ncc" : /nss/.test(q) ? "nss" : /sport|game|cricket|athletic/.test(q) ? "sports" : /cultural|fest/.test(q) ? "culturals" : null;
      return {
        text: "Student life includes NCC, NSS, sports and cultural activities, plus achievements, placements and scholarships in the Students Corner.",
        links: pick ? [["Open " + pick.toUpperCase().replace("CULTURALS", "Culturals").replace("SPORTS", "Sports"), "/students/" + pick], ["Students Corner", "/students"]] : [["NCC", "/students/ncc"], ["NSS", "/students/nss"], ["Sports", "/students/sports"], ["Culturals", "/students/culturals"]]
      };
    }
  },
  {
    id: "facilities", words: [/facilit|infrastructure|library|lab|classroom|seminar|auditorium|video conference|solar|water|ambedkar|campus/],
    reply: () => ({
      text: "The campus has a central library, science and computer labs, e-classrooms, a video conference hall, a seminar hall, an auditorium and sports grounds, plus solar power, rain water harvesting, a mineral water facility and the Dr. B. R. Ambedkar Study Centre.",
      links: [["Infrastructure", "/infrastructure"], ["Other facilities", "/infrastructure#other"], ["Gallery", "/gallery"]]
    })
  },
  {
    id: "accreditation", words: [/naac|accredit|grade|ugc|affiliat|university|aicte approv|recogni|sku\b/],
    reply: () => ({ text: "S.D.G.S College is recognised by UGC, affiliated to Sri Krishnadevaraya University (Anantapur), accredited by NAAC with B+ grade and approved by AICTE.", links: [["NAAC & IQAC", "/naac"]] })
  },
  {
    id: "about", words: [/history|founded|establish|founder|since|old|about|principal|management|who started/],
    reply: () => ({
      text: `S.D.G.S College, Hindupur was established in ${SDGS.founded}, founded by Sri Dasa N. Govindaiah Setty. The Principal is Dr. B. Polaiah. The college has served Hindupur for over 60 years.`,
      links: [["About SDGS", "/about"], ["Our Story", "/about/our-story"]]
    })
  },
  {
    id: "departments", words: [/department|faculty|lecturer|teacher|staff/],
    reply: () => ({ text: "There are nine departments: " + SDGS.departments.map((d) => d.name).join(", ") + ".", links: SDGS.departments.map((d) => [d.name, "/departments/" + d.id]) })
  },
  {
    id: "alumni", words: [/alumni|alumnus|old student|reunion/],
    reply: () => ({ text: "Former students can register with the S.D.G.S alumni network to reconnect, mentor students and join reunions.", links: [["Alumni registration", "/alumni#register"]] })
  }
];

const FALLBACK = () => ({
  text: "I'm not sure about that yet. I can help with courses, admissions, eligibility, documents, fees, scholarships, exams, facilities and contact details. For anything else, our admissions desk will be happy to help.",
  links: contactLinks
});

export const SUGGESTIONS = ["What courses do you offer?", "How do I apply?", "Eligibility for B.Sc", "Scholarships", "Fees", "Contact details"];

export function answer(raw) {
  const q = raw.toLowerCase().replace(/\s+/g, " ").trim();

  // A specific programme or department wins over general topics.
  const prog = PROGRAMME_WORDS.find(([, re]) => re.test(q));
  if (prog) {
    const p = allProgrammes().find((x) => x.id === prog[0]);
    const elig = /eligib|qualif|criteria|who can/.test(q);
    const fee = /fee|cost|price|tuition|how much/.test(q);
    return {
      text: `${progName(p)}${p.ug ? "" : " (" + p.name + ")"}: ${p.note}\n\nSubjects: ${p.subs.join(", ")}.` +
        (elig ? "\n\nEligibility: " + (p.ug ? ELIGIBILITY.find((e) => e.includes(p.name.split(" ")[0])) || ELIGIBILITY[2] : ELIGIBILITY[0]).replace(/^[^:]+: /, "") : "") +
        (fee ? "\n\nFees: the admissions desk shares the current fee for this course. Call or WhatsApp us to get it." : ""),
      links: [["View " + (p.ug ? p.code : "Inter " + p.code), "/academics/" + p.id], ["Enquire about this course", "#enquire:" + progName(p)], ...(fee ? contactLinks : [])]
    };
  }
  const dept = DEPT_WORDS.find(([, re]) => re.test(q));
  if (dept && !/admission|fee|scholar/.test(q)) {
    const d = SDGS.departments.find((x) => x.id === dept[0]);
    return { text: `The Department of ${d.name} offers ${d.programme}. ${d.about}`, links: [["Department of " + d.name, "/departments/" + d.id]] };
  }

  let best = null, bestScore = 0;
  for (const t of TOPICS) {
    const score = t.words.reduce((n, re) => n + (re.test(q) ? 1 : 0), 0);
    if (score > bestScore) { best = t; bestScore = score; }
  }
  return best ? best.reply(q) : FALLBACK();
}

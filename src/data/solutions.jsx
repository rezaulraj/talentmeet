/* ------------------------------------------------------------------ */
/* Talent Meet — Solutions (one page per audience)                     */
/* Each solution routes a visitor to 2–3 products across clusters.     */
/* ------------------------------------------------------------------ */

const Svg = ({ children, size = 24 }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

export const IconHRTeams = (p) => (
  <Svg {...p}>
    <circle cx="9" cy="8.5" r="3" />
    <path d="M3 19.5c0-3.2 2.5-5.3 6-5.3s6 2.1 6 5.3" />
    <circle cx="17" cy="9.5" r="2.4" />
    <path d="M17.5 14.4c2.5.2 4.5 2 4.5 4.6" />
  </Svg>
);

export const IconSalesTeams = (p) => (
  <Svg {...p}>
    <path d="M3.5 17.5 9 12l3.5 3.5 8-8" />
    <path d="M15 7.5h5.5V13" />
  </Svg>
);

export const IconRecruiters = (p) => (
  <Svg {...p}>
    <circle cx="10" cy="8" r="3.3" />
    <path d="M3.5 20c0-3.4 2.7-5.7 6-5.7 1 0 1.9.2 2.7.6" />
    <circle cx="17.5" cy="16.5" r="2.7" />
    <path d="m19.5 18.5 2 2" />
  </Svg>
);

export const IconRemote = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.6 3.7 5.6 3.7 9s-1.2 6.4-3.7 9c-2.5-2.6-3.7-5.6-3.7-9S9.5 5.6 12 3Z" />
  </Svg>
);

/*
 * `products` — the cards, in the order the brief lists them.
 * `journey`  — the same products in the order work flows between them,
 *              with a one-word verb for the hero diagram.
 */
const SOLUTION_LIST = [
  {
    slug: "hr",
    audience: "HR teams",
    team: "HR team",
    Icon: IconHRTeams,
    headline: "Everything your HR team touches, in one place.",
    subhead:
      "From hiring to payroll to day-to-day attendance, Talent Meet covers the full employee lifecycle — so your HR stack isn't five different logins.",
    products: ["paycloud", "attendx", "jobsplus"],
    journey: [
      { slug: "jobsplus", verb: "Hire" },
      { slug: "paycloud", verb: "Pay" },
      { slug: "attendx", verb: "Track" },
    ],
  },
  {
    slug: "sales",
    audience: "Sales teams",
    team: "sales team",
    Icon: IconSalesTeams,
    headline: "Fill the pipeline, run the conversation, close the deal.",
    subhead:
      "SalesLine, LeadReach, and MeetHub work together so your sales team spends time selling, not switching tools.",
    products: ["salesline", "leadreach", "meethub"],
    journey: [
      { slug: "leadreach", verb: "Fill" },
      { slug: "salesline", verb: "Converse" },
      { slug: "meethub", verb: "Close" },
    ],
  },
  {
    slug: "recruiters",
    audience: "Recruiters",
    team: "recruiting team",
    Icon: IconRecruiters,
    headline: "Source candidates. Help them get ready. Hire with confidence.",
    subhead:
      "JobsPlus, CareerCompass, and BrandPath cover both sides of the hiring table — sourcing for you, preparation for them.",
    products: ["jobsplus", "careercompass", "brandpath"],
    journey: [
      { slug: "jobsplus", verb: "Source" },
      { slug: "brandpath", verb: "Position" },
      { slug: "careercompass", verb: "Prepare" },
    ],
  },
  {
    slug: "remote",
    audience: "Remote-first companies",
    team: "distributed team",
    Icon: IconRemote,
    headline: "Run a distributed team without losing visibility or trust.",
    subhead:
      "WorkPulse, SecureLine, and PayCloud give remote-first companies the same operational clarity as an in-office team — without the surveillance feel.",
    products: ["workpulse", "secureline", "paycloud"],
    journey: [
      { slug: "secureline", verb: "Talk" },
      { slug: "workpulse", verb: "See" },
      { slug: "paycloud", verb: "Pay" },
    ],
  },
];

export const SOLUTIONS = Object.fromEntries(
  SOLUTION_LIST.map((s) => [s.slug, s]),
);

export const SOLUTION_SLUGS = SOLUTION_LIST.map((s) => s.slug);

export const solutionHref = (slug) => `/solutions/${slug}`;

/* ------------------------------------------------------------------ */
/* Talent Meet — Resources content                                     */
/*                                                                     */
/* SAMPLE CONTENT: every post, article and guide below is placeholder  */
/* so the hub UI (search, filters, lists) can be built and reviewed.   */
/* Replace with real entries — or load them from your CMS — before     */
/* launch. The shape of each entry is all the pages rely on.           */
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

export const IconBlog = (p) => (
  <Svg {...p}>
    <path d="M5 4.5h14a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 18V6A1.5 1.5 0 0 1 5 4.5Z" />
    <path d="M7 8.5h6M7 12h10M7 15.5h10" />
  </Svg>
);

export const IconHelp = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M9.6 9.4a2.5 2.5 0 0 1 4.8.9c0 1.7-2.4 2.1-2.4 3.6" />
    <path d="M12 17v.01" strokeWidth="2" />
  </Svg>
);

export const IconGuides = (p) => (
  <Svg {...p}>
    <path d="M4 5.5c2.6-.8 5.3-.6 8 1v13c-2.7-1.6-5.4-1.8-8-1v-13Z" />
    <path d="M20 5.5c-2.6-.8-5.3-.6-8 1v13c2.7-1.6 5.4-1.8 8-1v-13Z" />
  </Svg>
);

export const RESOURCE_SECTIONS = [
  {
    slug: "blog",
    href: "/blog",
    name: "Blog",
    description: "Company and product updates, plus commentary on hiring and work.",
    Icon: IconBlog,
  },
  {
    slug: "help",
    href: "/help",
    name: "Help Center",
    description: "Searchable answers, organized by product — one section for each of the ten.",
    Icon: IconHelp,
  },
  {
    slug: "guides",
    href: "/guides",
    name: "Guides",
    description: "Longer-form how-tos for setting up and connecting your Talent Meet products.",
    Icon: IconGuides,
  },
];

/* ------------------------------------------------------------------ */
/* Blog                                                                */
/* ------------------------------------------------------------------ */

export const BLOG_CATEGORIES = ["Product updates", "Hiring & work", "Company"];

export const BLOG_POSTS = [
  {
    slug: "introducing-the-talent-meet-suite",
    title: "Introducing the Talent Meet suite: ten products, one account",
    excerpt: "Why we built ten focused products instead of one sprawling platform — and how they connect when you use more than one.",
    category: "Product updates",
    date: "2026-10-08",
    minutes: 6,
  },
  {
    slug: "why-application-forms-lose-candidates",
    title: "Why your application form is losing half your candidates",
    excerpt: "Long forms, forced account creation and duplicate résumé fields: the quiet reasons good applicants never hit submit.",
    category: "Hiring & work",
    date: "2026-10-02",
    minutes: 7,
  },
  {
    slug: "secureline-team-retention-policies",
    title: "SecureLine now supports retention policies per team",
    excerpt: "Admins can set message retention, deletion and download rules for each team, role or individual.",
    category: "Product updates",
    date: "2026-09-26",
    minutes: 3,
  },
  {
    slug: "monitoring-remote-teams-without-breaking-trust",
    title: "Monitoring remote teams without breaking trust",
    excerpt: "Visibility and surveillance are not the same thing. A practical look at agreeing boundaries with your team first.",
    category: "Hiring & work",
    date: "2026-09-18",
    minutes: 8,
  },
  {
    slug: "meethub-follow-ups-in-salesline",
    title: "MeetHub follow-ups now log straight into SalesLine",
    excerpt: "Notes and action items from a client meeting now land on the deal automatically — no copy-pasting.",
    category: "Product updates",
    date: "2026-09-11",
    minutes: 3,
  },
  {
    slug: "what-hiring-managers-read-on-a-resume",
    title: "What hiring managers actually read on a résumé",
    excerpt: "The first three lines matter more than the last three pages. Notes from reviewing résumés with hiring teams.",
    category: "Hiring & work",
    date: "2026-09-03",
    minutes: 5,
  },
  {
    slug: "building-connected-products",
    title: "How we think about building connected products",
    excerpt: "Every product should work on its own. Connections should remove work, not add setup. Our principles, written down.",
    category: "Company",
    date: "2026-08-27",
    minutes: 6,
  },
  {
    slug: "inside-our-product-team",
    title: "Inside our product team in Dhaka",
    excerpt: "How a small team ships across ten products: shared components, shared data and a lot of saying no.",
    category: "Company",
    date: "2026-08-14",
    minutes: 5,
  },
];

/* ------------------------------------------------------------------ */
/* Help Center — keyed by product slug (10 sections)                   */
/* ------------------------------------------------------------------ */

const help = (product, items) =>
  items.map(([title, type, excerpt]) => ({
    product,
    title,
    type,
    excerpt,
    slug: `${product}-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`,
  }));

export const HELP_TYPES = ["Getting started", "How-to", "Troubleshooting"];

export const HELP_ARTICLES = [
  ...help("jobsplus", [
    ["Post a job to multiple channels at once", "Getting started", "Publish one role to job boards, LinkedIn and your careers page from a single form."],
    ["Set screening requirements for a role", "How-to", "Define must-haves so shortlisting ranks candidates against the real brief."],
    ["Invite hiring managers to a pipeline", "How-to", "Share a pipeline, assign reviewers and control who can move candidates."],
  ]),
  ...help("careercompass", [
    ["Create your career path", "Getting started", "Tell us where you are and where you want to go, and we'll map the steps between."],
    ["Start an interview practice plan", "How-to", "Pick a role and get practice rounds structured the way it's actually interviewed."],
    ["Compare two job offers", "How-to", "Weigh offers against what matters to you, not just salary."],
  ]),
  ...help("brandpath", [
    ["Upload your résumé for a strategy review", "Getting started", "Supported formats, what we look at, and how feedback is returned."],
    ["Create a role-targeted résumé version", "How-to", "Branch from your master résumé without starting over."],
    ["Connect your LinkedIn profile for review", "How-to", "Get brand feedback that matches your résumé's positioning."],
  ]),
  ...help("paycloud", [
    ["Run your first payroll", "Getting started", "Review calculations, approve the run and schedule disbursement."],
    ["Add employees and bank details", "How-to", "Import records in bulk or add people one at a time."],
    ["A payslip shows the wrong deduction", "Troubleshooting", "Check tax settings, provident fund rates and one-off adjustments."],
  ]),
  ...help("attendx", [
    ["Connect attendance devices", "Getting started", "Pair supported devices and assign them to locations and shifts."],
    ["Configure leave policies and auto-approval", "How-to", "Set the rules once and let in-policy requests approve themselves."],
    ["An employee's clock-in is missing", "Troubleshooting", "Common causes and how to add a corrected entry with an audit note."],
  ]),
  ...help("workpulse", [
    ["Choose a monitoring policy for your team", "Getting started", "Decide what's collected, when, and who can see it."],
    ["Read the weekly workload summary", "How-to", "What each section means and how to act on overload signals."],
    ["What employees can see about their own data", "How-to", "Transparency settings and the employee view, explained."],
  ]),
  ...help("salesline", [
    ["Connect email, calls and LinkedIn", "Getting started", "Bring every channel into one thread per contact."],
    ["Build a multi-step outreach sequence", "How-to", "Mix channels, set delays and stop automatically on reply."],
    ["Emails aren't appearing in a contact's thread", "Troubleshooting", "Check mailbox permissions and address matching."],
  ]),
  ...help("leadreach", [
    ["Build your first lead list", "Getting started", "Filter by industry, size, geography and role, then extract."],
    ["How lead verification works", "How-to", "What each status means and why some contacts are held back."],
    ["Sync leads to SalesLine", "How-to", "Map fields and choose who new leads are assigned to."],
  ]),
  ...help("meethub", [
    ["Connect your team calendars", "Getting started", "Bring every team's meetings into one view."],
    ["Customise meeting alerts", "How-to", "Set reminder rules by meeting type and importance."],
    ["Follow-ups aren't being sent", "Troubleshooting", "Check attendee permissions and the meeting's end time."],
  ]),
  ...help("secureline", [
    ["Enroll and verify devices", "Getting started", "Register devices and set the posture checks they must pass."],
    ["Set retention and access policies", "How-to", "Configure rules by team, role or individual."],
    ["Export the audit log", "How-to", "Filter by user, action or date range and export for compliance."],
  ]),
];

/* ------------------------------------------------------------------ */
/* Guides                                                              */
/* ------------------------------------------------------------------ */

export const GUIDE_TOPICS = ["Setup", "Security", "Connecting products", "Best practices"];

export const GUIDES = [
  {
    slug: "single-sign-on-across-products",
    title: "Setting up single sign-on across your Talent Meet products",
    excerpt: "Connect your identity provider once and give your team one login for every product you use.",
    topic: "Security",
    level: "Advanced",
    minutes: 15,
    products: ["secureline", "paycloud", "salesline"],
  },
  {
    slug: "offer-to-first-payslip",
    title: "From offer to first payslip: connecting JobsPlus, PayCloud and AttendX",
    excerpt: "Move a hired candidate into onboarding, payroll and attendance without re-entering their details.",
    topic: "Connecting products",
    level: "Intermediate",
    minutes: 12,
    products: ["jobsplus", "paycloud", "attendx"],
  },
  {
    slug: "rolling-out-workpulse",
    title: "Rolling out WorkPulse with your team's agreement",
    excerpt: "A step-by-step plan for choosing a monitoring policy and introducing it openly.",
    topic: "Best practices",
    level: "Beginner",
    minutes: 9,
    products: ["workpulse"],
  },
  {
    slug: "outbound-with-leadreach-and-salesline",
    title: "Building an outbound pipeline with LeadReach and SalesLine",
    excerpt: "From a filtered lead list to a running multi-channel sequence, with verification in between.",
    topic: "Connecting products",
    level: "Intermediate",
    minutes: 14,
    products: ["leadreach", "salesline", "meethub"],
  },
  {
    slug: "zero-trust-device-policies",
    title: "Configuring zero-trust device policies in SecureLine",
    excerpt: "Decide which devices get access, what they must pass, and what happens when they don't.",
    topic: "Security",
    level: "Advanced",
    minutes: 11,
    products: ["secureline"],
  },
  {
    slug: "migrating-payroll-into-paycloud",
    title: "Migrating payroll records into PayCloud",
    excerpt: "Prepare your data, run a parallel cycle and switch over with confidence.",
    topic: "Setup",
    level: "Intermediate",
    minutes: 13,
    products: ["paycloud"],
  },
  {
    slug: "first-week-with-meethub",
    title: "Your first week with MeetHub",
    excerpt: "Connect calendars, set alert rules and turn on automatic follow-ups.",
    topic: "Setup",
    level: "Beginner",
    minutes: 7,
    products: ["meethub"],
  },
  {
    slug: "preparing-candidates-with-careercompass",
    title: "Pointing candidates to CareerCompass before interviews",
    excerpt: "How recruiters can share structured prep with candidates sourced in JobsPlus.",
    topic: "Best practices",
    level: "Beginner",
    minutes: 6,
    products: ["jobsplus", "careercompass"],
  },
];

/* ------------------------------------------------------------------ */
/* Talent Meet — product catalogue                                     */
/* Single source of truth for clusters, accents, icons and the copy    */
/* used by the homepage grid, product pages and footer.                */
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

/* Product icons */
export const IconJobsPlus = (p) => (
  <Svg {...p}>
    <rect x="3" y="7.5" width="18" height="12.5" rx="2.2" />
    <path d="M8.5 7.5V6a1.8 1.8 0 0 1 1.8-1.8h3.4A1.8 1.8 0 0 1 15.5 6v1.5" />
    <path d="M12 11.2v5M9.5 13.7h5" />
  </Svg>
);

export const IconCareerCompass = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9.3" />
    <path d="M15.6 8.4 13.4 13.4 8.4 15.6l2.2-5 5-2.2Z" />
    <circle cx="12" cy="12" r="0.9" fill="currentColor" stroke="none" />
  </Svg>
);

export const IconBrandPath = (p) => (
  <Svg {...p}>
    <circle cx="5.5" cy="18.5" r="1.9" />
    <circle cx="18.5" cy="5.5" r="1.9" />
    <path d="M7.4 18.5H14a3.25 3.25 0 0 0 0-6.5h-4a3.25 3.25 0 0 1 0-6.5h4.6" />
  </Svg>
);

export const IconPayCloud = (p) => (
  <Svg {...p}>
    <path d="M7 18.5a4 4 0 0 1-.6-7.95 5.6 5.6 0 0 1 10.9 1.2A3.4 3.4 0 0 1 17 18.5H7Z" />
    <circle cx="12" cy="14.3" r="2.1" />
  </Svg>
);

export const IconAttendX = (p) => (
  <Svg {...p}>
    <circle cx="9.5" cy="8" r="3.3" />
    <path d="M3.5 20c0-3.4 2.7-5.7 6-5.7s6 2.3 6 5.7" />
    <path d="m16 11.3 2.1 2.1 3.6-4.2" />
  </Svg>
);

export const IconWorkPulse = (p) => (
  <Svg {...p}>
    <rect x="3" y="4" width="18" height="13" rx="2.5" />
    <path d="M9 20.5h6M12 17v3.5" />
    <path d="M6 11h2.6l1.6-3 2.6 6 1.6-3H18" />
  </Svg>
);

export const IconSalesLine = (p) => (
  <Svg {...p}>
    <path d="M4.3 4h10.4a2 2 0 0 1 2 2v5.2a2 2 0 0 1-2 2H9.4L6 16v-2.8H4.3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
    <path d="M17.2 8.6h2.5a2 2 0 0 1 2 2v5.2a2 2 0 0 1-2 2H18v2.6l-3.2-2.6h-3.6a2 2 0 0 1-2-2v-.6" />
  </Svg>
);

export const IconLeadReach = (p) => (
  <Svg {...p}>
    <path d="M3.5 4.5h17L14 12.5v6.3l-4 1.9v-8.2l-6.5-8Z" />
  </Svg>
);

export const IconMeetHub = (p) => (
  <Svg {...p}>
    <rect x="2.5" y="6" width="13" height="12" rx="2.5" />
    <path d="m15.5 10.8 4.7-2.6a.6.6 0 0 1 .9.5v6.6a.6.6 0 0 1-.9.5l-4.7-2.6" />
  </Svg>
);

export const IconSecureLine = (p) => (
  <Svg {...p}>
    <path d="M12 2.8 19.5 5.5v5.6c0 4.6-3.1 8.2-7.5 10.1-4.4-1.9-7.5-5.5-7.5-10.1V5.5L12 2.8Z" />
    <circle cx="12" cy="10.5" r="1.6" />
    <path d="M12 12.1v3" />
  </Svg>
);

/* Cluster icons */
export const TabIconHire = (p) => (
  <Svg {...p}>
    <circle cx="10" cy="8" r="3.3" />
    <path d="M3.5 20c0-3.4 2.7-5.7 6-5.7 1 0 1.9.2 2.7.6" />
    <circle cx="17.5" cy="16.5" r="2.7" />
    <path d="m19.5 18.5 2 2" />
  </Svg>
);

export const TabIconPeople = (p) => (
  <Svg {...p}>
    <circle cx="9" cy="8.5" r="3" />
    <path d="M3 19.5c0-3.2 2.5-5.3 6-5.3s6 2.1 6 5.3" />
    <circle cx="17" cy="9.5" r="2.4" />
    <path d="M17.5 14.4c2.5.2 4.5 2 4.5 4.6" />
  </Svg>
);

export const TabIconSell = (p) => (
  <Svg {...p}>
    <path d="M4 10v4a1 1 0 0 0 1 1h2.5l7 4V5l-7 4H5a1 1 0 0 0-1 1Z" />
    <path d="M18 9.5a3.5 3.5 0 0 1 0 5M20.5 7a7 7 0 0 1 0 10" />
  </Svg>
);

export const TabIconSecure = (p) => (
  <Svg {...p}>
    <path d="M12 2.8 19.5 5.5v5.6c0 4.6-3.1 8.2-7.5 10.1-4.4-1.9-7.5-5.5-7.5-10.1V5.5L12 2.8Z" />
    <path d="m8.8 11.8 2.2 2.2 4.2-4.6" />
  </Svg>
);

/* ------------------------------------------------------------------ */
/* Clusters — the only thing that changes visually page to page is    */
/* the cluster accent.                                                 */
/* ------------------------------------------------------------------ */

export const CLUSTERS = [
  {
    id: "hire",
    name: "Hire",
    description:
      "Find, prepare, and present talent — on both sides of the hiring table.",
    accent: "#E2583E", // coral
    soft: "#FDEDE9",
    TabIcon: TabIconHire,
    products: ["jobsplus", "careercompass", "brandpath"],
  },
  {
    id: "people",
    name: "Manage People",
    description:
      "Payroll, attendance, and workforce visibility in one operating layer.",
    accent: "#11906A", // emerald
    soft: "#E3F4EC",
    TabIcon: TabIconPeople,
    products: ["paycloud", "attendx", "workpulse"],
  },
  {
    id: "sell",
    name: "Sell & Communicate",
    description:
      "Everything a revenue team needs to find, reach, and meet the right people.",
    accent: "#A3327A", // plum
    soft: "#F7E7F0",
    TabIcon: TabIconSell,
    products: ["salesline", "leadreach", "meethub"],
  },
  {
    id: "secure",
    name: "Secure",
    description: "The trust layer underneath everything else.",
    accent: "#4B3FD1", // indigo
    soft: "#ECEAFB",
    TabIcon: TabIconSecure,
    products: ["secureline"],
  },
];

/* ------------------------------------------------------------------ */
/* Products                                                            */
/* `mock` describes the realistic UI rendered beside each feature —    */
/* see components/product/Mocks.jsx for the available types.           */
/* ------------------------------------------------------------------ */

const PRODUCT_LIST = [
  /* ============================ HIRE ============================== */
  {
    slug: "jobsplus",
    name: "JobsPlus",
    category: "Talent Sourcing",
    cluster: "hire",
    domain: "jobsplus.com.bd",
    Icon: IconJobsPlus,
    tagline:
      "Talent sourcing that gets the right candidates in front of the right recruiters, faster.",
    headline:
      "Find the people worth hiring, not just the people who apply.",
    subhead:
      "JobsPlus sources, filters, and ranks candidates across every channel you post to — so your recruiters spend time interviewing, not searching.",
    secondaryCta: "See JobsPlus in action",
    features: [
      {
        title: "Multi-channel sourcing",
        body: "Pull candidates from job boards, LinkedIn, referrals, and your own database into one ranked pipeline.",
        mock: {
          type: "ranked",
          title: "Senior Frontend Engineer · Pipeline",
          caption: "Ranked across 4 sources",
          rows: [
            { name: "Nusrat Jahan", sub: "Frontend Lead · Pathao", tag: "LinkedIn", score: 94 },
            { name: "Tanvir Ahmed", sub: "Sr. Engineer · bKash", tag: "Referral", score: 89 },
            { name: "Farhana Islam", sub: "React Developer · Brain Station 23", tag: "Job board", score: 83 },
            { name: "Imran Hossain", sub: "UI Engineer · Shohoz", tag: "Database", score: 77 },
            { name: "Sadia Rahman", sub: "Frontend Dev · Chaldal", tag: "Job board", score: 71 },
          ],
        },
      },
      {
        title: "Smart shortlisting",
        body: "Automatic screening against the role's real requirements, not just keyword matching.",
        mock: {
          type: "table",
          title: "Shortlist · requirements check",
          avatars: true,
          caption: "Screened against the role brief",
          head: ["Candidate", "5+ yrs React", "Led a team", "Dhaka / hybrid", "Fit"],
          rows: [
            ["Nusrat Jahan", "yes", "yes", "yes", { pill: "Strong", tone: "ok" }],
            ["Tanvir Ahmed", "yes", "partial", "yes", { pill: "Good", tone: "ok" }],
            ["Farhana Islam", "yes", "no", "yes", { pill: "Review", tone: "warn" }],
            ["Rakib Hasan", "no", "no", "yes", { pill: "Hold", tone: "muted" }],
          ],
        },
      },
      {
        title: "Recruiter collaboration",
        body: "Shared pipelines, notes, and status so hiring managers and recruiters stay in sync.",
        mock: {
          type: "kanban",
          title: "Hiring board · Engineering",
          columns: [
            { name: "Screening", items: [{ title: "Farhana Islam", sub: "2 notes" }, { title: "Sadia Rahman", sub: "Awaiting HM" }] },
            { name: "Interview", items: [{ title: "Tanvir Ahmed", sub: "Thu · 3:00 PM", hot: true }, { title: "Imran Hossain", sub: "Tech round" }] },
            { name: "Offer", items: [{ title: "Nusrat Jahan", sub: "HM approved", hot: true }] },
          ],
        },
      },
      {
        title: "Candidate experience",
        body: "A clean, fast application flow that doesn't lose candidates halfway through.",
        mock: {
          type: "flow",
          title: "Apply · Senior Frontend Engineer",
          steps: ["Profile", "Experience", "Review"],
          active: 1,
          fields: [
            { label: "Current role", value: "Frontend Lead" },
            { label: "Years of experience", value: "6 years" },
            { label: "Résumé", value: "nusrat-jahan-cv.pdf", file: true },
          ],
          button: "Continue",
        },
      },
    ],
    suite:
      "A candidate sourced in JobsPlus can move straight into onboarding in PayCloud and attendance setup in AttendX — no re-entering data, no lost paperwork.",
    connects: ["paycloud", "attendx"],
  },
  {
    slug: "careercompass",
    name: "CareerCompass",
    category: "Career Navigation & Interview Preparation",
    cluster: "hire",
    Icon: IconCareerCompass,
    tagline:
      "Interview prep and career navigation for people who want their next move to count.",
    headline: "Walk into the interview already knowing you're ready.",
    subhead:
      "CareerCompass helps professionals navigate career decisions and prepare for interviews with structure — not just generic tips.",
    secondaryCta: "Start preparing",
    features: [
      {
        title: "Career pathing",
        body: "Clarify your next move based on where you are and where you want to go.",
        mock: {
          type: "path",
          title: "Your path · Product",
          nodes: [
            { label: "Associate PM", sub: "Where you are", state: "done" },
            { label: "Product Manager", sub: "Next move · 12–18 months", state: "current" },
            { label: "Senior PM", sub: "Where you want to go", state: "goal" },
          ],
          gaps: ["Own a roadmap end-to-end", "Lead a pricing experiment", "Present to leadership"],
        },
      },
      {
        title: "Interview preparation",
        body: "Role-specific practice, structured around how the role is actually interviewed.",
        mock: {
          type: "sequence",
          title: "Interview plan · Product Manager",
          steps: [
            { tag: "Round 1", channel: "Screening", text: "Walk me through your background", state: "done" },
            { tag: "Round 2", channel: "Product sense", text: "Design a feature for first-time sellers", state: "active" },
            { tag: "Round 3", channel: "Execution", text: "A key metric dropped 12% — what now?", state: "next" },
            { tag: "Round 4", channel: "Leadership", text: "Tell me about a decision you got wrong", state: "next" },
          ],
        },
      },
      {
        title: "Feedback loops",
        body: "Structured practice with feedback, not just a list of questions.",
        mock: {
          type: "bars",
          title: "Practice feedback · Product sense",
          caption: "Attempt 3 vs. attempt 1",
          series: [
            { label: "Structure", value: 86, prev: 52 },
            { label: "User empathy", value: 78, prev: 61 },
            { label: "Prioritisation", value: 72, prev: 40 },
            { label: "Metrics", value: 64, prev: 45 },
          ],
          legend: ["Latest", "First attempt"],
        },
      },
      {
        title: "Decision support",
        body: "Frameworks for evaluating offers, not just landing them.",
        mock: {
          type: "table",
          title: "Offer comparison",
          caption: "Weighted by what you said matters",
          head: ["", "Offer A", "Offer B"],
          rows: [
            ["Growth path", { pill: "Clear", tone: "ok" }, { pill: "Unclear", tone: "warn" }],
            ["Team & manager", { pill: "Strong", tone: "ok" }, { pill: "Strong", tone: "ok" }],
            ["Flexibility", { pill: "Hybrid", tone: "muted" }, { pill: "Remote", tone: "ok" }],
            ["Your fit score", { strong: "8.4" }, { strong: "7.1" }],
          ],
        },
      },
    ],
    suite:
      "Candidates sourced through JobsPlus can be pointed to CareerCompass to prepare — a full journey, not just a listing.",
    connects: ["jobsplus", "brandpath"],
  },
  {
    slug: "brandpath",
    name: "BrandPath",
    category: "Personal Brand & Resume Strategy",
    cluster: "hire",
    Icon: IconBrandPath,
    tagline:
      "Personal brand and resume strategy that turns a job history into a hiring decision.",
    headline: "A resume is a first impression. Make it the right one.",
    subhead:
      "BrandPath helps professionals build a resume and personal brand that actually reflects what they're worth — with strategy, not just templates.",
    secondaryCta: "Start your resume strategy",
    features: [
      {
        title: "Resume strategy",
        body: "Structured guidance on positioning experience for the roles you actually want.",
        mock: {
          type: "doc",
          title: "Résumé · Ayesha Siddiqua",
          heading: "Ayesha Siddiqua",
          meta: "Marketing Manager · Dhaka",
          blocks: [
            { kind: "label", text: "Experience" },
            { kind: "line", text: "Led brand relaunch across 3 markets, owning a cross-functional team of 9", note: "Lead with outcome — great." },
            { kind: "line", text: "Responsible for social media posting and content calendar", note: "Reframe: what changed because of you?", warn: true },
            { kind: "line", text: "Built the first performance-marketing playbook for the team" },
          ],
        },
      },
      {
        title: "Personal brand review",
        body: "LinkedIn and portfolio guidance that matches your resume's story.",
        mock: {
          type: "profile",
          title: "Brand review · LinkedIn",
          name: "Ayesha Siddiqua",
          role: "Marketing Manager — brand, growth & go-to-market",
          tabs: ["Headline", "About", "Featured"],
          fields: [
            { label: "Headline", value: "Matches résumé positioning", tone: "ok" },
            { label: "About", value: "Too generic — add 2 proof points", tone: "warn" },
            { label: "Featured", value: "Add relaunch case study", tone: "warn" },
            { label: "Portfolio", value: "Consistent story", tone: "ok" },
          ],
        },
      },
      {
        title: "Role-targeted versions",
        body: "Tailor your resume for different roles without starting over.",
        mock: {
          type: "table",
          title: "Résumé versions",
          caption: "One master, three targeted cuts",
          head: ["Version", "Target role", "Emphasis"],
          rows: [
            [{ strong: "Master" }, "—", { pill: "Everything", tone: "muted" }],
            ["Brand", "Brand Manager", { pill: "Storytelling", tone: "accent" }],
            ["Growth", "Growth Lead", { pill: "Metrics", tone: "accent" }],
            ["GTM", "Product Marketing", { pill: "Launches", tone: "accent" }],
          ],
        },
      },
      {
        title: "Expert-informed feedback",
        body: "Guidance built on what hiring teams actually look for.",
        mock: {
          type: "alerts",
          title: "Feedback · Growth version",
          items: [
            { title: "Summary reads like a job description", sub: "Hiring teams skim the top 3 lines first — open with your strongest result.", tag: "High impact", tone: "warn" },
            { title: "Skills section is well targeted", sub: "Matches the language growth teams use in their briefs.", tag: "Keep", tone: "ok" },
            { title: "Two roles overlap in dates", sub: "Clarify the transition so it doesn't raise questions.", tag: "Quick fix", tone: "muted" },
          ],
        },
      },
    ],
    suite:
      "BrandPath pairs naturally with CareerCompass — a strong resume, then real interview readiness.",
    connects: ["careercompass", "jobsplus"],
  },

  /* ======================== MANAGE PEOPLE ========================= */
  {
    slug: "paycloud",
    name: "PayCloud",
    category: "Cloud HR & Payroll Platform",
    cluster: "people",
    Icon: IconPayCloud,
    tagline:
      "Cloud HR and payroll that runs itself, so your HR team doesn't have to.",
    headline: "Payroll that runs itself. HR that finally has time.",
    subhead:
      "PayCloud handles payroll, compliance, and core HR records in one cloud platform — accurate, on time, every cycle.",
    secondaryCta: "See PayCloud in action",
    features: [
      {
        title: "Automated payroll runs",
        body: "Calculations, deductions, and disbursement handled on schedule.",
        mock: {
          type: "table",
          title: "October payroll run",
          avatars: true,
          caption: "Scheduled · disburses 28 Oct",
          head: ["Employee", "Gross", "Deductions", "Net", ""],
          rows: [
            ["Rafiq Hasan", "৳ 95,000", "৳ 8,550", "৳ 86,450", { pill: "Ready", tone: "ok" }],
            ["Laila Karim", "৳ 1,20,000", "৳ 12,400", "৳ 1,07,600", { pill: "Ready", tone: "ok" }],
            ["Mehedi Hasan", "৳ 72,000", "৳ 5,900", "৳ 66,100", { pill: "Ready", tone: "ok" }],
            ["Arif Chowdhury", "৳ 88,000", "৳ 7,920", "৳ 80,080", { pill: "Check", tone: "warn" }],
          ],
        },
      },
      {
        title: "Compliance built in",
        body: "Tax and labor rules kept current so you don't have to track them.",
        mock: {
          type: "log",
          title: "Compliance updates",
          rows: [
            { time: "Today", who: "Income tax slabs", action: "FY rules applied to all payslips", status: "ok" },
            { time: "2 Oct", who: "Provident fund", action: "Contribution rate verified", status: "ok" },
            { time: "28 Sep", who: "Festival bonus", action: "Eligibility rules updated", status: "info" },
            { time: "15 Sep", who: "Leave policy", action: "Labour-law minimums checked", status: "ok" },
          ],
        },
      },
      {
        title: "Self-service HR",
        body: "Employees manage their own documents, leave, and records.",
        mock: {
          type: "flow",
          title: "My HR · Request leave",
          steps: ["Type", "Dates", "Submit"],
          active: 2,
          fields: [
            { label: "Leave type", value: "Annual leave" },
            { label: "Dates", value: "3 Nov – 6 Nov · 4 days" },
            { label: "Balance after", value: "11 days remaining" },
          ],
          button: "Submit request",
        },
      },
      {
        title: "Centralized records",
        body: "One system of record for every employee, from hire to exit.",
        mock: {
          type: "profile",
          title: "Employee record",
          name: "Laila Karim",
          role: "Finance Manager · Joined Mar 2022",
          tabs: ["Profile", "Payroll", "Documents", "History"],
          fields: [
            { label: "Employee ID", value: "TM-00412" },
            { label: "Department", value: "Finance" },
            { label: "Contract", value: "Permanent · signed", tone: "ok" },
            { label: "Bank details", value: "Verified", tone: "ok" },
          ],
        },
      },
    ],
    suite:
      "Candidates hired through JobsPlus flow directly into PayCloud for onboarding — no duplicate data entry.",
    connects: ["jobsplus", "attendx", "workpulse"],
  },
  {
    slug: "attendx",
    name: "AttendX",
    category: "Smart Attendance & HR Automation",
    cluster: "people",
    Icon: IconAttendX,
    tagline:
      "Smart attendance and HR automation that replaces spreadsheets and guesswork.",
    headline:
      "Attendance that tracks itself. HR admin that finally shrinks.",
    subhead:
      "AttendX automates attendance, leave, and routine HR admin — accurate records without spreadsheets or manual approvals.",
    secondaryCta: "See AttendX in action",
    features: [
      {
        title: "Automated attendance tracking",
        body: "Clock-in, leave, and exceptions tracked without manual entry.",
        mock: {
          type: "table",
          title: "Today · Operations team",
          avatars: true,
          caption: "Tracked automatically",
          head: ["Employee", "In", "Out", "Status"],
          rows: [
            ["Rafiq Hasan", "8:56 AM", "—", { pill: "Present", tone: "ok" }],
            ["Sadia Rahman", "9:22 AM", "—", { pill: "Late", tone: "warn" }],
            ["Mehedi Hasan", "—", "—", { pill: "On leave", tone: "muted" }],
            ["Laila Karim", "8:41 AM", "—", { pill: "Remote", tone: "accent" }],
          ],
        },
      },
      {
        title: "Smart approvals",
        body: "Leave and exception requests routed and approved automatically by policy.",
        mock: {
          type: "alerts",
          title: "Requests",
          items: [
            { title: "Sadia Rahman · Sick leave, 1 day", sub: "Within policy — balance available", tag: "Auto-approved", tone: "ok" },
            { title: "Imran Hossain · Late arrival exception", sub: "Routed to line manager", tag: "Pending", tone: "warn" },
            { title: "Rafiq Hasan · Annual leave, 5 days", sub: "Within policy — no team conflict", tag: "Auto-approved", tone: "ok" },
          ],
        },
      },
      {
        title: "HR workflow automation",
        body: "Routine HR tasks — onboarding steps, document requests — run themselves.",
        mock: {
          type: "sequence",
          title: "Onboarding · Nusrat Jahan",
          steps: [
            { tag: "Day –3", channel: "Documents", text: "NID and certificates requested", state: "done" },
            { tag: "Day 1", channel: "Setup", text: "Shift, location and leave policy assigned", state: "done" },
            { tag: "Day 1", channel: "Access", text: "Attendance device enrolled", state: "active" },
            { tag: "Day 30", channel: "Review", text: "Probation check-in scheduled", state: "next" },
          ],
        },
      },
      {
        title: "Real-time records",
        body: "Always-current attendance data, ready for payroll and reporting.",
        mock: {
          type: "bars",
          title: "October attendance",
          caption: "Live · synced to payroll",
          series: [
            { label: "Operations", value: 96 },
            { label: "Sales", value: 91 },
            { label: "Finance", value: 98 },
            { label: "Engineering", value: 88 },
          ],
          suffix: "%",
        },
      },
    ],
    suite:
      "AttendX feeds attendance data straight into PayCloud for payroll — one source of truth, no reconciliation.",
    connects: ["paycloud", "workpulse"],
  },
  {
    slug: "workpulse",
    name: "WorkPulse",
    category: "Real-Time Remote Workforce Monitor",
    cluster: "people",
    Icon: IconWorkPulse,
    tagline:
      "Real-time visibility into remote and distributed teams, without the micromanaging.",
    headline:
      "Know how your remote team is really doing — without hovering.",
    subhead:
      "WorkPulse gives managers real-time visibility into distributed teams' activity and workload, built for accountability, not surveillance.",
    secondaryCta: "See WorkPulse in action",
    features: [
      {
        title: "Real-time activity insight",
        body: "See workload and status across your team as it happens.",
        mock: {
          type: "table",
          title: "Team · Right now",
          avatars: true,
          caption: "Updated live",
          head: ["Member", "Status", "Working on"],
          rows: [
            ["Tanvir Ahmed", { pill: "Focus", tone: "accent" }, "Checkout redesign"],
            ["Farhana Islam", { pill: "Active", tone: "ok" }, "Sprint review prep"],
            ["Imran Hossain", { pill: "Meeting", tone: "muted" }, "Client sync"],
            ["Sadia Rahman", { pill: "Away", tone: "warn" }, "—"],
          ],
        },
      },
      {
        title: "Privacy-respecting design",
        body: "Configurable monitoring depth, with clear boundaries teams agree to.",
        mock: {
          type: "settings",
          title: "Monitoring policy · Product team",
          groups: [
            {
              label: "What's collected",
              rows: [
                { label: "Activity level", value: true },
                { label: "App categories", value: "Category only" },
                { label: "Screenshots", value: false },
              ],
            },
            {
              label: "Transparency",
              rows: [
                { label: "Employees see their own data", value: true },
                { label: "Off outside working hours", value: true },
              ],
            },
          ],
        },
      },
      {
        title: "Workload balancing",
        body: "Spot overload or idle capacity before it becomes a problem.",
        mock: {
          type: "bars",
          title: "Workload · This week",
          caption: "Capacity used",
          series: [
            { label: "Tanvir", value: 118, flag: "Over" },
            { label: "Farhana", value: 92 },
            { label: "Imran", value: 74 },
            { label: "Sadia", value: 41, flag: "Room" },
          ],
          max: 120,
          suffix: "%",
        },
      },
      {
        title: "Automated reporting",
        body: "Weekly summaries for managers without manual check-ins.",
        mock: {
          type: "doc",
          title: "Weekly summary · Product team",
          heading: "Week of 6 October",
          meta: "Sent automatically every Friday",
          blocks: [
            { kind: "label", text: "Highlights" },
            { kind: "check", text: "Checkout redesign moved to QA", done: true },
            { kind: "check", text: "Sprint goals 4 of 5 complete", done: true },
            { kind: "label", text: "Worth a look" },
            { kind: "line", text: "Tanvir has been over capacity two weeks running", warn: true, note: "Consider rebalancing" },
          ],
        },
      },
    ],
    suite:
      "WorkPulse data feeds attendance records in AttendX and payroll hours in PayCloud automatically.",
    connects: ["attendx", "paycloud"],
  },

  /* ===================== SELL & COMMUNICATE ======================= */
  {
    slug: "salesline",
    name: "SalesLine",
    category: "Unified Sales Communication",
    cluster: "sell",
    Icon: IconSalesLine,
    tagline:
      "Unified sales communication across every channel your buyers actually use.",
    headline:
      "Every channel your buyers use. One inbox for your team.",
    subhead:
      "SalesLine brings email, calls, chat, and social outreach into a single thread per contact — so no rep loses context switching between tools.",
    secondaryCta: "See SalesLine in action",
    features: [
      {
        title: "Omnichannel inbox",
        body: "Email, calls, LinkedIn, and chat in one unified view per contact.",
        mock: {
          type: "chat",
          title: "Inbox · Arif Chowdhury, Meghna Foods",
          sidebar: ["Arif Chowdhury", "Laila Karim", "Rafiq Hasan", "Nusrat Jahan"],
          messages: [
            { channel: "Email", text: "Thanks for the deck — can we see pricing for 200 seats?" },
            { channel: "Call", text: "Call · 14 min — discussed rollout timeline", system: true },
            { channel: "LinkedIn", text: "Sent the proposal over. Happy to walk your CFO through it.", me: true },
            { channel: "Chat", text: "Perfect. Thursday works for us." },
          ],
        },
      },
      {
        title: "Shared context",
        body: "Every rep sees the full conversation history, not just their own thread.",
        mock: {
          type: "log",
          title: "Meghna Foods · Activity",
          rows: [
            { time: "Today", who: "Sadia R.", action: "Booked demo for Thursday", status: "ok" },
            { time: "Mon", who: "Imran H.", action: "Logged call — budget confirmed", status: "info" },
            { time: "Last wk", who: "Sadia R.", action: "Sent proposal v2", status: "info" },
            { time: "Sep", who: "LeadReach", action: "Lead created and verified", status: "ok" },
          ],
        },
      },
      {
        title: "Sequenced outreach",
        body: "Automated, multi-step sequences across channels.",
        mock: {
          type: "sequence",
          title: "Sequence · New logistics leads",
          steps: [
            { tag: "Day 1", channel: "Email", text: "Intro with one relevant case", state: "done" },
            { tag: "Day 3", channel: "LinkedIn", text: "Connect with a short note", state: "done" },
            { tag: "Day 6", channel: "Call", text: "Quick discovery call", state: "active" },
            { tag: "Day 10", channel: "Email", text: "Follow-up with a meeting link", state: "next" },
          ],
        },
      },
      {
        title: "Pipeline visibility",
        body: "Real-time view of where every deal actually stands.",
        mock: {
          type: "kanban",
          title: "Pipeline · Q4",
          columns: [
            { name: "Qualified", items: [{ title: "Delta Logistics", sub: "৳ 12L" }, { title: "Nexa Retail", sub: "৳ 8L" }] },
            { name: "Proposal", items: [{ title: "Meghna Foods", sub: "৳ 24L", hot: true }, { title: "Orbit Pharma", sub: "৳ 15L" }] },
            { name: "Closing", items: [{ title: "Bay Textiles", sub: "৳ 31L", hot: true }] },
          ],
        },
      },
    ],
    suite:
      "Leads from LeadReach and meetings from MeetHub land directly in SalesLine — your reps work one system, not four.",
    connects: ["leadreach", "meethub"],
  },
  {
    slug: "leadreach",
    name: "LeadReach",
    category: "High-Volume B2B Lead Extractor",
    cluster: "sell",
    Icon: IconLeadReach,
    tagline:
      "High-volume B2B lead extraction that feeds your pipeline, not your spam folder.",
    headline: "Your pipeline, filled before your team wakes up.",
    subhead:
      "LeadReach extracts and qualifies B2B leads at scale — pulling verified contact and company data so your sales team starts every day with a full pipeline, not an empty one.",
    secondaryCta: "See a sample lead list",
    features: [
      {
        title: "High-volume extraction",
        body: "Pull thousands of qualified leads from public and licensed data sources.",
        mock: {
          type: "table",
          title: "Extraction · Logistics, Bangladesh",
          caption: "Running overnight",
          progress: 72,
          head: ["Company", "Industry", "Size", "Contact"],
          rows: [
            ["Delta Logistics", "Logistics", "201–500", "Head of Ops"],
            ["Bay Freight", "Logistics", "51–200", "COO"],
            ["Karnaphuli Lines", "Shipping", "501–1k", "Procurement"],
            ["Swift Courier", "Courier", "51–200", "Founder"],
          ],
        },
      },
      {
        title: "Built-in verification",
        body: "Emails and contact data checked before they ever reach a rep.",
        mock: {
          type: "table",
          title: "Verification",
          avatars: true,
          caption: "Checked before hand-off",
          head: ["Contact", "Email", "Status"],
          rows: [
            ["Rafiq Hasan", "rafiq@deltalog.com", { pill: "Verified", tone: "ok" }],
            ["Laila Karim", "laila@bayfreight.co", { pill: "Verified", tone: "ok" }],
            ["M. Hasan", "info@swiftcourier", { pill: "Invalid", tone: "bad" }],
            ["Arif C.", "arif@karnaphuli.com", { pill: "Catch-all", tone: "warn" }],
          ],
        },
      },
      {
        title: "Firmographic filtering",
        body: "Target by industry, company size, geography, and role.",
        mock: {
          type: "filters",
          title: "Build a list",
          groups: [
            { label: "Industry", chips: ["Logistics", "Retail", "Pharma", "Textiles"], on: [0, 3] },
            { label: "Company size", chips: ["1–50", "51–200", "201–500", "500+"], on: [1, 2] },
            { label: "Geography", chips: ["Dhaka", "Chattogram", "Sylhet", "Khulna"], on: [0, 1] },
            { label: "Role", chips: ["Founder", "COO", "Head of Ops", "Procurement"], on: [1, 2] },
          ],
          result: "Matching companies ready to extract",
        },
      },
      {
        title: "Direct pipeline sync",
        body: "Leads flow straight into SalesLine, ready to work.",
        mock: {
          type: "kanban",
          title: "SalesLine · New leads",
          columns: [
            { name: "From LeadReach", items: [{ title: "Delta Logistics", sub: "Verified · Head of Ops", hot: true }, { title: "Bay Freight", sub: "Verified · COO" }] },
            { name: "Assigned", items: [{ title: "Karnaphuli Lines", sub: "Sadia R." }] },
            { name: "Contacted", items: [{ title: "Nexa Retail", sub: "Imran H." }] },
          ],
        },
      },
    ],
    suite:
      "Every lead LeadReach extracts can be contacted, tracked, and closed without leaving SalesLine — no exporting, no manual handoff.",
    connects: ["salesline", "meethub"],
  },
  {
    slug: "meethub",
    name: "MeetHub",
    category: "Centralized Meeting Management & Alerts",
    cluster: "sell",
    Icon: IconMeetHub,
    tagline:
      "Centralized meeting management and alerts, so nothing gets missed or double-booked.",
    headline:
      "Every meeting, in one place — and nothing slips through.",
    subhead:
      "MeetHub centralizes scheduling, reminders, and follow-ups across your whole company, so no meeting gets missed, double-booked, or forgotten.",
    secondaryCta: "See MeetHub in action",
    features: [
      {
        title: "Unified calendar view",
        body: "See every team's meetings in one place, without switching tools.",
        mock: {
          type: "calendar",
          title: "All teams · This week",
          days: ["Mon", "Tue", "Wed", "Thu", "Fri"],
          events: [
            { d: 0, s: 0, h: 1, title: "Sales stand-up" },
            { d: 0, s: 2, h: 2, title: "Hiring panel", alt: true },
            { d: 1, s: 1, h: 1, title: "Meghna Foods demo" },
            { d: 2, s: 0, h: 1, title: "Leadership sync", alt: true },
            { d: 2, s: 3, h: 1, title: "Payroll review" },
            { d: 3, s: 1, h: 2, title: "Quarterly planning", alt: true },
            { d: 4, s: 2, h: 1, title: "Team retro" },
          ],
        },
      },
      {
        title: "Smart alerts",
        body: "Reminders that adjust based on meeting importance and attendee behavior.",
        mock: {
          type: "alerts",
          title: "Alerts",
          items: [
            { title: "Meghna Foods demo in 30 min", sub: "Client meeting — extra reminder sent to all 4 attendees", tag: "High", tone: "bad" },
            { title: "Hiring panel · prep notes not opened", sub: "Nudged Tanvir and Farhana", tag: "Nudge", tone: "warn" },
            { title: "Team retro moved to 4:00 PM", sub: "Everyone has accepted", tag: "Info", tone: "muted" },
          ],
        },
      },
      {
        title: "Automatic follow-ups",
        body: "Action items and notes sent out the moment a meeting ends.",
        mock: {
          type: "doc",
          title: "Follow-up · Meghna Foods demo",
          heading: "Meghna Foods — product demo",
          meta: "Sent to 4 attendees · just now",
          blocks: [
            { kind: "label", text: "Action items" },
            { kind: "check", text: "Share 200-seat pricing — Sadia", done: true },
            { kind: "check", text: "Security questionnaire — Imran", done: false },
            { kind: "check", text: "Book CFO walkthrough — Sadia", done: false },
          ],
        },
      },
      {
        title: "Conflict detection",
        body: "Flags double-bookings and scheduling clashes before they happen.",
        mock: {
          type: "calendar",
          title: "Thursday · Laila Karim",
          days: ["Wed", "Thu", "Fri"],
          events: [
            { d: 0, s: 1, h: 1, title: "Budget review" },
            { d: 1, s: 1, h: 2, title: "Quarterly planning", alt: true },
            { d: 1, s: 2, h: 1, title: "Vendor call", conflict: true },
            { d: 2, s: 0, h: 1, title: "1:1 with CFO" },
          ],
          warning: "Vendor call overlaps Quarterly planning — suggest 3:00 PM?",
        },
      },
    ],
    suite:
      "Meetings booked through MeetHub log automatically against deals in SalesLine and candidates in JobsPlus — context follows the meeting, not the other way around.",
    connects: ["salesline", "jobsplus"],
  },

  /* ============================ SECURE ============================ */
  {
    slug: "secureline",
    name: "SecureLine",
    category: "Zero-Trust Enterprise Messenger",
    cluster: "secure",
    Icon: IconSecureLine,
    tagline:
      "A zero-trust enterprise messenger built for teams who can't afford a leak.",
    headline: "A messenger your security team actually approves of.",
    subhead:
      "SecureLine gives teams the speed of instant messaging with the control of zero-trust architecture — every device verified, every message encrypted, every action logged.",
    secondaryCta: "Request a security briefing",
    features: [
      {
        title: "Zero-trust by default",
        body: "No device or user is trusted automatically, even inside your network.",
        mock: {
          type: "table",
          title: "Device posture",
          caption: "Every session verified",
          head: ["Device", "User", "Posture", "Access"],
          rows: [
            ["MacBook Pro", "Laila K.", { pill: "Healthy", tone: "ok" }, "Granted"],
            ["Pixel 8", "Rafiq H.", { pill: "Healthy", tone: "ok" }, "Granted"],
            ["Windows PC", "Unknown", { pill: "Unmanaged", tone: "bad" }, "Blocked"],
            ["iPhone 15", "Arif C.", { pill: "OS outdated", tone: "warn" }, "Limited"],
          ],
        },
      },
      {
        title: "End-to-end encryption",
        body: "Messages, files, and calls are encrypted in transit and at rest.",
        mock: {
          type: "chat",
          title: "# finance-close",
          banner: "End-to-end encrypted · keys never leave your devices",
          messages: [
            { from: "Laila Karim", text: "Uploading the Q3 board pack now." },
            { from: "Laila Karim", file: "Q3-board-pack.pdf · 4.2 MB" },
            { text: "Got it — reviewing before the 4 PM call.", me: true },
            { from: "Arif Chowdhury", text: "Joining the call from the office." },
          ],
        },
      },
      {
        title: "Granular admin controls",
        body: "Set retention, access, and device policies by team, role, or individual.",
        mock: {
          type: "settings",
          title: "Policy · Finance team",
          groups: [
            {
              label: "Retention",
              rows: [
                { label: "Message retention", value: "7 years" },
                { label: "Allow message deletion", value: false },
              ],
            },
            {
              label: "Access",
              rows: [
                { label: "Managed devices only", value: true },
                { label: "Block downloads on mobile", value: true },
                { label: "External guests", value: false },
              ],
            },
          ],
        },
      },
      {
        title: "Full audit trail",
        body: "Every action is logged for compliance, without slowing anyone down.",
        mock: {
          type: "log",
          title: "Audit log",
          rows: [
            { time: "14:02", who: "Laila K.", action: "Shared file in #finance-close", status: "info" },
            { time: "13:57", who: "System", action: "Blocked sign-in from unmanaged device", status: "bad" },
            { time: "13:40", who: "Admin", action: "Updated Finance retention policy", status: "warn" },
            { time: "13:12", who: "Rafiq H.", action: "Verified new device", status: "ok" },
          ],
        },
      },
    ],
    suite:
      "SecureLine is the default communication layer other Talent Meet products build on — meeting alerts from MeetHub and sales messages from SalesLine can route through the same secure channel.",
    connects: ["meethub", "salesline"],
  },
];

export const PRODUCTS = Object.fromEntries(PRODUCT_LIST.map((p) => [p.slug, p]));

export const getCluster = (id) => CLUSTERS.find((c) => c.id === id);

export const productHref = (slug) => `/products/${slug}`;

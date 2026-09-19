import React, { useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/* Design tokens — one background, one accent                          */
/* ------------------------------------------------------------------ */

const BG = "#E1E1E1";
const ACCENT = "#C2352B";
const INK = "#030302";
const LINE = "rgba(3,3,2,0.16)";
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
const SANS =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

/* ------------------------------------------------------------------ */
/* Icons — 24px grid, 1.4 stroke, currentColor (matches FeaturesRow)   */
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
const IconJobsPlus = () => (
  <Svg>
    <rect x="3" y="7.5" width="18" height="12.5" rx="2.2" />
    <path d="M8.5 7.5V6a1.8 1.8 0 0 1 1.8-1.8h3.4A1.8 1.8 0 0 1 15.5 6v1.5" />
    <path d="M12 11.2v5M9.5 13.7h5" />
  </Svg>
);

const IconCareerCompass = () => (
  <Svg>
    <circle cx="12" cy="12" r="9.3" />
    <path d="M15.6 8.4 13.4 13.4 8.4 15.6l2.2-5 5-2.2Z" />
    <circle cx="12" cy="12" r="0.9" fill="currentColor" stroke="none" />
  </Svg>
);

const IconBrandPath = () => (
  <Svg>
    <circle cx="5.5" cy="18.5" r="1.9" />
    <circle cx="18.5" cy="5.5" r="1.9" />
    <path d="M7.4 18.5H14a3.25 3.25 0 0 0 0-6.5h-4a3.25 3.25 0 0 1 0-6.5h4.6" />
  </Svg>
);

const IconPayCloud = () => (
  <Svg>
    <path d="M7 18.5a4 4 0 0 1-.6-7.95 5.6 5.6 0 0 1 10.9 1.2A3.4 3.4 0 0 1 17 18.5H7Z" />
    <circle cx="12" cy="14.3" r="2.1" />
  </Svg>
);

const IconAttendX = () => (
  <Svg>
    <circle cx="9.5" cy="8" r="3.3" />
    <path d="M3.5 20c0-3.4 2.7-5.7 6-5.7s6 2.3 6 5.7" />
    <path d="m16 11.3 2.1 2.1 3.6-4.2" />
  </Svg>
);

const IconWorkPulse = () => (
  <Svg>
    <rect x="3" y="4" width="18" height="13" rx="2.5" />
    <path d="M9 20.5h6M12 17v3.5" />
    <path d="M6 11h2.6l1.6-3 2.6 6 1.6-3H18" />
  </Svg>
);

const IconSalesLine = () => (
  <Svg>
    <path d="M4.3 4h10.4a2 2 0 0 1 2 2v5.2a2 2 0 0 1-2 2H9.4L6 16v-2.8H4.3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
    <path d="M17.2 8.6h2.5a2 2 0 0 1 2 2v5.2a2 2 0 0 1-2 2H18v2.6l-3.2-2.6h-3.6a2 2 0 0 1-2-2v-.6" />
  </Svg>
);

const IconLeadReach = () => (
  <Svg>
    <path d="M3.5 4.5h17L14 12.5v6.3l-4 1.9v-8.2l-6.5-8Z" />
  </Svg>
);

const IconMeetHub = () => (
  <Svg>
    <rect x="2.5" y="6" width="13" height="12" rx="2.5" />
    <path d="m15.5 10.8 4.7-2.6a.6.6 0 0 1 .9.5v6.6a.6.6 0 0 1-.9.5l-4.7-2.6" />
  </Svg>
);

const IconSecureLine = () => (
  <Svg>
    <path d="M12 2.8 19.5 5.5v5.6c0 4.6-3.1 8.2-7.5 10.1-4.4-1.9-7.5-5.5-7.5-10.1V5.5L12 2.8Z" />
    <circle cx="12" cy="10.5" r="1.6" />
    <path d="M12 12.1v3" />
  </Svg>
);

/* Cluster (tab) icons */
const TabIconHire = () => (
  <Svg>
    <circle cx="10" cy="8" r="3.3" />
    <path d="M3.5 20c0-3.4 2.7-5.7 6-5.7 1 0 1.9.2 2.7.6" />
    <circle cx="17.5" cy="16.5" r="2.7" />
    <path d="m19.5 18.5 2 2" />
  </Svg>
);

const TabIconPeople = () => (
  <Svg>
    <circle cx="9" cy="8.5" r="3" />
    <path d="M3 19.5c0-3.2 2.5-5.3 6-5.3s6 2.1 6 5.3" />
    <circle cx="17" cy="9.5" r="2.4" />
    <path d="M17.5 14.4c2.5.2 4.5 2 4.5 4.6" />
  </Svg>
);

const TabIconSell = () => (
  <Svg>
    <path d="M4 10v4a1 1 0 0 0 1 1h2.5l7 4V5l-7 4H5a1 1 0 0 0-1 1Z" />
    <path d="M18 9.5a3.5 3.5 0 0 1 0 5M20.5 7a7 7 0 0 1 0 10" />
  </Svg>
);

const TabIconSecure = () => (
  <Svg>
    <path d="M12 2.8 19.5 5.5v5.6c0 4.6-3.1 8.2-7.5 10.1-4.4-1.9-7.5-5.5-7.5-10.1V5.5L12 2.8Z" />
    <path d="m8.8 11.8 2.2 2.2 4.2-4.6" />
  </Svg>
);

const ArrowIcon = ({ nudge }) => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    style={{
      transform: nudge ? "translateX(4px)" : "translateX(0)",
      transition: `transform 300ms ${EASE}`,
    }}
  >
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
);

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const CLUSTERS = [
  {
    name: "Hire",
    description:
      "Find, prepare, and present talent — on both sides of the hiring table.",
    TabIcon: TabIconHire,
    products: [
      {
        name: "JobsPlus",
        description:
          "Talent sourcing that gets the right candidates in front of the right recruiters, faster.",
        Icon: IconJobsPlus,
      },
      {
        name: "CareerCompass",
        description:
          "Interview prep and career navigation for people who want their next move to count.",
        Icon: IconCareerCompass,
      },
      {
        name: "BrandPath",
        description:
          "Personal brand and resume strategy that turns a job history into a hiring decision.",
        Icon: IconBrandPath,
      },
    ],
  },
  {
    name: "Manage People",
    description:
      "Payroll, attendance, and workforce visibility in one operating layer.",
    TabIcon: TabIconPeople,
    products: [
      {
        name: "PayCloud",
        description:
          "Cloud HR and payroll that runs itself, so your HR team doesn't have to.",
        Icon: IconPayCloud,
      },
      {
        name: "AttendX",
        description:
          "Smart attendance and HR automation that replaces spreadsheets and guesswork.",
        Icon: IconAttendX,
      },
      {
        name: "WorkPulse",
        description:
          "Real-time visibility into remote and distributed teams, without the micromanaging.",
        Icon: IconWorkPulse,
      },
    ],
  },
  {
    name: "Sell & Communicate",
    description:
      "Everything a revenue team needs to find, reach, and meet the right people.",
    TabIcon: TabIconSell,
    products: [
      {
        name: "SalesLine",
        description:
          "Unified sales communication across every channel your buyers actually use.",
        Icon: IconSalesLine,
      },
      {
        name: "LeadReach",
        description:
          "High-volume B2B lead extraction that feeds your pipeline, not your spam folder.",
        Icon: IconLeadReach,
      },
      {
        name: "MeetHub",
        description:
          "Centralized meeting management and alerts, so nothing gets missed or double-booked.",
        Icon: IconMeetHub,
      },
    ],
  },
  {
    name: "Secure",
    description: "The trust layer underneath everything else.",
    TabIcon: TabIconSecure,
    products: [
      {
        name: "SecureLine",
        description:
          "A zero-trust enterprise messenger built for teams who can't afford a leak.",
        Icon: IconSecureLine,
      },
    ],
  },
];

const KEYFRAMES = `
@keyframes eco-rise {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
.eco-rise { animation: eco-rise 520ms ${EASE} both; }
@media (prefers-reduced-motion: reduce) {
  .eco-rise { animation: none; }
}
`;

/* ------------------------------------------------------------------ */
/* Tab                                                                 */
/* ------------------------------------------------------------------ */

const Tab = React.forwardRef(function Tab(
  { cluster, index, selected, onSelect, onKeyDown },
  ref,
) {
  const [hover, setHover] = useState(false);
  const { name, description, TabIcon } = cluster;

  return (
    <button
      ref={ref}
      type="button"
      role="tab"
      id={`eco-tab-${index}`}
      aria-selected={selected}
      aria-controls="eco-panel"
      tabIndex={selected ? 0 : -1}
      onClick={() => onSelect(index)}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative flex shrink-0 items-center gap-3 text-left xl:items-start"
      style={{
        border: "none",
        background: "transparent",
        cursor: "pointer",
        borderRadius: 6,
        padding: "16px 20px 16px 24px",
        fontFamily: SANS,
      }}
    >
      {/* Soft highlight that fades out to the right (like the reference) */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 6,
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.85), rgba(255,255,255,0.05))",
          opacity: selected ? 1 : hover ? 0.5 : 0,
          transition: "opacity 320ms ease",
        }}
      />

      {/* Active indicator — vertical layout: sits on the guide line */}
      <span
        aria-hidden="true"
        className="hidden xl:block"
        style={{
          position: "absolute",
          left: 0,
          top: 10,
          bottom: 10,
          width: 2,
          borderRadius: 2,
          background: ACCENT,
          transformOrigin: "center",
          transform: selected ? "scaleY(1)" : "scaleY(0)",
          opacity: selected ? 1 : 0,
          transition: `transform 420ms ${EASE}, opacity 200ms ease`,
        }}
      />

      {/* Active indicator — horizontal layout: sits on the bottom line */}
      <span
        aria-hidden="true"
        className="xl:hidden"
        style={{
          position: "absolute",
          left: 12,
          right: 12,
          bottom: 0,
          height: 2,
          borderRadius: 2,
          background: ACCENT,
          transformOrigin: "center",
          transform: selected ? "scaleX(1)" : "scaleX(0)",
          opacity: selected ? 1 : 0,
          transition: `transform 420ms ${EASE}, opacity 200ms ease`,
        }}
      />

      <span
        className="relative flex shrink-0 items-center justify-center"
        style={{
          width: 40,
          height: 40,
          borderRadius: 12,
          background: selected ? ACCENT : "rgba(255,255,255,0.7)",
          color: selected ? "#FFFFFF" : INK,
          transition: "background-color 280ms ease, color 280ms ease",
        }}
      >
        <TabIcon />
      </span>

      <span className="relative block">
        <span
          className="block"
          style={{
            fontSize: 17,
            lineHeight: 1.3,
            fontWeight: 600,
            color: selected ? INK : "rgba(3,3,2,0.55)",
            transition: "color 280ms ease",
            whiteSpace: "nowrap",
          }}
        >
          {name}
        </span>
        <span
          className="hidden xl:block"
          style={{
            marginTop: 4,
            fontSize: 14,
            lineHeight: 1.5,
            fontStyle: "italic",
            color: selected ? "rgba(3,3,2,0.78)" : "rgba(3,3,2,0.5)",
            transition: "color 280ms ease",
          }}
        >
          {description}
        </span>
      </span>
    </button>
  );
});

/* ------------------------------------------------------------------ */
/* Card                                                                */
/* ------------------------------------------------------------------ */

const ProductCard = ({ product, delay }) => {
  const [active, setActive] = useState(false);
  const { name, description, Icon } = product;

  return (
    <li
      className="eco-rise h-full"
      style={{
        listStyle: "none",
        margin: 0,
        padding: 0,
        animationDelay: `${delay}ms`,
      }}
    >
      <article
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        className="flex h-full flex-col"
        style={{
          background: "#FFFFFF",
          borderRadius: 16,
          padding: 24,
          border: `1px solid ${active ? ACCENT : BG}`,
          transform: active ? "translateY(-4px)" : "translateY(0)",
          boxShadow: active
            ? `0 18px 36px -20px ${ACCENT}80`
            : "0 0 0 0 rgba(0,0,0,0)",
          transition: `transform 320ms ${EASE}, border-color 240ms ease, box-shadow 320ms ${EASE}`,
          fontFamily: SANS,
        }}
      >
        {/* Icon tile */}
        <span
          className="flex items-center justify-center"
          style={{
            width: 48,
            height: 48,
            borderRadius: 12,
            background: active ? ACCENT : "#F1F1F1",
            color: active ? "#FFFFFF" : INK,
            transition: "background-color 260ms ease, color 260ms ease",
          }}
        >
          <Icon />
        </span>

        <h4
          style={{
            margin: "20px 0 0",
            fontSize: 18,
            lineHeight: 1.3,
            fontWeight: 500,
            color: INK,
            letterSpacing: "-0.005em",
          }}
        >
          {name}
        </h4>

        <p
          style={{
            margin: "8px 0 0",
            fontSize: 15,
            lineHeight: 1.55,
            fontWeight: 400,
            color: "rgba(3,3,2,0.72)",
          }}
        >
          {description}
        </p>

        <a
          href="#"
          aria-label={`Learn more about ${name}`}
          className="mt-auto inline-flex items-center gap-1.5 self-start"
          style={{
            paddingTop: 20,
            fontSize: 15,
            fontWeight: 500,
            color: ACCENT,
            textDecoration: "none",
            borderRadius: 6,
          }}
        >
          <span
            style={{
              textDecoration: active ? "underline" : "none",
              textUnderlineOffset: 4,
              textDecorationThickness: 1,
            }}
          >
            Learn more
          </span>
          <ArrowIcon nudge={active} />
        </a>
      </article>
    </li>
  );
};

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

const ProductEcosystemGrid = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef([]);
  const cluster = CLUSTERS[activeIndex];

  const handleKeyDown = (e) => {
    const last = CLUSTERS.length - 1;
    let next = null;

    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      next = activeIndex === last ? 0 : activeIndex + 1;
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      next = activeIndex === 0 ? last : activeIndex - 1;
    } else if (e.key === "Home") {
      next = 0;
    } else if (e.key === "End") {
      next = last;
    }

    if (next !== null) {
      e.preventDefault();
      setActiveIndex(next);
      tabRefs.current[next]?.focus();
    }
  };

  return (
    <section
      aria-label="Product ecosystem"
      className="w-full px-6"
      style={{
        background: BG,
        paddingTop: 96,
        paddingBottom: 96,
        fontFamily: SANS,
      }}
    >
      <style>{KEYFRAMES}</style>

      <div className="mx-auto flex max-w-6xl flex-col gap-8 xl:flex-row xl:gap-12">
        {/* Tabs */}
        <div className="xl:w-72 xl:shrink-0">
          <div
            role="tablist"
            aria-label="Product clusters"
            className="relative flex gap-1 overflow-x-auto xl:flex-col xl:gap-0 xl:overflow-visible"
          >
            {/* Guide line — bottom on small screens, left on desktop */}
            <span
              aria-hidden="true"
              className="xl:hidden"
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                height: 1,
                background: LINE,
              }}
            />
            <span
              aria-hidden="true"
              className="hidden xl:block"
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                width: 1,
                background: LINE,
              }}
            />

            {CLUSTERS.map((c, i) => (
              <Tab
                key={c.name}
                ref={(el) => (tabRefs.current[i] = el)}
                cluster={c}
                index={i}
                selected={i === activeIndex}
                onSelect={setActiveIndex}
                onKeyDown={handleKeyDown}
              />
            ))}
          </div>
        </div>

        {/* Panel */}
        <div
          role="tabpanel"
          id="eco-panel"
          aria-labelledby={`eco-tab-${activeIndex}`}
          className="min-w-0 flex-1"
        >
          {/* Cluster header — shown when tabs are horizontal */}
          <div
            key={`head-${cluster.name}`}
            className="eco-rise xl:hidden"
            style={{ marginBottom: 24 }}
          >
            <div className="flex items-center" style={{ gap: 12 }}>
              <span
                aria-hidden="true"
                style={{
                  display: "block",
                  width: 28,
                  height: 2,
                  borderRadius: 2,
                  background: ACCENT,
                }}
              />
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  lineHeight: 1,
                  textTransform: "uppercase",
                  letterSpacing: "0.16em",
                  color: ACCENT,
                }}
              >
                {cluster.name}
              </span>
            </div>
            <p
              style={{
                margin: "14px 0 0",
                maxWidth: 560,
                fontSize: 16,
                lineHeight: 1.55,
                fontStyle: "italic",
                color: INK,
              }}
            >
              {cluster.description}
            </p>
          </div>

          {/* Cards */}
          <ul
            key={cluster.name}
            className="grid grid-cols-1 gap-4 md:grid-cols-3"
            style={{ margin: 0, padding: 0 }}
          >
            {cluster.products.map((product, i) => (
              <ProductCard
                key={product.name}
                product={product}
                delay={i * 80}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProductEcosystemGrid;

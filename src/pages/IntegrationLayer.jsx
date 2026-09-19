import React, { useState } from "react";

/* ------------------------------------------------------------------ */
/* Design tokens                                                       */
/* ------------------------------------------------------------------ */

const ACCENT = "#C2352B";
const ACCENT_DARK = "#F31719";
const INK = "#030302";
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
const SANS =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

/* ------------------------------------------------------------------ */
/* Icons — 24px grid, 1.4 stroke, currentColor                         */
/* ------------------------------------------------------------------ */

const Svg = ({ children, size = 24, strokeWidth = 1.4 }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

const GlyphJobsPlus = () => (
  <>
    <rect x="3" y="7.5" width="18" height="12.5" rx="2.2" />
    <path d="M8.5 7.5V6a1.8 1.8 0 0 1 1.8-1.8h3.4A1.8 1.8 0 0 1 15.5 6v1.5" />
    <path d="M12 11.2v5M9.5 13.7h5" />
  </>
);

const GlyphCareerCompass = () => (
  <>
    <circle cx="12" cy="12" r="9.3" />
    <path d="M15.6 8.4 13.4 13.4 8.4 15.6l2.2-5 5-2.2Z" />
    <circle cx="12" cy="12" r="0.9" fill="currentColor" stroke="none" />
  </>
);

const GlyphBrandPath = () => (
  <>
    <circle cx="5.5" cy="18.5" r="1.9" />
    <circle cx="18.5" cy="5.5" r="1.9" />
    <path d="M7.4 18.5H14a3.25 3.25 0 0 0 0-6.5h-4a3.25 3.25 0 0 1 0-6.5h4.6" />
  </>
);

const GlyphPayCloud = () => (
  <>
    <path d="M7 18.5a4 4 0 0 1-.6-7.95 5.6 5.6 0 0 1 10.9 1.2A3.4 3.4 0 0 1 17 18.5H7Z" />
    <circle cx="12" cy="14.3" r="2.1" />
  </>
);

const GlyphAttendX = () => (
  <>
    <circle cx="9.5" cy="8" r="3.3" />
    <path d="M3.5 20c0-3.4 2.7-5.7 6-5.7s6 2.3 6 5.7" />
    <path d="m16 11.3 2.1 2.1 3.6-4.2" />
  </>
);

const GlyphWorkPulse = () => (
  <>
    <rect x="3" y="4" width="18" height="13" rx="2.5" />
    <path d="M9 20.5h6M12 17v3.5" />
    <path d="M6 11h2.6l1.6-3 2.6 6 1.6-3H18" />
  </>
);

const GlyphSalesLine = () => (
  <>
    <path d="M4.3 4h10.4a2 2 0 0 1 2 2v5.2a2 2 0 0 1-2 2H9.4L6 16v-2.8H4.3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
    <path d="M17.2 8.6h2.5a2 2 0 0 1 2 2v5.2a2 2 0 0 1-2 2H18v2.6l-3.2-2.6h-3.6a2 2 0 0 1-2-2v-.6" />
  </>
);

const GlyphLeadReach = () => (
  <path d="M3.5 4.5h17L14 12.5v6.3l-4 1.9v-8.2l-6.5-8Z" />
);

const GlyphMeetHub = () => (
  <>
    <rect x="2.5" y="6" width="13" height="12" rx="2.5" />
    <path d="m15.5 10.8 4.7-2.6a.6.6 0 0 1 .9.5v6.6a.6.6 0 0 1-.9.5l-4.7-2.6" />
  </>
);

const GlyphSecureLine = () => (
  <>
    <path d="M12 2.8 19.5 5.5v5.6c0 4.6-3.1 8.2-7.5 10.1-4.4-1.9-7.5-5.5-7.5-10.1V5.5L12 2.8Z" />
    <circle cx="12" cy="10.5" r="1.6" />
    <path d="M12 12.1v3" />
  </>
);

const GlyphKey = () => (
  <>
    <circle cx="7.5" cy="12" r="3.6" />
    <path d="M11.1 12H21M17.5 12v3.2M20.5 12v2.2" />
  </>
);

const CheckIcon = () => (
  <span
    aria-hidden="true"
    className="flex shrink-0 items-center justify-center"
    style={{
      width: 22,
      height: 22,
      borderRadius: 999,
      background: "rgba(27,77,255,0.1)",
      color: ACCENT,
      marginTop: 1,
    }}
  >
    <svg
      viewBox="0 0 24 24"
      width="13"
      height="13"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12.5 4.2 4.2L19 7" />
    </svg>
  </span>
);

const ArrowIcon = ({ nudge }) => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
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

const BULLETS = [
  "Single sign-on across all products",
  "One admin console, one bill, one support line",
  "Data flows between products where it should — nowhere else",
  "Open API for teams who want to build on top",
];

/* Order follows the clusters; positions are laid out around a ring. */
const NODES = [
  { name: "JobsPlus", Glyph: GlyphJobsPlus },
  { name: "CareerCompass", Glyph: GlyphCareerCompass },
  { name: "BrandPath", Glyph: GlyphBrandPath },
  { name: "PayCloud", Glyph: GlyphPayCloud },
  { name: "AttendX", Glyph: GlyphAttendX },
  { name: "WorkPulse", Glyph: GlyphWorkPulse },
  { name: "SalesLine", Glyph: GlyphSalesLine },
  { name: "LeadReach", Glyph: GlyphLeadReach },
  { name: "MeetHub", Glyph: GlyphMeetHub },
  { name: "SecureLine", Glyph: GlyphSecureLine },
];

const RING = 36; // % of the square diagram
const positions = NODES.map((_, i) => {
  const angle = ((-90 + (360 / NODES.length) * i) * Math.PI) / 180;
  return { x: 50 + RING * Math.cos(angle), y: 50 + RING * Math.sin(angle) };
});

/* Data-flow links called out in the copy: JobsPlus → PayCloud, MeetHub → SalesLine */
const FLOWS = [
  [0, 3],
  [8, 6],
];
const FLOW_NODES = new Set(FLOWS.flat());

const CSS = `
@keyframes integ-dash { to { stroke-dashoffset: -24; } }
.integ-flow { stroke-dasharray: 5 7; animation: integ-dash 1.1s linear infinite; }
.integ-grid { display: grid; grid-template-columns: 1fr; gap: 56px; align-items: center; }
.integ-label { display: none; }
@media (min-width: 640px) { .integ-label { display: block; } }
@media (min-width: 1024px) {
  .integ-grid { grid-template-columns: 11fr 9fr; gap: 64px; }
}
@media (prefers-reduced-motion: reduce) {
  .integ-flow { animation: none; }
}
`;

/* ------------------------------------------------------------------ */
/* Diagram                                                             */
/* ------------------------------------------------------------------ */

const DiagramNode = ({ node, x, y, highlighted }) => {
  const [hover, setHover] = useState(false);
  const { name, Glyph } = node;

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <span
        className="flex items-center justify-center"
        style={{
          width: 52,
          height: 52,
          borderRadius: 999,
          background: hover ? ACCENT : "#FFFFFF",
          color: hover ? "#FFFFFF" : ACCENT,
          border: `1px solid ${
            hover
              ? ACCENT
              : highlighted
                ? "rgba(27,77,255,0.75)"
                : "rgba(27,77,255,0.28)"
          }`,
          boxShadow: highlighted
            ? "0 0 0 5px rgba(27,77,255,0.08)"
            : "0 0 0 0 rgba(27,77,255,0)",
          transform: hover ? "scale(1.08)" : "scale(1)",
          transition: `transform 300ms ${EASE}, background-color 240ms ease, color 240ms ease, border-color 240ms ease`,
        }}
      >
        <Svg>
          <Glyph />
        </Svg>
      </span>

      <span
        className="integ-label"
        style={{
          position: "absolute",
          top: "100%",
          left: "50%",
          transform: "translateX(-50%)",
          marginTop: 8,
          whiteSpace: "nowrap",
          fontSize: 12,
          fontWeight: 500,
          lineHeight: 1.2,
          color: INK,
        }}
      >
        {name}
      </span>
    </div>
  );
};

const Diagram = () => (
  <div
    role="img"
    aria-label={`${NODES.map((n) => n.name).join(
      ", ",
    )} connected through one account`}
    style={{
      position: "relative",
      width: "100%",
      maxWidth: 560,
      margin: "0 auto",
      aspectRatio: "1 / 1",
      borderRadius: 24,
      border: "1px solid rgba(27,77,255,0.16)",
      backgroundColor: "#FFFFFF",
      backgroundImage:
        "radial-gradient(circle at 50% 50%, rgba(27,77,255,0.07), rgba(27,77,255,0) 62%), radial-gradient(rgba(27,77,255,0.18) 1px, transparent 1.2px)",
      backgroundSize: "auto, 22px 22px",
      backgroundPosition: "center, center",
      overflow: "hidden",
    }}
  >
    {/* Lines */}
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      width="100%"
      height="100%"
      aria-hidden="true"
      style={{ position: "absolute", inset: 0 }}
    >
      {/* Faint ring */}
      <circle
        cx="50"
        cy="50"
        r={RING}
        fill="none"
        stroke={ACCENT}
        strokeOpacity="0.14"
        strokeWidth="1"
        strokeDasharray="2 4"
        vectorEffect="non-scaling-stroke"
      />
      {/* Spokes: every product ↔ one account */}
      {positions.map((p, i) => (
        <line
          key={i}
          x1="50"
          y1="50"
          x2={p.x}
          y2={p.y}
          stroke={ACCENT}
          strokeOpacity="0.3"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      ))}
      {/* Product-to-product data flows */}
      {FLOWS.map(([from, to], i) => (
        <line
          key={i}
          className="integ-flow"
          x1={positions[from].x}
          y1={positions[from].y}
          x2={positions[to].x}
          y2={positions[to].y}
          stroke={ACCENT}
          strokeWidth="1.8"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>

    {/* Hub */}
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 132,
          height: 132,
          transform: "translate(-50%, -50%)",
          borderRadius: 999,
          border: "1px solid rgba(27,77,255,0.22)",
          background: "rgba(255,255,255,0.7)",
        }}
      />
      <span
        className="relative flex flex-col items-center justify-center"
        style={{
          width: 100,
          height: 100,
          borderRadius: 999,
          background: ACCENT,
          color: "#FFFFFF",
          boxShadow: "0 16px 32px -14px rgba(27,77,255,0.6)",
          gap: 4,
        }}
      >
        <Svg size={30} strokeWidth={1.5}>
          <GlyphKey />
        </Svg>
        <span style={{ fontSize: 12, fontWeight: 500, lineHeight: 1.2 }}>
          One account
        </span>
      </span>
    </div>

    {/* Product nodes */}
    {NODES.map((node, i) => (
      <DiagramNode
        key={node.name}
        node={node}
        x={positions[i].x}
        y={positions[i].y}
        highlighted={FLOW_NODES.has(i)}
      />
    ))}
  </div>
);

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

const IntegrationLayer = () => {
  const [ctaHover, setCtaHover] = useState(false);

  return (
    <section
      aria-labelledby="integration-heading"
      className="w-full px-6"
      style={{
        paddingTop: 96,
        paddingBottom: 96,
        fontFamily: SANS,
      }}
    >
      <style>{CSS}</style>

      <div className="integ-grid mx-auto max-w-6xl">
        {/* Left: copy */}
        <div style={{ maxWidth: 580 }}>
          <p
            style={{
              margin: 0,
              fontSize: 15,
              fontWeight: 500,
              color: ACCENT,
            }}
          >
            Built to work as one
          </p>

          <h2
            id="integration-heading"
            className="font-serif"
            style={{
              margin: "14px 0 0",
              fontSize: "clamp(36px, 5vw, 56px)",
              lineHeight: 1.08,
              fontWeight: 400,
              letterSpacing: "-0.01em",
              color: INK,
            }}
          >
            Ten products.
            <br />
            One account.
            <br />
            Zero silos.
          </h2>

          <div style={{ marginTop: 28 }}>
            <p
              style={{
                margin: 0,
                fontSize: 17,
                lineHeight: 1.65,
                color: "rgba(3,3,2,0.75)",
              }}
            >
              Every Talent Meet product shares a common login, a common admin
              layer, and — where it matters — common data.
            </p>
            <p
              style={{
                margin: "14px 0 0",
                fontSize: 17,
                lineHeight: 1.65,
                color: "rgba(3,3,2,0.75)",
              }}
            >
              Source a candidate in JobsPlus, and they&rsquo;re ready to onboard
              in PayCloud. Book a meeting in MeetHub, and it&rsquo;s logged
              against the right deal in SalesLine.
            </p>
            <p
              style={{
                margin: "14px 0 0",
                fontSize: 17,
                lineHeight: 1.65,
                fontWeight: 500,
                color: INK,
              }}
            >
              You don&rsquo;t buy ten tools and stitch them together yourself.
              You buy one suite that already fits.
            </p>
          </div>

          <ul style={{ margin: "32px 0 0", padding: 0, listStyle: "none" }}>
            {BULLETS.map((text) => (
              <li
                key={text}
                className="flex items-start"
                style={{
                  gap: 12,
                  padding: "0 0 14px",
                  fontSize: 16,
                  lineHeight: 1.5,
                  color: INK,
                }}
              >
                <CheckIcon />
                <span>{text}</span>
              </li>
            ))}
          </ul>

          <a
            href="#"
            onMouseEnter={() => setCtaHover(true)}
            onMouseLeave={() => setCtaHover(false)}
            onFocus={() => setCtaHover(true)}
            onBlur={() => setCtaHover(false)}
            className="inline-flex items-center"
            style={{
              marginTop: 18,
              gap: 10,
              padding: "14px 22px",
              borderRadius: 12,
              background: ctaHover ? ACCENT_DARK : "#030302",
              color: "#FFFFFF",
              fontSize: 16,
              fontWeight: 500,
              textDecoration: "none",
              boxShadow: ctaHover
                ? "0 14px 28px -14px rgba(27,77,255,0.7)"
                : "0 0 0 0 rgba(27,77,255,0)",
              transition: `background-color 240ms ease, box-shadow 320ms ${EASE}`,
            }}
          >
            See how the suite connects
            <ArrowIcon nudge={ctaHover} />
          </a>
        </div>

        {/* Right: diagram */}
        <Diagram />
      </div>
    </section>
  );
};

export default IntegrationLayer;

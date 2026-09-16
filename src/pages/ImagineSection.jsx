import React from "react";

const IconTile = ({ bg, children }) => (
  <div
    className="grid h-11 w-11 place-items-center rounded-[12px] shadow-sm"
    style={{ background: bg }}
  >
    {children}
  </div>
);

const glyph = (path, stroke = "#fff", fill = "none") => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    {path}
  </svg>
);

const mcpIcons = [
  {
    bg: "#f0603d",
    node: glyph(
      <path
        d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.8 2.8M15.2 15.2 18 18M18 6l-2.8 2.8M8.8 15.2 6 18"
        stroke="#fff"
        strokeWidth="1.8"
        strokeLinecap="round"
      />,
    ),
  },
  {
    bg: "#141414",
    node: glyph(
      <path
        d="M8 8.5c0-2 1.6-3.5 3.6-3.5S15 6.5 15 8.5c0 1.4-.8 2.2-1.8 2.9-.8.6-1.4 1.1-1.4 2v.4M12 17.2v.1"
        stroke="#fff"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />,
    ),
  },
  {
    bg: "#e2542f",
    node: glyph(
      <>
        <rect
          x="5"
          y="5"
          width="14"
          height="14"
          rx="3"
          stroke="#fff"
          strokeWidth="1.6"
        />
        <path
          d="M9 9.5h6M9 12h6M9 14.5h4"
          stroke="#fff"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </>,
    ),
  },
  {
    bg: "#111",
    node: glyph(
      <path
        d="M5 8.5 12 5l7 3.5M5 15.5 12 19l7-3.5"
        stroke="#fff"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />,
    ),
  },
  {
    bg: "#111",
    node: glyph(
      <path
        d="M12 3.5 20 8v8l-8 4.5L4 16V8l8-4.5Z"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />,
    ),
  },
  {
    bg: "#0b73d1",
    node: glyph(
      <path
        d="M5 6.5 12 4l7 2.5v11L12 20l-7-2.5v-11ZM12 4v16"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />,
    ),
  },
  {
    bg: "#e2542f",
    node: glyph(
      <>
        <circle cx="12" cy="12" r="7" stroke="#fff" strokeWidth="1.6" />
        <path
          d="M9.5 10.2h5M9.5 13.6h3.2"
          stroke="#fff"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </>,
    ),
  },
  {
    bg: "#111",
    node: glyph(
      <path
        d="M7 15 15 7M9.5 6.5a3 3 0 0 1 4.2 4.2l-6 6a3 3 0 0 1-4.2-4.2l1.5-1.5"
        stroke="#fff"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />,
    ),
  },
];

const apiIcons = [
  {
    bg: "#f4b63f",
    node: glyph(
      <path
        d="M12 4 5 9v6l7 5 7-5V9l-7-5Z"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />,
    ),
  },
  {
    bg: "#e2542f",
    node: glyph(
      <>
        <rect x="4.5" y="4.5" width="6.2" height="6.2" rx="1.5" fill="#fff" />
        <rect
          x="13.3"
          y="4.5"
          width="6.2"
          height="6.2"
          rx="1.5"
          fill="#fff"
          opacity="0.55"
        />
        <rect
          x="4.5"
          y="13.3"
          width="6.2"
          height="6.2"
          rx="1.5"
          fill="#fff"
          opacity="0.55"
        />
        <rect x="13.3" y="13.3" width="6.2" height="6.2" rx="1.5" fill="#fff" />
      </>,
    ),
  },
  {
    bg: "#4f46e5",
    node: glyph(
      <path
        d="M12 3 20 12 12 21 4 12 12 3Z"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />,
    ),
  },
  {
    bg: "#111",
    node: glyph(
      <path
        d="M6 5v14l7-4.2M13 5v14l7-4.2"
        stroke="#fff"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />,
    ),
  },
  {
    bg: "#111",
    node: glyph(
      <path
        d="M5 9h14M5 15h14M9 5l-2 14M17 5l-2 14"
        stroke="#fff"
        strokeWidth="1.3"
        strokeLinecap="round"
      />,
    ),
  },
  {
    bg: "#f0603d",
    node: glyph(
      <>
        <rect
          x="4.5"
          y="7"
          width="15"
          height="10"
          rx="2"
          stroke="#fff"
          strokeWidth="1.5"
        />
        <path d="M9 7v10M15 7v10" stroke="#fff" strokeWidth="1.3" />
      </>,
    ),
  },
  {
    bg: "#111",
    node: glyph(
      <path
        d="M6 12c0-3.9 2.7-7 6-7s6 3.1 6 7-2.7 7-6 7-6-3.1-6-7Zm0 0h12"
        stroke="#fff"
        strokeWidth="1.4"
        strokeLinecap="round"
      />,
    ),
  },
  {
    bg: "#111",
    node: glyph(
      <path
        d="M9 7 5 12l4 5M15 7l4 5-4 5"
        stroke="#fff"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />,
    ),
  },
];

const buildTemplates = [
  "Blog Publisher",
  "Reading Tracker",
  "Plant Dashboard",
  "Dream Journal",
];

const avatarColors = ["#7fc8e0", "#8bcf9c", "#a6a4e8", "#f2d24a", "#141414"];

const ImagineSection = () => {
  return (
    <section className="w-full px-4 py-10 sm:px-6 sm:py-16">
      <div className="imagine-card mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-[#8fcf9c] p-6 sm:rounded-[36px] sm:p-10 md:p-12">
        <div className="grid gap-8 md:grid-cols-[280px_1fr] md:gap-10">
          <div className="imagine-copy">
            <span className="text-[13px] font-semibold uppercase tracking-[0.14em] text-neutral-900/70">
              Imagine
            </span>
            <h2 className="mt-4 font-serif text-[34px] leading-[1.2] text-neutral-900 sm:text-[38px]">
              Imagine the possibilities when everything&rsquo;s connected to
              Telent Meet
            </h2>
            <p className="mt-4 max-w-xs text-[14.5px] leading-relaxed text-neutral-900/75">
              Make Telent Meet yours — connect the tools you love, build what you
              need.
            </p>
            <button className="imagine-btn mt-7 rounded-full bg-white/90 px-6 py-3 text-[14px] font-semibold text-neutral-900 shadow-sm">
              Learn more
            </button>
          </div>

          <div className="imagine-panels grid gap-4 sm:gap-5">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
              <div className="rounded-2xl bg-[#f3f8f2] p-5">
                <div className="mb-4 flex items-center gap-2 text-[14px] font-semibold text-neutral-900">
                  <span aria-hidden>✦</span> MCP connections
                </div>
                <div className="grid grid-cols-4 gap-2.5">
                  {mcpIcons.map((icon, i) => (
                    <IconTile key={i} bg={icon.bg}>
                      {icon.node}
                    </IconTile>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-[#f3f8f2] p-5">
                <div className="mb-4 flex items-center gap-2 text-[14px] font-semibold text-neutral-900">
                  <span aria-hidden>▦</span> API integrations
                </div>
                <div className="grid grid-cols-4 gap-2.5">
                  {apiIcons.map((icon, i) => (
                    <IconTile key={i} bg={icon.bg}>
                      {icon.node}
                    </IconTile>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-[#f3f8f2] p-5">
              <div className="mb-4 flex items-center gap-2 text-[14px] font-semibold text-neutral-900">
                <span aria-hidden>◎</span> Start Building
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {buildTemplates.map((label) => (
                  <button
                    key={label}
                    className="template-pill rounded-full bg-[#c7e6cc] px-5 py-3 text-[14px] font-semibold text-neutral-900"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-[#f3f8f2] p-5 sm:flex-row sm:items-center">
              <div className="flex items-center gap-2 text-[14px] font-semibold text-neutral-900">
                <span aria-hidden>◡</span> Community
              </div>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2.5">
                  {avatarColors.map((c, i) => (
                    <span
                      key={i}
                      className="h-8 w-8 rounded-full border-2 border-[#f3f8f2]"
                      style={{ background: c }}
                    />
                  ))}
                </div>
                <div className="leading-tight">
                  <p className="text-[14px] font-semibold text-neutral-900">
                    200+ builders
                  </p>
                  <p className="text-[12.5px] text-neutral-500">
                    Explore community templates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .imagine-copy, .imagine-panels {
          opacity: 0;
          animation: imagine-fade-up 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .imagine-copy { animation-delay: 0.05s; }
        .imagine-panels { animation-delay: 0.2s; }
        @keyframes imagine-fade-up {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .imagine-btn, .template-pill {
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease, background-color 0.25s ease;
        }
        .imagine-btn:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 10px 22px rgba(20, 40, 20, 0.18);
        }
        .template-pill:hover {
          background-color: #b6dcbc;
          transform: translateY(-1px);
        }

        @media (prefers-reduced-motion: reduce) {
          .imagine-copy, .imagine-panels, .imagine-btn, .template-pill {
            animation: none !important;
            transition: none !important;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default ImagineSection;

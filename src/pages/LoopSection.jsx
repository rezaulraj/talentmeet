import React from "react";
import cloudImage from "../assets/cloud.avif";

const cards = [
  {
    name: "r/CraftDocs",
    tagline: "Discuss, share, and explore",
    bg: "#ff5c1c",
    textColor: "#ffffff",
    subColor: "rgba(255,255,255,0.85)",
    iconBg: "#ffffff",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
        <circle cx="12" cy="13" r="7" stroke="#ff5c1c" strokeWidth="1.6" />
        <circle cx="9" cy="12.5" r="1" fill="#ff5c1c" />
        <circle cx="15" cy="12.5" r="1" fill="#ff5c1c" />
        <path
          d="M9 15.5c1 .8 4 .8 5 0"
          stroke="#ff5c1c"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M12 6.5V4M12 4l2-1"
          stroke="#ff5c1c"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <circle cx="12" cy="4" r="0.9" fill="#ff5c1c" />
      </svg>
    ),
  },
  {
    name: "Slack",
    tagline: "Get the inside track on new features",
    bg: "#f1f1f1",
    textColor: "#1a1a1a",
    subColor: "#6b6b6b",
    iconBg: "#ffffff",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
        <rect x="9" y="3" width="3" height="7" rx="1.5" fill="#36c5ab" />
        <rect x="14" y="9" width="7" height="3" rx="1.5" fill="#2eb67d" />
        <rect x="12" y="14" width="3" height="7" rx="1.5" fill="#ecb22e" />
        <rect x="3" y="12" width="7" height="3" rx="1.5" fill="#e01e5a" />
      </svg>
    ),
  },
  {
    name: "@craftdocsapp",
    tagline: "Stay up to date on our latest releases",
    bg: "#141414",
    textColor: "#ffffff",
    subColor: "rgba(255,255,255,0.7)",
    iconBg: "#1f1f1f",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
        <path
          d="M5 5l14 14M19 5 5 19"
          stroke="#fff"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "@CraftDocs",
    tagline: "Tips, tutorials, and feature deep dives",
    bg: "#ffffff",
    textColor: "#1a1a1a",
    subColor: "#6b6b6b",
    iconBg: "#e6362a",
    border: true,
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
        <path d="M9 8l7 4-7 4V8Z" fill="#fff" />
      </svg>
    ),
  },
];

const LoopSection = () => {
  return (
    <section className="relative w-full overflow-hidden px-6 py-16 sm:py-20">
      <img
        src={cloudImage}
        alt=""
        aria-hidden="true"
        className="cloud-tl pointer-events-none absolute left-4 top-2 w-[180px] opacity-90 sm:left-10 sm:w-[240px]"
      />
      <img
        src={cloudImage}
        alt=""
        aria-hidden="true"
        className="cloud-br pointer-events-none absolute bottom-0 right-6 w-[200px] scale-x-[-1] opacity-90 sm:right-16 sm:w-[260px]"
      />

      <div className="loop-heading relative z-10 mx-auto max-w-xl text-center">
        <h2 className="font-serif text-[32px] text-neutral-900 sm:text-[38px]">
          Stay in the loop
        </h2>
        <p className="mt-3 text-[14px] text-neutral-500 sm:text-[15px]">
          Join the community and learn how other people get the most out of
          Craft.
        </p>
      </div>

      <div className="relative z-10 mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 sm:mt-14 sm:grid-cols-4 sm:gap-5">
        {cards.map((c, i) => (
          <div
            key={c.name}
            className="loop-card flex flex-col items-center rounded-2xl px-5 py-8 text-center shadow-[0_10px_24px_rgba(0,0,0,0.06)]"
            style={{
              background: c.bg,
              animationDelay: `${0.1 * i + 0.1}s`,
              border: c.border ? "1px solid #eee" : "none",
            }}
          >
            <span
              className="grid h-12 w-12 place-items-center rounded-xl shadow-sm"
              style={{ background: c.iconBg }}
            >
              {c.icon}
            </span>
            <p
              className="mt-4 text-[13px] font-bold"
              style={{ color: c.textColor }}
            >
              {c.name}
            </p>
            <p
              className="mt-1.5 text-[12px] leading-snug"
              style={{ color: c.subColor }}
            >
              {c.tagline}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        .cloud-tl {
          opacity: 0;
          animation: cloud-in-tl 1s ease-out forwards, cloud-float-tl 9s ease-in-out infinite 1s;
        }
        .cloud-br {
          opacity: 0;
          animation: cloud-in-br 1s ease-out forwards, cloud-float-br 10s ease-in-out infinite 1.1s;
        }
        @keyframes cloud-in-tl {
          from { opacity: 0; transform: translateY(-10px) scale(0.96); }
          to { opacity: 0.9; transform: translateY(0) scale(1); }
        }
        @keyframes cloud-in-br {
          from { opacity: 0; transform: translateY(10px) scaleX(-1) scale(0.96); }
          to { opacity: 0.9; transform: translateY(0) scaleX(-1) scale(1); }
        }
        @keyframes cloud-float-tl {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes cloud-float-br {
          0%, 100% { transform: scaleX(-1) translateY(0); }
          50% { transform: scaleX(-1) translateY(-8px); }
        }

        .loop-heading {
          opacity: 0;
          animation: loop-fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .loop-card {
          opacity: 0;
          animation: loop-fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
        }
        .loop-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 18px 30px rgba(0,0,0,0.12);
        }
        @keyframes loop-fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .cloud-tl, .cloud-br, .loop-heading, .loop-card {
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

export default LoopSection;

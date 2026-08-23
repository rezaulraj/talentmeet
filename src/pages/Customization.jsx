import React from "react";
import bgimage from "../assets/papers-combined-lg.webp";
import test1 from "../assets/test1.avif";
import test2 from "../assets/test2.avif";
import test3 from "../assets/test3.avif";
import test4 from "../assets/test4.avif";
import test5 from "../assets/test5.avif";
import test6 from "../assets/test6.avif";
import test7 from "../assets/test7.avif";
import test8 from "../assets/test8.avif";
import test9 from "../assets/test9.avif";
import test10 from "../assets/test10.avif";
import test11 from "../assets/test11.avif";
import test12 from "../assets/test12.avif";

const Signature = ({ stroke = "currentColor" }) => (
  <svg viewBox="0 0 90 30" className="mt-auto h-6 w-20" fill="none">
    <path
      d="M2 20c4-14 10-16 13-4 3 10 8 10 11-2 2-8 6-9 9-1 3 9 8 9 12-1 3-8 7-9 10-1 3 8 8 9 12-1 2-6 5-7 8-2"
      stroke={stroke}
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const covers = [
  {
    title: "Coil",
    theme: "dark",
    accent: "#3a1418",
    text: "#e8d9c8",
    photo: test1,
  },
  { title: "Writer", theme: "dark", accent: "#5a1f22", text: "#f2c869" },
  { title: "Shape Shift", theme: "light", accent: "#0a0a0a", text: "#ffffff" },
  {
    title: "Hopefully Sweet",
    theme: "photo",
    accent: "#e8722c",
    text: "#3a3a6e",
    photo: test2,
  },
  {
    title: "Little World",
    theme: "light",
    accent: "#e7c9ec",
    text: "#7a3f8a",
    paper: "#faf3d8",
  },
  {
    title: "Blurry Bloom",
    theme: "photo",
    accent: "#c2504a",
    text: "#1f4a3a",
    photo: test3,
  },
  {
    title: "Market Walks",
    theme: "photo",
    accent: "#a9cbe0",
    text: "#2a2a2a",
    photo: test4,
  },
  {
    title: "Night Drift",
    theme: "photo",
    accent: "#2b2b2b",
    text: "#f0f0f0",
    photo: test5,
  },
  {
    title: "Quiet Study",
    theme: "photo",
    accent: "#c7d9c2",
    text: "#33402e",
    photo: test6,
  },
  {
    title: "Warm Trail",
    theme: "photo",
    accent: "#e0b46a",
    text: "#4a2e10",
    photo: test7,
  },
  {
    title: "Coastline",
    theme: "photo",
    accent: "#8fb8c9",
    text: "#1c3a44",
    photo: test8,
  },
  {
    title: "Golden Hour",
    theme: "photo",
    accent: "#e8a13c",
    text: "#4a2a08",
    photo: test9,
  },
  {
    title: "Field Notes",
    theme: "photo",
    accent: "#9ec2a4",
    text: "#20331f",
    photo: test10,
  },
  {
    title: "City Pulse",
    theme: "photo",
    accent: "#c9c9c9",
    text: "#1a1a1a",
    photo: test11,
  },
  {
    title: "Slow Mornings",
    theme: "photo",
    accent: "#e6c3b3",
    text: "#5a3324",
    photo: test12,
  },
];

const Cover = ({ item }) => {
  if (item.theme === "photo") {
    return (
      <div
        className="flex h-[220px] w-[135px] shrink-0 flex-col overflow-hidden rounded-2xl border-[6px] shadow-[0_10px_26px_rgba(0,0,0,0.12)] sm:h-[260px] sm:w-[160px]"
        style={{ borderColor: item.accent, background: "#f4f1ea" }}
      >
        <div className="px-3 pt-2.5">
          {/* <p className="text-[13px] font-bold" style={{ color: item.text }}>
            {item.title}
          </p> */}
        </div>
        <div className="relative mt-1.5 flex-1 overflow-hidden">
          <img
            src={item.photo}
            alt={item.title}
            className="h-full w-fit object-cover"
            loading="lazy"
          />
        </div>
        <div className="px-3 pb-2.5 pt-1">
          <Signature stroke={item.accent} />
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex h-[220px] w-[135px] shrink-0 flex-col overflow-hidden rounded-2xl border-[6px] shadow-[0_10px_26px_rgba(0,0,0,0.12)] sm:h-[260px] sm:w-[160px]"
      style={{
        borderColor: item.accent === "#0a0a0a" ? "#fff" : item.accent,
        background: item.accent,
      }}
    >
      <div className="px-3 pt-3">
        <p className="text-[13px] font-bold" style={{ color: item.text }}>
          {item.title}
        </p>
      </div>
      <div className="flex-1" />
      <div className="px-3 pb-3">
        <Signature stroke={item.text} />
      </div>
    </div>
  );
};

const CustomizationSection = () => {
  const loop = [...covers, ...covers];

  return (
    <section className="relative w-full overflow-hidden pb-20 pt-16 sm:pb-28">
      <img
        src={bgimage}
        alt=""
        aria-hidden="true"
        className="custom-bg pointer-events-none absolute left-4/5 top-2/2 w-[600px] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-90"
      />

      <div className="custom-heading relative z-10 mx-auto max-w-2xl text-center">
        <span className="text-[13px] font-semibold uppercase tracking-[0.14em] text-neutral-500">
          Customization
        </span>
        <h2 className="mt-4 font-serif text-[34px] leading-[1.15] text-neutral-900 sm:text-[44px] md:text-[48px]">
          Make it unmistakably yours
        </h2>
        <button className="custom-btn mt-7 rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-neutral-900 shadow-md">
          Learn more
        </button>
      </div>

      <div className="relative z-10 mt-16 sm:mt-20">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#faf7f2]/50 to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#faf7f2]/50 to-transparent sm:w-32" />

        <div className="marquee-track flex w-max items-center gap-5 sm:gap-6">
          {loop.map((item, i) => (
            <Cover key={`${item.title}-${i}`} item={item} />
          ))}
        </div>
      </div>

      <style>{`
        .custom-bg {
          opacity: 0;
          animation: custom-bg-in 1.2s ease-out forwards;
        }
        @keyframes custom-bg-in {
        from {
          opacity: 0;
          transform: translate(-50%, calc(-50% - 8px));
        }
        to {
          opacity: 0.9;
          transform: translate(-50%, -50%);
        }
      }

        .custom-heading {
          opacity: 0;
          animation: custom-fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.1s;
        }
        @keyframes custom-fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .custom-btn {
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease;
        }
        .custom-btn:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 12px 24px rgba(20, 20, 20, 0.15);
        }

        .marquee-track {
          animation: marquee-scroll 40s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .custom-bg, .custom-heading, .custom-btn, .marquee-track {
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

export default CustomizationSection;

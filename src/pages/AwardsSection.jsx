import React from "react";

const awards = [
  {
    title: "App Store Award",
    subtitle: "Mac App of the Year",
    from: "#3fa9f5",
    to: "#1f6fce",
    glyph: (
      <svg
        viewBox="0 0 24 24"
        width="26"
        height="26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 4 6.5 18h2.4l1.2-3.2h3.8L15.1 18h2.4L12 4Z"
          stroke="#fff"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M10.5 12.4h3"
          stroke="#fff"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Apple Design Awards",
    subtitle: "Finalist",
    from: "#c7cdd2",
    to: "#8b939b",
    glyph: (
      <svg
        viewBox="0 0 24 24"
        width="26"
        height="26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.2 5.6c.6-.7 1-1.7.9-2.6-.8 0-1.8.5-2.4 1.2-.5.6-1 1.6-.8 2.5.9.1 1.8-.4 2.3-1.1Z"
          fill="#fff"
        />
        <path
          d="M17.6 12.4c0-2.2 1.8-3.3 1.9-3.3-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.6.8-3.3.8-.7 0-1.7-.8-2.9-.8-1.5 0-2.8.9-3.6 2.2-1.5 2.6-.4 6.5 1.1 8.6.7 1 1.6 2.2 2.8 2.1 1.1 0 1.5-.7 2.9-.7s1.7.7 2.9.7c1.2 0 2-1 2.7-2 .6-.9.9-1.7 1.1-2.2-2.9-1.1-3.4-4.9-1.4-5.7Z"
          fill="#fff"
        />
      </svg>
    ),
  },
  {
    title: "Webby",
    subtitle: "Awarded three times in various categories",
    from: "#2b2b2b",
    to: "#0c0c0c",
    glyph: (
      <svg
        viewBox="0 0 24 24"
        width="26"
        height="26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 5.5c3.3 1.4 6.7 1.4 10 0M6.3 9c4 1.7 7.4 1.7 11.4 0M5.8 12.5c4.6 2 8.8 2 13.4 0M6.3 16c4 1.7 7.4 1.7 11.4 0"
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "German Design Award",
    subtitle: "Excellent Communications Design Interactive UX",
    from: "#cbb35a",
    to: "#8f7a30",
    glyph: (
      <svg
        viewBox="0 0 24 24"
        width="26"
        height="26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="10.5" r="5" stroke="#fff" strokeWidth="1.5" />
        <circle cx="12" cy="10.5" r="1.6" fill="#fff" />
        <path
          d="M9 17.5 12 20l3-2.5"
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const AwardBadge = ({ from, to, children }) => (
  <div
    className="award-badge relative grid h-16 w-16 place-items-center rounded-[18px]"
    style={{
      background: `linear-gradient(155deg, ${from}, ${to})`,
      boxShadow: `0 10px 20px -6px ${to}80, inset 0 1px 1px rgba(255,255,255,0.35), inset 0 -3px 6px rgba(0,0,0,0.25)`,
    }}
  >
    {children}
  </div>
);

const AwardsSection = () => {
  return (
    <section className="w-full px-6 py-16 sm:px-10 sm:py-20">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-4 sm:gap-x-8">
        {awards.map((item, i) => (
          <div
            key={item.title}
            className="award-item flex flex-col items-center text-center"
            style={{ animationDelay: `${0.08 * i + 0.05}s` }}
          >
            <AwardBadge from={item.from} to={item.to}>
              {item.glyph}
            </AwardBadge>
            <h3 className="mt-4 text-[15px] font-bold text-neutral-900">
              {item.title}
            </h3>
            <p className="mt-1.5 max-w-[170px] text-[13.5px] leading-snug text-neutral-600">
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        .award-item {
          opacity: 0;
          animation: award-fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes award-fade-up {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .award-badge {
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease;
          transform: translateY(-4px) rotate(-3deg) scale(1.05);
        }
        .award-item:hover .award-badge {
          transform: translateY(-8px) rotate(-6deg) scale(1.05);
        }

        @media (prefers-reduced-motion: reduce) {
          .award-item, .award-badge {
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

export default AwardsSection;

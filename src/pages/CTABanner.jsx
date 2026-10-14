import React from "react";

const Arrow = () => (
  <svg
    className="cta-arrow"
    viewBox="0 0 16 16"
    width="14"
    height="14"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M3 8h9.5M8.5 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CTABanner = ({
  salesHref = "/contact-sales",
  walkthroughHref = "/request-walkthrough",
}) => {
  return (
    <section className="w-full px-4 py-8 sm:px-6 sm:py-12">
      <div className="cta-banner relative mx-auto max-w-5xl overflow-hidden rounded-[24px] bg-[#7fc79a] px-6 py-9 shadow-[0_20px_45px_rgba(30,60,40,0.15)] sm:rounded-[28px] sm:px-10 sm:py-11">
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 1000 220"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M-40 60 C 150 10, 300 130, 480 70 S 780 -10, 1040 90"
            stroke="#93d1ac"
            strokeWidth="34"
            strokeLinecap="round"
            fill="none"
            opacity="0.75"
          />
          <path
            d="M-40 140 C 160 90, 320 210, 520 150 S 820 60, 1040 170"
            stroke="#6fbd8e"
            strokeWidth="26"
            strokeLinecap="round"
            fill="none"
            opacity="0.55"
          />
          <path
            d="M400 -20 C 500 60, 460 140, 560 200"
            stroke="#93d1ac"
            strokeWidth="20"
            strokeLinecap="round"
            fill="none"
            opacity="0.5"
          />
        </svg>

        <div className="relative flex flex-col items-start justify-between gap-7 md:flex-row md:items-center md:gap-10">
          <div className="cta-copy max-w-xl">
            <h2 className="font-serif text-[26px] italic leading-tight text-neutral-900 sm:text-[30px]">
              Let&rsquo;s figure out which products you actually need.
            </h2>
            <p className="mt-3 text-[14.5px] leading-relaxed text-neutral-800/80 sm:text-[15px]">
              Every company uses Talent Meet differently &mdash; some need one
              product, some need the whole suite. Talk to our team and
              we&rsquo;ll scope the right setup for your size and stage, no
              pressure and no obligation.
            </p>
          </div>

          <div className="cta-buttons flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row md:flex-col">
            <a
              href={salesHref}
              className="cta-btn-dark inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-[13.5px] font-semibold text-white shadow-md"
            >
              Talk to Sales
              <Arrow />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .cta-banner {
          opacity: 0;
          animation: cta-fade-up 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .cta-copy, .cta-buttons {
          opacity: 0;
          animation: cta-fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .cta-copy { animation-delay: 0.2s; }
        .cta-buttons { animation-delay: 0.32s; }

        @keyframes cta-fade-up {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .cta-btn-light, .cta-btn-dark {
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease;
        }
        .cta-btn-light:hover, .cta-btn-dark:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 12px 22px rgba(0,0,0,0.18);
        }
        .cta-btn-light:active, .cta-btn-dark:active {
          transform: translateY(0) scale(0.98);
        }
        .cta-btn-light:focus-visible, .cta-btn-dark:focus-visible {
          outline: 2px solid #1a1a1a;
          outline-offset: 3px;
        }

        .cta-arrow {
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .cta-btn-light:hover .cta-arrow, .cta-btn-dark:hover .cta-arrow {
          transform: translateX(3px);
        }

        @media (prefers-reduced-motion: reduce) {
          .cta-banner, .cta-copy, .cta-buttons, .cta-btn-light, .cta-btn-dark, .cta-arrow {
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

export default CTABanner;

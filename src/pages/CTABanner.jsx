import React from "react";

const CTABanner = () => {
  return (
    <section className="w-full px-4 py-8 sm:px-6 sm:py-12">
      <div className="cta-banner relative mx-auto max-w-5xl overflow-hidden rounded-[24px] bg-[#7fc79a] px-6 py-9 shadow-[0_20px_45px_rgba(30,60,40,0.15)] sm:rounded-[28px] sm:px-10 sm:py-11">
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 1000 220"
          preserveAspectRatio="none"
          fill="none"
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

        <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="cta-copy">
            <h2 className="font-serif text-[26px] italic leading-tight text-neutral-900 sm:text-[30px]">
              Let&rsquo;s get started
            </h2>
            <p className="mt-2 text-[14.5px] text-neutral-800/80 sm:text-[15px]">
              Start for free. No credit card required.
            </p>
          </div>

          <div className="cta-buttons flex flex-col shrink-0 flex-wrap items-center gap-3">
            <button className="cta-btn-light rounded-full bg-white/90 px-5 py-2.5 text-[13.5px] font-semibold text-neutral-900 shadow-sm">
              Continue on web
            </button>
            <button className="cta-btn-dark flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-[13.5px] font-semibold text-white shadow-md">
              Download on the
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
                <rect
                  x="7"
                  y="2.5"
                  width="10"
                  height="17"
                  rx="2.4"
                  stroke="#fff"
                  strokeWidth="1.4"
                />
                <circle cx="12" cy="16.7" r="0.9" fill="#fff" />
              </svg>
              App Store
            </button>
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

        @media (prefers-reduced-motion: reduce) {
          .cta-banner, .cta-copy, .cta-buttons, .cta-btn-light, .cta-btn-dark {
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

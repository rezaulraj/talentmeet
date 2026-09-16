import React from "react";

const PricingSection = () => {
  return (
    <section className="w-full px-6 py-16 sm:py-20">
      <div className="pricing-heading mx-auto max-w-xl text-center">
        <span className="text-[13px] font-semibold uppercase tracking-[0.14em] text-neutral-500">
          Pricing
        </span>
        <h2 className="mt-4 font-serif text-[32px] text-neutral-900 sm:text-[38px]">
          Your pace, your plan
        </h2>
        <p className="mt-3 text-[14px] leading-relaxed text-neutral-500 sm:text-[15px]">
          Use it now and then, or integrate it into your daily flow.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-3xl gap-5 sm:mt-14 sm:grid-cols-2">
        <div className="pricing-card flex flex-col rounded-2xl border border-neutral-200 bg-white p-8 shadow-[0_10px_24px_rgba(0,0,0,0.05)]">
          <h3 className="font-serif text-[26px] text-neutral-900">Free</h3>
          <p className="mt-3 text-[14px] leading-relaxed text-neutral-600">
            Full access, great if you use it occasionally each week.
          </p>

          <div className="mt-8 flex items-baseline gap-1.5">
            <span className="font-serif text-[36px] text-neutral-900">$0</span>
            <span className="text-[14px] text-neutral-500">/month</span>
          </div>

          <button className="pricing-btn-light mt-6 w-fit rounded-full bg-neutral-900 px-6 py-3 text-[14px] font-semibold text-white">
            Get Started
          </button>
        </div>

        <div className="pricing-card relative flex flex-col overflow-hidden rounded-2xl bg-[#141414] p-8 shadow-[0_16px_30px_rgba(0,0,0,0.25)]">
          <div className="flex items-center gap-2">
            <span className="font-serif text-[18px] font-bold tracking-tight text-white">
              Telent Meet
            </span>
            <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-bold text-neutral-900">
              PLUS
            </span>
          </div>

          <p className="mt-4 text-[14px] leading-relaxed text-white/85">
            Designed to effortlessly fit into your everyday flow.
          </p>

          <div className="mt-8 flex items-end gap-2">
            <span className="text-[13px] text-white/40 line-through">$8.0</span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-serif text-[36px] text-white">$6.4</span>
            <span className="text-[14px] text-white/60">/month</span>
          </div>

          <button className="pricing-btn-dark mt-6 w-fit rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-neutral-900">
            Upgrade to Plus
          </button>
        </div>
      </div>

      <p className="pricing-footer mt-10 text-center text-[13.5px] text-neutral-500">
        <a
          href="#"
          className="pricing-link inline-flex items-center gap-1.5 hover:text-neutral-900"
        >
          Learn more about group discounts
          <span aria-hidden className="pricing-arrow">
            →
          </span>
        </a>
      </p>

      <style>{`
        .pricing-heading, .pricing-card, .pricing-footer {
          opacity: 0;
          animation: pricing-fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .pricing-heading { animation-delay: 0.05s; }
        .pricing-card:nth-of-type(1) { animation-delay: 0.18s; }
        .pricing-card:nth-of-type(2) { animation-delay: 0.3s; }
        .pricing-footer { animation-delay: 0.42s; }

        @keyframes pricing-fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .pricing-card {
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
        }
        .pricing-card:hover {
          transform: translateY(-5px);
        }

        .pricing-btn-light, .pricing-btn-dark {
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease;
        }
        .pricing-btn-light:hover, .pricing-btn-dark:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 10px 20px rgba(0,0,0,0.18);
        }

        .pricing-link .pricing-arrow {
          display: inline-block;
          transition: transform 0.25s ease;
        }
        .pricing-link:hover .pricing-arrow {
          transform: translateX(3px);
        }

        @media (prefers-reduced-motion: reduce) {
          .pricing-heading, .pricing-card, .pricing-footer, .pricing-btn-light, .pricing-btn-dark, .pricing-arrow {
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

export default PricingSection;

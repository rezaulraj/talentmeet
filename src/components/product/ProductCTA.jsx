import React from "react";
import { Arrow } from "./ProductHero";
import useReveal from "./useReveal";

/* Dark full-bleed closing CTA — reused unchanged across product pages. */
const ProductCTA = ({
  productName,
  headline,
  accent,
  accents,
  salesHref,
  demoHref,
  demoLabel,
}) => {
  const [ref, visible] = useReveal(0.3);
  const glowColors = accents?.length ? accents : [accent];
  const glow = glowColors
    .map((c, i) => {
      const x = glowColors.length === 1 ? 50 : 20 + (60 / (glowColors.length - 1)) * i;
      return `radial-gradient(40% 70% at ${x}% 110%, ${c}55 0%, transparent 70%)`;
    })
    .join(", ");

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden px-6 py-24 sm:py-28"
      style={{ background: "#030302" }}
    >
      {/* accent glow + hairline grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: glow,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(60% 80% at 50% 50%, #000, transparent)",
          WebkitMaskImage: "radial-gradient(60% 80% at 50% 50%, #000, transparent)",
        }}
      />

      <div className={`pd-reveal ${visible ? "is-in" : ""} relative mx-auto max-w-3xl text-center`}>
        <h2 className="text-[32px] font-medium leading-[1.12] tracking-[-0.025em] text-white sm:text-[44px]">
          {headline || `Ready to see ${productName} in action?`}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-white/60 sm:text-[17px]">
          Talk to our team and we&rsquo;ll scope the right setup for your size
          and stage &mdash; no pressure and no obligation.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={salesHref}
            className="pd-btn inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold"
            style={{ color: "#030302" }}
          >
            Talk to Sales
            <Arrow />
          </a>
          {demoHref && (
            <a
              href={demoHref}
              className="pd-btn inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-[15px] font-medium text-white hover:border-white/60"
            >
              {demoLabel}
              <Arrow />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductCTA;

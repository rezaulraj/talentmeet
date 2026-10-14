import React, { useEffect, useState } from "react";
import Mock from "./Mocks";
import { PRODUCTS } from "../../data/products";

const INK = "#030302";
const LINE = "#E1E1E1";
const CYCLE_MS = 5000;

export const Arrow = ({ size = 14 }) => (
  <svg className="pd-arrow" viewBox="0 0 16 16" width={size} height={size} fill="none" aria-hidden="true">
    <path d="M3 8h9.5M8.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/* ------------------------------------------------------------------ */
/* Interactive app preview — cycles through the product's features    */
/* ------------------------------------------------------------------ */

const AppPreview = ({ product, cluster }) => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const { features, Icon } = product;
  const autoplay = !paused && !prefersReducedMotion();

  useEffect(() => {
    if (!autoplay) return;
    const id = setTimeout(() => setActive((i) => (i + 1) % features.length), CYCLE_MS);
    return () => clearTimeout(id);
  }, [active, autoplay, features.length]);

  return (
    <div
      className="overflow-hidden rounded-2xl bg-white text-left"
      style={{
        border: `1px solid ${LINE}`,
        boxShadow: "0 40px 80px -40px rgba(3,3,2,0.35), 0 2px 6px rgba(3,3,2,0.04)",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Window chrome */}
      <div className="flex items-center gap-3 border-b px-4 py-3" style={{ borderColor: LINE }}>
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#E1E1E1]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#E1E1E1]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#E1E1E1]" />
        </span>
        <span
          className="mx-auto hidden items-center gap-1.5 rounded-md px-3 py-1 text-[11.5px] sm:flex"
          style={{ background: "#F3F3F1", color: "rgba(3,3,2,0.55)" }}
        >
          <svg viewBox="0 0 16 16" width="11" height="11" fill="none" aria-hidden="true">
            <rect x="3.5" y="7" width="9" height="6.5" rx="1.4" stroke="currentColor" strokeWidth="1.3" />
            <path d="M5.5 7V5.2a2.5 2.5 0 0 1 5 0V7" stroke="currentColor" strokeWidth="1.3" />
          </svg>
          {product.domain || `app.talentmeet.com/${product.slug}`}
        </span>
        <span className="w-[42px]" />
      </div>

      <div className="grid md:grid-cols-[230px_minmax(0,1fr)]">
        {/* Sidebar */}
        <aside className="border-b p-3 md:border-b-0 md:border-r md:p-4" style={{ borderColor: LINE, background: "#FBFBFA" }}>
          <div className="mb-3 hidden items-center gap-2.5 px-2 md:flex">
            <span
              className="grid h-8 w-8 place-items-center rounded-lg text-white"
              style={{ background: cluster.accent }}
            >
              <Icon size={18} />
            </span>
            <span>
              <span className="block text-[13.5px] font-semibold" style={{ color: INK }}>
                {product.name}
              </span>
              <span className="block text-[11px]" style={{ color: "rgba(3,3,2,0.5)" }}>
                Talent Meet
              </span>
            </span>
          </div>

          <div role="tablist" aria-label={`${product.name} features`} className="flex gap-1 overflow-x-auto md:flex-col">
            {features.map((f, i) => {
              const on = i === active;
              return (
                <button
                  key={f.title}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  onClick={() => setActive(i)}
                  className="relative shrink-0 overflow-hidden rounded-lg px-3 py-2 text-left text-[12.5px] font-medium transition-colors"
                  style={{
                    background: on ? "#FFFFFF" : "transparent",
                    color: on ? INK : "rgba(3,3,2,0.55)",
                    boxShadow: on ? `0 0 0 1px ${LINE}, 0 4px 10px -8px rgba(3,3,2,0.35)` : "none",
                  }}
                >
                  <span className="flex items-center gap-2 whitespace-nowrap">
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-[2px]"
                      style={{ background: on ? cluster.accent : "#C9C9C4" }}
                    />
                    {f.title}
                  </span>
                  {on && autoplay && (
                    <span
                      key={`bar-${active}`}
                      aria-hidden="true"
                      className="pd-timer absolute bottom-0 left-0 h-[2px]"
                      style={{ background: cluster.accent, animationDuration: `${CYCLE_MS}ms` }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {product.connects?.length > 0 && (
            <div className="mt-6 hidden px-2 md:block">
              <p className="mb-2 text-[10.5px] font-semibold uppercase tracking-[0.12em]" style={{ color: "rgba(3,3,2,0.45)" }}>
                Connected
              </p>
              <ul className="space-y-1.5">
                {product.connects.map((slug) => {
                  const p = PRODUCTS[slug];
                  return (
                    <li key={slug} className="flex items-center gap-2 text-[12px]" style={{ color: "rgba(3,3,2,0.7)" }}>
                      <p.Icon size={14} />
                      {p.name}
                      <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#2FA36B]" title="Synced" />
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </aside>

        {/* Main */}
        <div className="relative min-h-[360px] p-2 sm:min-h-[380px] md:p-3">
          <div key={active} className="pd-swap h-full" role="tabpanel">
            <Mock mock={features[active].mock} accent={cluster.accent} soft={cluster.soft} bare />
          </div>
        </div>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

const ProductHero = ({ product, cluster, salesHref, demoHref }) => (
  <section className="relative w-full overflow-hidden bg-white px-6 pb-20 pt-16 md:pt-[100px]">
    <div className="mx-auto max-w-6xl text-center">
      <p
        className="pd-in inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.16em]"
        style={{ color: cluster.accent }}
      >
        <span className="h-2 w-2 rounded-[2px]" style={{ background: cluster.accent }} />
        {cluster.name}
      </p>

      <h1
        className="pd-in mx-auto mt-5 max-w-3xl text-[34px] font-medium leading-[1.12] tracking-[-0.025em] sm:text-[44px]"
        style={{ color: INK, animationDelay: "60ms" }}
      >
        {product.headline}
      </h1>

      <p
        className="pd-in mx-auto mt-5 max-w-[560px] text-[17px] leading-relaxed sm:text-[18px]"
        style={{ color: "rgba(3,3,2,0.6)", animationDelay: "120ms" }}
      >
        {product.subhead}
      </p>

      <div
        className="pd-in mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5"
        style={{ animationDelay: "180ms" }}
      >
        <a
          href={salesHref}
          className="pd-btn inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold text-white"
          style={{ background: cluster.accent, boxShadow: `0 14px 28px -14px ${cluster.accent}` }}
        >
          Talk to Sales
          <Arrow />
        </a>
        <a
          href={demoHref}
          className="pd-link inline-flex items-center gap-2 px-2 py-3 text-[15px] font-medium"
          style={{ color: INK }}
        >
          {product.secondaryCta}
          <Arrow />
        </a>
      </div>

      {product.domain && (
        <p className="pd-in mt-4 text-[12.5px]" style={{ color: "rgba(3,3,2,0.45)", animationDelay: "220ms" }}>
          Live at{" "}
          <a href={`https://${product.domain}`} target="_blank" rel="noreferrer" className="underline underline-offset-4">
            {product.domain}
          </a>
        </p>
      )}
    </div>

    {/* Preview stage */}
    <div className="pd-in relative mx-auto mt-16 max-w-6xl" style={{ animationDelay: "260ms" }}>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-0 rounded-[28px]"
        style={{
          background: `radial-gradient(70% 90% at 50% 0%, ${cluster.soft} 0%, rgba(255,255,255,0) 70%), #F7F7F5`,
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-[28px] opacity-60"
        style={{
          backgroundImage: "radial-gradient(rgba(3,3,2,0.10) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
          maskImage: "linear-gradient(to bottom, #000 0%, transparent 85%)",
          WebkitMaskImage: "linear-gradient(to bottom, #000 0%, transparent 85%)",
        }}
      />
      <div className="relative px-3 py-6 sm:px-8 sm:py-10 md:px-14 md:py-14">
        <AppPreview product={product} cluster={cluster} />
      </div>
    </div>
  </section>
);

export default ProductHero;

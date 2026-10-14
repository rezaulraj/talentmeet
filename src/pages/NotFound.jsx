import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CLUSTERS, IconCareerCompass, PRODUCTS, getCluster, productHref } from "../data/products";
import { Arrow, FORM_CSS, INK, LINE, MUTED, PRIMARY } from "../components/forms/formKit";

const CSS = `
@keyframes nf-sway { 0%, 100% { transform: rotate(-14deg); } 50% { transform: rotate(16deg); } }
.nf-needle { animation: nf-sway 3.2s cubic-bezier(0.45, 0, 0.55, 1) infinite; transform-origin: center; }
@keyframes nf-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
.nf-float { animation: nf-float 4s ease-in-out infinite; }
.nf-chip { transition: border-color 160ms ease, transform 220ms cubic-bezier(0.22, 1, 0.36, 1); }
.nf-chip:hover { border-color: #C9C9C4; transform: translateY(-2px); }
@media (prefers-reduced-motion: reduce) { .nf-needle, .nf-float { animation: none; } }
`;

const QUICK_LINKS = [
  { to: "/", label: "Home", body: "Start from the beginning" },
  { to: "/help", label: "Help Center", body: "Answers for every product" },
  { to: "/contact-sales", label: "Talk to Sales", body: "Find the right setup" },
];

const NotFound = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = "Page not found | Talent Meet";
  }, []);

  return (
    <div className="ts-page relative overflow-hidden bg-white">
      <style>{FORM_CSS + CSS}</style>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[640px]"
        style={{ background: `radial-gradient(40% 55% at 50% 18%, ${PRIMARY}10, transparent 70%)` }}
      />

      <section className="relative px-6 pb-16 pt-36 text-center md:pt-48">
        {/* 4 [compass] 4 */}
        <div
          className="ts-in flex items-center justify-center gap-3 text-[96px] font-medium leading-none tracking-[-0.05em] sm:gap-5 sm:text-[140px]"
          style={{ color: INK }}
          aria-label="404"
        >
          <span aria-hidden="true">4</span>
          <span
            aria-hidden="true"
            className="nf-float grid h-[84px] w-[84px] place-items-center rounded-[26px] text-white sm:h-[120px] sm:w-[120px] sm:rounded-[34px]"
            style={{
              background: PRIMARY,
              boxShadow: `0 30px 60px -24px ${PRIMARY}`,
            }}
          >
            <span className="nf-needle block">
              <IconCareerCompass size={56} />
            </span>
          </span>
          <span aria-hidden="true">4</span>
        </div>

        <h1
          className="ts-in mx-auto mt-10 max-w-xl text-[30px] font-medium leading-[1.15] tracking-[-0.025em] sm:text-[36px]"
          style={{ color: INK, animationDelay: "80ms" }}
        >
          This page isn&rsquo;t part of the suite.
        </h1>
        <p className="ts-in mx-auto mt-4 max-w-md text-[16.5px] leading-relaxed" style={{ color: MUTED, animationDelay: "140ms" }}>
          We couldn&rsquo;t find{" "}
          <code
            className="rounded-md px-1.5 py-0.5 text-[14.5px]"
            style={{ background: "#F3F3F1", color: INK, wordBreak: "break-all" }}
          >
            {pathname}
          </code>
          . It may have moved, or the link may be mistyped.
        </p>

        <div className="ts-in mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row" style={{ animationDelay: "200ms" }}>
          <Link
            to="/"
            className="ts-btn inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold text-white"
            style={{ background: INK }}
          >
            Back to home
            <Arrow />
          </Link>
          <Link
            to="/contact"
            className="ts-link inline-flex items-center gap-2 px-3 py-3 text-[15px] font-medium"
            style={{ color: INK }}
          >
            Report a broken link
            <Arrow />
          </Link>
        </div>
      </section>

      {/* Where people usually meant to go */}
      <section className="relative px-6 pb-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-center text-[12.5px] font-semibold uppercase tracking-[0.14em]" style={{ color: MUTED }}>
            Maybe you were looking for
          </p>

          <ul className="flex flex-wrap justify-center gap-2">
            {CLUSTERS.flatMap((c) => c.products).map((slug) => {
              const p = PRODUCTS[slug];
              const c = getCluster(p.cluster);
              return (
                <li key={slug}>
                  <Link
                    to={productHref(slug)}
                    className="nf-chip inline-flex items-center gap-2 rounded-full bg-white py-1.5 pl-1.5 pr-3.5 text-[14px] font-medium"
                    style={{ border: `1px solid ${LINE}`, color: INK }}
                  >
                    <span className="grid h-7 w-7 place-items-center rounded-full" style={{ background: c.soft, color: c.accent }}>
                      <p.Icon size={15} />
                    </span>
                    {p.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {QUICK_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="ts-link nf-chip flex items-center justify-between gap-3 rounded-2xl bg-white px-5 py-4"
                style={{ border: `1px solid ${LINE}` }}
              >
                <span>
                  <span className="block text-[15px] font-medium" style={{ color: INK }}>{l.label}</span>
                  <span className="block text-[13px]" style={{ color: MUTED }}>{l.body}</span>
                </span>
                <span style={{ color: INK }}>
                  <Arrow />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;

import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { PRODUCTS, getCluster, productHref } from "../data/products";
import { SOLUTIONS, SOLUTION_SLUGS, solutionHref } from "../data/solutions";
import ProductCard from "../components/ProductCard";
import ProductCTA from "../components/product/ProductCTA";
import { Arrow } from "../components/product/ProductHero";
import useReveal from "../components/product/useReveal";
import PAGE_CSS from "../components/product/pageStyles";
import NotFound from "./NotFound";

const INK = "#030302";
const LINE = "#E1E1E1";
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

const SOLUTION_CSS = `
@keyframes sol-flow-x { from { left: 0%; } to { left: 100%; } }
@keyframes sol-flow-y { from { top: 0%; } to { top: 100%; } }
.sol-packet-x { animation: sol-flow-x 2.4s ${EASE} infinite; }
.sol-packet-y { animation: sol-flow-y 2.4s ${EASE} infinite; }
.sol-node { transition: transform 300ms ${EASE}, box-shadow 300ms ease, border-color 240ms ease; }
.sol-node:hover { transform: translateY(-4px); }
@media (prefers-reduced-motion: reduce) {
  .sol-packet-x, .sol-packet-y { animation: none; display: none; }
  .sol-node { transition: none; }
}
`;

/* ------------------------------------------------------------------ */
/* Hero diagram — how the products hand work to each other             */
/* ------------------------------------------------------------------ */

const Connector = ({ from, to, delay }) => (
  <>
    {/* horizontal (md+) */}
    <span aria-hidden="true" className="relative hidden h-[2px] min-w-6 flex-1 self-center md:block">
      <span
        className="absolute inset-0 rounded-full opacity-40"
        style={{ background: `linear-gradient(90deg, ${from}, ${to})` }}
      />
      <span
        className="sol-packet-x absolute top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: to,
          boxShadow: `0 0 0 4px ${to}26`,
          animationDelay: `${delay}ms`,
        }}
      />
    </span>
    {/* vertical (mobile) */}
    <span aria-hidden="true" className="relative mx-auto block h-10 w-[2px] md:hidden">
      <span
        className="absolute inset-0 rounded-full opacity-40"
        style={{ background: `linear-gradient(180deg, ${from}, ${to})` }}
      />
      <span
        className="sol-packet-y absolute left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: to, animationDelay: `${delay}ms` }}
      />
    </span>
  </>
);

const JourneyNode = ({ step, index }) => {
  const p = PRODUCTS[step.slug];
  const cluster = getCluster(p.cluster);
  return (
    <Link
      to={productHref(step.slug)}
      className="sol-node group relative block w-full rounded-2xl bg-white p-5 text-left md:w-[240px] md:shrink-0"
      style={{
        border: `1px solid ${LINE}`,
        boxShadow: "0 24px 48px -32px rgba(3,3,2,0.35)",
      }}
    >
      <span className="flex items-center justify-between">
        <span
          className="text-[11px] font-semibold uppercase tracking-[0.16em]"
          style={{ color: cluster.accent }}
        >
          {String(index + 1).padStart(2, "0")} · {step.verb}
        </span>
        <span
          className="opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          style={{ color: cluster.accent }}
        >
          <Arrow />
        </span>
      </span>
      <span className="mt-4 flex items-center gap-3">
        <span
          className="grid h-11 w-11 shrink-0 place-items-center rounded-xl text-white"
          style={{
            background: cluster.accent,
            boxShadow: `0 10px 20px -10px ${cluster.accent}`,
          }}
        >
          <p.Icon size={22} />
        </span>
        <span className="min-w-0">
          <span className="block text-[16px] font-medium" style={{ color: INK }}>
            {p.name}
          </span>
          <span
            className="block text-[12.5px] leading-snug"
            style={{ color: "rgba(3,3,2,0.55)" }}
          >
            {p.category}
          </span>
        </span>
      </span>
    </Link>
  );
};

const JourneyDiagram = ({ solution }) => {
  const { journey, team, Icon } = solution;
  const accents = journey.map((s) => getCluster(PRODUCTS[s.slug].cluster).accent);

  return (
    <div className="relative mx-auto mt-16 max-w-6xl">
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-[28px]"
        style={{
          background: `radial-gradient(45% 80% at 15% 0%, ${accents[0]}14, transparent 70%), radial-gradient(45% 80% at 85% 100%, ${accents[accents.length - 1]}14, transparent 70%), #F7F7F5`,
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-[28px] opacity-60"
        style={{
          backgroundImage: "radial-gradient(rgba(3,3,2,0.10) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
          maskImage: "radial-gradient(70% 90% at 50% 50%, #000 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(70% 90% at 50% 50%, #000 30%, transparent 100%)",
        }}
      />

      <div className="relative px-5 py-10 sm:px-10 md:px-14 md:py-14">
        {/* Audience origin */}
        <div className="mb-8 flex justify-center">
          <span
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] font-medium"
            style={{ border: `1px solid ${LINE}`, color: INK }}
          >
            <span
              className="grid h-6 w-6 place-items-center rounded-full"
              style={{ background: INK, color: "#fff" }}
            >
              <Icon size={14} />
            </span>
            Your {team}
          </span>
        </div>

        <div className="flex flex-col items-stretch md:flex-row">
          {journey.map((step, i) => (
            <React.Fragment key={step.slug}>
              {i > 0 && (
                <Connector from={accents[i - 1]} to={accents[i]} delay={i * 600} />
              )}
              <div className="pd-in md:flex" style={{ animationDelay: `${300 + i * 120}ms` }}>
                <JourneyNode step={step} index={i} />
              </div>
            </React.Fragment>
          ))}
        </div>

      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */

const SolutionHero = ({ solution, salesHref }) => (
  <section className="w-full bg-white px-6 pb-[96px] pt-[calc(96px+64px)] md:pt-[calc(96px+120px)]">
    <div className="mx-auto max-w-6xl text-center">
      <p className="pd-in inline-flex items-center gap-2 text-[13px] font-medium" style={{ color: "rgba(3,3,2,0.55)" }}>
        <span>Solutions</span>
        <span aria-hidden="true">/</span>
        <span style={{ color: INK }}>For {solution.audience}</span>
      </p>

      <h1
        className="pd-in mx-auto mt-5 max-w-3xl text-[32px] font-medium leading-[1.15] tracking-[-0.025em] sm:text-[40px]"
        style={{ color: INK, animationDelay: "60ms" }}
      >
        {solution.headline}
      </h1>

      <p
        className="pd-in mx-auto mt-5 max-w-[580px] text-[17px] leading-relaxed sm:text-[18px]"
        style={{ color: "rgba(3,3,2,0.6)", animationDelay: "120ms" }}
      >
        {solution.subhead}
      </p>

      <div className="pd-in mt-9" style={{ animationDelay: "180ms" }}>
        <a
          href={salesHref}
          className="pd-btn inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold text-white"
          style={{ background: INK, boxShadow: "0 14px 28px -14px rgba(3,3,2,0.6)" }}
        >
          Talk to Sales
          <Arrow />
        </a>
      </div>
    </div>

    <JourneyDiagram solution={solution} />
  </section>
);

const SolutionProducts = ({ solution }) => {
  const [ref, visible] = useReveal(0.12);
  return (
    <section ref={ref} className="w-full bg-white px-6 pb-24">
      <div className="mx-auto max-w-6xl">
        <div className={`pd-reveal ${visible ? "is-in" : ""} mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end`}>
          <h2 className="text-[26px] font-medium tracking-[-0.015em] sm:text-[28px]" style={{ color: INK }}>
            The products behind it
          </h2>
          <p className="text-[14.5px]" style={{ color: "rgba(3,3,2,0.55)" }}>
            Use one, or run them together.
          </p>
        </div>

        {visible && (
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-3" style={{ margin: 0, padding: 0 }}>
            {solution.products.map((slug, i) => {
              const p = PRODUCTS[slug];
              return (
                <ProductCard
                  key={slug}
                  product={{ name: p.name, description: p.tagline, Icon: p.Icon }}
                  href={productHref(slug)}
                  accent={getCluster(p.cluster).accent}
                  delay={i * 90}
                />
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
};

const OtherSolutions = ({ current }) => (
  <section className="w-full bg-white px-6 pb-24">
    <div className="mx-auto max-w-6xl border-t pt-10" style={{ borderColor: LINE }}>
      <p
        className="mb-5 text-[12px] font-semibold uppercase tracking-[0.16em]"
        style={{ color: "rgba(3,3,2,0.5)" }}
      >
        Other solutions
      </p>
      <ul className="grid gap-3 sm:grid-cols-3">
        {SOLUTION_SLUGS.filter((s) => s !== current).map((slug) => {
          const s = SOLUTIONS[slug];
          return (
            <li key={slug}>
              <Link
                to={solutionHref(slug)}
                className="pd-pill pd-link flex items-center gap-3 rounded-2xl px-4 py-3.5 text-[15px] font-medium"
                style={{ border: `1px solid ${LINE}`, color: INK }}
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl" style={{ background: "#F1F1F1" }}>
                  <s.Icon size={18} />
                </span>
                For {s.audience}
                <span className="ml-auto">
                  <Arrow />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

const SolutionPage = () => {
  const { slug } = useParams();
  const solution = SOLUTIONS[slug];

  useEffect(() => {
    if (solution) document.title = `Talent Meet for ${solution.audience}`;
  }, [solution]);

  if (!solution) return <NotFound />;

  const salesHref = `/contact-sales?solution=${solution.slug}`;
  const accents = [
    ...new Set(solution.journey.map((s) => getCluster(PRODUCTS[s.slug].cluster).accent)),
  ];

  return (
    <div className="pd-page bg-white">
      <style>{PAGE_CSS + SOLUTION_CSS}</style>

      <SolutionHero solution={solution} salesHref={salesHref} />
      <SolutionProducts key={solution.slug} solution={solution} />
      <OtherSolutions current={solution.slug} />

      <ProductCTA
        headline={`Let’s scope the right setup for your ${solution.team}.`}
        accents={accents}
        salesHref={salesHref}
      />
    </div>
  );
};

export default SolutionPage;

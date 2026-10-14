import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { CLUSTERS, PRODUCTS, productHref } from "../../data/products";
import { Arrow, FORM_CSS, INK, LINE, MUTED } from "../../components/forms/formKit";

/* ------------------------------------------------------------------ */
/* About                                                               */
/* TODO: replace the body paragraph with the real company story /      */
/* founding narrative. The current copy only restates the positioning  */
/* used elsewhere on the site — it makes no historical claims.         */
/* ------------------------------------------------------------------ */

const LinkCard = ({ to, title, body }) => (
  <Link
    to={to}
    className="ts-link group flex items-center justify-between gap-6 rounded-2xl bg-white p-6 transition-colors hover:border-[#C9C9C4]"
    style={{ border: `1px solid ${LINE}` }}
  >
    <span>
      <span className="block text-[17px] font-medium" style={{ color: INK }}>{title}</span>
      <span className="mt-1 block text-[14.5px]" style={{ color: MUTED }}>{body}</span>
    </span>
    <span style={{ color: INK }}>
      <Arrow />
    </span>
  </Link>
);

const About = () => {
  useEffect(() => {
    document.title = "About | Talent Meet";
  }, []);

  return (
    <div className="ts-page bg-white">
      <style>{FORM_CSS}</style>

      <section className="px-6 pb-16 pt-36 md:pt-48">
        <div className="mx-auto max-w-3xl">
          <p className="ts-in text-[13px] font-medium" style={{ color: MUTED }}>Company / About</p>
          <h1
            className="ts-in mt-4 text-[34px] font-medium leading-[1.1] tracking-[-0.03em] sm:text-[44px]"
            style={{ color: INK, animationDelay: "60ms" }}
          >
            Ten products. One reason they exist.
          </h1>
          <p
            className="ts-in mt-6 text-[18px] leading-relaxed"
            style={{ color: "rgba(3,3,2,0.72)", animationDelay: "120ms" }}
          >
            Every company runs on the same four jobs: finding the right people,
            managing them well, reaching its market, and keeping all of it
            secure. Talent Meet is the parent brand behind ten products that
            each do one of those jobs properly &mdash; built to work alone, or
            work together.
          </p>
        </div>
      </section>

      {/* The throughline — the four clusters */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-5 text-[13px] font-semibold uppercase tracking-[0.14em]" style={{ color: MUTED }}>
            The throughline
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CLUSTERS.map((c, i) => (
              <li
                key={c.id}
                className="ts-in flex flex-col rounded-2xl bg-white p-6"
                style={{ border: `1px solid ${LINE}`, animationDelay: `${180 + i * 60}ms` }}
              >
                <span
                  className="grid h-11 w-11 place-items-center rounded-xl"
                  style={{ background: c.soft, color: c.accent }}
                >
                  <c.TabIcon size={22} />
                </span>
                <h3 className="mt-5 text-[18px] font-medium" style={{ color: INK }}>{c.name}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed" style={{ color: MUTED }}>{c.description}</p>
                <p className="mt-auto flex flex-wrap gap-x-3 gap-y-1 pt-5 text-[13.5px] font-medium">
                  {c.products.map((slug) => (
                    <Link
                      key={slug}
                      to={productHref(slug)}
                      className="underline-offset-4 hover:underline"
                      style={{ color: c.accent }}
                    >
                      {PRODUCTS[slug].name}
                    </Link>
                  ))}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
          <LinkCard to="/careers" title="Careers" body="Build the tools ten teams rely on." />
          <LinkCard to="/contact" title="Contact" body="Press, partnerships, support or anything else." />
        </div>
      </section>
    </div>
  );
};

export default About;

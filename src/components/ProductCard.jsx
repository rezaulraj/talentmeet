import React, { useState } from "react";
import { Link } from "react-router-dom";

/* ------------------------------------------------------------------ */
/* Product card — shared by the homepage ecosystem grid and the        */
/* Solutions pages. `accent` drives hover border, icon tile and the    */
/* "Learn more" link colour.                                           */
/* ------------------------------------------------------------------ */

const BG = "#E1E1E1";
const INK = "#030302";
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
const SANS =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const KEYFRAMES = `
@keyframes eco-rise {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
.eco-rise { animation: eco-rise 520ms ${EASE} both; }
@media (prefers-reduced-motion: reduce) {
  .eco-rise { animation: none; }
}
`;

const ArrowIcon = ({ nudge }) => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    style={{
      transform: nudge ? "translateX(4px)" : "translateX(0)",
      transition: `transform 300ms ${EASE}`,
    }}
  >
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
);

const ProductCard = ({ product, href, accent, delay = 0, ctaLabel = "Learn more" }) => {
  const [active, setActive] = useState(false);
  const { name, description, Icon } = product;

  return (
    <li
      className="eco-rise h-full"
      style={{
        listStyle: "none",
        margin: 0,
        padding: 0,
        animationDelay: `${delay}ms`,
      }}
    >
      <style>{KEYFRAMES}</style>
      <article
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        className="flex h-full flex-col"
        style={{
          background: "#FFFFFF",
          borderRadius: 16,
          padding: 24,
          border: `1px solid ${active ? accent : BG}`,
          transform: active ? "translateY(-4px)" : "translateY(0)",
          boxShadow: active
            ? `0 18px 36px -20px ${accent}80`
            : "0 0 0 0 rgba(0,0,0,0)",
          transition: `transform 320ms ${EASE}, border-color 240ms ease, box-shadow 320ms ${EASE}`,
          fontFamily: SANS,
        }}
      >
        {/* Icon tile */}
        <span
          className="flex items-center justify-center"
          style={{
            width: 48,
            height: 48,
            borderRadius: 12,
            background: active ? accent : "#F1F1F1",
            color: active ? "#FFFFFF" : INK,
            transition: "background-color 260ms ease, color 260ms ease",
          }}
        >
          <Icon />
        </span>

        <h4
          style={{
            margin: "20px 0 0",
            fontSize: 18,
            lineHeight: 1.3,
            fontWeight: 500,
            color: INK,
            letterSpacing: "-0.005em",
          }}
        >
          {name}
        </h4>

        <p
          style={{
            margin: "8px 0 0",
            fontSize: 15,
            lineHeight: 1.55,
            fontWeight: 400,
            color: "rgba(3,3,2,0.72)",
          }}
        >
          {description}
        </p>

        <Link
          to={href}
          aria-label={`${ctaLabel} — ${name}`}
          className="mt-auto inline-flex items-center gap-1.5 self-start"
          style={{
            paddingTop: 20,
            fontSize: 15,
            fontWeight: 500,
            color: accent,
            textDecoration: "none",
            borderRadius: 6,
          }}
        >
          <span
            style={{
              textDecoration: active ? "underline" : "none",
              textUnderlineOffset: 4,
              textDecorationThickness: 1,
            }}
          >
            {ctaLabel}
          </span>
          <ArrowIcon nudge={active} />
        </Link>
      </article>
    </li>
  );
};

export default ProductCard;

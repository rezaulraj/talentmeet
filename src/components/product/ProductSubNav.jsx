import React from "react";
import { Link } from "react-router-dom";
import { PRODUCTS, productHref } from "../../data/products";

const INK = "#030302";

/* Pill tabs for the products in the current cluster. */
const ProductSubNav = ({ product, cluster }) => (
  <nav
    aria-label={`${cluster.name} products`}
    className="w-full bg-white px-6 pt-24 md:pt-40"
  >
    <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
      <ul className="flex flex-wrap items-center gap-2">
        {cluster.products.map((slug) => {
          const p = PRODUCTS[slug];
          const active = slug === product.slug;
          return (
            <li key={slug}>
              <Link
                to={productHref(slug)}
                aria-current={active ? "page" : undefined}
                className="pd-pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13.5px] font-medium"
                style={{
                  background: active ? cluster.accent : "#E1E1E1",
                  color: active ? "#FFFFFF" : INK,
                }}
              >
                <p.Icon size={16} />
                {p.name}
              </Link>
            </li>
          );
        })}
      </ul>

      <Link
        to="/#products"
        className="pd-link inline-flex items-center gap-1.5 text-[13.5px] font-medium"
        style={{ color: "rgba(3,3,2,0.6)" }}
      >
        All 10 products
        <svg viewBox="0 0 16 16" width="13" height="13" fill="none" aria-hidden="true">
          <path d="M3 8h9.5M8.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </div>
  </nav>
);

export default ProductSubNav;

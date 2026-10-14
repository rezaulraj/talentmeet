import React from "react";
import { Link } from "react-router-dom";
import { PRODUCTS, productHref } from "../../data/products";
import useReveal from "./useReveal";

const INK = "#030302";

const Connector = () => (
  <span
    aria-hidden="true"
    className="hidden h-px w-8 sm:block"
    style={{ backgroundImage: "linear-gradient(90deg, rgba(3,3,2,0.35) 50%, transparent 50%)", backgroundSize: "6px 1px" }}
  />
);

/* Lightweight "Part of the Talent Meet suite" reminder. */
const SuiteCrossSell = ({ product, cluster }) => {
  const [ref, visible] = useReveal();
  const { Icon } = product;

  return (
    <section ref={ref} className="w-full bg-white px-6 py-20">
      <div
        className={`pd-reveal ${visible ? "is-in" : ""} mx-auto max-w-6xl rounded-2xl p-10 text-center`}
        style={{ background: "#E1E1E1" }}
      >
        <p
          className="text-[13px] font-semibold uppercase tracking-[0.16em]"
          style={{ color: "rgba(3,3,2,0.55)" }}
        >
          Part of the Talent Meet suite
        </p>

        <p
          className="mx-auto mt-4 max-w-2xl text-[17px] leading-relaxed sm:text-[18px]"
          style={{ color: INK }}
        >
          {product.suite}
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-2 sm:gap-0">
          <span
            className="inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-[13.5px] font-medium text-white"
            style={{ background: cluster.accent }}
          >
            <Icon size={16} />
            {product.name}
          </span>
          {product.connects.map((slug) => {
            const p = PRODUCTS[slug];
            return (
              <React.Fragment key={slug}>
                <Connector />
                <Link
                  to={productHref(slug)}
                  className="pd-pill inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-[13.5px] font-medium"
                  style={{ color: INK }}
                >
                  <p.Icon size={16} />
                  {p.name}
                </Link>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SuiteCrossSell;

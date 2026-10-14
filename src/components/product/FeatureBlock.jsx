import React from "react";
import Mock from "./Mocks";
import useReveal from "./useReveal";

const INK = "#030302";

/* One feature highlight — alternating left/right, white / #E1E1E1. */
const FeatureBlock = ({ feature, index, total, cluster }) => {
  const [ref, visible] = useReveal();
  const flipped = index % 2 === 1;
  const gray = index % 2 === 1;

  return (
    <section
      ref={ref}
      className="w-full px-6 py-20"
      style={{ background: gray ? "#E1E1E1" : "#FFFFFF" }}
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* Copy */}
        <div
          className={`pd-reveal ${visible ? "is-in" : ""} ${flipped ? "md:order-2" : ""}`}
        >
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="block h-2 w-2"
              style={{ background: cluster.accent }}
            />
            <span
              className="text-[12px] font-medium tabular-nums tracking-[0.08em]"
              style={{ color: "rgba(3,3,2,0.45)" }}
            >
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>
          <h2
            className="mt-5 text-[22px] font-medium leading-snug tracking-[-0.01em]"
            style={{ color: INK }}
          >
            {feature.title}
          </h2>
          <p
            className="mt-3 max-w-[440px] text-[16px] leading-relaxed"
            style={{ color: "rgba(3,3,2,0.68)" }}
          >
            {feature.body}
          </p>
        </div>

        {/* Screenshot */}
        <div
          className={`pd-reveal pd-reveal-media relative ${visible ? "is-in" : ""} ${flipped ? "md:order-1" : ""}`}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-6 rounded-[32px] opacity-70 blur-2xl"
            style={{
              background: `radial-gradient(60% 60% at ${flipped ? "30%" : "70%"} 40%, ${cluster.soft}, transparent 70%)`,
            }}
          />
          <div className="relative">
            <Mock mock={feature.mock} accent={cluster.accent} soft={cluster.soft} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureBlock;

import React, { useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { RESOURCE_SECTIONS } from "../../data/resources";

/* ------------------------------------------------------------------ */
/* Content-hub kit — shared by Blog, Help Center and Guides.           */
/* Deliberately denser and plainer than the marketing pages.           */
/* ------------------------------------------------------------------ */

export const INK = "#030302";
export const LINE = "#E1E1E1";
export const MUTED = "rgba(3,3,2,0.58)";
export const PRIMARY = "#1B4DFF";
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

export const HUB_CSS = `
.hub-page { font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif; }
@keyframes hub-in { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
.hub-in { animation: hub-in 420ms ${EASE} both; }
.hub-search { transition: border-color 160ms ease, box-shadow 160ms ease; }
.hub-search:focus-within { border-color: ${PRIMARY}; box-shadow: 0 0 0 4px ${PRIMARY}1F; }
.hub-pill { transition: background-color 160ms ease, color 160ms ease, border-color 160ms ease; }
.hub-pill:hover { border-color: #C9C9C4; }
.hub-row { transition: background-color 160ms ease; }
.hub-row:hover { background: #F7F7F5; }
.hub-row:hover .hub-row-arrow { transform: translateX(3px); opacity: 1; }
.hub-row-arrow { opacity: .35; transition: transform 220ms ${EASE}, opacity 160ms ease; }
.hub-card { transition: border-color 200ms ease, transform 260ms ${EASE}, box-shadow 260ms ease; }
.hub-card:hover { border-color: #C9C9C4; transform: translateY(-2px); box-shadow: 0 18px 36px -24px rgba(3,3,2,0.3); }
.hub-page a:focus-visible, .hub-page button:focus-visible { outline: 2px solid ${PRIMARY}; outline-offset: 2px; }
mark.hub-mark { background: ${PRIMARY}1F; color: inherit; border-radius: 3px; padding: 0 1px; }
@media (prefers-reduced-motion: reduce) { .hub-in { animation: none; } .hub-card, .hub-row-arrow { transition: none; } }
`;

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

export const formatDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

export const matches = (query, ...fields) => {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  const hay = fields.join(" ").toLowerCase();
  return q.split(/\s+/).every((word) => hay.includes(word));
};

/** Search query + one filter, kept in the URL so results are shareable. */
export const useHubFilters = (filterKey = "category") => {
  const [params, setParams] = useSearchParams();
  const update = (key, value) =>
    setParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        if (value) next.set(key, value);
        else next.delete(key);
        return next;
      },
      { replace: true },
    );
  return {
    query: params.get("q") || "",
    setQuery: (v) => update("q", v),
    filter: params.get(filterKey) || "",
    setFilter: (v) => update(filterKey, v),
    reset: () => setParams({}, { replace: true }),
  };
};

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export const Highlight = ({ text, query }) => {
  const words = query.trim().split(/\s+/).filter(Boolean);
  if (!words.length) return text;
  const re = new RegExp(`(${words.map(escapeRe).join("|")})`, "gi");
  return text.split(re).map((part, i) =>
    i % 2 ? (
      <mark key={i} className="hub-mark">
        {part}
      </mark>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    ),
  );
};

export const Arrow = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 16 16" width="14" height="14" fill="none" aria-hidden="true">
    <path d="M3 8h9.5M8.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ------------------------------------------------------------------ */
/* Header: breadcrumb, title and section switcher                      */
/* ------------------------------------------------------------------ */

export const HubHeader = ({ current, title, description }) => (
  <div className="border-b" style={{ borderColor: LINE }}>
    <div className="mx-auto max-w-6xl px-6 pb-8 pt-32 md:pt-44">
      <p className="text-[13px] font-medium" style={{ color: MUTED }}>
        <Link to="/resources" className="hover:underline hover:underline-offset-4">
          Resources
        </Link>
        <span aria-hidden="true" className="mx-2">/</span>
        <span style={{ color: INK }}>{title}</span>
      </p>
      <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <h1 className="text-[30px] font-medium tracking-[-0.025em] sm:text-[34px]" style={{ color: INK }}>
            {title}
          </h1>
          <p className="mt-2 max-w-xl text-[15.5px]" style={{ color: MUTED }}>
            {description}
          </p>
        </div>
        <nav aria-label="Resources sections" className="flex shrink-0 gap-1 rounded-xl p-1" style={{ background: "#F3F3F1" }}>
          {RESOURCE_SECTIONS.map((s) => {
            const on = s.slug === current;
            return (
              <Link
                key={s.slug}
                to={s.href}
                aria-current={on ? "page" : undefined}
                className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[13.5px] font-medium"
                style={{
                  background: on ? "#fff" : "transparent",
                  color: on ? INK : MUTED,
                  boxShadow: on ? "0 1px 3px rgba(3,3,2,0.12)" : "none",
                }}
              >
                <s.Icon size={15} />
                {s.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/* Search bar — "/" focuses it from anywhere on the page               */
/* ------------------------------------------------------------------ */

export const SearchBar = ({ value, onChange, placeholder, resultCount }) => {
  const ref = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      const tag = document.activeElement?.tagName;
      if (e.key === "/" && tag !== "INPUT" && tag !== "TEXTAREA" && tag !== "SELECT") {
        e.preventDefault();
        ref.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div>
      <div
        className="hub-search flex h-12 items-center gap-3 rounded-xl bg-white px-4"
        style={{ border: `1px solid ${LINE}` }}
      >
        <svg viewBox="0 0 20 20" width="17" height="17" fill="none" aria-hidden="true" style={{ color: MUTED }}>
          <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.6" />
          <path d="m13.5 13.5 3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <input
          ref={ref}
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => e.key === "Escape" && onChange("")}
          placeholder={placeholder}
          aria-label={placeholder}
          className="h-full min-w-0 flex-1 bg-transparent text-[15px] outline-none [&::-webkit-search-cancel-button]:hidden"
          style={{ color: INK }}
        />
        {value ? (
          <button
            type="button"
            onClick={() => onChange("")}
            className="rounded-md px-2 py-1 text-[12.5px] font-medium"
            style={{ color: MUTED, background: "#F3F3F1" }}
          >
            Clear
          </button>
        ) : (
          <kbd
            className="hidden rounded-md px-1.5 py-0.5 font-sans text-[12px] sm:inline"
            style={{ color: MUTED, border: `1px solid ${LINE}` }}
          >
            /
          </kbd>
        )}
      </div>
      <p className="sr-only" aria-live="polite">
        {resultCount} results
      </p>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Filter pills                                                        */
/* ------------------------------------------------------------------ */

export const FilterPills = ({ options, value, onChange, label }) => (
  <div role="group" aria-label={label} className="flex flex-wrap gap-2">
    {options.map((o) => {
      const on = o.value === value;
      return (
        <button
          key={o.value || "all"}
          type="button"
          aria-pressed={on}
          onClick={() => onChange(o.value)}
          className="hub-pill inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[13.5px] font-medium"
          style={{
            background: on ? INK : "#fff",
            color: on ? "#fff" : INK,
            border: `1px solid ${on ? INK : LINE}`,
          }}
        >
          {o.label}
          {o.count != null && (
            <span className="tabular-nums" style={{ opacity: on ? 0.6 : 0.45 }}>
              {o.count}
            </span>
          )}
        </button>
      );
    })}
  </div>
);

/* ------------------------------------------------------------------ */
/* Empty state                                                         */
/* ------------------------------------------------------------------ */

export const EmptyState = ({ query, onReset }) => (
  <div className="hub-in rounded-2xl px-6 py-14 text-center" style={{ border: `1px dashed ${LINE}` }}>
    <p className="text-[16px] font-medium" style={{ color: INK }}>
      Nothing matches {query ? <>&ldquo;{query}&rdquo;</> : "these filters"}
    </p>
    <p className="mt-1.5 text-[14px]" style={{ color: MUTED }}>
      Try a different word, or clear the filters.
    </p>
    <div className="mt-5 flex flex-col items-center justify-center gap-2 sm:flex-row">
      <button
        type="button"
        onClick={onReset}
        className="rounded-lg px-4 py-2 text-[14px] font-medium"
        style={{ border: `1px solid ${LINE}`, color: INK }}
      >
        Clear filters
      </button>
      <Link
        to="/contact-sales"
        className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-[14px] font-medium text-white"
        style={{ background: PRIMARY }}
      >
        Ask our team
        <Arrow />
      </Link>
    </div>
  </div>
);

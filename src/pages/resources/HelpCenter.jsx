import React, { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { CLUSTERS, PRODUCTS, getCluster } from "../../data/products";
import { HELP_ARTICLES, HELP_TYPES } from "../../data/resources";
import {
  Arrow,
  EmptyState,
  FilterPills,
  HUB_CSS,
  Highlight,
  HubHeader,
  INK,
  LINE,
  MUTED,
  SearchBar,
  matches,
  useHubFilters,
} from "../../components/resources/HubKit";

const countFor = (slug) => HELP_ARTICLES.filter((a) => a.product === slug).length;

const TypeTag = ({ type }) => (
  <span
    className="whitespace-nowrap rounded-full px-2 py-0.5 text-[11.5px] font-medium"
    style={{ background: "#F3F3F1", color: MUTED }}
  >
    {type}
  </span>
);

const ProductBadge = ({ slug, size = 28 }) => {
  const p = PRODUCTS[slug];
  const c = getCluster(p.cluster);
  return (
    <span
      className="grid shrink-0 place-items-center rounded-lg"
      style={{ width: size, height: size, background: c.soft, color: c.accent }}
    >
      <p.Icon size={Math.round(size * 0.55)} />
    </span>
  );
};

/* Sidebar — 10 product sections grouped by cluster */
const Sidebar = ({ value, onChange }) => (
  <nav aria-label="Products" className="hidden lg:block">
    <div className="sticky top-32 space-y-5">
      <button
        type="button"
        onClick={() => onChange("")}
        aria-current={!value ? "true" : undefined}
        className="hub-row flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-[14px] font-medium"
        style={{ background: !value ? "#F3F3F1" : undefined, color: INK }}
      >
        All products
        <span className="tabular-nums" style={{ color: MUTED }}>{HELP_ARTICLES.length}</span>
      </button>
      {CLUSTERS.map((c) => (
        <div key={c.id}>
          <p className="mb-1 px-3 text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: c.accent }}>
            {c.name}
          </p>
          {c.products.map((slug) => {
            const on = value === slug;
            return (
              <button
                key={slug}
                type="button"
                onClick={() => onChange(slug)}
                aria-current={on ? "true" : undefined}
                className="hub-row flex w-full items-center gap-2.5 rounded-lg px-3 py-1.5 text-left text-[14px]"
                style={{ background: on ? "#F3F3F1" : undefined, color: INK, fontWeight: on ? 600 : 400 }}
              >
                <ProductBadge slug={slug} size={22} />
                <span className="flex-1">{PRODUCTS[slug].name}</span>
                <span className="text-[12.5px] tabular-nums" style={{ color: MUTED }}>{countFor(slug)}</span>
              </button>
            );
          })}
        </div>
      ))}
    </div>
  </nav>
);

/* Mobile product picker */
const ProductSelect = ({ value, onChange }) => (
  <label className="block lg:hidden">
    <span className="sr-only">Product</span>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="h-11 w-full rounded-xl bg-white px-3 text-[14.5px]"
      style={{ border: `1px solid ${LINE}`, color: INK }}
    >
      <option value="">All products</option>
      {CLUSTERS.map((c) => (
        <optgroup key={c.id} label={c.name}>
          {c.products.map((slug) => (
            <option key={slug} value={slug}>
              {PRODUCTS[slug].name}
            </option>
          ))}
        </optgroup>
      ))}
    </select>
  </label>
);

/* Browsing view — one section per product */
const ProductSections = ({ onOpen }) => (
  <div className="grid gap-4 md:grid-cols-2">
    {CLUSTERS.flatMap((c) => c.products).map((slug, i) => {
      const p = PRODUCTS[slug];
      const articles = HELP_ARTICLES.filter((a) => a.product === slug);
      return (
        <section
          key={slug}
          className="hub-card hub-in rounded-2xl bg-white p-5"
          style={{ border: `1px solid ${LINE}`, animationDelay: `${i * 30}ms` }}
        >
          <div className="flex items-center gap-3">
            <ProductBadge slug={slug} size={34} />
            <div className="min-w-0 flex-1">
              <h2 className="text-[16px] font-semibold" style={{ color: INK }}>{p.name}</h2>
              <p className="truncate text-[12.5px]" style={{ color: MUTED }}>{p.category}</p>
            </div>
          </div>
          <ul className="mt-4 space-y-1">
            {articles.map((a) => (
              <li key={a.slug} className="flex items-start gap-2 text-[14px] leading-snug" style={{ color: INK }}>
                <span aria-hidden="true" className="mt-[7px] h-1 w-1 shrink-0 rounded-full" style={{ background: "#B9B9B3" }} />
                {a.title}
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => onOpen(slug)}
            className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-medium"
            style={{ color: getCluster(p.cluster).accent }}
          >
            View all {articles.length} articles
            <Arrow />
          </button>
        </section>
      );
    })}
  </div>
);

const ArticleRow = ({ article, query, showProduct }) => (
  <li className="hub-row flex items-start gap-4 rounded-xl px-3 py-4 md:px-4">
    {showProduct && <ProductBadge slug={article.product} size={32} />}
    <div className="min-w-0 flex-1">
      <div className="flex flex-wrap items-center gap-2">
        {showProduct && (
          <span className="text-[12.5px] font-medium" style={{ color: getCluster(PRODUCTS[article.product].cluster).accent }}>
            {PRODUCTS[article.product].name}
          </span>
        )}
        <TypeTag type={article.type} />
      </div>
      <h3 className="mt-1.5 text-[16px] font-medium leading-snug" style={{ color: INK }}>
        <Highlight text={article.title} query={query} />
      </h3>
      <p className="mt-1 text-[14px] leading-relaxed" style={{ color: MUTED }}>
        <Highlight text={article.excerpt} query={query} />
      </p>
    </div>
  </li>
);

const HelpCenter = () => {
  const { query, setQuery, filter: product, setFilter: setProduct } = useHubFilters("product");
  const [params, setParams] = useSearchParams();
  const type = params.get("type") || "";
  const setType = (v) =>
    setParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        if (v) next.set("type", v);
        else next.delete("type");
        return next;
      },
      { replace: true },
    );
  const reset = () => setParams({}, { replace: true });

  useEffect(() => {
    document.title = "Help Center | Talent Meet";
  }, []);

  const validProduct = PRODUCTS[product] ? product : "";

  const results = useMemo(
    () =>
      HELP_ARTICLES.filter(
        (a) =>
          (!validProduct || a.product === validProduct) &&
          (!type || a.type === type) &&
          matches(query, a.title, a.excerpt, PRODUCTS[a.product].name, a.type),
      ),
    [query, validProduct, type],
  );

  const browsing = !query && !validProduct && !type;
  const scoped = validProduct ? HELP_ARTICLES.filter((a) => a.product === validProduct) : HELP_ARTICLES;
  const typeOptions = [
    { value: "", label: "All", count: scoped.length },
    ...HELP_TYPES.map((t) => ({ value: t, label: t, count: scoped.filter((a) => a.type === t).length })),
  ];

  return (
    <div className="hub-page bg-white">
      <style>{HUB_CSS}</style>
      <HubHeader
        current="help"
        title="Help Center"
        description="Answers for every Talent Meet product — search, or browse by product."
      />

      <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-24 pt-8 lg:grid-cols-[240px_minmax(0,1fr)]">
        <Sidebar value={validProduct} onChange={setProduct} />

        <div className="min-w-0">
          <div className="space-y-4">
            <SearchBar
              value={query}
              onChange={setQuery}
              placeholder={validProduct ? `Search ${PRODUCTS[validProduct].name} help` : "Search all help articles"}
              resultCount={results.length}
            />
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <FilterPills label="Article type" options={typeOptions} value={type} onChange={setType} />
              <div className="sm:w-56">
                <ProductSelect value={validProduct} onChange={setProduct} />
              </div>
            </div>
          </div>

          <div className="mt-8">
            {browsing ? (
              <ProductSections onOpen={setProduct} />
            ) : results.length === 0 ? (
              <EmptyState query={query} onReset={reset} />
            ) : (
              <>
                <div className="mb-2 flex items-center gap-3 px-3 md:px-4">
                  {validProduct && <ProductBadge slug={validProduct} size={26} />}
                  <p className="text-[13.5px]" style={{ color: MUTED }}>
                    {results.length} {results.length === 1 ? "article" : "articles"}
                    {validProduct && <> in <span style={{ color: INK, fontWeight: 600 }}>{PRODUCTS[validProduct].name}</span></>}
                  </p>
                </div>
                <ul className="divide-y divide-[#E1E1E1]">
                  {results.map((a) => (
                    <ArticleRow key={a.slug} article={a} query={query} showProduct={!validProduct} />
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;

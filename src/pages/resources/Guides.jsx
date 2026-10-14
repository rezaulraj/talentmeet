import React, { useEffect, useMemo } from "react";
import { PRODUCTS, getCluster } from "../../data/products";
import { GUIDES, GUIDE_TOPICS } from "../../data/resources";
import {
  EmptyState,
  FilterPills,
  HUB_CSS,
  Highlight,
  HubHeader,
  INK,
  LINE,
  MUTED,
  PRIMARY,
  SearchBar,
  matches,
  useHubFilters,
} from "../../components/resources/HubKit";

const LEVEL_BARS = { Beginner: 1, Intermediate: 2, Advanced: 3 };

const Level = ({ level }) => (
  <span className="inline-flex items-center gap-1.5 text-[12.5px]" style={{ color: MUTED }}>
    <span aria-hidden="true" className="flex items-end gap-[2px]">
      {[1, 2, 3].map((n) => (
        <span
          key={n}
          className="w-[3px] rounded-sm"
          style={{ height: 4 + n * 3, background: n <= LEVEL_BARS[level] ? PRIMARY : "#D9D9D4" }}
        />
      ))}
    </span>
    {level}
  </span>
);

const ProductStack = ({ slugs }) => (
  <span className="flex items-center">
    {slugs.map((slug, i) => {
      const p = PRODUCTS[slug];
      const c = getCluster(p.cluster);
      return (
        <span
          key={slug}
          title={p.name}
          className="grid h-7 w-7 place-items-center rounded-full ring-2 ring-white"
          style={{ background: c.soft, color: c.accent, marginLeft: i ? -6 : 0, zIndex: slugs.length - i }}
        >
          <p.Icon size={14} />
        </span>
      );
    })}
  </span>
);

const GuideCard = ({ guide, query, index }) => (
  <li
    className="hub-card hub-in flex flex-col rounded-2xl bg-white p-6"
    style={{ border: `1px solid ${LINE}`, animationDelay: `${index * 40}ms` }}
  >
    <div className="flex items-center justify-between gap-3">
      <span className="text-[12px] font-semibold uppercase tracking-[0.1em]" style={{ color: PRIMARY }}>
        {guide.topic}
      </span>
      <Level level={guide.level} />
    </div>
    <h2 className="mt-3 text-[18px] font-medium leading-snug tracking-[-0.01em]" style={{ color: INK }}>
      <Highlight text={guide.title} query={query} />
    </h2>
    <p className="mt-2 text-[14.5px] leading-relaxed" style={{ color: MUTED }}>
      <Highlight text={guide.excerpt} query={query} />
    </p>
    <div className="mt-auto flex items-center justify-between pt-6">
      <span className="flex items-center gap-2">
        <ProductStack slugs={guide.products} />
        <span className="text-[12.5px]" style={{ color: MUTED }}>
          {guide.products.length === 1
            ? PRODUCTS[guide.products[0]].name
            : `${guide.products.length} products`}
        </span>
      </span>
      <span className="text-[12.5px] tabular-nums" style={{ color: MUTED }}>
        {guide.minutes} min
      </span>
    </div>
  </li>
);

const Guides = () => {
  const { query, setQuery, filter, setFilter, reset } = useHubFilters("topic");

  useEffect(() => {
    document.title = "Guides | Talent Meet";
  }, []);

  const guides = useMemo(
    () =>
      GUIDES.filter(
        (g) =>
          (!filter || g.topic === filter) &&
          matches(query, g.title, g.excerpt, g.topic, g.level, ...g.products.map((s) => PRODUCTS[s].name)),
      ),
    [query, filter],
  );

  const options = [
    { value: "", label: "All", count: GUIDES.length },
    ...GUIDE_TOPICS.map((t) => ({ value: t, label: t, count: GUIDES.filter((g) => g.topic === t).length })),
  ];

  return (
    <div className="hub-page bg-white">
      <style>{HUB_CSS}</style>
      <HubHeader
        current="guides"
        title="Guides"
        description="Longer-form how-tos for setting up and connecting your Talent Meet products."
      />

      <div className="mx-auto max-w-6xl px-6 pb-24 pt-8">
        <div className="space-y-4">
          <SearchBar
            value={query}
            onChange={setQuery}
            placeholder="Search guides — try “payroll” or “SecureLine”"
            resultCount={guides.length}
          />
          <FilterPills label="Topics" options={options} value={filter} onChange={setFilter} />
        </div>

        <div className="mt-8">
          {guides.length === 0 ? (
            <EmptyState query={query} onReset={reset} />
          ) : (
            <ul key={filter} className="grid gap-4 md:grid-cols-2">
              {guides.map((g, i) => (
                <GuideCard key={g.slug} guide={g} query={query} index={i} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Guides;

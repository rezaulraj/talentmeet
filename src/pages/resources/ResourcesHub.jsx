import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { CLUSTERS, PRODUCTS, getCluster } from "../../data/products";
import {
  BLOG_POSTS,
  GUIDES,
  HELP_ARTICLES,
  RESOURCE_SECTIONS,
} from "../../data/resources";
import ProductCard from "../../components/ProductCard";
import {
  Arrow,
  HUB_CSS,
  Highlight,
  INK,
  LINE,
  MUTED,
  PRIMARY,
  SearchBar,
  formatDate,
  matches,
} from "../../components/resources/HubKit";

const SECTION_BY_SLUG = Object.fromEntries(RESOURCE_SECTIONS.map((s) => [s.slug, s]));

/* One search across Blog, Help Center and Guides */
const useEverywhereSearch = (query) =>
  useMemo(() => {
    if (!query.trim()) return null;
    return [
      {
        section: SECTION_BY_SLUG.blog,
        items: BLOG_POSTS.filter((p) => matches(query, p.title, p.excerpt, p.category)).map((p) => ({
          key: p.slug,
          title: p.title,
          meta: p.category,
        })),
      },
      {
        section: SECTION_BY_SLUG.help,
        items: HELP_ARTICLES.filter((a) =>
          matches(query, a.title, a.excerpt, PRODUCTS[a.product].name),
        ).map((a) => ({ key: a.slug, title: a.title, meta: PRODUCTS[a.product].name })),
      },
      {
        section: SECTION_BY_SLUG.guides,
        items: GUIDES.filter((g) => matches(query, g.title, g.excerpt, g.topic)).map((g) => ({
          key: g.slug,
          title: g.title,
          meta: g.topic,
        })),
      },
    ];
  }, [query]);

const SearchResults = ({ groups, query }) => {
  const total = groups.reduce((n, g) => n + g.items.length, 0);
  if (!total)
    return (
      <p className="hub-in mt-4 rounded-xl px-4 py-6 text-center text-[14.5px]" style={{ border: `1px dashed ${LINE}`, color: MUTED }}>
        Nothing matches &ldquo;{query}&rdquo; yet.{" "}
        <Link to="/contact-sales" className="font-medium underline underline-offset-4" style={{ color: PRIMARY }}>
          Ask our team
        </Link>
      </p>
    );

  return (
    <div className="hub-in mt-4 grid gap-4 md:grid-cols-3">
      {groups.map(({ section, items }) => (
        <div key={section.slug} className="rounded-2xl bg-white p-4" style={{ border: `1px solid ${LINE}` }}>
          <p className="flex items-center justify-between px-1 text-[12px] font-semibold uppercase tracking-[0.12em]" style={{ color: MUTED }}>
            <span className="flex items-center gap-1.5">
              <section.Icon size={14} />
              {section.name}
            </span>
            <span className="tabular-nums">{items.length}</span>
          </p>
          {items.length ? (
            <ul className="mt-2 space-y-0.5">
              {items.slice(0, 4).map((it) => (
                <li key={it.key} className="rounded-lg px-1 py-2">
                  <p className="text-[14px] font-medium leading-snug" style={{ color: INK }}>
                    <Highlight text={it.title} query={query} />
                  </p>
                  <p className="text-[12.5px]" style={{ color: MUTED }}>{it.meta}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 px-1 text-[13.5px]" style={{ color: MUTED }}>No matches</p>
          )}
          {items.length > 0 && (
            <Link
              to={`${section.href}?q=${encodeURIComponent(query)}`}
              className="mt-2 inline-flex items-center gap-1.5 px-1 text-[13.5px] font-medium"
              style={{ color: PRIMARY }}
            >
              {items.length > 4 ? `See all ${items.length}` : `Open in ${section.name}`}
              <Arrow />
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

const ListHeader = ({ title, href, label }) => (
  <div className="mb-3 flex items-baseline justify-between">
    <h2 className="text-[13px] font-semibold uppercase tracking-[0.12em]" style={{ color: MUTED }}>
      {title}
    </h2>
    <Link to={href} className="inline-flex items-center gap-1.5 text-[13.5px] font-medium" style={{ color: INK }}>
      {label}
      <Arrow />
    </Link>
  </div>
);

const ResourcesHub = () => {
  const [query, setQuery] = useState("");
  const groups = useEverywhereSearch(query);

  useEffect(() => {
    document.title = "Resources | Talent Meet";
  }, []);

  const latestPosts = [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);
  const featuredGuides = GUIDES.slice(0, 3);

  return (
    <div className="hub-page bg-white">
      <style>{HUB_CSS}</style>

      {/* Hero — short, it's a routing page */}
      <section className="relative px-6 pb-12 pt-36 md:pt-48">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[520px]"
          style={{ background: `radial-gradient(40% 60% at 50% 10%, ${PRIMARY}10, transparent 70%)` }}
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <h1 className="hub-in text-[32px] font-medium leading-[1.12] tracking-[-0.025em] sm:text-[40px]" style={{ color: INK }}>
            Guides, help, and how-to for every Talent Meet product.
          </h1>
          <p className="hub-in mt-4 text-[17px]" style={{ color: MUTED, animationDelay: "60ms" }}>
            Find an answer, read what&rsquo;s new, or set something up step by step.
          </p>
          <div className="hub-in mx-auto mt-8 max-w-xl text-left" style={{ animationDelay: "120ms" }}>
            <SearchBar
              value={query}
              onChange={setQuery}
              placeholder="Search blog, help and guides"
              resultCount={groups ? groups.reduce((n, g) => n + g.items.length, 0) : 0}
            />
          </div>
        </div>
        {groups && (
          <div className="relative mx-auto max-w-6xl">
            <SearchResults groups={groups} query={query} />
          </div>
        )}
      </section>

      {/* Three sections — same card component as the rest of the site */}
      <section className="px-6 pb-16">
        <ul className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3" style={{ margin: "0 auto", padding: 0 }}>
          {RESOURCE_SECTIONS.map((s, i) => (
            <ProductCard
              key={s.slug}
              product={{ name: s.name, description: s.description, Icon: s.Icon }}
              href={s.href}
              accent={PRIMARY}
              ctaLabel={`Open ${s.name}`}
              delay={i * 80}
            />
          ))}
        </ul>
      </section>

      {/* Dense routing area */}
      <section className="border-t px-6 py-14" style={{ borderColor: LINE, background: "#FBFBFA" }}>
        <div className="mx-auto max-w-6xl">
          <ListHeader title="Help by product" href="/help" label="Help Center" />
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
            {CLUSTERS.flatMap((c) => c.products).map((slug) => {
              const p = PRODUCTS[slug];
              const c = getCluster(p.cluster);
              return (
                <Link
                  key={slug}
                  to={`/help?product=${slug}`}
                  className="hub-card flex items-center gap-2.5 rounded-xl bg-white px-3 py-2.5 text-[14px] font-medium"
                  style={{ border: `1px solid ${LINE}`, color: INK }}
                >
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg" style={{ background: c.soft, color: c.accent }}>
                    <p.Icon size={15} />
                  </span>
                  <span className="truncate">{p.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <div>
              <ListHeader title="Latest from the blog" href="/blog" label="All posts" />
              <ul className="divide-y divide-[#E1E1E1] rounded-2xl bg-white px-4" style={{ border: `1px solid ${LINE}` }}>
                {latestPosts.map((p) => (
                  <li key={p.slug} className="py-3.5">
                    <p className="text-[12.5px]" style={{ color: MUTED }}>
                      {formatDate(p.date)} · {p.category}
                    </p>
                    <p className="mt-0.5 text-[15px] font-medium leading-snug" style={{ color: INK }}>{p.title}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ListHeader title="Featured guides" href="/guides" label="All guides" />
              <ul className="divide-y divide-[#E1E1E1] rounded-2xl bg-white px-4" style={{ border: `1px solid ${LINE}` }}>
                {featuredGuides.map((g) => (
                  <li key={g.slug} className="py-3.5">
                    <p className="text-[12.5px]" style={{ color: MUTED }}>
                      {g.topic} · {g.minutes} min
                    </p>
                    <p className="mt-0.5 text-[15px] font-medium leading-snug" style={{ color: INK }}>{g.title}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesHub;

import React, { useEffect, useMemo } from "react";
import { BLOG_CATEGORIES, BLOG_POSTS } from "../../data/resources";
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
  formatDate,
  matches,
  useHubFilters,
} from "../../components/resources/HubKit";

const CategoryTag = ({ children }) => (
  <span className="text-[12px] font-semibold uppercase tracking-[0.1em]" style={{ color: PRIMARY }}>
    {children}
  </span>
);

const Meta = ({ post }) => (
  <span className="text-[13px] tabular-nums" style={{ color: MUTED }}>
    {formatDate(post.date)} · {post.minutes} min read
  </span>
);

const Featured = ({ post }) => (
  <article
    className="hub-in relative overflow-hidden rounded-2xl p-7 sm:p-10"
    style={{ border: `1px solid ${LINE}`, background: "#FBFBFA" }}
  >
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full"
      style={{ background: `radial-gradient(circle, ${PRIMARY}1A, transparent 70%)` }}
    />
    <div className="relative max-w-2xl">
      <p className="flex items-center gap-3">
        <span className="rounded-full px-2.5 py-0.5 text-[12px] font-semibold text-white" style={{ background: INK }}>
          Latest
        </span>
        <CategoryTag>{post.category}</CategoryTag>
      </p>
      <h2 className="mt-4 text-[24px] font-medium leading-snug tracking-[-0.02em] sm:text-[28px]" style={{ color: INK }}>
        {post.title}
      </h2>
      <p className="mt-3 text-[16px] leading-relaxed" style={{ color: MUTED }}>
        {post.excerpt}
      </p>
      <p className="mt-5">
        <Meta post={post} />
      </p>
    </div>
  </article>
);

const PostRow = ({ post, query }) => (
  <li className="hub-row grid gap-1.5 rounded-xl px-3 py-5 md:grid-cols-[140px_1fr_auto] md:gap-6 md:px-4">
    <span className="text-[13px] tabular-nums md:pt-0.5" style={{ color: MUTED }}>
      {formatDate(post.date)}
    </span>
    <div className="min-w-0">
      <CategoryTag>{post.category}</CategoryTag>
      <h3 className="mt-1 text-[17px] font-medium leading-snug" style={{ color: INK }}>
        <Highlight text={post.title} query={query} />
      </h3>
      <p className="mt-1 text-[14.5px] leading-relaxed" style={{ color: MUTED }}>
        <Highlight text={post.excerpt} query={query} />
      </p>
    </div>
    <span className="text-[13px] tabular-nums md:pt-0.5" style={{ color: MUTED }}>
      {post.minutes} min
    </span>
  </li>
);

const Blog = () => {
  const { query, setQuery, filter, setFilter, reset } = useHubFilters("category");

  useEffect(() => {
    document.title = "Blog | Talent Meet";
  }, []);

  const posts = useMemo(
    () =>
      [...BLOG_POSTS]
        .sort((a, b) => b.date.localeCompare(a.date))
        .filter((p) => (!filter || p.category === filter) && matches(query, p.title, p.excerpt, p.category)),
    [query, filter],
  );

  const browsing = !query && !filter;
  const [featured, ...rest] = posts;
  const list = browsing ? rest : posts;

  const options = [
    { value: "", label: "All", count: BLOG_POSTS.length },
    ...BLOG_CATEGORIES.map((c) => ({
      value: c,
      label: c,
      count: BLOG_POSTS.filter((p) => p.category === c).length,
    })),
  ];

  return (
    <div className="hub-page bg-white">
      <style>{HUB_CSS}</style>
      <HubHeader
        current="blog"
        title="Blog"
        description="Company and product updates, plus commentary on hiring and work."
      />

      <div className="mx-auto max-w-6xl px-6 pb-24 pt-8">
        <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
          <SearchBar value={query} onChange={setQuery} placeholder="Search the blog" resultCount={posts.length} />
          <FilterPills label="Categories" options={options} value={filter} onChange={setFilter} />
        </div>

        <div className="mt-8">
          {posts.length === 0 ? (
            <EmptyState query={query} onReset={reset} />
          ) : (
            <>
              {browsing && featured && <Featured post={featured} />}
              {!browsing && (
                <p className="mb-2 px-3 text-[13px] md:px-4" style={{ color: MUTED }}>
                  {posts.length} {posts.length === 1 ? "post" : "posts"}
                </p>
              )}
              <ul className={`divide-y divide-[#E1E1E1] ${browsing ? "mt-6" : ""}`}>
                {list.map((p) => (
                  <PostRow key={p.slug} post={p} query={query} />
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;

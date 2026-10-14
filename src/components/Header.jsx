import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CLUSTERS, PRODUCTS, getCluster, productHref } from "../data/products";
import { SOLUTIONS, SOLUTION_SLUGS, solutionHref } from "../data/solutions";
import { RESOURCE_SECTIONS } from "../data/resources";

const MenuIcon = ({ d }) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={d} />
  </svg>
);

const COMPANY_LINKS = [
  {
    href: "/about",
    label: "About",
    description: "Why Talent Meet exists",
    Icon: () => <MenuIcon d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13v.01M12 11v5" />,
  },
  {
    href: "/careers",
    label: "Careers",
    description: "Open roles and working here",
    Icon: () => <MenuIcon d="M3.5 8.5h17v11h-17v-11ZM9 8.5V6.5a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 6.5v2" />,
  },
  {
    href: "/contact",
    label: "Contact",
    description: "Press, partnerships and support",
    Icon: () => <MenuIcon d="M3.5 6h17v12h-17V6Zm0 0 8.5 6.5L20.5 6" />,
  },
];

const SALES_HREF = "/contact-sales";
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

const Chevron = ({ open }) => (
  <svg
    viewBox="0 0 12 12"
    width="11"
    height="11"
    fill="none"
    aria-hidden="true"
    style={{
      transform: open ? "rotate(180deg)" : "none",
      transition: `transform 300ms ${EASE}`,
    }}
  >
    <path
      d="m3 4.5 3 3 3-3"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Arrow = () => (
  <svg
    className="hd-arrow"
    viewBox="0 0 16 16"
    width="13"
    height="13"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M3 8h9.5M8.5 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ------------------------------------------------------------------ */
/* Product item — shared by desktop mega menu and mobile menu          */
/* ------------------------------------------------------------------ */

const ProductItem = ({ slug, cluster, current, compact = false }) => {
  const p = PRODUCTS[slug];
  return (
    <Link
      to={productHref(slug)}
      aria-current={current ? "page" : undefined}
      className={`hd-item group flex gap-3 rounded-xl p-2.5 ${compact ? "items-center" : "items-start"}`}
      style={{ background: current ? cluster.soft : undefined }}
    >
      <span
        className="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] transition-colors duration-200"
        style={{
          background: current ? cluster.accent : cluster.soft,
          color: current ? "#FFFFFF" : cluster.accent,
        }}
      >
        <p.Icon size={18} />
      </span>
      <span className="min-w-0">
        <span className="flex items-center gap-1 text-[14px] font-semibold text-neutral-900">
          {p.name}
          <span
            className="hd-item-arrow"
            style={{ color: cluster.accent }}
            aria-hidden="true"
          >
            <Arrow />
          </span>
        </span>
        {!compact && (
          <span className="mt-0.5 block text-[12.5px] leading-snug text-neutral-500">
            {p.category}
          </span>
        )}
      </span>
    </Link>
  );
};

/* ------------------------------------------------------------------ */
/* Desktop mega menu                                                   */
/* ------------------------------------------------------------------ */

const MegaMenu = ({ open, currentSlug, onEnter, onLeave }) => (
  <div
    id="product-menu"
    onMouseEnter={onEnter}
    onMouseLeave={onLeave}
    className="absolute left-0 right-0 top-full hidden pt-3 md:block"
    style={{
      pointerEvents: open ? "auto" : "none",
      visibility: open ? "visible" : "hidden",
    }}
  >
    <div
      className="mx-auto max-w-5xl overflow-hidden rounded-[28px] border border-white/60 bg-white/95 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)] backdrop-blur-xl backdrop-saturate-150"
      style={{
        opacity: open ? 1 : 0,
        transform: open ? "translateY(0) scale(1)" : "translateY(-8px) scale(0.985)",
        transformOrigin: "top center",
        transition: `opacity 220ms ease, transform 320ms ${EASE}`,
      }}
    >
      <div className="grid grid-cols-4 gap-2 p-4">
        {CLUSTERS.map((cluster, ci) => (
          <div
            key={cluster.id}
            className="hd-col rounded-2xl p-2"
            style={{ transitionDelay: open ? `${ci * 40}ms` : "0ms" }}
            data-open={open}
          >
            <p
              className="mb-1 flex items-center gap-2 px-2.5 pb-1 pt-1 text-[11px] font-semibold uppercase tracking-[0.14em]"
              style={{ color: cluster.accent }}
            >
              <cluster.TabIcon size={15} />
              {cluster.name}
            </p>
            <div className="space-y-0.5">
              {cluster.products.map((slug) => (
                <ProductItem
                  key={slug}
                  slug={slug}
                  cluster={cluster}
                  current={slug === currentSlug}
                />
              ))}
            </div>
            {cluster.products.length === 1 && (
              <p className="mt-3 px-2.5 text-[12.5px] italic leading-snug text-neutral-500">
                {cluster.description}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between gap-4 border-t border-neutral-200/80 bg-neutral-50/80 px-7 py-4">
        <p className="text-[13.5px] text-neutral-600">
          <span className="font-semibold text-neutral-900">
            One company. Ten tools.
          </span>{" "}
          Built to work alone, or work together.
        </p>
        <div className="flex items-center gap-5">
          <Link
            to="/#products"
            className="hd-link inline-flex items-center gap-1.5 text-[13.5px] font-medium text-neutral-700"
          >
            Compare products
            <Arrow />
          </Link>
          <a
            href={SALES_HREF}
            className="hd-btn inline-flex items-center gap-1.5 rounded-full bg-neutral-900 px-4 py-2 text-[13px] font-semibold text-white"
          >
            Talk to Sales
            <Arrow />
          </a>
        </div>
      </div>
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/* Desktop solutions menu                                              */
/* ------------------------------------------------------------------ */

const SolutionItem = ({ slug, current }) => {
  const s = SOLUTIONS[slug];
  return (
    <Link
      to={solutionHref(slug)}
      aria-current={current ? "page" : undefined}
      className="hd-item group flex items-start gap-3.5 rounded-2xl p-3.5"
      style={{ background: current ? "rgba(3,3,2,0.05)" : undefined }}
    >
      <span className="hd-sol-icon grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-neutral-100 text-neutral-900">
        <s.Icon size={20} />
      </span>
      <span className="min-w-0">
        <span className="flex items-center gap-1 text-[14.5px] font-semibold text-neutral-900">
          For {s.audience}
          <span className="hd-item-arrow text-neutral-900" aria-hidden="true">
            <Arrow />
          </span>
        </span>
        <span className="mt-2 flex flex-wrap gap-1.5">
          {s.products.map((ps) => {
            const p = PRODUCTS[ps];
            const c = getCluster(p.cluster);
            return (
              <span
                key={ps}
                className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11.5px] font-medium"
                style={{ background: c.soft, color: c.accent }}
              >
                <p.Icon size={12} />
                {p.name}
              </span>
            );
          })}
        </span>
      </span>
    </Link>
  );
};

const SolutionsMenu = ({ open, currentSlug, onEnter, onLeave }) => (
  <div
    id="solutions-menu"
    onMouseEnter={onEnter}
    onMouseLeave={onLeave}
    className="absolute left-0 right-0 top-full hidden pt-3 md:block"
    style={{
      pointerEvents: open ? "auto" : "none",
      visibility: open ? "visible" : "hidden",
    }}
  >
    <div
      className="mx-auto max-w-3xl overflow-hidden rounded-[28px] border border-white/60 bg-white/95 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)] backdrop-blur-xl backdrop-saturate-150"
      style={{
        opacity: open ? 1 : 0,
        transform: open ? "translateY(0) scale(1)" : "translateY(-8px) scale(0.985)",
        transformOrigin: "top center",
        transition: `opacity 220ms ease, transform 320ms ${EASE}`,
      }}
    >
      <div className="grid grid-cols-2 gap-1 p-3">
        {SOLUTION_SLUGS.map((slug, i) => (
          <div
            key={slug}
            className="hd-col"
            data-open={open}
            style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
          >
            <SolutionItem slug={slug} current={slug === currentSlug} />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between gap-4 border-t border-neutral-200/80 bg-neutral-50/80 px-7 py-4">
        <p className="text-[13.5px] text-neutral-600">
          <span className="font-semibold text-neutral-900">Not sure which fits?</span>{" "}
          We&rsquo;ll scope it with you.
        </p>
        <a
          href={SALES_HREF}
          className="hd-btn inline-flex items-center gap-1.5 rounded-full bg-neutral-900 px-4 py-2 text-[13px] font-semibold text-white"
        >
          Talk to Sales
          <Arrow />
        </a>
      </div>
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/* Desktop resources menu                                              */
/* ------------------------------------------------------------------ */

const ResourcesMenu = ({ open, currentPath, onEnter, onLeave }) => (
  <div
    id="resources-menu"
    onMouseEnter={onEnter}
    onMouseLeave={onLeave}
    className="absolute left-0 right-0 top-full hidden pt-3 md:block"
    style={{
      pointerEvents: open ? "auto" : "none",
      visibility: open ? "visible" : "hidden",
    }}
  >
    <div
      className="mx-auto max-w-3xl overflow-hidden rounded-[28px] border border-white/60 bg-white/95 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)] backdrop-blur-xl backdrop-saturate-150"
      style={{
        opacity: open ? 1 : 0,
        transform: open ? "translateY(0) scale(1)" : "translateY(-8px) scale(0.985)",
        transformOrigin: "top center",
        transition: `opacity 220ms ease, transform 320ms ${EASE}`,
      }}
    >
      <div className="grid grid-cols-3 gap-1 p-3">
        {RESOURCE_SECTIONS.map((s, i) => {
          const current = currentPath === s.href;
          return (
            <div
              key={s.slug}
              className="hd-col"
              data-open={open}
              style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
            >
              <Link
                to={s.href}
                aria-current={current ? "page" : undefined}
                className="hd-item group flex h-full flex-col gap-3 rounded-2xl p-4"
                style={{ background: current ? "rgba(3,3,2,0.05)" : undefined }}
              >
                <span className="hd-sol-icon grid h-10 w-10 place-items-center rounded-xl bg-neutral-100 text-neutral-900">
                  <s.Icon size={20} />
                </span>
                <span>
                  <span className="flex items-center gap-1 text-[14.5px] font-semibold text-neutral-900">
                    {s.name}
                    <span className="hd-item-arrow text-neutral-900" aria-hidden="true">
                      <Arrow />
                    </span>
                  </span>
                  <span className="mt-1 block text-[12.5px] leading-snug text-neutral-500">
                    {s.description}
                  </span>
                </span>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-between gap-4 border-t border-neutral-200/80 bg-neutral-50/80 px-7 py-4">
        <p className="text-[13.5px] text-neutral-600">
          <span className="font-semibold text-neutral-900">Looking for something specific?</span>{" "}
          Search everything in one place.
        </p>
        <Link
          to="/resources"
          className="hd-btn inline-flex items-center gap-1.5 rounded-full bg-neutral-900 px-4 py-2 text-[13px] font-semibold text-white"
        >
          All resources
          <Arrow />
        </Link>
      </div>
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/* Desktop company menu                                                */
/* ------------------------------------------------------------------ */

const CompanyMenu = ({ open, currentPath, onEnter, onLeave }) => (
  <div
    id="company-menu"
    onMouseEnter={onEnter}
    onMouseLeave={onLeave}
    className="absolute left-0 right-0 top-full hidden pt-3 md:block"
    style={{
      pointerEvents: open ? "auto" : "none",
      visibility: open ? "visible" : "hidden",
    }}
  >
    <div
      className="mx-auto max-w-sm overflow-hidden rounded-[24px] border border-white/60 bg-white/95 p-2 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)] backdrop-blur-xl backdrop-saturate-150"
      style={{
        opacity: open ? 1 : 0,
        transform: open ? "translateY(0) scale(1)" : "translateY(-8px) scale(0.985)",
        transformOrigin: "top center",
        transition: `opacity 220ms ease, transform 320ms ${EASE}`,
      }}
    >
      {COMPANY_LINKS.map((l, i) => {
        const current = currentPath === l.href;
        return (
          <div
            key={l.href}
            className="hd-col"
            data-open={open}
            style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
          >
            <Link
              to={l.href}
              aria-current={current ? "page" : undefined}
              className="hd-item group flex items-center gap-3 rounded-2xl p-3"
              style={{ background: current ? "rgba(3,3,2,0.05)" : undefined }}
            >
              <span className="hd-sol-icon grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-neutral-100 text-neutral-900">
                <l.Icon />
              </span>
              <span>
                <span className="flex items-center gap-1 text-[14.5px] font-semibold text-neutral-900">
                  {l.label}
                  <span className="hd-item-arrow text-neutral-900" aria-hidden="true">
                    <Arrow />
                  </span>
                </span>
                <span className="block text-[12.5px] text-neutral-500">{l.description}</span>
              </span>
            </Link>
          </div>
        );
      })}
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/* Mobile menu                                                         */
/* ------------------------------------------------------------------ */

const MobileMenu = ({ open, currentSlug, currentSolution, currentPath }) => {
  const [productsOpen, setProductsOpen] = useState(true);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <div
      id="mobile-menu"
      className="absolute left-0 right-0 top-full px-4 pt-2 md:hidden"
      style={{
        pointerEvents: open ? "auto" : "none",
        visibility: open ? "visible" : "hidden",
      }}
    >
      <div
        data-lenis-prevent
        className="max-h-[calc(100dvh-96px)] overflow-y-auto overscroll-contain rounded-3xl border border-white/60 bg-white/95 p-3 shadow-[0_24px_48px_-16px_rgba(0,0,0,0.25)] backdrop-blur-xl"
        style={{
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0)" : "translateY(-8px)",
          transition: `opacity 200ms ease, transform 300ms ${EASE}`,
        }}
      >
        <button
          type="button"
          onClick={() => setProductsOpen((v) => !v)}
          aria-expanded={productsOpen}
          className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-[16px] font-semibold text-neutral-900"
        >
          Product
          <Chevron open={productsOpen} />
        </button>

        <div
          className="grid transition-[grid-template-rows] duration-300"
          style={{ gridTemplateRows: productsOpen ? "1fr" : "0fr" }}
        >
          <div className="overflow-hidden">
            <div className="space-y-3 px-1 pb-2">
              {CLUSTERS.map((cluster) => (
                <div key={cluster.id}>
                  <p
                    className="px-2.5 pb-1 text-[10.5px] font-semibold uppercase tracking-[0.14em]"
                    style={{ color: cluster.accent }}
                  >
                    {cluster.name}
                  </p>
                  <div className="grid grid-cols-1 gap-0.5 min-[440px]:grid-cols-2">
                    {cluster.products.map((slug) => (
                      <ProductItem
                        key={slug}
                        slug={slug}
                        cluster={cluster}
                        current={slug === currentSlug}
                        compact
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setSolutionsOpen((v) => !v)}
          aria-expanded={solutionsOpen}
          className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-[16px] font-semibold text-neutral-900"
        >
          Solutions
          <Chevron open={solutionsOpen} />
        </button>

        <div
          className="grid transition-[grid-template-rows] duration-300"
          style={{ gridTemplateRows: solutionsOpen ? "1fr" : "0fr" }}
        >
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 gap-0.5 px-1 pb-2 min-[440px]:grid-cols-2">
              {SOLUTION_SLUGS.map((slug) => {
                const s = SOLUTIONS[slug];
                const current = slug === currentSolution;
                return (
                  <Link
                    key={slug}
                    to={solutionHref(slug)}
                    aria-current={current ? "page" : undefined}
                    className="hd-item flex items-center gap-3 rounded-xl p-2.5 text-[14px] font-semibold text-neutral-900"
                    style={{ background: current ? "rgba(3,3,2,0.05)" : undefined }}
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] bg-neutral-100">
                      <s.Icon size={18} />
                    </span>
                    For {s.audience}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setResourcesOpen((v) => !v)}
          aria-expanded={resourcesOpen}
          className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-[16px] font-semibold text-neutral-900"
        >
          Resources
          <Chevron open={resourcesOpen} />
        </button>

        <div
          className="grid transition-[grid-template-rows] duration-300"
          style={{ gridTemplateRows: resourcesOpen ? "1fr" : "0fr" }}
        >
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 gap-0.5 px-1 pb-2">
              {RESOURCE_SECTIONS.map((s) => {
                const current = s.href === currentPath;
                return (
                  <Link
                    key={s.slug}
                    to={s.href}
                    aria-current={current ? "page" : undefined}
                    className="hd-item flex items-center gap-3 rounded-xl p-2.5 text-[14px] font-semibold text-neutral-900"
                    style={{ background: current ? "rgba(3,3,2,0.05)" : undefined }}
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] bg-neutral-100">
                      <s.Icon size={18} />
                    </span>
                    {s.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="my-2 h-px bg-neutral-200/80" />

        <nav className="flex flex-col">
          <p className="px-3 pb-1 pt-3 text-[16px] font-semibold text-neutral-900">Company</p>
          <div className="grid grid-cols-3 gap-1 px-1">
            {COMPANY_LINKS.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                aria-current={currentPath === l.href ? "page" : undefined}
                className="hd-item flex flex-col items-center gap-1.5 rounded-xl p-2.5 text-[13.5px] font-medium text-neutral-900"
                style={{ background: currentPath === l.href ? "rgba(3,3,2,0.05)" : undefined }}
              >
                <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-neutral-100">
                  <l.Icon />
                </span>
                {l.label}
              </Link>
            ))}
          </div>
        </nav>

        <div className="mt-2 grid grid-cols-2 gap-2 p-1">
          <a
            href="#login"
            className="rounded-full border border-neutral-900/90 py-3 text-center text-[15px] font-medium text-neutral-900"
          >
            Log in
          </a>
          <a
            href={SALES_HREF}
            className="rounded-full bg-neutral-900 py-3 text-center text-[15px] font-semibold text-white"
          >
            Talk to Sales
          </a>
        </div>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Header                                                              */
/* ------------------------------------------------------------------ */

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null); // "product" | "solutions" | null
  const productOpen = openMenu === "product";
  const solutionsOpen = openMenu === "solutions";
  const resourcesOpen = openMenu === "resources";
  const companyOpen = openMenu === "company";
  const closeTimer = useRef(null);
  const headerRef = useRef(null);
  const location = useLocation();

  const [, section, pageSlug] = location.pathname.split("/");
  const currentSlug = section === "products" ? pageSlug : null;
  const currentSolution = section === "solutions" ? pageSlug : null;
  const inResources = ["resources", "blog", "help", "guides"].includes(section);
  const inCompany = ["about", "careers", "contact"].includes(section);

  // Close menus on navigation.
  const routeKey = location.pathname + location.hash;
  const [prevRouteKey, setPrevRouteKey] = useState(routeKey);
  if (prevRouteKey !== routeKey) {
    setPrevRouteKey(routeKey);
    setIsMenuOpen(false);
    setOpenMenu(null);
  }

  // Close on Escape or outside click.
  useEffect(() => {
    if (!isMenuOpen && !openMenu) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        setOpenMenu(null);
      }
    };
    const onClick = (e) => {
      if (!headerRef.current?.contains(e.target)) {
        setIsMenuOpen(false);
        setOpenMenu(null);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [isMenuOpen, openMenu]);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  const openDropdown = (name) => {
    clearTimeout(closeTimer.current);
    setOpenMenu(name);
  };
  const closeDropdownSoon = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  };
  const toggleDropdown = (name) =>
    setOpenMenu((v) => (v === name ? null : name));

  return (
    <header
      ref={headerRef}
      className="fixed left-0 top-0 z-50 w-full font-open-sans px-4 py-3 sm:px-6 md:py-12"
    >
      {/* Pill + desktop dropdowns share one box, so menus sit flush under the pill */}
      <div className="relative z-10 mx-auto max-w-5xl">
      <div className="relative flex items-center justify-between gap-3 rounded-full border border-white/30 bg-linear-to-b from-primary-bg/50 to-white py-2 pl-4 pr-2 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-md backdrop-saturate-150 sm:px-6">
        <Link to="/" className="flex shrink-0 items-center gap-2" aria-label="Talent Meet home">
          <img
            src="/telant.png"
            alt="Talent Meet"
            className="h-10 w-20 rounded-md object-cover"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          <button
            type="button"
            aria-expanded={productOpen}
            aria-controls="product-menu"
            onClick={(e) => (e.detail === 0 ? toggleDropdown("product") : openDropdown("product"))}
            onMouseEnter={() => openDropdown("product")}
            onMouseLeave={closeDropdownSoon}
            className="hd-nav inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[15px] font-medium text-neutral-800"
            data-active={productOpen || !!currentSlug}
          >
            Product
            <Chevron open={productOpen} />
          </button>
          <button
            type="button"
            aria-expanded={solutionsOpen}
            aria-controls="solutions-menu"
            onClick={(e) => (e.detail === 0 ? toggleDropdown("solutions") : openDropdown("solutions"))}
            onMouseEnter={() => openDropdown("solutions")}
            onMouseLeave={closeDropdownSoon}
            className="hd-nav inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[15px] font-medium text-neutral-800"
            data-active={solutionsOpen || !!currentSolution}
          >
            Solutions
            <Chevron open={solutionsOpen} />
          </button>
          <button
            type="button"
            aria-expanded={resourcesOpen}
            aria-controls="resources-menu"
            onClick={(e) => (e.detail === 0 ? toggleDropdown("resources") : openDropdown("resources"))}
            onMouseEnter={() => openDropdown("resources")}
            onMouseLeave={closeDropdownSoon}
            className="hd-nav inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[15px] font-medium text-neutral-800"
            data-active={resourcesOpen || inResources}
          >
            Resources
            <Chevron open={resourcesOpen} />
          </button>
          <button
            type="button"
            aria-expanded={companyOpen}
            aria-controls="company-menu"
            onClick={(e) => (e.detail === 0 ? toggleDropdown("company") : openDropdown("company"))}
            onMouseEnter={() => openDropdown("company")}
            onMouseLeave={closeDropdownSoon}
            className="hd-nav inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[15px] font-medium text-neutral-800"
            data-active={companyOpen || inCompany}
          >
            Company
            <Chevron open={companyOpen} />
          </button>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={SALES_HREF}
            className="hd-btn hidden rounded-full bg-neutral-900/90 px-5 py-2.5 text-[15px] font-semibold text-white backdrop-blur-sm min-[400px]:inline-flex"
          >
            Talk to Sales
          </a>

          <a
            href="#login"
            className="hidden rounded-full border border-neutral-900/90 px-5 py-2.5 font-medium text-neutral-800 backdrop-blur-sm transition-colors hover:bg-neutral-900 hover:text-white md:inline-flex"
          >
            Log in
          </a>

          {/* Hamburger — mobile */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((v) => !v)}
            className="relative grid h-11 w-11 place-items-center rounded-full hover:bg-neutral-900/5 md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className="absolute block h-0.5 w-5 rounded bg-neutral-800"
              style={{
                transform: isMenuOpen ? "rotate(45deg)" : "translateY(-6px)",
                transition: `transform 300ms ${EASE}`,
              }}
            />
            <span
              className="absolute block h-0.5 w-5 rounded bg-neutral-800"
              style={{ opacity: isMenuOpen ? 0 : 1, transition: "opacity 200ms ease" }}
            />
            <span
              className="absolute block h-0.5 w-5 rounded bg-neutral-800"
              style={{
                transform: isMenuOpen ? "rotate(-45deg)" : "translateY(6px)",
                transition: `transform 300ms ${EASE}`,
              }}
            />
          </button>
        </div>
      </div>

      <MegaMenu
        open={productOpen}
        currentSlug={currentSlug}
        onEnter={() => openDropdown("product")}
        onLeave={closeDropdownSoon}
      />
      <SolutionsMenu
        open={solutionsOpen}
        currentSlug={currentSolution}
        onEnter={() => openDropdown("solutions")}
        onLeave={closeDropdownSoon}
      />
      <ResourcesMenu
        open={resourcesOpen}
        currentPath={location.pathname}
        onEnter={() => openDropdown("resources")}
        onLeave={closeDropdownSoon}
      />
      <CompanyMenu
        open={companyOpen}
        currentPath={location.pathname}
        onEnter={() => openDropdown("company")}
        onLeave={closeDropdownSoon}
      />
      </div>

      <MobileMenu
        open={isMenuOpen}
        currentSlug={currentSlug}
        currentSolution={currentSolution}
        currentPath={location.pathname}
      />

      <style>{`
        .hd-nav { transition: background-color 200ms ease, color 200ms ease; }
        .hd-nav:hover, .hd-nav[data-active="true"] { background: rgba(3,3,2,0.06); color: #0a0a0a; }

        .hd-btn { transition: transform 250ms ${EASE}, box-shadow 250ms ease; }
        .hd-btn:hover { transform: translateY(-1px) scale(1.03); box-shadow: 0 10px 20px -10px rgba(0,0,0,0.45); }
        .hd-btn:active { transform: scale(0.98); }

        .hd-item { transition: background-color 200ms ease; }
        .hd-item:hover { background: rgba(3,3,2,0.04); }
        .hd-item-arrow { display: inline-flex; opacity: 0; transform: translateX(-4px); transition: opacity 200ms ease, transform 250ms ${EASE}; }
        .hd-item:hover .hd-item-arrow, .hd-item:focus-visible .hd-item-arrow { opacity: 1; transform: none; }

        .hd-sol-icon { transition: background-color 200ms ease, color 200ms ease; }
        .hd-item:hover .hd-sol-icon { background: #030302; color: #fff; }
        .hd-col { opacity: 0; transform: translateY(6px); transition: opacity 300ms ease, transform 400ms ${EASE}; }
        .hd-col[data-open="true"] { opacity: 1; transform: none; }

        .hd-arrow { transition: transform 250ms ${EASE}; }
        .hd-link:hover .hd-arrow, .hd-btn:hover .hd-arrow { transform: translateX(3px); }
        .hd-link:hover { color: #0a0a0a; }

        header a:focus-visible, header button:focus-visible { outline: 2px solid #030302; outline-offset: 2px; }

        @media (prefers-reduced-motion: reduce) {
          header *, header *::before { transition: none !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;

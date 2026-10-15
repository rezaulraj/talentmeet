import React from "react";
import { Link } from "react-router-dom";
import { CLUSTERS, PRODUCTS, productHref } from "../data/products";

/* Product columns come straight from the shared catalogue. */
const PRODUCT_CLUSTERS = CLUSTERS.map((cluster) => ({
  title: cluster.name,
  items: cluster.products.map((slug) => ({
    label: PRODUCTS[slug].name,
    href: productHref(slug),
  })),
}));

const CONTACT_EMAIL = "ceo@talentmeet.eu";

const OFFICES = [
  {
    label: "London",
    lines: ["7 Kirkdale House", "London, E11 1HP"],
  },
  {
    label: "Dhaka",
    lines: [
      "Plot-34, H M Plaza, 4th Floor",
      "Sector-03, Uttara",
      "Dhaka-1229, Bangladesh",
    ],
  },
];

const LINK_GROUPS = [
  {
    title: "Solutions",
    items: [
      { label: "For HR teams", href: "/solutions/hr" },
      { label: "For Sales teams", href: "/solutions/sales" },
      { label: "For Recruiters", href: "/solutions/recruiters" },
      { label: "For Remote-first companies", href: "/solutions/remote" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Blog", href: "/blog" },
      { label: "Help Center", href: "/help" },
      { label: "Guides", href: "/guides" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  // {
  //   title: "Legal",
  //   items: [
  //     { label: "Terms", href: "/terms" },
  //     { label: "Privacy", href: "/privacy" },
  //     { label: "Security", href: "/security" },
  //   ],
  // },
];

const FooterLink = ({ href, children }) => (
  <li>
    <Link to={href} className="footer-link text-[14px] text-neutral-600">
      {children}
    </Link>
  </li>
);

const ColumnHeading = ({ children }) => (
  <h3 className="mb-4 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-neutral-900">
    {children}
  </h3>
);

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden bg-[#f6faf7] px-4 pb-8 pt-16 sm:px-6 sm:pt-20">
      {/* soft green wash, echoing the CTA banner curves */}
      <svg
        className="pointer-events-none absolute -top-10 left-0 h-48 w-full"
        viewBox="0 0 1000 200"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M-40 70 C 180 10, 340 140, 540 80 S 820 0, 1040 100"
          stroke="#cfe9d8"
          strokeWidth="30"
          strokeLinecap="round"
          opacity="0.7"
        />
      </svg>

      <div className="relative mx-auto max-w-6xl">
        {/* Top: brand + products */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <a href="/" className="inline-flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#7fc79a] shadow-[0_6px_14px_rgba(30,60,40,0.18)]">
                <span className="font-serif text-[18px] italic leading-none text-neutral-900">
                  T
                </span>
              </span>
              <span className="font-serif text-[22px] italic text-neutral-900">
                Talent Meet
              </span>
            </a>
            <p className="mt-4 max-w-xs text-[14.5px] leading-relaxed text-neutral-600">
              One suite for hiring, growing and connecting with the people who
              move your company forward.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="footer-link mt-4 block text-[14px] text-neutral-600"
            >
              {CONTACT_EMAIL}
            </a>
            <div className="mt-5 space-y-4">
              {OFFICES.map((office) => (
                <address
                  key={office.label}
                  className="text-[14px] not-italic leading-relaxed text-neutral-600"
                >
                  <span className="mb-0.5 block text-[11.5px] font-semibold uppercase tracking-[0.14em] text-neutral-900">
                    {office.label}
                  </span>
                  {office.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <ColumnHeading>Products</ColumnHeading>
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 rounded-[22px] border border-[#dcefe3] bg-white/70 p-6 shadow-[0_10px_30px_rgba(30,60,40,0.06)] backdrop-blur-sm md:grid-cols-4 sm:p-7">
              {PRODUCT_CLUSTERS.map((cluster) => (
                <div key={cluster.title}>
                  <p className="mb-3 flex items-center gap-2 text-[13px] font-semibold text-[#3f8a5c]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#7fc79a]" />
                    {cluster.title}
                  </p>
                  <ul className="space-y-2.5">
                    {cluster.items.map((item) => (
                      <FooterLink key={item.label} href={item.href}>
                        {item.label}
                      </FooterLink>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle: link groups */}
        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-neutral-200/80 pt-12 sm:grid-cols-3">
          {LINK_GROUPS.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <ColumnHeading>{group.title}</ColumnHeading>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <FooterLink key={item.label} href={item.href}>
                    {item.label}
                  </FooterLink>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-neutral-200/80 pt-6 sm:flex-row sm:items-center">
          <p className="text-[13px] text-neutral-500">
            &copy; {year} Talent Meet. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-[13px] text-neutral-500">
            <a href="#" className="footer-link">
              Terms
            </a>
            <a href="/#" className="footer-link">
              Privacy
            </a>
            <a href="/#" className="footer-link">
              Security
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .footer-link {
          position: relative;
          display: inline-block;
          transition: color 0.2s ease, transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .footer-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -2px;
          height: 1.5px;
          width: 100%;
          background: #7fc79a;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .footer-link:hover {
          color: #171717;
          transform: translateX(2px);
        }
        .footer-link:hover::after { transform: scaleX(1); }
        .footer-link:focus-visible,
        .footer-cta:focus-visible {
          outline: 2px solid #3f8a5c;
          outline-offset: 3px;
          border-radius: 4px;
        }

        .footer-cta {
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease;
        }
        .footer-cta:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 12px 22px rgba(0,0,0,0.18);
        }
        .footer-arrow { transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1); }
        .footer-cta:hover .footer-arrow { transform: translateX(3px); }

        @media (prefers-reduced-motion: reduce) {
          .footer-link, .footer-link::after, .footer-cta, .footer-arrow {
            transition: none !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;

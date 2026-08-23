import React, { useState } from "react";

const NAV_LINKS = [
  "Product",
  "Imagine",
  "Community",
  "Pricing",
  "Learn",
  "Download",
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full font-open-sans px-6 py-3 md:py-12">
      <div className="mx-auto flex max-w-5xl items-center justify-between rounded-full bg-linear-to-b from-primary-bg/50 to-white px-6 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-md backdrop-saturate-150 border border-white/30">
        <a href="/" className="flex items-center gap-2">
          <img
            src="/telant.png"
            alt="Logo"
            className="h-10 w-20 rounded-md object-cover"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="text-[15px] font-medium text-neutral-800 transition-colors hover:text-neutral-950"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-neutral-900/90 px-5 py-2.5 text-[15px] font-semibold text-white transition-transform hover:scale-[1.03] active:scale-[0.98] backdrop-blur-sm"
          >
            Contact
          </a>

          {/* Hamburger menu button - mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <span className="block h-0.5 w-6 bg-neutral-800 transition-all"></span>
            <span className="block h-0.5 w-6 bg-neutral-800 transition-all"></span>
            <span className="block h-0.5 w-6 bg-neutral-800 transition-all"></span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-full mt-4 rounded-2xl bg-white/20 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-md backdrop-saturate-150 border border-white/30 md:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-[15px] font-medium text-neutral-800 transition-colors hover:text-neutral-950"
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

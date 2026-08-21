import React from "react";

const Testimonial = ({
  name = "Tom",
  quote = "Publishing directly from Craft just feels natural — it's where I write, so it makes sense to share from there too.",
  avatarSeed = "Tom",
}) => {
  const avatarSrc = `https://randomuser.me/api/portraits/men/46.jpg`;

  return (
    <section className="quote-wrap w-full px-6 py-16 sm:px-10">
      <div className="mx-auto flex max-w-4xl items-start gap-6 sm:gap-10">
        <div className="quote-meta flex shrink-0 items-center gap-3 pt-2">
          <img
            src={avatarSrc}
            alt={name}
            className="h-11 w-11 rounded-full object-cover shadow-sm sm:h-12 sm:w-12"
            loading="lazy"
          />
          <span className="whitespace-nowrap text-[15px] text-neutral-800">
            {name}
          </span>
          <span className="hidden h-px w-16 bg-neutral-300 sm:block md:w-24" />
        </div>

        {/* quote */}
        <blockquote className="quote-text font-serif text-[22px] italic leading-[1.45] text-neutral-900 sm:text-[26px] md:text-[28px]">
          &ldquo;{quote}&rdquo;
        </blockquote>
      </div>

      <style>{`
        .quote-meta, .quote-text {
          opacity: 0;
          animation: quote-fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .quote-meta { animation-delay: 0.05s; }
        .quote-text { animation-delay: 0.2s; }

        @keyframes quote-fade-up {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .quote-meta, .quote-text {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonial;

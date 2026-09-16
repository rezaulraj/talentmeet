const ICONS = [
  {
    label: "Templates",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6 2.5h9.5L20 7v14.5H6V2.5Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M15.2 2.5V7H20"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M9 12.5h7M9 15.8h7M9 9.3h3.5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Whiteboards",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M18.5 3.2c1.3 0 2.3 1.1 2.3 2.4 0 3.6-2.9 6.7-6.6 6.9-.5 2.6-2.8 4.6-5.5 4.6-3.1 0-5.6-2.5-5.6-5.6 0-2.7 1.9-4.9 4.4-5.5.2-3.6 3.2-6.5 6.9-6.5 1.3 0 2.4 1 2.4 2.3 0 .5-.2 1-.4 1.4h1.5c.2-.2.4-.4.6-.4Z"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
        <path
          d="M9.6 12.8c.9-.9 1.4-2.1 1.4-3.4"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Write with AI",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 3.5l1.4 3.3 3.3 1.4-3.3 1.4-1.4 3.3-1.4-3.3-3.3-1.4 3.3-1.4L12 3.5Z"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
        <path
          d="M18.5 13.2l.7 1.6 1.6.7-1.6.7-.7 1.6-.7-1.6-1.6-.7 1.6-.7.7-1.6Z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <path
          d="M6 15.5l.6 1.3 1.3.6-1.3.6-.6 1.3-.6-1.3-1.3-.6 1.3-.6.6-1.3Z"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Publish & Share",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 3.5c3.6 0 6.5 2.9 6.5 6.5 0 2.7-1.7 5-4 5.9"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M12 3.5c-3.6 0-6.5 2.9-6.5 6.5 0 2.2 1.1 4.2 2.8 5.3"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M8.3 15.3 12 19l3.7-3.7"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 10v9"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];
 
const WriteSection = () => {
  return (
    <section className="w-full px-4 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-gradient-to-br from-[#8fa2e8] to-[#a6b6ee] px-6 py-14 sm:rounded-[36px] sm:px-12 sm:py-20 md:px-16">
        <div className="grid items-center gap-16 md:grid-cols-2 md:gap-10">
          <div className="write-visual relative h-[300px] sm:h-[360px] md:h-[450px]">
            <div className="absolute left-0 top-0 w-[78%] h-[78%] max-w-[340px] rounded-xl bg-white shadow-xl float-back">
              <div className="flex items-center gap-2 border-b border-neutral-100 px-4 py-3">
                <span className="h-2 w-2 rounded-full bg-neutral-300" />
                <span className="h-2 w-2 rounded-full bg-neutral-300" />
                <span className="h-2 w-2 rounded-full bg-neutral-300" />
                <div className="ml-3 flex items-center gap-2">
                  <span className="grid h-6 w-6 place-items-center rounded-md bg-neutral-100 text-[12px]">
                    ⌂
                  </span>
                  <span className="rounded-md bg-neutral-100 px-3 py-1 text-[12px] font-medium text-neutral-700">
                    Todo
                  </span>
                </div>
              </div>
              <div className="space-y-3 px-4 py-4">
                {[
                  ["Perfect Bread Recipe", "Cooking"],
                  ["Feed Starter", "Inbox"],
                  ["Book Tickets to Barcelona", "Travel"],
                ].map(([label, tag]) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 text-[13px] text-neutral-700"
                  >
                    <span className="h-3.5 w-3.5 shrink-0 rounded-sm border border-neutral-300" />
                    <span>{label}</span>
                    <span className="ml-auto rounded bg-neutral-100 px-2 py-0.5 text-[11px] text-neutral-500">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-0 right-0 w-[82%] h-[92%] max-w-[380px] rounded-xl bg-[#fbe9d8] shadow-2xl float-front">
              <div className="flex items-center gap-2 border-b border-black/5 px-4 py-3">
                <span className="h-2 w-2 rounded-full bg-black/10" />
                <span className="h-2 w-2 rounded-full bg-black/10" />
                <span className="h-2 w-2 rounded-full bg-black/10" />
                <div className="ml-3 flex items-center gap-2">
                  <span className="grid h-6 w-6 place-items-center rounded-md bg-white/60 text-[12px]">
                    ⌂
                  </span>
                  <span className="rounded-md bg-white/60 px-3 py-1 text-[12px] font-medium text-neutral-700">
                    My Sourdough Bread
                  </span>
                </div>
              </div>
              <div className="px-5 py-4">
                <h3 className="font-serif text-[19px] font-semibold text-neutral-900">
                  My Sourdough Bread
                </h3>
                <div className="mt-3 space-y-2">
                  {[
                    "500g Bread Flour",
                    "350g Lukewarm Water",
                    "100g Active Sourdough Starter",
                    "10g Of Salt",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-[13px] text-neutral-700"
                    >
                      <span className="h-3.5 w-3.5 shrink-0 rounded-sm border border-neutral-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-[12.5px] leading-relaxed text-neutral-600">
                  Start in the morning. Grab a big bowl and toss in 500g of
                  bread flour (or all-purpose, don&rsquo;t overthink it) with
                  350g of lukewarm water. Stir it into a shaggy mess.
                  You&rsquo;re not kneading, just mixing.
                </p>
              </div>
            </div>
          </div>

          <div className="write-copy">
            <span className="text-[13px] font-semibold uppercase tracking-[0.12em] text-neutral-800/70">
              Write
            </span>
            <h2 className="mt-3 font-serif text-[32px] leading-[1.15] text-neutral-900 sm:text-[40px] md:text-[42px]">
              From first thought
              <br />
              to final form
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-neutral-800/80 sm:text-[16px]">
              In Telent Meet, your writing moves with you — capture ideas instantly
              across all your devices, then refine them when you&rsquo;re ready.
              Transform quick iPhone notes into documents you&rsquo;re proud to
              share.
            </p>

            <button className="mt-7 rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-neutral-900 shadow-md transition-transform hover:scale-[1.03] active:scale-[0.98]">
              Learn more
            </button>

            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6">
              {ICONS.map((item) => (
                <div key={item.label} className="flex items-center gap-2.5">
                  <span className="h-5 w-5 shrink-0 text-neutral-900">
                    {item.svg}
                  </span>
                  <span className="text-[14.5px] font-medium leading-tight text-neutral-900">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .float-back {
          animation: float-back-anim 6s ease-in-out infinite;
        }
        .float-front {
          animation: float-front-anim 6s ease-in-out infinite;
          animation-delay: 0.4s;
        }
        @keyframes float-back-anim {
          0%, 100% { transform: translateY(0) rotate(-1deg); }
          50% { transform: translateY(-10px) rotate(-1.5deg); }
        }
        @keyframes float-front-anim {
          0%, 100% { transform: translateY(0) rotate(1deg); }
          50% { transform: translateY(-8px) rotate(0.5deg); }
        }

        .write-visual, .write-copy {
          opacity: 0;
          animation: fade-up 0.8s ease-out forwards;
        }
        .write-visual { animation-delay: 0.05s; }
        .write-copy { animation-delay: 0.2s; }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .float-back, .float-front, .write-visual, .write-copy {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default WriteSection;

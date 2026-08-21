import React from "react";
import cloudImage from "../assets/cloud.avif";
import card1 from "../assets/card1.avif";
import card2 from "../assets/card2.avif";
import card3 from "../assets/card3.avif";

const OrganizeSection = () => {
  return (
    <section className="relative w-full overflow-hidden px-4 py-16 sm:px-6 sm:py-24">
      <img
        src={cloudImage}
        alt=""
        aria-hidden="true"
        className="organize-cloud pointer-events-none absolute right-0 top-6 w-[220px] opacity-90 sm:w-[320px] md:w-[380px]"
      />

      <div className="organize-heading relative mx-auto max-w-2xl text-center">
        <span className="text-[13px] font-semibold uppercase tracking-[0.14em] text-neutral-500">
          Organize
        </span>
        <h2 className="mt-4 font-serif text-[34px] leading-[1.2] text-neutral-900 sm:text-[42px] md:text-[46px]">
          Structure That Adapts
          <br />
          to Your Thinking
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-neutral-600 sm:text-[16px]">
          Choose any approach that fits your mind: organize with spaces, folders and tags, or build
          rich databases with collections
        </p>
      </div>

      <div className="relative mx-auto mt-14 grid max-w-6xl gap-10 sm:mt-16 md:grid-cols-3">
        <div
          className="organize-card group relative overflow-hidden rounded-[24px] p-7"
          style={{ backgroundImage: `url(${card1})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <h3 className="text-center font-serif text-[22px] text-neutral-900">Spaces</h3>
          <p className="mx-auto mt-2 max-w-[220px] text-center text-[13.5px] leading-snug text-neutral-700">
            Switch between work mode and personal mode
          </p>

          <div className="card-visual relative mt-8 h-[190px]">
            <div className="absolute left-0 top-4 w-[78%] rounded-xl bg-white p-3.5 shadow-lg">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-[12.5px] font-semibold text-neutral-800">
                  <span className="grid h-4 w-4 place-items-center rounded bg-neutral-800 text-[9px] text-white">
                    👤
                  </span>
                  Personal Space
                </span>
                <span className="text-neutral-400">⌄</span>
              </div>
              <p className="mt-2.5 text-[11px] font-semibold text-neutral-400">Starred</p>
              <div className="mt-1 space-y-1 text-[11.5px] text-neutral-600">
                <p>📄 Wo...</p>
                <p>📄 Lily...</p>
              </div>
            </div>

            <div className="absolute bottom-0 right-0 w-[70%] rounded-xl bg-white p-3.5 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-[12.5px] font-semibold text-neutral-800">
                  <span className="grid h-4 w-4 place-items-center rounded bg-blue-500 text-[9px] text-white">
                    💼
                  </span>
                  Hard Work Space
                </span>
                <span className="text-neutral-400">⌄</span>
              </div>
              <p className="mt-2.5 text-[11px] font-semibold text-neutral-400">Starred</p>
              <p className="mt-1 text-[11.5px] text-neutral-600">🏷 Brand Identity</p>
              <p className="mt-2 text-[11px] font-semibold text-neutral-400">Folders</p>
              <p className="mt-1 text-[11.5px] text-neutral-600">📁 …</p>
              <p className="mt-1.5 text-[11px] font-semibold text-neutral-400">Tags</p>
            </div>
          </div>
        </div>

        <div
          className="organize-card group relative overflow-hidden rounded-[24px] p-7"
          style={{ backgroundImage: `url(${card2})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <h3 className="text-center font-serif text-[22px] text-neutral-900">Folders &amp; Tags</h3>
          <p className="mx-auto mt-2 max-w-[220px] text-center text-[13.5px] leading-snug text-neutral-700">
            Classic structure for clear hierarchies
          </p>

          <div className="card-visual relative mt-8 h-[190px]">
            <div className="absolute left-0 top-6 w-[62%] rounded-xl bg-white p-3.5 shadow-lg">
              <p className="text-[12.5px] font-semibold text-neutral-800">Folders</p>
              <div className="mt-2.5 space-y-1.5 text-[11.5px] text-neutral-600">
                <p>📄 Notes</p>
                <p>💡 Idea</p>
                <p>🧠 Thinking</p>
                <p>✈️ Travel</p>
              </div>
            </div>

            <div className="absolute bottom-2 right-0 w-[58%] rounded-xl bg-white p-3.5 shadow-xl">
              <p className="text-[12.5px] font-semibold text-neutral-800">Tags</p>
              <div className="mt-2.5 space-y-1.5 text-[11.5px] text-neutral-600">
                <p># idea</p>
                <p># design</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="organize-card group relative overflow-hidden rounded-[24px] p-7"
          style={{ backgroundImage: `url(${card3})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <h3 className="text-center font-serif text-[22px] text-neutral-900">Collections</h3>
          <p className="mx-auto mt-2 max-w-[220px] text-center text-[13.5px] leading-snug text-neutral-700">
            For structured tracking and rich data
          </p>

          <div className="card-visual relative mt-8 h-[190px] overflow-hidden rounded-xl bg-white shadow-lg">
            <div className="grid grid-cols-[16px_1fr_60px] gap-2 border-b border-neutral-100 px-3 py-2 text-[10.5px] font-semibold text-neutral-400">
              <span>#</span>
              <span>Aa Title</span>
              <span>≡ Author</span>
            </div>
            <div className="px-3 py-1.5 text-[10.5px] font-semibold text-orange-500">▾ Essentials</div>
            {[
              ["1", "Ada's Algorithm", "James Essinger"],
              ["2", "Dream Machine", "Mitchell Waldrop"],
              ["3", "User Friendly", "John Harwood"],
              ["4", "Broad Band", "Claire L. Evans"],
              ["5", "Bringing Design t...", "Terry Winograd"],
            ].map(([n, title, author]) => (
              <div
                key={n}
                className="grid grid-cols-[16px_1fr_60px] gap-2 px-3 py-1.5 text-[11px] text-neutral-700"
              >
                <span className="text-neutral-400">{n}</span>
                <span className="truncate font-medium">📄 {title}</span>
                <span className="truncate text-neutral-500">{author}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .organize-cloud {
          opacity: 0;
          animation: organize-cloud-in 1.1s ease-out forwards, organize-cloud-drift 10s ease-in-out infinite 1.1s;
        }
        @keyframes organize-cloud-in {
          from { opacity: 0; transform: translateY(-12px); }
          to { opacity: 0.9; transform: translateY(0); }
        }
        @keyframes organize-cloud-drift {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .organize-heading {
          opacity: 0;
          animation: organize-fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .organize-card {
          opacity: 0;
          animation: organize-fade-up 0.75s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease;
        }
        .organize-card:nth-of-type(1) { animation-delay: 0.15s; }
        .organize-card:nth-of-type(2) { animation-delay: 0.28s; }
        .organize-card:nth-of-type(3) { animation-delay: 0.41s; }
        .organize-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 40px rgba(30, 30, 60, 0.15);
        }

        @keyframes organize-fade-up {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .card-visual > div {
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .organize-card:hover .card-visual > div:first-child {
          transform: translateY(-3px) rotate(-1deg);
        }
        .organize-card:hover .card-visual > div:last-child {
          transform: translateY(-4px) rotate(1deg);
        }

        @media (prefers-reduced-motion: reduce) {
          .organize-cloud, .organize-heading, .organize-card, .card-visual > div {
            animation: none !important;
            transition: none !important;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default OrganizeSection;
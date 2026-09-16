import React, { useEffect, useState } from "react";

const useNow = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60 * 1000);
    return () => clearInterval(id);
  }, []);

  return now;
};

const PlanSection = () => {
  const now = useNow();
  const dayNum = now.toLocaleDateString(undefined, { day: "2-digit" });
  const month = now.toLocaleDateString(undefined, { month: "short" });
  const weekday = now.toLocaleDateString(undefined, { weekday: "long" });

  return (
    <section className="w-full px-4 py-10 sm:px-6 sm:py-16">
      <div className="plan-card mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-[#f2d878] p-6 sm:rounded-[36px] sm:p-10 md:p-12">
        <div className="grid gap-8 md:grid-cols-[280px_1fr] md:gap-10">
          <div className="plan-copy">
            <span className="text-[13px] font-semibold uppercase tracking-[0.14em] text-neutral-900/70">
              Plan
            </span>
            <h2 className="mt-4 font-serif text-[32px] leading-[1.2] text-neutral-900 sm:text-[36px]">
              Planning that doesn&rsquo;t feel like work
            </h2>
            <p className="mt-4 max-w-xs text-[14.5px] leading-relaxed text-neutral-900/75">
              Keep your ideas and tasks together where they belong. Telent Meet embeds
              tasks directly in your documents, keeping your best thinking
              connected to what needs to get done.
            </p>
            <button className="plan-btn mt-7 rounded-full bg-white/90 px-6 py-3 text-[14px] font-semibold text-neutral-900 shadow-sm">
              Learn more
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            <div className="plan-tile flex flex-col rounded-2xl bg-[#fbf8ee] p-5">
              <div className="flex items-center gap-2 text-[14px] font-semibold text-neutral-900">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="15.5"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                  <path d="M3 9.5h18" stroke="currentColor" strokeWidth="1.4" />
                  <path
                    d="M8 2.5v4M16 2.5v4"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
                Calendar
              </div>
              <div className="mt-5 flex-1 rounded-xl bg-[#d9e8fb] px-4 py-4">
                <p className="text-[13px] text-neutral-500">
                  {dayNum} {month}
                </p>
                <p className="mt-1 text-[19px] font-semibold text-[#3b6fd1]">
                  Today
                </p>
                <p className="text-[13px] text-neutral-500">{weekday}</p>
              </div>
            </div>

            <div className="plan-tile flex flex-col rounded-2xl bg-[#fbf8ee] p-5">
              <div className="flex items-center gap-2 text-[14px] font-semibold text-neutral-900">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="9.3"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                  <path
                    d="M8.2 12.3 10.8 15l5-6"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Tasks
              </div>
              <div className="mt-5 flex-1 space-y-2.5 text-[13px]">
                <div className="flex items-center gap-2 text-neutral-400 line-through">
                  <span className="grid h-4 w-4 shrink-0 place-items-center rounded-[4px] bg-blue-500 text-[10px] text-white">
                    ✓
                  </span>
                  Pack bags
                </div>
                <div className="flex items-center gap-2 text-neutral-700">
                  <span className="h-4 w-4 shrink-0 rounded-[4px] border border-neutral-300" />
                  Print tickets
                  <span className="ml-auto rounded bg-neutral-100 px-1.5 py-0.5 text-[10.5px] text-neutral-500">
                    Inbox
                  </span>
                  <span className="rounded bg-blue-500 px-1.5 py-0.5 text-[10.5px] text-white">
                    Today
                  </span>
                </div>
                <div className="flex items-center gap-2 text-neutral-700">
                  <span className="h-4 w-4 shrink-0 rounded-[4px] border border-neutral-300" />
                  Set vacation auto-reply email
                  <span className="ml-auto rounded bg-neutral-100 px-1.5 py-0.5 text-[10.5px] text-neutral-500">
                    Inbox
                  </span>
                </div>
              </div>
              <button className="add-task-btn mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-[#eaf1fd] px-3.5 py-1.5 text-[12.5px] font-semibold text-[#3b6fd1]">
                <span className="grid h-3.5 w-3.5 place-items-center rounded-[3px] border border-[#3b6fd1] text-[9px]">
                  ✓
                </span>
                Add Task
              </button>
            </div>

            <div className="plan-tile flex flex-col rounded-2xl bg-[#fbf8ee] p-5">
              <div className="flex items-center gap-2 text-[14px] font-semibold text-neutral-900">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                  <path
                    d="M6 2.5h9.5L20 7v14.5H6V2.5Z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 12.5h7M9 15.8h7"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
                Journal
              </div>
              <div className="mt-5 flex-1 rounded-xl bg-white px-4 py-4 shadow-sm">
                <p className="text-[14px] font-semibold text-neutral-900">
                  Today
                </p>
                <div className="mt-2 flex items-center gap-2 rounded-md bg-neutral-50 px-2 py-1.5 text-[11.5px] text-neutral-500">
                  <span>12:30 – 13:00 · Zoom with Lena</span>
                </div>
                <p className="mt-1 text-[10.5px] text-neutral-400">
                  Attendees · Lena · Organizer Anton
                </p>
                <p className="mt-3 text-[12px] leading-relaxed text-neutral-500">
                  This note isn&rsquo;t urgent. It&rsquo;s observation. Its job
                  is to hold fragments of the day.
                </p>
              </div>
            </div>

            <div className="plan-tile flex flex-col rounded-2xl bg-[#fbf8ee] p-5">
              <div className="flex items-center gap-2 text-[14px] font-semibold text-neutral-900">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                  <circle
                    cx="12"
                    cy="12.5"
                    r="8"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                  <path
                    d="M12 8.5V12.5L14.8 14.3"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M9 2.5h6"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
                Reminders
              </div>
              <div className="mt-5 flex-1 space-y-3 text-[13px]">
                <div className="flex gap-2">
                  <span className="font-semibold text-[#c9973a]">12:30</span>
                  <span className="text-neutral-700">
                    Zoom with Lena: final trip details
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="font-semibold text-[#c9973a]">17:10</span>
                  <span className="text-neutral-700">
                    Check this Telent Meet page
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .plan-copy {
          opacity: 0;
          animation: plan-fade-up 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.05s;
        }
        .plan-tile {
          opacity: 0;
          animation: plan-fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
        }
        .plan-tile:nth-of-type(1) { animation-delay: 0.15s; }
        .plan-tile:nth-of-type(2) { animation-delay: 0.25s; }
        .plan-tile:nth-of-type(3) { animation-delay: 0.35s; }
        .plan-tile:nth-of-type(4) { animation-delay: 0.45s; }
        .plan-tile:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 30px rgba(60, 50, 10, 0.12);
        }

        @keyframes plan-fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .plan-btn, .add-task-btn {
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease;
        }
        .plan-btn:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 10px 22px rgba(60, 50, 10, 0.18);
        }
        .add-task-btn:hover {
          transform: scale(1.03);
        }

        @media (prefers-reduced-motion: reduce) {
          .plan-copy, .plan-tile, .plan-btn, .add-task-btn {
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

export default PlanSection;

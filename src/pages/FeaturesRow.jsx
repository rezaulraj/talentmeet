import React from "react";

const ICONS = [
  {
    label: "Docs",
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
    label: "Tasks",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    ),
  },
  {
    label: "Calendar",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <circle cx="8.2" cy="14" r="0.9" fill="currentColor" />
        <circle cx="12" cy="14" r="0.9" fill="currentColor" />
        <circle cx="15.8" cy="14" r="0.9" fill="currentColor" />
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
    label: "Daily Notes",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15.4 3.6 19 7.2 8 18.2H4.4v-3.6L15.4 3.6Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M13.2 5.8l3.6 3.6"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M4 21h16"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const FeaturesRow = () => {
  return (
    <section className="w-full px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-serif text-[28px] leading-[1.3] text-neutral-900 sm:text-[36px] md:text-[42px]">
          Telent Meet isn&rsquo;t just for one thing,
          <br />
          it&rsquo;s for <span className="italic">your</span> things.
        </h2>

        <div className="mt-14 grid grid-cols-2 gap-y-10 sm:mt-16 sm:flex sm:flex-wrap sm:items-start sm:justify-center sm:gap-x-16">
          {ICONS.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-3">
              <span className="h-8 w-8 text-neutral-900">{item.svg}</span>
              <span className="text-[15px] font-medium text-neutral-900">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesRow;

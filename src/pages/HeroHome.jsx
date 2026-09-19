import React from "react";
import bgimage from "/herobg.jpeg";
import heroscreenshotdestop from "/hero-screenshot-desktop-full.avif";
import heroscreenshotmobile from "/hero-screenshot-mobile.avif";

const HeroHome = () => {
  return (
    <section className="w-full px-4 py-6 sm:px-6 sm:py-8">
      <div
        className="relative mx-auto container overflow-hidden rounded-[24px] sm:rounded-[32px]"
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 flex flex-col items-center px-6 pt-14 text-center sm:pt-20 md:pt-24">
          <h1 className="max-w-3xl text-[32px] font-serif leading-[1.15] text-neutral-900 sm:text-[44px] md:text-[56px]">
            One company. Ten tools. Every stage of work, covered.
          </h1>
          <p className="max-w-3xl mx-auto mt-10 text-neutral-900">
            Talent Meet is the parent platform behind ten connected products —
            for finding people, managing them, selling to your market, and
            keeping every conversation secure. Built to work alone, or work
            together.
          </p>
          <button className="mt-8 rounded-full bg-neutral-900 px-7 py-3.5 text-[15px] font-semibold text-white shadow-md transition-transform hover:scale-[1.03] active:scale-[0.98] sm:mt-10">
            Talk to Sales
          </button>
        </div>

        <div className="relative z-10 mt-10 hidden justify-center px-6 sm:mt-14 md:flex">
          <img
            src={heroscreenshotdestop}
            alt="Telent Meet app desktop preview"
            className="w-full max-w-5xl rounded-t-xl shadow-2xl"
          />
        </div>

        <div className="relative z-10 mt-8 flex justify-center px-6 md:hidden">
          <img
            src={heroscreenshotmobile}
            alt="Telent Meet app mobile preview"
            className="w-full max-w-xs rounded-t-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroHome;

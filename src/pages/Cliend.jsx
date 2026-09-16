import React from "react";
import cardb1 from "../assets/cardb1.avif";
import cardb2 from "../assets/cardb2.avif";
import cardb3 from "../assets/cardb3.avif";
import cardb4 from "../assets/cardb4.avif";
import cardb5 from "../assets/cardb5.avif";
import cardb6 from "../assets/cardb6.avif";
import cardb7 from "../assets/cardb7.avif";

import ch1 from "../assets/ch1.avif";
import ch2 from "../assets/ch2.avif";
import ch3 from "../assets/ch3.avif";
import ch4 from "../assets/ch4.avif";
import ch5 from "../assets/ch5.avif";
import ch6 from "../assets/ch6.avif";
import ch7 from "../assets/ch7.avif";

const people = [
  {
    name: "Aaron",
    role: "Writer and podcaster",
    used: "Show notes, book outlines, daily tasks",
    bg: cardb1,
    avatar: ch1,
  },
  {
    name: "Seoyoung",
    role: "Creator",
    used: "Creative ideas, plans, projects, scripts",
    bg: cardb2,
    avatar: ch2,
  },
  {
    name: "Gian",
    role: "Site manager",
    used: "Work reports, project boards, personal wiki",
    bg: cardb3,
    avatar: ch3,
  },
  {
    name: "Stephen",
    role: "Dog dad and dream chaser",
    used: "List of goals, progress tracker",
    bg: cardb4,
    avatar: ch4,
  },
  {
    name: "Maya",
    role: "Freelance designer",
    used: "Client briefs, mood boards, sprint notes",
    bg: cardb5,
    avatar: ch5,
  },
  {
    name: "Leo",
    role: "Founder and builder",
    used: "Roadmaps, meeting notes, launch plans",
    bg: cardb6,
    avatar: ch6,
  },
  {
    name: "Priya",
    role: "Teacher and note-taker",
    used: "Lesson plans, reading lists, grading notes",
    bg: cardb7,
    avatar: ch7,
  },
];

const Card = ({ person }) => (
  <div
    className="group relative mx-3 h-[340px] w-[220px] shrink-0 overflow-hidden rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] sm:h-[380px] sm:w-[260px]"
    style={{
      backgroundImage: `url(${person.bg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <img
      src={person.avatar}
      alt={person.name}
      className="absolute inset-0 h-full w-full mt-10 object-cover transition-transform duration-500 group-hover:scale-105"
      loading="lazy"
    />
  </div>
);

const Client = () => {
  const loop = [...people, ...people];

  return (
    <section className="w-full overflow-hidden py-20">
      <h2 className="mb-14 text-center font-serif text-[32px] text-neutral-900 sm:text-[44px] md:text-[52px]">
        How people use Telent Meet
      </h2>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#faf7f2]/50 to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#faf7f2]/50 to-transparent sm:w-32" />

        <div className="marquee-track flex w-max">
          {loop.map((person, i) => (
            <div
              key={`${person.name}-${i}`}
              className="flex flex-col items-center"
            >
              <Card person={person} />
              <div className="mt-4 max-w-[220px] text-center sm:max-w-[260px]">
                <p className="text-[13px] font-bold uppercase tracking-wide text-neutral-900">
                  {person.name}, {person.role}
                </p>
                <p className="mt-2 font-serif text-[15px] italic leading-snug text-neutral-800 sm:text-[16px]">
                  {person.used}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .marquee-track {
          animation: marquee-scroll 32s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Client;

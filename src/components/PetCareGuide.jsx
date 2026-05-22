"use client";

import React from "react";

import {
  MdPets,
} from "react-icons/md";

import {
  FaPaw,
  FaDog,
  FaCat,
} from "react-icons/fa";

const petCareTips = [
  {
    id: 1,
    icon: "🍎",
    title: "Balanced Nutrition",
    description:
      "Feed species-appropriate food in measured portions. Avoid harmful foods and maintain a healthy diet for your pet.",
  },
  {
    id: 2,
    icon: "🏃",
    title: "Daily Exercise",
    description:
      "Regular physical activity keeps your pet active, healthy, and mentally stimulated every single day.",
  },
  {
    id: 3,
    icon: "🏥",
    title: "Regular Vet Visits",
    description:
      "Schedule routine health checkups and vaccinations to keep your furry friend safe and healthy.",
  },
  {
    id: 4,
    icon: "💖",
    title: "Mental Stimulation",
    description:
      "Interactive toys, training sessions, and social time help pets stay happy and mentally sharp.",
  },
  {
    id: 5,
    icon: "🛁",
    title: "Proper Grooming",
    description:
      "Regular grooming and cleaning improve comfort, hygiene, and your pet’s overall well-being.",
  },
  {
    id: 6,
    icon: "🏠",
    title: "Safe Environment",
    description:
      "Create a clean and secure home environment where your pet feels protected and comfortable.",
  },
];

const PetCareGuide = () => {

  return (

    <section className="relative overflow-hidden bg-gradient-to-b from-[#fff7fb] via-[#ffffff] to-[#fdfdfd] py-24 px-5">

      {/* LIGHT ANIMAL BACKGROUND ANIMATION */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* PAW ICONS */}
        <FaPaw className="absolute top-10 left-10 text-pink-100 text-7xl animate-bounce" />

        <FaPaw className="absolute top-32 right-16 text-cyan-100 text-6xl animate-pulse" />

        <FaPaw className="absolute bottom-16 left-1/4 text-orange-100 text-8xl animate-ping opacity-40" />

        <FaPaw className="absolute bottom-10 right-10 text-rose-100 text-7xl animate-bounce" />

        {/* FLOATING DOG */}
        <FaDog className="absolute top-1/3 left-16 text-pink-200 text-8xl animate-pulse opacity-20" />

        {/* FLOATING CAT */}
        <FaCat className="absolute top-20 right-1/3 text-purple-200 text-7xl animate-bounce opacity-20" />

      </div>

      {/* BLUR EFFECTS */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-200 blur-3xl opacity-30 rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-200 blur-3xl opacity-30 rounded-full"></div>

      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto">

          {/* BADGE */}
          <div className="inline-flex items-center gap-2 bg-white border border-pink-200 text-pink-500 px-5 py-2 rounded-full shadow-md mb-6">

            <MdPets className="text-lg" />

            <span className="font-semibold">
              Pet Care Guide
            </span>

          </div>

          {/* TITLE */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-[#0f172a]">

            Expert{" "}

            <span className="bg-gradient-to-r from-pink-500 via-rose-400 to-cyan-500 bg-clip-text text-transparent">

              Pet Care Tips

            </span>

          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-600 text-xl leading-9 mt-8">

            Give your new companion the best life possible with these essential
            pet care guidelines.

          </p>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {petCareTips.map((tip) => (

            <div
              key={tip.id}
              className="bg-white/90 backdrop-blur-xl border border-pink-100 rounded-[30px] p-8 shadow-xl hover:-translate-y-3 hover:shadow-2xl transition-all duration-500"
            >

              {/* TOP */}
              <div className="flex items-start gap-5">

                {/* ICON */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-100 to-cyan-100 flex items-center justify-center text-3xl shadow-md shrink-0">

                  {tip.icon}

                </div>

                {/* CONTENT */}
                <div>

                  <h3 className="text-2xl font-bold text-[#0f172a] mb-4">

                    {tip.title}

                  </h3>

                  <p className="text-gray-600 leading-8 text-lg">

                    {tip.description}

                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default PetCareGuide;

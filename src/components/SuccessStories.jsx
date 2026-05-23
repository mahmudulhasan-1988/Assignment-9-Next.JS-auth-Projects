"use client";

import React from "react";

import {
  FaStar,
  FaPaw,
  FaDog,
  FaCat,
} from "react-icons/fa";

import {
  MdPets,
} from "react-icons/md";

const successStories = [
  {
    id: 1,
    icon: "🐕",
    quote:
      "Max was a shy rescue dog who’d been passed over dozens of times. Now he greets me at the door every day and is the heart of our family.",
    name: "Sarah & Max",
    breed: "Labrador Mix",
  },
  {
    id: 2,
    icon: "🐈",
    quote:
      "Whiskers came as a stray kitten. Now she sleeps on my pillow and purrs me to sleep. I can’t imagine life without her.",
    name: "John & Whiskers",
    breed: "Tabby Cat",
  },
  {
    id: 3,
    icon: "🦜",
    quote:
      "Our budgie Tweety learned to say ‘I love you’ within a week. He sings every morning and brightens our entire household!",
    name: "Emma & Tweety",
    breed: "Budgerigar",
  },
];

const SuccessStories = () => {

  return (

    <section className="relative overflow-hidden bg-gradient-to-b from-[#fff7fb] to-[#fdfdfd] dark:from-[#09142b] dark:to-[#0f172a] py-24 px-5 transition-all duration-500">

      {/* LIGHT ANIMAL BACKGROUND ANIMATION */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* PAW ICONS */}
        <FaPaw className="absolute top-10 left-10 text-pink-100 dark:text-pink-900 text-7xl animate-bounce" />

        <FaPaw className="absolute top-32 right-16 text-cyan-100 dark:text-cyan-900 text-6xl animate-pulse" />

        <FaPaw className="absolute bottom-16 left-1/4 text-orange-100 dark:text-orange-900 text-8xl animate-ping opacity-40" />

        <FaPaw className="absolute bottom-10 right-10 text-rose-100 dark:text-rose-900 text-7xl animate-bounce" />

        {/* FLOATING DOG */}
        <FaDog className="absolute top-1/3 left-16 text-pink-200 dark:text-pink-800 text-8xl animate-pulse opacity-20" />

        {/* FLOATING CAT */}
        <FaCat className="absolute top-20 right-1/3 text-purple-200 dark:text-purple-800 text-7xl animate-bounce opacity-20" />

      </div>

      {/* BLUR EFFECT */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-pink-200 dark:bg-pink-900 blur-3xl opacity-30 rounded-full"></div>

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-200 dark:bg-cyan-900 blur-3xl opacity-30 rounded-full"></div>

      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto relative z-10">

        {/* TOP CONTENT */}
        <div className="text-center max-w-4xl mx-auto">

          {/* BADGE */}
          <div className="inline-flex items-center gap-2 bg-white dark:bg-[#16233f] border border-pink-200 dark:border-[#22304f] text-pink-500 px-5 py-2 rounded-full mb-6 shadow-md">

            <MdPets className="text-lg" />

            <span className="font-semibold">
              Success Stories
            </span>

          </div>

          {/* TITLE */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-black dark:text-white">

            Happy Tails &{" "}

            <span className="bg-gradient-to-r from-pink-500 via-rose-400 to-cyan-500 bg-clip-text text-transparent">

              Happy Homes

            </span>

          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-600 dark:text-gray-300 text-xl leading-9 mt-8">

            Real stories from real families who found their perfect match
            through PetNest.

          </p>

        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {successStories.map((story) => (

            <div
              key={story.id}
              className="bg-white/90 dark:bg-[#16233f]/90 backdrop-blur-xl border border-pink-100 dark:border-[#22304f] rounded-[30px] p-8 shadow-xl hover:-translate-y-3 hover:shadow-2xl transition-all duration-500"
            >

              {/* TOP */}
              <div className="flex items-center justify-between mb-8">

                {/* ICON */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-100 to-cyan-100 flex items-center justify-center text-3xl shadow-md">

                  {story.icon}

                </div>

                {/* STARS */}
                <div className="flex items-center gap-1 text-yellow-400">

                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />

                </div>

              </div>

              {/* QUOTE */}
              <p className="text-gray-600 dark:text-gray-300 italic leading-9 text-lg">

                “{story.quote}”

              </p>

              {/* USER */}
              <div className="mt-10">

                <h3 className="text-3xl font-bold text-black dark:text-white">

                  {story.name}

                </h3>

                <p className="text-gray-500 dark:text-gray-400 mt-2 flex items-center gap-2">

                  🐾 {story.breed}

                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default SuccessStories;
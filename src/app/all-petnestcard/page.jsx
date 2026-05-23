"use client";

import { useEffect, useMemo, useState } from "react";

import AllPetNestCard from "@/components/AllPetCard";

import {
  FaPaw,
  FaDog,
  FaCat,
} from "react-icons/fa";

import {
  FiSearch,
  FiSliders,
} from "react-icons/fi";

const AllPetNestCardPage = () => {

  const [pets, setPets] = useState([]);

  const [search, setSearch] = useState("");

  const [species, setSpecies] = useState("");

  const [sortFee, setSortFee] = useState("default");

  // FETCH DATA
  useEffect(() => {

    fetch(`http://localhost:2080/addPetNestDetail`)
      .then((res) => res.json())
      .then((data) => setPets(data));

  }, []);

  // FILTER + SEARCH + SORT
  const filteredPets = useMemo(() => {

    let filtered = [...pets];

    // SEARCH BY NAME
    if (search) {

      filtered = filtered.filter((pet) =>
        pet.name.toLowerCase().includes(search.toLowerCase())
      );

    }

    // FILTER BY SPECIES
    if (species) {

      filtered = filtered.filter(
        (pet) => pet.species === species
      );

    }

    // SORT BY ADOPTION FEE
    if (sortFee === "low") {

      filtered.sort(
        (a, b) => a.adoptionFee - b.adoptionFee
      );

    }

    if (sortFee === "high") {

      filtered.sort(
        (a, b) => b.adoptionFee - a.adoptionFee
      );

    }

    return filtered;

  }, [pets, search, species, sortFee]);

  return (

    <div className="relative overflow-hidden min-h-screen bg-gradient-to-b from-[#fff7fb] via-[#ffffff] to-[#fdfdfd] dark:from-[#09142b] dark:via-[#0f172a] dark:to-[#111827] transition-all duration-300">

      {/* BACKGROUND ICONS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <FaPaw className="absolute top-10 left-10 text-pink-100 dark:text-pink-900 text-7xl animate-bounce" />

        <FaPaw className="absolute top-32 right-20 text-cyan-100 dark:text-cyan-900 text-6xl animate-pulse" />

        <FaPaw className="absolute bottom-16 left-1/4 text-orange-100 dark:text-orange-900 text-8xl animate-ping opacity-40" />

        <FaPaw className="absolute bottom-10 right-10 text-rose-100 dark:text-rose-900 text-7xl animate-bounce" />

        <FaDog className="absolute top-1/3 left-20 text-pink-200 dark:text-pink-800 text-8xl animate-pulse opacity-20" />

        <FaCat className="absolute top-20 right-1/3 text-purple-200 dark:text-purple-800 text-7xl animate-bounce opacity-20" />

      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 py-16">

        {/* BADGE */}
        <div className="inline-flex items-center gap-2 border border-pink-200 dark:border-pink-800 bg-pink-50 dark:bg-[#1e293b] px-4 py-2 rounded-full">

          <FaPaw className="text-pink-500 text-sm" />

          <span className="text-pink-500 font-semibold text-sm">
            All Available Pets
          </span>

        </div>

        {/* TITLE */}
        <h1 className="text-5xl md:text-6xl font-extrabold mt-3 leading-tight text-black dark:text-white">

          Browse{" "}

          <span className="bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
            All Pets
          </span>

        </h1>

        {/* SUBTITLE */}
        <p className="text-gray-500 dark:text-gray-300 text-xl">
          {filteredPets.length} pets available for adoption
        </p>

        {/* FILTER SECTION */}
        <div className="mt-5 bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-gray-700 rounded-[30px] p-8 shadow-xl transition-all duration-300">

          {/* TOP */}
          <div className="flex items-center gap-3 mb-3">

            <FiSliders className="text-pink-500 text-2xl" />

            <h2 className="text-2xl font-bold text-[#0f172a] dark:text-white">
              Filter & Search
            </h2>

          </div>

          {/* FILTER GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* SEARCH */}
            <div>

              <label className="block text-gray-600 dark:text-gray-300 font-semibold mb-3">
                Search by name
              </label>

              <div className="relative">

                <FiSearch className="absolute top-1/2 left-5 -translate-y-1/2 text-gray-400 text-lg" />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search pets..."
                  className="w-full border border-gray-200 dark:border-gray-700 bg-[#f8fafc] dark:bg-[#0f172a] text-black dark:text-white rounded-full py-4 pl-14 pr-5 outline-none focus:border-pink-400 transition-all duration-300"
                />

              </div>

            </div>

            {/* FILTER SPECIES */}
            <div>

              <label className="block text-gray-600 dark:text-gray-300 font-semibold mb-3">
                Filter by species
              </label>

              <select
                value={species}
                onChange={(e) => setSpecies(e.target.value)}
                className="w-full border border-gray-200 dark:border-gray-700 bg-[#f8fafc] dark:bg-[#0f172a] text-black dark:text-white rounded-full py-4 px-5 outline-none focus:border-pink-400 transition-all duration-300"
              >

                <option value="">
                  All Species
                </option>

                <option value="Dog">
                  Dog
                </option>

                <option value="Cat">
                  Cat
                </option>

                <option value="Rabbit">
                  Rabbit
                </option>

                <option value="Bird">
                  Bird
                </option>

              </select>

            </div>

            {/* SORT */}
            <div>

              <label className="block text-gray-600 dark:text-gray-300 font-semibold mb-3">
                Sort by fee
              </label>

              <select
                value={sortFee}
                onChange={(e) => setSortFee(e.target.value)}
                className="w-full border border-gray-200 dark:border-gray-700 bg-[#f8fafc] dark:bg-[#0f172a] text-black dark:text-white rounded-full py-4 px-5 outline-none focus:border-pink-400 transition-all duration-300"
              >

                <option value="default">
                  Default
                </option>

                <option value="low">
                  Low to High
                </option>

                <option value="high">
                  High to Low
                </option>

              </select>

            </div>

          </div>

        </div>

        {/* PET GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          {
            filteredPets.length > 0 ? (

              filteredPets.map((addPetNest) => (

                <AllPetNestCard
                  key={addPetNest._id}
                  addPetNest={addPetNest}
                />

              ))

            ) : (

              <div className="col-span-full bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-gray-700 rounded-3xl py-20 text-center shadow-lg">

                <h2 className="text-4xl font-bold text-gray-700 dark:text-white">
                  No Pets Found 🐾
                </h2>

                <p className="text-gray-500 dark:text-gray-300 mt-4 text-lg">
                  Try another search or filter option.
                </p>

              </div>

            )
          }

        </div>

      </div>

    </div>

  );
};

export default AllPetNestCardPage;
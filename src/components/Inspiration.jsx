"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";

import { FaPaw, FaDog, FaCat } from "react-icons/fa";

import Lenis from "@studio-freight/lenis";
import gsap from "gsap";

const Inspiration = () => {

  const sectionRef = useRef(null);

  useEffect(() => {

    // LENIS SMOOTH SCROLL
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // GSAP ANIMATION
    gsap.fromTo(
      sectionRef.current,
      {
        opacity: 0,
        y: 120,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power4.out",
      }
    );

    return () => {
      lenis.destroy();
    };

  }, []);

  return (

    <section
      ref={sectionRef}
      className="relative overflow-hidden py-24 
      bg-gradient-to-br 
      from-[#fffdfd] via-[#fff5f7] to-[#f0fdfa]
      dark:from-[#09142b] dark:via-[#0f172a] dark:to-[#111827]
      transition-all duration-500"
    >

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

      {/* SOFT GLOW EFFECTS */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-200/40 dark:bg-pink-900/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200/40 dark:bg-cyan-900/20 blur-3xl rounded-full"></div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="text-black dark:text-white transition-all duration-500">

            <span className="inline-block bg-pink-100 dark:bg-pink-900/30 border border-pink-200 dark:border-pink-800 text-pink-500 px-6 py-3 rounded-full text-sm font-semibold tracking-[3px] uppercase">
              Pet Adoption Inspiration
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mt-8 text-gray-900 dark:text-white">

              Find Your Perfect <br />

              <span className="text-[#ff4d88]">
                Companion
              </span>

            </h1>

            <p className="text-2xl text-pink-500 mt-6 font-medium">
              Adopt, Don&apos;t Shop
            </p>

            <p className="mt-8 text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-9 max-w-2xl">
              At FourPow, we believe every rescued pet deserves a loving
              forever home. Open your heart to unconditional love and
              experience the happiness that comes from adoption.
            </p>

            {/* BUTTON */}
            <div className="mt-10">

              <button className="bg-[#ff4d88] hover:bg-[#e63b73] transition-all duration-300 text-white px-10 py-5 rounded-full text-lg font-bold shadow-[0_10px_40px_rgba(255,77,136,0.3)]">

                Adopt a Pet Today

              </button>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">

            {/* GLOW */}
            <div className="absolute w-72 h-72 bg-pink-200 dark:bg-pink-900 rounded-full blur-3xl animate-pulse"></div>

            <Image
              src="/images/pet3.jpg"
              alt="Pet Inspiration"
              width={800}
              height={750}
              className="relative z-10 rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,0.15)] object-cover hover:scale-105 duration-500"
            />

          </div>

        </div>

        {/* WHY ADOPT */}
        <div className="mt-28 text-center">

          <p className="uppercase tracking-[5px] text-pink-500 font-semibold">
            Why People Choose Adoption
          </p>

          <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mt-4">
            Why Adopt?
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Discover how adopting a pet changes lives forever — both yours
            and theirs.
          </p>

        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {/* CARD 1 */}
          <div className="bg-white/80 dark:bg-[#111827]/80 backdrop-blur-xl border border-pink-100 dark:border-pink-900 p-8 rounded-3xl hover:-translate-y-3 transition-all duration-500 shadow-2xl">

            <h3 className="text-2xl font-bold text-pink-500 mb-5">
              Change a Life
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-8">
              Every adoption saves a rescued animal and gives them a second
              chance at a safe, happy, and loving future.
            </p>

          </div>

          {/* CARD 2 */}
          <div className="bg-white/80 dark:bg-[#111827]/80 backdrop-blur-xl border border-cyan-100 dark:border-cyan-900 p-8 rounded-3xl hover:-translate-y-3 transition-all duration-500 shadow-2xl">

            <h3 className="text-2xl font-bold text-pink-500 mb-5">
              Unconditional Love
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-8">
              Adopted pets build deep emotional bonds and bring endless joy,
              comfort, and companionship into your home.
            </p>

          </div>

          {/* CARD 3 */}
          <div className="bg-white/80 dark:bg-[#111827]/80 backdrop-blur-xl border border-rose-100 dark:border-rose-900 p-8 rounded-3xl hover:-translate-y-3 transition-all duration-500 shadow-2xl">

            <h3 className="text-2xl font-bold text-pink-500 mb-5">
              Endless Variety
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-8">
              Discover playful puppies, loyal dogs, calm cats, and many
              other wonderful companions waiting for a forever home.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Inspiration;
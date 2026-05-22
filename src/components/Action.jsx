"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { BiSolidDonateHeart } from "react-icons/bi";
import { FaPaw, FaDog, FaCat } from "react-icons/fa";

import Lenis from "@studio-freight/lenis";
import gsap from "gsap";

const Action = () => {

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

  }, []);

  return (

    <section
      ref={sectionRef}
      className="relative overflow-hidden py-24 bg-gradient-to-br from-[#fffdfd] via-[#fff5f7] to-[#fefce8]"
    >

      {/* LIGHT ANIMAL BACKGROUND ANIMATION */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* PAW ICONS */}
        <FaPaw className="absolute top-10 left-10 text-pink-100 text-7xl animate-bounce" />

        <FaPaw className="absolute top-40 right-20 text-orange-100 text-6xl animate-pulse" />

        <FaPaw className="absolute bottom-16 left-1/4 text-cyan-100 text-8xl animate-ping opacity-50" />

        <FaPaw className="absolute bottom-10 right-10 text-rose-100 text-7xl animate-bounce" />

        {/* FLOATING DOG */}
        <FaDog className="absolute top-1/2 left-12 text-pink-200 text-8xl animate-pulse opacity-20" />

        {/* FLOATING CAT */}
        <FaCat className="absolute top-20 right-1/3 text-purple-200 text-7xl animate-bounce opacity-20" />

      </div>

      {/* SOFT GLOW */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-300/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300/20 blur-3xl rounded-full"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <div className="relative flex justify-center">

            {/* Animated Circle */}
            <div className="absolute w-72 h-72 bg-pink-200 rounded-full blur-3xl animate-pulse"></div>

            <Image
              src="/images/adoptme.png"
              alt="Adopt Pet"
              width={500}
              height={450}
              className="relative z-10 rounded-3xl hover:scale-105 duration-500 drop-shadow-2xl"
            />

          </div>

          {/* RIGHT CONTENT */}
          <div className="text-gray-800">

            <p className="uppercase tracking-[6px] text-pink-500 font-semibold mb-4">
              Save Lives With Love
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">

              Save A Pet <br />

              <span className="text-[#ff4d88]">
                Donate Now
              </span>

            </h1>

            <p className="mt-8 text-lg md:text-xl text-gray-600 leading-9">
              Every rescued pet deserves a second chance at happiness.
              Your donation helps provide shelter, food, medical care,
              and loving homes for abandoned animals.
            </p>

            {/* BUTTON */}
            <div className="mt-10 flex flex-wrap gap-5">

              <button className="group bg-[#ff4d88] hover:bg-[#e63b73] transition-all duration-300 text-white px-10 py-5 rounded-full text-lg font-bold shadow-[0_10px_40px_rgba(255,77,136,0.3)] flex items-center gap-3">

                Donate Now

                <BiSolidDonateHeart className="w-7 h-7 group-hover:scale-125 transition-all duration-300" />

              </button>

            </div>

            {/* BOTTOM LINE */}
            <div className="mt-12 space-y-3">

              <hr className="border-pink-300" />

              <hr className="border-gray-200" />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Action;

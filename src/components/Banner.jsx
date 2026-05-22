"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { FaPaw, FaDog, FaCat } from "react-icons/fa";

const Banner = () => {

  // LENIS SMOOTH SCROLL
  useEffect(() => {

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };

  }, []);

  return (
    <section className="relative overflow-hidden bg-[#fff7f5]">

      {/* BACKGROUND ANIMATION */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <FaPaw className="absolute top-10 left-10 text-pink-200 text-7xl animate-bounce" />

        <FaPaw className="absolute top-32 right-20 text-orange-200 text-6xl animate-pulse" />

        <FaPaw className="absolute bottom-20 left-1/4 text-cyan-200 text-8xl animate-ping opacity-40" />

        <FaDog className="absolute top-1/3 left-20 text-pink-300 text-8xl animate-pulse opacity-20" />

        <FaCat className="absolute top-20 right-1/3 text-purple-200 text-7xl animate-bounce opacity-20" />

        <FaDog className="absolute bottom-10 right-10 text-rose-200 text-7xl animate-bounce opacity-20" />

      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <p className="uppercase tracking-[6px] text-[#ff6b6b] font-bold mb-5">
              Welcome To PET NEST
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-900">

              Find Your{" "}

              <span className="text-[#ff6b6b]">
                Perfect
              </span>{" "}

              Furry Friend

            </h1>

            <p className="mt-8 text-lg text-gray-600 leading-8 max-w-xl">

              PET NEST helps families adopt loving pets and give them a forever home full of happiness.

            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                href="/all-petnestcard"
                className="bg-[#ff6b6b] hover:bg-[#ff5252] text-white px-8 py-4 rounded-full font-semibold shadow-lg transition-all duration-300"
              >

                Adopt Now

              </Link>

              <Link
                href="/about"
                className="border-2 border-[#ff6b6b] text-[#ff6b6b] hover:bg-[#ff6b6b] hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >

                Learn More

              </Link>

            </div>

            {/* STATS */}
            <div className="flex flex-wrap gap-10 mt-14">

              <div>
                <h2 className="text-4xl font-bold text-[#ff6b6b]">500+</h2>
                <p className="text-gray-600 mt-2">Pets Adopted</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-[#ff6b6b]">120+</h2>
                <p className="text-gray-600 mt-2">Happy Families</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-[#ff6b6b]">50+</h2>
                <p className="text-gray-600 mt-2">Shelters</p>
              </div>

            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >

            <Image
              src="/images/pet-adopt.webp"
              alt="Pet Banner"
              width={400}
              height={300}
              className="w-full animate-pulse"
            />

            {/* FLOATING CARD 1 */}
            <div className="absolute top-10 left-0 bg-white shadow-2xl rounded-2xl px-5 py-4 animate-bounce">

              <p className="font-bold text-[#ff6b6b] text-xl">
                🐶 Safe Adoption
              </p>

              <p className="text-gray-500 text-sm">
                Verified pets only
              </p>

            </div>

            {/* FLOATING CARD 2 */}
            <div className="absolute bottom-10 right-0 bg-white shadow-2xl rounded-2xl px-5 py-4 animate-pulse">

              <p className="font-bold text-[#ff6b6b] text-xl">
                ❤️ Loving Pets
              </p>

              <p className="text-gray-500 text-sm">
                Ready for home
              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default Banner;

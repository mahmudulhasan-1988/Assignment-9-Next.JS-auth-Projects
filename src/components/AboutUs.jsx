"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import { BsFillBarChartFill } from "react-icons/bs";
import { BiAtom } from "react-icons/bi";
import { BsFillBriefcaseFill } from "react-icons/bs";

import { FaPaw, FaDog, FaCat } from "react-icons/fa";

import Lenis from "@studio-freight/lenis";
import gsap from "gsap";

const AboutUs = () => {

    const sectionRef = useRef(null);

    useEffect(() => {

        // LENIS
        const lenis = new Lenis({
            duration: 1.2,
            smoothWheel: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // GSAP
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
            className="relative overflow-hidden py-24 bg-gradient-to-br from-[#fffdfd] via-[#fff5f7] to-[#f0fdfa] dark:from-[#09142b] dark:via-[#0f172a] dark:to-[#111827] transition-all duration-500"
        >

            {/* LIGHT ANIMAL BACKGROUND ANIMATION */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">

                {/* PAW ICONS */}
                <FaPaw className="absolute top-10 left-10 text-pink-100 dark:text-pink-900 text-7xl animate-bounce" />

                <FaPaw className="absolute top-40 right-20 text-cyan-100 dark:text-cyan-900 text-6xl animate-pulse" />

                <FaPaw className="absolute bottom-20 left-1/4 text-orange-100 dark:text-orange-900 text-8xl animate-ping opacity-40" />

                <FaPaw className="absolute bottom-10 right-10 text-rose-100 dark:text-rose-900 text-7xl animate-bounce" />

                {/* FLOATING DOG */}
                <FaDog className="absolute top-1/3 left-20 text-pink-200 dark:text-pink-800 text-8xl animate-pulse opacity-20" />

                {/* FLOATING CAT */}
                <FaCat className="absolute top-24 right-1/3 text-purple-200 dark:text-purple-800 text-7xl animate-bounce opacity-20" />

            </div>

            {/* SOFT GLOW EFFECTS */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200/40 dark:bg-pink-900/20 blur-3xl rounded-full"></div>

            <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-200/40 dark:bg-cyan-900/20 blur-3xl rounded-full"></div>

            {/* CONTENT */}
            <div className="relative z-10 max-w-7xl mx-auto px-6">

                {/* HEADING */}
                <div className="text-center mb-20">

                    <span className="bg-pink-100 dark:bg-[#16233f] text-pink-500 px-6 py-2 rounded-full text-sm uppercase tracking-[4px] font-semibold border border-pink-200 dark:border-[#22304f]">
                        Know About Us
                    </span>

                    <h1 className="text-4xl md:text-6xl font-extrabold text-black dark:text-white mt-8 leading-tight">
                        About <span className="text-[#ff4d6d]">Pets Nest</span>
                    </h1>

                    <p className="text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto text-lg leading-8">
                        Connecting rescued pets with loving families and creating
                        beautiful stories filled with compassion, care, and happiness.
                    </p>

                </div>

                {/* MAIN SECTION */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT CONTENT */}
                    <div className="space-y-8">

                        {/* CARD 1 */}
                        <div className="bg-white/80 dark:bg-[#16233f]/80 backdrop-blur-xl border border-pink-100 dark:border-[#22304f] rounded-3xl p-8 hover:scale-105 duration-500 shadow-2xl">

                            <div className="flex gap-5">

                                <div>
                                    <BsFillBarChartFill className="text-5xl text-yellow-500" />
                                </div>

                                <div>

                                    <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
                                        Our Vision
                                    </h2>

                                    <p className="text-gray-600 dark:text-gray-300 leading-8 text-lg">
                                        We dream of a world where every rescued
                                        pet finds warmth, happiness, and a forever
                                        loving family.
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* CARD 2 */}
                        <div className="bg-white/80 dark:bg-[#16233f]/80 backdrop-blur-xl border border-cyan-100 dark:border-[#22304f] rounded-3xl p-8 hover:scale-105 duration-500 shadow-2xl">

                            <div className="flex gap-5">

                                <div>
                                    <BiAtom className="text-5xl text-green-500" />
                                </div>

                                <div>

                                    <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
                                        Our Mission
                                    </h2>

                                    <p className="text-gray-600 dark:text-gray-300 leading-8 text-lg">
                                        Helping abandoned pets connect with caring
                                        owners who can provide lifelong love and care.
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* CARD 3 */}
                        <div className="bg-white/80 dark:bg-[#16233f]/80 backdrop-blur-xl border border-rose-100 dark:border-[#22304f] rounded-3xl p-8 hover:scale-105 duration-500 shadow-2xl">

                            <div className="flex gap-5">

                                <div>
                                    <BsFillBriefcaseFill className="text-5xl text-red-500" />
                                </div>

                                <div>

                                    <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
                                        Our Core Values
                                    </h2>

                                    <p className="text-gray-600 dark:text-gray-300 leading-8 text-lg">
                                        Compassion, trust, inclusivity, and responsible
                                        pet ownership guide everything we do.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative flex justify-center">

                        {/* GLOW */}
                        <div className="absolute w-96 h-96 bg-pink-200/40 dark:bg-pink-900/20 blur-3xl rounded-full"></div>

                        <Image
                            src="/images/aboutus.jpg"
                            alt="About Us"
                            width={650}
                            height={700}
                            priority
                            className="relative z-10 rounded-[40px] shadow-[0_20px_80px_rgba(0,0,0,0.15)] object-cover hover:scale-105 duration-500 border border-white dark:border-[#22304f]"
                        />

                    </div>

                </div>

            </div>

        </section>
    );
};

export default AboutUs;





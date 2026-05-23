import Link from 'next/link';
import React from 'react';

import AllPetNestCard from './AllPetCard';

import { Button } from '@heroui/react';

import { IoArrowForwardOutline } from 'react-icons/io5';
import { FaPaw } from "react-icons/fa";

const PetsCard = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/addPetNestDetail`, {
        cache: "no-store"
    });

    const addPetNestDetails = await res.json();

    const addPetNest = addPetNestDetails.slice(0, 6);

    return (

        <div className='relative overflow-hidden border border-gray-200 dark:border-[#22304f] bg-gradient-to-br from-white via-pink-50 to-cyan-50 dark:from-[#09142b] dark:via-[#0f172a] dark:to-[#111827] p-8 shadow-xl transition-all duration-500'>

            {/* LIGHT ANIMAL BACKGROUND ANIMATION */}
            <div className='absolute inset-0 pointer-events-none overflow-hidden'>

                <FaPaw className='absolute top-10 left-10 text-pink-100 dark:text-pink-900 text-6xl animate-bounce' />

                <FaPaw className='absolute top-24 right-20 text-cyan-100 dark:text-cyan-900 text-5xl animate-pulse' />

                <FaPaw className='absolute bottom-16 left-1/4 text-orange-100 dark:text-orange-900 text-7xl animate-ping' />

                <FaPaw className='absolute bottom-10 right-10 text-rose-100 dark:text-rose-900 text-6xl animate-bounce' />

                <FaPaw className='absolute top-1/2 left-1/2 text-purple-100 dark:text-purple-900 text-8xl animate-pulse opacity-40' />

            </div>

            {/* HEADER */}
            <div className='relative max-w-7xl mx-auto z-10 flex flex-col md:flex-row items-center justify-between gap-6 mb-10'>

                <div>

                    <h1 className='text-4xl md:text-5xl font-extrabold text-black dark:text-white transition-all duration-300'>
                        Featured Pets
                    </h1>

                    <p className='text-lg text-gray-600 dark:text-gray-300 mt-2 transition-all duration-300'>
                        Find your perfect furry companion and give them a loving home.
                    </p>

                </div>

                <div>

                    <Link href={`/all-petnestcard`}>

                        <Button
                            variant='outline'
                            className='rounded-full border-[#ff6b6b] text-[#ff5252] hover:bg-[#ff5252] hover:text-white px-6 py-6 text-lg font-semibold transition-all duration-300 shadow-md'
                        >
                            ALL PETS

                            <IoArrowForwardOutline className='text-xl' />

                        </Button>

                    </Link>

                </div>

            </div>

            {/* CARD GRID */}
            <div className="relative max-w-7xl mx-auto z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {
                    addPetNest.map((addPetNest) => (

                        <AllPetNestCard
                            key={addPetNest._id}
                            addPetNest={addPetNest}
                        />

                    ))
                }

            </div>

        </div>
    );
};

export default PetsCard;
import AllPetNestCard from '@/components/AllPetCard';
import React from 'react';

import { FaPaw, FaDog, FaCat } from "react-icons/fa";

const AllPetNestCardPage = async () => {

    const res = await fetch('http://localhost:2080/addPetNestDetail', {
        cache: "no-store"
    });

    const addPetNestDetails = await res.json();

    return (

        <div className="relative overflow-hidden bg-gradient-to-b from-[#fff7fb] via-[#ffffff] to-[#fdfdfd]">

            {/* LIGHT ANIMAL BACKGROUND ANIMATION */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">

                {/* PAW */}
                <FaPaw className="absolute top-10 left-10 text-pink-100 text-7xl animate-bounce" />
                <FaPaw className="absolute top-32 right-20 text-cyan-100 text-6xl animate-pulse" />
                <FaPaw className="absolute bottom-16 left-1/4 text-orange-100 text-8xl animate-ping opacity-40" />
                <FaPaw className="absolute bottom-10 right-10 text-rose-100 text-7xl animate-bounce" />

                {/* DOG */}
                <FaDog className="absolute top-1/3 left-20 text-pink-200 text-8xl animate-pulse opacity-20" />

                {/* CAT */}
                <FaCat className="absolute top-20 right-1/3 text-purple-200 text-7xl animate-bounce opacity-20" />

            </div>

            {/* CONTENT */}
            <div className="relative z-10 max-w-7xl mx-auto px-5 py-16">

                <h1 className='text-4xl font-bold text-gray-800 mb-10'>
                    All Pets Nest Card
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {
                        Array.isArray(addPetNestDetails) &&
                        addPetNestDetails.map((addPetNest) => (
                            <AllPetNestCard
                                key={addPetNest._id}
                                addPetNest={addPetNest}
                            />
                        ))
                    }

                </div>

            </div>

        </div>

    );
};

export default AllPetNestCardPage;

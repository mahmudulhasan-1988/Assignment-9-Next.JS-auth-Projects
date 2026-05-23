'use client'

import Image from "next/image";
import Link from "next/link";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { FaPaw } from "react-icons/fa";

const AllPetNestCard = ({ addPetNest }) => {

  const {
    _id,
    name,
    species,
    breed,
    age,
    gender,
    location,
    adoptionFee,
    status,
    image,
  } = addPetNest || {};

  return (

    <div className="relative group bg-white rounded-[22px] overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 dark:bg-[#09142b]">

      {/* LIGHT ANIMAL BACKGROUND ANIMATION */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <FaPaw className="absolute top-6 left-6 text-pink-100 text-5xl animate-bounce" />

        <FaPaw className="absolute top-24 right-10 text-orange-100 text-4xl animate-pulse" />

        <FaPaw className="absolute bottom-20 left-10 text-cyan-100 text-6xl animate-ping" />

        <FaPaw className="absolute bottom-10 right-16 text-rose-100 text-5xl animate-bounce" />

      </div>

      {/* IMAGE */}
      <div className="relative overflow-hidden z-10">

        <Image
          src={image || "/images/pet-placeholder.jpg"}
          alt={name || "Pet Image"}
          width={400}
          height={300}
          className="w-full h-64 object-cover group-hover:scale-110 duration-700"
        />

        {/* CATEGORY */}
        <div className="absolute top-4 left-4">

          <span className="bg-[#fff3e6] text-[#d97706] px-4 py-1 rounded-full text-sm font-semibold shadow">
            🐶 {species}
          </span>

        </div>

        {/* STATUS */}
        <div className="absolute top-4 right-4">

          <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold">
            {status}
          </span>

        </div>

      </div>

      {/* CONTENT */}
      <div className="relative z-10 p-6">

        <h2 className="text-3xl font-bold text-[#0f172a]  dark:text-gray-300  leading-7 mb-3">
          {name}
        </h2>

        <p className="text-gray-500">
          {breed} • {age} years old • {gender}
        </p>

        {/* LOCATION */}
        <div className="flex items-center gap-2 mt-5 text-gray-600">

          <IoLocationOutline className="text-pink-500 text-xl" />

          <span>
            {location}
          </span>

        </div>

        {/* PRICE */}
        <div className="flex items-center gap-2 mt-4">

          <HiOutlineCurrencyDollar className="text-pink-500 text-xl" />

          <span className="text-3xl font-bold text-[#0f172a]  dark:text-gray-300  leading-7">
            ${adoptionFee}
          </span>

        </div>

      </div>

      {/* BUTTONS */}
      <div className="relative z-10 border-t border-gray-300 p-5 flex gap-4">

        <Link
          href={`/petnestdetails/${_id}`}
          className="w-1/2 text-center border border-gray-300 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          View Details
        </Link>

        <button className="w-1/2 bg-[#ff6b6b] hover:bg-[#ff5252] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
          Adopt Now
        </button>

      </div>

    </div>
  );
};

export default AllPetNestCard;
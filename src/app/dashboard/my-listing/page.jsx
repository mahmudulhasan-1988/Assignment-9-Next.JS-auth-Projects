// app/dashboard/my-listings/page.jsx

import Link from "next/link";

import {
  FaPaw,
  FaPlus,
} from "react-icons/fa";

import {
  FiGrid,
} from "react-icons/fi";

const MyListingsPage = () => {

  return (

    <section className="min-h-screen bg-gradient-to-br from-[#fff7fb] via-white to-[#f8fdff] dark:from-[#09142b] dark:via-[#0f172a] dark:to-[#111827] px-5 lg:px-10 py-10 transition-all duration-300">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

          <div>

            {/* BADGE */}
            <div className="inline-flex items-center gap-2 border border-pink-200 dark:border-pink-700 bg-pink-50 dark:bg-[#1e293b] px-4 py-2 rounded-full">

              <FiGrid className="text-pink-500" />

              <span className="text-pink-500 font-semibold text-sm">
                My Dashboard
              </span>

            </div>

            {/* TITLE */}
            <h1 className="text-5xl font-extrabold mt-5 text-black dark:text-white">

              My{" "}

              <span className="bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
                Listings
              </span>

            </h1>

            {/* SUBTITLE */}
            <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg">

              Manage your pet listings and adoption requests.

            </p>

          </div>

          {/* ADD BUTTON */}
          <Link
            href="/dashboard/add-pet"
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 to-cyan-400 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-all duration-300"
          >

            <FaPlus />

            Add New Pet

          </Link>

        </div>

        {/* EMPTY STATE */}
        <div className="mt-10 bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-gray-700 rounded-[30px] min-h-[500px] flex items-center justify-center shadow-xl">

          <div className="text-center">

            {/* ICON */}
            <div className="flex justify-center mb-6">

              <FaPaw className="text-6xl text-purple-300 dark:text-purple-500 animate-bounce" />

            </div>

            {/* TITLE */}
            <h2 className="text-4xl font-extrabold text-black dark:text-white">

              No listings yet

            </h2>

            {/* DESCRIPTION */}
            <p className="text-gray-500 dark:text-gray-300 mt-5 text-lg max-w-xl mx-auto leading-8">

              Start by adding a pet that needs a new home.

            </p>

            {/* BUTTON */}
            <div className="mt-8">

              <Link
                href="/dashboard/add-pet"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-cyan-400 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-all duration-300"
              >

                <FaPlus />

                Add Your First Pet

              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

};

export default MyListingsPage;
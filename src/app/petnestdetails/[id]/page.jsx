import Image from "next/image";
import Link from "next/link";
import { IoArrowBack, IoLocationOutline } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { FiCalendar, FiUser } from "react-icons/fi";
import { MdOutlinePets } from "react-icons/md";
import { FaPaw, FaDog, FaCat } from "react-icons/fa";

import EditPetModal from "@/components/EditPetModal";
import { DeletePetNestAlert } from "@/components/DeletePetNest";
import RequestAdopt from "@/components/RequestAdopt";

const PetDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    `http://localhost:2080/addPetNestDetail/${id}`,
    {
      headers:{
        authorization: "logged in"
      },
      cache: "no-store",
    }
  );

  const addPetNestDetail = await res.json();

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#fff7fb] via-[#ffffff] to-[#fdfdfd] dark:from-[#09142b] dark:via-[#0f172a] dark:to-[#111827] text-black dark:text-white px-4 lg:px-10 py-8 transition-all duration-300 ">
      
      {/* BACKGROUND ANIMATION */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FaPaw className="absolute top-10 left-10 text-pink-100 text-6xl animate-bounce" />

        <FaPaw className="absolute top-32 right-20 text-cyan-100 text-5xl animate-pulse" />

        <FaPaw className="absolute bottom-16 left-1/4 text-orange-100 text-7xl animate-ping opacity-40" />

        <FaPaw className="absolute bottom-10 right-10 text-rose-100 text-6xl animate-bounce" />

        <FaDog className="absolute top-1/3 left-16 text-pink-200 text-7xl animate-pulse opacity-20" />

        <FaCat className="absolute top-20 right-1/3 text-purple-200 text-6xl animate-bounce opacity-20" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* TOP BAR */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          
          <Link
            href="/all-petnestcard"
            className="inline-flex items-center gap-2 text-[#0f172a] dark:text-white hover:text-pink-500 transition-all duration-300 font-semibold"
          >
            <IoArrowBack className="text-lg" />
            Back to All Pets
          </Link>

          <div className="flex items-center gap-3">
            <EditPetModal addPetNestDetail={addPetNestDetail} />
            <DeletePetNestAlert addPetNestDetail={addPetNestDetail} />
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* LEFT SIDE */}
          <div>
            
            {/* IMAGE CARD */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-pink-200 to-cyan-200 shadow-xl">
              
              <Image
                src={addPetNestDetail.image}
                alt={addPetNestDetail.name}
                width={500}
                height={300}
                className="w-full h-[300px] md:h-[350px] object-cover"
              />

              <div className="absolute top-4 right-4">
                <span className="bg-emerald-400 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  {addPetNestDetail.status}
                </span>
              </div>
            </div>

            {/* TITLE & PRICE */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-5 mt-6">
              
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold ">
                  {addPetNestDetail.name}
                </h1>

                <div className="flex flex-wrap items-center gap-2 mt-3 ">
                  
                  <span className="bg-pink-100 border border-pink-300 text-pink-600 px-3 py-1 rounded-full text-xs md:text-sm font-semibold ">
                    {addPetNestDetail.species}
                  </span>

                  <span className="bg-cyan-100 border border-cyan-300 text-cyan-700 px-3 py-1 rounded-full text-xs md:text-sm font-semibold">
                    {addPetNestDetail.breed}
                  </span>

                  <span className="bg-yellow-100 border border-yellow-300 text-yellow-700 px-3 py-1 rounded-full text-xs md:text-sm font-semibold">
                    {addPetNestDetail.gender}
                  </span>
                </div>
              </div>

              <div className="md:text-right">
                <p className="text-gray-500 dark:text-gray-300 text-base">
                  Adoption Fee
                </p>

                <h2 className="text-3xl font-extrabold text-pink-500">
                  ${addPetNestDetail.adoptionFee}
                </h2>
              </div>
            </div>

            {/* DETAILS CARD */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {[
                {
                  title: "Species",
                  value: addPetNestDetail.species,
                  icon: <MdOutlinePets />,
                },
                {
                  title: "Breed",
                  value: addPetNestDetail.breed,
                  icon: <MdOutlinePets />,
                },
                {
                  title: "Age",
                  value: `${addPetNestDetail.age} Years`,
                  icon: <FiCalendar />,
                },
                {
                  title: "Gender",
                  value: addPetNestDetail.gender,
                  icon: <FiUser />,
                },
                {
                  title: "Location",
                  value: addPetNestDetail.location,
                  icon: <IoLocationOutline />,
                },
                {
                  title: "Fee",
                  value: `$${addPetNestDetail.adoptionFee}`,
                  icon: <HiOutlineCurrencyDollar />,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className=" rounded-2xl p-4 border-pink-100 shadow-md hover:shadow-lg transition-all duration-300 bg-white dark:bg-[#111827] border  dark:border-gray-700"
                >
                  <div className="flex items-center gap-2 text-pink-500 mb-2 text-lg">
                    {item.icon}

                    <p className="text-gray-500 text-sm">
                      {item.title}
                    </p>
                  </div>

                  <h3 className="text-lg font-bold ">
                    {item.value}
                  </h3>
                </div>
              ))}
            </div>

            {/* DESCRIPTION */}
            <div className="mt-5  rounded-2xl p-6 shadow-lg border border-pink-100 md hover:shadow-lg transition-all duration-300 bg-white dark:bg-[#111827] dark:border-gray-700">
              
              <h2 className="text-2xl font-bold mb-4  text-black dark:text-white">
                About {addPetNestDetail.name}
              </h2>

              <p className="text-gray-600 text-base leading-7">
                {addPetNestDetail.description}
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <RequestAdopt addPetNestDetail={addPetNestDetail} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetDetailsPage;

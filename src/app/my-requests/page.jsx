import Link from "next/link";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

import {
  FiClipboard,
  FiEye,
} from "react-icons/fi";

import {
  FaPaw,
  FaDog,
  FaCat,
} from "react-icons/fa";

import CancelButton from "@/components/CancelButton";

const MyAdoptionRequests = async () => {

  // GET SESSION
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const userId = session?.user?.id;

  // FETCH REQUESTS
  let requests = [];

  if (userId) {

    const res = await fetch(
      `http://localhost:2080/adoptionRequests/${userId}`,
      {
        cache: "no-store",
      }
    );

    const data = await res.json();

    requests = data.filter(
      (item) => item.canceled !== true
    );

  }

  return (

    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#fff7fb] via-white to-[#f8fdff] dark:from-[#09142b] dark:via-[#0f172a] dark:to-[#111827] px-5 lg:px-10 py-10 transition-all duration-300">

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <FaPaw className="absolute top-10 left-10 text-pink-100 dark:text-pink-900 text-7xl animate-bounce" />

        <FaPaw className="absolute top-32 right-20 text-cyan-100 dark:text-cyan-900 text-6xl animate-pulse" />

        <FaPaw className="absolute bottom-20 left-1/4 text-orange-100 dark:text-orange-900 text-8xl animate-ping opacity-40" />

        <FaPaw className="absolute bottom-10 right-10 text-rose-100 dark:text-rose-900 text-7xl animate-bounce" />

        <FaDog className="absolute top-1/3 left-16 text-pink-200 dark:text-pink-800 text-8xl animate-pulse opacity-20" />

        <FaCat className="absolute top-20 right-1/3 text-purple-200 dark:text-purple-800 text-7xl animate-bounce opacity-20" />

        <FaDog className="absolute bottom-20 right-1/4 text-cyan-100 dark:text-cyan-800 text-7xl animate-pulse opacity-20" />

      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <div>

          <div className="inline-flex items-center gap-2 border border-pink-200 dark:border-pink-700 bg-pink-50 dark:bg-[#1e293b] px-4 py-2 rounded-full shadow-sm">

            <FiClipboard className="text-pink-500" />

            <span className="text-pink-500 font-semibold text-sm">
              My Requests
            </span>

          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold mt-6 text-black dark:text-white leading-tight">

            My{" "}

            <span className="bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Adoption Requests
            </span>

          </h1>

        </div>

        {/* CONTENT */}
        <div className="mt-12">

          {
            requests.length === 0 ? (

              <div className="bg-white/90 dark:bg-[#1e293b]/90 backdrop-blur-md border border-pink-100 dark:border-gray-700 rounded-3xl min-h-[400px] flex flex-col items-center justify-center text-center shadow-2xl">

                <div className="text-7xl mb-6 animate-bounce">
                  🐾
                </div>

                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  No Data Found
                </h2>

                <p className="text-gray-500 dark:text-gray-300 text-lg max-w-md">
                  You haven't submitted any adoption request yet.
                </p>

              </div>

            ) : (

              <div className="overflow-x-auto rounded-3xl border border-pink-100 dark:border-gray-700 bg-white/90 dark:bg-[#1e293b]/90 backdrop-blur-md shadow-2xl">

                <table className="w-full">

                  {/* TABLE HEAD */}
                  <thead className="bg-pink-50 dark:bg-[#0f172a]">

                    <tr>

                      <th className="px-6 py-5 text-left text-gray-700 dark:text-white font-bold">
                        Pet
                      </th>

                      <th className="px-6 py-5 text-left text-gray-700 dark:text-white font-bold">
                        Pickup Date
                      </th>

                      <th className="px-6 py-5 text-left text-gray-700 dark:text-white font-bold">
                        Status
                      </th>

                      <th className="px-6 py-5 text-right text-gray-700 dark:text-white font-bold">
                        Actions
                      </th>

                    </tr>

                  </thead>

                  {/* TABLE BODY */}
                  <tbody>

                    {
                      requests.map((request) => (

                        <tr
                          key={request._id}
                          className="border-t border-pink-50 dark:border-gray-700 hover:bg-pink-50/40 dark:hover:bg-[#0f172a] transition-all duration-300"
                        >

                          {/* PET */}
                          <td className="px-6 py-5">

                            <div className="flex items-center gap-4">

                              {
                                request.image && (

                                  <img
                                    src={request.image}
                                    alt={request.name}
                                    className="w-16 h-16 rounded-2xl object-cover border border-pink-100 dark:border-gray-700"
                                  />

                                )
                              }

                              <div>

                                <h2 className="font-bold text-lg text-gray-900 dark:text-white">
                                  {request.name}
                                </h2>

                                <p className="text-gray-500 dark:text-gray-300 text-sm">
                                  {request.species} • {request.breed}
                                </p>

                              </div>

                            </div>

                          </td>

                          {/* PICKUP */}
                          <td className="px-6 py-5 text-gray-600 dark:text-gray-300">

                            {request.pickupDate}

                          </td>

                          {/* STATUS */}
                          <td className="px-6 py-5">

                            <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 px-4 py-2 rounded-full text-sm font-semibold">

                              {request.status}

                            </span>

                          </td>

                          {/* ACTIONS */}
                          <td className="px-6 py-5">

                            <div className="flex items-center justify-end gap-3">

                              <Link href={`/petnestdetails/${request.petId}`}>

                                <button className="flex items-center gap-2 bg-gray-100 dark:bg-[#0f172a] dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 px-5 py-2 rounded-full transition-all duration-300">

                                  <FiEye />

                                  View

                                </button>

                              </Link>

                              {/* CANCEL BUTTON */}
                              <CancelButton request={request} />

                            </div>

                          </td>

                        </tr>

                      ))
                    }

                  </tbody>

                </table>

              </div>

            )
          }

        </div>

      </div>

    </section>

  );
};

export default MyAdoptionRequests;
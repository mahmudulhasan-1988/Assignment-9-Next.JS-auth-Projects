

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

  // SESSION
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const userId = session?.user?.id;

  let requests = [];

  if (userId) {

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_API}/adoptionRequests/${userId}`,
      {
        cache: "no-store",
      }
    );
    const data = await res.json();
    requests = data.filter(
      (item) => item.canceled !== true
    );

  }

  // STATS
  const total = requests.length;

  const pending = requests.filter(
    (item) => item.status === "Pending"
  ).length;

  const approved = requests.filter(
    (item) => item.status === "Approved"
  ).length;

  const rejected = requests.filter(
    (item) => item.status === "Rejected"
  ).length;

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

      </div>

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

          <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg">
            Track the status of all your adoption requests here.
          </p>

        </div>

        {/* STATS CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

          {/* TOTAL */}
          <div className="bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-gray-700 rounded-3xl p-8 text-center shadow-lg">

            <h2 className="text-4xl font-extrabold text-black dark:text-white">
              {total}
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Total
            </p>

          </div>

          {/* PENDING */}
          <div className="bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-gray-700 rounded-3xl p-8 text-center shadow-lg">

            <h2 className="text-4xl font-extrabold text-yellow-500">
              {pending}
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Pending
            </p>

          </div>

          {/* APPROVED */}
          <div className="bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-gray-700 rounded-3xl p-8 text-center shadow-lg">

            <h2 className="text-4xl font-extrabold text-green-500">
              {approved}
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Approved
            </p>

          </div>

          {/* REJECTED */}
          <div className="bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-gray-700 rounded-3xl p-8 text-center shadow-lg">

            <h2 className="text-4xl font-extrabold text-red-500">
              {rejected}
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Rejected
            </p>

          </div>

        </div>

        {/* TABLE */}
        <div className="mt-12">

          {
            requests.length === 0 ? (

              <div className="bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-gray-700 rounded-3xl py-20 text-center shadow-lg">

                <h2 className="text-4xl font-bold text-black dark:text-white">
                  No Requests Found 🐾
                </h2>

                <p className="text-gray-500 dark:text-gray-300 mt-4 text-lg">
                  You haven't submitted any request yet.
                </p>

              </div>

            ) : (

              // <div className="overflow-x-auto rounded-3xl border   border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1e293b] shadow-2xl">

              //   <table className="w-full">

              //     <thead className=" bg-pink-50">

              //       <tr>

              //         <th className="px-6 py-5 text-left text-black dark:text-white font-bold">
              //           Pet
              //         </th>

              //         <th className="px-6 py-5 text-left text-black dark:text-white font-bold">
              //           Pickup Date
              //         </th>

              //         <th className="px-6 py-5 text-left text-black dark:text-white font-bold">
              //           Status
              //         </th>

              //         <th className="px-6 py-5 text-right text-black dark:text-white font-bold">
              //           Actions
              //         </th>

              //       </tr>

              //     </thead>

              //     <tbody>

              //       {
              //         requests.map((request) => (

              //           <tr
              //             key={request._id}
              //             className="border-t border-gray-200 dark:border-gray-700 hover:bg-pink-50/30 dark:hover:bg-[#0f172a] transition-all duration-300"
              //           >

              //             {/* PET */}
              //             <td className="px-6 py-5">

              //               <div className="flex items-center gap-4">

              //                 <img
              //                   src={request.petImage}
              //                   alt={request.petName}
              //                   className="w-16 h-16 rounded-2xl object-cover"
              //                 />

              //                 <div>

              //                   <h2 className="font-bold text-lg text-black dark:text-white">
              //                     {request.petName}
              //                   </h2>

              //                   <p className="text-gray-500 dark:text-gray-300 text-sm">
              //                     {request.species} • {request.breed}
              //                   </p>

              //                 </div>

              //               </div>

              //             </td>

              //             {/* PICKUP */}
              //             <td className="px-6 py-5 text-gray-700 dark:text-gray-300">
              //               {request.pickupDate}
              //             </td>

              //             {/* STATUS */}
              //             <td className="px-6 py-5">

              //               <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 px-4 py-2 rounded-full text-sm font-semibold">

              //                 {request.status}

              //               </span>

              //             </td>

              //             {/* ACTIONS */}
              //             <td className="px-6 py-5">

              //               <div className="flex items-center justify-end gap-3">

              //                 <Link href={`/petnestdetails/${request.petId}`}>

              //                   <button className="flex items-center gap-2 bg-gray-100 dark:bg-[#0f172a] text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 px-5 py-2 rounded-full transition-all duration-300">

              //                     <FiEye />

              //                     View

              //                   </button>

              //                 </Link>

              //                  {/* CANCEL BUTTON */}
              //               <CancelButton request={request} />

              //               </div>

              //             </td>

              //           </tr>

              //         ))
              //       }

              //     </tbody>

              //   </table>

              // </div>
              <div className="overflow-x-auto rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1e293b] shadow-2xl transition-all duration-300">

  <table className="w-full text-black dark:text-white">

    {/* TABLE HEAD */}
    <thead className="bg-pink-50 dark:bg-[#0f172a]">

      <tr>

        <th className="px-6 py-5 text-left font-bold text-black dark:text-white">
          Pet
        </th>

        <th className="px-6 py-5 text-left font-bold text-black dark:text-white">
          Pickup Date
        </th>

        <th className="px-6 py-5 text-left font-bold text-black dark:text-white">
          Status
        </th>

        <th className="px-6 py-5 text-right font-bold text-black dark:text-white">
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
            className="border-t border-gray-200 dark:border-gray-700 hover:bg-pink-50 dark:hover:bg-[#0f172a] transition-all duration-300"
          >

            {/* PET */}
            <td className="px-6 py-5">

              <div className="flex items-center gap-4">

                <img
                  src={request.petImage}
                  alt={request.petName}
                  className="w-16 h-16 rounded-2xl object-cover border border-gray-200 dark:border-gray-700"
                />

                <div>

                  <h2 className="font-bold text-lg text-black dark:text-white">

                    {request.petName}

                  </h2>

                  <p className="text-black/70 dark:text-white/70 text-sm">

                    {request.species} • {request.breed}

                  </p>

                </div>

              </div>

            </td>

            {/* PICKUP */}
            <td className="px-6 py-5 text-black dark:text-white">

              {request.pickupDate}

            </td>

            {/* STATUS */}
            <td className="px-6 py-5">

              <span
                className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  request.status === "Approved"
                    ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                    : request.status === "Rejected"
                    ? "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                    : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
                }`}
              >

                {request.status}

              </span>

            </td>

            {/* ACTIONS */}
            <td className="px-6 py-5">

              <div className="flex items-center justify-end gap-3">

                {/* VIEW */}
                <Link href={`/petnestdetails/${request.petId}`}>

                  <button className="flex items-center gap-2 bg-gray-100 dark:bg-[#0f172a] text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 px-5 py-2 rounded-full transition-all duration-300">

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

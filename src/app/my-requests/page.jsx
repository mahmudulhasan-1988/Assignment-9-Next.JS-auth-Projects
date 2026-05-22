"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import {
  FiClipboard,
  FiEye,
  FiXCircle,
  FiAlertCircle,
  FiX,
} from "react-icons/fi";

import { FaPaw, FaDog, FaCat } from "react-icons/fa";

const MyAdoptionRequests = () => {
  const [requests, setRequests] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const [selectedRequest, setSelectedRequest] = useState(null);

  // FETCH REQUESTS
  useEffect(() => {
    fetch("http://localhost:2080/adoptionRequests")
      .then((res) => res.json())
      .then((data) => {
        // ONLY ACTIVE REQUESTS
        const activeRequests = data.filter(
          (item) => item.canceled !== true
        );

        setRequests(activeRequests);
      });
  }, []);

  // OPEN MODAL
  const handleOpenModal = (request) => {
    setSelectedRequest(request);

    setShowModal(true);
  };

  // CLOSE MODAL
  const handleCloseModal = () => {
    setShowModal(false);

    setSelectedRequest(null);
  };

  // CANCEL REQUEST
  const handleCancelRequest = async () => {
    try {
      await fetch(
        `http://localhost:2080/adoptionRequests/${selectedRequest._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            canceled: true,
            status: "Canceled",
          }),
        }
      );

      // REMOVE FROM UI
      const remaining = requests.filter(
        (item) => item._id !== selectedRequest._id
      );

      setRequests(remaining);

      handleCloseModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#fff7fb] via-white to-[#f8fdff] px-5 lg:px-10 py-10">
      
      {/* BACKGROUND ANIMAL ANIMATION */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <FaPaw className="absolute top-10 left-10 text-pink-100 text-7xl animate-bounce" />

        <FaPaw className="absolute top-32 right-20 text-cyan-100 text-6xl animate-pulse" />

        <FaPaw className="absolute bottom-20 left-1/4 text-orange-100 text-8xl animate-ping opacity-40" />

        <FaPaw className="absolute bottom-10 right-10 text-rose-100 text-7xl animate-bounce" />

        <FaDog className="absolute top-1/3 left-16 text-pink-200 text-8xl animate-pulse opacity-20" />

        <FaCat className="absolute top-20 right-1/3 text-purple-200 text-7xl animate-bounce opacity-20" />

        <FaDog className="absolute bottom-20 right-1/4 text-cyan-100 text-7xl animate-pulse opacity-20" />

      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <div>

          <div className="inline-flex items-center gap-2 border border-pink-200 bg-pink-50 px-4 py-2 rounded-full shadow-sm">

            <FiClipboard className="text-pink-500" />

            <span className="text-pink-500 font-semibold text-sm">
              My Requests
            </span>

          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold mt-6 text-gray-900 leading-tight">

            My{" "}

            <span className="bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Adoption Requests
            </span>

          </h1>

        </div>

        {/* CONTENT */}
        <div className="mt-12">

          {requests.length === 0 ? (

            <div className="bg-white/90 backdrop-blur-md border border-pink-100 rounded-3xl min-h-[400px] flex flex-col items-center justify-center text-center shadow-2xl">

              <div className="text-7xl mb-6 animate-bounce">
                🐾
              </div>

              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                No Data Found
              </h2>

              <p className="text-gray-500 text-lg max-w-md">
                You haven’t submitted any adoption request yet.
              </p>

            </div>

          ) : (

            <div className="overflow-x-auto rounded-3xl border border-pink-100 bg-white/90 backdrop-blur-md shadow-2xl">

              <table className="w-full">

                {/* HEAD */}
                <thead className="bg-pink-50">

                  <tr>

                    <th className="px-6 py-5 text-left text-gray-700 font-bold">
                      Pet
                    </th>

                    <th className="px-6 py-5 text-left text-gray-700 font-bold">
                      Pickup Date
                    </th>

                    <th className="px-6 py-5 text-left text-gray-700 font-bold">
                      Status
                    </th>

                    <th className="px-6 py-5 text-right text-gray-700 font-bold">
                      Actions
                    </th>

                  </tr>

                </thead>

                {/* BODY */}
                <tbody>

                  {requests.map((request) => (

                    <tr
                      key={request._id}
                      className="border-t border-pink-50 hover:bg-pink-50/40 transition-all duration-300"
                    >

                      {/* PET */}
                      <td className="px-6 py-5">

                        <div className="flex items-center gap-4">

                          <img
                            src={request.image}
                            alt={request.name}
                            className="w-16 h-16 rounded-2xl object-cover border border-pink-100"
                          />

                          <div>

                            <h2 className="font-bold text-lg text-gray-900">
                              {request.name}
                            </h2>

                            <p className="text-gray-500 text-sm">
                              {request.species} • {request.breed}
                            </p>

                          </div>

                        </div>

                      </td>

                      {/* PICKUP */}
                      <td className="px-6 py-5 text-gray-600">
                        {request.pickupDate}
                      </td>

                      {/* STATUS */}
                      <td className="px-6 py-5">

                        <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold">

                          {request.status}

                        </span>

                      </td>

                      {/* ACTIONS */}
                      <td className="px-6 py-5">

                        <div className="flex items-center justify-end gap-3">

                          {/* VIEW */}
                          <Link href={`/petnestdetails/${request.petId}`}>

                            <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-5 py-2 rounded-full transition-all duration-300">

                              <FiEye />

                              View

                            </button>

                          </Link>

                          {/* CANCEL */}
                          <button
                            onClick={() => handleOpenModal(request)}
                            className="flex items-center gap-2 border border-red-400 text-red-500 hover:bg-red-500 hover:text-white px-5 py-2 rounded-full transition-all duration-300"
                          >

                            <FiXCircle />

                            Cancel

                          </button>

                        </div>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          )}

        </div>

      </div>

      {/* MODAL */}
      {showModal && (

        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-5">

          <div className="w-full max-w-xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-pink-100">

            {/* TOP */}
            <div className="p-8 relative">

              {/* CLOSE */}
              <button
                onClick={handleCloseModal}
                className="absolute top-5 right-5 text-gray-500 hover:text-red-500 text-2xl transition-all duration-300"
              >

                <FiX />

              </button>

              {/* TITLE */}
              <div className="flex items-center gap-3">

                <div className="w-12 h-12 rounded-full border border-red-300 flex items-center justify-center bg-red-50">

                  <FiAlertCircle className="text-red-500 text-2xl" />

                </div>

                <h2 className="text-3xl font-bold text-gray-900">
                  Cancel Request
                </h2>

              </div>

              {/* DESCRIPTION */}
              <p className="text-gray-600 text-lg leading-8 mt-6">

                Are you sure you want to cancel your adoption request for{" "}

                <span className="font-bold text-gray-900">
                  {selectedRequest?.name}
                </span>

                ?

              </p>

            </div>

            {/* FOOTER */}
            <div className="border-t border-gray-100 bg-gray-50 px-8 py-5 flex items-center justify-end gap-4">

              {/* KEEP */}
              <button
                onClick={handleCloseModal}
                className="px-6 py-3 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold transition-all duration-300"
              >

                Keep Request

              </button>

              {/* CANCEL */}
              <button
                onClick={handleCancelRequest}
                className="px-6 py-3 rounded-full bg-red-500 hover:bg-red-600 text-white font-semibold transition-all duration-300"
              >

                Yes, Cancel

              </button>

            </div>

          </div>

        </div>

      )}

    </section>
  );
};

export default MyAdoptionRequests;

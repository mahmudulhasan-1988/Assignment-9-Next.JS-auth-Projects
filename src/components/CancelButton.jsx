// components/CancelButton.jsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiXCircle, FiAlertCircle, FiX } from "react-icons/fi";

const CancelButton = ({ request }) => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleCancel = async () => {
    try {
      await fetch(`http://localhost:2080/adoptionRequests/${request._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ canceled: true, status: "Canceled" }),
      });

      setShowModal(false);
      router.refresh(); // re-fetch server component data
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="flex items-center gap-2 border border-red-400 text-red-500 hover:bg-red-500 hover:text-white px-5 py-2 rounded-full transition-all duration-300"
      >
        <FiXCircle /> Cancel
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-5">
          <div className="w-full max-w-xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-pink-100">

            <div className="p-8 relative">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-5 right-5 text-gray-500 hover:text-red-500 text-2xl transition-all duration-300"
              >
                <FiX />
              </button>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border border-red-300 flex items-center justify-center bg-red-50">
                  <FiAlertCircle className="text-red-500 text-2xl" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Cancel Request</h2>
              </div>

              <p className="text-gray-600 text-lg leading-8 mt-6">
                Are you sure you want to cancel your adoption request for{" "}
                <span className="font-bold text-gray-900">{request.name}</span>?
              </p>
            </div>

            <div className="border-t border-gray-100 bg-gray-50 px-8 py-5 flex items-center justify-end gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-3 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold transition-all duration-300"
              >
                Keep Request
              </button>
              <button
                onClick={handleCancel}
                className="px-6 py-3 rounded-full bg-red-500 hover:bg-red-600 text-white font-semibold transition-all duration-300"
              >
                Yes, Cancel
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default CancelButton;
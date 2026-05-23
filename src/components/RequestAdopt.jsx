"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@heroui/react";

import { FiMail, FiUser } from "react-icons/fi";
import { MdOutlinePets } from "react-icons/md";

import { authClient } from "@/lib/auth-client";

import toast from "react-hot-toast";

const RequestAdopt = ({ addPetNestDetail }) => {
  const router = useRouter();

  const { data: session } = authClient.useSession();

  const user = session?.user;

  const [pickupDate, setPickupDate] = useState("");
  const [message, setMessage] = useState("");

  // SAFE DATA
  const {
    _id = "",
    name = "Unknown",
    image = "",
    species = "",
    breed = "",
    adoptionFee = 0,
  } = addPetNestDetail || {};

  // SUBMIT REQUEST
  const handleAdoptionRequest = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("Please login first");
      return;
    }

    if (!pickupDate) {
      toast.error("Please select pickup date");
      return;
    }

    const requestData = {
      petId: _id,
      petName: name,
      petImage: image,
      species,
      breed,
      adoptionFee,
      userName: user?.name,
      userEmail: user?.email,
      userImage: user?.image,
      pickupDate,
      message,
      status: "Pending",
      canceled: false,
      requestedAt: new Date().toISOString(),
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_API}/adoptionRequests`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );

      const data = await res.json();

      if (data.insertedId) {
        toast.success("Request Sent Successfully");
        router.push("/my-requests");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  if (!addPetNestDetail) return null;

  return (
    <div className="max-w-7xl mx-auto h-full">
      <div className=" dark:bg-[#111827] border border-gray-200 dark:border-gray-700 p-8 shadow-xl sticky top-10 rounded-2xl transition-all duration-300  bg-white">

        {/* TITLE */}
        <div className="flex items-center gap-3 mb-4">
          <MdOutlinePets className="text-pink-500 text-3xl" />

          <h2 className="text-2xl font-bold">
            Request to Adopt {name}
          </h2>
        </div>

        {/* DESCRIPTION */}
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-sm">
          Fill out this form and the owner will review your request.
        </p>

        {/* FORM */}
        <form
          onSubmit={handleAdoptionRequest}
          className="space-y-6"
        >

          {/* PET NAME */}
          <div>
              <label className="block mb-2 ">
                <h2 className="font-semibold ">
              Pet Name
                </h2>
            </label>

            <input
              type="text"
              value={name}
              readOnly
              className="w-full bg-gray-50 dark:bg-[#1f2937] border border-gray-300 dark:border-gray-600 rounded-full px-5 py-3 outline-none "
            />
          </div>

          {/* USER NAME */}
          <div>
            <label className="block mb-2 font-semibold text-sm">
              Your Name
            </label>

            <div className="relative">
              <FiUser className="absolute top-1/2 left-5 -translate-y-1/2 text-gray-500 dark:text-gray-300" />

              <input
                type="text"
                value={user?.name || "Guest"}
                readOnly
                className="w-full bg-gray-50 dark:bg-[#1f2937] border border-gray-300 dark:border-gray-600 rounded-full px-12 py-3 outline-none"
              />
            </div>
          </div>

          {/* EMAIL */}
          <div>
            <label className="block mb-2 font-semibold text-sm">
              Your Email
            </label>

            <div className="relative">
              <FiMail className="absolute top-1/2 left-5 -translate-y-1/2 text-gray-500 dark:text-gray-300" />

              <input
                type="email"
                value={user?.email || ""}
                readOnly
                className="w-full bg-gray-50 dark:bg-[#1f2937] border border-gray-300 dark:border-gray-600 rounded-full px-12 py-3 outline-none"
              />
            </div>
          </div>

          {/* PICKUP DATE */}
          <div>
            <label className="block mb-2 font-semibold text-sm">
              Preferred Pickup Date
            </label>

            <input
              type="date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className="w-full bg-gray-50 dark:bg-[#1f2937] border border-gray-300 dark:border-gray-600 rounded-full px-5 py-3 outline-none color-scheme-light dark:color-scheme-dark"
            />
          </div>

          {/* MESSAGE */}
          <div>
            <label className="block mb-2 font-semibold text-sm">
              Message to Owner
            </label>

            <textarea
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={`Tell why you're perfect for ${name}...`}
              className="w-full bg-gray-50 dark:bg-[#1f2937] border border-gray-300 dark:border-gray-600 rounded-2xl px-5 py-3 outline-none resize-none placeholder:text-gray-500 dark:placeholder:text-gray-400"
            />
          </div>

          {/* BUTTON */}
          <Button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 py-4 rounded-full text-lg font-bold text-white transition-all duration-300"
          >
            Adopt {name} 🐾
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RequestAdopt;



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

  // SAFE DESTRUCTURE
  const {
    _id = "",
    name = "Unknown",
    image = "",
    species = "",
    breed = "",
    adoptionFee = 0,
  } = addPetNestDetail || {};

  
  const handleAdoptionRequest = async (e) => {

  e.preventDefault();

  if (!user) {
    return alert("Please login first");
  }

  if (!pickupDate) {
    return alert("Please select pickup date");
  }

  // REQUEST DATA
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

  // console.log(requestData);

  try {

    const res = await fetch(
      "http://localhost:2080/adoptionRequests",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(requestData),
      }
    );

    const data = await res.json();

    // console.log(data);

    if (data.insertedId) {

      toast.success("Request Sent Successfully");

      router.push("/my-requests");

    }

  } catch (error) {

    console.log(error);

  }

};

//   // SUBMIT
//   const handleAdoptionRequest = async (e) => {
//     e.preventDefault();

// const res = await fetch("http://localhost:2080/request", {
//     method: "POST",
//     headers: {
//       'Content-type': 'application/json'
//     },
//     body: JSON.stringify(requestData)
//   })
//   const data = await res.json()

//   console.log(data);

//     // guards
//     if (!addPetNestDetail) return;
//     if (!pickupDate) return alert("Please select pickup date");
//     if (!user?.email) return alert("Login required");

//     const requestData = {
//       petId: _id,
//       name,
//       image,
//       species,
//       breed,
//       adoptionFee,

//       petRequestId: _id,

//       userName: user?.name || "Unknown User",
//       userEmail: user?.email,

//       pickupDate,
//       message,

//       status: "Pending",
//       canceled: false,

//       requestedAt: new Date().toISOString(),
//     };

//     try {
//       const res = await fetch("http://localhost:2080/adoptionRequests", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(requestData),
//       });

//       if (!res.ok) throw new Error("Request failed");

//       const data = await res.json();

//       if (data.insertedId) {
//         router.push("/my-requests");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

  if (!addPetNestDetail) return null;

  return (
    <div className="max-w-7xl mx-auto h-full">
      <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-xl sticky top-10">

        {/* TITLE */}
        <div className="flex items-center gap-3 mb-4">
          <MdOutlinePets className="text-pink-500 text-3xl" />
          <h2 className="text-2xl font-bold text-gray-900">
            Request to Adopt {name}
          </h2>
        </div>

        <p className="text-gray-500 mb-8 text-sm">
          Fill out this form and the owner will review your request.
        </p>

        <form onSubmit={handleAdoptionRequest} className="space-y-6">

          {/* PET NAME */}
          <div>
            <label className="block mb-2 font-semibold text-gray-800 text-sm">
              Pet Name
            </label>
            <input
              type="text"
              value={name}
              readOnly
              className="w-full bg-gray-50 border border-gray-200 rounded-full px-5 py-3 outline-none text-sm"
            />
          </div>

          {/* USER NAME */}
          <div>
            <label className="block mb-2 font-semibold text-gray-800 text-sm">
              Your Name
            </label>
            <div className="relative">
              <FiUser className="absolute top-1/2 left-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={user?.name || "Guest"}
                readOnly
                className="w-full bg-gray-50 border border-gray-200 rounded-full px-12 py-3 outline-none text-sm"
              />
            </div>
          </div>

          {/* EMAIL */}
          <div>
            <label className="block mb-2 font-semibold text-gray-800 text-sm">
              Your Email
            </label>
            <div className="relative">
              <FiMail className="absolute top-1/2 left-5 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                value={user?.email || ""}
                readOnly
                className="w-full bg-gray-50 border border-gray-200 rounded-full px-12 py-3 outline-none text-sm"
              />
            </div>
          </div>

          {/* DATE */}
          <div>
            <label className="block mb-2 font-semibold text-gray-800 text-sm">
              Preferred Pickup Date
            </label>
            <input
              type="date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-full px-5 py-3 outline-none text-sm"
            />
          </div>

          {/* MESSAGE */}
          <div>
            <label className="block mb-2 font-semibold text-gray-800 text-sm">
              Message to Owner
            </label>
            <textarea
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={`Tell why you're perfect for ${name}...`}
              className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-3 outline-none resize-none text-sm"
            />
          </div>

          {/* BUTTON */}
          <Button onClick={handleAdoptionRequest}
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 py-4 rounded-full text-lg font-bold text-white"
          >
            Adopt {name} 🐾
          </Button>

        </form>
      </div>
    </div>
  );
};

export default RequestAdopt;


// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// import { Button } from "@heroui/react";

// import { FiMail, FiUser } from "react-icons/fi";
// import { MdOutlinePets } from "react-icons/md";
// import { authClient } from "@/lib/auth-client";

// const RequestAdopt = ({ addPetNestDetail }) => {
//   const {data: session,} = authClient.useSession();
//   const user = session?.user

//   console.log(user);

//   const [departureDate, setDepartureDate] = useState(null)
//   console.log(new Date (addPetNestDetail));



//   const router = useRouter();

//   const [pickupDate, setPickupDate] = useState("");
//   const [message, setMessage] = useState("");

//   // PET DATA
//   const {
//   _id = "",
//   name = "Unknown",
//   image = "",
//   species = "",
//   breed = "",
//   adoptionFee = 0,
// } = addPetNestDetail || {};
//   // const {
//   //   _id,
//   //   name,
//   //   image,
//   //   species,
//   //   breed,
//   //   adoptionFee,
//   // } = addPetNestDetail;

//   // SUBMIT REQUEST
//   const handleAdoptionRequest = async (e) => {
//     e.preventDefault();
//     const requestData = {
//       petId: _id,
//       name,
//       image,
//       species,
//       breed,
//       adoptionFee,
//       petRequestId: addPetNestDetail._id,



//       userName: "Arif S",
//       userEmail: "arif@gmail.com",

//       pickupDate,
//       message,

//       status: "Pending",
//       canceled: false,

//       requestedAt: new Date(),

//     };
//     if (!addPetNestDetail) return null;

//     if (!pickupDate) {
//   alert("Please select pickup date");
//   return;
// }

//     try {

//       const res = await fetch(
//         "http://localhost:2080/adoptionRequests",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(requestData),
//         }
//       );

//       const data = await res.json();

//       if (data.insertedId) {

//         router.push("/my-requests");

//       }

//     } 
//     catch (error) {

//       console.log(error);

//     }

//   };

//   return (

//     <div className="max-w-7xl mx-auto h-full">

//       <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-xl sticky top-10">

//         {/* TITLE */}
//         <div className="flex items-center gap-3 mb-4">

//           <MdOutlinePets className="text-pink-500 text-3xl" />

//           <h2 className="text-3xl font-bold text-gray-900">
//             Request to Adopt {name}
//           </h2>

//         </div>

//         <p className="text-gray-500 mb-8">
//           Fill out this form and the owner will review your request.
//         </p>

//         {/* FORM */}
//         <form
//           onSubmit={handleAdoptionRequest}
//           className="space-y-6"
//         >

//           {/* PET NAME */}
//           <div>

//             <label className="block mb-3 font-semibold text-gray-800">
//               Pet Name
//             </label>

//             <input
//               type="text"
//               value={name}
//               readOnly
//               className="w-full bg-gray-50 border border-gray-200 rounded-full px-5 py-4 outline-none"
//             />

//           </div>

//           {/* USER NAME */}
//           <div>

//             <label className="block mb-3 font-semibold text-gray-800">
//               Your Name
//             </label>

//             <div className="relative">

//               <FiUser className="absolute top-1/2 left-5 -translate-y-1/2 text-gray-400" />

//               <input
//                 type="text"
//                 value="Arif S"
//                 readOnly
//                 className="w-full bg-gray-50 border border-gray-200 rounded-full px-12 py-4 outline-none"
//               />

//             </div>

//           </div>

//           {/* EMAIL */}
//           <div>

//             <label className="block mb-3 font-semibold text-gray-800">
//               Your Email
//             </label>

//             <div className="relative">

//               <FiMail className="absolute top-1/2 left-5 -translate-y-1/2 text-gray-400" />

//               <input
//                 type="email"
//                 value="arif@gmail.com"
//                 readOnly
//                 className="w-full bg-gray-50 border border-gray-200 rounded-full px-12 py-4 outline-none"
//               />

//             </div>

//           </div>

//           {/* PICKUP DATE */}
//           <div>

//             <label className="block mb-3 font-semibold text-gray-800">
//               Preferred Pickup Date
//             </label>

//             <input
//               type="date"
//               value={pickupDate}
//               onChange={(e) => setPickupDate(e.target.value)}
//               required
//               className="w-full bg-gray-50 border border-gray-200 rounded-full px-5 py-4 outline-none"
//             />

//           </div>

//           {/* MESSAGE */}
//           <div>

//             <label className="block mb-3 font-semibold text-gray-800">
//               Message to Owner
//             </label>

//             <textarea
//               rows={5}
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               placeholder={`Tell the owner why you'd be a great match for ${name}...`}
//               className="w-full bg-gray-50 border border-gray-200 rounded-3xl px-5 py-4 outline-none resize-none"
//             ></textarea>

//           </div>

//           {/* BUTTON */}
//           <Button
//             type="submit"
//             className="w-full bg-pink-500 hover:bg-pink-600 py-5 rounded-full text-xl font-bold text-white"
//           >

//             Adopt {name} 🐾

//           </Button>

//         </form>

//       </div>

//     </div>
//   );
// };

// export default RequestAdopt;

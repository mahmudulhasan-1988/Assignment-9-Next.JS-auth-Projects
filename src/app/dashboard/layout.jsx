"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import {
  FiMenu,
  FiClipboard,
  FiPlus,
  FiHeart,
  FiLogOut,
  FiMoon,
  FiSun,
} from "react-icons/fi";

import { authClient } from "@/lib/auth-client";

const DashboardLayout = ({ children }) => {

  const pathname = usePathname();

  const { data: session } = authClient.useSession();

  const user = session?.user;

  const [openMenu, setOpenMenu] = useState(true);

  // THEME STATE
  const [darkMode, setDarkMode] = useState(false);

  // LOAD THEME
  useEffect(() => {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {

      setDarkMode(true);

      document.documentElement.classList.add("dark");

    } else {

      setDarkMode(false);

      document.documentElement.classList.remove("dark");

    }

  }, []);

  // TOGGLE THEME
  const toggleTheme = () => {

    if (darkMode) {

      document.documentElement.classList.remove("dark");

      localStorage.setItem("theme", "light");

      setDarkMode(false);

    } else {

      document.documentElement.classList.add("dark");

      localStorage.setItem("theme", "dark");

      setDarkMode(true);

    }

  };

  // LOGOUT
  const handleLogout = async () => {

    await authClient.signOut();

  };

  // MENU ITEMS
  const menuItems = [

    {
      name: "My Requests",
      href: "/dashboard/my-requests",
      icon: <FiClipboard />,
    },

    {
      name: "Add Pet",
      href: "/dashboard/add-pet",
      icon: <FiPlus />,
    },

    {
      name: "My Listings",
      href: "/dashboard/my-listing",
      icon: <FiHeart />,
    },

  ];

  return (

    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#0f172a] transition-all duration-300">

      {/* TOP NAVBAR */}
      <header className="h-20 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827] flex items-center justify-between px-6 sticky top-0 z-50">

        {/* LEFT */}
        <div className="flex items-center gap-4">

          {/* MENU BUTTON */}
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="lg:hidden text-2xl text-gray-700 dark:text-white"
          >

            <FiMenu />

          </button>

          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-3"
          >

            <Image
              src="/images/Logo.webp"
              alt="Logo"
              width={45}
              height={45}
              className="rounded-full"
            />

            <h2 className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">

              PetNest

            </h2>

          </Link>

          {/* BADGE */}
          <div className="hidden md:flex items-center gap-2 bg-gray-100 dark:bg-[#1e293b] px-4 py-2 rounded-full">

            <FiClipboard className="text-gray-600 dark:text-gray-300" />

            <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">

              Dashboard

            </span>

          </div>

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-5">

          {/* THEME BUTTON */}
          <button
            onClick={toggleTheme}
            className="w-11 h-11 rounded-full bg-gray-100 dark:bg-[#1e293b] flex items-center justify-center text-xl text-gray-700 dark:text-yellow-400 transition-all duration-300"
          >

            {
              darkMode ? <FiSun /> : <FiMoon />
            }

          </button>

          {/* USER */}
          <div className="flex items-center gap-3">

            <Image
              src={user?.image || "/images/user.png"}
              alt="user"
              width={45}
              height={45}
              className="rounded-full border-2 border-pink-400"
            />

            <div className="hidden md:block">

              <h3 className="font-bold text-gray-900 dark:text-white">

                {user?.name}

              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400">

                {user?.email}

              </p>

            </div>

          </div>

        </div>

      </header>

      {/* MAIN */}
      <div className="flex lg:ml-[280px] p-6 min-h-[calc(100vh-80px)] overflow-y-auto">

        {/* SIDEBAR */}
                    <aside
                className={`fixed top-20 left-0 h-[calc(100vh-80px)] w-[280px] bg-white dark:bg-[#111827] border-r border-gray-200 dark:border-gray-800 flex flex-col justify-between transition-all duration-300 z-40 ${
                    openMenu
                    ? "translate-x-0"
                    : "-translate-x-full"
                } lg:translate-x-0`}
            >

          {/* MENU */}
          <div className="p-5">

            <h3 className="text-gray-400 text-sm font-bold uppercase mb-5">

              Menu

            </h3>

            <div className="space-y-3">

              {
                menuItems.map((item, index) => {

                  const isActive = pathname === item.href;

                  return (

                    <Link
                      key={index}
                      href={item.href}
                      className={`flex items-center gap-3 px-5 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg"
                          : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#1e293b]"
                      }`}
                    >

                      <span className="text-lg">

                        {item.icon}

                      </span>

                      {item.name}

                    </Link>

                  );

                })
              }

            </div>

          </div>

          {/* LOGOUT */}
          <div className="p-5 border-t border-gray-200 dark:border-gray-800">

            <button
              onClick={handleLogout}
              className="flex items-center gap-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 px-5 py-4 rounded-2xl font-semibold transition-all duration-300 w-full"
            >

              <FiLogOut className="text-lg" />

              Logout

            </button>

          </div>

        </aside>

        {/* CONTENT */}
        <main className="flex-1 p-6 overflow-hidden">

          {children}

        </main>

      </div>

    </div>

  );

};

export default DashboardLayout;


// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import { usePathname } from "next/navigation";

// import {
//   FiMenu,
//   FiClipboard,
//   FiPlus,
//   FiHeart,
//   FiLogOut,
//   FiMoon,
//   FiSun,
// } from "react-icons/fi";

// import { authClient } from "@/lib/auth-client";

// const DashboardLayout = ({ children }) => {

//   const pathname = usePathname();

//   const { data: session } = authClient.useSession();

//   const user = session?.user;

//   const [openMenu, setOpenMenu] = useState(true);

//   const [darkMode, setDarkMode] = useState(false);

//   // LOGOUT
//   const handleLogout = async () => {

//     await authClient.signOut();

//   };

//   // MENU ITEMS
//   const menuItems = [

//     {
//       name: "My Requests",
//       href: "/dashboard/my-requests",
//       icon: <FiClipboard />,
//     },

//     {
//       name: "Add Pet",
//       href: "/dashboard/add-pet",
//       icon: <FiPlus />,
//     },

//     {
//       name: "My Listings",
//       href: "/dashboard/my-listing",
//       icon: <FiHeart />,
//     },

//   ];

//   return (

//     <div className="min-h-screen bg-[#f8fafc] dark:bg-[#0f172a] transition-all duration-300">

//       {/* TOP NAVBAR */}
//       <header className="h-20 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827] flex items-center justify-between px-6 sticky top-0 z-50">

//         {/* LEFT */}
//         <div className="flex items-center gap-4">

//           {/* MENU BUTTON */}
//           <button
//             onClick={() => setOpenMenu(!openMenu)}
//             className="lg:hidden text-2xl text-gray-700 dark:text-white"
//           >

//             <FiMenu />

//           </button>

//           {/* LOGO */}
//           <Link
//             href="/"
//             className="flex items-center gap-3"
//           >

//             <Image
//               src="/images/Logo.webp"
//               alt="Logo"
//               width={45}
//               height={45}
//               className="rounded-full"
//             />

//             <h2 className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">

//               PetNest

//             </h2>

//           </Link>

//           {/* BADGE */}
//           <div className="hidden md:flex items-center gap-2 bg-gray-100 dark:bg-[#1e293b] px-4 py-2 rounded-full">

//             <FiClipboard className="text-gray-600 dark:text-gray-300" />

//             <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">

//               Dashboard

//             </span>

//           </div>

//         </div>

//         {/* RIGHT */}
//         <div className="flex items-center gap-5">

//           {/* THEME BUTTON */}
//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className="w-11 h-11 rounded-full bg-gray-100 dark:bg-[#1e293b] flex items-center justify-center text-xl text-gray-700 dark:text-yellow-400 transition-all duration-300"
//           >

//             {
//               darkMode ? <FiSun /> : <FiMoon />
//             }

//           </button>

//           {/* USER */}
//           <div className="flex items-center gap-3">

//             <Image
//               src={user?.image || "/images/user.png"}
//               alt="user"
//               width={45}
//               height={45}
//               className="rounded-full border-2 border-pink-400"
//             />

//             <div className="hidden md:block">

//               <h3 className="font-bold text-gray-900 dark:text-white">

//                 {user?.name}

//               </h3>

//               <p className="text-sm text-gray-500 dark:text-gray-400">

//                 {user?.email}

//               </p>

//             </div>

//           </div>

//         </div>

//       </header>

//       {/* MAIN */}
//       <div className="flex">

//         {/* SIDEBAR */}
//         <aside
//           className={`fixed lg:static top-20 left-0 h-[calc(100vh-80px)] w-[280px] bg-white dark:bg-[#111827] border-r border-gray-200 dark:border-gray-800 flex flex-col justify-between transition-all duration-300 z-40 ${
//             openMenu
//               ? "translate-x-0"
//               : "-translate-x-full lg:translate-x-0"
//           }`}
//         >

//           {/* MENU */}
//           <div className="p-5">

//             <h3 className="text-gray-400 text-sm font-bold uppercase mb-5">

//               Menu

//             </h3>

//             <div className="space-y-3">

//               {
//                 menuItems.map((item, index) => {

//                   const isActive = pathname === item.href;

//                   return (

//                     <Link
//                       key={index}
//                       href={item.href}
//                       className={`flex items-center gap-3 px-5 py-4 rounded-2xl font-semibold transition-all duration-300 ${
//                         isActive
//                           ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg"
//                           : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#1e293b]"
//                       }`}
//                     >

//                       <span className="text-lg">

//                         {item.icon}

//                       </span>

//                       {item.name}

//                     </Link>

//                   );

//                 })
//               }

//             </div>

//           </div>

//           {/* LOGOUT */}
//           <div className="p-5 border-t border-gray-200 dark:border-gray-800">

//             <button
//               onClick={handleLogout}
//               className="flex items-center gap-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 px-5 py-4 rounded-2xl font-semibold transition-all duration-300 w-full"
//             >

//               <FiLogOut className="text-lg" />

//               Logout

//             </button>

//           </div>

//         </aside>

//         {/* CONTENT */}
//         <main className="flex-1 p-6 overflow-hidden">

//           {children}

//         </main>

//       </div>

//     </div>

//   );

// };

// export default DashboardLayout;


// // "use client";

// // import Image from "next/image";
// // import Link from "next/link";
// // import { useState } from "react";

// // import {
// //   FiMenu,
// //   FiClipboard,
// //   FiPlus,
// //   FiHeart,
// //   FiLogOut,
// //   FiMoon,
// //   FiSun,
// // } from "react-icons/fi";

// // import { authClient } from "@/lib/auth-client";

// // const DashboardLayout = ({ children }) => {

// //   const { data: session } = authClient.useSession();

// //   const user = session?.user;

// //   const [openMenu, setOpenMenu] = useState(true);

// //   // LOGOUT
// //   const handleLogout = async () => {

// //     await authClient.signOut();

// //   };

// //   return (

// //     <div className="min-h-screen bg-[#f8fafc] dark:bg-[#0f172a] transition-all duration-300">

// //       {/* TOP NAVBAR */}
// //       <header className="h-20 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827] flex items-center justify-between px-6 sticky top-0 z-50">

// //         {/* LEFT */}
// //         <div className="flex items-center gap-4">

// //           {/* MENU BUTTON */}
// //           <button
// //             onClick={() => setOpenMenu(!openMenu)}
// //             className="lg:hidden text-2xl text-gray-700 dark:text-white"
// //           >
// //             <FiMenu />
// //           </button>

// //           {/* LOGO */}
// //           <Link
// //             href="/"
// //             className="flex items-center gap-3"
// //           >

// //             <Image
// //               src="/images/Logo.webp"
// //               alt="Logo"
// //               width={45}
// //               height={45}
// //               className="rounded-full"
// //             />

// //             <h2 className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
// //               PetNest
// //             </h2>

// //           </Link>

// //           {/* DASHBOARD BADGE */}
// //           <div className="hidden md:flex items-center gap-2 bg-gray-100 dark:bg-[#1e293b] px-4 py-2 rounded-full">

// //             <FiClipboard className="text-gray-600 dark:text-gray-300" />

// //             <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
// //               Dashboard
// //             </span>

// //           </div>

// //         </div>

// //         {/* RIGHT */}
// //         <div className="flex items-center gap-5">

// //           {/* THEME BUTTON */}
// //           <button className="text-xl text-gray-700 dark:text-yellow-400">

// //             <FiMoon />

// //           </button>

// //           {/* USER */}
// //           <div className="flex items-center gap-3">

// //             <Image
// //               src={user?.image || "/images/user.png"}
// //               alt="user"
// //               width={45}
// //               height={45}
// //               className="rounded-full border-2 border-pink-400"
// //             />

// //             <div className="hidden md:block">

// //               <h3 className="font-bold text-gray-900 dark:text-white">
// //                 {user?.name}
// //               </h3>

// //               <p className="text-sm text-gray-500 dark:text-gray-400">
// //                 {user?.email}
// //               </p>

// //             </div>

// //           </div>

// //         </div>

// //       </header>

// //       {/* MAIN */}
// //       <div className="flex">

// //         {/* SIDEBAR */}
// //         <aside
// //           className={`fixed lg:static top-20 left-0 h-[calc(100vh-80px)] w-[270px] bg-white dark:bg-[#111827] border-r border-gray-200 dark:border-gray-800 flex flex-col justify-between transition-all duration-300 z-40 ${
// //             openMenu
// //               ? "translate-x-0"
// //               : "-translate-x-full lg:translate-x-0"
// //           }`}
// //         >

// //           {/* MENU */}
// //           <div className="p-5">

// //             <h3 className="text-gray-400 text-sm font-bold uppercase mb-5">
// //               Menu
// //             </h3>

// //             <div className="space-y-3">

// //               {/* MY REQUESTS */}
// //               <Link
// //                 href="/my-requests"
// //                 className="flex items-center gap-3 bg-pink-500 text-white px-5 py-4 rounded-2xl font-semibold shadow-lg"
// //               >

// //                 <FiClipboard className="text-lg" />

// //                 My Requests

// //               </Link>

// //               {/* ADD PET */}
// //               <Link
// //                 href="/dashboard/add-pet"
// //                 className="flex items-center gap-3 px-5 py-4 rounded-2xl text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#1e293b] transition-all duration-300 font-semibold"
// //               >

// //                 <FiPlus className="text-lg" />

// //                 Add Pet

// //               </Link>

// //               {/* MY LISTINGS */}
// //               <Link
// //                 href="/dashboard/my-listings"
// //                 className="flex items-center gap-3 px-5 py-4 rounded-2xl text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#1e293b] transition-all duration-300 font-semibold"
// //               >

// //                 <FiHeart className="text-lg" />

// //                 My Listings

// //               </Link>

// //             </div>

// //           </div>

// //           {/* LOGOUT */}
// //           <div className="p-5 border-t border-gray-200 dark:border-gray-800">

// //             <button
// //               onClick={handleLogout}
// //               className="flex items-center gap-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 px-5 py-4 rounded-2xl font-semibold transition-all duration-300 w-full"
// //             >

// //               <FiLogOut className="text-lg" />

// //               Logout

// //             </button>

// //           </div>

// //         </aside>

// //         {/* PAGE CONTENT */}
// //         <main className="flex-1 p-6">

// //           {children}

// //         </main>

// //       </div>

// //     </div>

// //   );
// // };

// // export default DashboardLayout;
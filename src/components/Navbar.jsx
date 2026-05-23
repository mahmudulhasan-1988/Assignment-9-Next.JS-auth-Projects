"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

import NavLink from "./NavLink";
import ThemeToggle from "./ThemeToggle";

import {
  FiLogOut,
  FiUser,
  FiGrid,
  FiChevronDown,
} from "react-icons/fi";

import { authClient } from "@/lib/auth-client";

const Navbar = () => {

  const pathname = usePathname();

  // DASHBOARD হলে NAVBAR HIDE
  if (pathname.startsWith("/dashboard")) {
    return null;
  }

  // SESSION
  const { data: session } = authClient.useSession();

  const user = session?.user;

  // DROPDOWN
  const [open, setOpen] = useState(false);

  // LOGOUT
  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (

    <nav className='sticky top-0 z-50 w-full border-b border-gray-200 dark:border-[#1e293b] bg-white/80 dark:bg-[#0b1120]/90 backdrop-blur-xl shadow-lg transition-all duration-300'>

      <div className='max-w-7xl mx-auto px-5 lg:px-10 h-24 flex items-center justify-between'>

        {/* LEFT */}
        <div className='flex items-center gap-3'>

          <Link
            href="/"
            className='flex items-center gap-3'
          >

            <Image
              src={"/images/Logo.webp"}
              alt="Pets Logo"
              width={70}
              height={70}
            />

            <h2 className='text-3xl font-extrabold bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent uppercase'>
              PetNest
            </h2>

          </Link>

        </div>

        {/* CENTER MENU */}
        <ul className='hidden lg:flex items-center gap-8 font-semibold text-[17px]'>

          <li>
            <NavLink href={'/'}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink href={'/all-petnestcard'}>
              All Pets
            </NavLink>
          </li>

      </ul>

        {/* RIGHT */}
        <div className='flex items-center gap-4'>

          <ThemeToggle />

          {
            user ? (

              <div className='relative'>

                {/* USER BUTTON */}
                <button
                  onClick={() => setOpen(!open)}
                  className='flex items-center gap-3'
                >

                  <Image
                    width={45}
                    height={45}
                    src={
                      user?.image ||
                      "/images/user.png"
                    }
                    alt={user?.name}
                    className='w-12 h-12 rounded-full border-2 border-pink-400 object-cover'
                  />

                  <div className='hidden md:block text-left'>

                    <h2 className='font-bold text-black dark:text-white text-sm'>
                      {user?.name}
                    </h2>

                  </div>

                  <FiChevronDown className='text-black dark:text-white' />

                </button>

                {/* DROPDOWN */}
                {
                  open && (

                    <div className='absolute right-0 mt-4 w-[300px] rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0f172a] shadow-2xl'>

                      {/* TOP */}
                      <div className='p-5 border-b border-gray-200 dark:border-gray-700'>

                        <h2 className='font-bold text-black dark:text-white text-lg'>
                          {user?.name}
                        </h2>

                        <p className='text-gray-500 dark:text-gray-300 text-sm mt-1 break-all'>
                          {user?.email}
                        </p>

                      </div>

                      {/* MENU */}
                      <div className='py-2'>

                        <Link
                          href="/dashboard/my-requests"
                          className='flex items-center gap-3 px-5 py-4 hover:bg-gray-100 dark:hover:bg-[#1e293b] transition-all duration-300 text-black dark:text-white font-medium'
                        >

                          <FiGrid className='text-lg' />

                          Dashboard

                        </Link>

                        <Link
                          href="/profile"
                          className='flex items-center gap-3 px-5 py-4 hover:bg-gray-100 dark:hover:bg-[#1e293b] transition-all duration-300 text-black dark:text-white font-medium'
                        >

                          <FiUser className='text-lg' />

                          Profile

                        </Link>

                        <button
                          onClick={handleSignOut}
                          className='w-full flex items-center gap-3 px-5 py-4 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all duration-300 text-red-500 font-medium'
                        >

                          <FiLogOut className='text-lg' />

                          Logout

                        </button>

                      </div>

                    </div>

                  )
                }

              </div>

            ) : (

              <div className='flex items-center gap-3'>

                <NavLink href="/login">
                  Login
                </NavLink>

                <Link
                  href="/signup"
                  className='bg-gradient-to-r from-pink-500 to-cyan-400 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300'
                >

                  Sign Up

                </Link>

              </div>

            )
          }

        </div>

      </div>

    </nav>

  );
};

export default Navbar;

// 'use client'

// import Image from 'next/image';
// import Link from 'next/link';
// import React, { useState } from 'react';

// import NavLink from './NavLink';
// import ThemeToggle from './ThemeToggle';

// import {
//     Button,
// } from '@heroui/react';

// import {
//     FiLogOut,
//     FiUser,
//     FiGrid,
//     FiChevronDown,
// } from "react-icons/fi";

// import { authClient } from '@/lib/auth-client';

// const Navbar = () => {

//     // SESSION
//     const { data: session } = authClient.useSession();

//     const user = session?.user;

//     // DROPDOWN
//     const [open, setOpen] = useState(false);

//     // LOGOUT
//     const handleSignOut = async () => {

//         await authClient.signOut();

//     };

//     return (

//         <nav className='sticky top-0 z-50 w-full border-b border-gray-200 dark:border-[#1e293b] bg-white/80 dark:bg-[#0b1120]/90 backdrop-blur-xl shadow-lg transition-all duration-300'>

//             <div className='max-w-7xl mx-auto px-5 lg:px-10 h-24 flex items-center justify-between'>

//                 {/* LEFT */}
//                 <div className='flex items-center gap-3'>

//                     <Link
//                         href="/"
//                         className='flex items-center gap-3'
//                     >

//                         <Image
//                             src={"/images/Logo.webp"}
//                             alt="Pets Logo"
//                             width={70}
//                             height={70}
//                         />

//                         <h2 className='text-3xl font-extrabold bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent uppercase'>

//                             PetNest

//                         </h2>

//                     </Link>

//                 </div>

//                 {/* CENTER MENU */}
//                 <ul className='hidden lg:flex items-center gap-8 font-semibold text-[17px]'>

//                     <li>
//                         <NavLink href={'/'}>
//                             Home
//                         </NavLink>
//                     </li>

//                     <li>
//                         <NavLink href={'/all-petnestcard'}>
//                             All Pets
//                         </NavLink>
//                     </li>

//                     <li>
//                         <NavLink href={'/my-requests'}>
//                             My Requests
//                         </NavLink>
//                     </li>

//                     <li>
//                         <NavLink href={'/dashboard/add-pet'}>
//                             Add Pet
//                         </NavLink>
//                     </li>

//                 </ul>

//                 {/* RIGHT */}
//                 <div className='flex items-center gap-4'>

//                     {/* THEME */}
//                     <ThemeToggle />

//                     {
//                         user ? (

//                             <div className='relative'>

//                                 {/* USER BUTTON */}
//                                 <button
//                                     onClick={() => setOpen(!open)}
//                                     className='flex items-center gap-3'
//                                 >

//                                     {/* AVATAR */}
//                                     <Image
//                                         width={45}
//                                         height={45}
//                                         src={
//                                             user?.image ||
//                                             "/images/user.png"
//                                         }
//                                         alt={user?.name}
//                                         className='w-12 h-12 rounded-full border-2 border-pink-400 object-cover'
//                                     />

//                                     {/* NAME */}
//                                     <div className='hidden md:block text-left'>

//                                         <h2 className='font-bold text-black dark:text-white text-sm'>

//                                             {user?.name}

//                                         </h2>

//                                     </div>

//                                     <FiChevronDown className='text-black dark:text-white' />

//                                 </button>

//                                 {/* DROPDOWN */}
//                                 {
//                                     open && (

//                                         <div className='absolute right-0 mt-4 w-[300px] rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0f172a] shadow-2xl'>

//                                             {/* TOP */}
//                                             <div className='p-5 border-b border-gray-200 dark:border-gray-700'>

//                                                 <h2 className='font-bold text-black dark:text-white text-lg'>

//                                                     {user?.name}

//                                                 </h2>

//                                                 <p className='text-gray-500 dark:text-gray-300 text-sm mt-1 break-all'>

//                                                     {user?.email}

//                                                 </p>

//                                             </div>

//                                             {/* MENU */}
//                                             <div className='py-2'>

//                                                 {/* DASHBOARD */}
//                                                 <Link
//                                                     href="/dashboard/my-requests"
//                                                     className='flex items-center gap-3 px-5 py-4 hover:bg-gray-100 dark:hover:bg-[#1e293b] transition-all duration-300 text-black dark:text-white font-medium'
//                                                 >

//                                                     <FiGrid className='text-lg' />

//                                                     Dashboard

//                                                 </Link>

//                                                 {/* PROFILE */}
//                                                 <Link
//                                                     href="/profile"
//                                                     className='flex items-center gap-3 px-5 py-4 hover:bg-gray-100 dark:hover:bg-[#1e293b] transition-all duration-300 text-black dark:text-white font-medium'
//                                                 >

//                                                     <FiUser className='text-lg' />

//                                                     Profile

//                                                 </Link>

//                                                 {/* LOGOUT */}
//                                                 <button
//                                                     onClick={handleSignOut}
//                                                     className='w-full flex items-center gap-3 px-5 py-4 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all duration-300 text-red-500 font-medium'
//                                                 >

//                                                     <FiLogOut className='text-lg' />

//                                                     Logout

//                                                 </button>

//                                             </div>

//                                         </div>

//                                     )
//                                 }

//                             </div>

//                         ) : (

//                             <div className='flex items-center gap-3'>

//                                 {/* LOGIN */}
//                                 <NavLink href="/login">
//                                     Login
//                                 </NavLink>

//                                 {/* SIGNUP */}
//                                 <Link
//                                     href="/signup"
//                                     className='bg-gradient-to-r from-pink-500 to-cyan-400 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300'
//                                 >

//                                     Sign Up

//                                 </Link>

//                             </div>

//                         )
//                     }

//                 </div>

//             </div>

//         </nav>

//     );
// };

// export default Navbar;

// // 'use client'

// // import Image from 'next/image';
// // import Link from 'next/link';
// // import React from 'react';


// // import NavLink from './NavLink';
// // import ThemeToggle from './ThemeToggle';

// // import { Avatar, Button } from '@heroui/react';

// // import { authClient } from '@/lib/auth-client';

// // const Navbar = () => {

// //     // SESSION
// //     const { data: session } = authClient.useSession();

// //     const user = session?.user;

// //     // LOGOUT
// //     const handleSignOut = async () => {

// //         await authClient.signOut();

// //     };

// //     return (

// //         <nav className='sticky top-0 z-50 w-full border-b border-gray-200 dark:border-[#1e293b] bg-white/80 dark:bg-[#0b1120]/90 backdrop-blur-xl shadow-lg transition-all duration-300'>

// //             <div className='max-w-7xl mx-auto px-5 lg:px-10 h-24 flex items-center justify-between'>

// //                 {/* LEFT */}
// //                 <div className='flex items-center gap-3'>

// //                     <Link
// //                         href="/"
// //                         className='flex items-center gap-3'
// //                     >

// //                         <Image
// //                             src={"/images/Logo.webp"}
// //                             alt="Pets Logo"
// //                             width={70}
// //                             height={70}
// //                         />

// //                         <h2 className='text-3xl font-extrabold bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent'>

// //                             PET NEST

// //                         </h2>

// //                     </Link>

// //                 </div>

// //                 {/* CENTER MENU */}
// //                 <ul className='hidden lg:flex items-center gap-8 font-semibold text-[17px]'>

// //                     <li>
// //                         <NavLink href={'/'}>
// //                             Home
// //                         </NavLink>
// //                     </li>

// //                     <li>
// //                         <NavLink href={'/all-petnestcard'}>
// //                             All Pets
// //                         </NavLink>
// //                     </li>

// //                     <li>
// //                         <NavLink href={'/my-requests'}>
// //                             My Requests
// //                         </NavLink>
// //                     </li>

// //                     <li>
// //                         <NavLink href={'/add-pet'}>
// //                             Add Pet
// //                         </NavLink>
// //                     </li>

// //                 </ul>

// //                 {/* RIGHT */}
// //                 <div className='flex items-center gap-4'>

// //                     {/* THEME TOGGLE */}
// //                     <ThemeToggle />

// //                     <ul className='flex items-center gap-3'>

// //                         {
// //                             user ? (

// //                                 <>

// //                                     {/* PROFILE */}
// //                                     <li>
                                        
// //                                         <NavLink href="/profile">
// //                                             Profile
// //                                         </NavLink>

// //                                     </li>

// //                                     {/* AVATAR */}
// //                                     <li>
// //                                     {console.log(user.image)}
// //                                         <Image width={20} height={20}                                        
// //                                             src={user?.image}
// //                                             alt={user?.name}
// //                                             className='w-12 h-12 border-2 rounded-full border-pink-400'
// //                                         />

// //                                     </li>

// //                                     {/* LOGOUT */}
// //                                     <li>

// //                                         <Button
// //                                             onClick={handleSignOut}
// //                                             className='bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full px-6 font-semibold hover:scale-105 transition-all duration-300'
// //                                         >

// //                                             Logout

// //                                         </Button>

// //                                     </li>

// //                                 </>

// //                             ) : (

// //                                 <>

// //                                     {/* LOGIN */}
// //                                     <li>

// //                                         <NavLink href="/login">
// //                                             Login
// //                                         </NavLink>

// //                                     </li>

// //                                     {/* SIGNUP */}
// //                                     <li>

// //                                         <Link
// //                                             href="/signup"
// //                                             className='bg-gradient-to-r from-pink-500 to-cyan-400 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300'
// //                                         >

// //                                             Sign Up

// //                                         </Link>

// //                                     </li>

// //                                 </>

// //                             )
// //                         }

// //                     </ul>

// //                 </div>

// //             </div>

// //         </nav>

// //     );
// // };

// // export default Navbar;



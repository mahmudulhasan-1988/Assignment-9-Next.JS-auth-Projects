'use client'

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


import NavLink from './NavLink';
import ThemeToggle from './ThemeToggle';

import { Avatar, Button } from '@heroui/react';

import { authClient } from '@/lib/auth-client';

const Navbar = () => {

    // SESSION
    const { data: session } = authClient.useSession();

    const user = session?.user;

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

                        <h2 className='text-3xl font-extrabold bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent'>

                            PET NEST

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

                    <li>
                        <NavLink href={'/my-requests'}>
                            My Requests
                        </NavLink>
                    </li>

                    <li>
                        <NavLink href={'/add-pet'}>
                            Add Pet
                        </NavLink>
                    </li>

                </ul>

                {/* RIGHT */}
                <div className='flex items-center gap-4'>

                    {/* THEME TOGGLE */}
                    <ThemeToggle />

                    <ul className='flex items-center gap-3'>

                        {
                            user ? (

                                <>

                                    {/* PROFILE */}
                                    <li>
                                        
                                        <NavLink href="/profile">
                                            Profile
                                        </NavLink>

                                    </li>

                                    {/* AVATAR */}
                                    <li>

                                        <Avatar referrerPolicy='no-referrer'
                                            src={user?.image}
                                            name={user?.name}
                                            className='w-12 h-12 border-2 border-pink-400'
                                        />

                                    </li>

                                    {/* LOGOUT */}
                                    <li>

                                        <Button
                                            onClick={handleSignOut}
                                            className='bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full px-6 font-semibold hover:scale-105 transition-all duration-300'
                                        >

                                            Logout

                                        </Button>

                                    </li>

                                </>

                            ) : (

                                <>

                                    {/* LOGIN */}
                                    <li>

                                        <NavLink href="/login">
                                            Login
                                        </NavLink>

                                    </li>

                                    {/* SIGNUP */}
                                    <li>

                                        <Link
                                            href="/signup"
                                            className='bg-gradient-to-r from-pink-500 to-cyan-400 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300'
                                        >

                                            Sign Up

                                        </Link>

                                    </li>

                                </>

                            )
                        }

                    </ul>

                </div>

            </div>

        </nav>

    );
};

export default Navbar;





// 'use client'
// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';
// import NavLink from './NavLink';
// import { Avatar, Button } from '@heroui/react';
// import { authClient } from '@/lib/auth-client';

// const Navbar = () => {
//     // Login function name and password
//     const {data: session,} = authClient.useSession();
//     const user = session?.user
        
// console.log(user);

//     // Logout function
//     const handleSignOut = async () => {
//         await authClient.signOut();
        
//     };
//     return (
//         <nav className='flex justify-between items-center px-10 shadow-2xl mb-10'>
//             <div className=' flex items-center gap-2'>
//                 <Link href="/">
//                     <Image src={"/images/Logo.webp"} alt="Pets Logo" width={80} height={50} />
//                 </Link>
//                 <p className='text-3xl font-bold text-[#ff5252]'>PET NEST</p>
//             </div>
//             <ul className=' flex gap-5'>
//                 <li>
//                     <NavLink href={'/'}>Home</NavLink>
//                 </li>
//                 <li>
//                     <NavLink href={'/all-petnestcard'}>All Pets</NavLink>
//                 </li>
//                 <li>
//                     <NavLink href={'/my-requests'}>My Requests</NavLink>
//                 </li>
//                 <li>
//                     <NavLink href={'/add-pet'}>Add Pet</NavLink>
//                 </li>
//             </ul>

//             <ul className=' flex gap-3 items-center'>
//                 <li><NavLink href="/profile">Profile</NavLink></li>
                
//                 {user ? <>
//                     <li>
//                         <Avatar>
//                             <Avatar.Image referrerPolicy='no-referrer' alt="John Doe" src={user?.image} />
//                             <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
//                         </Avatar>
//                     </li>
//                     <li>
//                         <Button onClick={handleSignOut} variant='danger' className={'rounded-none'}>Logout</Button>
//                     </li>

//                 </> : <>
//                     <li><NavLink href="/login">Login</NavLink></li>
//                     <li><NavLink href="/signup">Sign Up</NavLink></li>
//                 </>}
                
//             </ul>
//         </nav>
//     );
// };

// export default Navbar;

















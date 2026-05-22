'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';
import { Avatar, Button } from '@heroui/react';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
    // Login function name and password
    const {data: session,} = authClient.useSession();
    const user = session?.user
        
console.log(user);

    // Logout function
    const handleSignOut = async () => {
        await authClient.signOut();
        
    };
    return (
        <nav className='flex justify-between items-center px-10 shadow-2xl mb-10'>
            <div className=' flex items-center gap-2'>
                <Link href="/">
                    <Image src={"/images/Logo.webp"} alt="Pets Logo" width={80} height={50} />
                </Link>
                <p className='text-3xl font-bold text-[#ff5252]'>PET NEST</p>
            </div>
            <ul className=' flex gap-5'>
                <li>
                    <NavLink href={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink href={'/all-petnestcard'}>All Pets</NavLink>
                </li>
                <li>
                    <NavLink href={'/my-requests'}>My Requests</NavLink>
                </li>
                <li>
                    <NavLink href={'/add-pet'}>Add Pet</NavLink>
                </li>
            </ul>

            <ul className=' flex gap-3 items-center'>
                <li><NavLink href="/profile">Profile</NavLink></li>
                
                {user ? <>
                    <li>
                        <Avatar>
                            <Avatar.Image referrerPolicy='no-referrer' alt="John Doe" src={user?.image} />
                            <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
                        </Avatar>
                    </li>
                    <li>
                        <Button onClick={handleSignOut} variant='danger' className={'rounded-none'}>Logout</Button>
                    </li>

                </> : <>
                    <li><NavLink href="/login">Login</NavLink></li>
                    <li><NavLink href="/signup">Sign Up</NavLink></li>
                </>}
                
            </ul>
        </nav>
    );
};

export default Navbar;

















// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import React, { useEffect, useState } from 'react';
// import NavLink from './NavLink';
// import { Avatar, Button } from '@heroui/react';
// import { authClient } from '@/lib/auth-client';
// import { FiSun, FiMoon } from 'react-icons/fi';

// const Navbar = () => {
//   const { data: session } = authClient.useSession();
//   const user = session?.user;

//   const [theme, setTheme] = useState('light');



//   // LOAD THEME
//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme') || 'light';
//     setTheme(savedTheme);
//     document.documentElement.classList.toggle('dark', savedTheme === 'dark');
//   }, []);

//   // TOGGLE THEME
//   const toggleTheme = () => {
//      const newTheme = theme === "light" ? "dark" : "light";

//   setTheme(newTheme);
//   localStorage.setItem("theme", newTheme);

//   document.documentElement.classList.remove("light", "dark");
//   document.documentElement.classList.add(newTheme);
//   };

//   // LOGOUT
//   const handleSignOut = async () => {
//     await authClient.signOut();
//   };

//   return (
//     <nav className="flex justify-between items-center px-10 py-4 shadow-xl mb-10 bg-white dark:bg-gray-900 transition-all duration-300">

//       {/* LOGO */}
//       <div className="flex items-center gap-2">
//         <Link href="/">
//           <Image src="/images/Logo.webp" alt="Pets Logo" width={80} height={50} />
//         </Link>
//         <p className="text-3xl font-bold text-[#ff5252]">PET NEST</p>
//       </div>

//       {/* MENU */}
//       <ul className="flex gap-5 text-gray-800 dark:text-white">
//         <li><NavLink href="/">Home</NavLink></li>
//         <li><NavLink href="/all-petnestcard">All Pets</NavLink></li>
//         <li><NavLink href="/my-requests">My Requests</NavLink></li>
//         <li><NavLink href="/add-pet">Add Pet</NavLink></li>
//       </ul>

//       {/* RIGHT SIDE */}
//       <ul className="flex gap-3 items-center">

//         {/* THEME TOGGLE BUTTON */}
//         <li>
//           <Button
//             onClick={toggleTheme}
//             className="rounded-full bg-gray-100 dark:bg-gray-800 text-black dark:text-white px-4"
//           >
//             {theme === 'light' ? (
//               <FiMoon className="text-lg" />
//             ) : (
//               <FiSun className="text-lg" />
//             )}
//           </Button>
//         </li>

//         <li><NavLink href="/profile">Profile</NavLink></li>

//         {user ? (
//           <>
//             <li>
//               <Avatar>
//                 <Avatar.Image
//                   referrerPolicy="no-referrer"
//                   alt="user"
//                   src={user?.image}
//                 />
//                 <Avatar.Fallback>
//                   {user?.name?.charAt(0)}
//                 </Avatar.Fallback>
//               </Avatar>
//             </li>

//             <li>
//               <Button
//                 onClick={handleSignOut}
//                 variant="danger"
//                 className="rounded-none"
//               >
//                 Logout
//               </Button>
//             </li>
//           </>
//         ) : (
//           <>
//             <li><NavLink href="/login">Login</NavLink></li>
//             <li><NavLink href="/signup">Sign Up</NavLink></li>
//           </>
//         )}

//       </ul>

//     </nav>
//   );
// };

// export default Navbar;



'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children}) => {
    const pathname = usePathname();
    

    const isActive = href === pathname;

    return (
        <Link href={href}
        className={`${isActive ? "rounded-full border-[#ff6b6b] text-[#ff5252] hover:bg-[#ff5252] hover:text-white px-2 py-2 text-lg font-semibold transition-all duration-300 shadow-md" : ""}`}>
            {children}
        </Link>
    )
};

export default NavLink;









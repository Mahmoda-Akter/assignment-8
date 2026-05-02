"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Mylink = ({href,children,className}) => {
    const pathname=usePathname()
    // console.log(pathnaem)

    const isactive=href===pathname
    return (
        <Link href={href} className={`${isactive? "border-b-2 border-b-amber-500":""} ${className}`}>{children}</Link>
    );
};

export default Mylink;
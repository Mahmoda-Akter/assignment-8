"use client"
import Link from 'next/link';
import React from 'react';
import Mylink from '../mynavlink/Mylink';
import { authClient } from '@/lib/auth-client';

const Navber = () => {

    const { data: session } = authClient.useSession()
    const user=session?.user
    console.log(user)
    return (
        <div >
            <div className="navbar w-[80%] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><Mylink href={"/"}>Home</Mylink></li>
                            <li><Mylink href={"/All-teils"}>All Tiles</Mylink></li>
                            <li><Mylink href={"/profile"}>My Profile</Mylink></li>

                        </ul>
                    </div>
                    <Link href={"/"} className='sm:text-xs md:text-2xl lg:text-2xl font-bold text-amber-400'>tile gallery</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Mylink href={"/"} className="text-amber-500">Home</Mylink></li>
                        <li><Mylink href={"/All-teils"}>All Tiles</Mylink></li>
                        <li><Mylink href={"/profile"}>My Profile</Mylink></li>
                    </ul>
                </div>
                {
                    user? (<div className="navbar-end gap-2">
                    <h2 className='hidden sm:block'>{user.name}</h2>
                    <img src={user.image} className='w-[30px] h-[30px] rounded-full'/>
                    <button className='btn btn-primary'onClick={async()=> await authClient.signOut()}>Logout</button>
                </div>):(<button className='btn btn-primary'><Link href={"/sing-up"}>Login</Link></button>)
                }
                
            </div>
        </div>
    );
};

export default Navber;
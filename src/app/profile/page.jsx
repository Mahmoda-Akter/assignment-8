"use client"
import Navber from '@/component/Navbar/Navber';
import Updateuser from '@/component/Updateuser';
import { authClient } from '@/lib/auth-client';
import React from 'react';

const Profilepage = () => {
    const { data: session } = authClient.useSession()
    const user = session?.user
    console.log(user, "from user")
    return (
        <div>
            <Navber></Navber>
            <div className='flex justify-center items-center mt-10'>
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src={user?.image}
                            alt="userimg"
                            className="w-[50px] h-[50px] rounded-full " />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{user?.name}</h2>
                        <p>{user?.email}</p>
                        <div className="card-actions">
                            <Updateuser></Updateuser>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profilepage;
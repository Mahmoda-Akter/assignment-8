import Link from 'next/link';
import React from 'react';

const Notpound = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center bg-black'>
            <h1 className='text-red-500'>Page not found</h1>
            <h1 className='text-red-500'>Pleace check the pathname</h1>
            <button className='btn btn-primary'><Link href={"/"}>Back to home</Link></button>
        </div>
    );
};

export default Notpound;
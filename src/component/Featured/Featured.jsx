"use client"
import { useState, useEffect } from "react";
import Card from '@/Ui/Card';
import React from 'react';

const fetchData = async () => {
    const res = await fetch('./data.json');
    const data = await res.json();
    return data;
};

// const featchdata = async () => {
//     const res = await fetch('https://assignment-8-two-inky.vercel.app/data.json')
//     const data = await res.json()
//     return data

// }

const Featured = () => {
    const [data, setData] = useState([]);
    
        useEffect(() => {
            fetchData().then((result) => {
                setData(result);
            });
        }, []);

    const finaldata = data
    const top4 = finaldata.slice(0,4)
    console.log(top4)
    console.log(finaldata.length)

    return (
        <div className='w-[90%] mx-auto '>
            <h1 className='text-3xl text-center font-bold text-amber-500 mt-10'>Featured Tiles</h1>

            {/* <h1>Top most poupler teils here</h1> */}
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10'>
                {
                    top4.map(item => <Card key={item.id} item={item}></Card>)
                }
            </div>
        </div>
    );
};

export default Featured;
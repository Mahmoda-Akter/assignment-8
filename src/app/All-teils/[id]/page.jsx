"use client"
import { useState, useEffect } from "react";
import Navber from '@/component/Navbar/Navber';
import { useParams } from "next/navigation";

const fetchData = async () => {
    const res = await fetch('/data.json'); 
    const data = await res.json();
    return data;
};

const DetailsPage = () => {
    const [data, setData] = useState([]);
    const params = useParams();
    const id = params.id;

    useEffect(() => {
        fetchData().then((result) => {
            setData(result);
        });
    }, []);

    
    const finditem = data.find(item => String(item.id) === String(id));

    if (!finditem) return null; 

    return (
        <div>
            <Navber />
            <div className='w-[80%] mx-auto mt-15'>
                <div className="card bg-base-100 w-full shadow-sm sm:flex-col md:flex-row">
                    <figure className='md:w-1/2 w-full'>
                        <img
                            src={finditem.image}
                            alt={finditem.title} />
                    </figure>
                    <div className="card-body md:w-1/2 w-full">
                        <h2 className="card-title">{finditem.title}</h2>
                        <h2 className="card-title italic text-amber-500">{finditem.category}</h2>
                        <p>{finditem.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;
// "use client"
// import { useState, useEffect } from "react";
// import Navber from '@/component/Navbar/Navber';
// import React from 'react';
// import { useParams } from "next/navigation";




// const fetchData = async () => {
//     const res = await fetch('./data.json');
//     const data = await res.json();
//     return data;
// };

// // const featchdata = async () => {
// //     const res = await fetch('https://assignment-8-two-inky.vercel.app/data.json')
// //     const data = await res.json()
// //     return data

// // }

// const detailspage = () => {
//     const [data, setData] = useState([]);
//     const params = useParams();
//     useEffect(() => {
//         fetchData().then((result) => {
//             setData(result);
//         });
//     }, []);

//     // const { id } = params
//     // console.log(id)
//     const id=params.id
//     console.log(id)

//     const finaldata = data
//     const finditem = finaldata.find(item => item.id === id)
//     console.log(finditem)
//     return (
//         <div>
//             <Navber></Navber>
//             <div className='w-[80%] mx-auto mt-15'>
//                 <div className="card bg-base-100 w-full shadow-sm sm:flex-col md:flex-row">
//                     <figure className='md:w-1/2 w-full '>
//                         <img
//                             src={finditem.image}
//                             alt={finditem.title} />
//                     </figure>
//                     <div className="card-body w-1/2 w-full">
//                         <h2 className="card-title">{finditem.title}</h2>
//                         <h2 className="card-title italic text-amber-500">{finditem.category}</h2>
//                         <p>"{finditem.description}</p>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default detailspage;
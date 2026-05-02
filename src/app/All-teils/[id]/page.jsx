import Navber from '@/component/Navbar/Navber';
import React from 'react';


const featchdata = async () => {
    const res = await fetch('https://assignment-8-two-inky.vercel.app/data.json')
    const data = await res.json()
    return data

}

const detailspage = async ({ params }) => {


    const { id } = await params
    console.log(id)

    const finaldata = await featchdata()
    const finditem = finaldata.find(item => item.id === id)
    console.log(finditem)
    return (
        <div>
            <Navber></Navber>
            <div className='w-[80%] mx-auto mt-15'>
                <div className="card bg-base-100 w-full shadow-sm sm:flex-col md:flex-row">
                    <figure className='md:w-1/2 w-full '>
                        <img
                            src={finditem.image}
                            alt={finditem.title} />
                    </figure>
                    <div className="card-body w-1/2 w-full">
                        <h2 className="card-title">{finditem.title}</h2>
                        <h2 className="card-title italic text-amber-500">{finditem.category}</h2>
                        <p>"{finditem.description}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default detailspage;
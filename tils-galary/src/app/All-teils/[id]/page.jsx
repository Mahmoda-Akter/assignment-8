import Navber from '@/component/Navbar/Navber';
import React from 'react';


const featchdata = async () => {
    const res = await fetch('http://localhost:3000/data.json')
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
            <div className='w-[80%] mx-auto'>
                <div className="card bg-base-100 w-full shadow-sm">
                    <figure className='w-full h-[300px]'>
                        <img
                            src={finditem.image}
                            alt={finditem.title} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{finditem.title}</h2>
                        <p>"{finditem.description}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default detailspage;
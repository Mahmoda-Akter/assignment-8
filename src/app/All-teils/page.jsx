"use client"
import Footer from '@/component/Footer/Footer';
import Navber from '@/component/Navbar/Navber';
import Card from '@/Ui/Card';
import React, { useEffect, useState } from 'react';


const featchdata = async () => {


    const res = await fetch('https://assignment-8-two-inky.vercel.app/data.json')
    const data = await res.json()
    return data

}


const allteilspage = () => {
    const [filterdata, setfilterdata] = useState([])
    const [search, setsearch] = useState("")

    useEffect(() => {
        const loaddata = async () => {
            const finaldata = await featchdata()
            setfilterdata(finaldata)

        }
        loaddata()
    }, [])


    // const filterdatas=finaldata.filter(filteritem=>)

    return (

        <div>
            <Navber></Navber>
            <div className='w-[80%] mx-auto'>
                
                <input type="text" placeholder="Search here" value={search} onChange={(e) => setsearch(e.target.value)} className="input mt-5" />
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10'>
                    {
                        filterdata.filter(itemdata => itemdata.title.toLowerCase().includes(search.toLowerCase()))
                            .map(item => <Card key={item.id} item={item}></Card>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default allteilspage;
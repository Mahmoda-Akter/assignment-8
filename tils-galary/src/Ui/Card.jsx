import Link from 'next/link';
import React from 'react';

const Card = ({ item }) => {
    return (
        <div className=''>
            <div className="card bg-base-100 w-full shadow-sm transition duration-300 hover:shadow-xl hover:-translate-y-3">
                <figure>
                    <img
                        className='w-full transition duration-300 hover: scale-105'
                        src={item.image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{item.title}</h2>
                    <p className='line-clamp-2'>{item.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-dash btn-warning"><Link href={`/All-teils/${item.id}`}>View Details</Link></button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Card;
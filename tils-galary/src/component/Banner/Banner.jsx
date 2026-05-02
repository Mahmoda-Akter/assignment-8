import Link from 'next/link';
import React from 'react';
import Marquees from '../Marquee/Marquees';

const Banner = () => {
    return (
        <div>
            <div
                className="hero h-[80vh] bg-cover bg-center "
                style={{
                    
                    backgroundImage:
                        "url(https://www.roccia.com/cdn/shop/files/Mosa_White_Porcelain_Tile.jpg?v=1754471562&width=535)",
                }}
            >
                <div className="hero-overlay">
                    
                </div>
                
                <div className="hero-content text-neutral-content text-center">
                    
                    <div className="max-w-md">
                        <Marquees></Marquees>
                        {/* <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p> */}
                        <button className="btn btn-outline btn-warning mt-5"><Link href={"/All-teils"}>Brows now</Link></button>

                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;
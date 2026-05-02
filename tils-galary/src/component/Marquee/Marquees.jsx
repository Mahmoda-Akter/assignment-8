import React from 'react';
import Marquee from "react-fast-marquee";

const Marquees = () => {
    return (
        <div>
            <Marquee pauseOnHover={true}>
                A scrolling line of text showing "New Arrivals: [Tile Name] | Weekly Feature: Modern Geometric Patterns | Join the Community..."

            </Marquee>
        </div>
    );
};

export default Marquees;
import React from "react";
import "./Partners.css";
import ps from "../../images/pancakeswap.png";
import bali from "../../images/B-LOGO.png";
const Partners = () => {
    return (
        <div>
            <img src={ps} alt='pancakeswap' className='ps' />
            <img src={ps} alt='pancakeswap' className='ps' />
            <img src={ps} alt='pancakeswap' className='ps' />
            <img src={bali} alt='bali' className='bali' />
            <img src={bali} alt='bali' className='bali' />
        </div>
    );
};

export default Partners;

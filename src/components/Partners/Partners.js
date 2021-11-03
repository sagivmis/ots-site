import React from "react";
import "./Partners.css";
import ps from "../../images/pancakeswap.png";
import bali from "../../images/B-LOGO.png";
const Partners = () => {
    return (
        <div className='grid-partners'>
            <img src={ps} alt='pancakeswap' className='ps aura' />
            <img src={bali} alt='bali' className='bali aura' />
            <img src={ps} alt='pancakeswap' className='ps aura ' />
            <img src={bali} alt='bali' className='bali aura' />
            <img src={ps} alt='pancakeswap' className='ps aura' />
        </div>
    );
};

export default Partners;

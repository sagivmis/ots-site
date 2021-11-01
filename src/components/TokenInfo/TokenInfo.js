import React from "react";
import token from "../../images/9911.png";
import "./TokenInfo.css";

const TokenInfo = () => {
    return (
        <div className='details'>
            <img src={token} alt='token' className='token' />
            <div className='price'>$0.001203</div>
        </div>
    );
};

export default TokenInfo;

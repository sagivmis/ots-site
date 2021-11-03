import React from "react";
import "./Title.css";

const Title = ({ text, bg, bgClass, fontClass }) => {
    return (
        <div>
            <img src={bg} alt='bg' className={`bg-title-${bgClass} aura `} />
            <p className={`title-${bgClass} aura`}>{text}</p>
        </div>
    );
};

export default Title;

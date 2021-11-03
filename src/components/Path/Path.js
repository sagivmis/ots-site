import React from "react";
import "./Path.css";

const Path = ({ text, url = "" }) => {
    return <div className='path'>{text}</div>;
};

export default Path;

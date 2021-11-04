import React, { useState, useEffect } from "react";
import "./Roadmap.css";

const Roadmap = ({ scrolled }) => {
    const [scrolledClass, setScrolled] = useState("roadmap-item");
    useEffect(() => {
        if (scrolled) setScrolled("roadmap-item scrolled-road");
        else setScrolled("roadmap-item");
        return () => {};
    }, [scrolled]);
    return (
        <div className='roadmap'>
            <div className='roadmap-grid'>
                <div className={scrolledClass + " done"}>
                    <h1 className='aura'>Q1</h1>
                </div>
                <div className={scrolledClass}>
                    <h1 className='aura'>Q2</h1>
                </div>
                <div className={scrolledClass}>
                    <h1 className='aura'>Q3</h1>
                </div>
                <div className={scrolledClass}>
                    <h1 className='aura'>Q4</h1>
                </div>
            </div>
        </div>
    );
};

export default Roadmap;

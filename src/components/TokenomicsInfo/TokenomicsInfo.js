import React, { useState, useEffect, useCallback } from "react";
import "./TokenomicsInfo.css";

const TokenomicsInfo = ({ title, text }) => {
    const [y, setY] = useState(0);
    const [scrolledClass, setClass] = useState("");

    const handleNavigation = useCallback(
        (e) => {
            const window = e.currentTarget;
            if (y > window.scrollY) {
            } else if (y < window.scrollY) {
            }

            setY(window.scrollY);
        },
        [y]
    );

    const handleScrollDown = useCallback(() => {
        if (y > 50) {
            setClass("grid-item scrolled-down");
        } else setClass("grid-item");
    }, [y]);

    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);

    useEffect(() => {
        handleScrollDown();
    }, [handleScrollDown]);

    return (
        <div className={scrolledClass}>
            <h1 className='aura'>{title}</h1>
            <p className='text'>{text}</p>
        </div>
    );
};

export default TokenomicsInfo;

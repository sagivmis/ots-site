import React, { useState, useEffect, useCallback } from "react";
import NavBar from "../NavBar/NavBar";
import "./Header.css";
import logo from "../../images/OST-LOGO-NAME.png";
import avatar from "../../images/ost-avatar.png";
import Typewriter from "typewriter-effect";
const passedY = 200;

const Header = () => {
    const [y, setY] = useState(0);
    const [scrolledClass, setClass] = useState("");
    const [typeClass, setTypeClass] = useState("type-writer");

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
        if (y > passedY) {
            setClass("scrolled");
            setTypeClass("type-writer-scrolled");
        } else {
            setClass("");
            setTypeClass("type-writer");
        }
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
        <div className={`header ${scrolledClass}`}>
            <NavBar scrolled={scrolledClass} />

            <div className={typeClass}>
                <Typewriter
                    options={{
                        strings: [
                            "Join The Revolution",
                            "We are waiting for you",
                        ],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
            <img
                src={logo}
                alt='logo'
                className={`logo ${
                    y > passedY ? "reset-scale shadow" : "big-logo shadow"
                }`}
            />
            <img
                src={avatar}
                alt='avatar'
                className={`avatar ${
                    y > passedY ? "reset-scale shadow" : "big-avatar"
                }`}
            />
        </div>
    );
};

export default Header;

import React, { useState, useEffect, useCallback } from "react";
import NavBar from "../NavBar/NavBar";
import "./Header.css";
import logo from "../../images/OST-LOGO-NAME.png";
import avatar from "../../images/ost-avatar.png";

const Header = () => {
    const [y, setY] = useState(0);
    const [scrolledClass, setClass] = useState("");

    const handleNavigation = useCallback(
        (e) => {
            const window = e.currentTarget;
            if (y > window.scrollY) {
                console.log("scrolling up");
            } else if (y < window.scrollY) {
                console.log("scrolling down");
            }

            setY(window.scrollY);
        },
        [y]
    );

    const handleScrollDown = useCallback(() => {
        if (y > 50) {
            setClass("scrolled");
        } else setClass("");
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
            <img
                src={logo}
                alt='logo'
                className={`logo ${y > 50 ? "reset-scale" : "big-logo"}`}
            />
            <img
                src={avatar}
                alt='avatar'
                className={`avatar ${y > 50 ? "reset-scale" : "big-avatar"}`}
            />
        </div>
    );
};

export default Header;

import "./App.css";
import React, { useState, useEffect, useCallback } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Tokenomics from "../Tokenomics/Tokenomics";
import Title from "../Title/Title";
import redSmudge from "../../images/red-smudge-decorate.png";
import Partners from "../Partners/Partners";
import Roadmap from "../Roadmap/Roadmap";
function App() {
    const [y, setY] = useState(0);
    const [tokenomics, setTokenomics] = useState(false);

    const showRoadMap = y > 2650;
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
        if (y > 950) {
            setTokenomics(true);
        } else {
            setTokenomics(false);
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
        <div className='App'>
            <Header />
            {
                <Title
                    text='TOKENOMICS'
                    bg={redSmudge}
                    bgClass='tokenomics'
                    fontClass=''
                />
            }
            {<Tokenomics />}
            <Title text='PARTNERS' bg={redSmudge} bgClass='partners' />
            <Partners />
            <Title text='ROADMAP' bg={redSmudge} bgClass='partners' />
            {!showRoadMap && <Roadmap scrolled={false} />}
            {showRoadMap && <Roadmap scrolled={true} />}
            <Footer />
        </div>
    );
}

export default App;

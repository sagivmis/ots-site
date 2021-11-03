import React, { useState } from "react";
import NavBarButtons from "../NavBarButtons/NavBarButtons";
import Path from "../Path/Path";
import TokenInfo from "../TokenInfo/TokenInfo";
import "./NavBar.css";

const NavBar = ({ scrolled }) => {
    const [showButtons, setShowButtons] = useState(false);
    const [showTokenInfo, setShowInfo] = useState(false);
    return (
        <div className={"navbar"}>
            {showButtons && (
                <NavBarButtons
                    show={true}
                    toggleShow={() => setShowButtons(!showButtons)}
                />
            )}
            {!showButtons && (
                <NavBarButtons
                    show={false}
                    toggleShow={() => setShowButtons(!showButtons)}
                />
            )}

            <TokenInfo />

            <Path text='About us' />
            <Path text='Buy $OST' />
            <Path text='Our Vision' />
            <Path text='Contact us' />
            <Path text='Careers' />
        </div>
    );
};

export default NavBar;

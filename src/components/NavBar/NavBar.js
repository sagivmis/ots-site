import React, { useState } from "react";
import NavBarButtons from "../NavBarButtons/NavBarButtons";
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
        </div>
    );
};

export default NavBar;

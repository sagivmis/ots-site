import React from "react";
import "./NavBarButtons.css";
import Button from "../Button/Button";

const NavBarButtons = ({ show, toggleShow }) => {
    const navbarButtons = [
        <Button text='X' color={"#00ff99"} key='7' onClick={toggleShow} />,
        <Button text='Buy $OST' color={"#8e44ad"} key='1' />,
        <Button text='Twitter' color={"#3498db"} key='2' />,
        <Button text='Facebook' color={"#3498db"} key='3' />,
        <Button text='TG' color={"#2980b9"} key='4' />,
        <Button text='Reddit' color={"#c0392b"} key='5' />,
        <Button text='Discord' color={"#2980b9"} key='6' />,
    ];

    const showButtons = [
        <Button text='...' color={"#00ff99"} key='1' onClick={toggleShow} />,
    ];
    return (
        <div className='grid-container shadow'>
            {show && <div className='grid'>{navbarButtons}</div>}
            {!show && <div className='grid'>{showButtons} </div>}
        </div>
    );
};

export default NavBarButtons;

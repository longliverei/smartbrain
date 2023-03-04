import React from "react";
import Tilt from "react-parallax-tilt";
import './style.scss';
import Brain from "../../assets/brain.png"

export const Logo = () => {
    return (
        <Tilt className="tilt">
            <img src={Brain} alt="logo" />
        </Tilt>
    )
}
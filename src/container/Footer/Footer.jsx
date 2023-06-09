import React from "react";

import './Footer.css';

const Footer = () => {
    const date = new Date();
    return (
            <div className="app-footer flex">
                <p>©️ Hitesh Mehra {date.getFullYear()}</p>
            </div>
    );
}

export default Footer;
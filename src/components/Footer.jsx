import React from "react";
import logo from "../assets/logo-blanc.png"

const Footer = () => {
    return (
        <footer>
            <img className="logo-footer" src={logo} alt="Kasa"></img>
            <p className="footer-text">© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;

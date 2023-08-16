import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"

const Navigation = () => {
    return (
        <div className="navigation">
            <img className="logo" src={logo} alt="Kasa"></img>
            <ul>
                <NavLink
                    to="/"
                    //Classe CSS appliquée lorsque le lien est actif
                    className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                    <li>Accueil</li>
                </NavLink>
                <NavLink
                    to="/about"
                    className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                    <li>À propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;

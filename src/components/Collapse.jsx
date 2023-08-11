import React from "react";
import { useState } from "react";
import ArrowUp from "../assets/arrow_up.svg";

const Collapse = (props) => {
    //State local qui suit l'état d'ouverture ou de fermeture du contenu
    const [isOpen, setIsOpen] = useState(false);
    const toggleCollapse = () => {
        setIsOpen(!isOpen); // inverse la valeur actuelle de isOpen
    };
    return (
        <div className="collapse">
            <button onClick={toggleCollapse} className="title-arrow">
                {props.title}

                {/* Si collapse ouverte alors classe open : animation */}
                <img
                    className={`icon-collapse ${isOpen ? "open" : ""}`}
                    src={ArrowUp}
                    alt=""
                />
            </button>

            {/* Si collapse ouverte alors afficher contenu */}
            {isOpen && <p className="content-collapse">{props.children} </p>}
        </div>
    );
};

export default Collapse;

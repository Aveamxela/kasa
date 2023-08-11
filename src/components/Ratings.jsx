import React from "react";
import { FaStar } from "react-icons/fa";

const Ratings = ({ rating, max }) => {

    return (
        <div className="ratings">
            {/*Création d'un tableau en fonction de la valeur max (par défault = 5)*/}
            {[...Array(max ?? 5)].map((valeurCourante, i) => {
                //Afficher une étoile si i est inférieur à la
                if (i < rating) {
                    return <FaStar className="rating" key={i} size={18} />;
                } else {
                    return <FaStar className="rating grey-star" key={i} size={18} />;
                }
            })}
        </div>
    );
};

export default Ratings;

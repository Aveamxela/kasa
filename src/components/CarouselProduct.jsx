import React from "react";
import { useState } from "react";
import previousImage from "../assets/previous-arrow.svg";
import nextImage from "../assets/next-arrow.svg";

const CarouselProduct = (props) => {
    //State local qui suit l'index de l'image affichée
    const [index, changeIndex] = useState(0);

    const previous = () => {
        if (index - 1 < 0) {
            // Si on est à la première image, passer à la dernière
            changeIndex(() => props.images.length - 1);
        } else {
            changeIndex((currentIndex) => currentIndex - 1);
        }
    };

    const next = () => {
        if (index + 1 >= props.images.length) {
            // Si on est à la dernière image, passer à la première
            changeIndex(() => 0);
        } else {
            changeIndex((currentIndex) => currentIndex + 1);
        }
    };

    // Vérification si le carrousel contient plusieurs images
    const multipleImage = props.images.length > 1;

    return (
        <div id="carousel">
            <img className="img-carousel" src={props.images[index]} alt="" />
            {/* Si plusieurs images, afficher flèches et numérotation */}
            {multipleImage && (
                <div>
                    <div className="numerotation">
                        {index + 1}/{props.images.length}
                    </div>
                    <img
                        onClick={previous}
                        src={previousImage}
                        className="previous-arrow"
                        alt=""
                    />
                    <img
                        onClick={next}
                        src={nextImage}
                        className="next-arrow"
                        alt=""
                    />
                </div>
            )}
        </div>
    );
};

export default CarouselProduct;

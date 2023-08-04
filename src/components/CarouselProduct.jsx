import { useState } from 'react';
import React from 'react';
import previousImage from "../assets/previous-arrow.svg"
import nextImage from "../assets/next-arrow.svg";



const CarouselProduct = (props) => {
    const [index,changeIndex] = useState(0)
    
    const previous = () => {
        if (index-1 < 0) {
            changeIndex(() => props.images.length - 1);
        }
        else{
        changeIndex((currentIndex) => currentIndex - 1);
        }
        console.log(index)
    }

     const next = () => {
        if (index+1 >= props.images.length) {
            changeIndex(() => 0);
        }
        else{
            changeIndex((currentIndex) => currentIndex + 1);
        }
        console.log(index);

     };

    const multipleImage = props.images.length > 1;

    return (
        <div id="carousel">
            <img className="img-carousel" src={props.images[index]} alt="" />
            {multipleImage && (
                <div >
                <div className="numerotation">
                    {index + 1}/{props.images.length}
                </div>
                <img
                    onClick={previous}
                    src={previousImage}
                    className="previous-arrow"
                alt=""/>
                <img onClick={next} src={nextImage} className="next-arrow" alt="" />
                </div>
            )}
                
            </div>
    );
};

export default CarouselProduct;
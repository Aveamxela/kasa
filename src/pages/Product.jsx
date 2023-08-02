import React from "react";
import Navigation from "../components/Navigation";
import CarouselProduct from "../components/CarouselProduct";
import Footer from "../components/Footer";
import Products from "../Data.json"
import { findAllByAltText } from "@testing-library/react";
import { useParams } from "react-router-dom";

const Product = () => {
    let {id} = useParams();
    const product = Products.find ((product) => product.id === id)
    console.log({product})
    // recuperer l'id
    // recuper le produit avec le bon id dans products avec find
    return (
        <div>
            <Navigation />
            <CarouselProduct images={product.pictures}/>
            <h1>{product.title}</h1>
            <h2>location</h2>
            <div className="host">
                <p>{product.host.name}</p>
                <div
                    className="host-picture"
                ></div>
            </div>
            <div className="tags-rating">
                <div>TAGS</div>
                <div>RATINGS</div>
            </div>
            <div className="describe-equipment">
                <div>Description</div>
                <div>Equipements</div>
            </div>
            <Footer />
        </div>
    );
};

export default Product;

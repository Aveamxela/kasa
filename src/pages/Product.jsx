import React from "react";
import Navigation from "../components/Navigation";
import CarouselProduct from "../components/CarouselProduct";
import Footer from "../components/Footer";
import Products from "../Data.json"
import { useParams } from "react-router-dom";
import Ratings from "../components/Ratings"

const Product = () => {
    let {id} = useParams();
    const product = Products.find ((product) => product.id === id)
    console.log({product})
    // recuperer l'id
    // recuper le produit avec le bon id dans products avec find
    return (
        <div>
            <Navigation />
            <CarouselProduct images={product.pictures} />
            <div className="product-sheet">
                <h1 className="title-product">{product.title}</h1>
                <h2 className="location">{product.location}</h2>
                <div className="host">
                    <p className="name-host">{product.host.name}</p>
                    <img className="img-host" src={product.host.picture} alt=""/>
                </div>
                <div className="tags-rating">
                    <div>TAGS</div>
                    <Ratings rating={product.rating} />
                </div>
                <div className="describe-equipment">
                    <div>Description</div>
                    <div>Equipements</div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Product;

import React from "react";
import Navigation from "../components/Navigation";
import CarouselProduct from "../components/CarouselProduct";
import Footer from "../components/Footer";
import Products from "../Data.json"
import { useParams } from "react-router-dom";
import Ratings from "../components/Ratings"
import Tags from "../components/Tags";
import Collapse from "../components/Collapse";

const Product = () => {

    //Récupère l'id de l'url grâce à useParams()
    let { id } = useParams();

    // Récupère le produit avec le bon id dans la liste des produits
    const product = Products.find((product) => product.id === id);

    return (
        <div>
            <Navigation />
            <CarouselProduct images={product.pictures} />
            <div>
                <div className="product-sheet">
                    <h1 className="title-product">{product.title}</h1>
                    <h2 className="location">{product.location}</h2>
                    <Tags className="tags" tags={product.tags} />
                    <div className="rating-host">
                        <Ratings className="ratings" rating={product.rating} />
                        <div className="host">
                            <p className="name-host">{product.host.name}</p>
                            <img
                                className="img-host"
                                src={product.host.picture}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className="describe-equipment">
                    <Collapse title="Description">
                        {product.description}
                    </Collapse>

                    <Collapse title="Equipements">
                        {product.equipments.join("\n")}
                    </Collapse>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Product;

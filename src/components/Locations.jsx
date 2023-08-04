import React from "react";
import { Link } from "react-router-dom";
import Products from "../Data.json";

const Locations = () => {
    return (
        <div className="locations">
            {Products.map((product, i) => (
                <Link key={product.id} to={`/product/${product.id}`}>
                <div className="location-item">
                    <div
                        className="img-location-home"
                        style={{ backgroundImage: `url('${product.cover}')` }}
                    ></div>
                    <div className="linear-gradient">
                        <h1 className="title-location">{product.title}</h1>
                    </div>
                </div>
                </Link>
            ))}
        </div>
    );
};

export default Locations;

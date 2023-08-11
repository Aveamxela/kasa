import React from "react";

const Banner = (props) => {
    return (
        <div
            className="banner"
            style={{ backgroundImage: `url('${props.image}')` }}
        >
            <div className="opacity-banner"></div>
            <div className="position-title">
                <h1 className="banner-title">{props.title}</h1>
            </div>
        </div>
    );
};

export default Banner;

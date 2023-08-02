import React, { useEffect } from "react";
import data from "../Data.json";

const Locations = () => {
    return (
        <div className="locations">
            {data.map((data, i) => (
                <div key={i} className="location-item">
                    <div
                        className="img-location-home"
                        style={{ backgroundImage: `url('${data.cover}')` }}
                    ></div>
                    <div className="linear-gradient">
                        <h1 className="title-location">{data.title}</h1>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Locations;

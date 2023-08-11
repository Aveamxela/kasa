import React from "react";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import imageMer from "../assets/falaise_mer.png";
import Locations from "../components/Locations";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner
                image={imageMer}
                title={'Chez vous,\npartout et ailleurs'}
            />
            <Locations />
            <Footer />
        </div>
    );
};

export default Home;

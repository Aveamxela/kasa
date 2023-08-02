import React from 'react';
import Navigation from '../components/Navigation';
import Banner from '../components/Banner';
import imageForet from "../assets/foret_montagne.png"
import Footer from '../components/Footer';

const About = () => {
    return (
        <div>
            <Navigation />
            <Banner image={imageForet}/>
            <h1>A propos</h1>
            <Footer/>
        </div>
    );
};

export default About;
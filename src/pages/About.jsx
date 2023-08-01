import React from 'react';
import Navigation from '../components/Navigation';
import Banner from '../components/Banner';
import imageForet from "../assets/foret_montagne.png"

const About = () => {
    return (
        <div>
            <Navigation />
            <Banner image={imageForet}/>
            <h1>A propos</h1>
        </div>
    );
};

export default About;
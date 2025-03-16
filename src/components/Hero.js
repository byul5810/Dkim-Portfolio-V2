import React from 'react';
import '../style/hero.scss';

const Hero = () => (
    <div className="hero">
        <div className="diagonal-hero-bg">
            <div className="stars">
                <div className="small"></div>
                <div className="medium"></div>
                <div className="big"></div>
            </div>
        </div>
        <div className="col-md-7 hero-content">
            <div className="hero-text-wrapper">
                <h2 className="h1">HELLO, WORLD!</h2>
                <h1>A Creative Full Stack Developer in Texas</h1>
            </div>
        </div>
    </div>
)

export default Hero;

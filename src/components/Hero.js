import React from 'react';
import image from '../assets/bg.jpeg'
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
                <h1>A Creative Full Stack Developer in Kansas</h1>
                <p>Interested in Working Together? Check out my Resume</p>
                <a className="btn btn-primary" href="https://drive.google.com/file/d/1QbfL_JGXB7TkNYpbiJ8r08T2HCraN1t7/view?usp=sharing" target="_blank">DOWNLOAD CV</a>
            </div>
        </div>
    </div>
)

export default Hero;

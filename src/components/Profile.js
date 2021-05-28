import React from 'react';
import '../style/about.scss';
import image from '../assets/profile.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AboutMe = () => (
    <section className="profile" id="about">
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <div className="image-wrapper">
                        <img className="profile-img" src={image} alt="img" />
                    </div>
                </div>
                <div className="col-md-7 about-content-container">
                    <div className="about-content-wrapper">
                        <h2 className="name">Deokgwan Kim</h2>
                        <h3 className="title">FullStack Developer</h3>
                        <p className="description">Since I was a young man, I loved adventure and challenges in my life. I have always been
                        chasing the American Dream, So I fought getting into school in America and entered the
                        Emporia State University with a scholarship in 2013. Then, in 2016, I had a chance to join
                        the US Army, which I am currently serving for the country. I have learned good leadership
                        skills and strength as a Specialist to overcome any situation from the Army. Also, I received a
                        Bachelor Degree in Computer Science and a minor in Information Systems. Now, I am honored
                        to not only be an American but also a US Army Soldier.</p>
                        <div className="profile-favicon">
                            <a className="icon github" href="https://github.com/byul5810"  target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={['fab', 'github']} size="3x"/>
                            </a>
                            <a className="icon linkedin" href="https://www.linkedin.com/in/deokgwan-kim/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={['fab', 'linkedin']} size="3x"/>
                            </a>
                            <a className="icon email" href="mailto: byul5810@gmail.com" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={['fas', 'envelope-square']} size="3x"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default AboutMe;

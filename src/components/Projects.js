import React, { Component } from 'react';
import ProjectCarousel from './Project_Carousel'
import MobileProjectCarousel from './Mobile_Project_Carousel'
import Arduino from '../assets/arduino.jpg'
import Ecommerce from '../assets/ecommerce.jpeg'
import '../style/projects.scss';

class Projects extends Component {
    render() {
    return (
    <section className="projects" id="projects">
        <div className="container">
            <div className="projects-wrapper">
              <div className="proejct-header w-100">
                <h2>WORK</h2>
              </div>
              <div className="row ">
                <div className="card col-md-5 px-0">
                  <a href="https://github.com/byul5810/Temp-Humidity-Arduino-with-Android" target="_blank=">
                    <img className="project-img" src={Arduino} alt="img"></img>
                  </a>
                </div>
                <div className="project-content offset-md-1 col-md-6">
                    <h2>AngularJS to Angular Migration</h2>
                    <p>successfully led the migration of our main app from AngularJS to Angular as a personal sub-project within my company. Balancing this with my primary responsibilities, I dedicated extra hours to ensure the migration was completed. The project took me one year to finish, but the result was a 30% improvement in app loading speed, significantly enhancing performance and setting the foundation for future growth
                    </p>
                </div>
              </div>
              <div className="row mt-5 pt-5">
                <div className="project-content col-md-6 d-md-block d-none">
                    <h2>Mobile Friendly + SEO optimization</h2>
                    <p>I always consider mobile and website SEO optimization before coding to explore visual and usability decisions
                      to provide the most efficient-quality website with the best SEO practice and mobile optimization for clients.
                      I have good website SEO knowledge and using that making their website get a high ranking on google search.
                    </p>
                </div>
                <div className="card mobile-project offset-md-2 col-md-3 px-0">
                <MobileProjectCarousel />
                </div>
                <div className="project-content mobile col-md-6 d-md-none d-block">
                    <h2>Mobile Friendly + SEO optimization</h2>
                    <p>I always consider mobile and website SEO optimization before coding to explore visual and usability decisions
                      to provide the most efficient-quality website with the best SEO practice and mobile optimization for clients.
                      I have good website SEO knowledge and using that making their website get a high ranking on google search.
                    </p>
                </div>
              </div>
              <div class="row mt-5 pt-5">
                <div className="card col-md-5 px-0">
                <ProjectCarousel />
                </div>
                <div className="project-content offset-md-1 col-md-6">
                    <h2>Website Template Build</h2>
                    <p>Tons of website build experience with an excellent sense of design. I provide the most high-quality website.
                      I prioritize writing well-organized code and using modern programming methods to create a high-quality foundation.
                      I write automated tests to make sure each code is as bug-free and high quality as possible.
                      I always try to use an efficient and creative solution</p>
                </div>
              </div>
            </div>
            <div className="mt-5 pt-5 projects-wrapper">
              <div className="row">
                <div className="project-content col-md-6 d-md-block d-none">
                    <h2>Fashion Jewelry Ecommerce</h2>
                    <p>Developed an Ecommerce site(Incompleted) for Co-Op project.
                       Used Keystone (ExpressJS / MongoDB with Mongoose / Handlebars(hbs))
                       CSS / LESS / Bootstrap / UiKIT with Firebase Auth
                    </p>
                </div>
                <div className="card offset-md-1 col-md-5 px-0">
                  <a href="https://github.com/byul5810/cuplefashion" target="_blank=">
                    <img className="project-img" src={Ecommerce} alt="img"></img>
                  </a>
                </div>
                <div className="project-content col-md-6 d-md-none d-block">
                    <h2>Fashion Jewelry Ecommerce</h2>
                    <p>Developed an Ecommerce site(Incompleted) for Co-Op project.
                       Used Keystone (ExpressJS / MongoDB with Mongoose / Handlebars(hbs))
                       CSS / LESS / Bootstrap / UiKIT with Firebase Auth
                    </p>
                </div>
              </div>
            </div>
            <div className="mt-5 pt-5">Please check out more projects through my Github Repo</div>
        </div>
    </section>
    );
    }
}

export default Projects;

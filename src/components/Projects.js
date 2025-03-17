import React, { Component } from 'react';
import MobileProjectCarousel from './Mobile_Project_Carousel'
import Angular from '../assets/angular.png'
import Cross from '../assets/cross.png'
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
                  <img className="project-img" src={Angular} alt="img"></img>
                </div>
                <div className="project-content offset-md-1 col-md-6">
                    <h2>AngularJS to Angular Migration</h2>
                    <p>successfully led the migration of our main app from AngularJS to Angular as a personal sub-project within my company. Balancing this with my primary responsibilities, I dedicated extra hours to ensure the migration was completed. The project took me one year to finish, but the result was a 30% improvement in app loading speed, significantly enhancing performance and setting the foundation for future growth
                    </p>
                </div>
              </div>
              <div class="row mt-5 pt-5">
                <div className="project-content col-md-6 d-md-block d-none">
                  <h2>Cross-Technology Integration</h2>
                  <p> I am managing several projects simultaneously, working across various repositories and technologies. I handle multiple, including Angular, AngularJS, VueJS, and Java. I take on complex tasks that require juggling multiple priorities and platforms, ensuring that each project runs smoothly and efficiently. My ability to seamlessly integrate different technologies and drive progress across various initiatives has consistently led to improved performance and results.</p>
                </div>
                <div className="card offset-md-1 col-md-5 px-0">
                  <img className="project-img" src={Cross} alt="img"></img>
                </div>
                <div className="project-content mobile col-md-6 d-md-none d-block">
                  <h2>Cross-Technology Integration</h2>
                  <p> I am managing several projects simultaneously, working across various repositories and technologies. I handle multiple, including Angular, AngularJS, VueJS, and Java. I take on complex tasks that require juggling multiple priorities and platforms, ensuring that each project runs smoothly and efficiently. My ability to seamlessly integrate different technologies and drive progress across various initiatives has consistently led to improved performance and results.</p>
                </div>
              </div>
              <div className="row mt-5 pt-5">
                <div className="card mobile-project offset-md-1 col-md-3 px-0">
                <MobileProjectCarousel />
                </div>
                <div className="project-content offset-md-2 col-md-6">
                    <h2>Mobile Friendly + SEO optimization</h2>
                    <p>I always consider mobile and website SEO optimization before coding to explore visual and usability decisions
                      to provide the most efficient-quality website with the best SEO practice and mobile optimization for clients.
                      I have good website SEO knowledge and using that making their website get a high ranking on google search.
                    </p>
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

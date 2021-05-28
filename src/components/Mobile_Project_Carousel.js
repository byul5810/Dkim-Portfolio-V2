import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import mobile_project_1 from '../assets/mobile_project_1.png';
import mobile_project_2 from '../assets/mobile_project_2.png';
import mobile_project_3 from '../assets/mobile_project_3.png';

const MOBILE_PROJECTS = [
    {
        id: 1,
        image: mobile_project_1
    },
    {
        id: 2,
        image: mobile_project_2
    },
    {
        id: 3,
        image: mobile_project_3
    }
];

const Mobile_Project_Carousel = () => (
    <div>
        <Carousel>
            {
                MOBILE_PROJECTS.map(MOBILE=> {
                    return (
                        <Carousel.Item key={MOBILE.id}>
                            <img src={MOBILE.image} alt='img' />
                        </Carousel.Item>
                    );
                })
            }
        </Carousel>
    </div>
)

export default Mobile_Project_Carousel
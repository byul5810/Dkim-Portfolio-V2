import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import project_1 from '../assets/project_1.png'
import project_2 from '../assets/project_2.png'
import project_3 from '../assets/project_3.png'
import project_4 from '../assets/project_4.png'
import project_5 from '../assets/project_5.png'
import project_6 from '../assets/project_6.png'

const PROJECTS = [
    {
        id: 1,
        image: project_1
    },
    {
        id: 2,
        image: project_2
    },
    {
        id: 3,
        image: project_3
    },
    {
        id: 4,
        image: project_4
    },
    {
        id: 5,
        image: project_5
    },
    {
        id: 6,
        image: project_6
    },
];

export class Project_Carousel extends Component {
    render() {
        return (
            <div>
                <Carousel>
                {
                    PROJECTS.map(PROJECT=> {
                        return (
                            <Carousel.Item key={PROJECT.id}>
                                <img src={PROJECT.image} alt='img' />
                            </Carousel.Item>
                        );
                    })
                }
                </Carousel>
            </div>
        )
    }
}

export default Project_Carousel
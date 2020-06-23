import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './projectCarousel.css'


const ProjectCarousel = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item fade={true}>
                <img
                    className="d-block w-100"
                    src="https://user-images.githubusercontent.com/27274027/39998914-d9030dfc-5787-11e8-961c-7739d5c8b17e.png"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Raytracer</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src="https://user-images.githubusercontent.com/27274027/40000286-b55e2fea-578b-11e8-9cce-d72f23bcc6eb.png"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://user-images.githubusercontent.com/27274027/39998914-d9030dfc-5787-11e8-961c-7739d5c8b17e.png"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}


export default ProjectCarousel;
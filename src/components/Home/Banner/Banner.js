import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
    <>
        <Carousel className='mt-1'>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.ibb.co/4RqbpJk/slider-01.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3 className='mb-3'>COVID-19 Vaccination</h3>
                <p className='bg-primary p-1'>The coronavirus (COVID-19) vaccine. Your best protection against coronavirus.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.ibb.co/x1tg6nG/slider-02.jpg"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3 className='mb-3'>Neurosurgery</h3>
                <p className='bg-primary p-1'>Our top-rated neurosurgeons use advanced imaging and surgical techniques to treat neurological conditions.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.ibb.co/xGJn6nD/slider-03.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3 className='mb-3'>Surgery</h3>
                <p className='bg-primary p-1'>Our surgical team includes experts in multiple subspecialty areas who continually research best practices and advance their skills.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </>     
    );
};

export default Banner;
import React from 'react';
import AboutContent from '../AboutContent/AboutContent';
import Departments from '../Departments/Departments';
import './About.css';

const About = () => {
    return (
        <div className="container my-5">
            <AboutContent></AboutContent>
            <Departments></Departments>
        </div>
    );
};

export default About;
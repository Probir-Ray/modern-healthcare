import React from 'react';


const Hero = (props) => {
    const {name, qualification, certification, img} = props.hero;
    return (
        <div className='hero'>
            <h4>{name}</h4>
            <img src={img} alt={name} />
            <p>{qualification}</p>
            <h5>{certification}</h5>
        </div>
    );
};

export default Hero;
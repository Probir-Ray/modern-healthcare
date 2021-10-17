import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    console.log(props.service);
    const {id, name, price, description, img} = props.service;
    return (
        <div className='service'>
            <img src={img} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
            <h2>Price: {price}</h2>
            <Link to=''><button className="btn btn-danger"></button></Link>
        </div>
    )
};

export default Service;
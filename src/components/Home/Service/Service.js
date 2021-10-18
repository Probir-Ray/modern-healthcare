import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    console.log(props.service);
    const {id, name, price, description, img} = props.service;
    return (
        <div className='card card-default service bg-primary text-white'>
            <img src={img} alt={name} />
            <div className="card-body">
                <h3>{name}</h3>
                <p>{description}</p>
                <h2>Price: {price}</h2>
            </div>
            <div className="card-footer">
                <Link to={`/booked/${id}`}><button className="btn btn-outline-white text-white">Learn More</button></Link>
            </div>
        </div>
    )
};

export default Service;
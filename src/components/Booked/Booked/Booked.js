import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Booked.css';

const Booked = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/Probir-Ray/Json-data/main/service-${serviceId}.json`)
        .then(res => res.json())
        .then(data => setService(data));
    }, []);

    return (
        <div className='single-service my-5 w-75 mx-auto text-center'>
            <h3>{service.name} </h3>
            <br/>
            <img className="w-75" src={service.img} alt={service.name} />
            <br/>
            <br/>
            <p>{service.description}</p>
            <h3 class="text-danger">$ {service.price}</h3>
        </div>
    );
};

export default Booked;
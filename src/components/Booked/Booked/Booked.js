import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booked = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/Probir-Ray/Json-data/main/service-${serviceId}.json`)
        .then(res => res.json())
        .then(data => setService(data));
    }, []);

    return (
        <div className='my-5 w-75 mx-auto'>
            <h3>{service.name} </h3>
            <img className='w-50' src={service.img} alt={service.name} />
            <br/>
            <br/>
            <p>{service.description}</p>
            <h2>$ {service.price}</h2>
        </div>
    );
};

export default Booked;
import React from 'react';
import { useParams } from 'react-router';

const Booked = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h2>Your Service is</h2>
            <p>Booking no. {serviceId}</p>
        </div>
    );
};

export default Booked;
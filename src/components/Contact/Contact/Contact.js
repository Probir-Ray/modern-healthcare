import React from 'react';
import Address from '../Address/Address';
import ContactForm from '../ContactForm/ContactForm';

const Contact = () => {
    return (
        <div className='container my-5'>
            <h2 className='text-center my-3'>Contact Us</h2>
            <ContactForm></ContactForm>
            <h2 className='text-center mt-5 mb-3'>Address</h2>
            <Address></Address>
        </div>
    );
};

export default Contact;
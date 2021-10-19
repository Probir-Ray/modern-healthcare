import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='container my-5 text-center'>
            <h2>Registration Page</h2>
            <p>Already have a Account? <Link to='/login'>Login here</Link></p>
        </div>
    );
};

export default Register;
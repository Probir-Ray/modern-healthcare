import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    const handelRegistration = e => {
        console.log('successfully');
        e.preventDefault();

    }

    return (
        <div className='container my-5 text-center'>
            <h2>Registration Page</h2>
            <form onSubmit={handelRegistration} className="row g-3 w-50 mx-auto mt-2 mb-4">
                <div className="col-md-12">
                    <input type="text" className="form-control" placeholder="Enter Your Email"/>
                </div>
                <div className="col-md-12">
                    <input type="password" className="form-control" placeholder="Enter Your Password"/>
                </div>
                <div className="col-12">
                    <button type="submit" className="form-control btn btn-primary">Register</button>
                </div>
            </form>
            <p>Already have a Account? <Link to='/login'>Login here</Link></p>
        </div>
    );
};

export default Register;
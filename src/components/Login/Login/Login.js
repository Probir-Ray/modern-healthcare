import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div className='my-4 py-4 container text-center box-container'>
            <h2 className='mb-4'>Login Page</h2>
            <form className="row g-3 w-50 mx-auto mt-2 mb-4">
                <div className="col-md-12">
                    <input type="text" className="form-control" placeholder="Enter Your Email"/>
                </div>
                <div className="col-md-12">
                    <input type="password" className="form-control" placeholder="Enter Your Password"/>
                </div>
                <div className="col-12">
                    <button type="submit" className="form-control btn btn-primary">Login</button>
                </div>
            </form>
            <p>Or</p>
            <button onClick={signInUsingGoogle} className="btn btn-danger">Google Sign In</button>
            <br/>
            <br/>
            <p>No Account? <Link to='/register'>Register here</Link></p>
        </div>
    );
};

export default Login;
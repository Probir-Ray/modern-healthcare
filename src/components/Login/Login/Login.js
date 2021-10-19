import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div className='my-4 py-4 container text-center box-container'>
            <h2 className='mb-4'>Login Page</h2>
            <br/>
            <button className="btn btn-info">Sign In</button> &nbsp;&nbsp;
            <button onClick={signInUsingGoogle} className="btn btn-danger">Google Sign In</button>
            <br/>
            <br/>
            <p>No Account? <Link to='/register'>Register here</Link></p>
        </div>
    );
};

export default Login;
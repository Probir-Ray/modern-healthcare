import React from 'react';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div className='my-4 py-4 container text-center'>
            <h2 className='mb-4'>Login Page</h2>
            <br/>
            <button className="btn btn-info">Sign In</button> &nbsp;&nbsp;
            <button onClick={signInUsingGoogle} className="btn btn-danger">Google Sign In</button>
        </div>
    );
};

export default Login;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import initAuthentication from '../Firebase/firebase.init';
import './Login.css';

initAuthentication();

const Login = () => {
    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [error, setError] = useState('');
    const {signInUsingGoogle} = useAuth();

    const handelLogin = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        }).catch(error => {
            setError(error.message);
        })
    }

    const handelEmailBlur = e => {
        setEmail(e.target.value);
    }

    const handelPasswordBlur = e => {
        setPassword(e.target.value);
    }

    const toggle = e => {
        setIsLogin(e.target.checked);
    }

    return (
        <div className='my-4 py-4 container text-center box-container'>
            <h2 className='mb-4'>{!isLogin ? 'Login' : 'Register'} Page</h2>
            <form onSubmit={handelLogin} className="row g-3 w-50 mx-auto mt-2 mb-4">
                <div className="col-md-12">
                    <input type="text" onBlur={handelEmailBlur} className="form-control" placeholder="Enter Your Email"/>
                </div>
                <div className="col-md-12">
                    <input type="password" onBlur={handelPasswordBlur} className="form-control" placeholder="Enter Your Password"/>
                </div>
                <div className="row my-3 me-auto">
                    <div className="col-md-4">
                    <div className="form-check">
                        <input onChange={toggle} className="form-check-input" type="checkbox" id="gridCheck1"/>
                        <label className="form-check-label" for="gridCheck1">No Account?</label>
                    </div>
                    </div>
                </div>

                <div className="col-12">
                    <button type="submit" className="form-control btn btn-primary">{!isLogin ? 'Login' : 'Register'}</button>
                </div>
           
            </form>
            <p>Or</p>
            <button onClick={signInUsingGoogle} className="btn btn-danger">Google Sign In</button>
            <br/>
            <br/>
            {/* <p>No Account? <Link to='/register'>Register here</Link></p> */}
        </div>
    );
};

export default Login;
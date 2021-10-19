import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import initAuthentication from '../Login/Firebase/firebase.init';

initAuthentication();

const Register = () => {
    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handelRegistration = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            setError(error.message);
        })
        
    }

    const handelEmailBlur = e => {
        setEmail(e.target.value);
    }

    const handelPasswordBlur = e => {
        setPassword(e.target.value);
    }


    return (
        <div className='container my-5 text-center'>
            <h2>Registration Page</h2>
            <form onSubmit={handelRegistration} className="row g-3 w-50 mx-auto mt-2 mb-4">
                <div className="col-md-12">
                    <input type="email" onBlur={handelEmailBlur} className="form-control" placeholder="Enter Your Email" required/>
                </div>
                <div className="col-md-12">
                    <input type="password" onBlur={handelPasswordBlur} className="form-control" placeholder="Enter Your Password" required/>
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
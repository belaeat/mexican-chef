import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config';

const auth = getAuth(app)

const Register = () => {

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [url, setUrl] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        setSuccess('');
        setError('');

        const email = event.target.email.value;
        const password = event.target.password.value;
        const url = event.target.url.value
        const name = event.target.name.value;
        console.log(name, email, password, url)

        // validate
        if (password.length <= 6) {
            setError('Password should be at least 6 characters')
        }

        // create user in firebase

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('');
                event.target.reset();

                setSuccess('User has been created successfully')

                // for display user name
                updateUserData(result.user, name)
            })
            .catch(error => {
                console.error(error.message);
                setError(error.message);
            })


    }

    // for display user name
    const updateUserData = (user, name) => {
        updateProfile(user, {
            displayName: name
        })
            .then(() => {
                console.log('User Name Updated')
            })
            .catch(error => {
                setError(error.message)
            })
    }


    return (
        <div>
            <form onSubmit={handleSubmit} className="hero min-h-screen bg-base-200 my-12">
                <div className="hero-content flex-col ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Please Register!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Enter your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Enter your password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="url" name='url' placeholder="Your Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-4">
                                <p className='mb-2 link link-hover'><small>Already have an account? <Link to='/login'>Login here.</Link></small></p>
                                <button className="btn btn-primary mb-2">Register</button>
                            </div>
                            <p className='text-danger'>{error}</p>
                            <p className='text-success'>{success}</p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;
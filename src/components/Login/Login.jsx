import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const auth = getAuth(app);

const Login = () => {

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleLogin = event => {
        event.preventDefault()

        // getting the email and password
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        setError('')
        setSuccess('')

        // sign in
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                setSuccess('Login Successful!')
                setError('');
            })
            .catch(error => {
                setError(error.message)
            })
    }



    return (
        <form onSubmit={handleLogin} className="hero min-h-screen bg-base-200 my-12">
            <div className="hero-content flex-col ">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login Here!!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
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
                        <div className="form-control mt-4">
                            <p className='mb-2 link link-hover'><small>New here? Please <Link to='/register'>Register!</Link></small></p>
                            <button className="btn btn-primary mb-2">Login</button>
                            <button className="btn bg-white text-black hover:text-white mb-2"><FaGoogle className='me-2'></FaGoogle> Google Login</button>
                            <button className="btn bg-white text-black"><FaGithub className='me-2' />GitHub Login</button>
                        </div>
                        <p className='text-red-500'>{error}</p>
                        <p className='text-green-500'>{success}</p>
                    </div>
                </div>
            </div>

        </form>
    );
};

export default Login;
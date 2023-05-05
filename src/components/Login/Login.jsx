import React, { useContext, useState } from 'react';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';
import { signInWithPopup, GithubAuthProvider, GoogleAuthProvider, getAuth } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const auth = getAuth(app);

const Login = () => {
    
    // google and github auth provider 
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()


    const { signIn } = useContext(AuthContext)

    // redirecting user to the desired location
    const navigate = useNavigate();
    const location = useLocation()
    console.log("login page location", location)
    const from = location.state?.from?.pathname || '/'


    // setting error or success message
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    // login with email and pass 
    const handleLogin = event => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError("Email and Password didn't matched!")
            })
    }

    // Github login
    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                setSuccess('Login Successful!')
                navigate(from, { replace: true })
                setError('');
            })
            .catch(error => {
                setError(error.message)
            })
    }

    // google login
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                setSuccess('Login Successful!')
                navigate(from, { replace: true })
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
                            <button className="btn mb-2 bg-yellow-300 text-black hover:text-white">Login</button>
                            <button onClick={handleGoogleSignIn} className="btn bg-white text-black hover:text-white mb-2"><FaGoogle className='me-2'></FaGoogle> Google Login</button>
                            <button onClick={handleGithubSignIn} className="btn bg-white text-black"><FaGithub className='me-2' />GitHub Login</button>
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
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { Tooltip } from 'react-tooltip'

const Header = () => {

    const { user, logOut } = useContext(AuthContext)
    // console.log(user.displayName)

    const handleLogout = () =>{
        logOut()
        .then ()
        .catch( error => console.log(error))
    }


    return (
        <div>
            <div className="navbar bg-base-100 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to='/'>Home</Link>
                            <Link to='/blog'>Blog</Link>
                        </ul>
                    </div>
                    <h2 className='font-bold text-3xl ms-0'><Link to='/'>Mexican Chef</Link></h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                    </ul>
                </div>
                <img src="" alt="" />
                <div className="navbar-end">
                    {
                        user &&
                        <>
                            <img src={user.photoURL} alt={user.displayName} data-tooltip-id={user.displayName} data-tooltip-content={user.displayName} /><Tooltip id={user.displayName} />
                        </>
                    }
                    {user ?
                        <a onClick={handleLogout} className="btn bg-yellow-300 text-black hover:text-white ms-2">Logout</a> :
                        <>
                            <a className="btn me-2 text-white"><Link to='/register'>Register</Link></a>
                            <a className="btn bg-yellow-300 text-black hover:text-white"><Link to='/login'>Login</Link></a>
                        </>

                    }

                </div>
            </div>
        </div>
    );
};

export default Header;
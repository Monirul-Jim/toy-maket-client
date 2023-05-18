import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
    const { user, logOut, updatePic } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/'>All Toys</Link></li>
                            <li><Link>Blog</Link></li>
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl">Toy Shop</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>All Toys</Link></li>
                        <li><Link>Blog</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user && <img title={user.email} className='h-12 w-12 rounded-full' src={user?.photoURL} alt="Profile Picture" />
                    }

                    {
                        user ? <Link><button onClick={handleLogout} className="btn ms-2 btn-primary btn-sm">Logout</button></Link> :
                            <Link to='/login'><button className="btn btn-primary btn-sm">Login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
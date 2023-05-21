import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import DynamicTitle from '../../../../Shared/DynamicTitle/DynamicTitle';

const Login = () => {
    DynamicTitle("Login")
    const { loginUser, handleWithGoogle } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState();
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';


    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(result => {
                const logged = result.user;
                setSuccess('Successfully registered!');
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(error => {
                setErrorMessage('Email and password do not match.');
                console.log(error);
            })
    }
    const loginWithGooglePopup = () => {
        handleWithGoogle()
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleCheckboxChange = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div>
            <h1 className='text-blue-900 text-2xl text-center'>Please Login</h1>
            <div className="hero min-h-screen bg-base-200">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-stone-200">
                    <form onSubmit={handleRegister} className="card-body">
                        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                        {
                            success && (
                                <div className="alert  alert-success mb-4">{success}</div>
                            )}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type={showPassword ? "text" : "password"} placeholder="password" className="input input-bordered" />
                        </div>
                        {/* click on show password  */}

                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">Show Password</span>
                                <input onChange={handleCheckboxChange} type="checkbox" checked={showPassword} className="checkbox checkbox-primary" />
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>Don't have an account please ? <Link className='text-blue-800 text-xl font-semibold underline' to='/register'>Register</Link></p>
                    </form>
                    <button onClick={loginWithGooglePopup} className="btn btn-primary"> G Login With Google</button>
                </div>
            </div>

        </div>
    );
};

export default Login;
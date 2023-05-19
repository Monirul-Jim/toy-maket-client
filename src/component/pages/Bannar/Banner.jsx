import React from 'react';
import logo from '../../../assets/logo.webp'
const Banner = () => {
    return (
        <div className="relative h-screen overflow-hidden">
            <img className="absolute top-0 left-0 w-full h-full object-cover" src={logo} alt="" />
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="absolute inset-0 flex items-center lg:ml-10">
                <div className="">
                    <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-teal-600">
                            Welcome to our Toy Shop!
                        </span>
                    </h1>

                    <h2 className="text-xl sm:text-3xl font-medium leading-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                            Explore our wide selection of toys
                        </span>
                    </h2>
                    <button className="btn btn-outline btn-primary text-white">Visit Our Shop</button>
                </div>
             
            </div>
        </div>
    );
};

export default Banner;
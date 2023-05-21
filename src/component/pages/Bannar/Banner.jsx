import React from 'react';
import logo from '../../../assets/logo.webp'
import logo2 from '../../../assets/children.jpg'
const Banner = () => {
    return (
        <div className="relative h-screen overflow-hidden">
            <img className="absolute top-0 left-0 w-full h-full object-cover" src={logo} alt="" />
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="absolute inset-0 flex items-center lg:ml-10">
                <div className=" lg:flex lg:space-x-96">

                    <div>
                        <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-6  ">

                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-teal-600">
                                Discover a World <br /> of Joy and Imagination

                            </span>
                        </h1>
                        <p className="text-white text-xl mb-6">Welcome to our enchanting toy shop! <br /> We offer a captivating selection of toys that inspire creativity <br /> and foster endless fun for children of all ages.</p>
                        <button className="btn btn-outline btn-primary text-white">Visit Our Shop</button>
                    </div>
                    <div  data-aos="fade-up-left" className="hidden sm:block">
                        <img className='rounded-lg' src={logo2} alt="" />
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Banner;
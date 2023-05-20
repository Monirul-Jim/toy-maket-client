import React from 'react';

const Donate = () => {
    return (
        <div>
            <h1 className='text-2xl mt-4 font-bold text-center'>Donate and save life</h1>
            <div className="relative mt-4 rounded h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJlSVzsf_LfaOHNyRFdZjuf4wOycUqo-aTFccxaLBygtFZ-_8riZDOQMcqmzFUShkuz9s&usqp=CAU')" }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute text-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                    <h1>Support Our Cause</h1>
                    <p>Donate to help us bring joy to more children.</p>
                    <p>Every donation makes a difference!</p>
                    <p>Join us in making a positive impact on children's lives.</p>
                    <p>Your Donation Impact Lives</p>
                    <button className="bg-white text-black px-6 py-2 mt-8 rounded-full hover:bg-gray-200">Donate Now</button>
                </div>
            </div>
        </div>
    );
};

export default Donate;
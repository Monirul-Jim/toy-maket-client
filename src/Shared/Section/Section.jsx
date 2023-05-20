import React from 'react';
import logo from '../../assets/img.jfif'
const Section = () => {
    return (
        <div>
        <h1 class="text-2xl text-center mt-4 font-bold">We also offer cash on delivery</h1>
      
        <div class="flex flex-col mt-4 space-y-4 md:flex-row md:justify-center md:space-x-4">
          <div>
            <img class="w-full h-96" src={logo} alt="Album" />
          </div>
          <div class="text-xl text-slate-400">
            <p>
              Our company provides a cash on delivery option for your convenience. You can make payment in cash at the time of delivery, offering an alternative to online payment methods. This is especially beneficial for customers who prefer or don't have access to digital transactions.
            </p>
            <p>
              In addition, we offer reliable and timely delivery support to ensure your order reaches you safely. Our dedicated delivery team handles the shipping process efficiently, ensuring your package is delivered to your specified location. We strive to provide a convenient and dependable delivery service.
            </p>
          </div>
        </div>
      </div>
      
    );
};

export default Section;
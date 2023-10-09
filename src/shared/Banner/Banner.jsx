import React from 'react';
import '../Banner/Banner.css'; // Correct path to your CSS file

const Banner = () => {
  return (
    <div  className="banner flex text-center flex-col justify-center" data-aos="zoom-in-down">
         <h1 className='md:text-6xl text-2xl text-white mb-2'>Welcome to <span className='text-orange-500 font-bold'>WisdomWave</span></h1>
        <p className='md:text-2xl text-base text-white mb-4'>Empowering Minds, Inspiring Futures</p>
        <button className="btn mx-auto bg-orange-500 border-0 text-white ">More About Us</button>
    </div>
  );
};

export default Banner;

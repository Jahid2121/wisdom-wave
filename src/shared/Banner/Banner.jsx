import React from 'react';
import '../Banner/Banner.css'; // Correct path to your CSS file

const Banner = () => {
  return (
    <div className="banner flex text-center flex-col justify-center">
         <h1 className='text-6xl text-white mb-2'>Welcome to WisdomWave</h1>
        <p className='text-2xl text-white mb-4'>Empowering Minds, Inspiring Futures</p>
        <button className="btn mx-auto bg-orange-500 border-0 text-white ">Learn More</button>
    </div>
  );
};

export default Banner;

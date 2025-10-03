import React from 'react';
import heroIcon from '../assets/hero-bg.jpg';

const Hero = () => {
  return (
    <div className="relative text-lime-900 pt-10 text-center w-full h-170 flex flex-col justify-start items-start">
      <img
        src={heroIcon}
        alt="hero-img"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-90"
      />
      <h1
        className="relative text-9xl mt-20 mb-auto text-lime-950 font-extrabold drop-shadow-lg"
      >
        CAMPST 
      </h1>
        <h1
        className="relative text-9xl mb-100 text-lime-950 font-extrabold drop-shadow-lg"
      >
        COLLECTIVE
      </h1>
    </div>
  );
};

export default Hero;
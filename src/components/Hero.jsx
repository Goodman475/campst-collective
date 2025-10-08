import React from 'react';
import heroIcon from '../assets/hero-bg.jpg';
import Button from './Button';

const Hero = () => {
  return (
    <div className="z-0 relative text-lime-900 pt-10 text-center w-full h-150 md:h-170 flex flex-col justify-start items-center md:items-start">
      <img
        src={heroIcon}
        alt="hero-img"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-90"
      />
      <h1
        className="relative text-7xl md:text-9xl mt-20 mb-0 md:mb-auto text-lime-950 font-extrabold drop-shadow-lg"
      >
        CAMPST 
      </h1>
      <h1
        className="relative text-7xl md:text-9xl mb-100 text-lime-950 font-extrabold drop-shadow-lg"
      >
        COLLECTIVE
      </h1>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="z-10 pointer-events-auto mt-100">
          <a href='#about-campst'><Button /> </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
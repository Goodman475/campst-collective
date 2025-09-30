import React from 'react';
import Button from './Button';
import heroIcon from '../assets/hero-bg.jpg';

const Hero = () => {
  return (
    <div className="relative text-lime-900 pt-10 text-center w-full h-170 flex flex-col items-center justify-center">
      <img
        src={heroIcon}
        alt="hero-img"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <h1 className='relative text-5xl'>CAMPS COLLECTIVE LTD</h1>
      <div className="relative z-10 flex flex-col items-center justify-center mt-80">
        <Button />
      </div>
    </div>
  );
};

export default Hero;
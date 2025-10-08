import React from "react";
import heroIcon from "../assets/hero-bg.jpg";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="relative w-full h-[100vh] flex items-center justify-center md:justify-start overflow-hidden">
      <img
        src={heroIcon}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent z-0" />
      <div className="relative z-10 px-6 md:px-20 text-center md:text-left flex flex-col items-center md:items-start">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-white tracking-tight drop-shadow-lg animate-fadeInUp">
          CAMPST
        </h1>
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-lime-300 drop-shadow-lg animate-fadeInUp delay-200">
          COLLECTIVE
        </h1>
        <div className="mt-10 animate-fadeInUp delay-500">
          <a href="#about-campst">
            <Button className="px-8 py-3 text-lg rounded-2xl bg-lime-500 text-white font-semibold shadow-lg hover:bg-lime-600 hover:scale-105 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

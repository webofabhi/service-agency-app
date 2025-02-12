import React from "react";
import profileImg1 from "../assets/profile1.jpeg";
import profileImg2 from "../assets/profile2.jpeg";
import profileImg3 from "../assets/profile3.jpg";
import { IoArrowForward } from "react-icons/io5";
import heroImg from "../assets/hero-image.png";
const Hero = () => {
  return (
    <section
      className="flex min-h-screen flex-wrap items-center
   bg-emerald-950 text-orange-100"
    >
      <div className="w-full p-8 md:w-1/2">
        <div className="mb-4 flex space-x-4">
          <img
            src={profileImg1}
            alt="Team Member 1"
            className="h-12 w-12 rounded-full border-2 border-orange-50"
          />
          <img
            src={profileImg2}
            alt="Team Member 1"
            className="h-12 w-12 rounded-full border-2 border-orange-50"
          />
          <img
            src={profileImg3}
            alt="Team Member 1"
            className="h-12 w-12 rounded-full border-2 border-orange-50"
          />
        </div>
        <h1 className="text-4xl tracking-tighter font-bold md:text-5xl lg:text-7xl">
          We create imactful solutions that
          <span className="text-orange-500"> elevate</span> your business.
        </h1>
        <button
          className="mt-8 flex items-center gap-2 rounded-full bg-emerald-900
            px-4 py-3 hover:bg-emerald-800 text-orange-200"
        >
          <span>Know More</span>
          <IoArrowForward />
        </button>
      </div>
      <div className="w-full md:w-1/2 lg:p-8">
        <img src={heroImg} alt="hero" className="h-auto w-full" />
      </div>
    </section>
  );
};

export default Hero;

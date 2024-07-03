import React from "react";
import "../Hero/Hero.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Hero = () => {
  return (
    <div className="hero h-screen flex flex-col lg:flex-row">
      <div className="left w-full h-screen flex flex-col md:gap-20 justify-center">
        <h1 className="text-4xl md:text-7xl text-[#a2c9ff] font-bold text-center lg:p-0 p-12">
          Kaizen Technical Society
        </h1>
        <p className="md:px-20 md:text-xl text-center px-10">
          As a part of the Institute Technical Council, we aim to provide a
          gateway for the people in our institute to join the coding community.
          We create a platform which allows students to gain assistance and
          mentorship to enhance their coding ability.
        </p>
      </div>
      <div className="right w-full flex justify-center rounded-3xl items-center md:hidden">
        <LazyLoadImage
          className="rounded-2xl"
          src="hero.jpg"
          alt="img"
          effect="blur"
          width={300}
          wrapperProps={{
            // If you need to, you can tweak the effect transition using the wrapper style.
            style: { transitionDelay: "1s" },
          }}
        />
      </div>
      <div className="right w-full md:flex justify-center rounded-3xl items-center hidden">
        <LazyLoadImage
          className="rounded-2xl"
          src="hero.jpg"
          alt="img"
          effect="blur"
          width={500}
          wrapperProps={{
            // If you need to, you can tweak the effect transition using the wrapper style.
            style: { transitionDelay: "1s" },
          }}
        />
      </div>
    </div>
  );
};

export default Hero;

"use client";

import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div id="hero">
      <div className="flex sm:flex-col md:flex-row md:justify-between items-center px-24">
        <div className="text-white font-serif text-center md:text-left md:w-1/2">
          <h2
            className="font-bold text-2xl md:text-4xl pt-2"
            data-aos="zoom-out"
          >
            Welcome to Makeup World!!!
          </h2>
          <p className="mt-4">
            Makeup products are more than just beauty essentials; they are tools
            of self-expression and creativity. From vibrant eyeshadow palettes
            to silky foundations that create flawless finishes, every product
            tells a story. A good makeup routine starts with the right products,
            whether it&apos;s a hydrating primer for smooth application, a
            long-lasting lipstick for bold statements, or the perfect mascara to
            make your eyes pop. Beyond aesthetics, makeup empowers individuals
            to feel confident and radiant, embracing their unique features while
            exploring trends and techniques. With countless brands and
            innovations, the world of makeup is as diverse as it is exciting!
          </p>
        </div>
        <img
          src="makeup bg.jpg"
          alt="makeup profile"
          className="rounded-full w-36 md:w-72 h-36 md:h-72 border-8 border-white"
        />
      </div>
    </div>
  );
};

export default Hero;

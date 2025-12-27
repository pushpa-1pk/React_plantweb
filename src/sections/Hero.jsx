import React from "react";
import Buycard from "../components/BuyCard";
import Button from "../components/Button";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:items-start ">
      <div className="text-white max-w-5xl py-20 px-10 m-4">
        <h1 className="font-semibold text-4xl md:text-8xl tracking-wide">
          Earth's Exhale
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mt-2 max-w-2xl">
          "Earth's Exhale" symbolizes the purity and vitality of the Earth's natural
          environment and its essential role in sustaining life.
        </p>

        <div className="flex gap-3 mt-3 items-center">
          <Button text="Buy Now"/>
          <i className="ri-play-circle-line text-4xl md:text-6xl"></i>
          <p className="font-medium md:text-3xl text-sm font-Indie py-4">Live Demo...</p>
        </div>
      </div>
      < Buycard />
    </div>
  );
};

export default Hero;

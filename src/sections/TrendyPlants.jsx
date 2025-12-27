import React from "react";
import Button from "../components/Button";
import bag from "../assets/Icons/bag.svg";

const TrendyPlants = ({ title, description, price, image, imagePosition = "left" }) => {
  return (
    <div
      className={`
        relative flex flex-col items-center text-center w-full md:w-full bg-white/10 backdrop-blur-lg rounded-3xl text-white p-12 shadow-xl border border-white/50 gap-6
        md:flex-row md:text-left md:items-center md:h-[390px] md:rounded-[110px]
        ${imagePosition === "right" ? "md:flex-row-reverse" : ""}
      `}
    >
      {/* Plant Image */}
      <div className="flex justify-center md:-mt-30 ">
        <img src={image} alt={title} className="w-48  md:w-xl object-contain" />
      </div>

      {/* Content */}
      <div className="flex flex-col md:w-1/2 md:ml-12 ">
        <h1 className="text-2xl md:text-3xl font-semibold mb-4">{title}</h1>
        <p className="text-sm md:text-sm leading-relaxed ">{description}</p>
        <h2 className="mt-4 text-3xl md:text-3xl font-semibold">Rs. {price}/-</h2>

        <div className="flex justify-center md:justify-start gap-4 mt-6">
          <Button text="Explore" />
          <button className="p-4 rounded-xl border-2 border-white">
            <img src={bag} alt="bag" className="w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendyPlants;

import React from 'react'
import bag from "../assets/Icons/bag.svg";

const PlantCard = ({ img, name, description, price }) => {
  return (
    <div className="relative w-xs md:w-sm md:h-[460px] bg-white/10 backdrop-blur-lg border border-white/40 rounded-[60px] text-white  md:mt-36 mx-auto p-16 overflow-visible">
      
      {/* Image overflow outside card */}
      <div className="absolute md:-top-27  -translate-x-1/5  md:w-md">
        <img
          src={img}
          alt={name}
          className="md:w-md object-contain"
        />
      </div>

      {/* Content */}
      <div className=" z-10 mt-39 -ml-3">
        <p className="md:text-3xl text-gray-300 mb-4">{name}</p>
        <p className="md:text-md text-gray-300 mb-4">{description}</p>

        <div className="flex justify-between items-center">
          <p className="md:text-3xl text-gray-300">Rs.{price}/-</p>
          <button className="p-4 rounded-xl border-2 border-white">
            <img src={bag} alt="bag" className="w-3" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default PlantCard

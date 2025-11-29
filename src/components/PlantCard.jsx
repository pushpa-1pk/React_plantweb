import React from 'react'
import bag from "../assets/Icons/bag.svg";

const PlantCard = ({ img, name, description, price }) => {
  return (
    <div className="relative w-xs md:w-lg md:h-[600px] bg-white/10 backdrop-blur-lg border border-white/40 rounded-[80px] text-white  md:mt-36 mx-auto p-16 overflow-visible">
      
      {/* Image overflow outside card */}
      <div className="absolute md:-top-35  -translate-x-1/5  md:w-xl">
        <img
          src={img}
          alt={name}
          className="md:w-xl object-contain"
        />
      </div>

      {/* Content */}
      <div className=" z-10 mt-56">
        <p className="md:text-4xl text-gray-300 mb-4">{name}</p>
        <p className="md:text-2xl text-gray-300 mb-4">{description}</p>

        <div className="flex justify-between items-center">
          <p className="md:text-4xl text-gray-300">Rs.{price}/-</p>
          <button className="p-4 rounded-xl border-2 border-white">
            <img src={bag} alt="bag" className="w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default PlantCard

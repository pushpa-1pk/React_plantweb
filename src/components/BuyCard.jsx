import React from 'react'
import { ChevronRight , Ellipsis } from 'lucide-react';
import Button from './Button';
import plant from "../assets/images/AglaonemaPlant.png";

const Buycard = () => {
  return (
    <div className="relative bg-white/10 backdrop-blur-xs rounded-4xl px-6 py-8 md:px-10 md:py-12 mx-auto md:mt-10 md:mr-15 w-xs md:w-sm text-white shadow-xl border border-white/20">

  <div className="absolute inset-x-0 -top-16 md:-top-40 flex justify-center">
    <img
      src={plant}
      alt="Aglaonema Plant"
      className="w-40 md:w-lg object-contain"
    />
  </div>


  {/* Text Section */}
  <p className="text-gray-300 text-sm md:text-xl tracking-wide mt-20 md:mt-55">Indoor Plant</p>
  
  <div className="flex justify-between pb-4 ">
    <h2 className="text-2xl md:text-3xl font-normal mt-1 text-gray-300">Aglaonema plant</h2>
    <span className="text-2xl cursor-pointer hover:text-gray-300 transition">
      ❯
    </span>
  </div>
  <Button text="Buy Now"/>


  {/* Slider dots */}
  <div className="flex justify-center gap-2 mt-6">
    <div className="w-2 h-2 rounded-full bg-white/70"></div>
    <div className="w-2 h-2 rounded-full bg-white/40"></div>
    <div className="w-2 h-2 rounded-full bg-white/40"></div>
  </div>
</div>

  )
}

export default Buycard
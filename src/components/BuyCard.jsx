import React from 'react'
import { ChevronRight , Ellipsis } from 'lucide-react';
import Button from './Button';

const Buycard = () => {
  return (
    <div className="relative bg-white/10 backdrop-blur-xs rounded-4xl px-6 py-8 md:px-15 md:py-12 mx-auto md:mt-10 md:mr-20 w-xs md:w-lg text-white shadow-xl border border-white/20">

  <div className="absolute inset-x-0 -top-16 md:-top-50 flex justify-center">
    <img
      src="./src/assets/images/AglaonemaPlant.png"
      alt="Aglaonema Plant"
      className="w-40 md:w-lg object-contain"
    />
  </div>


  {/* Text Section */}
  <p className="text-gray-300 text-sm md:text-2xl tracking-wide mt-20 md:mt-80">Indoor Plant</p>
  
  <div className="flex justify-between pb-4 ">
    <h2 className="text-2xl md:text-4xl font-normal mt-1 text-gray-300">Aglaonema plant</h2>
    <span className="text-3xl cursor-pointer hover:text-gray-300 transition">
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
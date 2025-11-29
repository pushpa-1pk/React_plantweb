import React from 'react'

const Footer = () => {
  return (
    <div className="text-white flex flex-col md:flex-row justify-between gap-16 md:mt-40 md:ml-24 px-6 pb-20 md:pb-30">

      {/* Brand */}
      <div className="md:w-xl -mt-4 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start mb-6">
          <img
            src="./src/assets/images/logo_plant.png"
            alt="logo"
            className="w-20 h-20 object-contain"
          />
          <p className="font-extrabold text-gray-200 text-2xl md:text-5xl ml-2">
            FloraVision.
          </p>
        </div>

        <h1 className="text-lg md:text-3xl md:mb-30 mb-8 tracking-tight">
          "From lush indoor greens to vibrant outdoor blooms, our plants are crafted
          to thrive and elevate your living environment."
        </h1>

        <ul className="text-3xl font-bold flex justify-center md:justify-start gap-8">
          <li>FB</li>
          <li>TW</li>
          <li>LI</li>
        </ul>
      </div>

      {/* Quick links */}
      <div className="text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">Quick Links</h1>
        <ul className="underline text-lg md:text-2xl">
          <li className="mb-4">Home</li>
          <li className="mb-4">Type’s Of Plant’s</li>
          <li className="mb-4">Contact</li>
          <li className="mb-4">Privacy</li>
        </ul>
      </div>

      {/* Subscribe */}
      <div className="text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">For Every Update.</h1>

        <div className="border border-white rounded-xl h-14 md:h-16 w-full md:w-lg flex justify-between items-center  md:mb-44">
          <input
            type="text"
            placeholder="Enter Email"
            className="text-lg md:text-2xl px-4 w-full bg-transparent outline-none"
          />
          <button className="bg-white text-[#1B2316] text-lg md:text-2xl rounded-lg md:h-14 m-1 px-4 font-semibold">
            SUBSCRIBE
          </button>
        </div>

        <h1 className="text-lg md:text-2xl">FloraVision © All rights reserved</h1>
      </div>

    </div>
  )
}

export default Footer

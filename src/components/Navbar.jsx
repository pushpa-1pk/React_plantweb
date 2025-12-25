import React, { useState } from 'react';

// IMAGES (correct imports)
import logo from "../assets/images/logo_plant.png";
import arrow from "../assets/Icons/dropdownArrow.svg";
import searchIcon from "../assets/Icons/search.svg";
import bagIcon from "../assets/Icons/bag.svg";
import menuIcon from "../assets/Icons/menu.svg";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);

  const handleMobileClick = () => setMobileDropdown(!mobileDropdown);

  return (
    <>
      {/* NAVBAR MAIN */}
      <div className="flex justify-between items-center px-8 py-14">

        {/* LOGO */}
        <div className="flex items-center">
          <img 
            src={logo}
            alt="logo" 
            className="w-15 h-15 object-contain"
          />
          <p className="font-extrabold text-white text-xl md:text-3xl">FloraVision.</p>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:block">
          <ul className="flex gap-15 text-white font-medium text-2xl font-Indie">
            <li className="cursor-pointer hover:text-gray-300"><a href="#home">Home</a></li>

            {/* Dropdown */}
            <li
              className="cursor-pointer hover:text-gray-200 flex items-center gap-3 relative group"
              onClick={handleMobileClick}
            >
              <a href="#plants">Plants Type</a>
              <img src={arrow} className="w-3 h-3 mt-1" alt="dropdown" />

              {/* Hover Dropdown (desktop) */}
              <ul className="absolute hidden group-hover:block bg-white/10 backdrop-blur-lg mt-50 w-46 shadow-lg rounded-2xl transition-all duration-300 ease-in-out">
                <li className="block px-4 py-1 hover:bg-white/20 cursor-pointer">Indoor Plants</li>
                <li className="block px-4 py-1 hover:bg-white/20 cursor-pointer">Desk Plants</li>
                <li className="block px-4 py-1 hover:bg-white/20 cursor-pointer">Balcony Plants</li>
                <li className="block px-4 py-1 hover:bg-white/20 cursor-pointer">Kitchen Plants</li>
              </ul>
            </li>

            <li className="cursor-pointer hover:text-gray-200"><a href="#more">More</a></li>
            <li className="cursor-pointer hover:text-gray-200"><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* DESKTOP ICONS */}
        <div className="hidden md:flex items-center gap-14">
          <img src={searchIcon} className="w-6 cursor-pointer" alt="search" />
          <img src={bagIcon} className="w-6 cursor-pointer" alt="bag" />
          <img src={menuIcon} className="w-6 cursor-pointer" alt="menu" />
        </div>

        {/* MOBILE MENU ICON */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => {
            setMobileOpen(!mobileOpen);
            setMobileDropdown(false);
          }}
        >
          <img src={menuIcon} className="w-7" alt="menu" />
        </div>
      </div>

      {/* MOBILE DROPDOWN MAIN */}
      {mobileOpen && (
        <div className="md:hidden px-12 pb-5 text-white font-Indie text-xl space-y-5 bg-black/30 backdrop-blur-sm">
          <a href="#home" onClick={() => setMobileOpen(false)} className="block">Home</a>

          <p className="cursor-pointer" onClick={handleMobileClick}>Plants Type ▼</p>

          {mobileDropdown && (
            <div className="space-y-2 pl-4">
              <a className="block" onClick={() => setMobileOpen(false)}>Indoor Plants</a>
              <a className="block" onClick={() => setMobileOpen(false)}>Desk Plants</a>
              <a className="block" onClick={() => setMobileOpen(false)}>Balcony Plants</a>
              <a className="block" onClick={() => setMobileOpen(false)}>Kitchen Plants</a>
            </div>
          )}

          <a href="#more" onClick={() => setMobileOpen(false)} className="block">More</a>
          <a href="#contact" onClick={() => setMobileOpen(false)} className="block">Contact</a>

          <div className="flex gap-8 pt-4">
            <img src={searchIcon} className="w-6" alt="search" />
            <img src={bagIcon} className="w-6" alt="bag" />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

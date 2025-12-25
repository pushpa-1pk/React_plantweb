import React from 'react'
import vectorLeft from "../assets/images/VectorL.png";
import vectorRight from "../assets/images/VectorR.png";

const SectionTitle = ({ title }) => {
  return (
    <div className="flex items-center justify-center mt-20">
      {/* Left vector */}
      <img
        src={vectorLeft}
        className="-m-10"
        alt="left vector"
      />

      {/* Text */}
      <h2 className="text-white font-semibold text-3xl md:text-6xl">
        {title}
      </h2>

      {/* Right vector */}
      <img
        src={vectorRight}
        className="-m-11"
        alt="right vector"
      />
    </div>
  );
};

export default SectionTitle;

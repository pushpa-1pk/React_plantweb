import React from 'react'

const SectionTitle = ({title}) => {
  return (
    
    <div className="flex items-center justify-center mt-20  ">
  {/* Left vector */}
  <img
    src="src/assets/images/VectorL.png"
    className=" -m-10 "
  />

  {/* Text */}
  <h2 className="text-white font-semibold text-3xl md:text-6xl ">
    {title}
  </h2>

  {/* Right vector */}
  <img
    src="src/assets/images/VectorR.png"
    className=" -m-11"
  />
</div>

  )
}

export default SectionTitle
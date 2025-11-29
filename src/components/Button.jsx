import React from 'react'

const Button = ({text}) => {
  return (
    <button className="border-2 border-white px-4 md:px-15 py-3 pb-4  rounded-xl text-sm md:text-3xl text-white">
    {text}
    </button>
  )
}

export default Button
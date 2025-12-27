import React from 'react'

const Button = ({text}) => {
  return (
    <button className="border-2 border-white px-4 md:px-12 py-2 pb-3  rounded-xl text-sm md:text-2xl text-white">
    {text}
    </button>
  )
}

export default Button
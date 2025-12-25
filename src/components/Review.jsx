import React from 'react'
import { Star } from 'lucide-react';
import photo from "../assets/images/Ronnie.png";

const Review = () => {
  return (
    <div className=' w-sm md:h-[220px] bg-white/10 backdrop-blur-lg border border-white/40 rounded-4xl text-white md:-mt-36 mt-6 md:m-12 p-5'>
        <div className='flex '>
            <img src={photo} alt="profile" />
            <div className='py-2 px-2'>
                 <p className=' text-2xl '>Ronnie Hamill</p>
                <div className='flex text-amber-300'>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-half-line"></i>
                </div>
            </div>

        </div>
        
        <p className='text-gray-300 text-lg'>I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.</p>
    </div>
  )
}

export default Review
import React from 'react'
import { Star, StarHalf } from 'lucide-react';

const ReviewCard = ({ img, name, comment }) => {
  return (
    <div className="w-xs md:w-[340px] bg-white/10 backdrop-blur-lg border border-white/30 rounded-[40px] text-white mx-auto p-10 shadow-xl">

      {/* Profile + Name + Rating */}
      <div className="flex items-center -ml-13">
        <img 
          src={img} 
          alt="profile" 
          className="w-15 h-15 md:w-40 md:h-auto rounded-full object-cover"
        />

        <div>
          <p className="md:text-2xl font-semibold md:-mt-20">{name}</p>
          <div className="flex text-amber-300 mt-1">
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <StarHalf size={18} fill="currentColor" />
          </div>
        </div>
      </div>

      {/* Comment */}
      <p className="text-gray-300  md:text-md leading-relaxed md:-mt-15">
        {comment}
      </p>
    </div>
  )
}

export default ReviewCard

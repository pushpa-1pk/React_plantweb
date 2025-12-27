import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Button from "../components/Button";
import { O2plants } from "../data/best";

const Best02 = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const totalSlides = O2plants.length;

  const goPrev = () => swiperRef && swiperRef.slidePrev();
  const goNext = () => swiperRef && swiperRef.slideNext();
  const formatNum = (n) => String(n).padStart(2, "0");

  return (
    <div className="w-full py-16 px-6">  {/* FULL WIDTH FIX */}
      <Swiper
        onSwiper={setSwiperRef}
        onSlideChange={(s) => setActiveIndex(s.realIndex)}
        loop
        className="w-full"
      >
        {O2plants.map((plant) => (
          <SwiperSlide key={plant.id}>
            
            {/* CARD */}
            <div className="relative w-full md:h-[500px] flex flex-col md:flex-row items-center md:gap-20 text-white  bg-white/10 backdrop-blur-lg border border-white/40 p-10 md:p-14  rounded-[80px] overflow-hidden">

              {/* IMAGE LEFT SIDE (Overflow look) */}
              <img
                src={plant.img}
                alt={plant.name}
                className="w-[340px] md:w-[700px] drop-shadow-xl md:-ml-24 mt-20 object-contain"
              />

              {/* RIGHT SIDE CONTENT */}
              <div className="flex flex-col gap-4 max-w-3xl">
                <h1 className="text-3xl md:text-5xl font-semibold">{plant.name}</h1>
                <p className="text-gray-300 text-lg md:text-2xl">{plant.short}</p>
                <p className="text-gray-300 md:text-2xl leading-relaxed">{plant.description}</p>

                {/* Button + Arrows + Number (same line) */}
                <div className="flex items-center justify-between mt-6 gap-4">
                  <Button text="Explore" />

                  <div className="flex items-center gap-4 select-none">
                    <button
                      onClick={goPrev}
                      className="text-6xl font-bold opacity-60 hover:opacity-100"
                    >
                      ‹
                    </button>

                    <span className="font-semibold text-lg mt-4 tracking-[0.3em]">
                      {formatNum(activeIndex + 1)}/{formatNum(totalSlides)}
                    </span>

                    <button
                      onClick={goNext}
                      className="text-6xl font-bold opacity-60 hover:opacity-100"
                    >
                      ›
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Best02;

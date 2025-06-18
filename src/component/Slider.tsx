"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/assets/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/assets/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/assets/slide3.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      3000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full  flex flex-col lg:flex-row h-screen bg-fuchsia-50">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col items-center justify-center gap-8 text-red-500 font-bold px-4 md:px-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-center uppercase leading-tight">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-500 text-white py-3 px-6 text-sm sm:text-base rounded hover:bg-red-600 transition">
          Order Now
        </button>
      </div>

      {/* IMAGE CONTAINER */}
      <div className="w-full flex-1 relative min-h-[50vh] lg:min-h-full">
        <Image
          src={data[currentSlide].image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;

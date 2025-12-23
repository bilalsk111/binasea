import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const categories = [
  {
    title: "Music",
    image: "./product-category-1.jpg",
  },
  {
    title: "Sport",
    image: "./product-category-4.jpg",
  },
  {
    title: "Digital Art",
    image: "./product-category-3.jpg",
  },
  {
    title: "Style",
    image: "./product-category-2.jpg",
  },
  {
    title: "Music",
    image: "./product-category-1.jpg",
  },
  {
    title: "Sport",
    image: "./product-category-4.jpg",
  },
  {
    title: "Digital Art",
    image: "./product-category-3.jpg",
  },
  {
    title: "Style",
    image: "./product-category-2.jpg",
  },
];

const AllCategories = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <div className="w-full py-16 relative mt-[8vw]">
      <h2 className="text-3xl font-bold text-white mb-8">All Categories</h2>
      <button
        onClick={scrollLeft}
        className="absolute -left-5 top-[60%] -translate-y-1/2 z-10
        bg-white/50 hover:bg-white/90 text-black p-3 rounded-full hover:scale-110 transition"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={scrollRight}
        className="absolute -right-5 top-[60%] -translate-y-1/2 z-10
        bg-white/50 hover:bg-white/90 text-black p-3 rounded-full hover:scale-110 transition"
      >
        <FaChevronRight />
      </button>
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
      >
        {categories.map((cat, index) => (
          <div
            key={index}
            className="min-w-75 h-45 rounded-md overflow-hidden
            relative cursor-pointer group"
          >
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-5 py-3 rounded-x  bg-white/15  backdrop-blur-md border border-white/2 shadow-lg">
              <h3 className="text-lg font-semibold text-white tracking-wide">
                {cat.title}
              </h3>
            </div>
          </div>
        ))}

                
      </div>
    </div>
  );
};

export default AllCategories;

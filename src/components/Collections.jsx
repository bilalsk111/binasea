import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Collections = () => {
    const collect = [
        {
            img1: "./public/collection1.jpg",
            img2: "./public/collection2.jpg",
            img3: "./public/collection3.jpg",
            username: "Moonbirds",
            dp: "./public/author14.png",
            price: 4500
        },
        {
            img1: "./public/collection1.jpg",
            img2: "./public/collection2.jpg",
            img3: "./public/collection3.jpg",
            username: "Moonbirds",
            dp: "./public/author14.png",
            price: 4500
        },
        {
            img1: "./public/collection1.jpg",
            img2: "./public/collection2.jpg",
            img3: "./public/collection3.jpg",
            username: "Moonbirds",
            dp: "./public/author14.png",
            price: 4500
        },
        {
            img1: "./public/collection1.jpg",
            img2: "./public/collection2.jpg",
            img3: "./public/collection3.jpg",
            username: "Moonbirds",
            dp: "./public/author14.png",
            price: 4500
        },
        {
            img1: "./public/collection1.jpg",
            img2: "./public/collection2.jpg",
            img3: "./public/collection3.jpg",
            username: "Moonbirds",
            dp: "./public/author14.png",
            price: 4500
        },
        {
            img1: "./public/collection1.jpg",
            img2: "./public/collection2.jpg",
            img3: "./public/collection3.jpg",
            username: "Moonbirds",
            dp: "./public/author14.png",
            price: 4500
        },
        {
            img1: "./public/collection1.jpg",
            img2: "./public/collection2.jpg",
            img3: "./public/collection3.jpg",
            username: "Moonbirds",
            dp: "./public/author14.png",
            price: 4500
        },
        {
            img1: "./public/collection1.jpg",
            img2: "./public/collection2.jpg",
            img3: "./public/collection3.jpg",
            username: "Moonbirds",
            dp: "./public/author14.png",
            price: 4500
        },
        {
            img1: "./public/collection1.jpg",
            img2: "./public/collection2.jpg",
            img3: "./public/collection3.jpg",
            username: "Moonbirds",
            dp: "./public/author14.png",
            price: 4500
        },
    ]
    const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -500, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 500, behavior: "smooth" });
  };

  return (
    <div className="w-full pt-[5vw] relative">
      <div className="flex items-center justify-between relative pb-10">
      <h2 className="text-4xl">Popular Collection</h2>
      <div className="absolute flex gap-3 right-3">
        <button onClick={scrollLeft} className="px-3 py-1 border-zinc-600 border">←</button>
        <button onClick={scrollRight} className="px-3 py-1 border-zinc-600 border">→</button>
      </div>
      </div>

      <div
        ref={sliderRef}
        className="cards flex gap-6 overflow-x-auto scroll-smooth no-scrollbar transition-all"
      >
        {collect.map((item, index) => (
          <div
            key={index}
            className="card min-w-[320px] p-5 border border-zinc-600 rounded-md"
          >
            <div className="imgs flex gap-2">
              <img
                className="w-1/2 h-52 object-cover rounded-md"
                src={item.img1}
                alt=""
              />
              <div className="w-1/2 flex flex-col gap-2">
                <img
                  className="h-[48%] object-cover rounded-md"
                  src={item.img2}
                  alt=""
                />
                <img
                  className="h-[48%] object-cover rounded-md"
                  src={item.img3}
                  alt=""
                />
              </div>
            </div>

            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <img src={item.dp} className="w-8 h-8 rounded-full" />
                <h4>{item.username}</h4>
              </div>
              <h5 className="text-sm text-zinc-400">26 items</h5>
            </div>

            <div className="flex items-center justify-between border-t border-zinc-600 pt-3">
              <div>
                <h3 className="uppercase text-sm">33.2 WETH</h3>
                <h4 className="text-zinc-500">$9000</h4>
              </div>

              <button className="group w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-red-400 transition">
                <FaHeart className="text-white group-hover:text-red-100 transition" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collections

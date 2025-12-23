import React from 'react'
import { FaHeart } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const Explore = () =>{
   const cat = [
        {
            label: "3D MODEL",
            hover: true
        },
        {
            label: "ANIME/MANGA",
            hover: false
        },
        {
            label: "CYBER PUNK",
            hover: false
        },
        {
            label: "PIXEL ART",
            hover: false
        },
        {
            label: "MUSIC",
            hover: false
        },
        {
            label: "ABSTRACT",
            hover: false
        },
        {
            label: "2D ARTS",
            hover: false
        }
    ]
    const nftCards = [
  {
    id: 1,
    title: "The Monkey sad",
    creator: "@SalvadorDali",
    bid: "1.56 wETH",
    image: "./card2/product3.jpg",
    bg: "#E7B27C",
  },
  {
    id: 2,
    title: "Phyllis Lowe",
    creator: "@SamsonHarley",
    bid: "1.56 wETH",
    image: "./card2/product44.jpg",
    bg: "#E9A2A8",
  },
  {
    id: 3,
    title: "Camille Rogers",
    creator: "@SalvadorDali",
    bid: "1.56 wETH",
    image: "./card2/product45.jpg",
    bg: "#B77CD8",
  },
  {
    id: 4,
    title: "Skye Carter",
    creator: "@RusselLindsey",
    bid: "1.56 wETH",
    image: "./card2/product46.jpg",
    bg: "#F6A6C1",
  },
  {
    id: 5,
    title: "Valentine Romer",
    creator: "@BrittanyWard",
    bid: "1.56 wETH",
    image: "./card2/product47.jpg",
    bg: "#F4D7B4",
  },
  {
    id: 6,
    title: "Julia Tomlinson",
    creator: "@ZackPerry",
    bid: "1.56 wETH",
    image: "./card2/product48.jpg",
    bg: "#E9B28B",
  },
  {
    id: 7,
    title: "Herbert Nunez",
    creator: "@JuliaTomlinson",
    bid: "1.56 wETH",
    image: "./card2/product49.jpg",
    bg: "#B8C9F1",
  },
  {
    id: 8,
    title: "Herbert Little",
    creator: "@SidneyHall",
    bid: "1.56 wETH",
    image: "./card2/product50.jpg",
    bg: "#EAE1D9",
  },
];

  return (
    <div className='w-full pt-28'>
      <div className='flex items-center justify-center flex-col gap-3'>
          <h2 className='text-5xl font-bold text-white mb-8'>Explore</h2>
                  <div className='flex items-start justify-between'>
                      <div className='flex items-start justify-evenly gap-3 mb-10'>
                          {cat.map((item, index) => (
                              <h3
                                  key={index}
                                  className={`${item.hover ? "bg-blue-400 text-white border-0" : "bg-transparent text-zinc-700 hover:bg-blue-400 hover:text-white"} text-xl rounded-full border-2 px-4 py-2 transition-all duration-300`}>
                                  {item.label}
                              </h3>
      
                          ))}
      
                      </div>
               </div>
      </div>
      <div className="flex flex-wrap items-center gap-5">
  {nftCards.map((item, index) => (
    <div
      key={index}
      className="w-[350px] h-[400px] rounded-2xl overflow-hidden relative bg-zinc-900"
      style={{ backgroundColor: item.bg }}
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover"
      />

      <div className="absolute bottom-0 left-0 w-full h-1/3 backdrop-blur-sm  hover:backdrop-blur-none hover:bg-white/15 transition-all duration-300 bg-white/40 px-4 py-3 flex justify-between items-center">
        <div>
          <h3 className="text-white/80 font-semibold text-3xl pb-8 hover:text-blue-400">
            “{item.title}”
          </h3>
          <p className="text-lg text-white hover:text-blue-400">
            {item.creator}
          </p>
        </div>

        <div className="flex items-center flex-col gap-4">
          <span className="text-md text-white/70">Current Bid</span>
          <span className="text-md font-semibold text-white bg-blue-500 px-2 py-1 rounded-md">
            {item.bid}
          </span>
        </div>
      </div>
    </div>
  ))}
</div>

</div>
  )
}

export default Explore

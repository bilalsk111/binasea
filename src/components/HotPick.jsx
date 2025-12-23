import React from 'react'
import { FaHeart } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const HotPick = () => {
    const nftData = [
        {
            id: 14843,
            title: "Avidlines",
            creator: "Frank Stevens",
            image: "./card/product2.jpg",
            price: "4.53 ETH",
        },
        {
            id: 14844,
            title: "Green Worm",
            creator: "Henry Vargas",
            image: "./card/product32.jpg",
            price: "2.10 ETH",
        },
        {
            id: 14845,
            title: "Pixel Bug",
            creator: "Alex Ray",
            image: "./card/product33.jpg",
            price: "1.75 ETH",
        },
        {
            id: 14846,
            title: "Neon Creature",
            creator: "Luna Fox",
            image: "./card/product34.jpg",
            price: "3.40 ETH",
        },
        {
            id: 14847,
            title: "Soft Monster",
            creator: "Chris Nolan",
            image: "./card/product35.jpg",
            price: "2.95 ETH",
        },
        {
            id: 14848,
            title: "Mini Alien",
            creator: "Zara Khan",
            image: "./card/product36.jpg",
            price: "1.20 ETH",
        },
        {
            id: 14849,
            title: "Cute Beast",
            creator: "Sam Wilson",
            image: "./card/product37.jpg",
            price: "3.85 ETH",
        },
        {
            id: 14850,
            title: "Jelly Bot",
            creator: "Eva Green",
            image: "./card/product38.jpg",
            price: "2.60 ETH",
        },
        {
            id: 14851,
            title: "Blob Kid",
            creator: "Ryan Lee",
            image: "./card/product39.jpg",
            price: "1.90 ETH",
        },
        {
            id: 14852,
            title: "Toy Ghost",
            creator: "Mia Stone",
            image: "./card/product40.jpg",
            price: "2.30 ETH",
        },
        {
            id: 14853,
            title: "Candy Critter",
            creator: "Noah Park",
            image: "./card/product41.jpg",
            price: "3.10 ETH",
        },
        {
            id: 14854,
            title: "Soft Dino",
            creator: "Olivia Hart",
            image: "./card/product42.jpg",
            price: "4.00 ETH",
        },
    ];

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

    return (
        <div className='w-full pt-[7vw]'>
            <h2 className='text-5xl font-bold text-white mb-8'>Hot Picks</h2>
            <div className='flex items-start justify-between'>
                <div className='flex items-start justify-evenly gap-3 mb-10'>
                    {cat.map((item, index) => (
                        <h3
                            key={index}
                            className={`${item.hover ? "bg-blue-400 text-white border-0" : "bg-transparent text-zinc-700 hover:bg-blue-400 hover:text-white"} text-xl rounded-full border-2 px-4 py-2 transition-all duration-300`}
                        >
                            {item.label}
                        </h3>

                    ))}

                </div>
                <h2 className='flex items-center gap-5 text-2xl mb-6'>Explore <FaArrowRight size={18} /></h2>
            </div>
            <div>


            </div>
            <div className="flex flex-wrap gap-6 items-center justify-around">
                {nftData.map((nft) => (
                    <div
                        key={nft.id}
                        className="w-[335px] rounded-xl bg-gradient-to-b from-[#2a2c32] to-[#181a1f] p-5 shadow-xl"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-white text-lg font-semibold">
                                    {nft.title} <span className="opacity-60">#{nft.id}</span>
                                </h3>
                                <p className="text-sm text-white/70">Creator</p>
                                <p className="text-white font-medium">{nft.creator}</p>
                            </div>

                            <button className="group w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-red-400 transition">
                                <FaHeart className="text-white group-hover:text-red-200 transition" />
                            </button>
                        </div>

                        {/* Image */}
                        <div className="relative rounded-xl overflow-hidden bg-lime-400">
                            <img
                                src={nft.image}
                                alt={nft.title}
                                className="w-full h-[295px] object-cover"
                            />
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between mt-5">
                            <div className="flex items-center gap-2 text-white font-semibold">
                                <img className='w-8 h-8' src="./ethe.svg" alt="" />
                                {nft.price}
                            </div>

                            <button className="px-6 py-2 rounded-full border border-white/40 text-white hover:bg-blue-400 hover:text-black transition">
                                Purchase
                            </button>
                        </div>
                    </div>
                ))}
            </div>
              <button className="px-4 py-3 border-2 hover:bg-blue-400 hover:border-blue-400 transition-all duration-300 border-amber-100 rounded-full text-center text-2xl  mt-8 ml-[43vw]">Load more</button>
        </div>
    )
}

export default HotPick;

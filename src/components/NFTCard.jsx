import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";

const NFTCard = () => {
  const nftData = [
    {
      id: 32,
      title: "Giulia Glur",
      image: "./public/product1.jpg",
      creator: "Frederick Dixon",
      avatar: "./public/author14.png",
      bid: "5 ETH",
      time: "13h : 19m : 20s",
    },
    {
      id: 45,
      title: "Neon Freak",
      image: "./public/product28.jpg",
      creator: "Ava Monroe",
      avatar: "./public/author16.png",
      bid: "3.2 ETH",
      time: "09h : 12m : 40s",
    },
    {
      id: 18,
      title: "Pixel Goblin",
      image: "./public/product27.jpg",
      creator: "John Carter",
      avatar: "./public/author1.png",
      bid: "6.8 ETH",
      time: "21h : 02m : 10s",
    },
    {
      id: 77,
      title: "Candy Punk",
      image: "./public/product29.jpg",
      creator: "Luna Ray",
      avatar: "./public/author16.png",
      bid: "4.1 ETH",
      time: "15h : 44m : 55s",
    },
    {
      id: 78,
      title: "Cyber Bloom",
      image: "./public/product31.jpg",
      creator: "Luna Ray",
      avatar: "./public/author1.png",
      bid: "4.1 ETH",
      time: "15h : 44m : 55s",
    },
  ];

  return (
    <div className="mt-14 ml-2">
      <h2 className="text-3xl font-bold text-white mb-8">Live Auctions</h2>
      <div className="flex gap-4.5 flex-wrap items-start justify-center">
        {nftData.map((item) => (
          <div
            key={item.id}
            className="w-84 rounded-xl bg-gradient-to-b from-[#2b2d33] to-[#1c1e23] p-5 shadow-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white text-lg font-semibold">
                {item.title} <span className="opacity-60">#{item.id}</span>
              </h3>

              <button className="group w-10 h-10 rounded-full border border-white/50 hover:border-0 flex items-center justify-center hover:bg-red-400 transition">
                <FaHeart
                  size={18}
                  className="text-white/45 group-hover:text-white transition-colors duration-300 pt-0.5"
                />
              </button>
            </div>

            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-tr from-pink-300 via-purple-300 to-green-200">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover"
              />

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/80 backdrop-blur text-xs font-semibold text-black">
                {item.time}
              </div>
            </div>

            <div className="flex items-center justify-between mt-5">
              <div className="flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.creator}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-xs text-white/60">Creator</p>
                  <p className="text-white font-medium">{item.creator}</p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-sm text-white/60">Current bid</p>
                <p className="text-white font-semibold flex items-center gap-2">{item.bid} <img className="w-6 h-6" src="./public/ethe.svg" alt=""/> </p>
              </div>
            </div>

            <button className="group flex items-center justify-center gap-3 w-full mt-5 py-3 rounded-full border border-white/30 text-white font-semibold hover:bg-white hover:text-black transition">
              <FaBagShopping className="text-white group-hover:text-black transition-colors duration-300" />
              Place Bid
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NFTCard;

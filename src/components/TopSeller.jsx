import React from "react";
import { FaPlus, FaCheck } from "react-icons/fa";

const TopSeller = () => {
    
const sellers = [
  { id: 1, name: "Roxanne Wallaker", rank: 1, eth: "1.56 wETH", img: "./public/author1.png"},
  { id: 2, name: "Winifred Clem", rank: 2, eth: "1.56 wETH", img: "./public/author14.png"},
  { id: 3, name: "Angelica Sherman", rank: 3, eth: "1.56 wETH", img: "./public/author16.png"},
  { id: 4, name: "Hayden Yates", rank: 4, eth: "1.56 wETH", img: "./public/author14.png"},
  { id: 5, name: "Rowena Tillery", rank: 5, eth: "1.56 wETH", img: "./public/author1.png"},
  { id: 6, name: "Roderick Norman", rank: 6, eth: "1.56 wETH", img: "./public/author16.png"},
  { id: 7, name: "Virginia Richards", rank: 7, eth: "1.56 wETH", img: "./public/author1.png"},
  { id: 8, name: "Barbara Moore", rank: 8, eth: "1.56 wETH", img: "./public/author16.png"},
  { id: 9, name: "Virginia Richards", rank: 9, eth: "1.56 wETH", img: "./public/author14.png"},
  { id: 10, name: "Colin Fennimore", rank: 10, eth: "1.56 wETH", img: "./public/author16.png"},
  { id: 11, name: "Ebenezer Anderson", rank: 11, eth: "1.56 wETH", img: "./public/author1.png"},
  { id: 12, name: "Simona Davidson", rank: 12, eth: "1.56 wETH", img: "./public/author16.png"},
];

  return (
    <div className="w-full pt-24">
      <h2 className="text-3xl font-bold text-white mb-8">Top Seller</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sellers.map((seller) => (
          <div
            key={seller.id}
            className="relative flex items-center justify-between p-5 rounded-2xl 
              bg-gradient-to-br from-[#2b2d33] border-[1px] to-[#1c1e23] border-[#2b2d33] hover:border-blue-400
             "
          >
            {/* Left */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src={seller.img}
                  alt={seller.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-600 rounded-full border-2 border-[#1c1e23]" />
              </div>

              <div>
                <h4 className="text-white font-semibold">{seller.name}</h4>
                <p className="text-sm text-white/70">{seller.eth}</p>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col items-end gap-2">
              <button
                className={`w-7 h-7 rounded-full flex items-center justify-center 
                ${seller.active ? "bg-green-500" : "bg-white"} 
                text-black`}
              >
                {seller.active ? <FaCheck size={12} /> : <FaPlus size={12} />}
              </button>
              <span className="text-white font-semibold">#{seller.rank}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSeller;

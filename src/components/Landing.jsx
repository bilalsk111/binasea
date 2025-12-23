import React from "react";

const Landing = () => {
  return (
    <div className="w-full flex items-center pt-24 mt-10">
      <div className="left-content w-1/2 h-full flex flex-col gap-10">
        <h1 className="text-8xl relative">
          Defind, Collect{" "}
          <span className="absolute right-0.5 -top-32">
            <img src="./public/bg-slider.png" alt="" />
          </span>{" "}
          and Sell Super Rate NFT
        </h1>
        <p className="text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, ea!
          Blanditiis ducimus aliquam sit necessitatibus explicabo error sapiente
          excepturi recusandae fugit nostrum!
        </p>
        <div className="flex gap-6 mt-6">
          <button className="px-6 py-3 text-lg font-semibold  bg-blue-400 rounded-lg border-2 border-blue-400 hover:bg-transparent transition-all duration-300 shadow-md hover:shadow-xl hover:border-white">
            Explore Now
          </button>

          <button className="px-6 py-3 text-lg font-semibold text-white border border-white/60 rounded-lg hover:bg-white hover:text-blue-400 transition-all duration-300 ml-0.5">
            Create
          </button>
        </div>
      </div>
      <div className="right-content w-1/2 h-full flex items-end flex-col relative pr-[10vw]">
        <div className="img w-[25vw] h-[60vh] p-4 border-2 overflow-hidden rounded-xl">
          <img src="/slider-1.jpg" alt="" className="w-full h-full object-cover rounded-md" />
        </div>
        <div className="profile w-[20vw] flex items-center gap-5 px-4 py-6 absolute -bottom-32 bg-zinc-200 rounded-md">
          <img className="w-16" src="./public/slider-4.png" alt="" />
          <div className="profile-content">
            <h3 className="text-black text-2xl font-semibold pb-5">"The Monkey Sad"</h3>
            <p className="text-md text-zinc-400">@Solvad0r Dali</p>
          </div>
        </div>
        <img className="absolute bottom-0 z-10 left-5" src="./public/slider-3.png" alt="" />
        <img className="absolute top-15 z-10 right-5" src="./public/slider-2.png" alt="" />
      </div>
    </div>
  );
};

export default Landing;

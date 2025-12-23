import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdPermIdentity } from "react-icons/md";

const Navbar = () => {
  const links = [
    {
      label: "Home", arrow: true
    },
    {
      label: "Explore", arrow: true
    },
    {
      label: "Pages", arrow: true
    },
    {
      label: "Create", arrow: false
    },
    {
      label: "Blog", arrow: true
    },
    {
      label: "Contact", arrow: false
    }
  ];

  return (
    <div className="flex items-center justify-between">
      <div className="nav-left flex items-center gap-20">
        <img src="/logo_dark.png" alt="logo" className="h-12" />

        <div className="flex items-center gap-10">
          {links.map((item, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center gap-2 hover:text-blue-400 transition text-2xl"
            >
              {item.label}
              {item.arrow && <IoIosArrowDown />}
            </a>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-6">
        <button className="text-2xl border-[1.5px] px-6 py-3 rounded-full text-zinc-300 hover:bg-blue-400 hover:text-black transition">Connect Wallet</button>
        <MdPermIdentity className="text-5xl border-[1.5px] h-14 w-14 p-2 rounded-full text-zinc-300" />
      </div>
    </div>
  );
};

export default Navbar;

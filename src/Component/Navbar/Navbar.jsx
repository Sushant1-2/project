import React from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 flex justify-between items-center bg-yellow-300 p-2 md:p-4 rounded-md shadow-md">
      <div className="flex items-center">
        <img
          src="/food.png"
          alt="Logo"
          className="w-10 h-10 md:w-12 md:h-12 rounded-2xl object-contain"
        />
        <h1 className="ml-4 text-xl md:text-2xl font-bold text-black hidden sm:block">
          GlobalBite
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center rounded-xl border-2 border-black bg-white overflow-hidden">
          <input
            type="text"
            className="outline-none px-3 py-2 text-base md:text-lg w-full"
            placeholder="Search.."
          />
          <div className="px-3 py-2">
            <FaSearch className="text-lg md:text-xl text-black" />
          </div>
        </div>

        <FaShoppingCart className="text-2xl md:text-3xl text-black" />

        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl px-4 py-1 md:px-6 md:py-2 text-sm md:text-base transition duration-300">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;

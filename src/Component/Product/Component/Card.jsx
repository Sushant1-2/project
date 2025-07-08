import React from "react";
import { FaStar } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

export const Card = ({ data }) => {
  console.log("data from card", data);

  return (
    <div className="max-w-xs bg-white rounded-2xl shadow-lg overflow-hidden m-4 p-4 transition-transform hover:scale-105">
      <div className="flex justify-center mb-4">
        <img
          src={data.image}
          alt={data.name}
          className="h-50 w-50 object-cover rounded-md"
        />
      </div>
      <div className="text-gray-500 text-sm text-center mb-2">
        {data.mealType}
      </div>
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold text-black">{data.name}</h2>
        <div className="flex text-yellow-400 text-sm">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </div>
      <div className="flex justify-between items-center mt-2">
        <div className="text-lg font-bold text-black">Rs. 2500</div>
        <button className="flex items-center font-bold gap-2 bg-yellow-400 text-black px-3 py-1 rounded-xl hover:bg-yellow-500 transition text-sm">
          <FaCartShopping />
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default Card;

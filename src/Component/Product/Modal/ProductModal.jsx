import React from "react";
import { FaStar } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";

const ProductModal = ({ data, setShowModal, setCartBoolean, CartBoolean }) => {
  const handleAddToCartFromModal = (e) => {
    e.stopPropagation();
    setCartBoolean((prev) => !prev);
  };

  return (
    <div
      className="flex justify-center items-center bg-gray-100/90 fixed inset-0"
      onClick={() => setShowModal(false)}
    >
      <div
        className="bg-white rounded-xl h-[60%] w-[65%] overflow-hidden flex"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-[40%] h-full relative">
          <div className="absolute p-1 bg-orange-500 rounded-full top-2 left-2 cursor-pointer">
            <IoMdArrowRoundBack onClick={() => setShowModal(false)} />
          </div>
          <img
            src={data.image}
            alt={data.name}
            className="bg-cover h-full w-full"
          />
        </div>
        <div className="w-[60%] p-5 flex flex-col overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">{data.name}</h2>
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar
                  key={i}
                  className={`text-yellow-400 mr-1 ${
                    i < data.rating ? "" : "opacity-30"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-1">Description</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-1">Ingredients</h3>
            <ul className="list-disc list-inside text-gray-700">
              {data.ingredients?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between space-x-3 mb-3">
            <div className="text-base font-bold text-black">Rs: 2000</div>
            <button
              className={`flex items-center gap-2 ${
                CartBoolean ? "bg-green-500" : "bg-amber-400 hover:bg-amber-500"
              } transition-colors text-black font-semibold px-4 py-2 rounded-xl`}
              onClick={handleAddToCartFromModal}
            >
              <IoCart />
              <span>{CartBoolean ? "Added to cart" : "Add to cart"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;

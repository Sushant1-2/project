import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import ProductModal from "../Modal/ProductModal";
import addToCart from "../../LocalStorage/addTocart";

export const Card = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const [cartBoolean, setCartBoolean] = useState(false);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (!cartBoolean) {
      addItemtoCart();
      setCartBoolean(true);
    }
  };

  const addItemtoCart = () => {
    addToCart(data);
  };

  return (
    <>
      <div
        className="w-full max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden m-4 p-4 transition-transform duration-300 hover:scale-105 cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <div className="flex justify-center mb-3">
          <img
            src={data.image}
            alt={data.name}
            className="h-44 w-44 object-cover rounded-lg"
          />
        </div>

        <div className="text-center text-sm text-gray-500 mb-1">
          {data.mealType}
        </div>

        <div className="flex items-center justify-center gap-6 mb-3">
          <div className="text-base font-semibold text-black">{data.name}</div>
          <div className="flex text-yellow-400 text-lg">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>

        <div className="flex items-center justify-center mb-3 gap-10">
          <div className="text-base font-bold text-black">
            Rs:{data.caloriesPerServing}
          </div>
          <button
            className={`flex items-center gap-2 ${
              cartBoolean ? "bg-green-500" : "bg-orange-500 hover:bg-orange-600"
            } text-white font-semibold px-4 py-2 rounded-xl transition-colors`}
            onClick={handleAddToCart}
          >
            <IoCart />
            {cartBoolean ? "Added to cart" : "Add to cart"}
          </button>
        </div>
      </div>

      {showModal && (
        <ProductModal
          data={data}
          setShowModal={setShowModal}
          CartBoolean={cartBoolean}
          setCartBoolean={setCartBoolean}
        />
      )}
    </>
  );
};

export default Card;

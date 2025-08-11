import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import ProductModal from "../../Product/Modal/ProductModal";
import addToCart from "../../LocalStorage/addTocart";
import { MdDelete } from "react-icons/md";
import deleteProductApi from "../../Api/Auth/product/deleteProductApi";
import ConfirmModal from "../../Button/ConformModal";

export const Card = ({ data }) => {
  const userData = JSON.parse(localStorage.getItem("userDetail"));

  const [showModal, setShowModal] = useState(false);
  const [cartBoolean, setCartBoolean] = useState(false);
  const [confirmData, setConfirmData] = useState({
    isOpen: false,
    title: "",
    message: "",
    onConfirm: () => {},
  });

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (!cartBoolean) {
      addToCart(data);
      setCartBoolean(true);
    }
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    setConfirmData({
      isOpen: true,
      title: "Delete Product?",
      message:
        "Are you sure you want to delete this product? This action cannot be undone.",
      onConfirm: () => {
        deleteProductApi({ id: data._id });
        setConfirmData((prev) => ({ ...prev, isOpen: false }));
      },
    });
  };

  return (
    <>
      <div
        className="w-full max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden m-4 p-4 transition-transform duration-300 hover:scale-105 cursor-pointer relative"
        onClick={() => setShowModal(true)}
      >
        {userData.role === "admin" && (
          <div
            className="w-[20px] h-[20px] bg-red-500 rounded-full flex justify-center items-center absolute top-1 right-1"
            onClick={handleDeleteClick}
          >
            <MdDelete className="text-xl text-white" />
          </div>
        )}

        <div className="flex justify-center mb-3">
          <img
            src={data.image}
            alt={data.pName}
            className="h-44 w-44 object-cover rounded-lg"
          />
        </div>

        <div className="text-center text-sm text-gray-500 mb-1">
          {data.category}
        </div>

        <div className="flex items-center justify-center gap-6 mb-3">
          <div className="text-base font-semibold text-black">{data.pName}</div>
          <div className="flex text-yellow-400 text-lg">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>

        <div className="flex items-center justify-center mb-3 gap-10">
          <div className="text-base font-bold text-black">Rs:{data.price}</div>
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

      <ConfirmModal
        isOpen={confirmData.isOpen}
        title={confirmData.title}
        message={confirmData.message}
        onConfirm={confirmData.onConfirm}
        onCancel={() => setConfirmData((prev) => ({ ...prev, isOpen: false }))}
      />
    </>
  );
};

export default Card;

import React from "react";
import Navbar from "../../Navbar/Navbar";
import StarCalc from "../../Product/component/StarCalc";
import { BsFillTrash2Fill } from "react-icons/bs";
import removeFromCart from "../../LocalStorage/removeFromCart";
import Quantity from "./Quantity";

const CartCard = ({ data, setCartData }) => {
  return (
    <div className="border bg-orange-400 overflow-hidden rounded-md flex flex-col md:flex-row hover:border-orange-600 hover:bg-orange-500 hover:shadow-md hover:shadow-black/50 relative w-full">
      <div
        className="h-10 w-10 flex justify-center items-center absolute rounded-full top-2 right-2 boder bg-red-500"
        onClick={() => removeFromCart(data, setCartData)}
      >
        <BsFillTrash2Fill className="text-white text-xl" />
      </div>
      <div className="flex justify-center md:justify-start">
        <img src={data.image} alt="" className="h-40 p-4 w-40 object-contain" />
      </div>
      <div className="flex flex-col md:flex-row p-4 justify-between w-full items-start md:items-center gap-4">
        <div className="space-y-2">
          <p className="text-2xl md:text-3xl font-bold text-black">
            {data.pName}
          </p>
          <p className="text-xl md:text-2xl font-medium text-gray-400">
            {/* {data.tags[0]} */}
          </p>
          <Quantity data={data} setCartData={setCartData} />
        </div>
        <div className="space-y-2 md:text-right">
          <StarCalc rating={Math.floor(Number(data.rating))} />
          <p className="text-xl md:text-2xl text-white">
            Price : Rs {data.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartCard;

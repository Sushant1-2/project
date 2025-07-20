import React from "react";
import addQuantity from "../../LocalStorage/addQuantity";
import subQuantity from "../../LocalStorage/subQuantity";
const Quantity = ({ data, setCartData }) => {
  return (
    <div className="flex items-center gap-5">
      <div
        className=" rounded-md bg-rose-700 text-white text-lg h-6 w-6 justify-center flex items-center font-semibold"
        onClick={() => subQuantity(data, setCartData)}
      >
        -
      </div>
      <div className="font-bold  text-lg">{data.quantity}</div>
      <div
        className=" rounded-md bg-green-700 text-white text-lg h-6 w-6 justify-center flex items-center font-semibold"
        onClick={() => addQuantity(data, setCartData)}
      >
        +
      </div>
    </div>
  );
};

export default Quantity;

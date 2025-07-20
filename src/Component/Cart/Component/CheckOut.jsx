import React from "react";
import Cart from "../Cart";
import totalAmount from "../../ComponentFunction/totalAmount";
const CheckOut = ({ visible, setVisible, cartData }) => {
  return (
    <div
      className={`${
        visible ? "flex" : "hidden"
      } inset-0 fixed bg-rose-500 justify-center items-center`}
      onClick={() => setVisible(false)}
    >
      <div className="w-70 max-h-[80vh] p-2 rounded-xl bg-white border-gray-500 overflow-auto">
        <div className="text-center font-semibold text-orange-600 ">
          CheckOut
        </div>
     
      <div>
        <div className="text-lg text-gray-600 font-medium">item</div>
        {cartData.map((item) => (
          <div
            className="flex justify-between text-sm text-gray-600"
            key={item.id}
          >
            <div className="flex-1 font-bold">{item.name}</div>
            <div className="w-16">{item.quanity}</div>
            <div className="w-20 ">{item.caloriesPerServing}</div>
          </div>
        ))}
        <div className="flex justify-between font-medium text-gray-900">
          <div>Total</div>
          <div className="w-16 text-end">${totalAmount(cartData)}</div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CheckOut;

import React from "react";
import totalAmount from "../../ComponentFunction/totalAmount";
import UserDetail from "./UserDetail";

const CheckOut = ({ visible, setVisible, cartData }) => {
  return (
    <div
      className={`${
        visible ? "flex" : "hidden"
      } fixed inset-0 z-50 items-center justify-center bg-white bg-opacity-30 backdrop-blur-md`}
      onClick={() => setVisible(false)}
    >
      <div
        className="w-[95%] max-w-5xl max-h-[80vh] p-6 rounded-3xl bg-white shadow-2xl flex relative overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left side: Cart summary */}
        <div className="flex flex-col w-1/2 border-r border-orange-300 pr-6 max-h-full">
          <div className="text-center font-extrabold text-3xl text-orange-500 mb-6 tracking-wide">
            Checkout
          </div>

          <div className="flex justify-between px-4 text-gray-600 text-sm font-semibold border-b border-orange-300 pb-3">
            <span className="w-1/2">Item</span>
            <span className="w-1/4 text-center">Qty</span>
            <span className="w-1/4 text-right">Price</span>
          </div>

          <div className="flex-grow py-3 space-y-4 scrollbar-thin scrollbar-thumb-orange-400 scrollbar-track-orange-100 overflow-auto max-h-[calc(80vh-150px)]">
            {cartData.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-orange-50 px-4 py-3 rounded-lg shadow-sm hover:bg-orange-100 transition"
              >
                <div className="w-1/2 text-gray-800 font-semibold truncate">
                  {item.name}
                </div>
                <div className="w-1/4 text-center text-gray-700 font-medium">
                  x{item.quantity}
                </div>
                <div className="w-1/4 text-right font-semibold text-gray-900">
                  ${item.caloriesPerServing}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center border-t border-orange-300 pt-5 mt-5 text-xl font-bold text-gray-900">
            <div>Total:</div>
            <div>${totalAmount(cartData)}</div>
          </div>
        </div>

        {/* Right side: User form */}
        <div className="w-1/2 pl-6 max-h-full overflow-visible">
          <UserDetail />
        </div>
      </div>
    </div>
  );
};

export default CheckOut;

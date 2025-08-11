import React from "react";
import { LuDot } from "react-icons/lu";

const OrderCard = ({ data }) => {
  // Merge duplicate items by itemName with numeric quantity addition
  const mergedItems = Object.values(
    data.items.reduce((acc, item) => {
      if (!acc[item.itemName]) {
        acc[item.itemName] = { ...item, quantity: Number(item.quantity) };
      } else {
        acc[item.itemName].quantity += Number(item.quantity);
      }
      return acc;
    }, {})
  );

  return (
    <div className="border shadow-md rounded-lg bg-white w-full max-w-3xl text-gray-700 font-medium p-4 hover:shadow-lg transition-all duration-200 flex flex-row gap-6">
      {/* Customer Details */}
      <div className="flex flex-col flex-1 border-r pr-4">
        <h2 className="text-base font-bold text-gray-900 mb-2">
          Customer Details
        </h2>
        <div className="flex justify-between text-sm mb-1">
          <span>{data.cName}</span>
          <span>{data.contactNumber}</span>
        </div>
        <div className="flex justify-between text-xs text-gray-500 mb-2">
          <span>{data.city}</span>
          <span>{data.street}</span>
        </div>
        {data.deliveryDescription && (
          <p className="text-xs text-gray-600">
            <span className="font-semibold">Delivery:</span>{" "}
            {data.deliveryDescription}
          </p>
        )}
      </div>

      {/* Order Items */}
      <div className="flex flex-col flex-1">
        <h3 className="text-base font-bold text-gray-900 mb-2">Order Items</h3>
        <div className="space-y-1 flex-1 overflow-auto max-h-48">
          {mergedItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center text-sm bg-gray-50 p-2 rounded-md"
            >
              <div className="flex items-center gap-1">
                <LuDot size={16} />
                <span>{item.itemName}</span>
              </div>
              <span className="font-semibold">x{item.quantity}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 flex justify-between border-t pt-2 font-bold text-sm">
          <span>Total Amount</span>
          <span>Rs {data.totalAmount}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;

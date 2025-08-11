import React from "react";
import OrderCard from "./Components/OderCard";

// Helper function to merge multiple orders by customer
function mergeOrdersByCustomer(orders) {
  const merged = {};

  orders.forEach((order) => {
    const key = order.cName + "|" + order.contactNumber; // unique key per customer

    if (!merged[key]) {
      // Clone order and items
      merged[key] = {
        ...order,
        items: [...order.items],
        totalAmount: order.totalAmount,
      };
    } else {
      // Merge items into existing customer's order
      order.items.forEach((item) => {
        const existingItem = merged[key].items.find(
          (i) => i.itemName === item.itemName
        );
        if (existingItem) {
          existingItem.quantity += item.quantity;
        } else {
          merged[key].items.push({ ...item });
        }
      });

      // Sum total amount
      merged[key].totalAmount += order.totalAmount;
    }
  });

  return Object.values(merged);
}

const OrdersList = ({ orderData }) => {
  const mergedOrders = mergeOrdersByCustomer(orderData);

  return (
    <div className="flex flex-col gap-6 p-4">
      {mergedOrders.length === 0 ? (
        <p className="text-center text-gray-500">No orders found.</p>
      ) : (
        mergedOrders.map((order, index) => (
          <OrderCard key={index} data={order} />
        ))
      )}
    </div>
  );
};

export default OrdersList;

import React, { useEffect } from "react";
import getOrderApi from "../../Api/order/getOrderApi";
import OrderCard from "./OderCard";

const Order = ({ orderData }) => {
  return (
    <div>
      {orderData.map((item) => (
        <OrderCard key={item._id} data={item} />
      ))}
    </div>
  );
};

export default Order;

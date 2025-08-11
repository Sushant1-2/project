import React, { useEffect, useState } from "react";
import DashNav from "./Components/DashNav";
import Dashboard from "./Components/Dashboard";
import OrdersList from "./OrderList";
import getOrderApi from "../Api/order/getOrderApi";
import { useOutletContext } from "react-router";

const DashboardMain = () => {
  
  const mainData = useOutletContext();
  const userData = JSON.parse(localStorage.getItem("userDetail"));

  if (!userData || userData.role !== "admin") {
    window.location.href = "/";
    return null;
  }

  const [activeScreen, setActiveScreen] = useState(1);
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    getOrderApi(setOrderData);
  }, []);

  return (
    <div className="flex h-screen bg-sky-50">
      <DashNav activeScreen={activeScreen} setActiveScreen={setActiveScreen} />

      <main className="flex-1 overflow-auto p-6">
        {activeScreen === 1 && (
          <Dashboard orderData={orderData} productData={mainData} />
        )}
        {activeScreen === 2 && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Orders</h1>
            <OrdersList orderData={orderData} />
          </div>
        )}
      </main>
    </div>
  );
};

export default DashboardMain;

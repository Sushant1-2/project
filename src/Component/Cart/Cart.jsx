import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import CartCard from "./Component/CartCard";
import OrangeButton from "../Button/OrangeButton";
import totalAmount from "../ComponentFunction/totalAmount";
import CheckOut from "./Component/CheckOut";

const Cart = () => {
  const [visible, setVisible] = useState(false);
  let data = localStorage.getItem("cart1");
 const [cartData, setCartData] = useState(
   JSON.parse(localStorage.getItem("cart1")) || []
 );

  return (
    <div className="flex flex-col h-[100vh]">
      <Navbar />
      <div className=" mx-5 space-y-6 flex-1 overflow-auto ">
        {cartData.map((item) => (
          <CartCard data={item} key={item._id} setCartData={setCartData} />
        ))}
      </div>
      <hr className="my-5" />
      <div className="mx-5 flex justify-between items-center p-2">
        <OrangeButton title={"check out"} onClick={() => setVisible(true)} />
        <div className="flex text-orange-600 font-bold text-2xl gap-2">
          <div>Total amount:</div>
          <div>${totalAmount(cartData)}</div>
        </div>
      </div>
      <CheckOut visible={visible}  setVisible={setVisible} cartData={cartData} />
    </div>
  );
};

export default Cart;

import React from "react";
import Cart from "../Cart";
const CheckOut = ({ visible, setVisible }) => {
  return (
    <div
      className={`${visible ? "flex" : "hidden"} inset-0 fixed bg-rose-500`}
      onClick={() => setVisible(false)}
    ></div>
  );
};

export default CheckOut;

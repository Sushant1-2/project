import React from "react";
import General from "./Component/General";
import Location from "./Component/Location";
import Password from "./Component/Password";
import DeleteAccount from "./Component/DeleteAccount";
import Navbar from "../Navbar/Navbar";

const Setting = () => {
  return (
    <div className="p-2 flex flex-col h-[100vh]">
     <Navbar/>
      <div className=" flex flex-col my-4 gap-4">
        <General />
        <Location />
        <Password />
        <DeleteAccount />
      </div>
    </div>
  );
};

export default Setting;

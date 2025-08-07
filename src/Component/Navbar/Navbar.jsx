import React from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router";
import { CiSettings } from "react-icons/ci";


const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("logout sucessfully");
    navigate("/auth");
  };
  return (
    <div className="  flex justify-between items-center bg-yellow-300 p-2 md:p-4 rounded-md shadow-md">
      <div className="flex items-center">
        <NavLink to="/">
          <img
            src="/foodlogo.png"
            alt="Logo"
            className="w-10 h-10 md:w-12 md:h-12 rounded-2xl object-contain"
          />
        </NavLink>
        <h1 className="ml-4 text-xl md:text-2xl font-bold text-black hidden sm:block">
          GlobalBite
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center rounded-xl border-2 border-black bg-white overflow-hidden">
          <input
            type="text"
            className="outline-none px-3 py-2 text-base md:text-lg w-full"
            placeholder="Search.."
          />
          <div className="px-3 py-2">
            <FaSearch className="text-lg md:text-xl text-black" />
          </div>
        </div>
        <NavLink to="/Cart">
          <FaShoppingCart className="text-2xl md:text-3xl text-black" />
        </NavLink>
        <NavLink to={"/setting"}>
          <CiSettings className="text-4xl text-gray-600" />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;

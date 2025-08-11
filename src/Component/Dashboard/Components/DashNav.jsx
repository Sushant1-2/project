import React from "react";
import { RiDashboardFill } from "react-icons/ri";
import { FaBoxOpen, FaClipboardList } from "react-icons/fa";
import { useNavigate } from "react-router";

const DashNav = ({ activeScreen, setActiveScreen }) => {
  const navigate = useNavigate();

  const navItems = [
    {
      id: 1,
      label: "Dashboard",
      icon: <RiDashboardFill size={20} />,
      onClick: () => setActiveScreen(1),
    },
    {
      id: 2,
      label: "Orders",
      icon: <FaClipboardList size={20} />,
      onClick: () => setActiveScreen(2),
    },
    {
      id: 3,
      label: "Add Product",
      icon: <FaBoxOpen size={20} />,
      onClick: () => navigate("/product"),
    },
  ];

  return (
    <nav className="w-60 bg-orange-300 p-4 flex flex-col gap-4 min-h-screen">
      {navItems.map(({ id, label, icon, onClick }) => (
        <div
          key={id}
          onClick={onClick}
          className={`flex items-center gap-3 p-3 rounded-md border font-medium cursor-pointer transition-colors duration-200
            ${
              activeScreen === id
                ? "bg-orange-500 text-white shadow-md shadow-orange-200 border-orange-500"
                : "bg-orange-400 text-white border-orange-400 hover:bg-orange-500 hover:border-orange-500 hover:shadow-md"
            }`}
        >
          {icon}
          <span>{label}</span>
        </div>
      ))}
    </nav>
  );
};

export default DashNav;

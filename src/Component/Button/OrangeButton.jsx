import React from "react";

const OrangeButton = ({ title, ...props }) => {
  return (
    <button
      {...props}
      className="bg-rose-600 text-white font-bold py-3 px-7 rounded-2xl shadow-lg
        hover:bg-rose-700 hover:shadow-xl transform hover:scale-105 transition duration-300 cursor-pointer select-none"
    >
      {title}
    </button>
  );
};

export default OrangeButton;

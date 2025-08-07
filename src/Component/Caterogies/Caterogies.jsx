import React, { useState } from "react";

const icons = [
  { name: "All", src: "./Icons/burger.png" },
  { name: "Lunch", src: "./Icons/hamburger.png" },
  { name: "Snack", src: "./Icons/sweets.png" },
  { name: "Dinner", src: "./Icons/curry.png" },
  { name: "Beverage", src: "./Icons/soft-drink.png" },
];

const Caterogies = ({mainData, setProductData}) => {
  const [pick, setPick] = useState("All");
  const setCategories = (category) => {
  if (category === "All") {
    setProductData(mainData);
    return;
  }

    let tempArr = mainData.filter((item) => item.category[0] == category);
    setProductData(tempArr);
  };
  return (
    <div className="px-4 py-6">
      <div className="text-black text-2xl md:text-3xl font-bold text-center mb-6">
        Categories
      </div>

      <div className="flex flex-wrap justify-center gap-30">
        {icons.map((item) => (
          <div
            className={`flex flex-col items-center gap-2 cursor-pointer font-medium `}
            key={item.name}
            onClick={() => {setCategories(item.name),setPick(item.name)}}
          >
            <div
              className={`bg-orange-400 border-orange-400 rounded-3xl p-2 md:p-3 ${
                item.name == pick && "border-amber-500 shadow-md shadow-black/50"
              }`}
            >
              <img
                src={item.src}
                alt={item.name}
                className="h-16 w-16 md:h-20 md:w-20"
              />
            </div>
            <div className="text-sm md:text-base">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Caterogies;

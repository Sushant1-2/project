import React from "react";

const HeroSection = () => {
  return (
    <div className="m-5">
      <div className="bg-[url('./FoodHero.png')] md:h-[600px] bg-cover rounded-lg bg-no-repeat flex items-center">
        <div>
          <div className="md:text-6xl text-3xl font-bold text-black">
            <p className="m-5 p-0">Order your</p>
            <p className="m-5 p-0">favorite food</p>
          </div>

          <div className="md:text-3xl text-lg text-black max-w-xl p-4 m-2">
            "Discover delicious recipes, expert cooking tips, and mouthwatering
            food inspiration all in one place. Your journey to great taste
            starts here! Whether you're a home cook or a foodie, there's
            something fresh for everyone."
          </div>

          <div className="m-4">
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl px-6 py-3 text-lg md:text-2xl transition duration-300">
              Order Now
            </button>
          </div>

          <div className="bg-orange-400 rounded-3xl px-4 py-2 w-fit text-lg md:text-3xl m-3 text-black font-semibold">
            Enjoy 10% discount on first order
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import HeroSection from "./Component/HeroSection/HeroSection";
import Caterogies from "./Component/Caterogies/Caterogies";
import Product from "./Component/Product/Product";
import productDataapi from "./Component/Api/productDataapi";
import { useNavigate, useOutletContext } from "react-router";

function App() {
  const mainData = useOutletContext();
  const [productData, setProductData] = useState(mainData);
useEffect (()=>{
  setProductData(mainData);
  
})
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Caterogies setProductData={setProductData} mainData={mainData} />
      <Product productData={productData} />
    </div>
  );
}

export default App;

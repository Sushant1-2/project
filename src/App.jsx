import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import HeroSection from './Component/HeroSection/HeroSection'
import Caterogies from "./Component/Caterogies/Caterogies"
import Product from './Component/Product/Product'


function App() {

  return (
    <div>
   <Navbar/>
   <HeroSection/>
   <Caterogies/>
  <Product/>
    </div>
  )
}

export default App

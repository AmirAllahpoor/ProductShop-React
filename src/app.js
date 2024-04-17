import React, { Component } from 'react';
import { BrowserRouter as Router , Routes , Route } from "react-router-dom"
import Home from './Components/Home';
import Navbar from './Components/navbar';
import Card from "./Components/Card"
import { useState } from 'react';
import MyContext from './context/myContext';
import logo from "./assets/iphone13.jpg"
import logo2 from "./assets/headphone.png"
import logo3 from "./assets/aipodapple.jpg"
import logo4 from "./assets/smartwatch.jpg"
import logo5 from "./assets/mouse.webp"
import logo6 from "./assets/241388_0_ohiprt.png"
import logo7 from "./assets/mousepadrgb.jpg"
import logo8 from "./assets/monitor.png"

const DataProducts = [
    {
      id: 1,
      img: logo,
      name: 'Iphone 13ProMax',
      price : 62000 ,
      count : 0,
    },
    {
      id: 2,
      img: logo2,
      name: 'HeadPhone Logitech',
      price : 1500,
      count :0 ,
    },
    {
      id: 3,
      img: logo3,
      name: "Airpod Apple",
      price : 3000,
      count :0 ,
    },
    {
      id: 4,
      img: logo4,
      name: "Smart Watch T800 ",
      price : 2700,    
      count : 0,
    },
    {
      id: 5,
      img: logo5,
      name: "Mouse Razer ",
      price : 1400,    
      count : 0,
    },
    {
      id: 6,
      img: logo6,
      name: "keyboard Razer ",
      price : 1800,    
      count : 0,
    },
    {
      id: 7,
      img: logo7,
      name: "MousePad Rgb ",
      price : 900,    
      count : 0,
    },
    {
      id: 8,
      img: logo8,
      name: "Monitor Gaming ",
      price : 3800,    
      count : 0,
    },
  ]


const App = () => {
  
  const [myProduct , SetMyProduct] = useState(DataProducts)

  return (

    <>
    <MyContext.Provider value={{
      listMyProduct : myProduct,
      onPlus : plus,
      onManfi : Manfi,
    }}>
    <Router>
     <Navbar />
         <Routes>
             <Route path='/Card' element={<Card />} />
             <Route path='/Card' element={<Card />} />
             <Route path='/' element={<Home />} />
         </Routes>
    </Router>
    </MyContext.Provider>
    </>

   );

   function plus (productid) {
       const newProduct = [...myProduct]
       const index = newProduct.findIndex(p => p.id === productid)
       newProduct[index].count += 1;
       SetMyProduct(newProduct)
    }

    function Manfi (productid) {
      const newProduct = [...myProduct]
      const index = newProduct.findIndex(p => p.id === productid)
      newProduct[index].count !== 0 ? newProduct[index].count -= 1 : newProduct[index].count = 0
      SetMyProduct(newProduct)
    }

    

}
 
export default App;
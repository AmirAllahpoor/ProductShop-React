
import "./home.css"
import React , { useState } from "react"
import { useContext } from "react"
import MyContext from "../context/myContext"

const Home = () => {
  let existingData = ''
  let productCard = []

  const Mycontext = useContext(MyContext)

  const PlusHandler = (id) => {
    Mycontext.onPlus(id)
  }

  const ManfiHandler = (id) => {
    Mycontext.onManfi(id)
  }

  const BuyHandler = (Product) => {
  if(Product.count !== 0) {
    existingData = localStorage.getItem('ProductCard')
    if (existingData) {
      productCard = JSON.parse(existingData);
    } else {
      productCard = []
    }
    productCard.push(Product);
    localStorage.setItem('ProductCard' , JSON.stringify(productCard))
  } else {
    alert('Meghdar Count Product 0 Ast')
  }

  } 

  return ( 
    <div className="container mt-5">
      <div className="row">
        {
          Mycontext.listMyProduct.map((p) => {
            return (
              <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12" key={p.id} id={p.id}>
                <div className="card border-secondary 1 mb-5 flex-column  justify-content-center  align-items-center" style={{width : 300 , height : 400 , borderRadius : 10}}>
                  <img src={p.img} style={{width :100 , objectFit: "cover"}} className="card-img-top m-2 " alt="logo" />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <div className="row2">
                      <button type="button" onClick={() => ManfiHandler(p.id)} className="btn btn-dark btn-sm">-</button>
                      <p>{p.count}</p>
                      <button type="button" onClick={() => PlusHandler(p.id)} className="btn btn-dark btn-sm">+</button>
                    </div>
                    <p className="card-prices mt-3">{p.price} $</p>
                    <div className="submit-card">
                      <button type="button" className="btn btn-dark buttonsubmit" onClick={() => BuyHandler(p)}>Buy it!</button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }    
      </div>
        </div>
     );
}
 
export default Home;
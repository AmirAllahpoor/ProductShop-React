import { useState } from "react"
import "./home.css"
const localProduct = JSON.parse(localStorage.getItem('ProductCard')) 

const Card = () => {

  const [products , setmyproduct] = useState(localProduct)

  function DeleteAllHandler (){ 
    localStorage.clear()
    window.location.reload()
  }

  function RemoveHandler(productid) {
    const newProduct = products.filter(p => p.id !== productid)
    setmyproduct(newProduct)
    localStorage.setItem("ProductCard", JSON.stringify(newProduct));
 }
    return ( 
        localProduct ? (
          <div className="container mt-5">
            <button className="btn btn-warning mb-4" onClick={DeleteAllHandler}>Remove All</button>
         <div className="row">
            {
          products.map((p) => {
            return (
              <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12" key={p.id} id={p.id}>
                <div className="card border-secondary 1 mb-5 flex-column  justify-content-center  align-items-center text-center" style={{width : 300 , height : 430 , borderRadius : 10}}>
                  <img src={p.img} style={{width :90 , objectFit: "cover"}} className="card-img-top m-2 " alt="logo" />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <div className="row2">
                      <p>Count : {p.count}</p>
                    </div>
                    <p className="card-prices mt-4 ">Primary Price : { p.price} $</p>
                    <p className="card-prices ">Sum Price : {p.price * p.count} $</p>
                    <div className="submit-card flex flex-row justify-content-evenly ">
                      <button type="button" className="btn btn-dark buttonsubmit">Buy it!</button>
                      <button type="button" className="btn btn-danger buttonremove" onClick={() => RemoveHandler(p.id)}>Remove it!</button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }    
      </div>
      </div>
        ) : (
            <h2 className="m-4"> Empty Product Card </h2>
        )
     );
}
 
export default Card;
import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from "./StateProvider"
import CheckoutProduct from "./CheckoutProduct"

function Checkout() {
  // yha bhi user ko access krna pdega bcs we working of username on checkout page
    const [{basket,user}, dispatch]= useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img className="checkout_ad" src=""alt=""/>
        <div>
          <h3>Hello,{user?.email}</h3>  
            <h2 className="checkout_title">
                Your shopping basket
            </h2>
            { /* here we do manual storation
             <CheckoutProduct
                id='112342'
                title='This is lorem ipsum'
                image=""
                price={199.99}
                rating={5}
               /> 
            <CheckoutProduct
                id='112342'
                title='This is lorem ipsum'
                image=""
                price={199.99}
                rating={5}
               />  */}
            {basket.map(item => (
                <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
               /> 
               ))}

       </div>

      </div>
      <div className="checkout_right">
        <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout

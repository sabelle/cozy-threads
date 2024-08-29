import React from 'react'
import Navigation from './Navigation'
import Checkout from './Checkout'
// import {Message, Checkout} from './Checkout.js'



const Cart = (cart) => {
    // console.log('cart page, cart', cart)
 return (
    <div>
      <Navigation />
      <h2>cart</h2>
      <Checkout cart={cart} />
    </div>
        
  );
}

export default Cart
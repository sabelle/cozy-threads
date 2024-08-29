import React from 'react'
import Navigation from './Navigation'
import Checkout from './Checkout'
// import {Message, Checkout} from './Checkout.js'


let globalCart = new Map()
export const UpdateCart = (cart) => {
    globalCart = cart
    console.log('UPDATE CART ', globalCart)
}
export const Cart = () => {
    // UpdateCart(cart)
    // const updateCart = (cart) => {
    //     const [cart, setCart] = useState(new Map())
    //     setCart(cart)
    // }
    
    console.log('CART PAGE - cart', globalCart)
  return (
    <div>
      <Navigation />
      <h2>cart</h2>
      
      <Checkout cart={globalCart} />
    </div>
        
  );
}
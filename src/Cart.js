import React from 'react'
import Navigation from './Navigation'
import Checkout from './Checkout'
import {ProductDisplay} from './ProductCard'
import {catalog} from './Catalog'



const Cart = (cart) => {
  let cart_ref = cart['cart']
  console.log('cart page, cart', cart_ref)
  // console.log('------\nprefilter:', catalog)
  let filtered_catalog = catalog.filter(function(product) {return (cart_ref.hasOwnProperty(product.id)) })
  console.log('------\nfiltered catalog:', filtered_catalog)

  if (Object.keys(cart_ref).length == 0) {
    return (
      <div>
      <Navigation />
      <h2>cart</h2>
      <Checkout cart={cart} />
    </div>
    )
  }
    
  return (
    <div>
      <Navigation />
      <h2>cart</h2>
      {filtered_catalog.map(product => (
        
          <ProductDisplay
            product={product} 
            quantity={cart_ref[product.id]['quantity']} 
            price_id={product.price}
            className ='card'/>))}

      <Checkout cart={cart} />
    </div>
        
  );
}

export default Cart
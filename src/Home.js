import React, {useContext, useState} from 'react'
import './Home.css'
import cartContext from './App'
import {UpdateCart} from './Cart'
import ProductCard from './ProductCard.js'
import Navigation from './Navigation.js'
import {catalog} from './Catalog.js'

const Home = () => {
  const [cart, setCart] = useState(new Map())
  const onChange = (id, increment, price_id) => { //cart key: id, val: [quantity, price id]
    const updatedCart = new Map(cart)
    if (updatedCart.has(id)) {
      let updatedQuantity = updatedCart.get(id)[0] + increment;
      console.log('quantity', updatedCart.get(id)[0])
      updatedCart.set(id, [updatedQuantity, price_id])

      if (updatedQuantity <= 0) { // remove id from cart if quantity = 0
        updatedCart.delete(id)
      }
    } else { // cart doesn't have id yet
      if (increment == -1) {
        return
      }
      updatedCart.set(id, [1, price_id])
    }
    
    setCart(updatedCart)
    console.log('updated cart:', updatedCart)
  }

  return (
    <>
      <Navigation />
      <div className='Home-grid'>
        {/* cart key: id, val: [quantity, price id] */}
        <UpdateCart cart={cart}/>
        {catalog.map(product => (
          <ProductCard 
            onChange={onChange} 
            product={product} 
            quantity={cart.get(product.id) ? cart.get(product.id)[0]: 0}  // do
            price_id={product.price_id}
            className ='Card'/>))}
      </div>
    </>
  );
}
export default Home
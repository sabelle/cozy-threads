import React, {useState} from 'react'
import './Home.css'
import ProductCard from './ProductCard.js'
import Navigation from './Navigation.js'
import {catalog} from './ProductInfo.js'

const Home = () => {
  const [cart, setCart] = useState(new Map())
  const onChange = (id, increment) => {
    const updatedCart = new Map(cart)
    if (updatedCart.has(id)) {
      let updatedQuantity = updatedCart.get(id) + increment;
      updatedCart.set(id, updatedQuantity)

      if (updatedQuantity <= 0) { // remove id from cart if quantity = 0
        updatedCart.delete(id)
      }
    } else { // cart doesn't have id yet
      if (increment == -1) {
        return
      }
      updatedCart.set(id, 1)
    }
    
    setCart(updatedCart)
    console.log('updated cart:', updatedCart)
  }

  return (
    <>
      <Navigation />
      <div className='Home-grid'>
        
        {catalog.map(product => (<ProductCard onChange={onChange} product={product} quantity={cart.get(product.id) ?? 0} className ='Card'/>))}

      </div>
    </>
  );
}
export default Home
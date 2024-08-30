import React from 'react'
import './Home.css'
import Cart from './Cart'
import ProductCard from './ProductCard.js'
import Navigation from './Navigation.js'
import {catalog} from './Catalog.js'

const Home = ({cart, onChange}) => {
  return (
    <>
      <Navigation />
      <div className='home-grid'>
        {catalog.map(product => (
          <ProductCard 
            onChange={onChange} 
            product={product} 
            quantity={cart[product.id] ? cart[product.id]['quantity']: 0} 
            price_id={product.price_id}
            className ='Card'/>))}
      </div>
    </>
  );
}
export default Home

// import React, {useState} from 'react';
import React from 'react';
import './Home.css';
import ProductCard from './ProductCard.js'
import {catalog} from './ProductInfo.js';

const Home = () => {
  // const [cart, setCart] = useState([])

  return (
    <>
      <div className='Home-grid'>
        
        {catalog.map(product => (<ProductCard product={product} className ='Card'/>))}

      </div>
    </>
  );
}
export default Home;
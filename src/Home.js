// import React, {useState} from 'react';
import React from 'react';
import './App.css';
import ProductCard from './ProductCard.js'
import {catalog} from './ProductInfo.js';

const Home = () => {
  // const [cart, setCart] = useState([])

  return (
    <>
      <div className='Card-list'>
        
        {catalog.map(product => (<ProductCard product={product} className ='Card'/>))}

      </div>
    </>
  );
}
export default Home;
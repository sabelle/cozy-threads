import React from 'react';
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import './ProductCard.css';

export const ProductCard = ({onChange, product, quantity, price_id}) => {
  return(
    <div className='card'>
      <div className='card-container'>
        <img src={product.image} alt='404' className='card-photo'/>
        <div className='card-info'>
          <h2 className='card-title'>{product.title}</h2>
          <h4 className='card-price'>${(product.price).toFixed(2)}</h4>
          <p className='card-description'>{product.description}</p>
          <div className='card-cart-row'>
            <button className='card-button' onClick={()=>onChange(product.id, -1, price_id)}> - </button>
              <h4 className='card-cart-quantity'>{quantity} </h4>
            <button className='card-button' onClick={()=>onChange(product.id, 1, price_id)}> + </button>
          </div>    
        </div>
      </div>
    </div>
  )
}

export const ProductDisplay = ({product, quantity, price}) => {
  return(
    <div className='display'>
      <div className='display-container'>
        <img src={product.image} alt='404' className='display-photo'/>
        <div className='display-info'>
          <p className='display-text'>{product.title} x{quantity}</p>
        </div>
      </div>
    </div>
  )
}
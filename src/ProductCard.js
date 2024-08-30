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
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <div className='card-cart-row'>
            <IconButton onClick={()=>onChange(product.id, -1, price_id)}> <RemoveIcon /> </IconButton>
              <> {quantity} </>
            <IconButton onClick={()=>onChange(product.id, 1, price_id)}> <AddIcon /> </IconButton>
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
          <p>{product.title} x{quantity}</p>
        </div>
      </div>
    </div>
  )
}
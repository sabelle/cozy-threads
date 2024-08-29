import React from 'react';
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import Cart from './Cart.js'
import './ProductCard.css';

const ProductCard = ({onChange, product, quantity, price_id}) => {
  return(
    <div className='Card'>
      <div className='Card-container'>
        <img src={product.image} alt='404' className='Card-photo'/>
        <div className='Card-info'>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <div className='Card-cart-row'>
            <IconButton onClick={()=>onChange(product.id, -1, price_id)}> <RemoveIcon /> </IconButton>
              <> {quantity} </>
            <IconButton onClick={()=>onChange(product.id, 1, price_id)}> <AddIcon /> </IconButton>
          </div>    
        </div>
      </div>
    </div>
  )
}

export default ProductCard;
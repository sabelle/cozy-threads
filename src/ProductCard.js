import React from 'react';
import IconButton from "@mui/material/IconButton"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
// import {sweater1, sweater2, sweater3, scarf1, scarf2} from './ProductInfo.js';
import './ProductCard.css';

const ProductCard = ({product}) => {
  return(
    <div className='Card'>
      <div className='container'>
        <img src={product.image} alt='404' className='Card-photo'/>
        <div className='Card-info'>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <div className='Card-cart-row'>
            <IconButton> <RemoveIcon /> </IconButton>
            <>counter</>
            <IconButton> <AddIcon /> </IconButton>
          </div>    
        </div>
      </div>
    </div>
  )
}

export default ProductCard;
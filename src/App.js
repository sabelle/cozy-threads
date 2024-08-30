import './App.css'
import Home from './Home.js'
import Cart from './Cart.js'
// import Navigation from './Navigation'
import React, {useState} from 'react'
import { Route, Routes } from 'react-router-dom';
import IconButton from "@mui/material/IconButton"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

// export const cartContext = React.createContext(new Map())
// cart structure::
// product_id: {
//   'quantity': #,
//   'price_id': 'price_xxxxx'
// }

function App () {
  const [cart, setCart] = useState({})
  const onChange = (id, increment, price_id) => { 
    const updatedCart = {...cart}
    if (id in updatedCart) { 
      let updatedQuantity = updatedCart[id]['quantity'] + increment;
      updatedCart[id]['quantity'] = updatedQuantity

      if (updatedQuantity <= 0) { // remove id from cart if quantity = 0
        delete updatedCart[id]
      }
    } else { // cart doesn't have id yet
      if (increment == -1) {
        return
      }
      updatedCart[id] = {'price_id': price_id, 
                         'quantity': 1}
    }
    
    setCart(updatedCart)
    // console.log('updated cart:', updatedCart)
  }
  return (
    <div className="app">
      {/* <cartContext.Provider value={{globalCart: globalCart, setGlobalCart: setGlobalCart}}> */}
      <Routes>
        <Route path="/" element={<Home cart={cart} onChange={onChange}/>} />
        <Route path="/home" element={<Home cart={cart} onChange={onChange}/>} />
        <Route path="/cart" element={<Cart cart={cart}/>} />
      </Routes>
      {/* </cartContext.Provider> */}
    </div>
  );
}

export default App;

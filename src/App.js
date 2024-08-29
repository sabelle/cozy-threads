import './App.css'
import Home from './Home.js'
import {Cart} from './Cart.js'
// import Navigation from './Navigation'
import React, {useState} from 'react'
import { Route, Routes } from 'react-router-dom';
import IconButton from "@mui/material/IconButton"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

// export const cartContext = React.createContext(new Map())

function App () {
  // const [globalCart, setGlobalCart] = useState(new Map())

  return (
    <div className="App">
      {/* <cartContext.Provider value={{globalCart: globalCart, setGlobalCart: setGlobalCart}}> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      {/* </cartContext.Provider> */}
    </div>
  );
}

export default App;

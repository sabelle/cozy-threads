import './App.css'
import Home from './Home.js'
import Cart from './Cart.js'
import Navigation from './Navigation'
import { Route, Routes } from 'react-router-dom';
import IconButton from "@mui/material/IconButton"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </div>
  );
}

export default App;

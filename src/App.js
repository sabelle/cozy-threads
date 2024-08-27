import './App.css';
import Home from './Home.js';
import Checkout from './Checkout.js';
import IconButton from "@mui/material/IconButton"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function App() {
  return (
    <div className="App">
      <Checkout />
      <Home />
    </div>
  );
}

export default App;

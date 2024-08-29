import React, { useState, useEffect } from "react"
import axios from "axios"
import IconButton from "@mui/material/IconButton"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'


const Checkout = (cart) => {  //cart key: id, val: [quantity, price id]
  let finalCart = cart['cart']['cart']
  if (Object.keys(finalCart).length == 0) {
    return (
      <div>
        <Message message={'there is nothing in your cart!'} />
      </div>
    )
  }
  


  // product_id: {
  //   'quantity': #,
  //   'price_id': 'price_xxxxx'
  // }
  
  
  const jsonCart = JSON.stringify(finalCart)
  console.log('FINAL CART::', finalCart)

  return (
    <div>
      <form action="/create-checkout-session" method="POST" >
        <input type='hidden' id= 'hiddenCart' name='cartPayload' value={jsonCart} /> 
        <IconButton type="submit">
          <ShoppingCartIcon />
        </IconButton>
      </form>
  </div>
  )
   
}

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

const CheckoutAction = (cart) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <Checkout cart={cart}/>
  );
}
export default Checkout;
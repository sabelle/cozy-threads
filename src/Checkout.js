import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Checkout = () => (
  <div>
      <form action="/create-checkout-session" method="POST">
        <IconButton type="submit">
            <ShoppingCartIcon />
        </IconButton>
      </form>
  </div>
  
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

const CheckoutAction = () => {
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
    <Checkout />
  );
}
export default Checkout;
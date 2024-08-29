import React, { useState, useEffect } from "react"
import axios from "axios"
import IconButton from "@mui/material/IconButton"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

// const CLIENT = 'http://localhost:3000';
// const Checkout = (e) => {
//   // axios.post( url=`${SERVER}/create-checkout-session`)
//   // axios({
//   //   method: 'post'
//   //   url: `${SERVER}/create-checkout-session`
//   // })
//   const url = `${CLIENT}/create-checkout-session`
//   const request = () => {
//     axios
//       .post(url)
//       .then(()=>{console.log('call to', url)})
//   }

//   return (
//     <div>
//       <IconButton onClick={request}>
//         <ShoppingCartIcon />
//     </IconButton>
//     </div>
//   )

  
// };
// const Checkout = (cart, catalog) => (

const Checkout = (cart) => {  //cart key: id, val: [quantity, price id]
//   if (globalCart.length == 0) {
//     < Message message={'there is nothing in your cart!'} />
// }
  
  const formData = new FormData();
  // const cartObj = Object.fromEntries(cart);
  // formData.append("cart", cart)
  console.log('PREJSON CART', cart["cart"])
  const temp = Object.values(cart["cart"])
          // key: 1, value: [2, 'price_idxx']
  console.log('CART VALS', temp)
  const finalCart = []
  if (Object.keys(temp).length > 0) {
    const trueVals = Object.entries(temp)[0][1]
    console.log('this is a map', trueVals );
    const tempMap = new Map(trueVals)
    console.log('temp map', tempMap)
    
    
    tempMap.forEach((values, keys) => {
      let element = {}
      console.log('iterating. curr values:', values)
      element.price_id = values[1]
      element.quantity = values[0]
      console.log('    element:', element)
      finalCart.push(element)
      
    });
    console.log('THE FINAL CART', finalCart);
  }
  
  

  const jsonCart = JSON.stringify(finalCart)
  // const objFromMap = Object.fromEntries(cart["cart"]);
  // const jsonCart = JSON.stringify(objFromMap)
  // console.log('JSON CART', jsonCart)
  //body={formData}
  return (
    <div>
      <form action="/create-checkout-session" method="POST" >
        <input type='hidden' id= 'hiddenCart' name='cartPayload' value={jsonCart} /> 
        {/* <input type="hidden" id */}
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
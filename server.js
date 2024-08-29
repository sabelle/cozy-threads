// This test secret API key is a placeholder. Don't include personal details in requests with this key.
// To see your test secret API key embedded in code samples, sign in to your Stripe account.
// You can also find your test secret API key at https://dashboard.stripe.com/test/apikeys.
require('dotenv').config();

const stripe = require('stripe')(process.env.REACT_APP_STRIPE_KEY);
const express = require('express');
const app = express();
app.use(express.static('public'));
const bodyParser = require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(express.json());
app.use(express.urlencoded());


const SERVER = 'http://localhost:4242';
const CLIENT = 'http://localhost:3000';

// create prices based on catalog
// const price = await stripe.prices.create({
//   currency: 'usd',
//   unit_amount: 100,
//   product_data: {
//     name: 'Gold Plan',
//   },
// });

app.post('/create-checkout-session', async (req, res) => {
  // console.log('JSON REQ BODY', JSON.stringify(req.body));
  console.log('REQ BODY', req.body)
  console.log('AAAA', req.body['cartPayload'])
  const payload = JSON.parse(req.body['cartPayload']) //list of objs
  
  const line_items = []
  payload.forEach(function(item) { // each item(obj) format: {'price_id':'price_1PSxxx', 'quantity':2}
    let element = {}
    element.price = item.price_id
    element.quantity = item.quantity
    element.adjustable_quantity = {enabled: true}
    line_items.push(element)
  })

  // for (let i = 0; i < payload[0].length; i++) {
  //   let obj = payload[0][i]  
  //   console.log('line41 obj=', obj)
  //   element.price = obj.price_id
  //   element.quantity = obj.quantity
  //   element.adjustable_quantity = {enabled: true}
  //   cart.push(element)
  //   // console.log('line47')
  // }
  
  console.log('-----CART------\n', line_items)
  // let line_items = [
  //   {
  //     // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
  //     price: 'price_1PsJD902iTNqZvDhnIKYyU9f', //cream sweater
  //     quantity: 1,
  //     adjustable_quantity: {
  //       enabled: true,
  //     },
  //   },
  //   {
  //     price: 'price_1PsJId02iTNqZvDhc3kYp2aq', // red scarf
  //     quantity: 1,
  //     adjustable_quantity: {
  //       enabled: true,
  //     },
  //   },
  // ]
  const session = await stripe.checkout.sessions.create({
    line_items,
    
    mode: 'payment',
    success_url: `${CLIENT}/`,
    cancel_url: `${CLIENT}/`,
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));
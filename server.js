// This test secret API key is a placeholder. Don't include personal details in requests with this key.
// To see your test secret API key embedded in code samples, sign in to your Stripe account.
// You can also find your test secret API key at https://dashboard.stripe.com/test/apikeys.
require('dotenv').config();

const stripe = require('stripe')(process.env.REACT_APP_STRIPE_KEY);
const express = require('express');
const app = express();
app.use(express.static('public'));

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
  let line_items = [
    {
      // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
      price: 'price_1PsJD902iTNqZvDhnIKYyU9f', //cream sweater
      quantity: 1,
      adjustable_quantity: {
        enabled: true,
      },
    },
    {
      price: 'price_1PsJId02iTNqZvDhc3kYp2aq', // red scarf
      quantity: 1,
      adjustable_quantity: {
        enabled: true,
      },
    },
  ]
  const session = await stripe.checkout.sessions.create({
    line_items,
    
    mode: 'payment',
    success_url: `${CLIENT}/home`,
    cancel_url: `${CLIENT}/cart`,
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));
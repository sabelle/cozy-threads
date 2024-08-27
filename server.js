// This test secret API key is a placeholder. Don't include personal details in requests with this key.
// To see your test secret API key embedded in code samples, sign in to your Stripe account.
// You can also find your test secret API key at https://dashboard.stripe.com/test/apikeys.
const stripe = require('stripe')($STRIPE_KEY);
const express = require('express');
const app = express();
app.use(express.static('public'));

const SERVER = 'http://localhost:4242';
const CLIENT = 'http://localhost:3000';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1PsJD902iTNqZvDhnIKYyU9f', //sweater
        quantity: 1,
      },
      {
        price: 'price_1PsJId02iTNqZvDhc3kYp2aq', //scarf
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${CLIENT}/`,
    cancel_url: `${CLIENT}/`,
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));
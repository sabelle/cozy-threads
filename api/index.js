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

// const CLIENT = ; // use when running locally
const CLIENT = process.env.VERCEL_URL || 'http://localhost:3000';

app.post('/create-checkout-session', async (req, res) => {
  const payload = JSON.parse(req.body['cartPayload']) //list of objs
  console.log('PARSED PAYLOAD', payload) // format '1': { price_id: 'price_xx', quantity: # },
  const line_items = []
  for (const key of Object.keys(payload)) {
    // console.log(key + " -> " + payload[key]['price_id'])
    let val = payload[key]
    let element = {}
    element.price = val['price_id']
    element.quantity = val['quantity']
    element.adjustable_quantity = {enabled: true}

    line_items.push(element)
}

  const session = await stripe.checkout.sessions.create({
    line_items,
    
    mode: 'payment',
    success_url: 'https://cozy-threads-seven.vercel.app/',
    cancel_url: 'https://cozy-threads-seven.vercel.app/',
    // success_url: `${CLIENT}/`,
    // cancel_url: `${CLIENT}/`,
  });

  res.redirect(303, session.url);
});

const PORT = process.env.PORT || 4242;
app.listen(PORT, () => console.log('Running on port', PORT));
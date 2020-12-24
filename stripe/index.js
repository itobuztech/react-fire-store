// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.

const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys
const Stripe = require('stripe');
const stripe = Stripe('sk_test_51I1oJsKm7cLBUuXQzT0TxhgLfNEnJreWQKXQ6m2MP0cbICcVtCMndVRfzOZ0e19m5gmIktWaZp3TsPwGdPbkiZqh00Dv48cT3B');
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/secret', async (req, res) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: 'inr',
    // Verify your integration in this guide by including this parameter
    metadata: {integration_check: 'accept_a_payment'},
  });
  res.json({client_secret: paymentIntent.client_secret});
});



app.listen(4242, () => console.log(`Listening on port ${4242}!`));

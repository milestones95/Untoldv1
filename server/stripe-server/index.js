const express = require("express");
const app = express();
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Use JSON parser for all non-webhook routes
app.use((req, res, next) => {
  if (req.originalUrl === "/webhook") {
    next();
  } else {
    bodyParser.json()(req, res, next);
  }
});

app.post('/create-checkout-session', async (req, res) => {
  const {request} = req;
  const account_id = req.body.account_id;
  console.log('request: ' + req.body.account_id);
  var price =
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Story',
          },
          unit_amount: 1300,
        },
        quantity: 1,
      },
    ],
    payment_intent_data: {
    application_fee_amount: 123,
    transfer_data: {
      destination: account_id,
    },
  },
    mode: 'payment',
    success_url: 'http://localhost:3000/success.html',
    cancel_url: 'http://localhost:3000/cancel.html',
  });
res.send({
  sessionId: session.id,
});});

app.post("/stripe/createAccount", cors(), async (req, res) => {
  try {
      console.log(req);
      const account = await stripe.accounts.create({
        type: 'express',
        country: 'US',
        email: 'mileswtucker95@gmail.com',
        capabilities: {
          card_payments: {requested: true},
          transfers: {requested: true},
        },
      });

      const accountLink = await stripe.accountLinks.create({
        account: account.id,
        refresh_url: "http://localhost:8080/stripe/createAccount",
        return_url: 'http://localhost:3000/signup',
        type: 'account_onboarding',
      });
      console.log("account: " + JSON.stringify(account));
      console.log("accountlinks: " + JSON.stringify(accountLink));
      console.log("account link: " + accountLink.url);
    // console.log("stripe-routes.js 19 | subscription", subscription);
    res.json({
      url: accountLink.url,
      success: true,
      account_id: account.id,
    });
  } catch (error) {
    console.log("error", error);
    res.json({
      message: "creation failed Failed",
      success: false,
    });
  }
});

app.post("/purchase", cors(), async (req, res) => {
  try {
    console.log("buying now");
      const paymentIntent = await stripe.paymentIntents.create({
        payment_method_types: ['card'],
        amount: 1000,
        currency: 'usd',
        application_fee_amount: 123,
        transfer_data: {
          destination: 'acct_1J25jtRIZFHrDAIK',
        },
      });

      console.log("paymentIntent: " + JSON.stringify(paymentIntent));

  } catch (error) {
    console.log("error", error);
    res.json({
      message: "payment intent failed",
      success: false,
    });
  }
});

const endpointSecret = 'whsec_IoDUkEH2eRMlLnkbFsmle0zBLFNVJ3g4';

app.post('/webhook', bodyParser.raw({type: 'application/json'}), (request, response) => {
  const sig = request.headers['stripe-signature'];

  let event;

  // Verify webhook signature and extract the event.
  // See https://stripe.com/docs/webhooks/signatures for more information.
  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err) {
    return response.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    handleCompletedCheckoutSession(session);
  }

  response.json({received: true});
});

const handleCompletedCheckoutSession = (session) => {
  // Fulfill the purchase.
  console.log(JSON.stringify(session));
}

//Email from sendgrid



app.listen(process.env.PORT || 8080, () => {
  console.log("Server started...");
});

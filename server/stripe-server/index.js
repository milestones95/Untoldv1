const express = require("express");
const app = express();
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post('/create-checkout-session', async (req, res) => {
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
    mode: 'payment',
    success_url: 'http://localhost:3000/success.html',
    cancel_url: 'http://localhost:3000/cancel.html',
  });
res.send({
  sessionId: session.id,
});});

app.post("/stripe/cancel", cors(), async (req, res) => {
  try {
    console.log(req);
    const subscription = await stripe.subscriptions.del('sub_JYyzvNrFOP1gA2');
    console.log("stripe-routes.js 19 | subscription", subscription);
    res.json({
      message: "subscription Successful",
      success: true,
    });
  } catch (error) {
    console.log("stripe-routes.js 17 | error", error);
    res.json({
      message: "subscription Failed",
      success: false,
    });
  }
});

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
    });
  } catch (error) {
    console.log("error", error);
    res.json({
      message: "creation failed Failed",
      success: false,
    });
  }
});

app.post("/stripe/termsOfService", cors(), async (req, res) => {
  console.log("helllo");
  try {
      console.log(req);
      const termsOfServiceInfo = await stripe.accounts.update(
        '{{acct_1J1wrLRFx5K5Se1u}}',
        {
          tos_acceptance: {
            date: Math.floor(Date.now() / 1000),
            ip: request.connection.remoteAddress, // Assumes you're not using a proxy
          },
        }
      );

      console.log("accepted: " + JSON.stringify(termsOfServiceInfo));
    // const subscription = await stripe.subscriptions.del('sub_JYyzvNrFOP1gA2');
    // // console.log("stripe-routes.js 19 | subscription", subscription);
    // res.json({
    //   message: "account creation Successful",
    //   success: true,
    // });
  } catch (error) {
    console.log("error", error);
    res.json({
      message: "agreement to terms of service failed",
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

app.listen(process.env.PORT || 8080, () => {
  console.log("Server started...");
});

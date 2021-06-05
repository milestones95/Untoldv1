const express = require("express");
const app = express();
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post("/stripe/charge", cors(), async (req, res) => {
  // console.log("stripe-routes.js 9 | route reached", req.body);
  let { amount, id } = req.body;
  // console.log("stripe-routes.js 10 | amount and id", amount, id);
  try {
    const subscription = await stripe.subscriptions.create({
      customer: 'cus_J5gaqIF0oMNxhj',
      items: [
        {price: 'price_1IvSu0CWDNwd4dEqF80PUKpJ'},
      ],
    });
    console.log("stripe-routes.js 19 | subscription", subscription);
    res.json({
      message: "subscription Successful",
      success: true,
      customer: subscription.customer,
      subscription_id: subscription.id
    });
  } catch (error) {
    console.log("stripe-routes.js 17 | error", error);
    res.json({
      message: "subscription Failed",
      success: false,
    });
  }
});

app.post("/stripe/cancel", cors(), async (req, res) => {
  try {
    console.log(req);
    const subscription = await stripe.subscriptions.del('sub_JZ2NPhAgNXoO0T');
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

app.listen(process.env.PORT || 8080, () => {
  console.log("Server started...");
});

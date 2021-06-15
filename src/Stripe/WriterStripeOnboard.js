import React, { useEffect, useState } from "react";
import { Route, Redirect } from 'react-router-dom'
import "../css/stripe.css"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

export const WriterStripeOnboard = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [link, linkSet] = React.useState([]);


  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log("Stripe 23 | token generated!", paymentMethod);
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          "http://localhost:8080/stripe/charge",
          {
            amount: 999,
            id: id,
          }
        );

        console.log("Stripe 35 | data", response.data);
        if (response.data.success) {

          console.log("CheckoutForm.js 25 | subscription successful!");
        }
      } catch (error) {
        console.log("CheckoutForm.js 28 | ", error);
      }
    } else {
      console.log(error.message);
    }
  };

  const handleCancel = async (event) => {
    event.preventDefault();
    try {
    const response = await axios.post(
      "http://localhost:8080/stripe/cancel",
      {
        id: 'sub_JYyzvNrFOP1gA2',
      }
    );

        console.log("Stripe 35 | data", response.data.success);
      if (response.data.success) {
        console.log('response: ' + response.data);
        console.log("CheckoutForm.js 25 | subscription successfully canceled!");
      }
    }catch (error) {
        console.log("CheckoutForm.js 28 | ", error);
      }
  };

  const createAccount = async (event) => {
    event.preventDefault();
    try {
    const response = await axios.post(
      "http://localhost:8080/stripe/createAccount",
      {
        type: 'express'
      }
    );

    console.log('response:' + JSON.stringify(response));

        console.log("account creation: ", response.data.success);
        if(response.data.url)
        {
          // console.log("hello redirect");
          linkSet(response.data.url);
          window.location.href=response.data.url;

        }

    }catch (error) {
        console.log("CheckoutForm.js 28 | ", error);
      }
  };

  return (
    <div>
      {/* <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
        <CardElement />
        <button>Pay</button>
      </form>
      <form onSubmit={handleCancel} style={{ maxWidth: 400 }}>
        <button>Cancel</button>
      </form> */}
      {/* <a href="#" class="stripe-connect"><span>Connect with</span></a>
        <br />
        <br /> */}
        <a href="#" class="stripe-connect slate" onClick={createAccount}><span>Connect with</span></a>
        <br />
        <br />
        {/* <!-- For use on dark backgrounds. Please remove the <div> tag from your implementation. --> */}
        {/* <div><a href="#" class="stripe-connect white"><span>Connect with</span></a></div> */}
      {/* <form onSubmit={createAccount} style={{ maxWidth: 400 }}>
        <button>Create Account</button>
      </form> */}
    </div>
  );
};
